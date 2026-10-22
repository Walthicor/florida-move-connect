import { createFileRoute, Link } from "@tanstack/react-router";
import { ProseSection } from "@/components/site/ContentSections";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/piano-moving-cost/";

const FAQS = [
  {
    q: "What does it cost to move a piano in Florida?",
    a: "Uprights, spinets and consoles cost $150 - $500 locally, baby grands $300 - $800 and concert grands $500 - $1,500. Interstate piano transport runs $450 - $2,300. Stairs, floor placement, disassembly and crating are billed on top.",
  },
  {
    q: "Why do stairs cost extra?",
    a: "Each flight adds $40 - $130 because the crew grows and the equipment changes — stair dollies, extra straps and more hands. Placing the instrument on a second or third floor adds about $100 on average.",
  },
  {
    q: "Is it cheaper to add the piano to a household move?",
    a: "Usually. Adding an upright to a full household move costs $75 - $150 extra, far less than booking a standalone piano transport. Grands are still often handled by a specialist subcontractor within the same move.",
  },
];

export const Route = createFileRoute("/piano-moving-cost/")({
  head: () =>
    pageHead({
      path: PATH,
      title: "Piano Moving Cost in Florida 2026 | Prices & Surcharges",
      description: "Piano moving cost in Florida runs $150-$500 for uprights, $300-$800 for grands and $450-$2,300 interstate, with stairs, crating and disassembly fees explained.",
      faqs: FAQS,
      service: { serviceType: "Piano Moving", areaServed: "Florida" },
      noAlternates: true,
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Pricing guide"
        h1={<>Piano Moving Cost in <span className="text-brand">Florida</span></>}
        intro="Piano moving in Florida costs $150-$500 for an upright, $300-$800 for a grand and $450-$2,300 for interstate transport, with stairs adding $40-$130 per flight (estimates). Below is every number a piano quote is built from — instrument type, crew size, stairs, floor placement, disassembly and crating. No hidden line items."
        ctaLabel="Compare Piano Moving Quotes"
        ctaHref="/contact/"
      />
      <PageCostTable
        eyebrow="Base rates 2026"
        title="How Much Do Piano Movers Charge in Florida?"
        col1="Piano type"
        col2="Price"
        col3="Crew & weight"
        rows={[
          { size: "Upright / spinet / console", price: "$150 - $500", detail: "2 movers · 300-900 lb" },
          { size: "Baby grand", price: "$300 - $800", detail: "3-4 movers · 500-800 lb" },
          { size: "Concert grand", price: "$500 - $1,500", detail: "4-5 movers · up to 1,300 lb" },
          { size: "Interstate transport (any)", price: "$450 - $2,300", detail: "Crew varies" },
        ]}
      />
      <PageCostTable
        eyebrow="Add-ons"
        title="Which Surcharges Change the Total?"
        col1="Surcharge"
        col2="Cost"
        col3="When it applies"
        rows={[
          { size: "Each flight of stairs", price: "$40 - $130", detail: "Per flight, either end of the move" },
          { size: "Second or third floor placement", price: "+$100 average", detail: "Upper-floor destination rooms" },
          { size: "Partial disassembly", price: "~$150", detail: "Legs, pedal box, music rack on grands" },
          { size: "Heat-treated crating", price: "$1,000 - $1,600", detail: "Interstate and long-haul transport" },
          { size: "Adding an upright to a household move", price: "+$75 - $150", detail: "Bundled with a full move" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Read the quote"
        title="What separates an honest estimate"
        items={[
          { t: "Written and binding", d: "A real piano movers quote names crew size, stairs, disassembly and crating before work starts. Verbal ballparks are where surprise charges live." },
          { t: "Coverage stated", d: "Released value pays $0.60 per pound — $300 on a 500-pound baby grand. Confirm full value protection in writing instead." },
          { t: "Specialist premium", d: "Specialist piano movers cost $100 - $300 more than general movers, and that buys the equipment and insurance piano work requires." },
        ]}
      />
      <ProseSection title="Ready to Compare Piano Movers?" bg="bg-background">
        <p>
          This page explains the price. To compare crews, start with our{" "}
          <Link to="/piano-movers/">Florida piano movers</Link> page, or go straight to{" "}
          <Link to="/piano-movers-tampa/">piano movers in Tampa</Link> and{" "}
          <Link to="/grand-piano-movers/">grand piano movers</Link> for baby grands and concert grands.
        </p>
      </ProseSection>
      <PageFaq title="Piano moving cost FAQ" faqs={FAQS} />
    </>
  ),
});
