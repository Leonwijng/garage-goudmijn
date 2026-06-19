import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, MessageCircle, Zap } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeIn } from "@/components/FadeIn";
import { cars, reviews, usps, business } from "@/content/site-content";

const fuelLabel: Record<string, string> = {
  elektrisch: "Elektrisch",
  benzine:    "Benzine",
  diesel:     "Diesel",
  hybride:    "Hybride",
};

const uspIcons = [MessageCircle, BadgeCheck, Zap];

function price(n: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency", currency: "EUR", maximumFractionDigits: 0,
  }).format(n);
}

export default function HomePage() {
  const featured = cars.slice(0, 3);
  const evCars = cars.filter((c) => c.fuel === "elektrisch");

  return (
    <div className="bg-white">
      <SiteHeader />

      {/* HERO */}
      <section className="relative flex min-h-[88svh] flex-col items-center justify-center overflow-hidden px-5 pt-16 text-center">
        <img
          src="/golfje.jpeg"
          alt="Occasion bij Groenendijk Garage & Occasions in Appingedam"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A2F5E]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A2F5E]/40 via-transparent to-[#1A2F5E]/85" />

        <div className="relative mx-auto max-w-3xl">
          <p className="animate-fade-up delay-1 callout mb-4 text-[14px] text-white/80">
            Persoonlijk advies &middot; Eerlijke prijs &middot; Al 70 jaar vertrouwd
          </p>
          <h1 className="animate-fade-up delay-2 text-balance font-heading text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Jouw volgende auto staat klaar in Appingedam
          </h1>
          <p className="animate-fade-up delay-3 mx-auto mt-6 max-w-[46ch] text-[15px] leading-7 text-white/85">
            Bij Groenendijk vind je een zorgvuldig geselecteerd aanbod occasions en een werkplaats
            waar je gewoon eerlijk verteld wordt wat er aan de hand is. Geen verkooppraatjes, wel een goed gevoel.
          </p>
          <div className="animate-fade-up delay-4 mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/occasions" className="btn-primary">
              Bekijk occasions <ArrowRight className="size-3.5" />
            </Link>
            <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="size-4" />
              Stuur een WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* USP-BALK */}
      <section className="bg-[#EBF0FA]">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-px overflow-hidden sm:grid-cols-3">
            {usps.map((u, i) => {
              const Icon = uspIcons[i];
              return (
                <FadeIn key={u.title} delay={i * 0.06}>
                  <div className="flex flex-col items-center px-6 py-10 text-center sm:items-start sm:text-left">
                    <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-[#2E4DA0] text-white">
                      <Icon className="size-5" />
                    </div>
                    <p className="font-heading text-[15px] font-bold text-[#1A2F5E]">{u.title}</p>
                    <p className="mt-2 text-[13px] leading-6 text-[#333333]">{u.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED CARS */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <FadeIn className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 font-heading text-[11px] font-bold uppercase tracking-widest text-[#2E4DA0]">Actueel aanbod</p>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#1A2F5E]">Uitgelichte occasions</h2>
          </div>
          <Link href="/occasions" className="flex items-center gap-1 text-[13px] font-semibold text-[#2E4DA0] transition-colors hover:text-[#1A2F5E]">
            Alles bekijken <ArrowUpRight className="size-3.5" />
          </Link>
        </FadeIn>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((car, i) => (
            <FadeIn key={car.id} delay={i * 0.07}>
              <Link
                href={`/occasions/${car.id}`}
                className="group surface surface-hover block overflow-hidden rounded-xl transition-all duration-200"
              >
                <div className="relative h-48 overflow-hidden bg-[#EBF0FA]">
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-3 left-3 rounded-md bg-[#1A2F5E] px-2 py-0.5 text-[11px] font-semibold text-white">
                    {fuelLabel[car.fuel]}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-heading text-[14px] font-bold text-[#1A2F5E]">{car.make} {car.model}</p>
                  <p className="mt-0.5 text-[12px] text-[#555]">{car.year} &middot; {car.km.toLocaleString("nl-NL")} km</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-base font-bold text-[#1A2F5E]">{price(car.price)}</span>
                    <span className="flex items-center gap-1 text-[12px] font-semibold text-[#2E4DA0]">
                      Meer info <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* EV-SECTIE */}
      <section className="bg-[#1A2F5E]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="mb-4 font-heading text-[11px] font-bold uppercase tracking-widest text-[#9fb3e0]">Elektrisch rijden</p>
              <h2 className="font-heading text-2xl font-bold leading-snug tracking-tight text-white">
                Twijfel je over elektrisch? Wij helpen je op weg.
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-[#cdd7ef]">
                Steeds meer kopers tussen de 25 en 45 stappen over op een elektrische occasion.
                Wij leggen je in gewone taal uit wat dat kost, hoe ver je komt en welke auto bij je past
                — zonder vakjargon.
              </p>
              <Link href="/elektrisch-rijden" className="mt-7 inline-flex items-center gap-1.5 font-heading text-[13px] font-semibold text-white underline-offset-4 hover:underline">
                Meer over elektrisch rijden <ArrowUpRight className="size-3.5" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {evCars.slice(0, 2).map((car) => (
                  <Link
                    key={car.id}
                    href={`/occasions/${car.id}`}
                    className="group block overflow-hidden rounded-xl bg-white/5 transition-colors hover:bg-white/10"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img src={car.image} alt={`${car.make} ${car.model}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    </div>
                    <div className="p-4">
                      <p className="text-[13px] font-semibold text-white">{car.make} {car.model}</p>
                      <p className="mt-1 text-[12px] text-[#9fb3e0]">{price(car.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-24">
          <FadeIn className="mb-10">
            <p className="mb-2 font-heading text-[11px] font-bold uppercase tracking-widest text-[#2E4DA0]">Klantreviews</p>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#1A2F5E]">Wat klanten over ons zeggen</h2>
            <p className="mt-1.5 text-[13px] text-[#555]">4.9 / 5 &mdash; 120+ Google-beoordelingen</p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {reviews.slice(0, 4).map((r, i) => (
              <FadeIn key={r.name} delay={i * 0.06}>
                <div className="surface rounded-xl p-5">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <svg key={j} className="size-3.5 fill-amber-500" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[13px] leading-6 text-[#333333]">&ldquo;{r.text}&rdquo;</p>
                  <div className="mt-4 border-t border-[#1A2F5E]/10 pt-4">
                    <p className="font-heading text-[12px] font-semibold text-[#1A2F5E]">{r.name}</p>
                    <p className="text-[11px] text-[#666]">{r.location}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EBF0FA]">
        <FadeIn>
          <div className="mx-auto max-w-6xl px-5 py-20 text-center">
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-[#1A2F5E]">
              Klaar om jouw volgende auto te vinden?
            </h2>
            <p className="mx-auto mt-4 max-w-[40ch] text-[15px] text-[#333333]">
              Bekijk ons aanbod of stuur ons een berichtje. Je krijgt gewoon snel antwoord.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/occasions" className="btn-primary">
                Bekijk occasions <ArrowRight className="size-3.5" />
              </Link>
              <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle className="size-4" />
                WhatsApp ons
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <SiteFooter />
    </div>
  );
}
