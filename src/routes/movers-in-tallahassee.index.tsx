import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { MoversCityPage, moversCitySchema } from "@/components/site/MoversCityPage";

const PATH = "/movers-in-tallahassee/";

const FAQS = [
  {
    q: "How much do movers cost in Tallahassee?",
    a: "Expect $95-$150 per hour for a two-mover crew with a truck. In practice that is $400-$700 for a studio or one-bedroom, $650-$1,100 for a two-bedroom, $900-$1,600 for a three-bedroom and $1,400-$2,600 for four bedrooms or more.",
  },
  {
    q: "What is the average cost of movers in Tallahassee for an apartment?",
    a: "Most Tallahassee apartment moves are studios or one-bedrooms and finish in three to four hours, landing at $400-$700. A second- or third-floor walk-up near campus adds billable time, so budget toward the top of that range if there is no elevator.",
  },
  {
    q: "Why do August and May cost more in Tallahassee?",
    a: "FSU and FAMU turn over tens of thousands of leases in those two months, so crews book out and month-end weekends sell first. Moving mid-month on a Tuesday or Wednesday typically quotes lower than the same job on an August Saturday; the exact difference varies by crew size, access and availability.",
  },
  {
    q: "How can I lower my Tallahassee moving cost?",
    a: "Box and disassemble everything before the crew arrives, reserve the elevator or loading zone in advance, and avoid the last weekend of the month. At $130 an hour, cutting one billable hour of prep work saves more than most discounts you will be offered.",
  },
  {
    q: "Do Tallahassee movers handle student and short-term storage?",
    a: "Yes. Summer-gap storage between leases is common here, and many carriers offer storage-in-transit so your load stays on the truck or in a warehouse vault between your move-out and move-in dates rather than being handled twice.",
  },
];

export const Route = createFileRoute("/movers-in-tallahassee/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Movers in Tallahassee FL | Local Rates & Free Quotes",
      description: "Movers in Tallahassee cost $95-$150 an hour, $400-$700 for a one-bedroom and $900-$1,600 for a three-bedroom. Compare four licensed local crews free of charge.",
      faqs: FAQS,
      noAlternates: true,
    });
    return { ...base, scripts: [...base.scripts, ...moversCitySchema("Tallahassee", PATH)] };
  },
  component: () => (
    <MoversCityPage
      city="Tallahassee"
      eyebrow="Licensed Leon County Movers"
      costFirst
      costIntro={
        <>
          Tallahassee moving costs track the statewide{" "}
          <a href="/local-movers-in-florida/" className="font-semibold text-brand hover:underline">
            Florida local moving rate card
          </a>
          : $95-$150 per hour for two movers and a truck, billed from arrival to completion. The
          ranges below are what most Leon County households actually pay.
        </>
      }
      opening={
        <>
          Movers in Tallahassee charge $95-$150 per hour for a two-mover crew with a truck. A
          one-bedroom typically costs $400-$700 and a three-bedroom home $900-$1,600. Compare up to
          4 licensed, insured Tallahassee moving companies for free and see real pricing before you
          commit.
        </>
      }
      challenges={[
        {
          t: "August and May move the whole market",
          d: "FSU and FAMU lease turnover concentrates an enormous share of the year's moves into two months. Crews, trucks and even elevator slots in student buildings are spoken for weeks ahead, and the last weekend of August is typically the busiest and highest-priced slot in Leon County.",
        },
        {
          t: "Apartment-heavy demand",
          d: "The rental stock around campus and Midtown is dominated by walk-up buildings with shared stairwells and small parking lots. Hourly quotes hinge on carry distance and stair flights far more than on the size of your inventory, so describe the access honestly when you request pricing.",
        },
        {
          t: "Capital-city scheduling",
          d: "State government relocations and legislative-session timing add a second, quieter rhythm to demand. Office and records moves cluster around session start and end, which is why commercial jobs here are usually quoted after hours or on weekends to protect business days.",
        },
      ]}
      areas={["Midtown", "Betton Hills", "Killearn Estates", "Southwood", "Bradfordville"]}
      areasIntro={
        <>
          From Midtown apartments and the tree-lined streets of Betton Hills to family homes in
          Killearn Estates, Southwood and Bradfordville, our matched crews cover Tallahassee and the
          surrounding Leon County suburbs.
        </>
      }
      related={[
        { to: "/local-movers-in-florida/", label: "Florida hourly moving rates", d: "The full statewide rate card and the factors that move a quote up or down." },
        { to: "/apartment-movers/", label: "Apartment moving", d: "Walk-ups, elevator reservations and tight loading windows near campus." },
        { to: "/storage-solutions/", label: "Storage between leases", d: "Summer-gap storage-in-transit for students and faculty." },
        { to: "/movers-in-pensacola/", label: "Movers in Pensacola", d: "The Panhandle market west on I-10, plus military relocation notes." },
        { to: "/movers-in-jacksonville/", label: "Movers in Jacksonville", d: "Pricing and access detail for the northeast Florida market." },
      ]}
      faqs={FAQS}
      ctaTitle="Get Your Tallahassee Moving Cost"
    />
  ),
});
