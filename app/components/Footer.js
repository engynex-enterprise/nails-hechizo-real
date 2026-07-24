import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Instagram, Facebook } from "./SocialIcons";
import { business, serviceCategories } from "../lib/data";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-plum text-cream/80 mt-24">
      <div className="container-mor py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="grid place-items-center h-11 w-11 shrink-0 rounded-full bg-cream text-plum font-display text-sm tracking-tight">
              {business.monogram}
            </span>
            <span className="font-display text-xl sm:text-2xl text-cream leading-tight">
              {business.name}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-cream/70 max-w-xs">
            {business.tagline}. Un espacio dedicado a tu belleza y bienestar, con
            atención profesional y cálida.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid place-items-center h-10 w-10 rounded-full border border-cream/20 hover:bg-rose hover:border-rose transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid place-items-center h-10 w-10 rounded-full border border-cream/20 hover:bg-rose hover:border-rose transition-colors"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="text-cream font-display text-lg mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm">
            {serviceCategories.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/servicios#${s.id}`}
                  className="hover:text-rose transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-cream font-display text-lg mb-4">Explora</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/galeria" className="hover:text-rose transition-colors">Galería de trabajos</Link></li>
            <li><Link href="/precios" className="hover:text-rose transition-colors">Lista de precios</Link></li>
            <li><Link href="/testimonios" className="hover:text-rose transition-colors">Testimonios</Link></li>
            <li><Link href="/reservar" className="hover:text-rose transition-colors">Reservar cita</Link></li>
            <li><Link href="/contacto" className="hover:text-rose transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-cream font-display text-lg mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-rose shrink-0 mt-0.5" />
              <span>
                {business.address}
                <br />
                {business.city}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-rose shrink-0 mt-0.5" />
              <a href={business.phoneHref} className="hover:text-rose transition-colors">
                {business.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-rose shrink-0 mt-0.5" />
              <a href={`mailto:${business.email}`} className="hover:text-rose transition-colors">
                {business.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="text-rose shrink-0 mt-0.5" />
              <span>
                {business.hours[0].day}
                <br />
                {business.hours[0].time}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-mor py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {year} {business.full}. Todos los derechos reservados.</p>
          <p>Hecho con cariño para realzar tu belleza ✦</p>
        </div>
      </div>
    </footer>
  );
}
