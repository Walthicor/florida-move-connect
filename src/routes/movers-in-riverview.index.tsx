import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { MoversCityPage, moversCitySchema } from "@/components/site/MoversCityPage";
import { ProseSection } from "@/components/site/ContentSections";

const PATH = "/movers-in-riverview/";

const FAQS = [
  {
    q: "How much do movers cost in Riverview, FL?",
    a: "Plan on $95-$150 per hour for a two-mover crew with a truck, which is the same hourly structure used across Florida. In practice most Riverview households land at $650-$1,100 for a two-bedroom and $900-$1,600 for a three-bedroom. These are typical estimates only — the written quote depends on home size, access and date.",
  },
  {
    q: "Why do Riverview quotes often come in higher than the hourly rate suggests?",
    a: "Much of Riverview is newer two-story construction with a staircase, a long driveway or a garage-side entry, and many subdivisions sit several miles off US-301 or I-75. Crew travel time inside South Hillsborough and stair carries are the two factors that most often add billable hours.",
  },
  {
    q: "Do Riverview HOAs require paperwork before a moving truck arrives?",
    a: "Many of the planned communities around Riverview and Apollo Beach set truck-size limits, ask for the moving date in advance and restrict work to daytime hours. Ask your association for its move-in rules before booking, and pass any certificate-of-insurance requirement to each mover while you are still comparing quotes.",
  },
  {
    q: "Is a move from Riverview to Tampa or Brandon a local move?",
    a: "Yes. Downtown Tampa is roughly 15 miles north and Brandon is a short hop up US-301, so both stay inside the under-50-mile local band and are billed hourly rather than by weight. Only moves crossing that distance threshold or leaving Florida switch to inventory or weight-based pricing.",
  },
  {
    q: "How do I find local movers near me in Riverview?",
    a: "Look for moving companies that already work South Hillsborough, because they know the HOA gate rules, US-301 traffic and builder closing delays. Ask each one for its FDACS registration, a written estimate and its rule for date changes. One form here sends your request to up to four licensed Riverview movers at once.",
  },
  {
    q: "When is the cheapest time to move in Riverview?",
    a: "Mid-month, midweek, outside the summer peak. Closings on new-construction homes cluster at month-end, and June through September brings both the heaviest demand and afternoon storms that slow loading. Booking three to four weeks out gives you a real choice of crews.",
  },
  {
    q: "Can movers handle a same-day closing gap in Riverview?",
    a: "Ask about storage-in-transit when you request quotes. If your Riverview closing and your new move-in date do not line up, the load can stay on the truck or in a warehouse vault instead of being handled twice, which is cheaper than paying a crew to wait.",
  },
];

export const Route = createFileRoute("/movers-in-riverview/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Movers in Riverview FL | Local Rates & Free Quotes",
      description: "Movers in Riverview charge $95-$150 an hour, with $650-$1,100 typical for a two-bedroom. Compare licensed South Hillsborough crews and get free written quotes.",
      faqs: FAQS,
    });
    return { ...base, scripts: [...base.scripts, ...moversCitySchema("Riverview", PATH)] };
  },
  component: () => (
    <MoversCityPage
      city="Riverview"
      eyebrow="Licensed South Hillsborough Movers"
      opening={
        <>
          Movers in Riverview charge $95-$150 per hour for a two-mover crew with a truck — typically
          $650-$1,100 for a two-bedroom and $900-$1,600 for a three-bedroom home, as estimates
          rather than fixed prices. Compare up to 4 licensed, insured local moving companies in
          Riverview, FL, with crews covering Apollo Beach, Gibsonton and the rest of South
          Hillsborough free of charge.
        </>
      }
      challenges={[
        {
          t: "New-construction subdivisions and builder closings",
          d: "Riverview grew through master-planned communities, so a large share of local moves are first move-ins on a builder's closing date. Those dates slip, and a crew booked for a Friday that becomes the following Tuesday has to be rescheduled. Confirm your closing before locking the date, and ask each mover what a date change costs.",
        },
        {
          t: "HOA and gate rules across South Hillsborough",
          d: "Planned communities here commonly limit truck size, restrict work to daylight hours and want the move date registered with the association or gatehouse. A 26-foot truck that cannot enter means shuttling in a smaller vehicle — billable time nobody quoted for.",
        },
        {
          t: "US-301 and I-75 access, not straight-line distance",
          d: "Two Riverview addresses five miles apart can be twenty minutes apart at 5 p.m. on US-301 or Big Bend Road. Crews price the drive they will actually make, so a move that crosses the I-75 interchange during rush hour costs more billable time than the same job at 9 a.m.",
        },
        {
          t: "Two-story homes and garage-side entries",
          d: "The dominant housing stock is two-story with the staircase near the front door and a long driveway. Stair carries slow every heavy item, and a truck that cannot reach the garage adds carry distance. Describe the stairs, driveway length and any gate before you accept a quote.",
        },
      ]}
      areas={[
        "Panther Trace",
        "Boyette",
        "Rivercrest",
        "Summerfield",
        "Bloomingdale",
        "Apollo Beach",
        "Gibsonton",
      ]}
      areasIntro={
        <>
          Matched crews cover Riverview and the surrounding South Hillsborough communities — from
          Panther Trace, Boyette and Rivercrest to Summerfield and Bloomingdale, plus Apollo Beach
          and Gibsonton along the bay.
        </>
      }
      extra={
        <ProseSection title="Commuting, Home Sizes and Nearby Markets" bg="bg-surface-alt">
          <p>
            Riverview is a commuter town first. Most households moving here are trading a Tampa
            apartment for a three- or four-bedroom two-story home, which is why the typical Riverview
            job needs a larger crew than the same family's last move. If you are coming from the city
            side, compare <Link to="/movers-in-tampa/">Tampa moving companies and bay-area access rules</Link>{" "}
            for the origin end of the move, and read our{" "}
            <Link to="/local-movers-in-florida/">Florida local moving rate guide</Link> for the hourly
            math behind every quote.
          </p>
          <p>
            Leaving the state instead of the county? Compare{" "}
            <Link to="/long-distance-movers/">long-distance movers with written delivery windows</Link>.
            If the builder's closing date and your move-out date do not match,{" "}
            <Link to="/storage-solutions/">storage-in-transit in Florida</Link> bridges the gap, and{" "}
            <Link to="/apartment-movers/">apartment and condo move-in requirements</Link> cover the
            elevator and COI side if you are leaving a Brandon or Tampa complex. Households with an
            instrument should start with{" "}
            <Link to="/piano-movers-tampa/">Tampa-area piano moving crews</Link>. Prefer to compare
            quotes in Spanish? Read the{" "}
            <Link to={"/es/movers-in-riverview/" as "/"}>Spanish version of our Riverview movers guide</Link>.
          </p>
        </ProseSection>
      }
      related={[
        { to: "/local-movers-in-florida/", label: "Florida hourly moving rates", d: "The statewide rate card and everything that pushes an hourly quote up." },
        { to: "/movers-in-tampa/", label: "Movers in Tampa", d: "The origin market for most Riverview move-ins, with bridge and traffic notes." },
        { to: "/movers-in-sarasota/", label: "Movers in Sarasota", d: "South down I-75: Sarasota, Bradenton and Lakewood Ranch pricing." },
        { to: "/storage-solutions/", label: "Storage between closings", d: "Storage-in-transit for builder delays and mismatched closing dates." },
        { to: "/commercial-movers/", label: "Commercial moving", d: "Office relocations along the Brandon and Riverview business corridor." },
      ]}
      faqs={FAQS}
      ctaTitle="Get Your Riverview Moving Cost"
    />
  ),
});
