import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { business, navItems } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1A2F5E]/10 bg-[#1A2F5E]">
      <div className="mx-auto max-w-6xl px-5 py-14">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <p className="font-heading text-[15px] font-bold text-white">Groenendijk</p>
            <p className="text-[12px] font-semibold text-[#9fb3e0]">Garage &amp; Occasions</p>
            <p className="mt-3 max-w-xs text-[13px] leading-6 text-[#b9c6e5]">
              Al 70 jaar het vertrouwde adres in Appingedam voor occasions, APK, onderhoud en reparatie.
            </p>
            <div className="mt-4 flex gap-3">
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex size-8 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20">
                <Facebook className="size-4" />
              </a>
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex size-8 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20">
                <Instagram className="size-4" />
              </a>
              <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex size-8 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20">
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="mb-3 font-heading text-[11px] font-bold uppercase tracking-widest text-[#7d92c7]">Pagina&apos;s</p>
            <nav className="flex flex-col gap-2">
              {navItems.map((l) => (
                <Link key={l.href} href={l.href} className="text-[13px] text-[#cdd7ef] transition-colors hover:text-white">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Openingstijden */}
          <div>
            <p className="mb-3 font-heading text-[11px] font-bold uppercase tracking-widest text-[#7d92c7]">Openingstijden</p>
            <div className="flex flex-col gap-2">
              {business.hours.map((h) => (
                <div key={h.day} className="flex items-baseline justify-between gap-3 text-[13px] text-[#cdd7ef]">
                  <span>{h.day}</span>
                  <span className="text-white">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 font-heading text-[11px] font-bold uppercase tracking-widest text-[#7d92c7]">Contact</p>
            <div className="flex flex-col gap-2 text-[13px] text-[#cdd7ef]">
              <a href={business.phoneHref} className="transition-colors hover:text-white">{business.phone}</a>
              <a href={`mailto:${business.email}`} className="transition-colors hover:text-white">{business.email}</a>
              <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">WhatsApp</a>
              <span>{business.address.street}, {business.address.city}</span>
            </div>
          </div>

        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] text-[#7d92c7] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Groenendijk | Garage &amp; Occasions</span>
          <Link href="/privacyverklaring" className="transition-colors hover:text-white">Privacyverklaring</Link>
        </div>
      </div>
    </footer>
  );
}
