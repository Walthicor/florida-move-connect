import { createFileRoute } from "@tanstack/react-router";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
import { pageHead } from "@/lib/seo";
import { Link } from "@tanstack/react-router";
import { CityHero, SimpleCostTable, LocalKnowledge, Neighborhoods, Faq } from "./movers-in-ocala.index";
import { ProseSection, SubBlock, CardGrid, CheckList } from "@/components/site/ContentSections";

export const Route = createFileRoute("/movers-in-boca-raton/")({
  head: () => pageHead({
    path: "/movers-in-boca-raton/",
    title: 'Movers in Boca Raton FL | Condo Moving Specialists',
    description: "Compare licensed Boca Raton movers with COI-ready crews for high-rise condos and 55+ communities, from about $450. Palm Beach County coverage, free quotes.",
    service: { serviceType: 'Moving Services', areaServed: 'Boca Raton, Florida' },
    faqs: FAQS,
  }),
  component: BocaPage,
});

const COSTS = [
  { size: "Studio / 1BR", price: "$450-$900" },
  { size: "2-3 Bedroom", price: "$850-$1,500" },
  { size: "4+ Bedroom", price: "$1,400-$2,600" },
  { size: "Condo / high-rise premium", price: "+$100-$300" },
];

const LOCAL = [
  { t: "COI first", d: "Nearly every association from downtown to the beach requires a certificate of insurance before the elevator unlocks. Ask each mover how quickly it can send the COI to your property manager while you are still comparing quotes." },
  { t: "55+ and country-club communities", d: "Gate access, vendor registration and approved hours are standard. Name the community when you request quotes so movers can plan for its rules." },
  { t: "Snowbird calendar", d: "October-April is the busy season across Palm Beach County; book 3 weeks ahead for season dates, and reserve the service elevator the same day." },
];

const AREAS = ["Downtown / Mizner Park", "Royal Palm Yacht & Country Club", "Boca Square", "Camino Gardens", "Boca West", "Century Village", "West Boca", "Highland Beach", "Delray Beach", "Kings Point", "Deerfield Beach", "Boynton Beach"];

const FAQS = [
  { q: "How much do movers cost in Boca Raton?", a: "As typical estimates, $450-$900 for a 1-bedroom and $850-$1,500 for 2-3 bedrooms; condo towers add $100-$300 in elevator and carry time. Only a written quote from a mover is binding." },
  { q: "Do Boca movers serve the rest of Palm Beach County?", a: "Yes — Delray Beach, Boynton Beach, West Palm Beach, Wellington and the coastal corridor are standard local territory, along with Highland Beach and Deerfield Beach." },
  { q: "My building requires a COI — is that a problem?", a: "No. Certificates of insurance are routine for Boca condo moves. Send your building's COI requirements to each mover when you request quotes, and confirm the COI has reached the property manager before move day." },
  { q: "Can Boca Raton movers handle a piano?", a: "Not a general crew — a piano needs a specialist team with a skid board and its own valuation. Our Boca Raton piano movers page covers uprights, grands and condo-tower instrument moves." },
  { q: "How far ahead should I book a Boca Raton move?", a: "Three weeks for October-April season dates, and one to two weeks off-season. Book the service elevator with your association on the same day you confirm the crew." },
  { q: "Do Boca Raton movers help seniors moving into 55+ communities?", a: "Yes. Many movers offer packing, partial loads for downsizing and help with community move-in rules. Our senior moving services page explains how sorting, donations and move-day planning fit together." },
  { q: "Can movers pack and move a chandelier in Boca Raton?", a: "Yes, as a specialty item. Chandeliers are usually taken down, wrapped piece by piece and boxed or crated; ask whether an electrician needs to disconnect the fixture first, and have each mover quote it separately." },
  { q: "How long does a move from New York to Boca Raton take?", a: "Typical transit is roughly 3-6 days to Palm Beach County, as a delivery window rather than a guarantee. The carrier needs active FMCSA authority and a USDOT number, and you should get a written estimate before you sign." },
];

function BocaPage() {
  return (
    <>
      <CityHero
        eyebrow="Licensed Palm Beach County Movers"
        h1={<>Movers in <span className="text-brand">Boca Raton</span>, Florida</>}
        intro="Movers in Boca Raton, FL typically charge $450-$900 for a 1-bedroom and $850-$1,500 for a 2-3 bedroom local move, as typical estimates rather than quotes, with condo towers adding $100-$300. Boca is condo country: from Mizner Park to the beachfront towers, moves here run on COIs, service elevators and association calendars. Compare free quotes from up to four licensed Palm Beach County movers who handle that paperwork routinely."
      />
      <NetworkDisclosure />
      <SimpleCostTable title="How Much Do Movers Cost in Boca Raton, FL?" rows={COSTS} />
      <LocalKnowledge title="What Condo Rules Affect a Boca Raton Move?" items={LOCAL} />
      <ProseSection title="What Makes a Boca Raton Move Cost More?">
        <p>
          The ranges above are typical estimates — only a written quote from a mover is binding.
          Local moves across Florida are billed by the hour, usually $95-$150 for a two-mover crew
          with a truck, so in Boca the final number depends on how much time the building and the
          inventory add.
        </p>
        <p>
          The biggest Boca-specific factors are the service elevator (one shared elevator for a
          whole tower slows every trip), long hallways from the loading dock to the unit, and
          high-value furniture, art and fixtures that need extra wrapping or crating. Ask each mover
          to list what is included so you compare the same job.
        </p>
      </ProseSection>
      <ProseSection title="How Do Condo and High-Rise Moves Work in Boca Raton?" bg="bg-surface-alt">
        <p>
          Condo towers downtown, along the Intracoastal and on the beach in Boca and Highland Beach
          all control move day through the association or building management. Plan these steps
          before you book a crew:
        </p>
        <CheckList
          items={[
            <>
              <strong className="text-ink">Get the move rules in writing.</strong> Ask the
              association for its move-in and move-out rules, approved hours and any required
              deposit.
            </>,
            <>
              <strong className="text-ink">Certificate of insurance (COI).</strong> Most buildings
              want a COI naming the association before the elevator is released. Send the exact
              wording to each mover while you compare quotes.
            </>,
            <>
              <strong className="text-ink">Reserve the service elevator.</strong> Book it for both
              ends of the move as soon as your date is set, and confirm the time window.
            </>,
            <>
              <strong className="text-ink">Loading dock and parking.</strong> Ask where the truck
              can park and whether there is a height limit at the garage or dock entrance.
            </>,
          ]}
        />
        <p>
          Our{" "}
          <Link to="/apartment-movers/">Florida condo and apartment moving guide</Link> covers
          COIs, elevator reservations and stair pricing in more detail.
        </p>
      </ProseSection>
      <ProseSection title="How Do Senior Moves Into Boca Raton 55+ Communities Work?">
        <p>
          A large share of Boca moves involve retirees — downsizing from a family home into a condo
          or villa, or moving into an age-restricted community such as Century Village in west Boca
          or Kings Point in west Delray Beach. These moves are less about distance and more about
          planning.
        </p>
        <CardGrid>
          <SubBlock title="Sorting and downsizing">
            <p>
              Decide what fits the new floor plan before move day. A smaller load means fewer hours
              and a lower bill.
            </p>
          </SubBlock>
          <SubBlock title="Community rules">
            <p>
              Gate registration, approved move hours and truck limits are common in 55+ communities.
              Get the rules from the association early.
            </p>
          </SubBlock>
          <SubBlock title="Packing and set-up">
            <p>
              Many movers offer full packing and unpacking, so beds, kitchen and bathroom are ready
              on the first night.
            </p>
          </SubBlock>
          <SubBlock title="Move management">
            <p>
              Some families hire a move manager to coordinate sorting, donations and the movers.
              Ask movers whether they work alongside one.
            </p>
          </SubBlock>
        </CardGrid>
        <p>
          Our{" "}
          <Link to="/senior-moving-services/">senior moving services in Florida</Link> page walks
          through sorting days, 55+ move-in paperwork and donation pickups.
        </p>
      </ProseSection>
      <ProseSection title="Who Moves Pianos, Antiques and Specialty Items in Boca Raton?" bg="bg-surface-alt">
        <p>
          Many Boca households own grand pianos, art collections, chandeliers and antique
          furniture, and none of it belongs on a standard hourly crew without planning. A piano in
          particular needs a skid board, a trained team and its own declared value — especially
          coming out of a tower where the instrument crosses a loading dock and a service elevator.
        </p>
        <CheckList
          items={[
            "Chandeliers: ask whether an electrician must disconnect the fixture first; movers then wrap each arm and crystal and box it to fit.",
            "Art and mirrors: framed pieces and glass travel in mirror cartons or custom crates when the value warrants it.",
            "Fine furniture: marble tops, glass shelves and lacquered finishes need extra padding and sometimes partial disassembly.",
            "Valuation: ask each mover about full-value protection and list high-value items in writing before move day.",
          ]}
        />
        <p>
          Our{" "}
          <Link to="/piano-movers-boca-raton/">
            Boca Raton piano moving guide
          </Link>{" "}
          covers upright and grand pricing, condo-tower staging and what specialist
          crews do differently. For artwork, mirrors and chandeliers travelling in
          the same load, see{" "}
          <Link to="/packing-services/">custom crating and fragile packing</Link>. If the move is a
          retiree downsizing out of a family home, our{" "}
          <Link to="/senior-moving-services/">senior moving services</Link> cover sorting, Century
          Village and Kings Point move-in rules and donation pickups.
        </p>
      </ProseSection>
      <ProseSection title="Do Boca Raton Movers Handle Office Moves?">
        <p>
          Yes. Boca Raton has a large office market, from downtown buildings near Mizner Park to
          the office parks along Yamato Road and the Glades Road corridor. Office moves are planned
          differently from household moves:
        </p>
        <CheckList
          items={[
            "Most are scheduled after hours or on weekends so the business keeps running.",
            "Office buildings usually require a COI and a reserved freight elevator, just like condo towers.",
            "Desks, files and IT equipment are labeled by floor and room so the new space is ready on Monday.",
          ]}
        />
        <p>
          See our{" "}
          <Link to="/commercial-movers/">commercial and office moving services in Florida</Link>{" "}
          for how those jobs are quoted.
        </p>
      </ProseSection>
      <ProseSection title="What Should You Know About Moving to Boca Raton From New York or Chicago?" bg="bg-surface-alt">
        <p>
          Boca Raton is a common destination for households relocating from the Northeast and the
          Midwest. These are interstate moves, so they are priced by shipment weight and distance —
          not by the hour — and the carrier must hold active FMCSA operating authority and a USDOT
          number.
        </p>
        <CardGrid>
          <SubBlock title="From New York">
            <p>
              Typical transit is roughly 3-6 days to Palm Beach County. Many New York origins have
              permit parking and elevator windows, and the Boca building wants a COI before the
              truck reaches the dock — give the carrier both buildings' rules before you sign.
            </p>
          </SubBlock>
          <SubBlock title="From Chicago">
            <p>
              Transit to South Florida usually runs 3-7 days. Winter is the busy window on this
              lane, and weather at the origin is the most common reason a delivery window stretches.
            </p>
          </SubBlock>
        </CardGrid>
        <p>
          Long-distance moves from Florida typically run $2,200-$6,500+ depending on home size and
          distance, as estimates only. Check the carrier on{" "}
          <a href="https://safer.fmcsa.dot.gov/" rel="noopener">FMCSA SAFER</a>, read FMCSA's{" "}
          <a href="https://www.fmcsa.dot.gov/protect-your-move" rel="noopener">Protect Your Move</a>{" "}
          guidance, and compare{" "}
          <Link to="/long-distance-movers/">long-distance movers with binding estimates</Link>.
        </p>
      </ProseSection>
      <ProseSection title="Which Boca Raton Neighborhoods Do Movers Cover?">
        <p>
          Boca moves change a lot between the beach and the western suburbs. Here is what crews plan
          for in each part of town.
        </p>
        <CardGrid cols={3}>
          <SubBlock title="Downtown and Mizner Park">
            <p>
              Apartments and condos above shops and restaurants, with loading docks, garage height
              limits and set move hours. Weekend moves may be restricted.
            </p>
          </SubBlock>
          <SubBlock title="East of I-95">
            <p>
              Older neighborhoods, waterfront homes on the Intracoastal and beach condos along A1A.
              Expect narrower streets, tight parking and condo rules near the water.
            </p>
          </SubBlock>
          <SubBlock title="West Boca">
            <p>
              Mostly gated communities, golf communities and 55+ developments in the western
              suburbs along Glades Road and Florida's Turnpike. Gate registration is standard.
            </p>
          </SubBlock>
          <SubBlock title="Boca West">
            <p>
              A large gated country-club community. Register the crew with the gate and confirm
              approved hours and truck limits with the association.
            </p>
          </SubBlock>
          <SubBlock title="Highland Beach">
            <p>
              A small town on the barrier island between Boca and Delray, lined with high-rise
              condos on A1A. Every tower has its own elevator and COI rules.
            </p>
          </SubBlock>
          <SubBlock title="Delray Beach border">
            <p>
              Moves between Boca and Delray Beach, including Kings Point, are local and billed by
              the hour. Only the community rules at each end change.
            </p>
          </SubBlock>
        </CardGrid>
      </ProseSection>
      <Neighborhoods title="More Boca Raton Areas and Nearby Cities" items={AREAS} tail="— plus West Palm Beach, Wellington and the rest of the Palm Beach County coastal corridor." bg="bg-surface-alt" />
      <ProseSection title="How Do You Verify a Boca Raton Mover?">
        <p>
          Florida Movers Direct is a free matching service, not a moving company, and we do not
          verify licenses for you. For a move inside Florida, ask for the mover's registration
          number and confirm it through the{" "}
          <a href="https://www.fdacs.gov/Business-Services/Moving-Companies" rel="noopener">
            FDACS moving services page
          </a>
          . For a move from another state, check the carrier's USDOT number on FMCSA SAFER. Our{" "}
          <Link to="/how-to-verify-florida-mover-license/">guide to checking a Florida mover license</Link>{" "}
          walks through both lookups.
        </p>
      </ProseSection>
      <ProseSection title="Nearby Cities and Statewide Moving Rates" bg="bg-surface-alt">
        <p>
          Boca sits between two very different moving markets. Compare{" "}
          <Link to="/movers-in-miami/">Miami moving companies and high-rise rules</Link> to the south
          and <Link to="/movers-in-naples/">Naples movers on the Gulf coast</Link> if you are
          crossing the state. For the hourly math behind every South Florida quote, read our{" "}
          <Link to="/local-movers-in-florida/">Florida local moving rate guide</Link>.
        </p>
        <p>
          Heading out of state from Palm Beach County? Compare{" "}
          <Link to="/long-distance-movers/">interstate moving estimates and delivery windows</Link>.
          Condo residents waiting on a closing date usually add{" "}
          <Link to="/storage-solutions/">short-term storage between moves</Link>.
        </p>
      </ProseSection>
      <Faq faqs={FAQS} />
    </>
  );
}
