import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { MoversCityPage, moversCitySchema } from "@/components/site/MoversCityPage";
import { ProseSection, CardGrid, SubBlock } from "@/components/site/ContentSections";

const PATH = "/movers-in-apollo-beach/";

const FAQS = [
  {
    q: "How much do movers cost in Apollo Beach, FL?",
    a: "Apollo Beach movers follow the Florida hourly rate of $95-$150 for a two-mover crew with a truck. Typical estimates are $650-$1,100 for a two-bedroom and $900-$1,600 for a three-bedroom; elevated homes and long carries on canal lots push totals higher.",
  },
  {
    q: "Do residential movers in Apollo Beach move patio furniture, kayaks and dock gear?",
    a: "Most will load lanai and patio furniture, kayaks, paddleboards and loose dock equipment like any other item, as long as it is listed in the quote. Boats, boat lifts and anything bolted to a dock or seawall are outside a household move and need a marine specialist.",
  },
  {
    q: "Should I avoid moving to Apollo Beach during hurricane season?",
    a: "You do not have to avoid it, but plan for it. The Atlantic hurricane season runs June 1 through November 30, so ask each mover how it handles a storm reschedule and keep a backup date in mind if you are moving in late summer or early fall.",
  },
  {
    q: "Do Apollo Beach local movers also cover Ruskin, Sun City Center and Gibsonton?",
    a: "Yes. Crews in our network work all of South Shore Hillsborough, including Ruskin, Sun City Center, Wimauma, Gibsonton and Riverview. Moves between these towns are short local jobs billed by the hour.",
  },
  {
    q: "What do I need to know about moving into Sun City Center?",
    a: "Sun City Center is a 55+ area with community associations, golf-cart traffic on local streets and many villa and condo homes. Ask your association about move rules, and if you are downsizing from a larger house, book sorting and packing help along with the crew.",
  },
  {
    q: "Are there commercial movers in Apollo Beach?",
    a: "Yes. The same matching request works for small offices, medical suites and retail spaces along US-41 and Big Bend Road. Commercial moves are usually scheduled after hours or on weekends so the business stays open.",
  },
  {
    q: "Can I store my belongings while my Apollo Beach home is being repaired or built?",
    a: "Yes. Ask for storage-in-transit or a climate-controlled unit when you request quotes. Climate control matters on the bay, where heat and humidity are hard on wood furniture, upholstery and electronics.",
  },
];

export const Route = createFileRoute("/movers-in-apollo-beach/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Movers in Apollo Beach FL | Local & Residential Movers",
      description:
        "Movers in Apollo Beach FL charge $95-$150 an hour. Compare licensed residential and commercial crews for canal homes, MiraBay, Waterset and Sun City Center, free.",
      faqs: FAQS,
      noAlternates: true,
    });
    return { ...base, scripts: [...base.scripts, ...moversCitySchema("Apollo Beach", PATH)] };
  },
  component: () => (
    <MoversCityPage
      city="Apollo Beach"
      eyebrow="Licensed South Shore Movers"
      opening={
        <>
          Movers in Apollo Beach, FL charge $95-$150 per hour for a two-mover crew with a truck —
          typically $650-$1,100 for a two-bedroom and $900-$1,600 for a three-bedroom, as estimates
          rather than fixed prices. Compare up to 4 licensed residential and local movers for
          waterfront homes, MiraBay, Waterset, Ruskin and Sun City Center with one free request.
        </>
      }
      challenges={[
        {
          t: "Canal streets and waterfront lots",
          d: "The original Apollo Beach neighborhoods were built around a network of canals, so many streets are narrow, end in cul-de-sacs and leave little room for a large truck to turn. Homes face the street with the water behind, and the garage is often the only clear path in. Mention a tight street or a short driveway so the crew brings the right size truck.",
        },
        {
          t: "Elevated and two-story waterfront homes",
          d: "Some newer and rebuilt homes on the water sit above a ground-level garage, which turns every piece of furniture into a stair carry. Exterior stairs, an elevator that cannot take a sofa and long carries from the street all add time. Describe the stairs honestly when you request quotes.",
        },
        {
          t: "Hurricane season and storm timing",
          d: (
            <>
              Apollo Beach is low-lying bayfront, and the Atlantic hurricane season runs June 1
              through November 30. A named storm in the forecast can push a move by days. Ask each
              mover for its rescheduling policy in writing, and check the{" "}
              <a
                href="https://www.nhc.noaa.gov/"
                rel="noopener"
                className="font-semibold text-brand hover:underline"
              >
                National Hurricane Center
              </a>{" "}
              before locking a late-summer date.
            </>
          ),
        },
        {
          t: "Master-planned communities with HOA rules",
          d: "MiraBay and Waterset both have homeowner associations, and Waterset has been adding new homes in phases, so builder closings and HOA move rules shape the schedule. Ask the association about allowed hours, truck size and parking, and confirm your closing date before you book the crew.",
        },
        {
          t: "55+ downsizing in Sun City Center",
          d: "Just east across I-75, Sun City Center and Kings Point are large 55+ communities. Many moves here are a family home condensing into a villa or condo, which means sorting, donating and storing as much as moving. That work usually decides the bill more than the short drive does.",
        },
        {
          t: "US-41, Big Bend Road and I-75 traffic",
          d: "Apollo Beach connects to the rest of Hillsborough through US-41 and Big Bend Road to I-75. Both get crowded at commute time and around the I-75 interchange, so an early start keeps a short local move from turning into a long billed drive.",
        },
      ]}
      areas={[
        "Apollo Beach",
        "MiraBay",
        "Waterset",
        "Covington Park",
        "Ruskin",
        "Sun City Center",
        "Kings Point",
        "Gibsonton",
        "Wimauma",
      ]}
      areasIntro={
        <>
          Matched crews cover Apollo Beach and the rest of South Shore Hillsborough — the canal
          neighborhoods along the bay, MiraBay, Waterset and Covington Park, plus Ruskin and Wimauma
          to the south and east, Sun City Center and Kings Point across I-75, and Gibsonton to the
          north on the way to Riverview.
        </>
      }
      extra={
        <>
          <ProseSection
            title="Waterfront, Storm and Storage Planning for Apollo Beach Moves"
            bg="bg-surface-alt"
          >
            <p>
              A move on the bay has a few extra moving parts. Planning them before you choose a
              moving company in Apollo Beach keeps the hourly bill close to the estimate.
            </p>
            <CardGrid>
              <SubBlock title="List the outdoor items">
                <p>
                  Lanai furniture, grills, kayaks, paddleboards, fishing gear and dock boxes add up
                  fast. Include them in the inventory so the crew brings enough truck space. Boats
                  and anything fixed to the dock are a separate marine job.
                </p>
              </SubBlock>
              <SubBlock title="Build in a storm buffer">
                <p>
                  For moves between August and October, pick a backup date and ask how each mover
                  reschedules. Our{" "}
                  <Link to="/blog/$slug/" params={{ slug: "hurricane-season-moving-florida" }}>
                    guide to moving during Florida hurricane season
                  </Link>{" "}
                  covers timing and what to pack first.
                </p>
              </SubBlock>
              <SubBlock title="Store between homes">
                <p>
                  Repairs, a delayed closing or a rental gap are common reasons to hold furniture
                  for a few weeks. Compare{" "}
                  <Link to="/storage-solutions/">
                    climate-controlled storage and storage-in-transit
                  </Link>{" "}
                  before you choose, because humidity on the bay is hard on wood and fabric.
                </p>
              </SubBlock>
              <SubBlock title="Helping a parent downsize">
                <p>
                  For a move into Sun City Center or Kings Point, our{" "}
                  <Link to="/senior-moving-services/">senior moving and downsizing services</Link>{" "}
                  page explains how sorting, packing and set-up are priced together.
                </p>
              </SubBlock>
            </CardGrid>
          </ProseSection>
          <ProseSection title="Apollo Beach Moves to Riverview, Tampa and Commercial Spaces">
            <p>
              Many Apollo Beach households are moving a short distance up US-301 or I-75. For the
              subdivisions just north, compare{" "}
              <Link to="/movers-in-riverview/">
                Riverview movers and South Hillsborough HOA rules
              </Link>
              , and check our{" "}
              <Link to="/local-movers-in-florida/">Florida local moving rate guide</Link> for the
              hourly math behind each quote.
            </p>
            <p>
              Businesses also move here. Small offices, clinics and shops along US-41 and Big Bend
              Road can use the same request; read how{" "}
              <Link to="/commercial-movers/">commercial movers plan after-hours relocations</Link>{" "}
              so the business does not lose a working day.
            </p>
          </ProseSection>
        </>
      }
      related={[
        {
          to: "/movers-in-riverview/",
          label: "Movers in Riverview",
          d: "The South Hillsborough market just north of Apollo Beach.",
        },
        {
          to: "/senior-moving-services/",
          label: "Senior moving services",
          d: "Downsizing help for Sun City Center and Kings Point moves.",
        },
        {
          to: "/storage-solutions/",
          label: "Storage solutions",
          d: "Climate-controlled storage and storage-in-transit near the bay.",
        },
        {
          to: "/commercial-movers/",
          label: "Commercial moving",
          d: "Offices and shops along US-41 and Big Bend Road.",
        },
        {
          to: "/movers-in-sarasota/",
          label: "Movers in Sarasota",
          d: "South down I-75: Bradenton, Lakewood Ranch and Sarasota.",
        },
      ]}
      faqs={FAQS}
      ctaTitle="Get Your Apollo Beach Moving Quotes"
    />
  ),
});
