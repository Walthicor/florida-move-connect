import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageNeighborhoods, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/piano-movers-miami/";

const FAQS = [
  { q: "How much do piano movers charge in Miami?", a: "Locally, uprights run $150 - $500, baby grands $300 - $800 and concert grands $500 - $1,500. Interstate piano transport costs $450 - $2,300. Stairs add $40 - $130 per flight and partial disassembly about $150." },
  { q: "Do I need a specialist piano mover?", a: "Specialist crews cost $100 - $300 more than general movers, and they bring piano boards, skid boards, stair equipment and instrument-specific insurance. For grands, stairs or high-value uprights, use a specialist." },
  { q: "Will the piano need tuning after the move in Miami?", a: "Yes. Florida humidity and a new room change how the soundboard sits. Wait two to four weeks for the instrument to acclimate, then book a tuning so it holds pitch." },
];

export const Route = createFileRoute("/piano-movers-miami/")({
  head: () =>
    pageHead({
      path: PATH,
      title: "Piano Movers in Miami FL | High-Rise & Grand Piano Moving",
      description: "Miami piano movers for condos and homes. Uprights $150-$500, grands $300-$800. COI-ready, insured, CPM-trained crews. Up to 4 free quotes.",
      faqs: FAQS,
      service: { serviceType: "Piano Moving", areaServed: "Miami, FL" },
      noAlternates: true,
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Miami · Pianos"
        h1={<>Piano Movers in <span className="text-brand">Miami</span>, Florida</>}
        intro="Miami piano moving is a building-access problem first: certificates of insurance, elevator reservations and loading-dock windows, then the instrument itself."
        ctaLabel="Get Piano Moving Quotes"
        ctaHref="/contact/"
      />
      <PageCostTable
        eyebrow="Pricing 2026"
        title="Piano moving rates in Miami"
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
        title="What makes Miami piano moves different"
        items={[
          { t: "COIs and elevator windows", d: "Most Miami buildings require a certificate of insurance and a reserved freight elevator slot — request both at least three days ahead." },
          { t: "Crane exits", d: "When a grand will not clear a condo door or stairwell, it comes out by crane. That is quoted separately, never improvised." },
          { t: "Salt air and AC", d: "Coastal humidity plus constant AC shifts tuning. Keep the piano off exterior walls and away from vents." }
        ]}
      />
      <PageNeighborhoods
        eyebrow="Coverage"
        title="Areas served around Miami"
        items={["Brickell", "Downtown Miami", "Coral Gables", "Coconut Grove", "Miami Beach", "Key Biscayne", "Aventura", "Doral", "Pinecrest", "Wynwood", "Kendall", "Sunny Isles"]}
        tail="Comparing options statewide? Start from the Florida piano movers hub."
      />
      <PageFaq title="Miami piano moving FAQ" faqs={FAQS} />
    </>
  ),
});
