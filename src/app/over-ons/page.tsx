import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeIn } from "@/components/FadeIn";

export const metadata = {
  title: "Over ons",
  description:
    "Garage Groenendijk – een familiebedrijf met eerlijk advies en persoonlijke service.",
};

const values = [
  { title: "Persoonlijk",      text: "Geen nummer, maar een mens. Wij nemen de tijd voor jou en jouw wensen." },
  { title: "Eerlijk",          text: "Transparante prijzen, duidelijke communicatie, geen verborgen kosten." },
  { title: "Familiebedrijf",   text: "Al generaties draait ons bedrijf op vertrouwen en vakmanschap." },
  { title: "Kwaliteit",        text: "Elk voertuig selecteren en controleren wij zorgvuldig voor verkoop." },
];

const team = [
  { initials: "JG", name: "Jan Groenendijk",   role: "Eigenaar & Verkoop"   },
  { initials: "LG", name: "Lisa Groenendijk",  role: "Administratie"        },
  { initials: "TV", name: "Tom Visser",         role: "Werkplaats & APK"     },
];

export default function OverOnsPage() {
  return (
    <div className="bg-black">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pt-28 pb-20">
        <FadeIn>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#444]">Over ons</p>
          <h1 className="text-balance text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.15] tracking-tight text-white">
            Een garage waar je als mens<br className="hidden sm:block" /> behandeld wordt.
          </h1>
          <p className="mt-6 max-w-[52ch] text-[15px] leading-7 text-[#666]">
            Garage Groenendijk is een familiebedrijf. Wij selecteren elke auto zorgvuldig,
            zijn eerlijk over staat en prijs, en staan ook na de koop voor je klaar.
            Geen druk, geen trucjes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/31612345678" className="btn-primary">
              Stuur een WhatsApp <ArrowRight className="size-3.5" />
            </a>
            <Link href="/occasions" className="btn-ghost">
              Bekijk het aanbod
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Values */}
      <div className="divider">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <FadeIn className="mb-10">
            <h2 className="text-xl font-semibold tracking-tight text-white">Waar wij voor staan</h2>
          </FadeIn>
          <div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.06}>
                <div className="bg-black px-6 py-7">
                  <p className="text-[13px] font-semibold text-white">{v.title}</p>
                  <p className="mt-2 text-[13px] leading-6 text-[#555]">{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="divider">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <FadeIn className="mb-10">
            <h2 className="text-xl font-semibold tracking-tight text-white">Het team</h2>
            <p className="mt-2 text-[13px] text-[#555]">De mensen achter Garage Groenendijk.</p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-3">
            {team.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.07}>
                <div className="surface rounded-xl p-5">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-white/[0.07] text-[13px] font-semibold text-white">
                    {m.initials}
                  </div>
                  <p className="text-[13px] font-medium text-white">{m.name}</p>
                  <p className="mt-0.5 text-[12px] text-[#555]">{m.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="divider">
        <FadeIn>
          <div className="mx-auto max-w-5xl px-5 py-20 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Benieuwd naar ons aanbod?</h2>
            <p className="mx-auto mt-3 max-w-[40ch] text-[14px] text-[#555]">
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
