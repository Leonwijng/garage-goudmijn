"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { navItems, business } from "@/content/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1A2F5E]/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">

        {/* Brand */}
        <Link href="/" className="flex items-baseline gap-1 font-heading text-[15px] font-bold tracking-tight text-[#1A2F5E] transition-opacity hover:opacity-80">
          Groenendijk
          <span className="hidden text-[12px] font-semibold text-[#2E4DA0] sm:inline">| Garage &amp; Occasions</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-heading text-[13px] font-semibold text-[#333333] transition-colors duration-150 hover:text-[#2E4DA0]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-[13px] py-1.5">
            <MessageCircle className="size-3.5" />
            WhatsApp
          </a>
          <Link href="/occasions" className="btn-primary text-[13px] py-1.5">
            Bekijk occasions
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex size-9 items-center justify-center rounded-md text-[#1A2F5E] hover:bg-[#EBF0FA] lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-[#1A2F5E]/10 bg-white px-5 pb-5 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 font-heading text-[14px] font-semibold text-[#333333] transition-colors hover:bg-[#EBF0FA] hover:text-[#2E4DA0]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center text-sm">
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
            <Link href="/occasions" className="btn-primary justify-center text-sm">Bekijk occasions</Link>
          </div>
        </div>
      )}
    </header>
  );
}
