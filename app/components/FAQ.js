"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../lib/data";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="max-w-3xl mx-auto divide-y divide-cream/10">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-medium text-cream text-lg">{item.q}</span>
              <Plus
                size={22}
                className={`shrink-0 text-rose-dark transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-muted leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
