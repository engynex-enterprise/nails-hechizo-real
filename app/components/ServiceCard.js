import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { iconMap } from "../lib/icons";

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon];
  const from = service.items[0]?.price ?? "";
  return (
    <Link
      href={`/servicios#${service.id}`}
      className="group card-soft p-7 flex flex-col hover:-translate-y-1.5 transition-transform duration-300"
    >
      <div className="flex items-center justify-between">
        <span className="grid place-items-center h-14 w-14 rounded-2xl bg-blush text-rose-dark group-hover:bg-rose group-hover:text-white transition-colors">
          {Icon ? <Icon size={26} /> : null}
        </span>
        <ArrowUpRight
          size={22}
          className="text-muted/50 group-hover:text-rose-dark group-hover:rotate-45 transition-all duration-300"
        />
      </div>
      <h3 className="mt-6 text-2xl">{service.name}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
        {service.blurb}
      </p>
      <div className="mt-6 pt-5 border-t border-plum/10 flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-muted">
          {service.items.length} servicios
        </span>
        <span className="text-sm font-semibold text-plum">{from}</span>
      </div>
    </Link>
  );
}
