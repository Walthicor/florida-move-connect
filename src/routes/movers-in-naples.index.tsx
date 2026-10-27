import { createFileRoute, Link } from "@tanstack/react-router";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
import { ProseSection, SubBlock, CardGrid, CheckList } from "@/components/site/ContentSections";
import { pageHead } from "@/lib/seo";
import { CityHero, SimpleCostTable, LocalKnowledge, Neighborhoods, Faq } from "./movers-in-ocala.index";

export const Route = createFileRoute("/movers-in-naples/")({
  head: () => pageHead({
    path: "/movers-in-naples/",
    title: 'Movers in Naples FL | Compare Licensed Moving Companies',
    description: "Compare licensed Naples movers experienced with gated communities, white-glove handling and season-smart scheduling across Collier County. Free quotes today.",
    service: { serviceType: 'Moving Services', areaServed: 'Naples, Florida' },
    faqs: FAQS,
  }),
  component: NaplesPage,
});

const COSTS = [
  { size: "Studio / 1BR", price: "$450-$900" },
  { size: "2-3 Bedroom", price: "$850-$1,500" },
  { size: "4+ / luxury homes", price: "$1,500-$3,000+" },
  { size: "White-glove / antiques handling", price: "Quoted by inventory" },
];

const LOCAL = [
  { t: "Snowbird season (Oct-Apr)", d: "Seasonal residents start arriving in the fall, and demand peaks from January through April. Book 3-4 weeks ahead for season dates and expect gated communities to require COIs and approved vendor lists." },
  { t: "Luxury and antique inventory", d: "Many Naples homes hold art, antiques and oversized furniture that a standard crew should not wrap with blankets alone. Ask about full-value protection and custom crating." },
  { t: "Summer advantage", d: "May-September is the quiet season here (the reverse of much of Florida) — flexible dates typically quote lower, though afternoon storms and hurricane season need planning." },
];

const COLLIER = ["Old Naples", "Port Royal", "Aqualane Shores", "Park Shore", "Pelican Bay", "Vanderbilt Beach", "North Naples", "Naples Park", "East Naples", "Lely", "Golden Gate", "Golden Gate Estates", "Marco Island", "Ave Maria", "Immokalee", "Bonita Springs"];

const FAQS = [
  { q: "How much do movers cost in Naples, FL?", a: "As typical estimates, $450-$900 for a 1-bedroom and $850-$1,500 for 2-3 bedrooms. Estate and luxury moves are quoted by inventory, with white-glove options. Only a written quote from a mover is binding." },
  { q: "Do Naples movers work inside gated communities?", a: "Yes. COIs, guard-gate registration and community vendor rules are routine across Collier County. Give each mover the community name and the association's move-in rules when you request quotes." },
  { q: "When is the cheapest time to move in Naples?", a: "Summer — the opposite of the local demand curve. May-September quotes typically come in under season rates; the difference varies by home size and access." },
  { q: "When is snowbird season in Naples?", a: "Seasonal residents usually arrive in the fall and stay through spring, with the busiest stretch from January through April. Crews, elevators and gate schedules fill up fastest in those months." },
  { q: "Do Naples movers cover Marco Island, Ave Maria and Bonita Springs?", a: "Yes. Licensed movers in our network cover Collier County from Marco Island and East Naples to Golden Gate and Ave Maria, plus Bonita Springs just over the Lee County line." },
  { q: "Can movers help a retiree downsize in Naples?", a: "Yes. Many movers offer packing, partial loads and storage, and some work alongside move managers who help with sorting and floor plans. Our senior moving services page explains how to combine them." },
  { q: "Should I avoid moving during hurricane season in Naples?", a: "Not necessarily, but plan for it. Hurricane season runs June through November; book early-morning starts, keep a backup date and ask each mover how it handles a weather postponement." },
  { q: "Do Gulf-front condos in Naples have special move rules?", a: "Usually. Expect a certificate of insurance, a reserved service elevator, set move hours and sometimes a deposit. Get the rules from your association in writing and share them with each mover before you compare quotes." },
];

function NaplesPage() {
  return (
    <>
      <CityHero
        eyebrow="Licensed Collier County Movers"
        h1={<>Movers in <span className="text-brand">Naples</span>, Florida</>}
        intro="Movers in Naples, FL typically charge $450-$900 for a 1-bedroom and $850-$1,500 for a 2-3 bedroom local move, as typical estimates rather than quotes. Naples runs on the season: from fall through April, and especially January through April, seasonal residents arrive and gated-community move-in rules set the schedule. Compare free quotes from up to four licensed Collier County movers who work on that calendar."
      />
      <NetworkDisclosure />
      <SimpleCostTable title="How Much Do Movers Cost in Naples, FL?" rows={COSTS} />
      <LocalKnowledge title="How Does the Season Affect a Naples Move?" items={LOCAL} />
      <ProseSection title="What Changes the Price of a Naples Move?">
        <p>
          The ranges above are typical estimates — only a written quote from a mover is binding.
          Collier County crews bill local moves by the hour, like the rest of Florida, so the price
          depends on crew size, hours and access more than on miles.
        </p>
        <p>
          Three Naples-specific factors push quotes up. First, larger single-story homes with long
          driveways and pool cages take more time per room than a typical apartment. Second, condo
          towers limit the crew to a reserved service elevator and a set time window. Third, art,
          antiques and fine furniture need extra wrapping, crating or a white-glove crew. Ask each
          mover to list what is included so you compare like for like.
        </p>
      </ProseSection>
      <ProseSection title="When Should You Schedule a Move in Naples?" bg="bg-surface-alt">
        <p>
          Naples has a moving calendar unlike most of Florida. Planning around it is the easiest way
          to get a better quote.
        </p>
        <CheckList
          items={[
            <>
              <strong className="text-ink">January-April (peak season):</strong> the busiest stretch.
              Book 3-4 weeks ahead, and reserve condo elevators and gate access as soon as the date
              is set.
            </>,
            <>
              <strong className="text-ink">April-May (closing up for summer):</strong> many seasonal
              residents leave, sell or downsize at the end of the season, so end-of-season dates
              fill up too.
            </>,
            <>
              <strong className="text-ink">June-September (quiet season):</strong> more crews and
              more flexible dates, but hot afternoons and daily storms. Ask for a 7-8 AM start.
            </>,
            <>
              <strong className="text-ink">October-December (arrivals):</strong> seasonal residents
              return and demand climbs again, especially for move-ins before the holidays.
            </>,
          ]}
        />
      </ProseSection>
      <ProseSection title="What Do Naples Gated Communities and HOAs Require?">
        <p>
          Much of Naples sits behind a guard gate. Country-club communities, golf communities and
          condo associations each set their own rules, and the crew cannot start until they are met.
        </p>
        <CardGrid>
          <SubBlock title="Guard-gate registration">
            <p>
              Most gates need the moving company's name, the truck and the date in advance. Some
              ask for driver names. Register the crew with the gatehouse a few days before move day.
            </p>
          </SubBlock>
          <SubBlock title="Certificate of insurance">
            <p>
              Associations commonly require a COI naming the association before the truck enters.
              Ask each mover for one while you are still comparing quotes.
            </p>
          </SubBlock>
          <SubBlock title="Approved hours and truck limits">
            <p>
              Many communities limit moves to weekday daytime hours, cap truck size and ban
              overnight parking. A truck that cannot enter means a shuttle — billable time.
            </p>
          </SubBlock>
          <SubBlock title="Approved vendor lists">
            <p>
              Some associations keep a list of approved vendors. Ask the property manager whether
              one applies before you book, so your chosen mover is cleared in time.
            </p>
          </SubBlock>
        </CardGrid>
      </ProseSection>
      <ProseSection title="How Do High-Rise Condo Moves on the Gulf Work?" bg="bg-surface-alt">
        <p>
          Gulf-front towers along Park Shore, Pelican Bay, Vanderbilt Beach and Marco Island are
          some of the most rule-heavy moves in Southwest Florida. Building management typically
          controls the service elevator, the loading area and the hours.
        </p>
        <CheckList
          items={[
            "Reserve the service elevator for both the move-out and the move-in, and confirm the time window in writing.",
            "Send the building's COI requirements to each mover before you accept a quote.",
            "Ask whether the elevator is padded by the building or by the crew, and whether a deposit is required.",
            "Tell the mover the distance from the loading area to your unit — a long hallway adds carry time.",
          ]}
        />
        <p>
          Our{" "}
          <Link to="/apartment-movers/">Florida condo and high-rise moving guide</Link> explains
          elevator reservations and COIs in more detail.
        </p>
      </ProseSection>
      <ProseSection title="Which Areas of Collier County Do Naples Movers Cover?">
        <p>
          The licensed movers we match you with cover all of Collier County and the Lee County
          border. Each area moves a little differently:
        </p>
        <CardGrid cols={3}>
          <SubBlock title="Old Naples and Port Royal">
            <p>
              Older streets near Fifth Avenue South and Third Street South, plus waterfront estates.
              Expect tight street parking and high-value inventory.
            </p>
          </SubBlock>
          <SubBlock title="North Naples">
            <p>
              Gated golf communities, condo towers and newer homes north of Pine Ridge Road. Gate
              registration is standard.
            </p>
          </SubBlock>
          <SubBlock title="Marco Island">
            <p>
              Island condos and canal homes reached by bridge. Allow extra drive time and check
              condo elevator rules early.
            </p>
          </SubBlock>
          <SubBlock title="Golden Gate and Golden Gate Estates">
            <p>
              Single-family homes, some on large lots with long or unpaved driveways. Mention the
              driveway surface when you request quotes.
            </p>
          </SubBlock>
          <SubBlock title="Ave Maria">
            <p>
              A planned town in eastern Collier County with newer homes and HOA move rules. Drive
              time from the coast is part of the hourly bill.
            </p>
          </SubBlock>
          <SubBlock title="Bonita Springs border">
            <p>
              Just north in Lee County. A Naples-to-Bonita move is still local and billed by the
              hour, with community gate rules on both ends.
            </p>
          </SubBlock>
        </CardGrid>
      </ProseSection>
      <Neighborhoods title="Naples and Collier County Communities" items={COLLIER} tail="— and the rest of Collier County, plus the Estero and Bonita Springs border." bg="bg-surface-alt" />
      <ProseSection title="How Does Hurricane Season Affect a Naples Move?">
        <p>
          The Atlantic hurricane season runs from June 1 through November 30, and Southwest Florida
          is exposed to Gulf storms. A storm watch can cancel a move day on short notice, and after
          a storm, crews are often busy with recovery work.
        </p>
        <CheckList
          items={[
            "Track the forecast from the National Hurricane Center in the week before your move.",
            "Ask each mover how it handles a weather postponement and whether a deposit carries over to a new date.",
            "If your home has hurricane shutters, plan who opens them before the crew arrives.",
            "Seasonal residents leaving for the summer often pair the move with climate-controlled storage.",
          ]}
        />
        <p>
          Track storms on the{" "}
          <a href="https://www.nhc.noaa.gov/" rel="noopener">NOAA National Hurricane Center</a> site,
          and compare{" "}
          <Link to="/storage-solutions/">climate-controlled storage options in Florida</Link> for
          the off-season.
        </p>
      </ProseSection>
      <section className="bg-surface-alt">
        <div className="container-page py-14 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
            Downsizing into a Naples 55+ community
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A large share of Collier County moves are retirees leaving a larger home for a villa or
            condo. Our{" "}
            <Link to="/senior-moving-services/" className="font-semibold text-brand hover:underline">
              senior moving services
            </Link>{" "}
            page covers sorting days, 55+ community move-in paperwork and donation pickups.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Many families also hire a move manager — a professional who helps decide what to keep,
            plans furniture placement in the new home and coordinates the movers, donations and
            estate-sale services. Ask movers whether they work alongside one, and consider{" "}
            <Link to="/packing-services/" className="font-semibold text-brand hover:underline">
              full packing and unpacking services
            </Link>{" "}
            so the new home is set up on day one.
          </p>
        </div>
      </section>
      <ProseSection title="How Do You Verify a Naples Mover?">
        <p>
          Florida Movers Direct is a free matching service, not a moving company, and we do not
          verify licenses for you. For a move inside Florida, ask for the mover's registration
          number and confirm it through the{" "}
          <a href="https://www.fdacs.gov/Business-Services/Moving-Companies" rel="noopener">
            FDACS moving services page
          </a>
          . For a move back north, look up the carrier's USDOT number on{" "}
          <a href="https://safer.fmcsa.dot.gov/" rel="noopener">FMCSA SAFER</a> and get a written
          estimate. Our{" "}
          <Link to="/how-to-verify-florida-mover-license/">Florida mover license check guide</Link>{" "}
          walks through both lookups.
        </p>
      </ProseSection>
      <ProseSection title="Nearby Cities and Services for a Naples Move" bg="bg-surface-alt">
        <p>
          Collier County crews bill by the hour like the rest of the state — our{" "}
          <Link to="/local-movers-in-florida/">Florida local moving rate guide</Link> shows what each
          crew size realistically costs, and{" "}
          <Link to="/long-distance-movers/">long-distance moving quotes</Link> explain how pricing
          changes once the truck leaves Florida.
        </p>
        <p>
          Comparing the coast? Look at{" "}
          <Link to="/movers-in-boca-raton/">Boca Raton condo movers</Link> across Alligator Alley and{" "}
          <Link to="/movers-in-miami/">Miami moving companies</Link> for Miami-Dade rates, or head up
          the Gulf Coast to{" "}
          <Link to="/movers-in-sarasota/">Sarasota, Bradenton and Lakewood Ranch movers</Link>. Seasonal
          residents often pair a move with{" "}
          <Link to="/storage-solutions/">climate-controlled storage in Florida</Link>, and
          white-glove households usually add{" "}
          <Link to="/packing-services/">fragile packing and custom crating</Link>.
        </p>
      </ProseSection>
      <Faq faqs={FAQS} />
    </>
  );
}
