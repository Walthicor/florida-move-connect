import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageNeighborhoods, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/piano-movers-orlando/";

const FAQS = [
  { q: "How much do piano movers charge in Orlando?", a: "Locally, uprights run $150 - $500, baby grands $300 - $800 and concert grands $500 - $1,500. Interstate piano transport costs $450 - $2,300. Stairs add $40 - $130 per flight and partial disassembly about $150." },
  { q: "Do I need a specialist piano mover?", a: "Specialist crews cost $100 - $300 more than general movers, and they bring piano boards, skid boards, stair equipment and instrument-specific insurance. For grands, stairs or high-value uprights, use a specialist." },
  { q: "Will the piano need tuning after the move in Orlando?", a: "Yes. Florida humidity and a new room change how the soundboard sits. Wait two to four weeks for the instrument to acclimate, then book a tuning so it holds pitch." },
];

export const Route = createFileRoute("/piano-movers-orlando/")({
  head: () =>
    pageHead({
      path: PATH,
      title: "Piano Movers in Orlando FL | Upright & Grand Piano Moving",
      description: "Licensed Orlando piano movers. Uprights $150-$500, grands $300-$800 locally. CPM-trained, insured crews. Compare up to 4 free quotes.",
      faqs: FAQS,
      service: { serviceType: "Piano Moving", areaServed: "Orlando, FL" },
      noAlternates: true,
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Orlando · Pianos"
        h1={<>Piano Movers in <span className="text-brand">Orlando</span>, Florida</>}
        intro="Studio uprights, church grands and two-story suburban homes — Orlando piano moving handled by licensed, insured crews with piano boards and stair equipment."
        ctaLabel="Get Piano Moving Quotes"
        ctaHref="/contact/"
      />
      <PageCostTable
        eyebrow="Pricing 2026"
        title="Piano moving rates in Orlando"
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
        title="What makes Orlando piano moves different"
        items={[
          { t: "Two-story suburban builds", d: "Most Orlando piano moves involve a staircase. Each flight adds $40-$130, and second-floor placement averages +$100." },
          { t: "Studio and church instruments", d: "Institutional uprights and grands often need partial disassembly (~$150) to clear double doors and choir lofts." },
          { t: "Theme-park corridor traffic", d: "Crews schedule around I-4 and tourist-corridor congestion so the instrument spends less time on the truck." }
        ]}
      />
      <PageNeighborhoods
        eyebrow="Coverage"
        title="Areas served around Orlando"
        items={["Downtown Orlando", "Winter Park", "Baldwin Park", "Lake Nona", "Dr. Phillips", "Windermere", "Altamonte Springs", "Kissimmee", "Oviedo", "Apopka", "Winter Garden", "Celebration"]}
        tail="Comparing options statewide? Start from the Florida piano movers hub."
      />
      <PageFaq title="Orlando piano moving FAQ" faqs={FAQS} />
    </>
  ),
});
