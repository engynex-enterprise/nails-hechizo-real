"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryFilters, galleryItems } from "../lib/data";
import GalleryTile from "./GalleryTile";

export default function GalleryGrid() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos"
      ? galleryItems
      : galleryItems.filter((i) => i.category === active);

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {galleryFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
              active === f
                ? "bg-gold text-noir border-gold"
                : "bg-card/60 text-cream border-cream/15 hover:border-rose hover:text-rose-dark"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <GalleryTile item={item} className="aspect-[4/5]" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
