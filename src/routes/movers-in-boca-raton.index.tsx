import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CityHero, SimpleCostTable, LocalKnowledge, Faq } from "./movers-in-ocala.index";

export const Route = createFileRoute("/movers-in-boca-raton/")({
  head: () => pageHead({
    path: "/movers-in-boca-raton/",
    title: 'Movers in Boca Raton FL | Condo Moving Specialists',
    description: 'Compare free quotes from licensed Boca Raton movers. COI-ready crews for condos and 55+ communities, from $450. Palm Beach County coverage.',
    service: { serviceType: 'Moving Services', areaServed: 'Boca Raton, Florida' },
    faqs: FAQS,
  }),
  component: BocaPage,
});

const COSTS = [
  { size: "Studio / 1BR", price: "$450-$900" },
  { size: "2-3 Bedroom", price: "$850-$1,500" },
  { size: "4+ Bedroom", price: "$1,400-$2,600" },
  { size: "Condo / high-rise premium", price: "+$100-$300" },
];

const LOCAL = [
  { t: "COI first", d: "Nearly every association from downtown to the beach requires a certificate of insurance before the elevator unlocks. Our movers deliver it to your manager within 24 hours." },
  { t: "55+ and country-club communities", d: "Gate access, vendor registration and approved hours are standard — name the community when quoting and it is pre-cleared." },
  { t: "Snowbird calendar", d: "October-April is the busy season across Palm Beach County; book 3 weeks ahead for season dates." },
];

const FAQS = [
  { q: "How much do movers cost in Boca Raton?", a: "$450-$900 for a 1-bedroom and $850-$1,500 for 2-3 bedrooms; condo towers add $100-$300 in elevator and carry time." },
  { q: "Do Boca movers serve the rest of Palm Beach County?", a: "Yes — Delray Beach, Boynton Beach, West Palm Beach, Wellington and the coastal corridor are all daily territory." },
  { q: "My building requires a COI — is that a problem?", a: "It is Tuesday. Every mover in our Boca network produces association-ready COIs, usually same-day." },
];

function BocaPage() {
  return (
    <>
      <CityHero
        eyebrow="Licensed Palm Beach County Movers"
        h1={<>Movers in <span className="text-brand">Boca Raton</span>, Florida</>}
        intro="Local Boca Raton moves average $450-$900 for a 1-bedroom and $850-$1,500 for a 2-3 bedroom home. Boca is condo country: from Mizner Park to the beachfront towers, moves here run on COIs, service elevators and association calendars. Our Palm Beach County movers handle that paperwork daily — so your building lets your move happen."
      />
      <SimpleCostTable title="Boca Raton Moving Costs (2026)" rows={COSTS} />
      <LocalKnowledge title="Moving in Boca Raton: Condo Rules Run the Show" items={LOCAL} />
      <Faq faqs={FAQS} />
    </>
  );
}
