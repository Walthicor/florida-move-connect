import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/grand-piano-movers/";

const FAQS = [
  {
    q: "How much do grand piano movers cost in Florida?",
    a: "A baby grand costs $300 - $800 to move locally and a concert grand $500 - $1,500. Interstate transport runs $450 - $2,300, plus $1,000 - $1,600 if heat-treated crating is required. Partial disassembly adds about $150.",
  },
  {
    q: "Do the legs really have to come off?",
    a: "On a grand, yes. The music rack, pedal box and legs are removed so the body can be laid on its straight side and strapped to a skid board. Rolling a grand on its own casters is how legs snap and floors get gouged.",
  },
  {
    q: "What if the grand will not fit through the door?",
    a: "The crew measures doors, turns and stairwells first. If the instrument cannot clear, it is removed through a window by crane as a separately quoted operation. Disassembly often solves the clearance problem before a crane is needed.",
  },
];

export const Route = createFileRoute("/grand-piano-movers/")({
  head: () =>
    pageHead({
      path: PATH,
      title: "Grand Piano Movers in Florida | Baby & Concert Grands",
      description:
        "Florida grand piano movers. Baby grands $300-$800, concert grands $500-$1,500 locally. Skid boards, crating, crane exits. Up to 4 free quotes.",
      faqs: FAQS,
      service: { serviceType: "Grand Piano Moving", areaServed: "Florida" },
      noAlternates: true,
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Grand piano specialists"
        h1={<>Grand Piano Movers in <span className="text-brand">Florida</span></>}
        intro="Moving a grand piano in Florida costs $300-$800 locally and $450-$2,300 interstate, with crane or window removals quoted separately. Baby grands through concert grands are disassembled, wrapped, strapped to a skid board and rolled — never lifted and carried. Compare up to 4 licensed, insured Florida crews free."
        ctaLabel="Get Grand Piano Quotes"
        ctaHref="/contact/"
      />
      <PageCostTable
        eyebrow="Pricing 2026"
        title="Grand piano moving rates"
        col1="Instrument"
        col2="Local price"
        col3="Crew & weight"
        rows={[
          { size: "Baby grand", price: "$300 - $800", detail: "3-4 movers · 500-800 lb" },
          { size: "Concert grand", price: "$500 - $1,500", detail: "4-5 movers · up to 1,300 lb" },
          { size: "Interstate transport (any)", price: "$450 - $2,300", detail: "Crew varies" },
          { size: "Heat-treated crating (interstate)", price: "$1,000 - $1,600", detail: "Added to transport" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Method"
        title="How a grand is prepared"
        items={[
          { t: "Disassembly", d: "Lid locked, music rack and pedal box removed, legs taken off one at a time while the body is supported. Roughly $150 for partial disassembly." },
          { t: "Skid board and straps", d: "The body is laid on its straight side onto a padded skid board, wrapped in blankets and strapped down. It travels on that edge, never flat on its back." },
          { t: "Clearance and crane exits", d: "Doors, turns and stairwells are measured first. If the grand will not clear, it leaves through a window by crane, quoted separately." },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Coverage"
        title="Insurance on a high-value grand"
        items={[
          { t: "Released value pays $0.60/lb", d: "A 500-pound baby grand is covered for $300 — whether the instrument is worth $5,000 or $50,000." },
          { t: "Full value protection", d: "Paid coverage tied to the declared value of your instrument. Get it in writing on the estimate before the crew arrives." },
          { t: "Re-tune after acclimating", d: "Florida humidity shifts the soundboard. Wait two to four weeks in the new room, then book the tuning." },
        ]}
      />
      <PageFaq title="Grand piano moving FAQ" faqs={FAQS} />
    </>
  ),
});
