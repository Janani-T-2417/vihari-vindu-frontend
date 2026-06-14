import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import mealsAndhra from "@/assets/meals-andhra.jpg";
import mealsVeg from "@/assets/meals-veg.jpg";
import mealsMini from "@/assets/meals-mini.jpg";
import mealsDeluxe from "@/assets/meals-deluxe.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";

export const Route = createFileRoute("/meals")({
  head: () => ({
    meta: [
      { title: "Meals Menu — Vihari Vindu" },
      { name: "description", content: "Banana-leaf Andhra meals, mini meals, deluxe thali and South Indian platters at Vihari Vindu, Chirala." },
      { property: "og:title", content: "Meals Menu — Vihari Vindu" },
      { property: "og:description", content: "Traditional Andhra meals served on banana leaf." },
      { property: "og:image", content: mealsAndhra },
    ],
  }),
  component: MealsPage,
});

const categories = [
  {
    name: "Veg Meals",
    price: "₹140",
    image: mealsVeg,
    desc: "Unlimited steamed rice with daily-changing dal, sambar, rasam, two curries, curd and sweet.",
    highlights: ["Unlimited rice", "2 seasonal curries", "Sambar & rasam", "Curd & pickle", "Sweet of the day"],
  },
  {
    name: "Mini Meals",
    price: "₹110",
    image: mealsMini,
    desc: "A lighter portion meal — perfect for a quick, balanced lunch on a busy day.",
    highlights: ["Limited rice", "Dal & sambar", "1 vegetable curry", "Curd", "Papad"],
  },
  {
    name: "Special Andhra Meals",
    price: "₹220",
    image: mealsAndhra,
    desc: "An indulgent Andhra spread on banana leaf — with our signature gongura, pulusu and pachadi.",
    highlights: ["Banana leaf served", "Gongura pachadi", "Andhra pulusu", "3 curries", "Curd rice & sweet"],
  },
  {
    name: "Deluxe Meals",
    price: "₹320",
    image: mealsDeluxe,
    desc: "Our most generous platter — multiple rice varieties, premium curries and traditional desserts.",
    highlights: ["3 rice varieties", "5 curries", "Premium desserts", "Banana leaf serve", "Refills included"],
  },
  {
    name: "South Indian Thali",
    price: "₹180",
    image: mealsVeg,
    desc: "A cross-state South Indian platter — sambar, rasam, kootu, poriyal and aviyal.",
    highlights: ["Sambar & rasam", "Aviyal & kootu", "Poriyal", "Curd & pickle", "Payasam"],
  },
];

const wa = (name: string) =>
  "https://wa.me/919121025777?text=" +
  encodeURIComponent(`Hello, I would like to enquire about: ${name} at Vihari Vindu.`);

function MealsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Meals"
        title={<>Banana leaf <span className="text-gradient-gold">feasts</span></>}
        subtitle="From a quick mini meals plate to a generous Andhra deluxe spread — every meal at Vihari Vindu is cooked the traditional way."
        image={mealsAndhra}
      />
      <div className="mx-auto max-w-7xl space-y-16 px-6 pb-24">
        {categories.map((c, i) => (
          <motion.section
            key={c.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={c.image} alt={c.name} loading="lazy" className="aspect-[5/4] w-full object-cover transition-transform duration-[2s] hover:scale-105" />
            </div>
            <div className="rounded-[2rem] bg-card p-8 shadow-soft md:p-10">
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-dark">Category {i + 1}</div>
              <h2 className="mt-2 font-display text-4xl font-bold text-navy">{c.name}</h2>
              <div className="mt-2 font-display text-3xl font-bold text-gradient-gold">{c.price}</div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.desc}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {c.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-gold text-navy">
                      <Check className="h-3 w-3" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={wa(c.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                </a>
                <a href="tel:+919121025777" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-navy shadow-luxe">
                  Call to Reserve
                </a>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </>
  );
}
