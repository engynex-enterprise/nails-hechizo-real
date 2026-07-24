import Link from "next/link";
import { Star, CalendarHeart, Sparkles, Play } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-blush blur-3xl opacity-80" />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-rose/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-mor grid lg:grid-cols-2 gap-14 items-center pt-14 pb-20 lg:pt-20 lg:pb-28">
        {/* Texto */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <Sparkles size={14} />
              Uñas y estética a domicilio en Bogotá
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 text-4xl sm:text-6xl xl:text-7xl leading-[1.05]">
              Realzamos tu{" "}
              <span className="text-gradient-gold italic">belleza</span> natural
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
              Uñas, cabello, maquillaje, cejas, pestañas y tratamientos faciales.
              Un espacio pensado para que salgas radiante y renovada.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link href="/reservar" className="btn btn-primary">
                <CalendarHeart size={18} />
                Reservar cita
              </Link>
              <Link href="/galeria" className="btn btn-outline">
                <Play size={16} />
                Ver trabajos
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["#c77d78", "#7a5560", "#b89454", "#a85e5a"].map((c) => (
                  <span
                    key={c}
                    className="h-10 w-10 rounded-full border-2 border-cream"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="#b89454" className="text-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted mt-0.5">
                  <strong className="text-plum">+5.000</strong> clientas felices
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={0.15} className="relative">
          <div className="relative mx-auto max-w-[19rem] sm:max-w-md lg:max-w-none">
            {/* Imagen principal (reemplazable) */}
            <div className="photo-fallback relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-40px_rgba(59,37,48,0.6)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/hero.jpg"
                alt="Especialista de Nails Hechizo Real trabajando"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/50 to-transparent" />
              <Sparkles
                size={200}
                className="absolute -right-8 -bottom-8 text-white/20"
              />
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/85 backdrop-blur px-4 py-2 rounded-full">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-plum">
                  Citas disponibles hoy
                </span>
              </div>
            </div>

            {/* Tarjeta flotante: rating */}
            <div className="absolute -left-2 sm:-left-8 bottom-16 card-soft px-5 py-4 animate-float">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="#b89454" className="text-gold" />
                ))}
              </div>
              <p className="mt-1 font-display text-2xl text-plum leading-none">4.9</p>
              <p className="text-xs text-muted">Google Reviews</p>
            </div>

            {/* Tarjeta flotante: servicio */}
            <div className="hidden sm:block absolute -right-1 sm:-right-6 top-12 card-soft px-5 py-4 animate-float-slow">
              <p className="text-xs text-muted">Reservado ahora</p>
              <p className="font-semibold text-plum">Balayage + corte</p>
              <p className="text-xs text-rose-dark mt-1">✓ Confirmado</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
