import Link from "next/link";
import { Clock, CalendarHeart } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { iconMap } from "../lib/icons";
import { serviceCategories } from "../lib/data";

export const metadata = {
  title: "Servicios y precios",
  description:
    "Conoce todos nuestros servicios de belleza: uñas, cabello, cejas, pestañas, maquillaje y spa facial, con precios y duración.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nuestros servicios"
        title="Belleza a tu medida"
        description="Explora nuestro menú completo de servicios con precios y duración aproximada. ¿Lista para reservar?"
      />

      {/* Índice de categorías */}
      <div className="container-mor -mt-10 relative z-10">
        <Reveal className="card-soft p-4 flex flex-wrap justify-center gap-2">
          {serviceCategories.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-plum hover:bg-blush transition-colors"
              >
                {Icon ? <Icon size={16} className="text-rose-dark" /> : null}
                {s.name}
              </a>
            );
          })}
        </Reveal>
      </div>

      {/* Categorías */}
      <div className="container-mor py-20 space-y-24">
        {serviceCategories.map((s, idx) => {
          const Icon = iconMap[s.icon];
          return (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
                {/* Encabezado categoría */}
                <Reveal className="lg:sticky lg:top-28">
                  <span className="grid place-items-center h-16 w-16 rounded-2xl bg-blush text-rose-dark">
                    {Icon ? <Icon size={30} /> : null}
                  </span>
                  <h2 className="mt-5 text-3xl sm:text-4xl">{s.name}</h2>
                  <p className="mt-4 text-muted leading-relaxed">{s.blurb}</p>
                  <Link
                    href={`/reservar?servicio=${encodeURIComponent(s.name)}`}
                    className="btn btn-gold mt-7"
                  >
                    <CalendarHeart size={18} />
                    Reservar {s.name.toLowerCase()}
                  </Link>
                </Reveal>

                {/* Lista de precios */}
                <Reveal delay={0.1}>
                  <ul className="card-soft divide-y divide-plum/8 overflow-hidden">
                    {s.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center justify-between gap-4 px-6 py-5 hover:bg-cream transition-colors"
                      >
                        <div>
                          <p className="font-medium text-plum">{item.name}</p>
                          <p className="flex items-center gap-1.5 text-xs text-muted mt-1">
                            <Clock size={13} />
                            {item.duration}
                          </p>
                        </div>
                        <span className="font-display text-xl text-rose-dark whitespace-nowrap">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              {idx < serviceCategories.length - 1 ? (
                <div className="mt-16 flex justify-center">
                  <span className="divider-dots" />
                </div>
              ) : null}
            </section>
          );
        })}
      </div>

      <section className="pb-24">
        <CTASection />
      </section>
    </>
  );
}
