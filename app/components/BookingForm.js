"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  CalendarDays,
  User,
  Sparkles,
  CalendarCheck,
  CalendarPlus,
  PartyPopper,
} from "lucide-react";
import { serviceCategories, timeSlots, business } from "../lib/data";
import { iconMap } from "../lib/icons";

const steps = [
  { id: 1, label: "Servicio", icon: Sparkles },
  { id: 2, label: "Fecha y hora", icon: CalendarDays },
  { id: 3, label: "Tus datos", icon: User },
  { id: 4, label: "Confirmar", icon: CalendarCheck },
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [minDate, setMinDate] = useState("");
  const [data, setData] = useState({
    category: "",
    service: "",
    price: "",
    duration: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverSaved, setServerSaved] = useState(false);
  const [serverEventLink, setServerEventLink] = useState(null);

  // Fecha mínima = hoy, y preselección desde ?servicio=
  useEffect(() => {
    const today = new Date();
    const iso = today.toISOString().split("T")[0];
    setMinDate(iso);

    const params = new URLSearchParams(window.location.search);
    const pre = params.get("servicio");
    if (!pre) return;

    const cat = serviceCategories.find(
      (c) => c.name.toLowerCase() === pre.toLowerCase()
    );
    if (cat) {
      setData((d) => ({ ...d, category: cat.id }));
      return;
    }
    for (const c of serviceCategories) {
      const item = c.items.find(
        (it) => it.name.toLowerCase() === pre.toLowerCase()
      );
      if (item) {
        setData((d) => ({
          ...d,
          category: c.id,
          service: item.name,
          price: item.price,
          duration: item.duration,
        }));
        return;
      }
    }
    setData((d) => ({ ...d, notes: `Me interesa: ${pre}` }));
  }, []);

  const activeCategory = serviceCategories.find((c) => c.id === data.category);

  const set = (patch) => setData((d) => ({ ...d, ...patch }));

  const validateStep = () => {
    const e = {};
    if (step === 1) {
      if (!data.category) e.category = "Elige una categoría";
      if (!data.service) e.service = "Elige un servicio";
    }
    if (step === 2) {
      if (!data.date) e.date = "Selecciona una fecha";
      if (!data.time) e.time = "Selecciona una hora";
    }
    if (step === 3) {
      if (!data.name.trim()) e.name = "Ingresa tu nombre";
      if (!/^[0-9+\s()-]{7,}$/.test(data.phone)) e.phone = "Ingresa un teléfono válido";
      if (data.address.trim().length < 6)
        e.address = "Ingresa la dirección del servicio";
      if (data.email && !/^\S+@\S+\.\S+$/.test(data.email))
        e.email = "Correo no válido";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(4, s + 1));
  };
  const back = () => setStep((s) => Math.max(1, s - 1));

  const confirm = async () => {
    setSending(true);
    try {
      const res = await fetch("/api/reservar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (json?.eventLink) setServerEventLink(json.eventLink);
      if (json?.configured && !json?.calendarError) setServerSaved(true);
    } catch {
      // No bloqueamos la confirmación aunque falle el backend.
    } finally {
      setSending(false);
      setDone(true);
    }
  };

  const prettyDate = data.date
    ? new Date(data.date + "T00:00:00").toLocaleDateString("es-CO", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  const waMsg = encodeURIComponent(
    `¡Hola ${business.name}! Quiero confirmar mi cita a domicilio:\n• Servicio: ${data.service}\n• Fecha: ${prettyDate}\n• Hora: ${data.time}\n• Nombre: ${data.name}\n• Dirección: ${data.address}`
  );

  const googleCalendarUrl = buildGoogleCalendarUrl(data);

  // ---------- Pantalla de éxito ----------
  if (done) {
    return (
      <div className="card-soft p-8 sm:p-12 text-center max-w-2xl mx-auto">
        <div className="grid place-items-center h-20 w-20 rounded-full bg-green-100 text-green-600 mx-auto">
          <PartyPopper size={38} />
        </div>
        <h2 className="mt-6 text-3xl">¡Tu cita fue registrada!</h2>
        <p className="mt-3 text-muted">
          Te enviaremos un mensaje para confirmar la disponibilidad. Estos son tus
          datos:
        </p>
        {serverSaved ? (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-2 text-sm text-green-800">
            <Check size={16} className="text-green-600" />
            Guardada automáticamente en la agenda de {business.name}
          </div>
        ) : null}
        <div className="mt-8 text-left bg-cream rounded-2xl p-6 space-y-3">
          <Row label="Servicio" value={data.service} />
          {data.price ? <Row label="Valor" value={data.price} /> : null}
          <Row label="Fecha" value={prettyDate} />
          <Row label="Hora" value={data.time} />
          <Row label="Nombre" value={data.name} />
          <Row label="Teléfono" value={data.phone} />
          <Row label="Dirección" value={data.address} />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <CalendarPlus size={18} />
            Agregar a Google Calendar
          </a>
          <a
            href={`https://wa.me/${business.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold"
          >
            Confirmar por WhatsApp
          </a>
          <Link href="/" className="btn btn-outline">
            Volver al inicio
          </Link>
        </div>
        <p className="text-xs text-muted mt-4">
          Al tocar “Agregar a Google Calendar” se abrirá el evento con la fecha,
          hora y servicio para guardarlo en tu calendario.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Pasos */}
      <ol className="flex items-center justify-between mb-10">
        {steps.map((s, i) => {
          const StepIcon = s.icon;
          const active = step === s.id;
          const complete = step > s.id;
          return (
            <li key={s.id} className="flex-1 flex items-center last:flex-none">
              <div className="flex flex-col items-center gap-2">
                <span
                  className={`grid place-items-center h-11 w-11 rounded-full border-2 transition-colors ${
                    complete
                      ? "bg-plum border-plum text-cream"
                      : active
                        ? "bg-rose border-rose text-white"
                        : "bg-white border-plum/15 text-muted"
                  }`}
                >
                  {complete ? <Check size={18} /> : <StepIcon size={18} />}
                </span>
                <span
                  className={`text-xs font-medium hidden sm:block ${
                    active ? "text-rose-dark" : "text-muted"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 ? (
                <span
                  className={`flex-1 h-0.5 mx-2 -mt-6 ${
                    step > s.id ? "bg-plum" : "bg-plum/15"
                  }`}
                />
              ) : null}
            </li>
          );
        })}
      </ol>

      <div className="card-soft p-7 sm:p-9">
        {/* PASO 1 — Servicio */}
        {step === 1 ? (
          <div>
            <h2 className="text-2xl mb-1">¿Qué servicio deseas?</h2>
            <p className="text-sm text-muted mb-6">Elige una categoría y luego el servicio.</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {serviceCategories.map((c) => {
                const Icon = iconMap[c.icon];
                const sel = data.category === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => set({ category: c.id, service: "", price: "", duration: "" })}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border transition-all ${
                      sel
                        ? "bg-plum text-cream border-plum"
                        : "bg-white text-plum border-plum/15 hover:border-rose"
                    }`}
                  >
                    {Icon ? <Icon size={16} /> : null}
                    {c.name}
                  </button>
                );
              })}
            </div>
            {errors.category ? (
              <p className="text-xs text-rose-dark mb-4">{errors.category}</p>
            ) : null}

            {activeCategory ? (
              <div className="grid sm:grid-cols-2 gap-3">
                {activeCategory.items.map((it) => {
                  const sel = data.service === it.name;
                  return (
                    <button
                      key={it.name}
                      type="button"
                      onClick={() =>
                        set({ service: it.name, price: it.price, duration: it.duration })
                      }
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        sel
                          ? "border-rose bg-blush/50 ring-2 ring-rose/20"
                          : "border-plum/10 hover:border-rose/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-plum">{it.name}</span>
                        {sel ? <Check size={18} className="text-rose-dark" /> : null}
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-muted">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {it.duration}
                        </span>
                        <span className="font-semibold text-rose-dark">{it.price}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-muted italic">
                Selecciona una categoría para ver los servicios disponibles.
              </p>
            )}
            {errors.service ? (
              <p className="text-xs text-rose-dark mt-4">{errors.service}</p>
            ) : null}
          </div>
        ) : null}

        {/* PASO 2 — Fecha y hora */}
        {step === 2 ? (
          <div>
            <h2 className="text-2xl mb-1">Elige fecha y hora</h2>
            <p className="text-sm text-muted mb-6">
              Selecciona el día y el horario que más te convenga.
            </p>

            <label className="block mb-6">
              <span className="block text-sm font-medium text-plum mb-2">Fecha</span>
              <input
                type="date"
                min={minDate}
                value={data.date}
                onChange={(e) => set({ date: e.target.value })}
                className={`w-full sm:w-64 rounded-xl border bg-cream/60 px-4 py-3 text-sm outline-none focus:border-rose focus:ring-2 focus:ring-rose/20 ${
                  errors.date ? "border-rose-dark" : "border-plum/15"
                }`}
              />
              {errors.date ? (
                <span className="block text-xs text-rose-dark mt-1.5">{errors.date}</span>
              ) : null}
            </label>

            <span className="block text-sm font-medium text-plum mb-2">Hora disponible</span>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
              {timeSlots.map((t) => {
                const sel = data.time === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => set({ time: t })}
                    className={`py-2.5 rounded-xl text-sm border transition-all ${
                      sel
                        ? "bg-plum text-cream border-plum"
                        : "bg-white text-plum border-plum/15 hover:border-rose"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
            {errors.time ? (
              <p className="text-xs text-rose-dark mt-3">{errors.time}</p>
            ) : null}
          </div>
        ) : null}

        {/* PASO 3 — Datos */}
        {step === 3 ? (
          <div>
            <h2 className="text-2xl mb-1">Tus datos de contacto</h2>
            <p className="text-sm text-muted mb-6">
              Los necesitamos para confirmar tu cita.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="block text-sm font-medium text-plum mb-2">Nombre completo *</span>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => set({ name: e.target.value })}
                  placeholder="Nombre y apellido"
                  className={inputCls(errors.name)}
                />
                {errors.name ? <Err msg={errors.name} /> : null}
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-plum mb-2">Teléfono / WhatsApp *</span>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => set({ phone: e.target.value })}
                  placeholder="300 123 4567"
                  className={inputCls(errors.phone)}
                />
                {errors.phone ? <Err msg={errors.phone} /> : null}
              </label>
            </div>
            <label className="block mt-5">
              <span className="block text-sm font-medium text-plum mb-2">
                Dirección para el servicio a domicilio *
              </span>
              <input
                type="text"
                value={data.address}
                onChange={(e) => set({ address: e.target.value })}
                placeholder="Ej: Cra. 15 #85-20, apto 302, Chapinero"
                className={inputCls(errors.address)}
              />
              {errors.address ? <Err msg={errors.address} /> : null}
            </label>
            <label className="block mt-5">
              <span className="block text-sm font-medium text-plum mb-2">Correo (opcional)</span>
              <input
                type="email"
                value={data.email}
                onChange={(e) => set({ email: e.target.value })}
                placeholder="tucorreo@email.com"
                className={inputCls(errors.email)}
              />
              {errors.email ? <Err msg={errors.email} /> : null}
            </label>
            <label className="block mt-5">
              <span className="block text-sm font-medium text-plum mb-2">
                Notas para el equipo (opcional)
              </span>
              <textarea
                rows={3}
                value={data.notes}
                onChange={(e) => set({ notes: e.target.value })}
                placeholder="Cuéntanos preferencias, alergias o detalles…"
                className={inputCls(false) + " resize-none"}
              />
            </label>
          </div>
        ) : null}

        {/* PASO 4 — Confirmar */}
        {step === 4 ? (
          <div>
            <h2 className="text-2xl mb-1">Revisa tu reserva</h2>
            <p className="text-sm text-muted mb-6">
              Confirma que todo esté correcto antes de enviar.
            </p>
            <div className="bg-cream rounded-2xl p-6 space-y-3">
              <Row label="Servicio" value={data.service} />
              {data.price ? <Row label="Valor aprox." value={data.price} /> : null}
              {data.duration ? <Row label="Duración" value={data.duration} /> : null}
              <Row label="Fecha" value={prettyDate} />
              <Row label="Hora" value={data.time} />
              <div className="h-px bg-plum/10 my-1" />
              <Row label="Nombre" value={data.name} />
              <Row label="Teléfono" value={data.phone} />
              <Row label="Dirección" value={data.address} />
              {data.email ? <Row label="Correo" value={data.email} /> : null}
              {data.notes ? <Row label="Notas" value={data.notes} /> : null}
            </div>
            <p className="text-xs text-muted mt-4">
              Al confirmar, registramos tu solicitud. Te contactaremos para
              confirmar la disponibilidad final.
            </p>
          </div>
        ) : null}

        {/* Navegación */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-plum/10">
          <button
            type="button"
            onClick={back}
            disabled={step === 1}
            className={`btn btn-ghost ${step === 1 ? "opacity-0 pointer-events-none" : ""}`}
          >
            <ChevronLeft size={18} />
            Atrás
          </button>
          {step < 4 ? (
            <button type="button" onClick={next} className="btn btn-primary">
              Continuar
              <ChevronRight size={18} />
            </button>
          ) : (
            <button
              type="button"
              onClick={confirm}
              disabled={sending}
              className="btn btn-gold disabled:opacity-70"
            >
              <CalendarCheck size={18} />
              {sending ? "Enviando…" : "Confirmar cita"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-muted">{label}</span>
      <span className="font-medium text-plum text-right">{value}</span>
    </div>
  );
}

function Err({ msg }) {
  return <span className="block text-xs text-rose-dark mt-1.5">{msg}</span>;
}

function inputCls(error) {
  return `w-full rounded-xl border bg-cream/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-rose focus:ring-2 focus:ring-rose/20 ${
    error ? "border-rose-dark" : "border-plum/15"
  }`;
}

// ---- Construye el enlace para crear el evento en Google Calendar ----
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

function buildGoogleCalendarUrl(data) {
  if (!data.date || !data.time) return "#";
  const [Y, Mo, Da] = data.date.split("-").map(Number);
  const { h, min } = parseTime(data.time);
  const total = h * 60 + min + parseDuration(data.duration);
  const eh = Math.floor(total / 60) % 24;
  const em = total % 60;
  const start = `${Y}${pad(Mo)}${pad(Da)}T${pad(h)}${pad(min)}00`;
  const end = `${Y}${pad(Mo)}${pad(Da)}T${pad(eh)}${pad(em)}00`;

  const title = `${data.service} · ${business.name}`;
  const details =
    `Cita a domicilio con ${business.full}.\n` +
    `Servicio: ${data.service}` +
    (data.price ? ` (${data.price})` : "") +
    `\nCliente: ${data.name} — Tel: ${data.phone}` +
    (data.email ? `\nCorreo: ${data.email}` : "") +
    (data.notes ? `\nNotas: ${data.notes}` : "");
  const location = data.address
    ? `${data.address}, Bogotá D.C.`
    : `${business.address}, ${business.city}`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${start}/${end}`,
    details,
    location,
    ctz: "America/Bogota",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
