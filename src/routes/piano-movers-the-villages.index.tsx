import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageNeighborhoods, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/piano-movers-the-villages/";

const FAQS = [
  { q: "How much do piano movers charge in The Villages?", a: "Locally, uprights run $150 - $500, baby grands $300 - $800 and concert grands $500 - $1,500. Interstate piano transport costs $450 - $2,300. Stairs add $40 - $130 per flight and partial disassembly about $150." },
  { q: "Do I need a specialist piano mover?", a: "Specialist crews cost $100 - $300 more than general movers, and they bring piano boards, skid boards, stair equipment and instrument-specific insurance. For grands, stairs or high-value uprights, use a specialist." },
  { q: "Will the piano need tuning after the move in The Villages?", a: "Yes. Florida humidity and a new room change how the soundboard sits. Wait two to four weeks for the instrument to acclimate, then book a tuning so it holds pitch." },
];

export const Route = createFileRoute("/piano-movers-the-villages/")({
  head: () =>
    pageHead({
      path: PATH,
      title: "Piano Movers in The Villages FL | Upright & Grand Moving",
      description: "Piano movers serving The Villages. Uprights $150-$500, grands $300-$800 locally, interstate $450-$2,300. Insured, CPM-trained crews. Free quotes.",
      faqs: FAQS,
      service: { serviceType: "Piano Moving", areaServed: "The Villages, FL" },
      noAlternates: true,
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="The Villages · Pianos"
        h1={<>Piano Movers in <span className="text-brand">The Villages</span>, Florida</>}
        intro="Downsizing, right-sizing and second-home moves — piano moving in The Villages is usually a short hop that still needs the full skid board and strap treatment."
        ctaLabel="Get Piano Moving Quotes"
        ctaHref="/contact/"
      />
      <PageCostTable
        eyebrow="Pricing 2026"
        title="Piano moving rates in The Villages"
        col1="Piano type"
        col2="Local price"
        col3="Crew"
        rows={[
          { size: "Upright / spinet / console", price: "$150 - $500", detail: "2 movers · 300-900 lb" },
          { size: "Baby grand", price: "$300 - $800", detail: "3-4 movers · 500-800 lb" },
          { size: "Concert grand", price: "$500 - $1,500", detail: "4-5 movers · up to 1,300 lb" },
          { size: "Interstate transport (any)", price: "$450 - $2,300", detail: "Crew varies" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Local context"
        title="What makes The Villages piano moves different"
        items={[
          { t: "Downsizing moves", d: "Many residents move an upright from a larger northern home into a villa. Measure the destination room before the truck is booked." },
          { t: "Short local hops", d: "Inside-community moves are short but still priced by crew size, stairs and disassembly — not by mileage alone." },
          { t: "Seasonal residents", d: "Interstate piano transport in and out of Central Florida peaks with snowbird season; reserve crews weeks ahead." }
        ]}
      />
      <PageNeighborhoods
        eyebrow="Coverage"
        title="Areas served around The Villages"
        items={["Spanish Springs", "Lake Sumter Landing", "Brownwood", "Sumter County", "Lady Lake", "Wildwood", "Fruitland Park", "Leesburg", "Oxford", "Summerfield", "Belleview", "Ocala"]}
        tail="Comparing options statewide? Start from the Florida piano movers hub."
      />
      <PageFaq title="The Villages piano moving FAQ" faqs={FAQS} />
    </>
  ),
});
