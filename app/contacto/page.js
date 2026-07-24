import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Instagram, Facebook } from "../components/SocialIcons";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import Reveal from "../components/Reveal";
import { business } from "../lib/data";

export const metadata = {
  title: "Contacto",
  description:
    "Escríbenos y agenda tu cita a domicilio en Bogotá. Encuentra horarios y datos de contacto de Nails Hechizo Real.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hablemos"
        title="Contáctanos"
        description="Estamos para resolver tus dudas y ayudarte a lucir espectacular. Escríbenos o visítanos."
      />

      <section className="container-mor py-20 grid lg:grid-cols-2 gap-12">
        {/* Info */}
        <Reveal>
          <h2 className="text-3xl mb-6">Información de contacto</h2>
          <ul className="space-y-5">
            <InfoItem icon={MapPin} title="Cobertura">
              {business.address}
              <br />
              {business.city}
            </InfoItem>
            <InfoItem icon={Phone} title="Teléfono / WhatsApp">
              <a href={business.phoneHref} className="hover:text-rose-dark">
                {business.phone}
              </a>
            </InfoItem>
            <InfoItem icon={Mail} title="Correo">
              <a href={`mailto:${business.email}`} className="hover:text-rose-dark">
                {business.email}
              </a>
            </InfoItem>
            <InfoItem icon={Clock} title="Horario de atención">
              {business.hours.map((h) => (
                <span key={h.day} className="block">
                  <strong className="text-plum font-medium">{h.day}:</strong> {h.time}
                </span>
              ))}
            </InfoItem>
          </ul>

          <div className="flex gap-3 mt-8">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid place-items-center h-11 w-11 rounded-full bg-blush text-rose-dark hover:bg-rose hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid place-items-center h-11 w-11 rounded-full bg-blush text-rose-dark hover:bg-rose hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Mapa */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-plum/10 shadow-sm">
            <iframe
              title="Zona de cobertura — Bogotá"
              src={`https://www.google.com/maps?q=${business.mapsQuery}&output=embed`}
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        {/* Formulario */}
        <Reveal delay={0.1}>
          <h2 className="text-3xl mb-6">Envíanos un mensaje</h2>
          <ContactForm />
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-sand py-20">
        <div className="container-mor">
          <div className="text-center mb-12">
            <span className="eyebrow justify-center">
              <span className="divider-dots" />
              Preguntas frecuentes
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl">¿Tienes dudas?</h2>
          </div>
          <FAQ />
        </div>
      </section>
    </>
  );
}

function InfoItem({ icon: Icon, title, children }) {
  return (
    <li className="flex gap-4">
      <span className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-blush text-rose-dark">
        <Icon size={22} />
      </span>
      <div>
        <p className="font-medium text-plum">{title}</p>
        <p className="text-muted text-sm mt-1 leading-relaxed">{children}</p>
      </div>
    </li>
  );
}
