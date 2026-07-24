import Link from "next/link";
import { CalendarHeart, Phone } from "lucide-react";
import { business } from "../lib/data";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="container-mor">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-plum text-cream px-8 py-16 sm:px-16 sm:py-20 text-center">
        {/* Decoración */}
        <div className="pointer-events-none absolute -top-16 -left-10 h-56 w-56 rounded-full bg-rose/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-gold/25 blur-3xl" />

        <span className="eyebrow justify-center !text-gold-light relative">
          <span className="divider-dots" />
          Tu momento de brillar
        </span>
        <h2 className="relative mt-5 text-3xl sm:text-4xl md:text-5xl !text-cream max-w-3xl mx-auto leading-[1.1]">
          Reserva tu cita y déjate consentir por nuestro equipo
        </h2>
        <p className="relative mt-5 text-cream/75 max-w-xl mx-auto">
          Agenda en menos de un minuto. Elige tu servicio, fecha y hora; nosotras
          nos encargamos del resto.
        </p>
        <div className="relative mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/reservar" className="btn btn-gold">
            <CalendarHeart size={18} />
            Reservar cita online
          </Link>
          <a href={business.phoneHref} className="btn btn-ghost !text-cream !border-cream/30">
            <Phone size={18} />
            {business.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
