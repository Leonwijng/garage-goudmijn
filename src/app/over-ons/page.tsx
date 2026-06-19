import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeIn } from "@/components/FadeIn";
import { business } from "@/content/site-content";

export const metadata = {
  title: "Over ons – 70 jaar Groenendijk in Appingedam",
  description:
    "Groenendijk Garage & Occasions is al 70 jaar een familiebedrijf in Appingedam. Lees ons verhaal en maak kennis met het team.",
};

const values = [
  { title: "Persoonlijk",    text: "Geen nummer, maar een mens. Wij nemen de tijd voor jou en jouw wensen." },
  { title: "Eerlijk",        text: "Transparante prijzen, duidelijke communicatie, geen verborgen kosten." },
  { title: "Familiebedrijf", text: "Al 70 jaar draait ons bedrijf op vertrouwen en vakmanschap, van generatie op generatie." },
  { title: "Kwaliteit",      text: "Elk voertuig selecteren en controleren wij zorgvuldig voor verkoop." },
];

const team = [
  { initials: "RG", name: "Ria Groenendijk",  role: "Eigenaar & Verkoop" },
  { initials: "LG", name: "Lisa Groenendijk", role: "Administratie" },
  { initials: "TV", name: "Tom Visser",        role: "Werkplaats & APK" },
];

export default function OverOnsPage() {
  return (
    <div className="bg-white">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-28 pb-20">
        <FadeIn>
          <p className="mb-4 font-heading text-[11px] font-bold uppercase tracking-widest text-[#2E4DA0]">Over ons &middot; sinds 1955</p>
          <h1 className="text-balance font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-[#1A2F5E]">
            70 jaar een garage waar je als mens behandeld wordt.
          </h1>
          <p className="mt-6 max-w-[58ch] text-[15px] leading-7 text-[#333333]">
            Groenendijk is een familiebedrijf, al drie generaties lang. Wij selecteren elke auto
            zorgvuldig, zijn eerlijk over staat en prijs, en staan ook na de koop voor je klaar.
            Geen druk, geen trucjes — gewoon een goede auto en een eerlijk verhaal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              Stuur een WhatsApp <ArrowRight className="size-3.5" />
            </a>
            <Link href="/occasions" className="btn-ghost">
              Bekijk het aanbod
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 70 jaar tijdlijn */}
      <div className="bg-[#EBF0FA]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <FadeIn className="mb-10">
            <h2 className="font-heading text-xl font-bold tracking-tight text-[#1A2F5E]">Drie generaties Groenendijk</h2>
          </FadeIn>
          <div className="grid gap-px overflow-hidden rounded-xl border border-[#1A2F5E]/10 bg-[#1A2F5E]/10 sm:grid-cols-3">
            {([
              ["1955", "Opa Groenendijk start een kleine reparatiewerkplaats in Appingedam."],
              ["1988", "De tweede generatie breidt uit met occasionverkoop naast de werkplaats."],
              ["Vandaag", "Ria en Lisa runnen het familiebedrijf, nu ook met elektrische occasions."],
            ] as const).map(([year, text]) => (
              <div key={year} className="bg-white px-6 py-7">
                <p className="font-heading text-xl font-bold text-[#2E4DA0]">{year}</p>
                <p className="mt-2 text-[13px] leading-6 text-[#333333]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <FadeIn className="mb-10">
            <h2 className="font-heading text-xl font-bold tracking-tight text-[#1A2F5E]">Waar wij voor staan</h2>
          </FadeIn>
          <div className="grid gap-px overflow-hidden rounded-xl border border-[#1A2F5E]/10 bg-[#1A2F5E]/10 sm:grid-cols-2">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.06}>
                <div className="bg-[#EBF0FA] px-6 py-7">
                  <p className="font-heading text-[14px] font-bold text-[#1A2F5E]">{v.title}</p>
                  <p className="mt-2 text-[13px] leading-6 text-[#333333]">{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-[#EBF0FA]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <FadeIn className="mb-10">
            <h2 className="font-heading text-xl font-bold tracking-tight text-[#1A2F5E]">Het team</h2>
            <p className="mt-2 text-[13px] text-[#333333]">De mensen achter Groenendijk Garage &amp; Occasions.</p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-3">
            {team.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.07}>
                <div className="rounded-xl bg-white p-5 shadow-sm">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-[#2E4DA0] text-[14px] font-bold text-white">
                    {m.initials}
                  </div>
                  <p className="font-heading text-[14px] font-bold text-[#1A2F5E]">{m.name}</p>
                  <p className="mt-0.5 text-[12px] text-[#555]">{m.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div>
        <FadeIn>
          <div className="mx-auto max-w-6xl px-5 py-20 text-center">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#1A2F5E]">Benieuwd naar ons aanbod?</h2>
            <p className="mx-auto mt-3 max-w-[40ch] text-[14px] text-[#333333]">
              Bekijk alle occasions of neem direct contact op.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/occasions" className="btn-primary">
                Bekijk occasions <ArrowRight className="size-3.5" />
              </Link>
              <Link href="/contact" className="btn-ghost">Contact</Link>
            </div>
          </div>
        </FadeIn>
      </div>

      <SiteFooter />
    </div>
  );
}
