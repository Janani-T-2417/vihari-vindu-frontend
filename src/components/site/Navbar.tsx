import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { DEFAULT_WHATSAPP_MESSAGE, openWhatsApp } from "@/lib/whatsapp";

const links = [
  { to: "/", label: "Home" },
  { to: "/tiffins", label: "Tiffins" },
  { to: "/meals", label: "Meals" },
  { to: "/rooms", label: "Rooms" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 shadow-navbar`}
      style={{ backgroundColor: "#FCFCFC" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-[90px]" : "h-[110px]"
          }`}
        >
          <Link to="/" aria-label="Vihari Vindu home">
            <Logo size={scrolled ? 52 : 64} />
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="group relative rounded-full px-4 py-2.5 text-[15px] font-bold tracking-wide transition-colors"
                style={{ color: "#222222" }}
                activeProps={{ style: { color: "#C89B3C" } }}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10 transition-colors hover:text-[#C89B3C]">{l.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full"
                        style={{ background: "var(--gradient-gold)" }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={() => openWhatsApp(DEFAULT_WHATSAPP_MESSAGE)}
              aria-label="WhatsApp Vihari Vindu"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-soft transition-all hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </button>
            <a
              href="tel:+919121023555"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-luxe transition-all hover:scale-[1.03]"
              style={{ backgroundColor: "#C89B3C" }}
            >
              <Phone className="h-4 w-4" />
              9121023555
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-12 w-12 place-items-center rounded-full border lg:hidden"
            style={{ borderColor: "#E6C78B", color: "#222222" }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-7xl px-4 lg:hidden"
          >
            <div className="glass rounded-2xl p-3 shadow-soft">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      activeOptions={{ exact: l.to === "/" }}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-accent"
                      activeProps={{ className: "bg-accent text-navy" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={() => openWhatsApp(DEFAULT_WHATSAPP_MESSAGE)}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp 9121023555
                  </button>
                </li>
                <li>
                  <a
                    href="tel:+919121023555"
                    className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-4 py-3 text-sm font-semibold text-navy"
                  >
                    <Phone className="h-4 w-4" /> Call 9121023555
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
