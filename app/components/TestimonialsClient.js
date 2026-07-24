"use client";

import { useMemo, useState } from "react";
import { Star, Send, CheckCircle2 } from "lucide-react";
import { testimonials as seed, serviceCategories } from "../lib/data";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsClient() {
  const [list, setList] = useState(seed);
  const [form, setForm] = useState({ name: "", service: "", rating: 0, text: "" });
  const [hover, setHover] = useState(0);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const average = useMemo(() => {
    const sum = list.reduce((a, t) => a + t.rating, 0);
    return (sum / list.length).toFixed(1);
  }, [list]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Cuéntanos tu nombre";
    if (!form.service) e.service = "Selecciona un servicio";
    if (!form.rating) e.rating = "Elige una calificación";
    if (form.text.trim().length < 10) e.text = "Escribe al menos 10 caracteres";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setList((prev) => [
      { name: form.name.trim(), service: form.service, rating: form.rating, text: form.text.trim() },
      ...prev,
    ]);
    setForm({ name: "", service: "", rating: 0, text: "" });
    setErrors({});
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      {/* Resumen */}
      <div className="container-mor -mt-10 relative z-10">
        <div className="card-soft px-8 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
          <div>
            <div className="font-display text-5xl text-gradient-gold leading-none">
              {average}
            </div>
            <div className="flex justify-center gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="#b89454" className="text-gold" />
              ))}
            </div>
          </div>
          <div className="h-12 w-px bg-plum/10 hidden sm:block" />
          <div>
            <div className="font-display text-3xl text-plum">{list.length}+</div>
            <div className="text-sm text-muted">Opiniones reales</div>
          </div>
          <div className="h-12 w-px bg-plum/10 hidden sm:block" />
          <div>
            <div className="font-display text-3xl text-plum">98%</div>
            <div className="text-sm text-muted">Volverían a visitarnos</div>
          </div>
        </div>
      </div>

      {/* Grid de testimonios */}
      <section className="container-mor py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} index={i} />
          ))}
        </div>
      </section>

      {/* Formulario */}
      <section className="bg-sand py-20">
        <div className="container-mor max-w-2xl">
          <div className="text-center mb-10">
            <span className="eyebrow justify-center">
              <span className="divider-dots" />
              Tu opinión importa
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Déjanos tu comentario</h2>
            <p className="mt-4 text-muted">
              ¿Ya nos visitaste? Nos encantaría conocer tu experiencia.
            </p>
          </div>

          {sent ? (
            <div className="card-soft p-6 flex items-center gap-4 border-l-4 border-green-500 mb-6">
              <CheckCircle2 className="text-green-600 shrink-0" size={28} />
              <p className="text-sm text-ink/80">
                ¡Gracias por tu comentario! Tu opinión ya aparece arriba. 💕
              </p>
            </div>
          ) : null}

          <form onSubmit={submit} className="card-soft p-7 space-y-5" noValidate>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nombre" error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Tu nombre"
                  className={inputCls(errors.name)}
                />
              </Field>
              <Field label="Servicio recibido" error={errors.service}>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={inputCls(errors.service)}
                >
                  <option value="">Selecciona…</option>
                  {serviceCategories.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Tu calificación" error={errors.rating}>
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => {
                  const val = i + 1;
                  return (
                    <button
                      key={val}
                      type="button"
                      onMouseEnter={() => setHover(val)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setForm({ ...form, rating: val })}
                      aria-label={`${val} estrellas`}
                    >
                      <Star
                        size={30}
                        className="transition-colors"
                        fill={(hover || form.rating) >= val ? "#b89454" : "transparent"}
                        color={(hover || form.rating) >= val ? "#b89454" : "#c9b8b8"}
                      />
                    </button>
                  );
                })}
              </div>
            </Field>

            <Field label="Comentario" error={errors.text}>
              <textarea
                rows={4}
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                placeholder="Cuéntanos cómo fue tu experiencia…"
                className={inputCls(errors.text) + " resize-none"}
              />
            </Field>

            <button type="submit" className="btn btn-primary w-full">
              <Send size={17} />
              Publicar comentario
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-plum mb-2">{label}</span>
      {children}
      {error ? <span className="block text-xs text-rose-dark mt-1.5">{error}</span> : null}
    </label>
  );
}

function inputCls(error) {
  return `w-full rounded-xl border bg-cream/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-rose focus:ring-2 focus:ring-rose/20 ${
    error ? "border-rose-dark" : "border-plum/15"
  }`;
}
