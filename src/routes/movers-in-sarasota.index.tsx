import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { MoversCityPage, moversCitySchema } from "@/components/site/MoversCityPage";
import { ProseSection, SubBlock, CardGrid } from "@/components/site/ContentSections";

const PATH = "/movers-in-sarasota/";

const FAQS = [
  {
    q: "How much do movers cost in Sarasota, FL?",
    a: "Sarasota crews bill $95-$150 per hour for two movers and a truck. Typical estimates are $400-$700 for a studio or one-bedroom, $650-$1,100 for a two-bedroom and $900-$1,600 for a three-bedroom. Ranges vary with home size, access, stairs and the date you choose.",
  },
  {
    q: "Do downtown Sarasota and Longboat Key condos need a certificate of insurance?",
    a: "Most mid-rise and high-rise buildings along the bayfront and the barrier islands do. Associations typically want the mover's certificate of insurance on file, a reserved service elevator and a loading window in daytime hours. Request the building's rules early — some managers need one to two weeks to approve a mover.",
  },
  {
    q: "Why does season affect Sarasota moving prices?",
    a: "Seasonal residents arrive in the fall and leave in the spring, so demand for crews, elevators and storage clusters around those turnovers. Moving mid-month and midweek outside those windows usually quotes lower, though the exact difference depends on crew availability rather than a fixed discount.",
  },
  {
    q: "Is a move from Sarasota to Bradenton or Lakewood Ranch a local move?",
    a: "Yes. Bradenton is roughly 15 miles north and Lakewood Ranch sits just east off I-75, so both are inside the under-50-mile local band and are billed hourly. A move to Tampa or Fort Myers may cross that threshold and be quoted by inventory or weight instead.",
  },
  {
    q: "Can movers handle island addresses on Siesta Key or Longboat Key?",
    a: "Yes, with planning. Bridge access, narrow residential lanes, limited street parking and beach-season traffic all shape the schedule, so island jobs are usually loaded early in the day. Tell each mover the exact address and any gate or dock restriction when you request quotes.",
  },
  {
    q: "Do Sarasota movers cover Venice and North Port?",
    a: "Yes. Venice and North Port are in southern Sarasota County, and moves between them and Sarasota usually stay within the local hourly band. Expect more billable drive time on I-75 or US-41 than on an in-town move.",
  },
  {
    q: "How early should seasonal residents book Sarasota movers?",
    a: "Book three to four weeks ahead for a fall arrival or a spring departure, and earlier if your condo limits move days or elevator slots. Off-season dates are usually easier to get, but summer brings afternoon storms and hurricane season, so keep a backup date.",
  },
  {
    q: "What should I do if my Sarasota closing and move-in dates do not line up?",
    a: "Ask each mover about storage-in-transit. Your load stays on the truck or in a warehouse vault between dates instead of being unloaded and reloaded, which usually costs less than a second handling plus a short-term unit.",
  },
];

export const Route = createFileRoute("/movers-in-sarasota/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Movers in Sarasota FL | Local Rates & Free Quotes",
      description: "Movers in Sarasota FL for downtown condos, Siesta Key, Longboat Key, Lakewood Ranch and Venice. Crews bill $95-$150 an hour. Compare licensed movers free.",
      faqs: FAQS,
      noAlternates: true,
    });
    return { ...base, scripts: [...base.scripts, ...moversCitySchema("Sarasota", PATH)] };
  },
  component: () => (
    <MoversCityPage
      city="Sarasota"
      eyebrow="Licensed Sarasota & Manatee County Movers"
      opening={
        <>
          Movers in Sarasota, FL typically charge $95-$150 per hour for a two-mover crew, or an
          estimated $650-$1,100 for a two-bedroom. In Sarasota, access sets the final price: drawbridges
          to Siesta Key, condo elevator windows downtown and gated new construction in Lakewood Ranch.
          Compare up to 4 licensed movers covering Sarasota, Bradenton, Venice and North Port, free.
        </>
      }
      costIntro={
        <>
          Sarasota jobs use the statewide hourly rate card from our{" "}
          <Link to="/local-movers-in-florida/" className="font-semibold text-brand hover:underline">
            Florida local movers guide
          </Link>
          : a two-mover crew with a truck runs $95-$150 per hour. What pushes a Sarasota quote to the
          top of each range is access — island bridges, condo dock windows and winter-season demand.
        </>
      }
      challenges={[
        {
          t: "Bayfront condos and barrier-island access",
          d: "Downtown Sarasota, St. Armands, Longboat Key and Siesta Key mix mid-rise buildings with narrow island lanes. Expect a certificate of insurance on file with the association, a reserved service elevator and a fixed loading window — plus bridge and beach traffic that makes early-morning loading the norm.",
        },
        {
          t: "Seasonal-resident turnover",
          d: "A large share of local moves here are second-home turnovers rather than permanent relocations. Crews, elevator slots and storage all tighten when seasonal residents arrive in the fall and leave in the spring, so book earlier if your dates fall inside those windows.",
        },
        {
          t: "Lakewood Ranch and east-county growth",
          d: "The master-planned communities east of I-75 are newer two-story homes behind gates, which means truck-size limits, guardhouse registration and staircases in almost every quote. Confirm your community's move rules before you accept a price.",
        },
        {
          t: "Downsizing into 55+ and retirement communities",
          d: "Sarasota and Venice have deep 55+ housing stock, and many moves are a large home condensing into a villa or apartment. Those jobs split into three streams — keep, donate and store — and the sorting work usually decides the final bill more than the drive does.",
        },
      ]}
      areas={[
        "Downtown Sarasota",
        "Siesta Key",
        "Longboat Key",
        "Palmer Ranch",
        "Lakewood Ranch",
        "Bradenton",
        "Venice",
        "Osprey",
        "North Port",
        "Lido Key",
        "St. Armands",
        "Anna Maria Island",
      ]}
      areasIntro={
        <>
          Matched crews cover Sarasota and Manatee County — bayfront and downtown condos, Siesta Key,
          Lido Key and Longboat Key island addresses, Palmer Ranch and Lakewood Ranch subdivisions,
          plus Bradenton, Anna Maria Island, Osprey, Venice and North Port.
        </>
      }
      extra={
        <>
        <ProseSection
          eyebrow="Barrier islands"
          title="Moving to Siesta Key, Longboat Key or Lido Key: Bridges and Parking"
          bg="bg-surface-alt"
        >
          <p>
            Island moves are where Sarasota differs most from other Florida cities. Every address on
            the keys is reached by a bridge, island streets are narrow, and parking near the beach is
            limited and in heavy demand from winter through spring. Crews plan these jobs around the
            crossing, not the mileage.
          </p>
          <CardGrid cols={3}>
            <SubBlock title="Siesta Key">
              <p>
                The key is reached by two drawbridges, at Siesta Drive on the north end and Stickney
                Point Road on the south end. A bridge opening or beach traffic can stall a loaded truck
                while the hourly clock runs, so many crews load early in the morning.
              </p>
            </SubBlock>
            <SubBlock title="Lido Key and St. Armands">
              <p>
                Reached from downtown over the John Ringling Causeway and around St. Armands Circle,
                which is busy with shoppers and visitors. Confirm where the truck can stop before move
                day; a long carry from a legal spot adds time.
              </p>
            </SubBlock>
            <SubBlock title="Longboat Key">
              <p>
                A long, narrow key with mid-rise condos and gated communities. The south end connects
                through Lido and St. Armands; the north end connects toward Anna Maria Island. Ask the
                association about dock height, elevator booking and approved move hours.
              </p>
            </SubBlock>
          </CardGrid>
          <p>
            Before you accept a quote, tell each mover the exact island address, the building or
            community name, and whether the truck can reach the door. If a full-size truck cannot fit
            under a garage or into a guest lot, the crew may shuttle with a smaller vehicle, which
            should be in the written estimate, not added on the day.
          </p>
        </ProseSection>

        <ProseSection
          eyebrow="Downtown and east county"
          title="Downtown Sarasota Condo Towers and Lakewood Ranch New Construction"
          bg="bg-background"
        >
          <p>
            The two fastest-changing parts of the Sarasota market need opposite kinds of planning.
          </p>
          <p>
            <strong className="text-ink">Downtown condo towers:</strong> bayfront high-rises downtown
            and on Golden Gate Point run moves through a loading area and a reserved service
            elevator. Associations usually want a certificate of insurance on file, a booked time
            window and sometimes a refundable deposit. If the crew misses the window, the move can roll
            to another day. Our{" "}
            <Link to="/apartment-movers/">condo and apartment move requirements</Link> page lists what
            to ask the building manager.
          </p>
          <p>
            <strong className="text-ink">Lakewood Ranch:</strong> the master-planned community east of
            I-75 spans Manatee and Sarasota counties and keeps adding new villages. Many moves here are
            first move-ins on a builder's closing date, which can slip. Gated villages often ask for the
            move date in advance, and some limit truck size. Confirm the closing before you lock the
            moving date, and ask each mover what a date change costs.
          </p>
          <p>
            Two-story homes are common in both Lakewood Ranch and Palmer Ranch, so describe the stairs
            and the driveway length when you request quotes. Those two details move the crew size and
            the total more than the drive does.
          </p>
        </ProseSection>

        <ProseSection
          eyebrow="Coverage"
          title="Do Sarasota Movers Cover Venice, North Port and Bradenton?"
          bg="bg-surface-alt"
        >
          <p>
            Yes. Crews in our network work the whole Sarasota-Bradenton area, and most moves inside it
            are billed hourly as local moves.
          </p>
          <p>
            <strong className="text-ink">Venice:</strong> south along US-41 and I-75, with many 55+
            communities and villa-style homes. The historic downtown area sits on an island reached by
            bridges over the Intracoastal Waterway, so plan for the same crossing delays as the keys.
          </p>
          <p>
            <strong className="text-ink">North Port:</strong> the southern end of Sarasota County, with
            large single-family neighborhoods spread over a wide area. Distance between addresses is
            the main cost driver, so ask how travel time is billed.
          </p>
          <p>
            <strong className="text-ink">Bradenton and Anna Maria Island:</strong> about 15 miles north
            in Manatee County. Mainland Bradenton is mostly single-family homes with driveway access,
            while Anna Maria Island has the same bridge, parking and beach-season constraints as the
            Sarasota keys.
          </p>
        </ProseSection>

        <ProseSection
          eyebrow="Timing"
          title="When Do Seasonal Residents Move In and Out of Sarasota?"
          bg="bg-background"
        >
          <p>
            Sarasota has a large seasonal population. Many residents arrive in the fall or early winter
            and leave in the spring, and that turnover concentrates demand for crews, condo elevator
            slots and storage around the same weeks. Booking three to four weeks ahead for those
            windows gives you a real choice of movers.
          </p>
          <p>
            Summer is quieter, but it is also the wettest stretch of the year and overlaps hurricane
            season, which runs June through November. Check the{" "}
            <a href="https://www.nhc.noaa.gov/" rel="noopener">National Hurricane Center</a> forecast in
            the week before a summer or fall move, and keep a backup date.
          </p>
          <p>
            Seasonal owners who keep furniture between stays should store it in climate-controlled
            space, not an unconditioned unit. Compare{" "}
            <Link to="/storage-solutions/">moving and storage options in Florida</Link>, and read our
            deep dive on{" "}
            <Link to="/blog/$slug/" params={{ slug: "climate-controlled-storage-florida" }}>
              climate-controlled storage in Florida
            </Link>{" "}
            before you choose a unit.
          </p>
        </ProseSection>

        <ProseSection title="Sarasota Moves in Context: Nearby Cities and Services" bg="bg-surface-alt">
          <p>
            Every hourly figure on this page follows the same structure explained in our{" "}
            <Link to="/local-movers-in-florida/">Florida local moving rate guide</Link>, including
            crew sizes and example scenarios by home size. Moving up I-75 or across the bay? Compare{" "}
            <Link to="/movers-in-tampa/">Tampa moving companies</Link> and{" "}
            <Link to="/movers-in-riverview/">Riverview and South Hillsborough movers</Link>; heading
            south-east into Collier County, see{" "}
            <Link to="/movers-in-naples/">Naples movers on the Gulf coast</Link>.
          </p>
          <p>
            Leaving Florida entirely calls for{" "}
            <Link to="/long-distance-movers/">interstate movers with written delivery windows</Link>{" "}
            rather than an hourly crew. Condo and island moves often need{" "}
            <Link to="/storage-solutions/">climate-controlled storage between dates</Link> and{" "}
            <Link to="/packing-services/">fragile packing and custom crating</Link> for art and
            glass, while a downsizing parent is usually better served by our{" "}
            <Link to="/senior-moving-services/">senior moving services</Link>.
          </p>
        </ProseSection>
        </>
      }
      related={[
        { to: "/local-movers-in-florida/", label: "Florida hourly moving rates", d: "The statewide rate card plus the access factors that change a quote." },
        { to: "/movers-in-tampa/", label: "Movers in Tampa", d: "Bay-area bridges, traffic corridors and apartment move-in rules." },
        { to: "/movers-in-riverview/", label: "Movers in Riverview", d: "South Hillsborough communities north of Sarasota along I-75." },
        { to: "/movers-in-naples/", label: "Movers in Naples", d: "Gated Southwest Florida communities and seasonal-resident timing." },
        { to: "/senior-moving-services/", label: "Senior moving services", d: "Downsizing help for 55+ communities in Sarasota and Venice." },
      ]}
      faqs={FAQS}
      ctaTitle="Get Your Sarasota Moving Cost"
    />
  ),
});
