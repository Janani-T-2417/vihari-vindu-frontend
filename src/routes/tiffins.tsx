import { createFileRoute } from "@tanstack/react-router";
import { tiffinCategories } from "@/data/menu";
import { MenuItemCard } from "@/components/site/MenuItemCard";
import { PageHeader } from "@/components/site/PageHeader";
import heroRestaurant from "@/assets/hero-restaurant.jpg";

export const Route = createFileRoute("/tiffins")({
  head: () => ({
    meta: [
      { title: "Tiffins Menu — Vihari Vindu, Chirala" },
      { name: "description", content: "Authentic South Indian tiffins at Vihari Vindu — idly, dosa, vada, bonda, pongali and more. Prices start at ₹25." },
      { property: "og:title", content: "Tiffins Menu — Vihari Vindu" },
      { property: "og:description", content: "Crispy dosas, fluffy idlis, golden vadas and more." },
      { property: "og:image", content: heroRestaurant },
    ],
  }),
  component: TiffinsPage,
});

function TiffinsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tiffins"
        title={<>Fresh from the <span className="text-gradient-gold">kitchen</span></>}
        subtitle="Hand-pressed dosas, steaming idlis and crisp vadas — the classic South Indian tiffin experience, served all day."
        image={heroRestaurant}
      />
      <div className="mx-auto max-w-7xl px-6 pb-24">
        {tiffinCategories.map((cat) => (
          <section key={cat.title} className="mt-16 first:mt-0">
            <div className="mb-8 flex items-end justify-between border-b border-border pb-4">
              <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">{cat.title}</h2>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{cat.items.length} items</span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cat.items.map((item, idx) => (
                <MenuItemCard key={item.name} item={item} index={idx} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
