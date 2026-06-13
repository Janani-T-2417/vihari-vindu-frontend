import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DEFAULT_WHATSAPP_MESSAGE, openWhatsApp } from "@/lib/whatsapp";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="grid h-11 w-11 place-items-center rounded-full bg-navy text-cream shadow-soft transition hover:bg-navy/90"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href="tel:+919121023555"
        aria-label="Call Vihari Vindu"
        className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-navy shadow-luxe transition hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>

      <button
        type="button"
        onClick={() => openWhatsApp(DEFAULT_WHATSAPP_MESSAGE)}
        aria-label="WhatsApp enquiry"
        className="animate-pulse-ring grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
          <path d="M19.05 4.91A10 10 0 0 0 4.07 17.3L3 21l3.79-1a10 10 0 0 0 4.78 1.22h.01A10 10 0 0 0 19.05 4.91Zm-7.47 14.7h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-2.25.59.6-2.19-.2-.31a8.31 8.31 0 1 1 6.39 3.25Zm4.55-6.22c-.25-.13-1.47-.73-1.7-.82-.23-.08-.4-.13-.56.13-.16.25-.65.82-.8.99-.15.16-.3.18-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.3.37-.45.13-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48a.93.93 0 0 0-.67.31c-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.6.13.17 1.78 2.72 4.3 3.81.6.26 1.07.42 1.43.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z"/>
        </svg>
      </button>
    </div>
  );
}
