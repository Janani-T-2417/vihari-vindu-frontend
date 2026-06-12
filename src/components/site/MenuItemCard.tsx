import { motion } from "motion/react";
import { useState } from "react";
import type { MenuItem } from "@/data/menu";
import { MenuItemModal } from "./MenuItemModal";

export function MenuItemCard({ item, index = 0 }: { item: MenuItem; index?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
        whileHover={{ y: -6 }}
        className="group relative flex flex-col overflow-hidden rounded-3xl bg-card text-left shadow-soft ring-1 ring-border/60 transition-shadow hover:shadow-luxe"
      >
        <div className="relative aspect-[5/4] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute right-3 top-3 rounded-full bg-gradient-gold px-3 py-1 text-xs font-bold text-navy shadow-luxe">
            ₹{item.price}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-dark">
            {item.category}
          </div>
          <h3 className="mt-1 font-display text-lg font-semibold text-navy">{item.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy">
            View & Enquire
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </motion.button>

      <MenuItemModal item={item} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
