import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import heroHotel from "@/assets/hero-hotel.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroRoom from "@/assets/hero-room.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import galleryLobby from "@/assets/gallery-lobby.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomPremium from "@/assets/room-premium.jpg";
import mealsAndhra from "@/assets/meals-andhra.jpg";
import mealsVeg from "@/assets/meals-veg.jpg";
import mealsMini from "@/assets/meals-mini.jpg";
import mealsDeluxe from "@/assets/meals-deluxe.jpg";
import idly from "@/assets/food-idly.jpg";
import dosa from "@/assets/food-dosa.jpg";
import vada from "@/assets/food-vada.jpg";
import bonda from "@/assets/food-bonda.jpg";
import puri from "@/assets/food-puri.jpg";
import uthappam from "@/assets/food-uthappam.jpg";

type Photo = { src: string; cat: string; alt: string };

const photos: Photo[] = [
  { src: heroHotel, cat: "Hotel Exterior", alt: "Hotel exterior at golden hour" },
  { src: galleryExterior, cat: "Hotel Exterior", alt: "Hotel night view" },
  { src: heroRestaurant, cat: "Restaurant Exterior", alt: "Restaurant interior" },
  { src: galleryDining, cat: "Dining Area", alt: "Elegant dining hall" },
  { src: galleryLobby, cat: "Interiors", alt: "Grand lobby" },
  { src: heroRoom, cat: "Rooms", alt: "Luxury suite" },
  { src: roomDeluxe, cat: "Rooms", alt: "Deluxe room" },
  { src: roomDouble, cat: "Rooms", alt: "Double deluxe room" },
  { src: roomFamily, cat: "Rooms", alt: "Family room" },
  { src: roomPremium, cat: "Rooms", alt: "Premium AC room" },
  { src: mealsAndhra, cat: "Food Gallery", alt: "Andhra meals on banana leaf" },
  { src: mealsVeg, cat: "Food Gallery", alt: "Veg meals platter" },
  { src: mealsMini, cat: "Food Gallery", alt: "Mini meals" },
  { src: mealsDeluxe, cat: "Food Gallery", alt: "Deluxe meals" },
  { src: idly, cat: "Food Gallery", alt: "Idly with chutney" },
  { src: dosa, cat: "Food Gallery", alt: "Crispy dosa" },
  { src: vada, cat: "Food Gallery", alt: "Vada" },
  { src: bonda, cat: "Food Gallery", alt: "Mysore bonda" },
  { src: puri, cat: "Food Gallery", alt: "Puri" },
  { src: uthappam, cat: "Food Gallery", alt: "Uthappam" },
];

const categories = ["All", "Hotel Exterior", "Restaurant Exterior", "Dining Area", "Interiors", "Rooms", "Food Gallery"];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Vihari Vindu" },
      { name: "description", content: "Glimpses of Vihari Vindu — hotel, restaurant, rooms and our authentic Andhra food." },
      { property: "og:title", content: "Gallery — Vihari Vindu" },
      { property: "og:description", content: "Photos of our hotel, dining hall, rooms and food." },
      { property: "og:image", content: galleryLobby },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = cat === "All" ? photos : photos.filter((p) => p.cat === cat);

  const change = (delta: number) => {
    if (lightbox === null) return;
    setLightbox((i) => {
      if (i === null) return i;
      return (i + delta + filtered.length) % filtered.length;
    });
  };

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={<>Moments at <span className="text-gradient-gold">Vihari Vindu</span></>}
        subtitle="A look inside our restaurant, rooms and kitchen — captured in light and detail."
        image={galleryLobby}
      />
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest transition ${
                cat === c
                  ? "bg-navy text-cream shadow-soft"
                  : "bg-card text-navy/70 ring-1 ring-border hover:bg-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {filtered.map((p, idx) => (
            <motion.button
              key={`${p.src}-${idx}`}
              type="button"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (idx % 9) * 0.04 }}
              onClick={() => setLightbox(idx)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-card shadow-soft transition hover:shadow-luxe"
            >
              <img src={p.src} alt={p.alt} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-navy/85 to-transparent p-4 text-xs font-medium text-cream opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {p.cat}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-navy/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} aria-label="Close" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream backdrop-blur transition hover:bg-cream/20">
              <X className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); change(-1); }} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream backdrop-blur transition hover:bg-cream/20">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); change(1); }} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream backdrop-blur transition hover:bg-cream/20">
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.img
              key={lightbox}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-luxe"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
