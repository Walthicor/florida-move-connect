import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { MoversCityPage, moversCitySchema } from "@/components/site/MoversCityPage";
import { ProseSection, CheckList } from "@/components/site/ContentSections";

const PATH = "/movers-in-wesley-chapel/";

const FAQS = [
  {
    q: "How much do movers cost in Wesley Chapel?",
    a: "Typical estimates follow the Florida hourly rate of $95-$150 for a two-mover crew with a truck: about $650-$1,100 for a two-bedroom and $900-$1,600 for a three-bedroom. Larger two-story homes and long drives from the crew's base push totals toward the top of the range.",
  },
  {
    q: "Do Wesley Chapel movers charge for travel time from Tampa?",
    a: "Some movers start the clock when the crew leaves its yard, others charge a flat travel fee and some include travel inside the hourly rate. Ask each company how travel is billed and get the answer in the written estimate.",
  },
  {
    q: "Do gated communities in Wesley Chapel need notice before movers arrive?",
    a: "Many planned communities here use a gatehouse or an access system and want the mover's company name and arrival time in advance. Register the crew with your HOA or gate staff before move day so the truck is not held at the entrance while the hourly clock runs.",
  },
  {
    q: "Is a move from Wesley Chapel to Tampa a local move?",
    a: "Yes. Downtown Tampa and New Tampa are both inside the local band, so the move is billed hourly. The route matters more than the miles: I-75, I-275 and Bruce B. Downs Boulevard all slow down sharply at rush hour.",
  },
  {
    q: "Do movers in Wesley Chapel also cover Lutz, Land O' Lakes, Zephyrhills and Dade City?",
    a: "Yes. Crews in our network work across central and east Pasco County as well as Lutz on the Hillsborough line. Rural properties around Dade City and San Antonio can need a smaller shuttle truck, so describe the driveway when you ask for quotes.",
  },
  {
    q: "What if my new-construction closing in Wesley Chapel gets pushed back?",
    a: "Ask about storage-in-transit when you compare quotes. The load can stay on the truck or in a warehouse until the builder hands over the keys, which usually costs less than unloading into a unit and moving everything twice.",
  },
  {
    q: "When is the best time to book Wesley Chapel movers?",
    a: "Three to four weeks ahead for a month-end date or a summer weekend, and one to two weeks for a mid-month weekday. A 7 or 8 a.m. start avoids the worst of the SR-56 and I-75 traffic and the afternoon storms.",
  },
];

export const Route = createFileRoute("/movers-in-wesley-chapel/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Movers in Wesley Chapel FL | Pasco County Moving Quotes",
      description:
        "Movers in Wesley Chapel charge $95-$150 an hour, with $900-$1,600 typical for a three-bedroom. Compare licensed Pasco County crews for gated and new homes, free.",
      faqs: FAQS,
      noAlternates: true,
    });
    return { ...base, scripts: [...base.scripts, ...moversCitySchema("Wesley Chapel", PATH)] };
  },
  component: () => (
    <MoversCityPage
      city="Wesley Chapel"
      eyebrow="Licensed Pasco County Movers"
      opening={
        <>
          Movers in Wesley Chapel charge $95-$150 per hour for a two-mover crew with a truck —
          typically $650-$1,100 for a two-bedroom and $900-$1,600 for a three-bedroom, as estimates
          rather than fixed prices. Compare up to 4 licensed movers serving Wesley Chapel, Lutz,
          Land O' Lakes, Zephyrhills and Dade City with one free quote request.
        </>
      }
      challenges={[
        {
          t: "Gatehouses and community access rules",
          d: "Wesley Chapel grew through large planned communities, many with gated villages, guardhouses or resident-only access systems. A truck that arrives unannounced can sit at the gate while staff call the homeowner, with the hourly clock running.",
        },
        {
          t: "Moving into a home that was just built",
          d: "New construction is still going up around Epperson, Wiregrass Ranch and other communities east of I-75. That means fresh paint and new floors to protect, contractor trucks parked in the street, and sometimes unfinished sidewalks or sod between the truck and the front door. Ask the crew to bring floor runners and door-jamb protection, and walk the path from the curb before move day.",
        },
        {
          t: "I-75, I-275 and SR-56 at rush hour",
          d: "I-75 and I-275 come together right by the SR-56 interchange, and the stretch around the outlet mall and the Wiregrass shops backs up at peak hours and on weekends. Bruce B. Downs Boulevard toward New Tampa and SR-54 toward Land O' Lakes are no better at 5 p.m. On an hourly job, the time stuck in that traffic is billed time.",
        },
        {
          t: "Distance from the crew's base",
          d: "Many moving companies that serve Wesley Chapel are based closer to Tampa. The drive up I-75 may be billed by the hour, charged as a flat travel fee or absorbed into the rate, so compare totals rather than hourly rates alone.",
        },
        {
          t: "Bigger homes, bigger crews",
          d: "Much of the housing here is newer two-story construction with four bedrooms or more, a bonus room upstairs and a two- or three-car garage full of boxes. Those homes usually need a crew of four and a larger truck, and garage contents are the item people most often forget to mention in a quote request.",
        },
        {
          t: "Rural east Pasco and smaller towns",
          d: "Dade City and the countryside around it have rolling hills, long private driveways and properties with barns or workshops. Zephyrhills has many manufactured-home and seasonal communities with tight streets. Both can require a smaller truck or a shuttle, so share photos of the access when you request pricing.",
        },
      ]}
      areas={[
        "Wesley Chapel",
        "Wiregrass Ranch",
        "Epperson",
        "Seven Oaks",
        "Meadow Pointe",
        "Lutz",
        "Land O' Lakes",
        "Zephyrhills",
        "Dade City",
      ]}
      areasIntro={
        <>
          Matched crews cover Wesley Chapel and the rest of central and east Pasco County — from
          Wiregrass Ranch, Epperson, Seven Oaks and Meadow Pointe off SR-54, SR-56 and Overpass
          Road, to Lutz and Land O' Lakes on the US-41 side, and east to Zephyrhills and Dade City
          along US-301.
        </>
      }
      extra={
        <>
          <ProseSection
            title="Wesley Chapel Move-In Checklist for Gated and New Communities"
            bg="bg-surface-alt"
          >
            <p>
              Most surprise charges on Wesley Chapel moves come from access, not inventory. Run
              through this list with your HOA and each mover before you accept a quote.
            </p>
            <CheckList
              items={[
                "Ask the HOA or community manager for its move rules: allowed days and hours, truck-size limits and where the truck may park.",
                "Register the moving company's name and arrival window with the gatehouse or access system.",
                "If you plan to use a portable storage container in the driveway, confirm whether the HOA requires approval and how long it may stay.",
                "Confirm your closing date with the builder or title company before locking the moving date, and ask each mover what a date change costs.",
                "Tell the mover about the garage, the bonus room and any second-floor furniture, since those decide the crew size.",
              ]}
            />
          </ProseSection>
          <ProseSection title="Moving to Wesley Chapel From Tampa or Out of State">
            <p>
              Many households move up I-75 from the city for more space. If your origin is a Tampa
              apartment or a South Tampa bungalow, compare{" "}
              <Link to="/movers-in-tampa/">
                Tampa movers and the access rules for city buildings
              </Link>{" "}
              for the pickup end, and use our{" "}
              <Link to="/local-movers-in-florida/">Florida local moving rate guide</Link> to check
              the hourly math behind each quote.
            </p>
            <p>
              Pasco County also draws a lot of buyers from other states. A move that starts outside
              Florida is priced by weight or inventory, not by the hour, so compare{" "}
              <Link to="/long-distance-movers/">
                long-distance movers with written delivery windows
              </Link>
              . When the builder's closing date and your arrival do not match,{" "}
              <Link to="/storage-solutions/">storage-in-transit in Florida</Link> holds the load
              until the keys are ready. Larger homes are also where{" "}
              <Link to="/packing-services/">professional packing for fragile rooms</Link> saves the
              most days.
            </p>
          </ProseSection>
        </>
      }
      related={[
        {
          to: "/movers-in-tampa/",
          label: "Movers in Tampa",
          d: "The origin market for many Wesley Chapel move-ins, with traffic and bridge notes.",
        },
        {
          to: "/movers-in-brandon/",
          label: "Movers in Brandon",
          d: "East Hillsborough apartments and subdivisions along SR-60.",
        },
        {
          to: "/local-movers-in-florida/",
          label: "Florida hourly moving rates",
          d: "The statewide rate card behind every local quote.",
        },
        {
          to: "/long-distance-movers/",
          label: "Long-distance moving",
          d: "Interstate moves into Pasco County priced by inventory.",
        },
        {
          to: "/storage-solutions/",
          label: "Storage between closings",
          d: "Storage-in-transit for builder delays and mismatched dates.",
        },
      ]}
      faqs={FAQS}
      ctaTitle="Get Your Wesley Chapel Moving Quotes"
    />
  ),
});
