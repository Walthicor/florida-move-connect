import { Link } from "@tanstack/react-router";
import type { BlogArticleModule } from "./types";

// Hourly math uses the site-wide $95-$150/hour band for a two-mover crew with a truck.
const HOURLY_MATH: [string, string, string][] = [
  ["2 hours", "$190-$300", "Common minimum; a dorm room or a few large items"],
  ["3 hours", "$285-$450", "A small studio or a 10x10 storage unit"],
  ["4 hours", "$380-$600", "A full studio or a lightly furnished one-bedroom"],
  ["5 hours", "$475-$750", "A one-bedroom with stairs or a long carry"],
];

const EXAMPLES: [string, string, string, string][] = [
  ["Dorm room or single room", "2 movers", "2-3 hrs (often the minimum)", "About $190-$450 + any travel fee"],
  ["A few large items (sofa, bed, dresser)", "2 movers", "2-3 hrs (often the minimum)", "About $190-$450 + any travel fee"],
  ["10x10 storage unit to an apartment", "2 movers", "2-4 hrs", "About $190-$600 + any travel fee"],
  ["Studio apartment across town", "2 movers", "3-4 hrs", "About $400-$700 all-in"],
];

function Body() {
  return (
    <div className="container-page py-10 md:py-12 max-w-[720px] prose-blog">
      <p className="text-lg text-ink leading-relaxed">
        <strong>Small moves in Florida</strong> with hourly movers typically cost{" "}
        <strong>$95-$150 per hour</strong> for a two-mover crew with a truck, so a two- or three-hour
        job often lands around <strong>$190-$450</strong> before any travel or truck fee. Minimums
        commonly run 2-3 hours but vary by company, which means even a single sofa is usually billed
        at the minimum. A furnished studio typically comes to about $400-$700. These are typical
        estimates; confirm the rate, minimum and fees in writing before you book.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How do hourly movers charge for a small move?
      </h2>
      <p className="mt-3 text-ink">
        Most local movers in Florida bill by the hour for the crew and truck, from the time the job
        starts until it ends. Your price is simple multiplication: the hourly rate times the hours
        worked, with the minimum as the floor. Adding a third mover commonly adds roughly $40-$60 per
        hour, and for a small job it can finish the work fast enough to pay for itself.
      </p>
      <p className="mt-3 text-ink">
        When you compare movers by the hour, compare the whole formula, not just the rate. A crew at
        $95 per hour with a three-hour minimum and a separate travel fee can cost more for a small
        job than a crew at $120 per hour with a two-hour minimum and travel included. Ask each
        company to price the same job, then compare the totals.
      </p>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface-alt text-ink">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Hours billed</th>
              <th className="px-4 py-3 text-left font-semibold">2 movers + truck ($95-$150/hr)</th>
              <th className="px-4 py-3 text-left font-semibold">Typical job</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {HOURLY_MATH.map(([hours, cost, job]) => (
              <tr key={hours} className="bg-white align-top">
                <td className="px-4 py-3 font-semibold text-ink whitespace-nowrap">{hours}</td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{cost}</td>
                <td className="px-4 py-3 text-ink">{job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-ink">
        Hourly math only, before travel, truck, stair or materials charges. Typical estimates, not
        quotes. For full-home rates by bedroom count, see our{" "}
        <Link to="/local-movers-in-florida/" className="text-brand underline">
          local movers in Florida rate guide
        </Link>
        .
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What is the minimum charge for movers?
      </h2>
      <p className="mt-3 text-ink">
        Most movers set a minimum number of hours per job, commonly 2-3 hours. Some set it higher,
        especially in busy markets or on weekends; many Miami movers use a three- or four-hour
        minimum. The minimum exists because every job costs the company a truck, a crew and travel
        time, however small the load.
      </p>
      <p className="mt-3 text-ink">
        If your job takes 70 minutes and the minimum is 2 hours, you pay for 2 hours. Use the extra
        time: ask the crew to move heavy furniture between rooms, carry boxes to the garage or haul a
        second small load if it's on the way. Ask whether time after the minimum is billed in full
        hours, half hours or 15-minute increments, because that changes the final bill.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What extra fees apply to small moves?
      </h2>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Travel time or a travel fee.</strong> Some movers bill from the moment the crew
          leaves its base; others start the clock at your door and add a flat travel or truck
          charge. The drive between your two addresses is usually billable time either way.
        </li>
        <li>
          <strong>Fuel or truck fee.</strong> Some companies add a flat charge per job. Ask whether
          it's included in the hourly rate.
        </li>
        <li>
          <strong>Stairs and long carries.</strong> On hourly jobs, stairs add time; for flat-rate
          specialty items, some movers charge per flight.
        </li>
        <li>
          <strong>Materials.</strong> Shrink wrap, mattress bags and boxes may be billed separately.
          Moving blankets are often included.
        </li>
        <li>
          <strong>Specialty items.</strong> Pianos, safes and very heavy pieces are usually quoted
          separately.
        </li>
      </ul>
      <p className="mt-4 text-ink">
        A complete written quote lists the hourly rate, crew size, minimum hours, travel and fuel
        charges, stair charges and the mover's FDACS registration number. If any of those are
        missing, ask before you book.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How much do small moves cost? Four examples
      </h2>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface-alt text-ink">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Job</th>
              <th className="px-4 py-3 text-left font-semibold">Crew</th>
              <th className="px-4 py-3 text-left font-semibold">Time</th>
              <th className="px-4 py-3 text-left font-semibold">Typical estimate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {EXAMPLES.map(([job, crew, time, cost]) => (
              <tr key={job} className="bg-white align-top">
                <td className="px-4 py-3 font-semibold text-ink">{job}</td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{crew}</td>
                <td className="px-4 py-3 text-ink">{time}</td>
                <td className="px-4 py-3 text-ink">{cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-ink">
        Illustrative estimates using the $95-$150/hour band, not quotes. Your price depends on
        access, distance and the mover's minimum.
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Studio apartment:</strong> a furnished studio, boxed in advance, usually takes a
          two-mover crew about three to four hours. Elevators, walk-ups and building rules matter
          more than the size of the load; our{" "}
          <Link to="/apartment-movers/" className="text-brand underline">
            apartment movers guide
          </Link>{" "}
          covers elevator reservations, insurance certificates and stair pricing.
        </li>
        <li>
          <strong>Dorm room:</strong> mostly boxes, a mini-fridge and maybe a desk. Move-in and
          move-out weeks are busy, so book early and confirm parking and loading rules with the
          school.
        </li>
        <li>
          <strong>Storage unit:</strong> tell the mover the unit size, how full it is and whether
          it's a drive-up or interior unit. A long hallway walk adds time.
        </li>
        <li>
          <strong>One piece or a few large items:</strong> a sectional, a bedroom set, an armoire or
          a gun safe. Local movers for one piece of furniture usually bill the minimum. Our page on{" "}
          <Link to={"/furniture-movers/" as "/"} className="text-brand underline">
            furniture movers for single items and heavy pieces
          </Link>{" "}
          explains how these jobs are quoted.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Are small moving companies cheaper for short-distance moves?
      </h2>
      <p className="mt-3 text-ink">
        Not automatically. A smaller local company may have a lower minimum, a smaller truck and
        more flexibility to fit a two-hour job between larger moves. A larger company may have more
        crews and more open dates. What decides the price of a short-distance move is the same for
        both: the hourly rate, the minimum, how the company bills travel time and how quickly the
        crew works.
      </p>
      <p className="mt-3 text-ink">
        Size isn't the check that matters most. Whatever its size, a mover working inside Florida
        must be registered with the state, and you can confirm the registration through{" "}
        <a
          href="https://www.fdacs.gov/Business-Services/Moving-Companies"
          rel="noopener"
          className="text-brand underline"
        >
          FDACS moving services
        </a>{" "}
        before you book. Compare at least two or three written quotes for the same job.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What should you tell movers to get an accurate small-move quote?
      </h2>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>A list of every large item, with rough dimensions for anything oversized.</li>
        <li>The number of boxes, and whether they're packed and sealed.</li>
        <li>Floor numbers, stairs, elevators and how far the truck can park from each door.</li>
        <li>The distance between the two addresses.</li>
        <li>Photos of anything heavy, fragile or awkward.</li>
      </ul>
      <p className="mt-4 text-ink">
        The more precise you are, the closer the estimate will be to the final bill, and the less
        likely the crew is to arrive with the wrong truck or too few people.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        When is labor-only help cheaper than a full moving crew?
      </h2>
      <p className="mt-3 text-ink">
        If you already have a rental truck, a pickup or a portable container, you may only need
        muscle. Labor-only crews load and unload by the hour but bring no truck, so the rate is often
        lower than a full crew with a truck. It tends to make sense when:
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>You're loading a portable container or a truck you've already rented.</li>
        <li>You need help moving heavy furniture within the same home or building.</li>
        <li>You're unloading a long-distance rental truck at your new Florida home.</li>
      </ul>
      <p className="mt-4 text-ink">
        The trade-off: you handle the driving, and coverage for your belongings in transit may be
        limited. Compare it against a full-service quote; see how{" "}
        <Link to={"/moving-labor/" as "/"} className="text-brand underline">
          hourly moving labor for loading and unloading
        </Link>{" "}
        is priced.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What do small moves cost in Miami-Dade and Tampa?
      </h2>
      <p className="mt-3 text-ink">
        <strong>Miami-Dade</strong> sits at the top of Florida's range. Our Miami page lists typical
        rates of $100-$160 per hour for two movers, and high-rise buildings add elevator time and
        long carries. For small jobs in Miami-Dade, ask about the minimum first: it often decides
        the bill more than the hourly rate does. See typical local rates on our page about{" "}
        <Link to="/movers-in-miami/" className="text-brand underline">
          movers in Miami for small jobs and condos
        </Link>
        .
      </p>
      <p className="mt-3 text-ink">
        <strong>Tampa Bay</strong> rates generally fall within the statewide $95-$150 band. Bridge
        traffic between Tampa and St. Petersburg is billable time on an hourly job, so an early start
        can cut the bill. Small moving companies in Tampa often handle these short jobs; our{" "}
        <Link to="/movers-in-tampa/" className="text-brand underline">
          Tampa movers guide
        </Link>{" "}
        covers local rates and timing.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How can you cut billed time on an hourly move?
      </h2>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Pack and seal every box</strong> before the crew arrives. Packing on the clock is
          the most expensive way to pack.
        </li>
        <li>
          <strong>Take apart what you can,</strong> such as bed frames and table legs, and bag the
          hardware.
        </li>
        <li>
          <strong>Stage everything near the door</strong> on the ground floor or in the garage if
          you can.
        </li>
        <li>
          <strong>Reserve the elevator and parking</strong> at both ends so the truck can park close.
        </li>
        <li>
          <strong>Measure doorways</strong> for large pieces ahead of time so nothing gets stuck.
        </li>
        <li>
          <strong>Move midweek and mid-month,</strong> and book an early start to beat traffic and
          afternoon storms.
        </li>
        <li>
          <strong>Be ready with a plan:</strong> know where each piece goes in the new place.
        </li>
      </ul>
      <p className="mt-4 text-ink">
        Every hour you save is worth $95-$150 on a two-mover crew. When you're ready, one request
        through Florida Movers Direct reaches up to four independent licensed movers, so you can
        compare minimums and fees side by side.
      </p>
    </div>
  );
}

const article: BlogArticleModule = {
  meta: {
    slug: "small-moves-hourly-movers-florida",
    title: "Small Moves in Florida: What Hourly Movers Really Cost",
    excerpt:
      "Hourly movers in Florida typically charge $95-$150 for two movers and a truck. See minimums, fees and real small-move examples before you book.",
    category: "Moving Costs",
    date: "2026-10-27",
    dateLabel: "October 27, 2026",
    image: "/__l5e/assets-v1/eb89c274-9067-43d1-addc-f9a6378e584d/local-movers-in-miami-costs.jpg",
    imageAlt: "Couple reviewing a local moving estimate in Miami",
    metaTitle: "Small Moves in Florida: What Hourly Movers Really Cost",
    metaDescription:
      "Small moves in Florida: hourly movers typically charge $95-$150 for two movers and a truck. See minimums, travel fees, examples and ways to cut billed time.",
  },
  Body,
  faqs: [
    {
      q: "How much do movers charge per hour for a small move in Florida?",
      a: "A typical estimate is $95-$150 per hour for a two-mover crew with a truck. Miami-Dade often runs higher, and travel or truck fees may be added.",
    },
    {
      q: "Is there a minimum charge for hourly movers?",
      a: "Yes. Minimums commonly run 2-3 hours, but they vary by company and some markets use three or four. Confirm the minimum in writing before you book.",
    },
    {
      q: "Can I hire movers for just one piece of furniture?",
      a: "Yes. Single-item jobs are usually billed at the mover's minimum, so you will often pay for two or three hours even if the job is quicker.",
    },
    {
      q: "How much does it cost to move a studio apartment in Florida?",
      a: "A furnished studio typically costs an estimated $400-$700 with a two-mover crew working about three to four hours. Stairs, elevators and distance can push it higher.",
    },
    {
      q: "Is labor-only moving help cheaper than full-service movers?",
      a: "Often, if you already have a truck or a portable container, because you pay only for loading and unloading. You handle the driving and should check what coverage the crew provides.",
    },
  ],
  silo: ["how-much-do-movers-cost-florida", "professional-movers-vs-diy-truck-florida"],
  next: {
    service: { to: "/local-movers-in-florida/", label: "compare local movers in Florida" },
    city: { to: "/movers-in-miami/", label: "compare Miami movers" },
  },
};

export default article;
