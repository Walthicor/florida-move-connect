import { Link } from "@tanstack/react-router";
import type { BlogArticleModule } from "./types";

const ITEM_ROWS: [string, string][] = [
  ["Wood furniture and antiques", "Joints swell and shrink, veneer lifts, finishes cloud"],
  ["Pianos and other instruments", "Soundboards and actions absorb moisture and drift out of regulation"],
  ["Electronics and appliances with circuit boards", "Condensation and corrosion on boards and connectors"],
  ["Documents and photographs", "Paper cockles, prints stick together, mold spots appear"],
  ["Mattresses, upholstery and leather", "Trapped moisture leads to mildew and odors"],
  ["Artwork and framed pieces", "Canvas slackens, paper buckles, mold forms behind glass"],
];

const OPTION_ROWS: [string, string, string][] = [
  ["Storage-in-transit (mover warehouse)", "$150-$400/mo + redelivery", "Closing gaps; one company handles load, storage and delivery"],
  ["Self-storage 5x10, climate-controlled", "$95-$160/mo", "Apartment or 1-bedroom contents you need to access"],
  ["Self-storage 10x15, climate-controlled", "$150-$260/mo", "2-3 bedroom contents or long, open-ended stays"],
  ["Portable container", "$120-$250/mo + delivery", "DIY timelines; confirm whether the storage site is conditioned"],
];

function Body() {
  return (
    <div className="container-page py-10 md:py-12 max-w-[720px] prose-blog">
      <p className="text-lg text-ink leading-relaxed">
        For most belongings stored longer than a few days in Florida, yes, you
        need <strong>climate-controlled storage</strong>. Florida's heat and
        humidity are hard on wood furniture, electronics, documents, photos,
        mattresses and instruments, and an unconditioned unit tracks the outside
        air. Climate-controlled storage in Florida typically costs{" "}
        <strong>$20-$50 more per month</strong> than a standard unit, as an
        estimate, and it is the default choice for anything you want to keep in
        good condition.
      </p>
      <p className="mt-3 text-ink">
        For a side-by-side of every moving and storage option and current rate
        ranges, see our{" "}
        <Link to="/storage-solutions/" className="text-brand underline">
          moving and storage options in Florida
        </Link>
        . This guide goes deeper on when climate control matters, what to put in
        it, and how condo and apartment newcomers can plan around it.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What Is Climate-Controlled Storage?
      </h2>
      <p className="mt-3 text-ink">
        A climate-controlled unit is inside a building that is heated, cooled
        and, at better facilities, dehumidified, so temperature and humidity stay
        within a narrower range year-round. You will also see the term{" "}
        <strong>temperature-controlled storage</strong>. Some facilities use the
        two terms interchangeably, while others use "temperature-controlled" for
        units that are air-conditioned but not actively dehumidified. In Florida,
        that difference matters. Always ask how the facility manages humidity,
        not just temperature.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Why Is Humidity the Real Risk in Florida Storage?
      </h2>
      <p className="mt-3 text-ink">
        Heat alone is not what ruins most stored belongings. Moisture is. Through
        a Florida summer, an unconditioned unit can sit in hot, humid air for
        months, and that moisture works its way into wood, fabric, paper and
        electronics. Mold and mildew need little more than warmth, moisture and
        still air, which is exactly what a closed metal unit provides.
      </p>
      <p className="mt-3 text-ink">
        Temperature swings add to the damage. When the air cools at night or a
        storm passes through, moisture can condense on cooler surfaces such as
        metal, glass and circuit boards. Over weeks and months, that cycle warps
        furniture, corrodes contacts and leaves mildew on anything soft.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Which Items Need Climate-Controlled Storage?
      </h2>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface-alt text-ink">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Item</th>
              <th className="px-4 py-3 text-left font-semibold">What Humidity Does Without Climate Control</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {ITEM_ROWS.map(([item, risk]) => (
              <tr key={item}>
                <td className="px-4 py-3 font-semibold text-ink">{item}</td>
                <td className="px-4 py-3 text-ink">{risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-ink">
        Pianos deserve special care. A specialist crew should move the instrument
        in and out, and it should never sit in an unconditioned space. See{" "}
        <Link to="/piano-movers/" className="text-brand underline">
          how Florida piano movers handle storage and transport
        </Link>{" "}
        before you book a unit for one.
      </p>
      <p className="mt-3 text-ink">
        Items that can usually handle a standard unit for a short time include
        metal patio furniture, plastic bins of seasonal decor, garden tools and
        sealed bulk goods. Even those last longer in climate control.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        Storage-in-Transit vs Self-Storage vs Portable Containers: Which Fits Your Move?
      </h2>
      <p className="mt-3 text-ink">
        The rates below are typical estimates for Florida, not quotes. Prices
        vary by city, unit size and season.
      </p>
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface-alt text-ink">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Option</th>
              <th className="px-4 py-3 text-left font-semibold">Typical Cost</th>
              <th className="px-4 py-3 text-left font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {OPTION_ROWS.map(([option, cost, best]) => (
              <tr key={option}>
                <td className="px-4 py-3 font-semibold text-ink">{option}</td>
                <td className="px-4 py-3 text-ink">{cost}</td>
                <td className="px-4 py-3 text-ink">{best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Storage-in-transit (SIT)</strong> keeps your shipment on the
          mover's inventory in its warehouse. You cannot visit it, but you avoid
          a second loading crew. Ask whether the warehouse is climate-controlled;
          not every one is.
        </li>
        <li>
          <strong>Self-storage</strong> gives you access whenever you like, but
          you handle two moves: home to unit, then unit to new home.
        </li>
        <li>
          <strong>Portable containers</strong> sit in your driveway for loading,
          then go to the company's storage site. A sealed container parked
          outside in a Florida summer is not climate-controlled, so ask where and
          how it is stored.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How Much Does Climate-Controlled Storage Cost in Florida?
      </h2>
      <p className="mt-3 text-ink">
        As a typical estimate, a 5x10 climate-controlled unit runs about
        $95-$160 per month and a 10x15 about $150-$260 per month, with standard
        units usually $20-$50 less. What moves the price within those ranges:
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Location.</strong> Facilities in dense South Florida and
          coastal areas tend to cost more than inland ones.
        </li>
        <li>
          <strong>Unit position.</strong> Ground-floor and elevator-adjacent
          units are often priced higher than upper floors.
        </li>
        <li>
          <strong>Season.</strong> Demand rises with summer moves and with
          snowbird arrivals and departures.
        </li>
        <li>
          <strong>Promotions.</strong> Low first-month rates are common, and the
          regular rate after the promotion is what you will pay for most of your
          stay.
        </li>
        <li>
          <strong>Protection plans.</strong> Many facilities require proof of
          insurance or a facility protection plan, which adds a monthly fee.
        </li>
      </ul>
      <p className="mt-3 text-ink">
        Compare the total for the number of months you expect to stay, not just
        the move-in price.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What Are the Best Storage Solutions for Newcomers Moving into Florida Condos?
      </h2>
      <p className="mt-3 text-ink">
        Condo newcomers usually face two problems at once: the move-in date and
        the storage space. Plan for both:
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          <strong>Check association rules first.</strong> Many condo associations
          restrict what can be kept on balconies, in hallways or in assigned
          storage lockers, and some do not allow storage on balconies at all.
          Read the rules or ask the manager before you plan around that space.
        </li>
        <li>
          <strong>Plan for move-in approval.</strong> Associations often require
          an approved application, a certificate of insurance from the mover and
          a reserved service elevator before you can move in. If approval lands
          after your furniture arrives, storage-in-transit bridges the gap.
        </li>
        <li>
          <strong>Expect less room than a house.</strong> Many condos have little
          or no garage space. A small climate-controlled unit nearby holds
          seasonal items, extra furniture and documents without crowding the
          condo.
        </li>
        <li>
          <strong>Coming from up north?</strong> Snowbirds who keep a home
          elsewhere often store furnishings between seasons. Our{" "}
          <Link
            to="/blog/$slug/"
            params={{ slug: "snowbird-moving-florida-guide" }}
            className="text-brand underline"
          >
            snowbird moving guide
          </Link>{" "}
          covers seasonal storage timing.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What Are the Best Storage Options for People Moving into New Apartments?
      </h2>
      <p className="mt-3 text-ink">
        Apartment moves have their own timing traps: a lease that starts a week
        after your old one ends, a unit that is not ready on time, or a smaller
        floor plan than you expected.
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>
          A <strong>5x10 climate-controlled unit</strong> typically fits the
          contents of a studio or one-bedroom, as an estimate. Ask the facility to
          confirm sizing for your furniture.
        </li>
        <li>
          Ask whether the apartment community offers storage lockers, and whether
          those lockers are inside the conditioned building or in an outdoor
          structure.
        </li>
        <li>
          If you are hiring movers, ask about storage-in-transit so one crew
          handles the whole chain. Our{" "}
          <Link to="/apartment-movers/" className="text-brand underline">
            Florida apartment and condo movers
          </Link>{" "}
          page covers building COIs, elevators and stair carries.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How Should You Store Belongings During Hurricane Season?
      </h2>
      <p className="mt-3 text-ink">
        Atlantic hurricane season runs June 1 to November 30. If your items will
        be in storage during those months:
      </p>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>Ask whether the building has backup power for its climate system after an outage.</li>
        <li>Choose an interior or upper-level unit over a ground-floor drive-up unit when you can.</li>
        <li>Keep everything off the floor on pallets or shelving, and use sealed plastic bins instead of cardboard.</li>
        <li>Check what your homeowners or renters policy covers for items stored off-site, and whether the facility offers its own protection plan.</li>
        <li>Photograph and inventory what you store, and keep that list somewhere other than the unit.</li>
        <li>Move irreplaceable documents and photos to a safe place you control.</li>
      </ul>
      <p className="mt-3 text-ink">
        Track storms through the{" "}
        <a href="https://www.nhc.noaa.gov/" rel="noopener" className="text-brand underline">
          National Hurricane Center
        </a>
        , and read our guide to{" "}
        <Link
          to="/blog/$slug/"
          params={{ slug: "hurricane-season-moving-florida" }}
          className="text-brand underline"
        >
          moving during Florida hurricane season
        </Link>{" "}
        if your move date falls inside it.
      </p>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        What Should You Ask a Storage Facility Before You Sign?
      </h2>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>Is the unit climate-controlled, and does that include humidity control or only air-conditioning?</li>
        <li>Is the climate system running 24 hours a day, year-round?</li>
        <li>Is the unit inside the building, and on which floor?</li>
        <li>Is there backup power if the electricity goes out?</li>
        <li>How is pest control handled?</li>
        <li>What are the access hours, and what security is in place (gated entry, cameras, on-site staff)?</li>
        <li>Is protection or insurance required, and what does it cover?</li>
        <li>What is the minimum term, and how much notice do you need to move out?</li>
        <li>Is the move-in rate a promotion, and what does the rate become after it ends?</li>
      </ul>

      <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
        How Do You Pack Items for Florida Storage?
      </h2>
      <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
        <li>Make sure everything is clean and completely dry before it goes in.</li>
        <li>Use breathable furniture covers or cotton sheets, not plastic wrap pressed tight against wood or upholstery.</li>
        <li>Store mattresses in breathable covers designed for storage, standing flat or on their side as the manufacturer recommends.</li>
        <li>Leave a small gap between furniture and the walls so air can move.</li>
        <li>
          Have fragile items packed properly. Our{" "}
          <Link to="/packing-services/" className="text-brand underline">
            professional packing services
          </Link>{" "}
          page covers what crews pack and how it is quoted.
        </li>
      </ul>
      <p className="mt-8 text-ink">
        Need storage as part of a move? Request quotes and we will match you with
        up to 4 independent, licensed movers in our network that offer
        storage-in-transit and climate-controlled options.
      </p>
    </div>
  );
}

const article: BlogArticleModule = {
  meta: {
    slug: "climate-controlled-storage-florida",
    title: "Climate-Controlled Storage in Florida: Do You Need It?",
    excerpt:
      "Florida humidity is hard on stored furniture, electronics and documents. When you need climate-controlled storage, what it costs and the best options for condos and apartments.",
    category: "Moving Tips",
    date: "2026-10-27",
    dateLabel: "October 27, 2026",
    image: "/__l5e/assets-v1/2563bd2d-da1d-4f70-8d6e-d4c3497a0286/professional-movers-vs-diy-truck-florida.jpg",
    imageAlt: "Florida couple in their driveway next to a rental moving truck and a professional moving van",
    metaTitle: "Climate-Controlled Storage in Florida: Do You Need It?",
    metaDescription:
      "Do you need climate-controlled storage in Florida? What humidity does to stored items, which belongings need it, typical costs and tips for condo newcomers.",
  },
  Body,
  faqs: [
    {
      q: "Is climate-controlled storage worth it in Florida?",
      a: "For most belongings stored more than a few days, yes. It typically costs $20-$50 more per month than a standard unit, as an estimate, and protects wood, electronics, documents and fabrics from heat and humidity.",
    },
    {
      q: "What is the difference between climate-controlled and temperature-controlled storage?",
      a: "Some facilities use the terms interchangeably. Others use temperature-controlled for units that are air-conditioned but not dehumidified, so ask how the facility controls humidity.",
    },
    {
      q: "What should never go in a non-climate-controlled unit in Florida?",
      a: "Wood furniture, pianos, electronics, documents, photos, mattresses, upholstery, leather and artwork. When in doubt, choose climate control for anything you want to keep.",
    },
    {
      q: "Can my mover store my things while I wait for my condo approval?",
      a: "Many full-service movers offer storage-in-transit, typically $150-$400 per month plus redelivery as an estimate. Ask whether their warehouse is climate-controlled.",
    },
    {
      q: "Are portable storage containers climate-controlled?",
      a: "A container parked outside is not. Some companies store containers in conditioned facilities, so ask where the container is kept and how humidity is managed.",
    },
  ],
  silo: ["hurricane-season-moving-florida", "snowbird-moving-florida-guide"],
  next: {
    service: { to: "/storage-solutions/", label: "compare moving and storage options in Florida" },
    city: { to: "/movers-in-miami/", label: "compare Miami movers with storage" },
  },
};

export default article;
