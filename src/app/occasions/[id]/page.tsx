import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { cars } from "@/content/site-content";

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
    <div className="bg-black">
      <SiteHeader />

      <div className="mx-auto max-w-5xl px-5 pt-24 pb-32">
        {/* Back */}
        <Link
          href="/occasions"
          className="mb-8 inline-flex items-center gap-1.5 text-[13px] text-[#555] transition-colors hover:text-white"
        >
          <ArrowLeft className="size-3.5" />
          Alle occasions
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          {/* LEFT */}
          <div>
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl bg-[#0a0a0a]">
              <img
                src={car.image}
                alt={`${car.make} ${car.model}`}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-md bg-black/60 px-2.5 py-1 text-[12px] font-medium text-white backdrop-blur-sm">
                {fuelLabel[car.fuel]}
              </span>
            </div>

            {/* Title */}
            <div className="mt-7">
              <h1 className="text-2xl font-semibold tracking-tight text-white">
                {car.make} {car.model}
              </h1>
              <p className="mt-1 text-[13px] text-[#555]">
                {car.year} &middot; {car.km.toLocaleString("nl-NL")} km &middot; {car.transmission}
              </p>
            </div>

            {/* Specs */}
            <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-3">
              {car.specs.map((s) => (
                <div key={s.label} className="bg-black px-4 py-4">
                  <p className="text-[11px] text-[#444]">{s.label}</p>
                  <p className="mt-0.5 text-[13px] font-medium text-white">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="divider mt-8 pt-8">
              <h2 className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-[#444]">
                Beschrijving
              </h2>
              <p className="text-[14px] leading-7 text-[#777]">{car.description}</p>
            </div>

            {/* Trust */}
            <div className="divider mt-8 pt-8">
              <ul className="space-y-2">
                {["Dealer onderhouden & NAP gecertificeerd", "APK-keuring bij aflevering", "1 maand garantie standaard inbegrepen", "Inruil mogelijk"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-[13px] text-[#666]">
                    <span className="size-1.5 shrink-0 rounded-full bg-white/25" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT – sticky sidebar */}
          <div className="lg:sticky lg:top-20">
            <div className="surface rounded-xl p-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#444]">Vraagprijs</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-white">{price(car.price)}</p>
              <p className="mt-1 text-[12px] text-[#555]">incl. BTW &middot; excl. tenaamstelling</p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`https://wa.me/31612345678?text=Hallo, ik heb interesse in de ${car.make} ${car.model}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md bg-[#25d366] px-4 py-2.5 text-[13px] font-semibold text-black transition-opacity hover:opacity-90"
                >
                  Stuur een WhatsApp
                </a>
                <a
                  href="tel:+31612345678"
                  className="btn-ghost justify-center"
                >
                  <span>Bel ons</span>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-1 text-[12px] text-[#555] transition-colors hover:text-white"
                >
                  Of stuur een bericht <ArrowUpRight className="size-3" />
                </Link>
              </div>

              <div className="divider mt-6 pt-5">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-white/[0.07] flex items-center justify-center text-[11px] font-semibold text-white">JG</div>
                  <div>
                    <p className="text-[12px] font-medium text-white">Jan Groenendijk</p>
                    <p className="text-[11px] text-[#555]">Reageert binnen 1 uur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="divider mt-20 pt-16">
            <h2 className="mb-8 text-xl font-semibold tracking-tight text-white">Vergelijkbare occasions</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rc) => (
                <Link
                  key={rc.id}
                  href={`/occasions/${rc.id}`}
                  className="group surface surface-hover block overflow-hidden rounded-xl transition-all duration-200"
                >
                  <div className="relative h-40 overflow-hidden bg-[#0a0a0a]">
                    <img
                      src={rc.image}
                      alt={`${rc.make} ${rc.model}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <p className="text-[13px] font-medium text-white">{rc.make} {rc.model}</p>
                    <p className="mt-0.5 text-[12px] text-[#555]">{rc.year} &middot; {rc.km.toLocaleString("nl-NL")} km</p>
                    <p className="mt-2 text-[13px] font-semibold text-white">{price(rc.price)}</p>
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
