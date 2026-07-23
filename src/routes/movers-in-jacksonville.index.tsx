import { createFileRoute } from "@tanstack/react-router";
import { CityHero, SimpleCostTable, LocalKnowledge, Neighborhoods, Faq } from "./movers-in-ocala.index";

export const Route = createFileRoute("/movers-in-jacksonville/")({
  head: () => ({
    meta: [
      { title: "Movers in Jacksonville, Florida — Compare Free Quotes | FMD" },
      { name: "description", content: "Licensed Duval County movers covering all 840 sq mi of Jacksonville — including PCS moves at NAS Jax and Mayport." },
      { property: "og:title", content: "Movers in Jacksonville, Florida" },
      { property: "og:description", content: "Compare free quotes from licensed Jacksonville movers across Duval and St. Johns." },
    ],
  }),
  component: JacksonvillePage,
});

const COSTS = [
  { size: "Studio / 1BR", price: "$400-$800" },
  { size: "2-3 Bedroom", price: "$750-$1,300" },
  { size: "4+ Bedroom", price: "$1,200-$2,200" },
  { size: "Cross-town premium (Beaches to Westside)", price: "+1-2 billable hours" },
];

const LOCAL = [
  { t: "840 square miles of city", d: "Quote accuracy depends on exact neighborhoods, not just Jacksonville — always give both ZIP codes." },
  { t: "Military moves", d: "With NAS Jacksonville and Naval Station Mayport, our crews handle PCS timelines and base access paperwork routinely." },
  { t: "The bridges", d: "Rush hour on the Buckman or Mathews adds real time — morning starts keep hourly bills honest." },
];

const AREAS = ["Riverside", "San Marco", "Southside", "Mandarin", "Arlington", "Orange Park", "Jax Beach", "Neptune Beach", "Atlantic Beach", "Nocatee"];

const FAQS = [
  { q: "How much do movers cost in Jacksonville?", a: "$400-$800 for a 1-bedroom, $750-$1,300 for 2-3 bedrooms. Cross-town moves between the Beaches and the Westside add 1-2 hours of drive time — plan routes off-peak." },
  { q: "Do Jacksonville movers handle military PCS moves?", a: "Yes — base access, weight tickets and PCS timelines are routine for our Duval crews serving NAS Jax and Mayport families." },
  { q: "Which Jacksonville areas do you cover?", a: "Riverside, San Marco, Southside, Mandarin, Arlington, Orange Park, the Beaches (Jax Beach, Neptune, Atlantic), Nocatee and greater Duval-St. Johns." },
];

function JacksonvillePage() {
  return (
    <>
      <CityHero
        eyebrow="Licensed Duval County Movers"
        h1={<>Movers in <span className="text-brand">Jacksonville</span>, Florida</>}
        intro="Local Jacksonville moves average $400-$800 for a 1-bedroom and $750-$1,300 for a 2-3 bedroom home. Here is what outsiders miss: Jacksonville is the largest city by land area in the continental U.S. — a move from the Beaches to the Westside is a local move that behaves like a road trip. Our Duval County movers price it right the first time."
      />
      <SimpleCostTable title="Jacksonville Moving Costs (2026)" rows={COSTS} />
      <LocalKnowledge title="Moving in Jacksonville: Distance Inside the City Limits" items={LOCAL} />
      <Neighborhoods title="Jacksonville Areas We Cover" items={AREAS} tail="— and greater Duval-St. Johns." />
      <Faq faqs={FAQS} />
    </>
  );
}
