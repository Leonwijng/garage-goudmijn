"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Occasions", href: "/occasions" },
  { label: "Over ons",  href: "/over-ons"  },
  { label: "Contact",   href: "/contact"   },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-black/75 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">

        {/* Brand */}
        <Link href="/" className="text-[13px] font-semibold tracking-tight text-white hover:opacity-80 transition-opacity">
          Garage Groenendijk
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-[#888] transition-colors duration-150 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href="https://wa.me/31612345678"
            className="btn-ghost text-[13px] py-1.5"
          >
            WhatsApp
          </a>
          <Link href="/occasions" className="btn-primary text-[13px] py-1.5">
            Bekijk occasions
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex size-8 items-center justify-center rounded-md text-[#888] hover:text-white md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/[0.06] bg-black px-5 pb-5 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-[#888] transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <a href="https://wa.me/31612345678" className="btn-ghost justify-center text-sm">WhatsApp</a>
            <Link href="/occasions" className="btn-primary justify-center text-sm">Bekijk occasions</Link>
          </div>
        </div>
      )}
    </header>
  );
}
