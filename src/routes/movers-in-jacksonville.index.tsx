import { createFileRoute, Link } from "@tanstack/react-router";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
import { ProseSection, SubBlock, CardGrid, CheckList } from "@/components/site/ContentSections";
import { pageHead } from "@/lib/seo";
import { CityHero, SimpleCostTable, LocalKnowledge, Neighborhoods, Faq } from "./movers-in-ocala.index";

export const Route = createFileRoute("/movers-in-jacksonville/")({
  head: () => pageHead({
    path: "/movers-in-jacksonville/",
    title: 'Movers in Jacksonville FL | Compare Moving Companies',
    description: "Compare licensed Jacksonville movers for cross-town, bridge-heavy and military PCS relocations from about $400. Duval County crews and free written quotes.",
    service: { serviceType: 'Moving Services', areaServed: 'Jacksonville, Florida' },
    faqs: FAQS,
  }),
  component: JacksonvillePage,
});

const COSTS = [
  { size: "Studio / 1BR", price: "$400-$800" },
  { size: "2-3 Bedroom", price: "$750-$1,300" },
  { size: "4+ Bedroom", price: "$1,200-$2,200" },
  { size: "Cross-town premium (Beaches to Westside)", price: "+1-2 billable hours" },
];

const LOCAL = [
  { t: "The largest city by land area", d: "Jacksonville's government is consolidated with most of Duval County, so one city runs from the Westside to the coast near Mayport. Quote accuracy depends on exact neighborhoods, not just \"Jacksonville\" — always give both ZIP codes." },
  { t: "The bridges", d: "The St. Johns River splits the city, and rush hour on the Buckman, Fuller Warren, Hart or Mathews adds real time to an hourly job. Morning starts keep the bill honest." },
  { t: "Military moves", d: "NAS Jacksonville and Naval Station Mayport bring steady PCS traffic. Many local crews are used to base access steps and tight report dates — confirm the details with your transportation office." },
  { t: "The Beaches", d: "Jacksonville Beach, Neptune Beach and Atlantic Beach sit across the Intracoastal Waterway. Narrow streets, older beach cottages and summer visitor traffic all slow the truck." },
  { t: "Summer storms and hurricane season", d: "Afternoon thunderstorms are common from June through September, and hurricane season runs June through November. Book early-morning starts and keep a backup date." },
  { t: "Peak season", d: "Summer is the busiest window: school breaks and the main military PCS season overlap. Book 3-4 weeks ahead for June-August and month-end dates." },
];

const AREAS = ["Riverside", "Avondale", "San Marco", "Southside", "Baymeadows", "Mandarin", "Arlington", "Northside", "Westside", "Orange Park", "Fleming Island", "Jax Beach", "Neptune Beach", "Atlantic Beach", "Ponte Vedra", "Nocatee", "Julington Creek", "Fruit Cove", "St. Johns"];

const FAQS = [
  { q: "How much do movers cost in Jacksonville FL?", a: "As typical estimates, $400-$800 for a 1-bedroom and $750-$1,300 for 2-3 bedrooms, with two-mover crews usually at $95-$150 per hour. Cross-town moves between the Beaches and the Westside add 1-2 hours of drive time, so plan routes off-peak." },
  { q: "Do Jacksonville movers handle military PCS moves?", a: "Yes. Many Jacksonville movers work with military families from NAS Jax and Mayport, including personally procured moves where the service member hires the crew. Check weight-ticket and paperwork requirements with your installation's transportation office before move day." },
  { q: "Which Jacksonville areas do movers cover?", a: "Riverside, San Marco, Southside, Mandarin, Arlington, Orange Park, the Beaches (Jax Beach, Neptune, Atlantic), Nocatee and greater Duval, Clay and St. Johns counties." },
  { q: "Is a move from Jacksonville Beach to Orange Park a local move?", a: "Yes. It stays inside the local band of roughly 50 miles, so it is billed hourly, but it crosses both the Intracoastal Waterway and the St. Johns River. Expect more drive time than the mileage suggests." },
  { q: "Do Jacksonville movers serve Nocatee, Julington Creek and Fruit Cove?", a: "Yes. These St. Johns County communities sit just south of the Duval line and are standard local territory, billed the same hourly way as a move inside the city." },
  { q: "How far ahead should I book movers in Jacksonville?", a: "Two to three weeks for mid-month dates off-season. For June-August, month-end dates or a PCS report date, give it three to four weeks." },
  { q: "What do I need for a move from Jacksonville to Georgia?", a: "Any move that crosses the state line is interstate, so the carrier needs active FMCSA operating authority and a USDOT number. Look the number up on FMCSA SAFER and get a written estimate before you pay a deposit." },
  { q: "When is the best time of day to move in Jacksonville?", a: "Early morning, so the truck crosses the river before the commute peaks. In summer, an early start also beats the afternoon thunderstorms." },
];

function JacksonvillePage() {
  return (
    <>
      <CityHero
        eyebrow="Licensed Duval County Movers"
        h1={<>Movers in <span className="text-brand">Jacksonville</span>, Florida</>}
        intro="Movers in Jacksonville, FL typically charge $95-$150 per hour for a two-mover crew, or about $400-$800 for a 1-bedroom and $750-$1,300 for a 2-3 bedroom home, as typical estimates rather than quotes. Here is what outsiders miss: Jacksonville is the largest city by land area in the contiguous U.S. — a move from the Beaches to the Westside is a local move that behaves like a road trip, often with a St. Johns River bridge in the middle. Compare free quotes from up to four licensed Jacksonville movers who price that drive correctly."
      />
      <NetworkDisclosure />
      <SimpleCostTable title="How Much Do Movers Cost in Jacksonville, FL?" rows={COSTS} />
      <LocalKnowledge title="Why Does Distance Matter on a Jacksonville Move?" items={LOCAL} />
      <ProseSection title="Why Do Jacksonville Moving Quotes Vary So Much?">
        <p>
          The ranges above are typical estimates — only a written quote from a mover is binding.
          Local Jacksonville moves are billed by the hour, so the final price depends on crew size,
          time spent loading and unloading, and the drive between addresses.
        </p>
        <p>
          In most Florida cities the drive is a small part of the bill. In Jacksonville it can be
          the biggest variable. A move from Mandarin to Riverside, or from Arlington to Orange Park,
          can mean 30-plus minutes on I-95 or I-295 and at least one river crossing. Add stairs in a
          Southside apartment complex or a long carry to a beach cottage, and two quotes for the same
          home size can land far apart. Ask each mover how it bills travel time before you compare
          totals.
        </p>
      </ProseSection>
      <ProseSection title="Which St. Johns River Bridges Slow Down a Jacksonville Move?" bg="bg-surface-alt">
        <p>
          The St. Johns River runs north through the middle of the city, so many cross-town moves
          cross it at least once. Each bridge has its own rush-hour pattern:
        </p>
        <CheckList
          items={[
            <>
              <strong className="text-ink">Buckman Bridge (I-295):</strong> the main link between
              Mandarin and Orange Park, and one of the busiest commuter crossings in the region.
            </>,
            <>
              <strong className="text-ink">Fuller Warren Bridge (I-95):</strong> the downtown
              interstate crossing between Riverside and San Marco.
            </>,
            <>
              <strong className="text-ink">Acosta and Main Street bridges:</strong> downtown
              crossings toward San Marco and the Southbank, with tight streets on both ends.
            </>,
            <>
              <strong className="text-ink">Hart and Mathews bridges:</strong> the crossings from
              downtown toward Arlington and the east side.
            </>,
            <>
              <strong className="text-ink">Dames Point Bridge (I-295):</strong> the northern loop,
              used for moves between the Northside and Arlington or the Beaches.
            </>,
          ]}
        />
        <p>
          Moves to the Beaches also cross the Intracoastal Waterway on Atlantic Boulevard, Beach
          Boulevard or J. Turner Butler Boulevard. Experienced crews plan these crossings before the
          morning commute or after it clears, which can save a billable hour or more.
        </p>
      </ProseSection>
      <ProseSection title="How Do Military PCS Moves From NAS Jacksonville and Mayport Work?">
        <p>
          Jacksonville is home to NAS Jacksonville on the Westside and Naval Station Mayport near
          the Beaches, so permanent change of station (PCS) moves are a regular part of local moving
          work. In general, a service member can let the government arrange the shipment or do a
          personally procured move (PPM), where you arrange the move yourself and claim
          reimbursement under the program's rules.
        </p>
        <CheckList
          items={[
            "Talk to your installation's transportation office first — it sets the paperwork, weight-ticket and receipt rules for a PPM.",
            "If you live in on-base housing, ask how civilian movers get base access and when the housing inspection happens.",
            "For a PCS move out of Florida, the carrier needs an active USDOT number with FMCSA, and you should check it on SAFER.",
            "If your report date and your new lease do not line up, ask movers about storage-in-transit.",
          ]}
        />
        <p>
          For out-of-state orders, compare{" "}
          <Link to="/long-distance-movers/">interstate movers with binding estimates</Link>, and ask
          about short-term storage if there is a gap between leases.
        </p>
      </ProseSection>
      <ProseSection title="Which Jacksonville Neighborhoods Do Movers Cover?" bg="bg-surface-alt">
        <p>
          Every part of the First Coast moves differently. Here is what local crews watch for in the
          areas with the most moves.
        </p>
        <CardGrid cols={3}>
          <SubBlock title="Riverside and Avondale">
            <p>
              Historic homes and older apartment buildings on narrow, tree-lined streets. On-street
              parking and porch steps are the norm; mention any tight staircase.
            </p>
          </SubBlock>
          <SubBlock title="San Marco">
            <p>
              Older homes and newer condos south of downtown, close to the Acosta and Main Street
              bridges. Plan around rush hour if the move crosses into downtown.
            </p>
          </SubBlock>
          <SubBlock title="Mandarin">
            <p>
              Established suburbs along the river, with larger lots and mature trees. Moves to
              Orange Park cross the Buckman Bridge — schedule it off-peak.
            </p>
          </SubBlock>
          <SubBlock title="Southside and Baymeadows">
            <p>
              Dense apartment complexes and offices near I-95 and I-295. Expect leasing-office move
              rules, breezeway stairs and tight parking lots.
            </p>
          </SubBlock>
          <SubBlock title="Julington Creek, Fruit Cove and Nocatee">
            <p>
              Planned communities in St. Johns County with HOA rules on truck parking and move
              hours. Register the crew with the gate or association in advance.
            </p>
          </SubBlock>
          <SubBlock title="Jacksonville Beach and Orange Park">
            <p>
              Beach cottages and condos on one side, Clay County suburbs near NAS Jax on the other.
              A move between them is local, but it crosses two waterways.
            </p>
          </SubBlock>
        </CardGrid>
      </ProseSection>
      <Neighborhoods title="More Duval, Clay and St. Johns County Areas" items={AREAS} tail="— and the rest of greater Duval, Clay and St. Johns counties." />
      <ProseSection title="Apartment, Office and Specialty Moves in Jacksonville" bg="bg-surface-alt">
        <p>
          Not every Jacksonville job is a house. Tell the movers you compare what kind of move it is
          so they send the right crew.
        </p>
        <CheckList
          items={[
            <>
              <strong className="text-ink">Apartments and condos:</strong> Southside complexes and
              downtown buildings often require a reserved elevator or a certificate of insurance. Our{" "}
              <Link to="/apartment-movers/">apartment and condo moving guide</Link> covers what to
              arrange with the property first.
            </>,
            <>
              <strong className="text-ink">Offices:</strong> businesses in the Southside and
              downtown office corridors usually move after hours or on weekends. See{" "}
              <Link to="/commercial-movers/">commercial moving services in Florida</Link>.
            </>,
            <>
              <strong className="text-ink">Fragile items:</strong> artwork, mirrors and glass
              travel safer with{" "}
              <Link to="/packing-services/">professional packing and crating</Link>.
            </>,
            <>
              <strong className="text-ink">Pianos:</strong> an upright or grand needs a specialist
              team with a skid board, not a general hourly crew. See our{" "}
              <Link to="/piano-movers-jacksonville/">piano movers in Jacksonville</Link> page.
            </>,
          ]}
        />
      </ProseSection>
      <ProseSection title="How Do You Verify a Jacksonville Mover?">
        <p>
          Florida Movers Direct is a free matching service, not a moving company, and we do not
          verify licenses for you. For a move inside Florida, ask for the mover's registration
          number and confirm it through the{" "}
          <a href="https://www.fdacs.gov/Business-Services/Moving-Companies" rel="noopener">
            FDACS moving services page
          </a>
          . For a move out of state, look up the USDOT number on{" "}
          <a href="https://safer.fmcsa.dot.gov/" rel="noopener">FMCSA SAFER</a>. Our{" "}
          <Link to="/how-to-verify-florida-mover-license/">step-by-step mover license check</Link>{" "}
          walks through both.
        </p>
      </ProseSection>
      <ProseSection title="Related Moving Help Around Jacksonville" bg="bg-surface-alt">
        <p>
          Pricing inside Duval County follows the same hourly logic explained on our{" "}
          <Link to="/local-movers-in-florida/">Florida local moving rate guide</Link>, so start
          there if you want to understand crew sizes before you compare quotes. Leaving the state
          after a PCS order or a job change? Compare{" "}
          <Link to="/long-distance-movers/">interstate movers with written delivery windows</Link>{" "}
          instead of hourly crews.
        </p>
        <p>
          Moving along the I-95 or I-4 corridor? See rates for{" "}
          <Link to="/movers-in-orlando/">Orlando moving companies</Link> and{" "}
          <Link to="/movers-in-ocala/">Ocala movers in Marion County</Link>, or read our{" "}
          <Link to="/movers-in-the-villages/">guide to moving into The Villages</Link> if the
          destination is a 55+ community. If closing dates do not line up,{" "}
          <Link to="/storage-solutions/">storage-in-transit options in Florida</Link> bridge the gap,
          and{" "}
          <Link to="/piano-movers-jacksonville/">Jacksonville piano moving specialists</Link> handle
          instruments the hourly crew should not touch.
        </p>
      </ProseSection>
      <Faq faqs={FAQS} />
    </>
  );
}
