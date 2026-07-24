import { Star, Quote } from "lucide-react";

const avatarTints = ["#c77d78", "#7a5560", "#b89454", "#a85e5a", "#533a46"];

export default function TestimonialCard({ t, index = 0 }) {
  const initials = t.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <figure className="card-soft p-7 flex flex-col h-full">
      <Quote size={34} className="text-rose/40" />
      <div className="flex gap-1 mt-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < t.rating ? "text-gold" : "text-plum/15"}
            fill={i < t.rating ? "#b89454" : "transparent"}
          />
        ))}
      </div>
      <blockquote className="mt-4 text-ink/85 leading-relaxed flex-1">
        “{t.text}”
      </blockquote>
      <figcaption className="mt-6 pt-5 border-t border-plum/10 flex items-center gap-3">
        <span
          className="grid place-items-center h-11 w-11 rounded-full text-white font-semibold text-sm"
          style={{ background: avatarTints[index % avatarTints.length] }}
        >
          {initials}
        </span>
        <span>
          <span className="block font-semibold text-plum leading-tight">
            {t.name}
          </span>
          <span className="block text-xs text-muted">{t.service}</span>
        </span>
      </figcaption>
    </figure>
  );
}
