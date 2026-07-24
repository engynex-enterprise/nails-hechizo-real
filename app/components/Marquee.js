const words = [
  "Uñas",
  "Cabello",
  "Maquillaje",
  "Cejas",
  "Pestañas",
  "Spa & Facial",
  "Novias",
  "Balayage",
  "Nail Art",
  "Color",
];

export default function Marquee() {
  const line = [...words, ...words];
  return (
    <div className="relative overflow-hidden bg-plum py-5 select-none">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {line.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-8 font-display text-2xl sm:text-3xl text-cream/90">
              {w}
            </span>
            <span className="text-gold text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
