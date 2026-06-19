import Link from "next/link";
import { MessageCircle, Wrench } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeIn } from "@/components/FadeIn";
import { services, business } from "@/content/site-content";
import { AppointmentForm } from "./appointment-form";

export const metadata = {
  title: "Werkplaats – APK, onderhoud & reparatie",
  description:
    "APK-keuring, onderhoud en reparatie in Appingedam. Eerlijk advies, duidelijke tarieven en snel een afspraak inplannen bij Groenendijk Garage & Occasions.",
};

export default function WerkplaatsPage() {
  return (
    <div className="bg-white">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-28 pb-16">
        <FadeIn>
          <p className="mb-4 font-heading text-[11px] font-bold uppercase tracking-widest text-[#2E4DA0]">Werkplaats</p>
          <h1 className="text-balance font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-[#1A2F5E]">
            APK, onderhoud en reparatie — gewoon eerlijk uitgelegd.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[15px] leading-7 text-[#333333]">
            Onze werkplaats in Appingedam staat klaar voor APK-keuringen, onderhoud en reparaties aan
            elk merk auto. We laten je altijd zien en weten wat er aan de hand is, voordat we iets repareren.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`${business.whatsappHref}?text=Hallo, ik wil graag een afspraak maken in de werkplaats`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="size-4" />
              Maak een afspraak via WhatsApp
            </a>
            <Link href="/contact" className="btn-ghost">
              Bel of mail ons
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Services + tarieven */}
      <div className="bg-[#EBF0FA]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <FadeIn className="mb-10">
            <h2 className="font-heading text-xl font-bold tracking-tight text-[#1A2F5E]">Onze diensten &amp; tarieven</h2>
            <p className="mt-2 text-[13px] text-[#333333]">Indicatieve prijzen — voor een exacte prijs bellen of WhatsAppen we je graag terug.</p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.06}>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-[#2E4DA0] text-white">
                    <Wrench className="size-4.5" />
                  </div>
                  <p className="font-heading text-[14px] font-bold text-[#1A2F5E]">{s.title}</p>
                  <p className="mt-2 text-[13px] leading-6 text-[#333333]">{s.description}</p>
                  <p className="mt-4 font-heading text-[13px] font-semibold text-[#2E4DA0]">{s.priceFrom}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Online afspraak maken */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#1A2F5E]">Online een afspraak maken</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#333333]">
              Geen ingewikkelde formulieren — laat ons gewoon weten wat je nodig hebt en wanneer het
              jou schikt. Wij plannen de afspraak in en bevestigen die via WhatsApp of telefoon.
            </p>
            <ul className="mt-6 space-y-2">
              {["Reactie binnen 24 uur", "Vervangend vervoer mogelijk", "Altijd eerst overleg over de prijs"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-[13px] text-[#333333]">
                  <span className="size-1.5 shrink-0 rounded-full bg-[#2E4DA0]" />
                  {t}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.08}>
            <AppointmentForm />
          </FadeIn>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
