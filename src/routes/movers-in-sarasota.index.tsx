import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { MoversCityPage, moversCitySchema } from "@/components/site/MoversCityPage";
import { ProseSection } from "@/components/site/ContentSections";

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
    q: "What should I do if my Sarasota closing and move-in dates do not line up?",
    a: "Ask each mover about storage-in-transit. Your load stays on the truck or in a warehouse vault between dates instead of being unloaded and reloaded, which usually costs less than a second handling plus a short-term unit.",
  },
];

export const Route = createFileRoute("/movers-in-sarasota/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Movers in Sarasota FL | Local Rates & Free Quotes",
      description: "Movers in Sarasota charge $95-$150 an hour, with $650-$1,100 typical for a two-bedroom. Compare licensed Sarasota, Bradenton and Lakewood Ranch crews free.",
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
          Movers in Sarasota charge $95-$150 per hour for a two-mover crew with a truck — typically
          $650-$1,100 for a two-bedroom and $900-$1,600 for a three-bedroom, as estimates rather than
          fixed prices. Compare up to 4 licensed, insured crews covering Sarasota, Bradenton, Venice
          and Lakewood Ranch at no cost.
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
      ]}
      areasIntro={
        <>
          Matched crews cover Sarasota and Manatee County — bayfront and downtown condos, Siesta Key
          and Longboat Key island addresses, Palmer Ranch and Lakewood Ranch subdivisions, plus
          Bradenton, Venice and Osprey.
        </>
      }
      extra={
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
