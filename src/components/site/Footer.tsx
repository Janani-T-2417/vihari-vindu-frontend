import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-navy text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ background: "radial-gradient(circle at 20% 0%, var(--gold) 0%, transparent 50%)" }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="rounded-2xl bg-cream/5 p-4">
            <Logo />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            A refined hospitality address in Chirala — where authentic Andhra
            flavours meet luxury comfort.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 transition hover:bg-gold hover:text-navy">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 transition hover:bg-gold hover:text-navy">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gradient-gold">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/", "Home"], ["/tiffins", "Tiffins"], ["/meals", "Meals"],
              ["/rooms", "Rooms"], ["/gallery", "Gallery"], ["/about", "About"], ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-cream/70 transition hover:text-gold">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gradient-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-gold" />
              <span>Opp. Santhi Theatre, Masid Centre,<br />Chirala, Bapatla District,<br />Andhra Pradesh</span>
            </li>
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-gold" /><a href="tel:+919121023555">9121023555</a></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-gold" /><a href="tel:+919121025777">9121025777</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-gold" /><span>hello@viharivindu.in</span></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gradient-gold">Hours</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 text-gold" /><span>Restaurant<br /><span className="text-cream/60">6:30 AM – 11:00 PM</span></span></li>
            <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 text-gold" /><span>Front Desk<br /><span className="text-cream/60">24 / 7</span></span></li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Vihari Vindu. All rights reserved.</p>
          <p>Tiffins · Meals · Luxury Rooms</p>
        </div>
      </div>
    </footer>
  );
}
