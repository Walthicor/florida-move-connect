import { createFileRoute } from "@tanstack/react-router";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
import { pageHead } from "@/lib/seo";
import { Link } from "@tanstack/react-router";
import { CityHero, SimpleCostTable, LocalKnowledge, Faq } from "./movers-in-ocala.index";
import { ProseSection } from "@/components/site/ContentSections";

export const Route = createFileRoute("/movers-in-boca-raton/")({
  head: () => pageHead({
    path: "/movers-in-boca-raton/",
    title: 'Movers in Boca Raton FL | Condo Moving Specialists',
    description: "Compare licensed Boca Raton movers with COI-ready crews for high-rise condos and 55+ communities, from about $450. Palm Beach County coverage, free quotes.",
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
  { q: "Can Boca Raton movers handle a piano?", a: "Not a general crew — a piano needs a specialist team with a skid board and its own valuation. Our Boca Raton piano movers page covers uprights, grands and condo-tower instrument moves." },
  { q: "How far ahead should I book a Boca Raton move?", a: "Three weeks for October-April season dates, and one to two weeks off-season. Book the service elevator with your association on the same day you confirm the crew." },
];

function BocaPage() {
  return (
    <>
      <CityHero
        eyebrow="Licensed Palm Beach County Movers"
        h1={<>Movers in <span className="text-brand">Boca Raton</span>, Florida</>}
        intro="Local Boca Raton moves average $450-$900 for a 1-bedroom and $850-$1,500 for a 2-3 bedroom home. Boca is condo country: from Mizner Park to the beachfront towers, moves here run on COIs, service elevators and association calendars. Our Palm Beach County movers handle that paperwork daily — so your building lets your move happen."
      />
      <NetworkDisclosure />
      <SimpleCostTable title="Boca Raton Moving Costs (2026)" rows={COSTS} />
      <LocalKnowledge title="Moving in Boca Raton: Condo Rules Run the Show" items={LOCAL} />
      <ProseSection title="Pianos, Antiques and Other Specialty Items in Boca Raton">
        <p>
          Boca households move more grand pianos, art collections and antique
          furniture than almost any market in Palm Beach County, and none of it
          belongs on a standard hourly crew. A piano in particular needs a skid
          board, a trained team and its own declared value — especially coming out
          of a tower where the instrument crosses a loading dock and a service
          elevator.
        </p>
        <p>
          Our{" "}
          <Link to="/piano-movers-boca-raton/">
            Boca Raton piano moving guide
          </Link>{" "}
          covers upright and grand pricing, condo-tower staging and what specialist
          crews do differently. For artwork, mirrors and chandeliers travelling in
          the same load, see{" "}
          <Link to="/packing-services/">custom crating and fragile packing</Link>. If the move is a
          retiree downsizing out of a family home, our{" "}
          <Link to="/senior-moving-services/">senior moving services</Link> cover sorting, Century
          Village and Kings Point move-in rules and donation pickups.
        </p>
      </ProseSection>
      <Faq faqs={FAQS} />
    </>
  );
}
