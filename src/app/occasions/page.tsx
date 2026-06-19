"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Search, X } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeIn } from "@/components/FadeIn";
import { cars, business } from "@/content/site-content";

const fuelOptions = ["alle", "benzine", "diesel", "elektrisch", "hybride"] as const;
type FuelFilter = (typeof fuelOptions)[number];

const brandOptions = ["alle", ...Array.from(new Set(cars.map((c) => c.make)))];

function price(n: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency", currency: "EUR", maximumFractionDigits: 0,
  }).format(n);
}

const fuelLabel: Record<string, string> = {
  alle: "Alle",
  elektrisch: "Elektrisch",
  benzine: "Benzine",
  diesel: "Diesel",
  hybride: "Hybride",
};

function OccasionsContent() {
  const searchParams = useSearchParams();
  const initialFuel = searchParams.get("fuel");
  const validFuel = fuelOptions.includes(initialFuel as FuelFilter) ? (initialFuel as FuelFilter) : "alle";

  const [fuel, setFuel]         = useState<FuelFilter>(validFuel);
  const [brand, setBrand]       = useState<string>("alle");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [search, setSearch]     = useState("");

  const filtered = cars.filter((c) => {
    const matchFuel   = fuel === "alle" || c.fuel === fuel;
    const matchBrand  = brand === "alle" || c.make === brand;
    const matchPrice  = c.price <= maxPrice;
    const matchSearch =
      search === "" ||
      `${c.make} ${c.model}`.toLowerCase().includes(search.toLowerCase());
    return matchFuel && matchBrand && matchPrice && matchSearch;
  });

  return (
    <div className="bg-white">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 pt-28 pb-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-[#1A2F5E]">Alle occasions</h1>
            <p className="mt-2 text-[14px] text-[#333333]">
              {cars.length} auto&apos;s beschikbaar &mdash; filter op merk, brandstof of prijs.
            </p>
          </div>
          <a
            href={business.viaBovag}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[13px] font-semibold text-[#2E4DA0] transition-colors hover:text-[#1A2F5E]"
          >
            Bekijk ons volledige aanbod op ViaBovag <ExternalLink className="size-3.5" />
          </a>
        </div>
      </section>

      <div className="sticky top-16 z-40 border-y border-[#1A2F5E]/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-5 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-[#9aa6c4]" />
              <input
                type="text"
                placeholder="Zoek merk of model"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 w-44 rounded-md border border-[#1A2F5E]/15 bg-[#EBF0FA] pl-8 pr-3 text-[12px] text-[#333333] placeholder-[#8693b8] outline-none transition focus:border-[#2E4DA0]"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8693b8] hover:text-[#1A2F5E]">
                  <X className="size-3" />
                </button>
              )}
            </div>

            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="h-9 rounded-md border border-[#1A2F5E]/15 bg-[#EBF0FA] px-3 text-[12px] font-medium text-[#333333] outline-none transition focus:border-[#2E4DA0]"
            >
              {brandOptions.map((b) => (
                <option key={b} value={b}>{b === "alle" ? "Alle merken" : b}</option>
              ))}
            </select>

            <div className="h-4 w-px bg-[#1A2F5E]/10" />

            {fuelOptions.map((f) => (
              <button
                key={f}
                onClick={() => setFuel(f)}
                className={`h-9 rounded-md px-3 text-[12px] font-semibold transition-all ${
                  fuel === f
                    ? "bg-[#2E4DA0] text-white"
                    : "border border-[#1A2F5E]/15 text-[#333333] hover:border-[#2E4DA0]/40"
                }`}
              >
                {fuelLabel[f]}
              </button>
            ))}

            <div className="h-4 w-px bg-[#1A2F5E]/10" />

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#555]">Max. prijs</span>
              <input
                type="range"
                min={5000}
                max={100000}
                step={2500}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-24 accent-[#2E4DA0]"
              />
              <span className="min-w-[60px] text-[11px] font-semibold text-[#1A2F5E]">
                {maxPrice === 100000 ? "geen limiet" : price(maxPrice)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10 pb-28">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-[15px] text-[#555]">Geen auto&apos;s gevonden.</p>
            <button
              onClick={() => { setFuel("alle"); setBrand("alle"); setSearch(""); setMaxPrice(100000); }}
              className="mt-4 text-[13px] font-semibold text-[#2E4DA0] underline-offset-4 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((car, i) => (
              <FadeIn key={car.id} delay={i * 0.04}>
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
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-heading text-[14px] font-bold text-[#1A2F5E]">
                          {car.make} {car.model}
                        </p>
                        <p className="mt-0.5 text-[12px] text-[#555]">
                          {car.year} &middot; {car.km.toLocaleString("nl-NL")} km &middot; {car.transmission}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-[#9aa6c4] transition-colors group-hover:text-[#2E4DA0]" />
                    </div>
                    <p className="mt-3 text-base font-bold text-[#1A2F5E]">{price(car.price)}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}

export default function OccasionsPage() {
  return (
    <Suspense>
      <OccasionsContent />
    </Suspense>
  );
}
