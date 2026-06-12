import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <div className={`mb-3 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy ${align === "center" ? "" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </motion.div>
  );
}
