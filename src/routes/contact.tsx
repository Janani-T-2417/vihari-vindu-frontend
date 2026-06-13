import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import heroRestaurant from "@/assets/hero-restaurant.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vihari Vindu" },
      { name: "description", content: "Reach Vihari Vindu hotel & restaurant in Chirala. Call 9121023555 / 9121025777 or send us a message." },
      { property: "og:title", content: "Contact Vihari Vindu" },
      { property: "og:description", content: "Hotel & restaurant in Chirala, Andhra Pradesh." },
      { property: "og:image", content: heroRestaurant },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.phone.trim()) next.phone = "Phone is required";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const whatsappMessage = `Hello Vihari Vindu,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n\nI am contacting through your website.`;
    const whatsappURL = `https://wa.me/919121023555?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");

    setForm({ name: "", phone: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's <span className="text-gradient-gold">connect</span></>}
        subtitle="Reach out for reservations, group bookings or any questions — our team will get back to you promptly."
        image={heroRestaurant}
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-5">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5 lg:col-span-2"
        >
          {[
            {
              icon: MapPin, t: "Visit us",
              d: <>Opp. Santhi Theatre, Masid Centre,<br />Chirala, Bapatla District,<br />Andhra Pradesh</>,
            },
            {
              icon: Phone, t: "Call us",
              d: (
                <div className="space-y-1">
                  <a href="tel:+919121023555" className="block hover:text-gold-dark">9121023555</a>
                  <a href="tel:+919121025777" className="block hover:text-gold-dark">9121025777</a>
                </div>
              ),
            },
            { icon: Mail, t: "Email", d: <a href="mailto:hello@viharivindu.in" className="hover:text-gold-dark">hello@viharivindu.in</a> },
            {
              icon: Clock, t: "Business hours",
              d: <>Restaurant: 6:30 AM – 11:00 PM<br />Front Desk: 24 / 7</>,
            },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex gap-4 rounded-3xl bg-card p-6 shadow-soft"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-gold text-navy">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-lg font-semibold text-navy">{c.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.d}</div>
              </div>
            </motion.div>
          ))}

          <div className="flex flex-col gap-2 sm:flex-row">
            <a href="tel:+919121023555" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-navy shadow-luxe">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={"https://wa.me/919121023555?text=" + encodeURIComponent("Hello Vihari Vindu, I would like to know more about your rooms and food services.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-soft"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="rounded-3xl bg-card p-8 shadow-luxe lg:col-span-3"
        >
          <h2 className="font-display text-3xl font-bold text-navy">Send a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">Tell us how we can help — we'll respond as soon as possible.</p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              { k: "name", label: "Name", type: "text", required: true },
              { k: "phone", label: "Phone", type: "tel", required: true },
            ].map((f) => (
              <label key={f.k} className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-navy/70">{f.label}</span>
                <input
                  type={f.type}
                  required={f.required}
                  value={(form as any)[f.k]}
                  onChange={(e) => {
                    setForm({ ...form, [f.k]: e.target.value });
                    if (errors[f.k]) setErrors((prev) => { const n = { ...prev }; delete n[f.k]; return n; });
                  }}
                  className="mt-1.5 w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
                {errors[f.k] && <p className="mt-1 text-xs text-red-500">{errors[f.k]}</p>}
              </label>
            ))}
            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-navy/70">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-navy/70">Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  if (errors.message) setErrors((prev) => { const n = { ...prev }; delete n.message; return n; });
                }}
                className="mt-1.5 w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-cream shadow-soft transition hover:bg-navy/90"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </motion.form>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl shadow-luxe lg:col-span-5"
        >
          <iframe
            title="Vihari Vindu location"
            src="https://www.google.com/maps?q=Chirala+Bapatla+Andhra+Pradesh&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </motion.div>
      </div>
    </>
  );
}
