import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { business } from "@/content/site-content";

export const metadata = {
  title: "Privacyverklaring",
  description: "Privacyverklaring van Groenendijk Garage & Occasions.",
};

export default function PrivacyverklaringPage() {
  return (
    <div className="bg-white">
      <SiteHeader />

      <div className="mx-auto max-w-3xl px-5 pt-28 pb-24">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-[#1A2F5E]">Privacyverklaring</h1>
        <p className="mt-3 text-[13px] text-[#555]">Laatst bijgewerkt: {new Date().toLocaleDateString("nl-NL", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="mt-10 space-y-8 text-[14px] leading-7 text-[#333333]">
          <section>
            <h2 className="mb-2 font-heading text-[15px] font-bold text-[#1A2F5E]">Wie wij zijn</h2>
            <p>
              {business.name} is gevestigd aan {business.address.street}, {business.address.postal}{" "}
              {business.address.city}. Voor vragen over deze privacyverklaring kun je contact opnemen
              via {business.email} of {business.phone}.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-[15px] font-bold text-[#1A2F5E]">Welke gegevens wij verwerken</h2>
            <p>
              Wanneer je het contactformulier invult, een afspraak aanvraagt of ons via WhatsApp benadert,
              verwerken wij de gegevens die je zelf aan ons doorgeeft: naam, e-mailadres, telefoonnummer
              en de inhoud van je bericht.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-[15px] font-bold text-[#1A2F5E]">Waarvoor wij gegevens gebruiken</h2>
            <p>
              Wij gebruiken deze gegevens uitsluitend om contact met je op te nemen over je vraag,
              afspraak of interesse in een occasion. Wij verkopen of delen je gegevens niet met derden
              voor marketingdoeleinden.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-[15px] font-bold text-[#1A2F5E]">Bewaartermijn</h2>
            <p>
              Wij bewaren je gegevens niet langer dan nodig is voor het doel waarvoor ze zijn verzameld,
              of zolang de wet dit van ons vereist.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-heading text-[15px] font-bold text-[#1A2F5E]">Jouw rechten</h2>
            <p>
              Je hebt het recht om je gegevens in te zien, te laten corrigeren of te laten verwijderen.
              Neem hiervoor contact met ons op via {business.email}.
            </p>
          </section>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
