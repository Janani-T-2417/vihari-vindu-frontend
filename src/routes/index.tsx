import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Award, UtensilsCrossed, BedDouble, Sparkles, Star, ArrowRight,
} from "lucide-react";
import heroHotel from "@/assets/hero-hotel.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroRoom from "@/assets/hero-room.jpg";
import idly from "@/assets/food-idly.jpg";
import masalaDosa from "@/assets/food-masala-dosa.jpg";
import vadaSambar from "@/assets/food-vada-sambar.jpg";
import bonda from "@/assets/food-bonda.jpg";
import mealsAndhra from "@/assets/meals-andhra.jpg";
import mealsVeg from "@/assets/meals-veg.jpg";
import mealsDeluxe from "@/assets/meals-deluxe.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomPremium from "@/assets/room-premium.jpg";
import roomFamily from "@/assets/room-family.jpg";
import galleryLobby from "@/assets/gallery-lobby.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import { SectionHeader } from "@/components/site/Section";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vihari Vindu — Luxury Hotel & Restaurant in Chirala" },
      { name: "description", content: "Tiffins, Meals and Luxury Rooms in Chirala, Andhra Pradesh. Book your stay or explore our authentic Andhra menu." },
      { property: "og:title", content: "Vihari Vindu — Hotel & Restaurant" },
      { property: "og:description", content: "Tiffins · Meals · Luxury Rooms · Chirala." },
      { property: "og:image", content: heroHotel },
    ],
  }),
  component: Home,
});

const slides = [
  { img: heroHotel, eyebrow: "Welcome to" },
  { img: heroRestaurant, eyebrow: "Dine at" },
  { img: heroRoom, eyebrow: "Stay with" },
];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.img
          key={i}
          src={slides[i].img}
          alt=""
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/40 via-navy/30 to-cream" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/50 via-transparent to-transparent" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <motion.div
          key={`text-${i}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full glass px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cream">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            {slides[i].eyebrow} Vihari Vindu
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] text-cream drop-shadow-[0_4px_30px_rgba(0,0,0,0.4)] sm:text-6xl md:text-7xl lg:text-8xl">
            Where tradition <br /> meets <span className="text-gradient-gold">luxury</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/85">
            Tiffins · Meals · Luxury Rooms — A refined hospitality address in
            the heart of Chirala, Andhra Pradesh.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/rooms"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy shadow-luxe transition hover:scale-105"
            >
              <BedDouble className="h-4 w-4" /> Book a Room
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/tiffins"
              className="group inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-cream/20"
            >
              <UtensilsCrossed className="h-4 w-4" /> Explore Menu
            </Link>
          </div>
        </motion.div>

        <div className="absolute bottom-10 right-6 hidden gap-2 md:flex">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-gold" : "w-5 bg-cream/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ end, suffix = "+", label }: { end: number; suffix?: string; label: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let r = 0; const dur = 1800; const start = performance.now();
    const tick = (t: number) => {
      r = Math.min(1, (t - start) / dur);
      setN(Math.floor(end * (1 - Math.pow(1 - r, 3))));
      if (r < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end]);
  return (
    <div className="text-center">
      <div className="font-display text-5xl font-bold text-gradient-gold sm:text-6xl">
        {n.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

const tiffins = [
  { name: "Idly", price: 36, img: idly },
  { name: "Masala Dosa", price: 45, img: masalaDosa },
  { name: "Vada Sambar", price: 45, img: vadaSambar },
  { name: "Mysore Bonda", price: 40, img: bonda },
];

const meals = [
  { name: "Andhra Special", img: mealsAndhra },
  { name: "Veg Meals", img: mealsVeg },
  { name: "Deluxe Meals", img: mealsDeluxe },
];

const rooms = [
  { name: "Deluxe Room", img: roomDeluxe },
  { name: "Family Suite", img: roomFamily },
  { name: "Premium AC", img: roomPremium },
];

const reviews = [
  { name: "Lakshmi Priya", rating: 5, text: "The Andhra meals are absolutely authentic, and the room felt like home. Easily the best hospitality in Chirala." },
  { name: "Ravi Teja", rating: 5, text: "Stayed for two nights for a family function. Spotless rooms, warm service and the tiffins are unbeatable." },
  { name: "Anitha S.", rating: 5, text: "Beautifully designed property. The dining hall, the staff, the food — everything was on point." },
];

function Home() {
  return (
    <>
      <Hero />

      {/* Counters */}
      <section className="relative -mt-12 z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 rounded-3xl bg-card p-8 shadow-luxe ring-1 ring-border md:grid-cols-4 md:p-10">
          <Counter end={15000} label="Happy Customers" />
          <Counter end={42} label="Rooms Available" />
          <Counter end={120} label="Food Items" />
          <Counter end={12} label="Years of Service" />
        </div>
      </section>

      {/* Featured Tiffins */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Morning Indulgence"
          title={<>Featured <span className="text-gradient-gold">Tiffins</span></>}
          subtitle="Hand-crafted South Indian breakfast classics, served fresh from our kitchen every morning."
        />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {tiffins.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-shadow hover:shadow-luxe"
            >
              <div className="aspect-square overflow-hidden">
                <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <div className="font-display text-base font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">From ₹{t.price}</div>
                </div>
                <span className="rounded-full bg-gradient-gold px-3 py-1 text-xs font-bold text-navy">₹{t.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/tiffins" className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-card px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-cream">
            View Full Tiffin Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Popular Meals */}
      <section className="bg-gradient-luxe py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Banana Leaf Tradition"
            title={<>Popular <span className="text-gradient-gold">Meals</span></>}
            subtitle="Traditional Andhra and South Indian thalis, served on banana leaf with seasonal curries."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {meals.map((m, idx) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl shadow-soft"
              >
                <img src={m.img} alt={m.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-semibold text-cream">{m.name}</h3>
                  <Link to="/meals" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-gold">
                    Discover <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/meals" className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-navy shadow-luxe transition hover:scale-105">
              View All Meals <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Luxury Rooms */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Restful Stays"
          title={<>Luxury <span className="text-gradient-gold">Rooms</span></>}
          subtitle="Thoughtfully designed rooms with modern amenities — for travellers, families and special occasions."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {rooms.map((r, idx) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-shadow hover:shadow-luxe"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={r.img} alt={r.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy">Available</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-navy">{r.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">AC · WiFi · TV · Room Service</p>
                <Link to="/rooms" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                  View Room <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/rooms" className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-navy shadow-luxe transition hover:scale-105">
            View All Rooms <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden bg-navy py-24 text-cream">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-soft-blue/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Why choose us
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              A complete experience — <span className="text-gradient-gold">stay, dine, celebrate</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Award, t: "Premium Hospitality", d: "Trained staff, attentive service, 24/7 front desk." },
              { icon: UtensilsCrossed, t: "Authentic Cuisine", d: "Traditional Andhra recipes prepared with care." },
              { icon: BedDouble, t: "Comfortable Rooms", d: "Spotless rooms with modern amenities and warm decor." },
              { icon: Sparkles, t: "Memorable Moments", d: "From breakfasts to family functions — we make it special." },
            ].map((f, idx) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass-dark rounded-3xl p-6"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-gold text-navy">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-cream">{f.t}</h3>
                <p className="mt-2 text-sm text-cream/70">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Guest Stories"
          title={<>What our <span className="text-gradient-gold">guests say</span></>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, idx) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold font-bold text-navy">{r.name[0]}</div>
                <div>
                  <div className="text-sm font-semibold text-navy">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Verified guest</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <SectionHeader
          eyebrow="Glimpses"
          title={<>From our <span className="text-gradient-gold">gallery</span></>}
        />
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {[galleryLobby, galleryDining, galleryExterior, roomPremium, mealsAndhra, idly].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <img src={img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110" />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-cream transition hover:bg-navy/90">
            Explore Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-gold p-10 text-center shadow-luxe md:p-16">
          <div className="mx-auto mb-6 inline-block">
            <Logo size={64} showText={false} />
          </div>
          <h3 className="font-display text-3xl font-bold text-navy sm:text-5xl">Ready to experience Vihari Vindu?</h3>
          <p className="mx-auto mt-3 max-w-xl text-navy/80">Reserve your room or table — our team is one call away.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="tel:+919121023555" className="rounded-full bg-navy px-7 py-3 text-sm font-bold text-cream shadow-soft transition hover:scale-105">Call 9121023555</a>
            <Link to="/contact" className="rounded-full border border-navy/30 bg-cream/80 px-7 py-3 text-sm font-bold text-navy">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
