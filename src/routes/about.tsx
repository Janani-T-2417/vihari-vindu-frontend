import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, Award, Sparkles, Leaf, Target, Eye, Trophy } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import heroHotel from "@/assets/hero-hotel.jpg";
import galleryLobby from "@/assets/gallery-lobby.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vihari Vindu" },
      { name: "description", content: "The story, vision and values behind Vihari Vindu — Chirala's premium hotel and restaurant address." },
      { property: "og:title", content: "About Vihari Vindu" },
      { property: "og:description", content: "Tradition, hospitality and authentic flavours under one roof." },
      { property: "og:image", content: galleryLobby },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Heart, t: "Premium Hospitality", d: "Warm, attentive service that anticipates needs and respects traditions." },
  { icon: Sparkles, t: "Delicious Food", d: "Traditional Andhra recipes, fresh ingredients and uncompromising quality." },
  { icon: Award, t: "Comfortable Stay", d: "Thoughtfully designed rooms with modern amenities and a sense of home." },
  { icon: Leaf, t: "Quality Commitment", d: "From sourcing to service — every detail is crafted with care." },
];

const timeline = [
  { y: "2013", t: "Humble beginnings", d: "Started as a small tiffin centre serving the Chirala neighbourhood." },
  { y: "2016", t: "Expansion into meals", d: "Added our signature Andhra meals served on banana leaf." },
  { y: "2019", t: "Rooms launched", d: "Opened our first set of deluxe rooms for travellers and families." },
  { y: "2024", t: "Premium relaunch", d: "Fully redesigned the property with luxury interiors and family suites." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title={<>Crafted with care, <br /><span className="text-gradient-gold">served with pride</span></>}
        subtitle="Vihari Vindu began as a humble tiffin counter and has grown — quietly, intentionally — into a refined hotel & restaurant destination in Chirala."
        image={heroHotel}
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2rem] shadow-luxe"
          >
            <img src={galleryLobby} alt="Vihari Vindu lobby" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-dark">Welcome</div>
            <h2 className="mt-2 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
              A name that means <span className="text-gradient-gold">'home for travellers'</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              In Telugu, <em>Vihari</em> means traveller and <em>Vindu</em> means a generous feast. Together, the name promises every guest who walks in a meal that nourishes and a stay that feels like home.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Today, our kitchen serves over 120 dishes a day and our rooms welcome travellers from across the country — but the warmth of the very first tiffin we ever served still defines who we are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-gradient-luxe py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center font-display text-4xl font-bold text-navy sm:text-5xl">
            What we stand for
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl bg-card p-7 shadow-soft transition-shadow hover:shadow-luxe"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-gold text-navy">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-14 text-center font-display text-4xl font-bold text-navy sm:text-5xl">Our Journey</h2>
        <div className="relative">
          <span className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent md:left-1/2 md:-translate-x-1/2" />
          {timeline.map((e, i) => (
            <motion.div
              key={e.y}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative mb-10 grid gap-4 pl-12 md:grid-cols-2 md:gap-12 md:pl-0 ${i % 2 ? "md:[&>div:first-child]:order-2 md:[&>div:first-child]:text-left md:[&>div:last-child]:text-right" : "md:[&>div:last-child]:text-left md:[&>div:first-child]:text-right"}`}
            >
              <span className="absolute left-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-gradient-gold text-[10px] font-bold text-navy md:left-1/2 md:-translate-x-1/2">
                {i + 1}
              </span>
              <div>
                <div className="font-display text-3xl font-bold text-gradient-gold">{e.y}</div>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-soft">
                <div className="font-display text-lg font-semibold text-navy">{e.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{e.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Eye, t: "Our Vision", d: "To be the most loved hospitality address in coastal Andhra — known for warmth, taste and trust." },
            { icon: Target, t: "Our Mission", d: "To serve every guest a meal that feels homely and a stay that feels personal — at honest prices." },
            { icon: Trophy, t: "Our Values", d: "Integrity, hospitality, quality and respect — for our guests, our team and our heritage." },
          ].map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl bg-navy p-8 text-cream shadow-luxe"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-gold text-navy">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-cream/80">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
