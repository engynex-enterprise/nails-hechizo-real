import { stats } from "../lib/data";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 0.08}
          className="text-center px-4 py-8 rounded-2xl bg-white/60 border border-plum/5"
        >
          <div className="font-display text-4xl sm:text-5xl text-gradient-gold">
            {s.value}
          </div>
          <div className="mt-2 text-sm text-muted">{s.label}</div>
        </Reveal>
      ))}
    </div>
  );
}
