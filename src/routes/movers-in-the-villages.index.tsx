import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { MoversCityPage, moversCitySchema } from "@/components/site/MoversCityPage";

const PATH = "/movers-in-the-villages/";

const FAQS = [
  {
    q: "How much do movers cost in The Villages?",
    a: "A two-mover crew with a truck runs $95-$150 per hour. Villa and patio-home moves usually fall in the $400-$700 range for one bedroom and $650-$1,100 for two, while larger designer homes with a full garage of contents reach $900-$1,600.",
  },
  {
    q: "Do movers handle downsizing from a larger out-of-state home?",
    a: "Yes, and it is the most common job here. Carriers quote the inbound long-distance leg by inventory, hold anything that will not fit in storage, and deliver in stages so you can decide what stays without paying for a second full crew later.",
  },
  {
    q: "What should be on a moving checklist for The Villages?",
    a: "Confirm your villa's truck staging spot, measure garage and lanai doorways, book the crew two to three weeks ahead, decide what will not fit before packing, arrange storage for the overflow, and keep medications and documents with you rather than on the truck.",
  },
  {
    q: "Can movers work around golf-cart streets and villa garages?",
    a: "Experienced crews plan for it. Many villa courts cannot take a 26-foot truck to the door, so the mover stages on a wider street and shuttles with dollies. Say so up front — improvised access on move day becomes billable time on an hourly job.",
  },
  {
    q: "What happens to furniture and estate contents that do not fit?",
    a: "Most households here end up with a partial load left over. The usual sequence is storage-in-transit for anything undecided, donation or consignment pickup for the rest, and a written inventory so the two decisions never get mixed up on the truck.",
  },
];

export const Route = createFileRoute("/movers-in-the-villages/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Movers in The Villages FL | Senior & Downsizing Moves",
      description: "Licensed movers in The Villages handle downsizing, partial loads and storage overlap with crews at $95-$150 an hour. Compare up to four free quotes today.",
      faqs: FAQS,
      noAlternates: true,
    });
    return { ...base, scripts: [...base.scripts, ...moversCitySchema("The Villages", PATH)] };
  },
  component: () => (
    <MoversCityPage
      city="The Villages"
      eyebrow="Licensed Sumter & Lake County Movers"
      opening={
        <>
          Movers in The Villages charge $95-$150 per hour for a two-mover crew with a truck —
          roughly $400-$700 for a one-bedroom villa and $900-$1,600 for a larger designer home.
          Answer a few questions once and up to 4 licensed, insured movers send free quotes.
        </>
      }
      challenges={[
        {
          t: "Downsizing, not relocating",
          d: "The typical move here is a household arriving from a much larger home up north. That changes everything about the quote: the inbound load rarely fits, so carriers plan partial deliveries, keep the overflow in storage while decisions are made, and price the estate-content portion separately from the furniture that is actually going into the villa.",
        },
        {
          t: "Golf-cart streets and villa staging",
          d: "Street design here favors carts, not tractor-trailers. Villa courts, cul-de-sacs and short driveways often mean the truck parks on a wider road and the crew shuttles the load in — sometimes past a neighbor's lanai. Crews that work the community weekly already know which streets take a full-size truck and which do not.",
        },
        {
          t: "Storage overlap between closings",
          d: "Selling a northern house and closing on a Florida villa almost never happens on the same day. Storage-in-transit bridges the gap, keeping the load in a sealed vault under one carrier's liability instead of splitting responsibility across a self-storage unit and two separate crews.",
        },
      ]}
      areas={[
        "Spanish Springs",
        "Lake Sumter Landing",
        "Brownwood",
        "Fenney",
        "Lady Lake",
        "Wildwood",
        "Leesburg",
      ]}
      areasIntro={
        <>
          Our matched crews cover the full community and the surrounding towns — Spanish Springs,
          Lake Sumter Landing and Brownwood town squares, the newer villages around Fenney, and
          nearby Lady Lake, Wildwood and Leesburg.
        </>
      }
      related={[
        { to: "/long-distance-movers/", label: "Long-distance moving into Florida", d: "How an inbound downsizing move from out of state is quoted and scheduled." },
        { to: "/storage-solutions/", label: "Storage during a downsizing move", d: "Storage-in-transit versus self-storage when contents will not all fit." },
        { to: "/piano-movers-the-villages/", label: "Piano movers in The Villages", d: "Specialist crews for the grand pianos that arrive with northern households." },
        { to: "/movers-in-ocala/", label: "Movers in Ocala", d: "The neighboring Marion County market and the busiest short route in the region." },
        { to: "/movers-in-orlando/", label: "Movers in Orlando", d: "Pricing and access detail for the Central Florida market to the southeast." },
      ]}
      faqs={FAQS}
      ctaTitle="Compare Moving Quotes in The Villages"
    />
  ),
});
