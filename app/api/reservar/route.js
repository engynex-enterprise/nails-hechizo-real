import { JWT } from "google-auth-library";
import { business } from "../../lib/data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ---- utilidades de fecha/hora ----
const pad = (n) => String(n).padStart(2, "0");

function parseTime(t = "") {
  const m = t.match(/(\d+):(\d+)\s*(a\.?\s?m\.?|p\.?\s?m\.?)/i);
  if (!m) return { h: 9, min: 0 };
  let h = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  const isPm = /p/i.test(m[3]);
  if (isPm && h !== 12) h += 12;
  if (!isPm && h === 12) h = 0;
  return { h, min };
}

function parseDuration(d = "") {
  const m = d.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 60;
}

function buildDateTimes(data) {
  const { h, min } = parseTime(data.time);
  const total = h * 60 + min + parseDuration(data.duration);
  const eh = Math.floor(total / 60) % 24;
  const em = total % 60;
  const start = `${data.date}T${pad(h)}:${pad(min)}:00`;
  const end = `${data.date}T${pad(eh)}:${pad(em)}:00`;
  return { start, end };
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  // Validación mínima en servidor
  if (!data?.service || !data?.date || !data?.time || !data?.name) {
    return Response.json(
      { ok: false, error: "Faltan datos de la cita" },
      { status: 422 }
    );
  }

  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  // Si aún no hay credenciales, respondemos OK igual (el front muestra el
  // botón "Agregar a Google Calendar" como respaldo). Así el sitio funciona
  // desde el primer día, sin bloquear reservas.
  if (!clientEmail || !privateKey || !calendarId) {
    return Response.json({ ok: true, configured: false });
  }

  try {
    const auth = new JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/calendar.events"],
    });
    const { token } = await auth.getAccessToken();

    const { start, end } = buildDateTimes(data);
    const location = data.address
      ? `${data.address}, Bogotá D.C.`
      : `${business.address}, ${business.city}`;

    const description =
      `Cita a domicilio agendada desde la web.\n` +
      `Servicio: ${data.service}` +
      (data.price ? ` (${data.price})` : "") +
      `\nCliente: ${data.name}\nTeléfono: ${data.phone || "-"}` +
      (data.email ? `\nCorreo: ${data.email}` : "") +
      (data.notes ? `\nNotas: ${data.notes}` : "");

    const event = {
      summary: `${data.service} — ${data.name}`,
      description,
      location,
      start: { dateTime: start, timeZone: "America/Bogota" },
      end: { dateTime: end, timeZone: "America/Bogota" },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "popup", minutes: 120 },
          { method: "popup", minutes: 1440 },
        ],
      },
    };

    const res = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        calendarId
      )}/events`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      }
    );

    if (!res.ok) {
      const detail = await res.text();
      console.error("Google Calendar error:", res.status, detail);
      // No bloqueamos la reserva por un fallo del calendario.
      return Response.json({ ok: true, configured: true, calendarError: true });
    }

    const created = await res.json();
    return Response.json({
      ok: true,
      configured: true,
      eventLink: created.htmlLink || null,
    });
  } catch (err) {
    console.error("Error creando evento:", err);
    return Response.json({ ok: true, configured: true, calendarError: true });
  }
}
