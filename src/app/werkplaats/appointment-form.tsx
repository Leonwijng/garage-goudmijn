"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { business } from "@/content/site-content";

const serviceOptions = ["APK-keuring", "Onderhoud", "Reparatie", "Banden & uitlijning", "Airco-service", "Anders"];

export function AppointmentForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const message = [
    `Hallo, ik wil graag een afspraak maken in de werkplaats.`,
    `Naam: ${name || "-"}`,
    `Dienst: ${service}`,
    date && `Gewenste datum: ${date}`,
    note && `Toelichting: ${note}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <form
      className="surface space-y-4 rounded-xl p-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label className="mb-1.5 block text-[12px] font-semibold text-[#333333]">Naam</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-[#1A2F5E]/15 bg-white px-3 py-2.5 text-[13px] text-[#333333] outline-none transition focus:border-[#2E4DA0]"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[12px] font-semibold text-[#333333]">Gewenste dienst</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-md border border-[#1A2F5E]/15 bg-white px-3 py-2.5 text-[13px] text-[#333333] outline-none transition focus:border-[#2E4DA0]"
          >
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-[12px] font-semibold text-[#333333]">Gewenste datum</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-md border border-[#1A2F5E]/15 bg-white px-3 py-2.5 text-[13px] text-[#333333] outline-none transition focus:border-[#2E4DA0]"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-[12px] font-semibold text-[#333333]">Toelichting (optioneel)</label>
        <textarea
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full resize-none rounded-md border border-[#1A2F5E]/15 bg-white px-3 py-2.5 text-[13px] text-[#333333] outline-none transition focus:border-[#2E4DA0]"
        />
      </div>
      <a
        href={`${business.whatsappHref}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full justify-center"
      >
        Afspraak aanvragen via WhatsApp <ArrowRight className="size-3.5" />
      </a>
    </form>
  );
}
