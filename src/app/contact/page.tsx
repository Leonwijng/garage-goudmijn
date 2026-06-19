"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeIn } from "@/components/FadeIn";
import { business } from "@/content/site-content";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent]  = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-white">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-5 pt-28 pb-20">
        <FadeIn className="mb-16">
          <p className="mb-4 font-heading text-[11px] font-bold uppercase tracking-widest text-[#2E4DA0]">Contact</p>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-[#1A2F5E]">Neem contact op</h1>
          <p className="mt-3 max-w-[48ch] text-[14px] leading-7 text-[#333333]">
            Vragen over een auto, wil je proefrijden, of gewoon even kennismaken?
            Wij reageren binnen 24 uur.
          </p>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.6fr]">
          {/* Form */}
          <FadeIn>
            {sent ? (
              <div className="surface rounded-xl px-8 py-12 text-center">
                <p className="text-[15px] font-semibold text-[#1A2F5E]">Bericht verzonden!</p>
                <p className="mt-2 text-[13px] text-[#333333]">We nemen zo snel mogelijk contact met je op.</p>
                <button
                  onClick={() => { setForm({ name: "", email: "", phone: "", message: "" }); setSent(false); }}
                  className="mt-6 text-[13px] font-semibold text-[#2E4DA0] underline-offset-4 hover:underline"
                >
                  Nieuw bericht sturen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {([ ["name", "Naam", "text", true], ["email", "E-mailadres", "email", true], ["phone", "Telefoonnummer", "tel", false] ] as const).map(([field, label, type, required]) => (
                  <div key={field}>
                    <label className="mb-1.5 block text-[12px] font-semibold text-[#333333]">{label}</label>
                    <input
                      type={type}
                      required={required}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full rounded-md border border-[#1A2F5E]/15 bg-white px-3 py-2.5 text-[13px] text-[#333333] outline-none transition focus:border-[#2E4DA0]"
                    />
                  </div>
                ))}
                <div>
                  <label className="mb-1.5 block text-[12px] font-semibold text-[#333333]">Bericht</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-md border border-[#1A2F5E]/15 bg-white px-3 py-2.5 text-[13px] text-[#333333] outline-none transition focus:border-[#2E4DA0]"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Verstuur bericht <ArrowRight className="size-3.5" />
                </button>
              </form>
            )}
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.08} className="space-y-6">
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              <MessageCircle className="size-4" />
              Stuur ons een WhatsApp
            </a>

            <div className="surface rounded-xl p-6">
              <p className="mb-4 font-heading text-[11px] font-bold uppercase tracking-widest text-[#2E4DA0]">Direct contact</p>
              <div className="space-y-3">
                <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-[13px] font-semibold text-[#1A2F5E] transition-colors hover:text-[#2E4DA0]">
                  <span>WhatsApp</span>
                  <span className="font-normal text-[#555]">{business.phone}</span>
                </a>
                <a href={business.phoneHref} className="flex items-center justify-between text-[13px] font-semibold text-[#1A2F5E] transition-colors hover:text-[#2E4DA0]">
                  <span>Telefoon</span>
                  <span className="font-normal text-[#555]">{business.phone}</span>
                </a>
                <a href={`mailto:${business.email}`} className="flex items-center justify-between text-[13px] font-semibold text-[#1A2F5E] transition-colors hover:text-[#2E4DA0]">
                  <span>E-mail</span>
                  <span className="font-normal text-[#555]">{business.email}</span>
                </a>
              </div>
            </div>

            <div className="surface rounded-xl p-6">
              <p className="mb-4 font-heading text-[11px] font-bold uppercase tracking-widest text-[#2E4DA0]">Openingstijden</p>
              <div className="space-y-2">
                {business.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-[13px]">
                    <span className="text-[#333333]">{h.day}</span>
                    <span className={h.time === "Gesloten" ? "text-[#8693b8]" : "font-semibold text-[#1A2F5E]"}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface rounded-xl p-6">
              <p className="mb-2 font-heading text-[11px] font-bold uppercase tracking-widest text-[#2E4DA0]">Adres</p>
              <p className="text-[13px] leading-6 text-[#333333]">
                {business.address.street}<br />
                {business.address.postal} {business.address.city}<br />
                {business.address.country}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Map */}
        <FadeIn delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-xl border border-[#1A2F5E]/10">
            <iframe
              src={business.mapsEmbed}
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie Groenendijk Garage & Occasions"
            />
          </div>
        </FadeIn>
      </div>

      <SiteFooter />
    </div>
  );
}
