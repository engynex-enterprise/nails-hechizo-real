"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, CalendarHeart } from "lucide-react";
import { business } from "../lib/data";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/galeria", label: "Galería" },
  { href: "/precios", label: "Precios" },
  { href: "/testimonios", label: "Testimonios" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-md shadow-[0_10px_30px_-24px_rgba(59,37,48,0.8)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-mor flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="h-12 w-12 shrink-0 rounded-full overflow-hidden ring-1 ring-gold/40 group-hover:ring-gold transition">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/logo.jpg"
              alt={business.name}
              className="h-full w-full object-cover object-[50%_30%] scale-125"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg sm:text-2xl text-gradient-gold tracking-tight leading-tight">
              {business.name}
            </span>
            <span className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.22em] uppercase text-rose-dark mt-0.5">
              {business.subtitle}
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`nav-link ${
                  pathname === l.href ? "active" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/reservar" className="btn btn-gold">
            <CalendarHeart size={16} />
            Reservar cita
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menú"
          className="lg:hidden grid place-items-center h-11 w-11 rounded-full bg-card/70 text-cream border border-cream/10"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-card transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="container-mor flex flex-col gap-1 pt-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`block py-4 text-lg font-medium border-b border-cream/10 ${
                  pathname === l.href ? "text-rose-dark" : "text-cream"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <Link href="/reservar" className="btn btn-gold w-full">
              <CalendarHeart size={18} />
              Reservar cita
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
