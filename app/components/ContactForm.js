"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Ingresa tu nombre";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Correo no válido";
    if (form.message.trim().length < 5) e.message = "Escribe tu mensaje";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <form onSubmit={submit} className="card-soft p-7 space-y-5" noValidate>
      {sent ? (
        <div className="flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 p-4">
          <CheckCircle2 className="text-green-600 shrink-0" size={24} />
          <p className="text-sm text-green-800">
            ¡Gracias! Recibimos tu mensaje y te responderemos muy pronto.
          </p>
        </div>
      ) : null}

      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="block text-sm font-medium text-plum mb-2">Nombre *</span>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Tu nombre"
            className={cls(errors.name)}
          />
          {errors.name ? <span className="block text-xs text-rose-dark mt-1.5">{errors.name}</span> : null}
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-plum mb-2">Teléfono</span>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="300 123 4567"
            className={cls(false)}
          />
        </label>
      </div>

      <label className="block">
        <span className="block text-sm font-medium text-plum mb-2">Correo *</span>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="tucorreo@email.com"
          className={cls(errors.email)}
        />
        {errors.email ? <span className="block text-xs text-rose-dark mt-1.5">{errors.email}</span> : null}
      </label>

      <label className="block">
        <span className="block text-sm font-medium text-plum mb-2">Mensaje *</span>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="¿En qué podemos ayudarte?"
          className={cls(errors.message) + " resize-none"}
        />
        {errors.message ? <span className="block text-xs text-rose-dark mt-1.5">{errors.message}</span> : null}
      </label>

      <button type="submit" className="btn btn-primary w-full">
        <Send size={17} />
        Enviar mensaje
      </button>
    </form>
  );
}

function cls(error) {
  return `w-full rounded-xl border bg-cream/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-rose focus:ring-2 focus:ring-rose/20 ${
    error ? "border-rose-dark" : "border-plum/15"
  }`;
}
