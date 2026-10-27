import { Link } from "@tanstack/react-router";
import type { BlogArticleModule } from "./types";

// Typical ranges reused from the /long-distance-movers/ cost table (standard consolidated service).
const ROUTE_COSTS: [string, string, string, string][] = [
  ["Florida to New York or Pennsylvania (roughly 900-1,400 mi)", "$2,300-$3,600", "$3,500-$5,800", "$5,500-$8,500"],
  ["Florida to California (roughly 2,000-2,900 mi)", "$3,200-$4,900", "$4,800-$7,500", "$7,000-$11,000"],
];

const SELL_OR_MOVE: [string, string][] = [
  ["Solid-wood furniture you plan to keep for years", "Patio and lanai sets you won't use up north"],
  ["Heirlooms, art and pieces that are hard to replace", "Oversized sectionals and beds that won't fit the new floor plan"],
  ["Furniture you have measured against the new rooms", "Inexpensive flat-pack furniture that may not survive disassembly"],
  ["Items that would cost more to replace than to ship", "Heavy garage and exercise equipment you rarely use"],
];

function Body() {
  return (
    <div className="container-page py-10 md:py-12 max-w-[720px] prose-blog">
      <p className="text-lg text-ink leading-relaxed">
        The typical <strong>moving out of Florida cost</strong> is <strong>$2,200 to $6,500+</strong>{" "}
        for a household headed north, and most one- to three-bedroom moves to New York or
        Pennsylvania land between <strong>$2,300 and $5,800</strong>. A cross-country move to
        California often exceeds the top of that range, at roughly <strong>$4,800-$7,500</strong>{" "}
        for a 2-3 bedroom home. These are typical estimates, not quotes: your final price follows the
        weight of your shipment, the distance, the season and the type of estimate you sign.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How much does it cost to move out of Florida?
      </h2>
      <p className="mt-3 text-ink">
        Interstate moves are priced by the weight (or volume) of what you ship and the miles it
        travels, not by the hour. The table below uses the same typical ranges as our long-distance
        cost table for standard service, where your load shares a truck with other households.
      </p>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface-alt text-ink">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Route (approx. driving miles)</th>
              <th className="px-4 py-3 text-left font-semibold">1 Bedroom</th>
              <th className="px-4 py-3 text-left font-semibold">2-3 Bedroom</th>
              <th className="px-4 py-3 text-left font-semibold">4+ Bedroom</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {ROUTE_COSTS.map(([route, br1, br2, br4]) => (
              <tr key={route} className="bg-white">
                <td className="px-4 py-3 font-semibold text-ink">{route}</td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{br1}</td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{br2}</td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{br4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-ink">
        Typical estimates for standard consolidated service, not quotes. Many Pennsylvania
        destinations are a shorter drive from Central Florida than New York City, which can pull a
        quote toward the lower half of the range, but weight and access usually matter more than a
        hundred miles either way. For carrier options and delivery windows,{" "}
        <Link to="/long-distance-movers/" className="text-brand underline">
          compare long-distance movers leaving Florida
        </Link>
        .
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What drives the cost of a move out of Florida?
      </h2>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Shipment weight:</strong> every piece of furniture, every box of books and
          everything in the garage adds pounds. Pianos, safes, exercise equipment and patio sets are
          the usual budget-breakers.
        </li>
        <li>
          <strong>Distance:</strong> Pennsylvania and New York sit roughly 900-1,400 driving miles
          from most of Florida; California is roughly 2,000-2,900, depending on where you start and
          end. Longer routes cost more and take longer to deliver.
        </li>
        <li>
          <strong>Access at both ends:</strong> walk-ups, narrow city streets and long carries add
          labor. If a full-size tractor-trailer can't reach your door, which is common on villa
          courts and older city blocks, the mover may need a smaller shuttle truck, billed as its
          own line item.
        </li>
        <li>
          <strong>Season and date:</strong> spring and summer are the busy months for northbound
          moves, and month-end dates fill first.
        </li>
        <li>
          <strong>Packing:</strong> full professional packing adds labor and materials. Packing only
          the fragile items, such as glassware, art and electronics, is a common middle ground.
        </li>
        <li>
          <strong>Valuation coverage:</strong> basic released value is limited to $0.60 per pound,
          per article. Full-value protection costs extra but makes the mover responsible for
          repairing, replacing or paying the value of damaged items.
        </li>
        <li>
          <strong>Storage and speed:</strong> storage-in-transit typically runs $150-$400 per month
          if your new home isn't ready. A dedicated truck adds roughly $800-$2,000, and expedited
          service with a guaranteed delivery window about $1,500-$4,000.
        </li>
        <li>
          <strong>Vehicles:</strong> shipping a car is usually a separate quote from an auto
          transport company, so price it alongside the household move.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        When is the busiest time to move out of Florida?
      </h2>
      <p className="mt-3 text-ink">
        Leaving Florida has its own peak. In spring, especially April and May, many seasonal
        residents head back north. That reverse snowbird migration can tighten northbound truck
        availability out of retiree-heavy areas like The Villages, Ocala and Southwest Florida.
        Right behind it comes the summer moving season, which runs through September.
      </p>
      <p className="mt-3 text-ink">
        If you're moving in spring or summer, book six to eight weeks ahead, offer a pickup window of
        a few days and avoid the last week of the month. If your date is flexible, late fall and
        winter outside the holidays usually give you more choice of carriers and dates.
      </p>
      <p className="mt-3 text-ink">
        Comparing moving companies from Ocala to Pennsylvania or California, or from The Villages to
        New York? Ask each one for its spring and summer pickup availability before you compare
        prices, because a cheap quote with no open dates doesn't help. Our page on{" "}
        <Link to="/movers-in-ocala/" className="text-brand underline">
          Ocala movers, including northbound moves to Pennsylvania and New York
        </Link>{" "}
        covers pickups from horse-country properties with long private drives, and our guide to{" "}
        <Link to="/movers-in-the-villages/" className="text-brand underline">
          movers in The Villages
        </Link>{" "}
        explains villa access, golf-cart streets and where a large truck can stage.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Should you sell your furniture or move it?
      </h2>
      <p className="mt-3 text-ink">
        Because an interstate move is priced by weight, every heavy item has a shipping cost you can
        compare against the cost of replacing it. Ask the mover for an itemized estimate, then ask
        for a second number without the biggest pieces. The difference tells you what those pieces
        cost to ship.
      </p>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface-alt text-ink">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Usually worth moving</th>
              <th className="px-4 py-3 text-left font-semibold">Often worth selling or donating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {SELL_OR_MOVE.map(([keep, sell]) => (
              <tr key={keep} className="bg-white align-top">
                <td className="px-4 py-3 text-ink">{keep}</td>
                <td className="px-4 py-3 text-ink">{sell}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-ink">
        Some things can't go on the truck at all. Movers generally won't carry hazardous materials
        such as propane tanks, gasoline, paint and pool chemicals, so use them up, give them away or
        dispose of them properly before moving day. Start selling six to eight weeks out: furniture
        often sells slower than people expect, and anything still in the house at the end tends to
        end up on the truck.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How do you verify an interstate mover before you book?
      </h2>
      <p className="mt-3 text-ink">
        Any company moving household goods across state lines needs a USDOT number and active
        operating authority from the Federal Motor Carrier Safety Administration (FMCSA). Florida's
        state registration covers moves that stay inside Florida; once your belongings leave the
        state, the federal record is the one that counts.
      </p>
      <ol className="mt-4 space-y-3 text-ink list-decimal pl-5">
        <li>
          Ask for the USDOT number and the company's legal name, then look it up on{" "}
          <a href="https://safer.fmcsa.dot.gov/" rel="noopener" className="text-brand underline">
            FMCSA SAFER
          </a>
          . The name and address should match your written estimate.
        </li>
        <li>
          Confirm the operating status, then check household-goods authority and insurance in
          FMCSA's Licensing and Insurance records. A USDOT number on its own does not prove
          authority to move household goods.
        </li>
        <li>
          Ask whether you are dealing with the carrier or a broker. Brokers are legal, but you should
          know which carrier will actually load your home, and verify that company too.
        </li>
        <li>
          Read FMCSA's{" "}
          <a
            href="https://www.fmcsa.dot.gov/protect-your-move"
            rel="noopener"
            className="text-brand underline"
          >
            Protect Your Move resources
          </a>
          , including the booklet "Your Rights and Responsibilities When You Move," which interstate
          movers are required to give you. A quote far below every other one is a warning sign, not
          a bargain.
        </li>
      </ol>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Should you get a binding or non-binding estimate?
      </h2>
      <p className="mt-3 text-ink">
        For a full household leaving the state, ask for a binding or binding-not-to-exceed estimate
        based on an in-home or video survey of everything you are shipping. A binding estimate locks
        the price to the surveyed inventory. A binding-not-to-exceed estimate caps the price but
        lowers it if the shipment weighs less. With a non-binding estimate the bill follows actual
        weight; federal rules limit what you must pay at delivery to 110% of the estimate, with any
        balance billed later.
      </p>
      <p className="mt-3 text-ink">
        Whichever you choose, add items to the inventory before moving day, not on it, because
        anything added late can change the price. Our guide to{" "}
        <Link
          to={"/blog/binding-vs-non-binding-moving-estimates/" as "/"}
          className="text-brand underline"
        >
          binding vs. non-binding moving estimates
        </Link>{" "}
        explains when each type makes sense.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How long does delivery take from Florida?
      </h2>
      <p className="mt-3 text-ink">
        Standard service from Florida to the Northeast usually delivers in about 3-8 days; to the
        West Coast, 7-14 days. Movers give a delivery window rather than an exact date because your
        shipment shares the truck with other households. Pack a suitcase and an essentials box for
        the gap, and keep documents, medications and valuables with you rather than on the truck.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How can you lower the cost of moving out of Florida?
      </h2>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Cut weight before the survey,</strong> not after. The estimate is built on what
          the mover sees, so sell and donate first.
        </li>
        <li>
          <strong>Be flexible on pickup.</strong> Offering a window of a few days lets carriers fit
          your load onto a truck already headed north or west.
        </li>
        <li>
          <strong>Avoid the spring rush and month-end dates</strong> if your schedule allows.
        </li>
        <li>
          <strong>Pack the easy rooms yourself</strong> and pay for professional packing only for
          fragile or awkward items.
        </li>
        <li>
          <strong>Compare at least three written estimates</strong> built on the same inventory, so
          you're comparing prices rather than guesses.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What else should you budget for when leaving Florida?
      </h2>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Your own travel:</strong> fuel, hotels and meals for a multi-day drive, or flights
          for the family.
        </li>
        <li>
          <strong>Vehicle shipping</strong> for any car you aren't driving yourself.
        </li>
        <li>
          <strong>Overlap costs:</strong> a few nights in a hotel or short-term rental if you arrive
          before the truck does.
        </li>
        <li>
          <strong>Setup at the new home:</strong> utility deposits, connection fees and the basics
          you sold instead of shipping.
        </li>
        <li>
          <strong>Florida loose ends:</strong> if you claimed a{" "}
          <a
            href="https://floridarevenue.com/property/Pages/Taxpayers_Exemptions.aspx"
            rel="noopener"
            className="text-brand underline"
          >
            Florida homestead exemption
          </a>
          , check with your county property appraiser about ending it once Florida is no longer
          your permanent residence, and cancel or transfer Florida-only insurance policies.
        </li>
      </ul>
      <p className="mt-4 text-ink">
        When you have a date and a rough inventory, compare written estimates side by side. Florida
        Movers Direct sends one request to up to four independent licensed movers, so you can see
        how each one prices the same inventory before you commit.
      </p>
    </div>
  );
}

const article: BlogArticleModule = {
  meta: {
    slug: "moving-out-of-florida-cost",
    title: "Moving Out of Florida: What It Costs to Move to NY, PA or California",
    excerpt:
      "Moving out of Florida typically costs $2,200-$6,500+, and California often more. See typical ranges for New York, Pennsylvania and California, plus ways to lower the bill.",
    category: "Moving Costs",
    date: "2026-10-27",
    dateLabel: "October 27, 2026",
    image: "/__l5e/assets-v1/4071e295-1195-46ef-b3b4-22589d4b409e/interstate-move-to-florida.jpg",
    imageAlt: "White moving truck on an interstate highway with palm trees on the horizon",
    metaTitle: "Moving Out of Florida Cost: NY, PA & California (2026)",
    metaDescription:
      "Moving out of Florida costs about $2,200-$6,500+, and California often more. See typical ranges for NY, PA and CA, what drives cost and how to vet movers.",
  },
  Body,
  faqs: [
    {
      q: "How much does it cost to move from Florida to New York?",
      a: "With standard service, a 1-bedroom typically runs $2,300-$3,600 and a 2-3 bedroom home $3,500-$5,800. These are typical estimates; a binding written estimate from a licensed interstate mover is the number to plan around.",
    },
    {
      q: "Is it cheaper to move from Florida to Pennsylvania than to New York?",
      a: "Often slightly, because many Pennsylvania destinations are a shorter drive from Central Florida. Weight, access and moving date usually affect the price more than the difference in miles.",
    },
    {
      q: "How much does it cost to move from Florida to California?",
      a: "A 2-3 bedroom home typically runs $4,800-$7,500 and a 4+ bedroom home $7,000-$11,000, so cross-country moves often exceed the usual $6,500 top of the long-distance range. Standard delivery commonly takes 7-14 days.",
    },
    {
      q: "When is the busiest time to move out of Florida?",
      a: "Spring, especially April and May, when seasonal residents head north, followed by the summer moving season through September. Book six to eight weeks ahead for those months and avoid month-end dates.",
    },
    {
      q: "What license does a mover need to move me out of Florida?",
      a: "A mover hauling household goods across state lines needs a USDOT number and active FMCSA operating authority with insurance on file. You can look up both for free on FMCSA's SAFER website.",
    },
  ],
  silo: ["cost-to-move-new-york-to-florida", "interstate-move-to-florida-timeline"],
  next: {
    service: { to: "/long-distance-movers/", label: "compare interstate movers leaving Florida" },
    city: { to: "/movers-in-ocala/", label: "compare Ocala movers" },
  },
};

export default article;
