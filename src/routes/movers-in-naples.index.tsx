import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CityHero, SimpleCostTable, LocalKnowledge, Faq } from "./movers-in-ocala.index";

export const Route = createFileRoute("/movers-in-naples/")({
  head: () => pageHead({
    path: "/movers-in-naples/",
    title: 'Movers in Naples FL | Compare Licensed Moving Companies',
    description: "Compare licensed Naples movers experienced with gated communities, white-glove handling and season-smart scheduling across Collier County. Free quotes today.",
    service: { serviceType: 'Moving Services', areaServed: 'Naples, Florida' },
    faqs: FAQS,
  }),
  component: NaplesPage,
});

const COSTS = [
  { size: "Studio / 1BR", price: "$450-$900" },
  { size: "2-3 Bedroom", price: "$850-$1,500" },
  { size: "4+ / luxury homes", price: "$1,500-$3,000+" },
  { size: "White-glove / antiques handling", price: "Quoted by inventory" },
];

const LOCAL = [
  { t: "Snowbird season (Oct-Apr)", d: "Demand doubles; book 3-4 weeks ahead and expect gated communities to require COIs and approved vendor lists." },
  { t: "Luxury and antique inventory", d: "Naples moves carry more art, antiques and oversized furniture than anywhere in Florida — ask about full-value protection and custom crating." },
  { t: "Summer advantage", d: "May-September is the quiet season here (the reverse of most of Florida) — flexible dates typically quote lower." },
];

const FAQS = [
  { q: "How much do movers cost in Naples?", a: "$450-$900 for a 1-bedroom, $850-$1,500 for 2-3 bedrooms; estate and luxury moves quote by inventory with white-glove options." },
  { q: "Do Naples movers work inside gated communities?", a: "Daily — COIs, gate access and community vendor rules are standard operating procedure in Collier County." },
  { q: "When is the cheapest time to move in Naples?", a: "Summer — the opposite of the local demand curve. May-September quotes typically come in under season rates; the difference varies by home size and access." },
];

function NaplesPage() {
  return (
    <>
      <CityHero
        eyebrow="Licensed Collier County Movers"
        h1={<>Movers in <span className="text-brand">Naples</span>, Florida</>}
        intro="Local Naples moves run $450-$900 for a 1-bedroom and $850-$1,500 for a 2-3 bedroom home — with a market rhythm unlike anywhere else in Florida. Naples runs on the season: October through April, the snowbird wave multiplies demand and gated-community move-in rules do the scheduling. Our Collier County movers live on that calendar."
      />
      <SimpleCostTable title="Naples Moving Costs (2026)" rows={COSTS} />
      <LocalKnowledge title="Moving in Naples: The Season Sets the Rules" items={LOCAL} />
      <section className="bg-surface-alt">
        <div className="container-page py-14 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
            Downsizing into a Naples 55+ community
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A large share of Collier County moves are retirees leaving a larger home for a villa or
            condo. Our{" "}
            <Link to="/senior-moving-services/" className="font-semibold text-brand hover:underline">
              senior moving services
            </Link>{" "}
            page covers sorting days, 55+ community move-in paperwork and donation pickups.
          </p>
        </div>
      </section>
      <Faq faqs={FAQS} />
    </>
  );
}
