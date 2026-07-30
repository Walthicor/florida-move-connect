import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageNeighborhoods, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/piano-movers-boca-raton/";

const FAQS = [
  { q: "How much do piano movers charge in Boca Raton?", a: "Locally, uprights run $150 - $500, baby grands $300 - $800 and concert grands $500 - $1,500. Interstate piano transport costs $450 - $2,300. Stairs add $40 - $130 per flight and partial disassembly about $150." },
  { q: "Do I need a specialist piano mover?", a: "Specialist crews cost $100 - $300 more than general movers, and they bring piano boards, skid boards, stair equipment and instrument-specific insurance. For grands, stairs or high-value uprights, use a specialist." },
  { q: "Will the piano need tuning after the move in Boca Raton?", a: "Yes. Florida humidity and a new room change how the soundboard sits. Wait two to four weeks for the instrument to acclimate, then book a tuning so it holds pitch." },
];

export const Route = createFileRoute("/piano-movers-boca-raton/")({
  head: () =>
    pageHead({
      path: PATH,
      title: "Piano Movers in Boca Raton FL | Grand Piano Specialists",
      description: "Boca Raton piano movers for high-value grands. Local $300-$800, interstate $450-$2,300. Full value protection, insured CPM crews. 4 free quotes.",
      faqs: FAQS,
      service: { serviceType: "Piano Moving", areaServed: "Boca Raton, FL" },
      noAlternates: true,
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Boca Raton · Pianos"
        h1={<>Piano Movers in <span className="text-brand">Boca Raton</span>, Florida</>}
        intro="Boca Raton sees more high-value grands per move than almost anywhere in Florida — which makes declared-value coverage the detail that matters most here."
        ctaLabel="Get Piano Moving Quotes"
        ctaHref="/contact/"
      />
      <PageCostTable
        eyebrow="Pricing 2026"
        title="Piano moving rates in Boca Raton"
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
        title="What makes Boca Raton piano moves different"
        items={[
          { t: "Gated community access", d: "HOA gate passes and approved vendor lists slow move day. Give the mover community details when you request the quote." },
          { t: "High-value instruments", d: "Released value pays only $0.60 per pound. On a $40,000 grand, full value protection in writing is non-negotiable." },
          { t: "Seasonal second homes", d: "Snowbird schedules concentrate demand in spring and fall — book early for those windows." }
        ]}
      />
      <PageNeighborhoods
        eyebrow="Coverage"
        title="Areas served around Boca Raton"
        items={["Downtown Boca", "Boca West", "Mizner Park", "Highland Beach", "Delray Beach", "Deerfield Beach", "Parkland", "Coral Springs", "Boynton Beach", "Woodfield", "Broken Sound", "Royal Palm"]}
        tail="Comparing options statewide? Start from the Florida piano movers hub."
      />
      <PageFaq title="Boca Raton piano moving FAQ" faqs={FAQS} />
    </>
  ),
});
