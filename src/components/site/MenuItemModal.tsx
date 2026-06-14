import { AnimatePresence, motion } from "motion/react";
import { X, MessageCircle, Phone } from "lucide-react";
import { useEffect } from "react";
import type { MenuItem } from "@/data/menu";
import { openWhatsApp } from "@/lib/whatsapp";

export function MenuItemModal({
  item,
  open,
  onClose,
}: {
  item: MenuItem;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleWhatsAppEnquiry = () => {
    openWhatsApp(`Hello Vihari Vindu,

I would like to enquire about:

Product: ${item.name}
Price: ₹${item.price}

Please provide more details.`);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-navy/60 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            className="relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-card shadow-luxe md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-card/90 text-navy shadow-soft transition hover:bg-card"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative aspect-square overflow-hidden md:aspect-auto">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col p-7">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                {item.category}
              </div>
              <h3 className="mt-1 font-display text-3xl font-bold text-navy">{item.name}</h3>
              <div className="mt-2 font-display text-3xl font-bold text-gradient-gold">₹{item.price}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <div className="mt-auto flex flex-col gap-2 pt-6 sm:flex-row">
                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
                </button>
                <a
                  href="tel:+919121025777"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-navy shadow-luxe transition hover:scale-[1.02]"
                >
                  <Phone className="h-4 w-4" /> Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

