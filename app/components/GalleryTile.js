import { Sparkles } from "lucide-react";

const tints = {
  a: "linear-gradient(135deg,#eccbc4,#c77d78 72%)",
  b: "linear-gradient(135deg,#d9b7ac,#7a5560 78%)",
  c: "linear-gradient(135deg,#f3ded9,#d8be86 82%)",
  d: "linear-gradient(135deg,#cba6ac,#a85e5a 76%)",
  e: "linear-gradient(135deg,#efe0d3,#b89454 86%)",
};

export default function GalleryTile({ item, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ${className}`}
      style={{ background: tints[item.tint] || tints.a }}
    >
      {/* Foto real (si existe) */}
      {item.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="photo-fallback absolute inset-0" />
      )}

      {/* Marca de agua decorativa */}
      <Sparkles
        size={120}
        className="absolute -right-6 -top-6 text-white/20 group-hover:scale-110 transition-transform duration-500"
      />

      {/* Degradado inferior + textos */}
      <div className="absolute inset-0 bg-gradient-to-t from-plum/70 via-plum/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="inline-block text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-cream/90 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full">
          {item.category}
        </span>
        <h3 className="mt-3 text-cream text-xl leading-tight">{item.title}</h3>
      </div>
    </div>
  );
}
