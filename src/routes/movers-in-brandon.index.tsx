import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { MoversCityPage, moversCitySchema } from "@/components/site/MoversCityPage";
import { ProseSection, CardGrid, SubBlock } from "@/components/site/ContentSections";

const PATH = "/movers-in-brandon/";

const FAQS = [
  {
    q: "How much do movers cost in Brandon, FL?",
    a: "A two-mover crew with a truck typically runs $95-$150 per hour. Typical estimates are $400-$700 for a studio or one-bedroom, $650-$1,100 for a two-bedroom and $900-$1,600 for a three-bedroom; only a written quote from the mover is binding.",
  },
  {
    q: "Is a move from Brandon to Tampa billed as a local move?",
    a: "Yes. Brandon sits just east of Tampa across I-75, so a move to South Tampa, Westshore or downtown is an hourly local job. What changes the total is the drive: the Selmon Expressway, I-4 or SR-60 at rush hour all add billable time.",
  },
  {
    q: "Do Brandon apartment complexes require a certificate of insurance?",
    a: "Many of the larger communities along SR-60, Lumsden Road and Providence Road ask for a certificate of insurance and a scheduled move time before the truck parks. Ask the leasing office for its rules and forward them to each mover while you compare quotes.",
  },
  {
    q: "Do Brandon movers also cover Valrico, Seffner and Dover?",
    a: "Yes. Crews in our network work all of east Hillsborough, including Valrico, Seffner, Dover, Lithia and the Bloomingdale area toward Riverview. Rural lots in Dover and parts of Seffner can need a smaller shuttle vehicle, so mention a long or unpaved driveway.",
  },
  {
    q: "How far ahead should I book movers in Brandon?",
    a: "One to two weeks is often enough for a mid-month weekday. For month-end lease turnovers, summer weekends or a third-floor walk-up that needs a larger crew, book three to four weeks out.",
  },
  {
    q: "Can I hire Brandon movers for only a few items?",
    a: "Yes. Single-item and partial-load jobs are billed hourly with a minimum that varies by company. Ask each mover for its minimum in writing before you book.",
  },
  {
    q: "What is the best time of day to move in Brandon?",
    a: "Start between 7 and 8 a.m. SR-60 and the I-75 interchange slow down in the afternoon commute, and summer storms usually build after lunch, so an early start protects both the schedule and your hourly bill.",
  },
];

export const Route = createFileRoute("/movers-in-brandon/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Movers in Brandon FL | Compare Licensed Moving Companies",
      description:
        "Movers in Brandon FL charge $95-$150 an hour, with $650-$1,100 typical for a two-bedroom. Compare licensed east Hillsborough crews and get free written quotes.",
      faqs: FAQS,
      noAlternates: true,
    });
    return { ...base, scripts: [...base.scripts, ...moversCitySchema("Brandon", PATH)] };
  },
  component: () => (
    <MoversCityPage
      city="Brandon"
      eyebrow="Licensed East Hillsborough Movers"
      opening={
        <>
          Movers in Brandon, FL charge $95-$150 per hour for a two-mover crew with a truck —
          typically $650-$1,100 for a two-bedroom and $900-$1,600 for a three-bedroom, as estimates
          rather than fixed prices. Compare up to 4 licensed Brandon FL movers covering Valrico,
          Seffner, Dover and the Bloomingdale area with one free request.
        </>
      }
      challenges={[
        {
          t: "SR-60 is the bottleneck, not the mileage",
          d: "Almost every Brandon move touches State Road 60 at some point. Between Kings Avenue and the I-75 interchange, the corridor is lined with shopping centers and traffic signals, and the afternoon commute can double the drive time between two addresses only a few miles apart. Crews quote the time they expect to spend, so an early start is the cheapest choice.",
        },
        {
          t: "Three highways, three different drives",
          d: "Brandon connects to Tampa three ways: I-75 to the west, I-4 along the Seffner side to the north, and the Selmon Expressway for downtown and South Tampa. Each route has its own peak hours. Tell the mover both addresses up front so the quote reflects the route the crew will actually use.",
        },
        {
          t: "Garden-style apartment complexes",
          d: "Brandon has a deep stock of large rental communities, many built as two- and three-story walk-up buildings with breezeway stairs. A third-floor unit without an elevator usually needs a third mover, and the parking lot may be the only place the truck can stand. Ask for the building number and nearest parking when you request quotes.",
        },
        {
          t: "Older subdivisions next to newer gated communities",
          d: "Neighborhoods closer to SR-60 tend to be older single-story homes with mature trees and shorter driveways, while Valrico, Lithia and FishHawk lean toward newer two-story homes with HOA move rules. One crew size does not fit both, which is why a written quote tied to your home matters more than a flat rate.",
        },
        {
          t: "Rural lots in Dover and Seffner",
          d: "East toward Dover and north around Seffner, properties get larger, driveways get longer and some are sand or gravel. A 26-foot truck may not make the turn, so the crew stages at the road and shuttles. Photos of the driveway entrance save a surprise on move day.",
        },
        {
          t: "Month-end lease turnover",
          d: "With so many renters, the last weekend of the month is the busiest window in east Hillsborough. Moving on a Tuesday or Wednesday mid-month usually gives you more choice of crews and start times than a Saturday on the 30th.",
        },
      ]}
      areas={[
        "Brandon",
        "Valrico",
        "Seffner",
        "Dover",
        "Bloomingdale",
        "Lithia",
        "FishHawk",
        "Mango",
      ]}
      areasIntro={
        <>
          Matched crews work all of east Hillsborough County — central Brandon along SR-60, Valrico
          and Lithia to the south-east, Seffner and Mango along I-4, Dover toward Plant City, and
          the Bloomingdale area where Brandon meets Riverview.
        </>
      }
      extra={
        <>
          <ProseSection title="Moving In or Out of a Brandon Apartment" bg="bg-surface-alt">
            <p>
              Apartment moves are a large share of what local crews do in Brandon. Most complexes
              publish move rules in the lease addendum: allowed hours, where the truck can park, and
              whether the mover must file a certificate of insurance with the office. Get that list
              before you request quotes, because it decides crew size more than your inventory does.
            </p>
            <CardGrid>
              <SubBlock title="Before you book">
                <p>
                  Confirm the building and unit number, the floor, and whether any elevator serves
                  your stairwell. Ask the office how far the truck will be from your door. Our{" "}
                  <Link to="/apartment-movers/">apartment and condo moving requirements guide</Link>{" "}
                  lists the paperwork Florida complexes commonly ask for.
                </p>
              </SubBlock>
              <SubBlock title="Only moving a couple of pieces?">
                <p>
                  A sofa from a store on SR-60 or one bedroom set into a new unit does not need a
                  full-house crew. See how{" "}
                  <Link to={"/furniture-movers/" as "/"}>
                    furniture movers price single items and partial loads
                  </Link>{" "}
                  before you ask for a household quote.
                </p>
              </SubBlock>
            </CardGrid>
          </ProseSection>
          <ProseSection title="Brandon Moves to Tampa, Riverview and Beyond">
            <p>
              Brandon is a commuter market, so a large share of local moves run west into the city
              or south into the newer subdivisions. If your origin is on the Tampa side, compare{" "}
              <Link to="/movers-in-tampa/">Tampa movers and bay-area access rules</Link> for
              downtown towers and South Tampa bungalows. Heading down US-301 or Bloomingdale Avenue
              instead? Our page on{" "}
              <Link to="/movers-in-riverview/">Riverview and South Hillsborough movers</Link> covers
              builder closings and HOA gates in that market.
            </p>
            <p>
              Every hourly figure on this page follows the same structure in our{" "}
              <Link to="/local-movers-in-florida/">Florida local moving rate guide</Link>, including
              crew sizes and the access factors that push a quote up. Businesses along the SR-60
              corridor relocating an office, clinic or storefront should start with{" "}
              <Link to="/commercial-movers/">after-hours commercial moving in Florida</Link>, so the
              work happens outside business hours.
            </p>
          </ProseSection>
        </>
      }
      related={[
        {
          to: "/movers-in-tampa/",
          label: "Movers in Tampa",
          d: "Bridges, I-275 and I-4 traffic, and downtown building rules.",
        },
        {
          to: "/movers-in-riverview/",
          label: "Movers in Riverview",
          d: "South Hillsborough subdivisions down US-301 from Brandon.",
        },
        {
          to: "/apartment-movers/",
          label: "Apartment moving",
          d: "Walk-ups, certificates of insurance and loading windows.",
        },
        {
          to: "/local-movers-in-florida/",
          label: "Florida hourly moving rates",
          d: "The statewide rate card behind every local quote.",
        },
        {
          to: "/storage-solutions/",
          label: "Storage between leases",
          d: "Storage-in-transit when your move-out and move-in dates do not match.",
        },
      ]}
      faqs={FAQS}
      ctaTitle="Get Your Brandon Moving Quotes"
    />
  ),
});
