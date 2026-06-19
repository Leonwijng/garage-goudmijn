import Link from "next/link";
import { ArrowRight, ArrowUpRight, BatteryCharging } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeIn } from "@/components/FadeIn";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cars, evFaq, business } from "@/content/site-content";

export const metadata = {
  title: "Elektrisch rijden – elektrische occasions in Groningen",
  description:
    "Twijfel je over een elektrische occasion? Lees hoe elektrisch rijden werkt, wat het kost en bekijk ons aanbod elektrische occasions in de regio Groningen.",
};

function price(n: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency", currency: "EUR", maximumFractionDigits: 0,
  }).format(n);
}

export default function ElektrischRijdenPage() {
  const evCars = cars.filter((c) => c.fuel === "elektrisch");

  return (
    <div className="bg-white">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-28 pb-16">
        <FadeIn>
          <p className="mb-4 font-heading text-[11px] font-bold uppercase tracking-widest text-[#2E4DA0]">Elektrisch rijden</p>
          <h1 className="text-balance font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-[#1A2F5E]">
            Elektrisch rijden, gewoon in begrijpelijke taal.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[15px] leading-7 text-[#333333]">
            Steeds meer mensen tussen de 25 en 45 stappen over op een elektrische occasion. Logisch,
            want elektrisch rijden is goedkoper, stiller en relaxter dan je denkt. Wij leggen je uit
            wat je kunt verwachten — zonder vakjargon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/occasions?fuel=elektrisch" className="btn-primary">
              Bekijk elektrische occasions <ArrowRight className="size-3.5" />
            </Link>
            <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Stel je vraag via WhatsApp
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Laadkosten indicatie */}
      <div className="bg-[#EBF0FA]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <FadeIn className="mb-10">
            <h2 className="font-heading text-xl font-bold tracking-tight text-[#1A2F5E]">Wat kost laden?</h2>
            <p className="mt-2 max-w-[60ch] text-[14px] leading-7 text-[#333333]">
              Een ruwe indicatie van de laadkosten per 100 km, afhankelijk van waar je laadt.
            </p>
          </FadeIn>
          <div className="grid gap-px overflow-hidden rounded-xl border border-[#1A2F5E]/10 bg-[#1A2F5E]/10 sm:grid-cols-3">
            {([
              ["Thuis laden", "€3 – €6", "bij een gemiddeld tarief van €0,10–€0,30 per kWh"],
              ["Laadpaal openbaar", "€6 – €10", "iets duurder dan thuis, maar nog steeds voordelig"],
              ["Snelladen onderweg", "€10 – €16", "handig voor lange ritten, hoogste kWh-prijs"],
            ] as const).map(([label, cost, note]) => (
              <div key={label} className="bg-white px-6 py-7">
                <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-[#2E4DA0] text-white">
                  <BatteryCharging className="size-4.5" />
                </div>
                <p className="font-heading text-[13px] font-bold text-[#1A2F5E]">{label}</p>
                <p className="mt-1 text-xl font-bold text-[#2E4DA0]">{cost}</p>
                <p className="mt-1 text-[12px] leading-5 text-[#555]">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EV-aanbod */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <FadeIn className="mb-10 flex items-end justify-between">
          <h2 className="font-heading text-xl font-bold tracking-tight text-[#1A2F5E]">Ons elektrische aanbod</h2>
          <Link href="/occasions?fuel=elektrisch" className="flex items-center gap-1 text-[13px] font-semibold text-[#2E4DA0] transition-colors hover:text-[#1A2F5E]">
            Alles bekijken <ArrowUpRight className="size-3.5" />
          </Link>
        </FadeIn>
        {evCars.length === 0 ? (
          <p className="text-[14px] text-[#555]">Momenteel geen elektrische occasions op voorraad — neem contact op voor de actuele planning.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {evCars.map((car) => (
              <Link
                key={car.id}
                href={`/occasions/${car.id}`}
                className="group surface surface-hover block overflow-hidden rounded-xl transition-all duration-200"
              >
                <div className="relative h-48 overflow-hidden bg-[#EBF0FA]">
                  <img src={car.image} alt={`${car.make} ${car.model}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  <span className="absolute bottom-3 left-3 rounded-md bg-[#1A2F5E] px-2 py-0.5 text-[11px] font-semibold text-white">Elektrisch</span>
                </div>
                <div className="p-4">
                  <p className="font-heading text-[14px] font-bold text-[#1A2F5E]">{car.make} {car.model}</p>
                  <p className="mt-0.5 text-[12px] text-[#555]">{car.year} &middot; {car.km.toLocaleString("nl-NL")} km</p>
                  <p className="mt-3 text-base font-bold text-[#1A2F5E]">{price(car.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* FAQ */}
      <div className="bg-[#EBF0FA]">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <FadeIn className="mb-10">
            <h2 className="font-heading text-xl font-bold tracking-tight text-[#1A2F5E]">Veelgestelde vragen</h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="rounded-xl bg-white px-6">
              <Accordion multiple>
                {evFaq.map((f) => (
                  <AccordionItem key={f.question} value={f.question} className="border-[#1A2F5E]/10">
                    <AccordionTrigger className="font-heading text-[14px] font-semibold text-[#1A2F5E] hover:no-underline">
                      {f.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[13px] leading-6 text-[#333333]">
                      {f.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* CTA */}
      <section>
        <FadeIn>
          <div className="mx-auto max-w-6xl px-5 py-20 text-center">
            <h2 className="text-balance font-heading text-2xl font-bold tracking-tight text-[#1A2F5E]">
              Liever even sparren over elektrisch rijden?
            </h2>
            <p className="mx-auto mt-3 max-w-[44ch] text-[14px] text-[#333333]">
              Stuur ons je vraag via WhatsApp, we denken graag met je mee.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                WhatsApp ons
              </a>
              <Link href="/occasions?fuel=elektrisch" className="btn-ghost">Bekijk aanbod</Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <SiteFooter />
    </div>
  );
}
