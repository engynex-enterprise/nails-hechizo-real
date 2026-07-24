import Link from "next/link";
import { ArrowRight, ShieldCheck, Leaf, Award, HeartHandshake } from "lucide-react";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import SectionHeading from "./components/SectionHeading";
import ServiceCard from "./components/ServiceCard";
import GalleryTile from "./components/GalleryTile";
import TestimonialCard from "./components/TestimonialCard";
import Stats from "./components/Stats";
import CTASection from "./components/CTASection";
import Reveal from "./components/Reveal";
import { serviceCategories, galleryItems, testimonials } from "./lib/data";

const values = [
  { icon: Award, title: "Profesionales certificadas", text: "Un equipo con años de experiencia y formación continua." },
  { icon: Leaf, title: "Productos premium", text: "Marcas profesionales e insumos hipoalergénicos." },
  { icon: ShieldCheck, title: "Higiene garantizada", text: "Protocolos de bioseguridad y esterilización en cada servicio." },
  { icon: HeartHandshake, title: "Atención personalizada", text: "Asesoría pensada para resaltar tu estilo único." },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Servicios */}
      <section className="container-mor py-24" id="servicios">
        <SectionHeading
          center
          eyebrow="Lo que hacemos"
          title="Servicios pensados para consentirte"
          description="Desde una manicure impecable hasta un cambio de look completo. Descubre todo lo que podemos hacer por ti."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.08}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
          {/* Tarjeta CTA */}
          <Reveal delay={0.16}>
            <Link
              href="/servicios"
              className="group h-full min-h-[220px] rounded-3xl bg-plum text-cream p-7 flex flex-col justify-between hover:-translate-y-1.5 transition-transform"
            >
              <span className="font-display text-2xl leading-snug">
                Ver todos los servicios y precios
              </span>
              <span className="inline-flex items-center gap-2 text-gold-light font-medium">
                Explorar
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="bg-sand py-24" id="nosotros">
        <div className="container-mor grid lg:grid-cols-2 gap-14 items-center">
          <Reveal className="relative">
            <div className="photo-fallback relative aspect-[5/6] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-45px_rgba(59,37,48,0.6)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/salon_interior2.jpg"
                alt="Nails Hechizo Real — belleza a domicilio"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-plum/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:right-8 card-soft px-6 py-5 text-center">
              <div className="font-display text-4xl text-gradient-gold">2014</div>
              <div className="text-xs text-muted mt-1 max-w-[7rem]">
                Cuidando tu belleza desde
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Sobre nosotras"
              title="Llevamos la belleza hasta tu hogar"
              description="En Nails Hechizo Real creemos que verse bien es sentirse bien. Llevamos toda la experiencia hasta tu casa u oficina en Bogotá: puntualidad, higiene impecable, un equipo apasionado y resultados que enamoran."
            />
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08} className="flex gap-4">
                  <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-blush text-rose-dark">
                    <v.icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg text-cream">{v.title}</h3>
                    <p className="text-sm text-muted mt-1 leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="container-mor mt-16">
          <Stats />
        </div>
      </section>

      {/* Galería preview */}
      <section className="container-mor py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Nuestros trabajos"
            title="Resultados que hablan por sí solos"
            description="Una muestra de las transformaciones que creamos cada día para nuestras clientas."
          />
          <Reveal>
            <Link href="/galeria" className="btn btn-outline shrink-0">
              Ver galería completa
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 grid-cols-2 lg:grid-cols-3">
          {galleryItems.slice(0, 6).map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 3) * 0.06}
              className={i === 0 ? "col-span-2 lg:col-span-1" : ""}
            >
              <GalleryTile item={item} className="aspect-[4/5] h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-sand py-24">
        <div className="container-mor">
          <SectionHeading
            center
            eyebrow="Testimonios"
            title="Lo que dicen nuestras clientas"
            description="Miles de mujeres confían en nosotras para lucir espectaculares. Esto es lo que opinan."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <TestimonialCard t={t} index={i} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/testimonios" className="btn btn-primary">
              Ver más opiniones
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24">
        <CTASection />
      </section>
    </>
  );
}
