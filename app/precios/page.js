import Link from "next/link";
import { Check, Star, CalendarHeart } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { iconMap } from "../lib/icons";
import { serviceCategories } from "../lib/data";

export const metadata = {
  title: "Precios y paquetes",
  description:
    "Lista de precios de todos nuestros servicios y paquetes especiales de belleza. Transparencia total, sin sorpresas.",
};

const packages = [
  {
    name: "Glow Express",
    price: "$89.000",
    tagline: "Para lucir lista en poco tiempo",
    duration: "≈ 2 horas",
    features: [
      "Manicure semipermanente",
      "Diseño de cejas",
      "Peinado express",
      "Bebida de cortesía",
    ],
    featured: false,
  },
  {
    name: "Día Hechizo",
    price: "$189.000",
    tagline: "La experiencia completa de consentimiento",
    duration: "≈ 4 horas",
    features: [
      "Manicure spa + pedicure spa",
      "Limpieza facial hidratante",
      "Masaje relajante 30 min",
      "Copa de bienvenida y snacks",
    ],
    featured: true,
  },
  {
    name: "Novia Perfecta",
    price: "$320.000",
    tagline: "Tu día más especial, impecable",
    duration: "Prueba + evento",
    features: [
      "Prueba de maquillaje y peinado",
      "Maquillaje profesional del evento",
      "Peinado de novia",
      "Manicure semipermanente",
    ],
    featured: false,
  },
];

export default function PreciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Precios"
        title="Precios claros, belleza sin límites"
        description="Conoce nuestros paquetes y la lista completa de precios. Los valores están en pesos colombianos (COP)."
      />

      {/* Paquetes */}
      <section className="container-mor py-20">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`relative h-full rounded-3xl p-8 flex flex-col ${
                  p.featured
                    ? "bg-plum text-cream border border-gold/30 shadow-[0_40px_80px_-30px_rgba(201,162,75,0.35)] md:-translate-y-4"
                    : "card-soft"
                }`}
              >
                {p.featured ? (
                  <span className="absolute top-5 right-5 inline-flex items-center gap-1 text-[0.65rem] font-semibold uppercase tracking-widest bg-gold text-noir px-3 py-1 rounded-full">
                    <Star size={12} fill="#1a1108" /> Popular
                  </span>
                ) : null}
                <h3 className={`text-2xl ${p.featured ? "!text-cream" : ""}`}>
                  {p.name}
                </h3>
                <p className={`mt-1 text-sm ${p.featured ? "text-cream/70" : "text-muted"}`}>
                  {p.tagline}
                </p>
                <div className="mt-6 flex items-end gap-2">
                  <span
                    className={`font-display text-4xl ${
                      p.featured ? "!text-gold-light" : "text-rose-dark"
                    }`}
                  >
                    {p.price}
                  </span>
                </div>
                <p className={`text-xs mt-1 ${p.featured ? "text-cream/60" : "text-muted"}`}>
                  {p.duration}
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check
                        size={18}
                        className={p.featured ? "text-gold-light shrink-0" : "text-rose-dark shrink-0"}
                      />
                      <span className={p.featured ? "text-cream/85" : "text-ink/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/reservar?servicio=${encodeURIComponent(p.name)}`}
                  className={`btn mt-8 w-full ${p.featured ? "btn-gold" : "btn-outline"}`}
                >
                  <CalendarHeart size={18} />
                  Reservar paquete
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lista completa */}
      <section className="bg-sand py-20">
        <div className="container-mor">
          <div className="text-center mb-14">
            <span className="eyebrow justify-center">
              <span className="divider-dots" />
              Lista completa
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Todos nuestros precios</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {serviceCategories.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <Reveal key={s.id} delay={(i % 2) * 0.08}>
                  <div className="card-soft p-7 h-full">
                    <div className="flex items-center gap-3 pb-5 border-b border-cream/10">
                      <span className="grid place-items-center h-11 w-11 rounded-xl bg-blush text-rose-dark">
                        {Icon ? <Icon size={20} /> : null}
                      </span>
                      <h3 className="text-2xl">{s.name}</h3>
                    </div>
                    <ul className="mt-4 space-y-3">
                      {s.items.map((item) => (
                        <li key={item.name} className="flex items-baseline gap-3">
                          <span className="text-ink/80">{item.name}</span>
                          <span className="flex-1 border-b border-dotted border-cream/20 translate-y-[-3px]" />
                          <span className="font-medium text-rose-dark whitespace-nowrap">
                            {item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p className="text-center text-sm text-muted mt-10 max-w-xl mx-auto">
            * Los precios pueden variar según el largo del cabello, complejidad del
            diseño o productos especiales. Te confirmamos el valor exacto antes de
            iniciar tu servicio.
          </p>
        </div>
      </section>

      <section className="py-24">
        <CTASection />
      </section>
    </>
  );
}
