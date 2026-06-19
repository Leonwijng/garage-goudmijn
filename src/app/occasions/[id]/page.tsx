import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { cars, business } from "@/content/site-content";

const fuelLabel: Record<string, string> = {
  elektrisch: "Elektrisch",
  benzine: "Benzine",
  diesel: "Diesel",
  hybride: "Hybride",
};

function price(n: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency", currency: "EUR", maximumFractionDigits: 0,
  }).format(n);
}

export async function generateStaticParams() {
  return cars.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);
  if (!car) return {};
  return {
    title: `${car.make} ${car.model} – ${price(car.price)}`,
    description: car.description,
  };
}

export default async function OccasionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);
  if (!car) notFound();

  const related = cars.filter((c) => c.id !== car.id).slice(0, 3);

  return (
    <div className="bg-white">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-5 pt-24 pb-32">
        {/* Back */}
        <Link
          href="/occasions"
          className="mb-8 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#2E4DA0] transition-colors hover:text-[#1A2F5E]"
        >
          <ArrowLeft className="size-3.5" />
          Alle occasions
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          {/* LEFT */}
          <div>
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl bg-[#EBF0FA]">
              <img
                src={car.image}
                alt={`${car.make} ${car.model}`}
                className="aspect-[16/9] w-full object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded-md bg-[#1A2F5E] px-2.5 py-1 text-[12px] font-semibold text-white">
                {fuelLabel[car.fuel]}
              </span>
            </div>

            {/* Title */}
            <div className="mt-7">
              <h1 className="font-heading text-2xl font-bold tracking-tight text-[#1A2F5E]">
                {car.make} {car.model}
              </h1>
              <p className="mt-1 text-[13px] text-[#555]">
                {car.year} &middot; {car.km.toLocaleString("nl-NL")} km &middot; {car.transmission}
              </p>
            </div>

            {/* Specs */}
            <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#1A2F5E]/10 bg-[#1A2F5E]/10 sm:grid-cols-3">
              {car.specs.map((s) => (
                <div key={s.label} className="bg-white px-4 py-4">
                  <p className="text-[11px] text-[#8693b8]">{s.label}</p>
                  <p className="mt-0.5 text-[13px] font-semibold text-[#1A2F5E]">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="divider mt-8 pt-8">
              <h2 className="mb-3 font-heading text-[13px] font-bold uppercase tracking-widest text-[#2E4DA0]">
                Beschrijving
              </h2>
              <p className="text-[14px] leading-7 text-[#333333]">{car.description}</p>
            </div>

            {/* Trust */}
            <div className="divider mt-8 pt-8">
              <ul className="space-y-2">
                {["Dealer onderhouden & NAP gecertificeerd", "APK-keuring bij aflevering", "1 maand garantie standaard inbegrepen", "Inruil mogelijk"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-[13px] text-[#333333]">
                    <span className="size-1.5 shrink-0 rounded-full bg-[#2E4DA0]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT – sticky sidebar */}
          <div className="lg:sticky lg:top-20">
            <div className="surface rounded-xl p-6">
              <p className="font-heading text-[11px] font-bold uppercase tracking-widest text-[#2E4DA0]">Vraagprijs</p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-[#1A2F5E]">{price(car.price)}</p>
              <p className="mt-1 text-[12px] text-[#555]">incl. BTW &middot; excl. tenaamstelling</p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`${business.whatsappHref}?text=${encodeURIComponent(`Hallo, ik heb interesse in de ${car.make} ${car.model}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp justify-center"
                >
                  <MessageCircle className="size-4" />
                  Stuur een WhatsApp
                </a>
                <a
                  href={business.phoneHref}
                  className="btn-ghost justify-center"
                >
                  <Phone className="size-3.5" />
                  Bel ons
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-1 text-[12px] font-semibold text-[#2E4DA0] transition-colors hover:text-[#1A2F5E]"
                >
                  Of stuur een bericht <ArrowUpRight className="size-3" />
                </Link>
              </div>

              <div className="divider mt-6 pt-5">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#2E4DA0] text-[11px] font-semibold text-white">RG</div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#1A2F5E]">Ria Groenendijk</p>
                    <p className="text-[11px] text-[#555]">Reageert binnen 24 uur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="divider mt-20 pt-16">
            <h2 className="mb-8 font-heading text-xl font-bold tracking-tight text-[#1A2F5E]">Vergelijkbare occasions</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rc) => (
                <Link
                  key={rc.id}
                  href={`/occasions/${rc.id}`}
                  className="group surface surface-hover block overflow-hidden rounded-xl transition-all duration-200"
                >
                  <div className="relative h-40 overflow-hidden bg-[#EBF0FA]">
                    <img
                      src={rc.image}
                      alt={`${rc.make} ${rc.model}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-heading text-[13px] font-bold text-[#1A2F5E]">{rc.make} {rc.model}</p>
                    <p className="mt-0.5 text-[12px] text-[#555]">{rc.year} &middot; {rc.km.toLocaleString("nl-NL")} km</p>
                    <p className="mt-2 text-[13px] font-bold text-[#1A2F5E]">{price(rc.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
