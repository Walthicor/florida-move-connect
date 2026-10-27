import { Link } from "@tanstack/react-router";
import type { BlogArticleModule } from "./types";

const ESTIMATE_ROWS: [string, string, string, string][] = [
  [
    "Binding",
    "The agreed price for the inventory and services listed",
    "Stays the same even if the shipment weighs more",
    "Fixed budgets and full households",
  ],
  [
    "Binding-not-to-exceed",
    "The binding price or the weight-based price, whichever is lower",
    "Can only go down",
    "Most interstate household moves",
  ],
  [
    "Non-binding",
    "Actual weight and services at the mover's published rates",
    "Can go up or down; generally no more than the estimate plus 10% is due at delivery",
    "Small or uncertain shipments",
  ],
];

function Body() {
  return (
    <div className="container-page py-10 md:py-12 max-w-[720px] prose-blog">
      <p className="text-lg text-ink leading-relaxed">
        A <strong>binding moving estimate</strong> locks your price to the
        inventory and services written into it, while a{" "}
        <strong>non-binding estimate</strong> is only the mover's best guess, and
        the final bill follows the actual weight of your shipment. For most
        interstate moves to or from Florida, the safest choice is a{" "}
        <strong>binding or binding-not-to-exceed estimate</strong> based on an
        in-home or video survey. This guide explains binding vs non-binding moving
        estimates under federal rules and what to ask before you sign.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What Is the Difference Between Binding and Non-Binding Moving Estimates?
      </h2>
      <p className="mt-3 text-ink">
        For moves that cross state lines, the Federal Motor Carrier Safety
        Administration (FMCSA) sets the rules on estimates. There are three
        estimate types you will see on interstate quotes:
      </p>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface-alt text-ink">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Estimate Type</th>
              <th className="px-4 py-3 text-left font-semibold">What You Pay</th>
              <th className="px-4 py-3 text-left font-semibold">If the Shipment Weighs More</th>
              <th className="px-4 py-3 text-left font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {ESTIMATE_ROWS.map(([type, pay, weight, best]) => (
              <tr key={type}>
                <td className="px-4 py-3 font-semibold text-ink">{type}</td>
                <td className="px-4 py-3 text-ink">{pay}</td>
                <td className="px-4 py-3 text-ink">{weight}</td>
                <td className="px-4 py-3 text-ink">{best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-ink">
        All three must be in writing. A number given over the phone with no
        inventory behind it is not an estimate you can hold a mover to.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How Does a Binding Moving Estimate Work?
      </h2>
      <p className="mt-3 text-ink">
        A binding estimate is a guaranteed price for the specific goods and
        services listed in it. If your shipment weighs more than the mover
        expected, that is the mover's risk, not yours. If it weighs less, you
        still pay the binding amount.
      </p>
      <p className="mt-3 text-ink">
        The catch is the inventory. A binding price covers only what is written
        down. If you add a garage full of boxes on moving day, or ask for packing
        that was not in the estimate, the mover can revise the price before
        loading or bill the added services separately. Go through every room with
        the surveyor, including closets, the attic, the patio and storage units,
        so nothing is left off.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What Is a Binding-Not-to-Exceed Estimate?
      </h2>
      <p className="mt-3 text-ink">
        A binding-not-to-exceed estimate (sometimes called a guaranteed
        not-to-exceed quote) sets a ceiling. The mover weighs your shipment, and
        you pay whichever is lower: the binding price or the price based on
        actual weight. Your price can drop but cannot rise for the inventory
        listed.
      </p>
      <p className="mt-3 text-ink">
        This is usually the best deal for the customer, which is why not every
        carrier volunteers it. Ask for it by name when you request long-distance
        moving quotes.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What Happens with a Non-Binding Estimate at Delivery?
      </h2>
      <p className="mt-3 text-ink">
        A non-binding estimate is the mover's reasonable approximation. The final
        charges are calculated from the actual weight of your shipment and the
        services performed, at the rates in the mover's published tariff. The
        bill can come in lower, or higher, than the estimate.
      </p>
      <p className="mt-3 text-ink">
        Federal rules limit the surprise on delivery day. For an interstate
        household goods move with a non-binding estimate, the mover generally
        cannot require you to pay more than the estimated amount plus 10% at
        delivery to release your goods. This is often called the{" "}
        <strong>110% rule</strong>. Any remaining balance is billed afterwards,
        and you generally have 30 days to pay it. Charges for services you add
        after the estimate is written can be treated differently, so get every
        change in writing. FMCSA's{" "}
        <a
          href="https://www.fmcsa.dot.gov/protect-your-move"
          rel="noopener"
          className="text-brand underline"
        >
          Protect Your Move
        </a>{" "}
        page and the federal booklet "Your Rights and Responsibilities When You
        Move" explain the current rule in full.
      </p>
      <p className="mt-3 text-ink">
        The 110% limit controls what you must pay before unloading. It does not
        cap the total you may owe for the move.
      </p>
      <p className="mt-3 text-ink">
        A simple illustration with hypothetical numbers: if your non-binding
        estimate is $4,000, the most the mover can generally require at delivery
        is $4,400. If the final weight-based charges come to $4,900, the
        remaining $500 is billed to you after delivery. With a binding estimate
        for the same inventory, the bill would stay at the binding amount.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Which Interstate Moving Services Offer Binding Quotes?
      </h2>
      <p className="mt-3 text-ink">
        Many full-service interstate carriers offer binding estimates once they
        have surveyed your home. Fewer offer binding-not-to-exceed pricing, and
        policies vary by company, so ask each one directly. Questions worth
        putting to every mover:
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>Do you offer binding or binding-not-to-exceed estimates for this move?</li>
        <li>Will you survey my home in person or by video before you price it?</li>
        <li>Are you the carrier that will move my goods, or a broker arranging the move?</li>
        <li>What happens to the price if my pickup date changes?</li>
        <li>Which services (stairs, shuttle, packing, storage) are included, and which are extra?</li>
      </ul>
      <p className="mt-3 text-ink">
        If you are dealing with a broker, confirm which carrier stands behind the
        price and look up that carrier's record too. Our guide to{" "}
        <Link to="/how-to-verify-florida-mover-license/" className="text-brand underline">
          verifying a mover's FMCSA and FDACS registration
        </Link>{" "}
        shows how.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Why Does an In-Home or Video Survey Matter?
      </h2>
      <p className="mt-3 text-ink">
        A binding price is only as good as the inventory behind it. A survey lets
        the mover see your furniture, boxes and access conditions instead of
        guessing. FMCSA rules generally call for a physical survey when your home
        is within 50 miles of the mover's or its agent's location, unless you
        waive it in writing. Many carriers also offer video surveys for longer
        distances.
      </p>
      <p className="mt-3 text-ink">
        During the survey, point out everything that affects the price: stairs,
        elevators, long carries, parking limits, a piano or safe, and items you
        plan to sell or leave behind. Give every mover the same inventory, or the
        estimates you compare will not match.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What Should a Written Moving Estimate Include?
      </h2>
      <p className="mt-3 text-ink">
        Whatever type you choose, the estimate should be specific enough that two
        movers' numbers can be compared line by line. Before you sign, check that
        it shows:
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>The carrier's legal name, address and USDOT number.</li>
        <li>The estimate type, stated plainly: binding, binding-not-to-exceed or non-binding.</li>
        <li>The inventory the price is based on, room by room.</li>
        <li>Whether charges are based on weight or volume, and the rates used.</li>
        <li>Every extra service: packing, stairs, elevators, long carries, shuttles, crating and storage.</li>
        <li>Pickup dates and the delivery window.</li>
        <li>The valuation coverage you selected and what it costs.</li>
        <li>When payment is due and which payment methods are accepted.</li>
      </ul>
      <p className="mt-3 text-ink">
        If an item on this list is missing, ask for it in writing before you
        book. A verbal promise does not override the contract you sign.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Can Long-Distance Movers Guarantee a Delivery Date?
      </h2>
      <p className="mt-3 text-ink">
        Some can, for a price, but a guaranteed price is not a guaranteed date.
        Standard interstate service shares trailer space with other households,
        so the mover commits to a <strong>delivery window</strong>, a range of
        days written into your paperwork. The driver usually calls ahead once the
        truck is close.
      </p>
      <p className="mt-3 text-ink">
        If you need a specific date, ask about guaranteed delivery, dedicated
        truck or expedited service. Each costs more than standard consolidated
        shipping. Our guide to{" "}
        <Link
          to="/blog/$slug/"
          params={{ slug: "interstate-move-to-florida-timeline" }}
          className="text-brand underline"
        >
          interstate move timelines to Florida
        </Link>{" "}
        has typical windows by origin state and what faster service usually adds.
        Get the delivery window, and any guarantee or delay terms, in writing.
        If your new home will not be ready when the window opens, ask about{" "}
        <Link to="/storage-solutions/" className="text-brand underline">
          storage-in-transit and climate-controlled storage in Florida
        </Link>
        .
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What Are the Red Flags in a Moving Estimate?
      </h2>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>A price given by phone or online with no inventory list.</li>
        <li>The mover refuses to survey your home or to put the estimate type in writing.</li>
        <li>A quote far below every other estimate for the same inventory.</li>
        <li>A large deposit demanded upfront, or payment only by cash or wire transfer.</li>
        <li>No USDOT number on the estimate, or a legal name that does not match FMCSA records.</li>
        <li>Pressure to sign blank or incomplete documents.</li>
      </ul>
      <p className="mt-3 text-ink">
        Any of these is a reason to pause before booking. Our guide to{" "}
        <Link to="/moving-scams-florida/" className="text-brand underline">
          Florida moving scam warning signs
        </Link>{" "}
        covers payment protection and what to do if a price changes at pickup.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Do the Same Rules Apply to Moves Within Florida?
      </h2>
      <p className="mt-3 text-ink">
        No. A move that stays inside Florida, such as Miami to Orlando, is
        regulated by the Florida Department of Agriculture and Consumer Services
        (FDACS), not FMCSA. Florida movers must be registered with the state, and
        estimate rules for intrastate moves are set by Florida law. Check{" "}
        <a
          href="https://www.fdacs.gov/Business-Services/Moving-Companies"
          rel="noopener"
          className="text-brand underline"
        >
          FDACS moving services guidance
        </a>{" "}
        for the current requirements. Local in-town moves are usually priced by
        the hour; see our{" "}
        <Link to="/local-movers-in-florida/" className="text-brand underline">
          Florida local moving rate guide
        </Link>{" "}
        for how those quotes work.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Which Moving Estimate Should You Choose?
      </h2>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Full household, fixed budget:</strong> binding-not-to-exceed if
          offered, otherwise binding.
        </li>
        <li>
          <strong>Small or partial shipment you cannot inventory yet:</strong> a
          non-binding estimate can work, as long as you budget for the estimate
          plus 10% at delivery and a possible balance afterwards.
        </li>
        <li>
          <strong>Any interstate move:</strong> pair the estimate with the right
          valuation coverage. Read{" "}
          <Link
            to="/blog/$slug/"
            params={{ slug: "moving-insurance-florida-explained" }}
            className="text-brand underline"
          >
            moving insurance in Florida explained
          </Link>{" "}
          before you accept the free released-value option.
        </li>
      </ul>
      <p className="mt-3 text-ink">
        For typical price ranges on a common inbound lane, see{" "}
        <Link
          to="/blog/$slug/"
          params={{ slug: "cost-to-move-new-york-to-florida" }}
          className="text-brand underline"
        >
          how much it costs to move from New York to Florida
        </Link>
        . When you are ready, compare written quotes from{" "}
        <Link to="/long-distance-movers/" className="text-brand underline">
          FMCSA-registered long-distance movers
        </Link>{" "}
        in our network.
      </p>
    </div>
  );
}

const article: BlogArticleModule = {
  meta: {
    slug: "binding-vs-non-binding-moving-estimates",
    title: "Binding vs Non-Binding Moving Estimates: Which Should You Get?",
    excerpt:
      "Binding estimates lock your price; non-binding ones follow actual weight. How each works for interstate moves, the 110% rule, surveys, delivery windows and red flags.",
    category: "Moving Guides",
    date: "2026-10-27",
    dateLabel: "October 27, 2026",
    image: "/__l5e/assets-v1/eb89c274-9067-43d1-addc-f9a6378e584d/local-movers-in-miami-costs.jpg",
    imageAlt: "Couple reviewing a moving estimate together",
    metaTitle: "Binding vs Non-Binding Moving Estimates: Which to Get",
    metaDescription:
      "Binding vs non-binding moving estimates explained: how each works for interstate moves, the federal 110% rule, binding-not-to-exceed quotes and red flags.",
  },
  Body,
  faqs: [
    {
      q: "What is a binding moving estimate?",
      a: "It is a written, guaranteed price for the goods and services listed in it. You pay that amount even if your shipment weighs more than expected, as long as you do not add items or services.",
    },
    {
      q: "What is the 110% rule for non-binding moving estimates?",
      a: "For interstate household goods moves, the mover generally cannot require more than the non-binding estimate plus 10% at delivery. Any remaining balance is billed afterwards; see FMCSA Protect Your Move for the full rule.",
    },
    {
      q: "Is binding-not-to-exceed better than a binding estimate?",
      a: "Usually, for the customer. You pay the binding price or the actual weight-based price, whichever is lower, so the price can drop but not rise for the listed inventory.",
    },
    {
      q: "Which moving companies offer guaranteed quotes for long-distance moves?",
      a: "Many full-service interstate carriers offer binding, or guaranteed, estimates after an in-home or video survey, and fewer offer binding-not-to-exceed. Policies vary, so ask each mover directly and get the estimate type in writing.",
    },
    {
      q: "Does a binding estimate guarantee my delivery date?",
      a: "No. A binding estimate fixes the price, not the date. Standard interstate service uses a delivery window; guaranteed dates are a separate, more expensive service you must request in writing.",
    },
    {
      q: "Can a mover change a binding estimate on moving day?",
      a: "Only if the inventory or services change, for example extra items or packing you did not list. The mover should put any revised price in writing before loading.",
    },
  ],
  silo: ["cost-to-move-new-york-to-florida", "moving-insurance-florida-explained"],
  next: {
    service: { to: "/long-distance-movers/", label: "compare binding quotes from long-distance movers" },
    city: { to: "/movers-in-orlando/", label: "get Orlando moving quotes" },
  },
};

export default article;
