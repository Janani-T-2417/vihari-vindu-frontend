import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Wifi, Tv, Car, Bell, Snowflake, MessageCircle, BedDouble } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { openWhatsApp } from "@/lib/whatsapp";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomPremium from "@/assets/room-premium.jpg";
import heroRoom from "@/assets/hero-room.jpg";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Luxury Rooms — Vihari Vindu" },
      { name: "description", content: "Deluxe, Double Deluxe, Family and Premium AC rooms at Vihari Vindu — Chirala, Andhra Pradesh." },
      { property: "og:title", content: "Luxury Rooms — Vihari Vindu" },
      { property: "og:description", content: "Modern rooms with AC, WiFi, TV, parking and room service." },
      { property: "og:image", content: heroRoom },
    ],
  }),
  component: RoomsPage,
});

const amenities = [
  { icon: Snowflake, label: "AC" },
  { icon: Wifi, label: "WiFi" },
  { icon: Tv, label: "TV" },
  { icon: Car, label: "Parking" },
  { icon: Bell, label: "Room Service" },
];

const rooms = [
  { name: "Deluxe Room", img: roomDeluxe, desc: "Spacious deluxe room with a queen bed, work area and premium amenities." },
  { name: "Double Deluxe Room", img: roomDouble, desc: "Two queen beds, ideal for friends or small families travelling together." },
  { name: "Family Room", img: roomFamily, desc: "A generous suite for families — multiple beds, lounge area and extra space." },
  { name: "Premium AC Room", img: roomPremium, desc: "Our most refined room — king bed, lounge corner and panoramic views." },
];

const roomEnquiryMessage = (n: string) =>
  `Hello Vihari Vindu,\n\nI would like to enquire about:\n\nRoom Type: ${n}\n\nPlease share availability and pricing details.`;

function RoomsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stay"
        title={<>Refined <span className="text-gradient-gold">comfort</span></>}
        subtitle="Modern rooms styled for restful stays — every detail considered, from linens to lighting."
        image={heroRoom}
      />
      <div className="mx-auto max-w-7xl space-y-10 px-6 pb-24">
        {rooms.map((r, i) => (
          <motion.article
            key={r.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid overflow-hidden rounded-[2rem] bg-card shadow-soft transition-shadow hover:shadow-luxe lg:grid-cols-5"
          >
            <div className={`relative aspect-[4/3] overflow-hidden lg:col-span-3 lg:aspect-auto ${i % 2 ? "lg:order-2" : ""}`}>
              <img src={r.img} alt={r.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[2s] hover:scale-110" />
              <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy">
                Available now
              </span>
            </div>
            <div className="flex flex-col p-8 lg:col-span-2 lg:p-10">
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-dark">Room Type</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy">{r.name}</h2>
              <p className="mt-4 text-sm text-muted-foreground">{r.desc}</p>

              <div className="mt-6 grid grid-cols-5 gap-3">
                {amenities.map((a) => (
                  <div key={a.label} className="flex flex-col items-center gap-1 rounded-xl bg-secondary p-3 text-center">
                    <a.icon className="h-4 w-4 text-navy" />
                    <span className="text-[10px] font-medium text-navy/70">{a.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-2 pt-7 sm:flex-row">
                <button type="button" onClick={() => openWhatsApp(roomEnquiryMessage(r.name))}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02]">
                  <MessageCircle className="h-4 w-4" /> Enquire Now
                </button>
                <a href="tel:+919121025777"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-navy shadow-luxe transition hover:scale-[1.02]">
                  <BedDouble className="h-4 w-4" /> Call to Book
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}
