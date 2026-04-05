import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07] bg-black">
      <div className="mx-auto max-w-5xl px-5 py-12">

        <div className="grid gap-8 sm:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <p className="text-[13px] font-semibold text-white">Garage Groenendijk</p>
            <p className="mt-2 max-w-xs text-[13px] leading-6 text-[#555]">
              Persoonlijk advies en eerlijke occasions in de regio. Bereikbaar via WhatsApp, telefoon en e-mail.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-[#555]">Pagina&apos;s</p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Occasions",  href: "/occasions"  },
                { label: "Over ons",   href: "/over-ons"   },
                { label: "Contact",    href: "/contact"    },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-[13px] text-[#666] transition-colors hover:text-white">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-[#555]">Contact</p>
            <div className="flex flex-col gap-2 text-[13px] text-[#666]">
              <a href="tel:+31501234567"              className="transition-colors hover:text-white">+31 623687249</a>
              <a href="mailto:info@garagegroenendijk.nl" className="transition-colors hover:text-white">info@garagegroenendijk.nl</a>
              <a href="https://wa.me/31623687249"     className="transition-colors hover:text-white">WhatsApp</a>
              <span className="text-[#444]">Hoofdstraat 12, Appingedam</span>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-white/[0.06] pt-6 text-[12px] text-[#444]">
          © {new Date().getFullYear()} Garage Groenendijk
        </div>
      </div>
    </footer>
  );
}
