import { motion } from "motion/react";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden pt-32">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-cream via-cream/70 to-cream/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/20 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-navy">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {eyebrow}
            </div>
          )}
          <h1 className="font-display text-5xl font-bold leading-tight text-navy sm:text-6xl md:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg text-navy/70">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
