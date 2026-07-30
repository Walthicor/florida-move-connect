import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageNeighborhoods, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/piano-movers-jacksonville/";

const FAQS = [
  { q: "How much do piano movers charge in Jacksonville?", a: "Locally, uprights run $150 - $500, baby grands $300 - $800 and concert grands $500 - $1,500. Interstate piano transport costs $450 - $2,300. Stairs add $40 - $130 per flight and partial disassembly about $150." },
  { q: "Do I need a specialist piano mover?", a: "Specialist crews cost $100 - $300 more than general movers, and they bring piano boards, skid boards, stair equipment and instrument-specific insurance. For grands, stairs or high-value uprights, use a specialist." },
  { q: "Will the piano need tuning after the move in Jacksonville?", a: "Yes. Florida humidity and a new room change how the soundboard sits. Wait two to four weeks for the instrument to acclimate, then book a tuning so it holds pitch." },
];

export const Route = createFileRoute("/piano-movers-jacksonville/")({
  head: () =>
    pageHead({
      path: PATH,
      title: "Piano Movers in Jacksonville FL | Licensed Piano Moving",
      description: "Jacksonville piano movers: uprights $150-$500, baby grands $300-$800, interstate $450-$2,300. Insured, CPM-trained crews. 4 free quotes.",
      faqs: FAQS,
      service: { serviceType: "Piano Moving", areaServed: "Jacksonville, FL" },
      noAlternates: true,
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Jacksonville · Pianos"
        h1={<>Piano Movers in <span className="text-brand">Jacksonville</span>, Florida</>}
        intro="Jacksonville is geographically huge, so piano moving here is as much about route planning as it is about stairs. Licensed, insured crews, honest quotes."
        ctaLabel="Get Piano Moving Quotes"
        ctaHref="/contact/"
      />
      <PageCostTable
        eyebrow="Pricing 2026"
        title="Piano moving rates in Jacksonville"
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
        title="What makes Jacksonville piano moves different"
        items={[
          { t: "Historic Riverside porches", d: "Narrow front steps and period doorways mean the crew measures the route before the piano leaves the room." },
          { t: "Long cross-town hauls", d: "Duval County distances stretch local moves; confirm whether your quote is hourly or flat before booking." },
          { t: "Coastal humidity", d: "Homes near the beaches swing in humidity — re-tune two to four weeks after placement, once the soundboard settles." }
        ]}
      />
      <PageNeighborhoods
        eyebrow="Coverage"
        title="Areas served around Jacksonville"
        items={["Riverside", "Avondale", "San Marco", "Springfield", "Mandarin", "Southside", "Jacksonville Beach", "Ponte Vedra", "Orange Park", "Nocatee", "Arlington", "Julington Creek"]}
        tail="Comparing options statewide? Start from the Florida piano movers hub."
      />
      <PageFaq title="Jacksonville piano moving FAQ" faqs={FAQS} />
    </>
  ),
});
