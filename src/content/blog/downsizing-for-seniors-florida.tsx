import { Link } from "@tanstack/react-router";
import type { BlogArticleModule } from "./types";

const TIMELINE: [string, string][] = [
  ["12 weeks out", "Family conversation about the move, the destination and the budget. Get the new home's floor plan and the community's move-in rules."],
  ["10-11 weeks", "Measure the new rooms and the furniture you'd like to keep. Draw a simple furniture plan."],
  ["8-10 weeks", "Sort one room at a time: keep, gift, sell, donate. Set a date for family to claim heirlooms."],
  ["6-8 weeks", "Compare written estimates and book movers or a senior move manager. Confirm the move-in window."],
  ["4 weeks", "Schedule donation pickups and sales. Send the mover's certificate of insurance to the community if required. Start packing rooms you rarely use."],
  ["2 weeks", "Confirm the move date in writing. Plan medications and documents. File the change of address."],
  ["Moving day", "The essentials bag travels with your parent, not on the truck. Set up the bedroom and bathroom first."],
];

const SORT_PILES: [string, string, string][] = [
  ["Keep", "Fits the floor plan and is used regularly or truly loved", "Measure it first; label it with the room it goes to"],
  ["Gift", "Heirlooms and keepsakes family members want now", "Set a claim deadline; family arranges pickup or shipping"],
  ["Sell", "Furniture or collectibles with real resale value", "Start early; sales often take longer than expected"],
  ["Donate", "Usable items no one in the family needs", "Book charity pickups weeks ahead; keep the receipts"],
  ["Discard", "Broken, expired or unsafe items", "Plan a haul-away so it doesn't land on the moving truck"],
];

// Typical ranges reused from the /senior-moving-services/ cost table.
const COSTS: [string, string][] = [
  ["Studio / 1BR apartment to a 55+ community", "$600-$1,100"],
  ["2BR home downsizing to an apartment", "$900-$1,800"],
  ["Full home to assisted living (partial shipment)", "$700-$1,500"],
  ["Full-service downsizing (sort, pack, move, donate)", "$1,800-$4,500"],
];

function Body() {
  return (
    <div className="container-page py-10 md:py-12 max-w-[720px] prose-blog">
      <p className="text-lg text-ink leading-relaxed">
        <strong>Downsizing for seniors in Florida</strong> works best as an 8-12 week plan: measure
        the new home, sort one room at a time into keep, gift, sell and donate, then book movers once
        you know what is actually going. Most Florida senior moves cost an estimated{" "}
        <strong>$600-$2,500</strong>, and full-service downsizing help runs about{" "}
        <strong>$1,800-$4,500</strong>. Below is the step-by-step plan, from the first family
        conversation to the first night in the new home.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How long does downsizing for a senior move take?
      </h2>
      <p className="mt-3 text-ink">
        Give it 8 to 12 weeks if you can. Sorting a home that holds decades of belongings is slow,
        emotional work, and it goes better in two- or three-hour sessions than in one exhausting
        weekend. A rushed timeline is also how families end up paying to move furniture that won't
        fit.
      </p>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface-alt text-ink">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">When</th>
              <th className="px-4 py-3 text-left font-semibold">What to do</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {TIMELINE.map(([when, what]) => (
              <tr key={when} className="bg-white align-top">
                <td className="px-4 py-3 font-semibold text-brand whitespace-nowrap">{when}</td>
                <td className="px-4 py-3 text-ink">{what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Why should you measure the new floor plan before sorting?
      </h2>
      <p className="mt-3 text-ink">
        The new home decides what moves, so start with its floor plan. Ask the community or the
        seller for a plan with room dimensions, or measure in person. Note doorways, closet space,
        kitchen cabinets and wall space for beds and dressers.
      </p>
      <p className="mt-3 text-ink">
        Then measure the furniture your parent wants to keep and sketch where each piece will go.
        Painter's tape on the floor of the current home, marking the size of the new bedroom, helps
        many people see what fits. Measuring turns hard conversations into simple ones: the question
        stops being "do you love this sofa?" and becomes "does this sofa fit the living room?"
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How do you decide what to keep, gift, sell or donate?
      </h2>
      <p className="mt-3 text-ink">
        Work one room at a time, starting with the space used least, such as a guest room, garage or
        storage closet. Leave the bedroom and kitchen for last; they're used daily and hold the most
        attachment.
      </p>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface-alt text-ink">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Pile</th>
              <th className="px-4 py-3 text-left font-semibold">What goes in it</th>
              <th className="px-4 py-3 text-left font-semibold">Next step</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {SORT_PILES.map(([pile, what, next]) => (
              <tr key={pile} className="bg-white align-top">
                <td className="px-4 py-3 font-semibold text-ink">{pile}</td>
                <td className="px-4 py-3 text-ink">{what}</td>
                <td className="px-4 py-3 text-ink">{next}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-ink">
        Use colored stickers or tape so everyone, including the moving crew, can tell the piles
        apart at a glance. Keep a "decide later" box small; if it grows past a few boxes, the sort
        isn't done yet.
      </p>
      <p className="mt-3 text-ink">
        If decisions stall, bring in downsizing help: a neutral person often keeps sessions moving
        and takes pressure off family relationships. Whoever helps, let your parent make the final
        call on personal items. It's their home and their history, and feeling in control makes the
        move easier for everyone.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What should you do with family heirlooms?
      </h2>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Ask family to claim items by a set date.</strong> Share photos with relatives who
          live far away so they can choose too.
        </li>
        <li>
          <strong>Record the stories.</strong> A short note or phone video about where a piece came
          from keeps the memory even when the object goes to someone else.
        </li>
        <li>
          <strong>Get valuables appraised</strong> before you sell, donate or ship them, especially
          jewelry, art, silver and collectibles.
        </li>
        <li>
          <strong>Pack fragile heirlooms professionally.</strong> China, glass, framed art and
          clocks are where breakage happens. Professional{" "}
          <Link to="/packing-services/" className="text-brand underline">
            packing help for seniors and fragile heirlooms
          </Link>{" "}
          can be booked for just those items.
        </li>
        <li>
          <strong>Keep the irreplaceable off the truck.</strong> Jewelry, photo albums, documents
          and medications travel with your parent or a family member.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Do you need a senior move manager or just movers?
      </h2>
      <p className="mt-3 text-ink">
        Movers load, transport and unload, and many offer packing. A senior move manager plans and
        coordinates the whole downsizing: sorting sessions, floor plans, sales and donations, hiring
        the movers, and often unpacking and setting up the new home. Some moving companies offer both
        under one estimate.
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Movers alone</strong> are usually enough when your parent has already decided what
          to keep and family can handle sorting and donations.
        </li>
        <li>
          <strong>A move manager</strong> helps when the home is large, family lives out of state,
          or decisions keep stalling. Ask for references, proof of insurance and a written scope of
          work.
        </li>
      </ul>
      <p className="mt-4 text-ink">
        Our{" "}
        <Link to={"/senior-moving-services/" as "/"} className="text-brand underline">
          senior moving services guide
        </Link>{" "}
        explains what full-service downsizing usually includes and how crews handle 55+ community
        paperwork.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How much does senior downsizing help cost in Florida?
      </h2>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface-alt text-ink">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Type of move</th>
              <th className="px-4 py-3 text-left font-semibold">Typical estimate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {COSTS.map(([type, cost]) => (
              <tr key={type} className="bg-white">
                <td className="px-4 py-3 font-semibold text-ink">{type}</td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-ink">
        Typical estimates, not quotes. Hourly local work runs about $95-$150 per hour for a
        two-mover crew with a truck, so every hour of sorting finished before moving day is an hour
        you don't pay a crew to wait. Ask for a written estimate that lists sorting, packing,
        donation runs and any storage separately.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What should you know about moving into a 55+ community or assisted living?
      </h2>
      <p className="mt-3 text-ink">
        <strong>55+ communities</strong> usually set move-in windows, require gate registration and
        often ask the mover for a certificate of insurance. Many associations also require an
        application or approval before a new resident moves in, so ask the community office for the
        full list of requirements as soon as you have a date. In The Villages, villa courts and golf-cart streets often mean a
        large truck can't reach the door. Our guide to{" "}
        <Link to="/movers-in-the-villages/" className="text-brand underline">
          downsizing movers in The Villages
        </Link>{" "}
        covers staging and shuttle trips. In South Florida condos, elevator reservations and building
        rules matter just as much; see{" "}
        <Link to="/movers-in-boca-raton/" className="text-brand underline">
          senior and condo movers in Boca Raton
        </Link>
        .
      </p>
      <p className="mt-3 text-ink">
        <strong>Assisted living</strong> adds its own paperwork: admission agreements, health
        assessments and medication lists are typical, and the community usually assigns a move-in
        date. Ask what furniture is allowed, what the room includes (some provide a bed), and
        whether there are rules on rugs, extension cords or small appliances. A partial shipment is
        normal: often just a bedroom set, a favorite chair, photos and the essentials.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How can you help elderly parents move if you live out of state?
      </h2>
      <p className="mt-3 text-ink">
        Many Florida senior relocations are organized by adult children in another state. Hiring
        movers for elderly parents from a distance works when roles and paperwork are clear:
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Name one point person</strong> in the family to talk with the mover, so
          instructions don't conflict.
        </li>
        <li>
          <strong>Use video surveys.</strong> Many movers can estimate from a video walkthrough;
          ask that the written estimate go to both you and your parent.
        </li>
        <li>
          <strong>Make sure the mover may talk to you.</strong> Your parent can authorize the
          company in writing to discuss the move with you.
        </li>
        <li>
          <strong>Have someone local on moving day,</strong> whether a relative, neighbor or move
          manager, and ask the crew whether they can send photo updates.
        </li>
        <li>
          <strong>Handle the paperwork early:</strong> mail forwarding, utilities, prescriptions
          and doctors' offices. If the move is within Southwest Florida, our page on{" "}
          <Link to="/movers-in-naples/" className="text-brand underline">
            Naples movers and move managers
          </Link>{" "}
          covers gated-community rules that families often handle remotely.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How do you avoid moving scams that target seniors?
      </h2>
      <p className="mt-3 text-ink">
        Older adults are frequent targets of high-pressure sales calls, so check every mover before
        signing anything:
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>For a move within Florida, look up the mover's state registration with FDACS.</li>
        <li>
          Be wary of large cash deposits, payment only by wire or gift card, or pressure to "book
          today."
        </li>
        <li>Never sign blank or incomplete paperwork, and get every estimate in writing.</li>
        <li>Be cautious with buyers who offer to take valuables quickly for cash; get an appraisal first.</li>
        <li>Have a family member review the contract before your parent signs it.</li>
      </ul>
      <p className="mt-4 text-ink">
        Our{" "}
        <Link to="/moving-scams-florida/" className="text-brand underline">
          guide to Florida moving scams and warning signs
        </Link>{" "}
        lists the red flags and where to report a problem, and the{" "}
        <a
          href="https://www.fdacs.gov/Business-Services/Moving-Companies"
          rel="noopener"
          className="text-brand underline"
        >
          FDACS moving services page
        </a>{" "}
        explains how Florida regulates movers.
      </p>
    </div>
  );
}

const article: BlogArticleModule = {
  meta: {
    slug: "downsizing-for-seniors-florida",
    title: "Downsizing for Seniors in Florida: A Step-by-Step Moving Plan",
    excerpt:
      "An 8-12 week downsizing plan for Florida seniors and their families: measuring, sorting, heirlooms, 55+ and assisted living move-ins, costs and scam checks.",
    category: "Moving Guides",
    date: "2026-10-27",
    dateLabel: "October 27, 2026",
    image: "/__l5e/assets-v1/42d63b09-d1cb-442b-aa30-f5abf9513a27/snowbird-moving-florida.jpg",
    imageAlt: "Retired couple arriving at a Florida home with suitcases at golden hour",
    metaTitle: "Downsizing for Seniors in Florida: Step-by-Step Plan",
    metaDescription:
      "Downsizing for seniors in Florida: an 8-12 week plan to measure, sort, handle heirlooms, move into 55+ or assisted living, help remotely and avoid scams.",
  },
  Body,
  faqs: [
    {
      q: "How far in advance should seniors start downsizing?",
      a: "Eight to twelve weeks before the move is a comfortable window. It leaves time to sort in short sessions, sell or donate items and book movers once you know what is going.",
    },
    {
      q: "How much does senior downsizing help cost in Florida?",
      a: "Most Florida senior moves cost an estimated $600-$2,500, and full-service downsizing that includes sorting, packing, moving and donation coordination typically runs $1,800-$4,500. Get a written estimate for your specific home.",
    },
    {
      q: "What is the difference between a senior move manager and a mover?",
      a: "A mover packs, loads and transports your belongings. A senior move manager plans and coordinates the whole process, including sorting, floor plans, sales, donations and hiring the movers.",
    },
    {
      q: "What do 55+ communities in Florida require on move-in day?",
      a: "Requirements vary, but scheduled move-in windows, gate registration and a certificate of insurance from the mover are common. Ask the community office for its list as soon as you have a date.",
    },
    {
      q: "How can I help my elderly parent move from another state?",
      a: "Choose one family point person, use video surveys for estimates, have your parent authorize the mover to speak with you and arrange for someone local to be there on moving day.",
    },
  ],
  silo: ["snowbird-moving-florida-guide", "florida-moving-checklist-8-weeks"],
  next: {
    service: { to: "/senior-moving-services/", label: "compare senior moving services in Florida" },
    city: { to: "/movers-in-naples/", label: "compare Naples movers" },
  },
};

export default article;
