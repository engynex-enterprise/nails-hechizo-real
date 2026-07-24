import { Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";
import BookingForm from "../components/BookingForm";
import { business } from "../lib/data";

export const metadata = {
  title: "Reservar cita",
  description:
    "Agenda tu cita a domicilio en Bogotá con Nails Hechizo Real. Elige tu servicio, fecha y hora en pocos pasos.",
};

const perks = [
  { icon: Clock, title: "Rápido y fácil", text: "Reserva en menos de un minuto, sin llamadas." },
  { icon: ShieldCheck, title: "Sin compromiso", text: "Confirmamos disponibilidad antes de cobrar." },
  { icon: Phone, title: "Atención cercana", text: "Te acompañamos por WhatsApp en cada paso." },
];

export default function ReservarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Agenda tu cita"
        title="Reserva en pocos pasos"
        description="Elige tu servicio, escoge el día y la hora, y déjanos tus datos. ¡Así de sencillo!"
      />

      <section className="container-mor py-16">
        <BookingForm />

        <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {perks.map((p) => (
            <div key={p.title} className="text-center px-4">
              <span className="grid place-items-center h-12 w-12 rounded-full bg-blush text-rose-dark mx-auto">
                <p.icon size={22} />
              </span>
              <h3 className="mt-3 text-lg">{p.title}</h3>
              <p className="text-sm text-muted mt-1">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl mx-auto card-soft p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span className="flex items-center gap-2 text-cream">
            <MapPin size={18} className="text-rose-dark" />
            {business.address}, {business.city}
          </span>
          <span className="flex items-center gap-2 text-cream">
            <Clock size={18} className="text-rose-dark" />
            {business.hours[0].time}
          </span>
          <a href={business.phoneHref} className="flex items-center gap-2 text-cream hover:text-rose-dark">
            <Phone size={18} className="text-rose-dark" />
            {business.phone}
          </a>
        </div>
      </section>
    </>
  );
}
