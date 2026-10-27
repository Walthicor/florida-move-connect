import { createFileRoute, Link } from "@tanstack/react-router";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
import { PageEstimateNote } from "@/components/site/PageBlocks";
import { ProseSection, SubBlock, CardGrid, CheckList } from "@/components/site/ContentSections";
import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { ArrowRight, ShieldCheck, ChevronDown, DollarSign, Building2, MapPin, Music, Boxes } from "lucide-react";

export const Route = createFileRoute("/movers-in-tampa/")({
  head: () => pageHead({
    path: "/movers-in-tampa/",
    title: "Tampa Movers | Compare Local Moving Companies in Tampa FL",
    description: "Need a moving company in Tampa? Compare up to 4 licensed Tampa movers for local, apartment, small-job and long-distance moves. Free quotes, no obligation.",
    service: { serviceType: 'Moving Services', areaServed: 'Tampa, Florida' },
    faqs: FAQS,
  }),
  component: TampaPage,
});

const COSTS = [
  { size: "Studio / 1BR", hrs: "3-4 hrs", price: "$400-$800" },
  { size: "2 Bedroom", hrs: "4-6 hrs", price: "$650-$1,100" },
  { size: "3 Bedroom", hrs: "6-8 hrs", price: "$800-$1,400" },
  { size: "4+ Bedroom", hrs: "8-10 hrs", price: "$1,300-$2,400" },
];

const LOCAL = [
  {
    t: "I-275 and I-4 congestion",
    d: "Tampa's two main corridors decide your timeline. I-275 backs up from Carrollwood through downtown at rush hour, and the I-4 interchange near Ybor City is one of the region's worst bottlenecks. Crews that know Tampa quote realistic drive times between neighborhoods instead of straight-line miles.",
  },
  {
    t: "The bay crossing rule",
    d: "South Tampa to St. Petersburg is only about 25 miles — across the Howard Frankland or Gandy bridges, which become parking lots at peak times. Experienced crews schedule bay crossings before 7 AM or after 7 PM on hourly jobs. That one scheduling choice can save $150-$300.",
  },
  {
    t: "Summer storm strategy",
    d: "July-September brings near-daily afternoon downpours that can shut a loading dock for an hour while the clock runs. Reputable Tampa crews start 7-8 AM to beat both the heat and the rain.",
  },
  {
    t: "Apartment move-in rules",
    d: "Large Tampa apartment communities — especially in New Tampa, Westshore and the USF area — often require a certificate of insurance, a reserved freight elevator or a loading-zone permit before the truck doors open. Some restrict moves to weekdays or specific hours. Tell your mover the community name at the time of quoting so the paperwork is ready before moving day.",
  },
];

const AREAS = [
  {
    t: "South Tampa",
    d: "Older bungalows in Hyde Park and Virginia Park mean narrow driveways, mature oaks and on-street parking. Crews often shuttle from the truck with dollies — mention if there's no alley access.",
  },
  {
    t: "Westshore",
    d: "High-rise apartments and condos near the airport and business district. Expect COI requirements, freight-elevator reservations and loading-dock time windows from building management.",
  },
  {
    t: "Downtown and Channelside",
    d: "Waterfront towers with strict dock schedules and security check-ins. Weekend moves may be limited; book the service elevator as soon as your date is set.",
  },
  {
    t: "Seminole Heights",
    d: "Historic craft homes with steep stairs, tight turns and porches that complicate large furniture. It pays to hire a crew used to pre-war floor plans rather than a crew from a newer suburb.",
  },
  {
    t: "New Tampa",
    d: "Subdivisions off Bruce B. Downs with HOA rules on truck parking and long drive times from central Tampa. Confirm where the truck can stage before move day.",
  },
  {
    t: "Brandon and Riverview",
    d: "Fast-growing suburbs south and east of the city. Mostly single-family homes with driveway access, but new construction often lacks paved driveways — crews may pad the truck path.",
  },
  {
    t: "Wesley Chapel",
    d: "Far north on I-75 with gated communities that require guest registration for movers. Longer transit times mean the hourly clock starts earlier — an early start keeps the bill down.",
  },
];

const FAQS = [
  { q: "How much do movers cost in Tampa?", a: "$400-$800 for a 1-bedroom, $800-$1,400 for a 2-3 bedroom home, at hourly rates of $95-$150 for two movers — typically below Miami for the identical job, though estimates vary by home size and access." },
  { q: "Are there movers in Tampa for small jobs?", a: "Yes. Many local Tampa movers take single-item, partial-load and studio jobs, billed hourly at about $95-$150 for two movers plus a minimum number of hours that varies by company. Ask each mover for its minimum and how travel time is billed before you book." },
  { q: "How do I check a Tampa moving company's license?", a: "For a move that stays inside Florida, ask for the company's FDACS registration number and look it up with the Florida Department of Agriculture and Consumer Services. For a move leaving Florida, check its USDOT number in the FMCSA SAFER system. Make sure the name and number match your written estimate." },
  { q: "Do Tampa movers cover Brandon, Riverview and Wesley Chapel?", a: "Yes. Local Tampa moving companies serve the suburbs east and south of the city, like Brandon and Riverview, and north along I-75 to Wesley Chapel. Moves inside the metro are billed hourly like any local move; only the drive time changes." },
  { q: "When is the best time to schedule a Tampa move?", a: "Early morning, mid-month, on a weekday. In summer, a 7-8 AM start beats the heat and the daily storms; if crossing the bay, avoid 7-9 AM and 4-7 PM bridge traffic." },
  { q: "Do Tampa movers cover St. Petersburg and Clearwater?", a: "Yes — Pinellas County is standard territory. Cross-bay moves bill the same hourly rates; only the drive time differs, which smart scheduling minimizes." },
  { q: "Do Tampa buildings require a certificate of insurance?", a: "Channelside, downtown and most Westshore-area towers do, and many large apartment communities in New Tampa and the USF area ask for one too. The association or property manager wants the COI on file before the service elevator is released, so send it over as soon as your date is set." },
  { q: "Can Tampa movers store my things between leases?", a: "Many Tampa movers partner with local storage facilities or offer container storage, which is useful when closing dates don't line up. Tell us you need storage in the quote form and movers will include it in their quotes. See our storage solutions page for the options." },
  { q: "How far ahead should I book movers in Tampa?", a: "One to two weeks off-season is usually enough. For summer, month-end dates or any move needing a reserved elevator, give it three to four weeks." },
  { q: "What should I tell my Tampa mover before move day?", a: "Building or community names, elevator or dock reservation details, stairs, and anything oversized like a piano or safe. Tampa access varies a lot between a Channelside high-rise and a Seminole Heights bungalow — the details change the crew size and the price." },
];

function TampaPage() {
  return (
    <>
      <Hero />
      <NetworkDisclosure />
      <CostTable />
      <SmallMoves />
      <LocalKnowledge />
      <BuildingMoves />
      <FurnitureMoves />
      <Neighborhoods />
      <NearbyCities />
      <PianoCard />
      <StorageSection />
      <VerifySection />
      <Faq />
      <RelatedLinks />
      <BottomCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
      <div className="container-page py-14 md:py-20 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          <ShieldCheck className="h-3.5 w-3.5" />
          Licensed Tampa Movers
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Movers in <span className="text-brand">Tampa</span>, FL
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Tampa movers typically charge $95-$150 per hour for a two-mover crew, which puts most local moves at an estimated $400-$800 for a 1-bedroom and $800-$1,400 for a 2-3 bedroom home. Florida Movers Direct is not a moving company: one free form gets you quotes from up to four independent, licensed moving companies in Tampa. Tampa Bay has its own moving logic — a bay that splits the metro, the I-275 and I-4 corridors, and daily summer storms. Crews in our network plan around all three, from South Tampa apartments to new homes in Riverview and Wesley Chapel.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Free Quotes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CostTable() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Pricing</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">How Much Do Local Movers in Tampa Charge?</h2>
          <p className="mt-3 text-muted-foreground">
            Local movers in Tampa bill by the hour. A two-mover crew with a truck typically runs
            $95-$150 per hour, and larger homes add a third or fourth mover. The ranges below are
            typical estimates for a move inside Hillsborough County, not quotes.
          </p>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Home Size</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Typical Time</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Price Range</th>
              </tr>
            </thead>
            <tbody>
              {COSTS.map((r, i) => (
                <tr key={r.size} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.size}</td>
                  <td className="px-6 py-4 text-ink">{r.hrs}</td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.price}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sm:hidden divide-y divide-border">
            {COSTS.map((r) => (
              <div key={r.size} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.size}</div>
                <dl className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Time</dt>
                    <dd className="font-semibold text-ink">{r.hrs}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Price</dt>
                    <dd className="font-semibold text-ink">{r.price}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
        <PageEstimateNote />
      </div>
    </section>
  );
}

function SmallMoves() {
  return (
    <ProseSection
      eyebrow="Small and urgent jobs"
      title="Small Moves, Same-Day and Last-Minute Movers in Tampa"
      bg="bg-surface-alt"
    >
      <p>
        Yes, Tampa movers take small jobs. A studio apartment, a few rooms of furniture or a single
        load to a storage unit is billed the same way as a full house: by the hour, at about
        $95-$150 for two movers and a truck. The difference is the minimum. Each company sets its
        own minimum number of billable hours, so on a small job the minimum and the way travel time
        is billed matter more than the hourly rate.
      </p>
      <CheckList
        items={[
          <>
            <strong className="text-ink">Small moves:</strong> list every item, the floor number and
            whether there is an elevator. A short, accurate list lets a mover tell you up front
            whether the job fits inside its minimum.
          </>,
          <>
            <strong className="text-ink">Same-day movers:</strong> availability depends on whether a
            crew has an open slot that day. Mid-week mornings are usually easier to fill than a
            Friday or the last weekend of the month, when leases turn over across Tampa.
          </>,
          <>
            <strong className="text-ink">Last-minute moves:</strong> send photos, both addresses and
            any building rules right away. Towers in Channelside, downtown and Westshore still need
            a certificate of insurance and an elevator slot, even on short notice. Our guide to{" "}
            <Link to="/blog/$slug/" params={{ slug: "last-minute-movers-florida" }}>
              booking last-minute movers in Florida
            </Link>{" "}
            walks through what to send so quotes come back fast.
          </>,
          <>
            <strong className="text-ink">Labor only:</strong> if you already rented a truck or a
            portable container, you can hire a crew just to load or unload it. See how{" "}
            <Link to={"/moving-labor/" as "/"}>hourly moving labor in Florida</Link> is quoted and
            what it does not include.
          </>,
        ]}
      />
      <p>
        Whatever the size of the job, ask for the hourly rate, the minimum and any travel or
        materials fee in writing before the crew arrives.
      </p>
    </ProseSection>
  );
}

function LocalKnowledge() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Local Knowledge</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">What Affects the Price of a Tampa Move?</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {LOCAL.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Building2 className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuildingMoves() {
  return (
    <ProseSection
      eyebrow="Building moves"
      title="Apartment, Condo and Commercial Moves in Tampa"
      bg="bg-surface-alt"
    >
      <p>
        Tampa is a city of both extremes: waterfront high-rises downtown and in Westshore, and
        sprawling apartment communities from New Tampa to Brandon. Each type of building changes
        the job — and the crew you need.
      </p>
      <CheckList
        items={[
          <>
            <strong className="text-ink">Apartments and condos:</strong> freight-elevator
            reservations, COI filings and dock time windows are common in downtown towers and
            large communities. Our{" "}
            <Link to="/apartment-movers/" className="font-semibold text-brand hover:underline">
              apartment moving guide for Florida
            </Link>{" "}
            walks through what to arrange with your building before the truck arrives.
          </>,
          <>
            <strong className="text-ink">Offices and commercial spaces:</strong> moves out of the
            Westshore business district or downtown office towers usually need after-hours or
            weekend work to avoid downtime. See our{" "}
            <Link to="/commercial-movers/" className="font-semibold text-brand hover:underline">
              commercial moving services in Florida
            </Link>{" "}
            for how those jobs are planned and priced.
          </>,
        ]}
      />
    </ProseSection>
  );
}

function FurnitureMoves() {
  return (
    <ProseSection
      eyebrow="Single items"
      title="Furniture and Appliance Movers in Tampa"
      bg="bg-background"
    >
      <p>
        You do not need to book a full household move to get one sofa, a dresser or a new
        refrigerator across Tampa. Many local movers handle single pieces, store pickups and
        room-to-room rearranging on the same hourly terms, with the company minimum applying.
      </p>
      <CardGrid>
        <SubBlock title="Large furniture">
          <p>
            Sectionals, bed frames, armoires and dining tables often need to be taken apart to clear
            narrow doors and stair turns, which is common in older South Tampa and Seminole Heights
            homes. Tell the mover what needs disassembly so the crew brings the right tools.
          </p>
        </SubBlock>
        <SubBlock title="Appliances">
          <p>
            Refrigerators, washers and dryers are heavy and awkward on stairs. Ask whether the crew
            disconnects and reconnects them; water and gas connections usually need a qualified
            technician, and many movers only move the appliance itself.
          </p>
        </SubBlock>
      </CardGrid>
      <p>
        Measure doorways and the elevator before move day, and mention any glass, marble or
        oversized piece. Our page on{" "}
        <Link to={"/furniture-movers/" as "/"}>furniture movers for single items and heavy pieces</Link>{" "}
        explains how these jobs are priced and what to ask before you book.
      </p>
    </ProseSection>
  );
}

function Neighborhoods() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-5xl">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Coverage</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Which Tampa Neighborhoods and Nearby Areas Do Movers Cover?</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every Tampa neighborhood moves a little differently. Here is what local crews watch
            for in the areas we cover most.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <div key={a.t} className="rounded-2xl border border-border bg-white p-5 shadow-soft">
              <h3 className="flex items-center gap-2 font-display text-base font-bold text-ink">
                <MapPin className="h-4 w-4 shrink-0 text-brand" />
                {a.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          — plus Clearwater, Largo and St. Petersburg across the bay, and Temple Terrace and
          Carrollwood inside the city.
        </p>
      </div>
    </section>
  );
}

function NearbyCities() {
  return (
    <ProseSection
      eyebrow="Nearby cities"
      title="Movers Near Tampa: Brandon, Seffner, Wesley Chapel and St. Petersburg"
      bg="bg-background"
    >
      <p>
        Many moves start in Tampa and end a few exits away, or the other way around. Crews in our
        network often work both ends, but each nearby city has its own access rules, so each one has
        its own guide.
      </p>
      <p>
        <strong className="text-ink">Brandon:</strong> east of the city along SR-60 and I-75, with
        large apartment communities and established subdivisions. Compare{" "}
        <Link to={"/movers-in-brandon/" as "/"}>movers in Brandon, FL</Link> for local rates and HOA
        notes.
      </p>
      <p>
        <strong className="text-ink">Seffner:</strong> just north of Brandon along I-4. Crews that
        serve Brandon generally cover Seffner on the same hourly terms, so the{" "}
        <Link to={"/movers-in-brandon/" as "/"}>Brandon and Seffner moving guide</Link> is the place to
        start.
      </p>
      <p>
        <strong className="text-ink">Wesley Chapel:</strong> north on I-75 in Pasco County, where
        gated communities often require guest registration for the crew. See{" "}
        <Link to={"/movers-in-wesley-chapel/" as "/"}>Wesley Chapel movers and gated-community rules</Link>.
      </p>
      <p>
        <strong className="text-ink">St. Petersburg:</strong> across the bay in Pinellas County,
        where bridge traffic decides the schedule. Compare{" "}
        <Link to={"/movers-in-st-petersburg/" as "/"}>St. Petersburg moving companies</Link>.
      </p>
      <p>
        <strong className="text-ink">Riverview:</strong> south along US-301, with new-construction
        communities and builder closing dates. See{" "}
        <Link to="/movers-in-riverview/">movers in Riverview, FL</Link>.
      </p>
    </ProseSection>
  );
}

function PianoCard() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Specialty items</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Moving a Piano or Other Specialty Item?</h2>
        <div className="mt-6 rounded-2xl border border-border bg-gradient-to-br from-white to-surface-alt p-6 md:p-8 shadow-card">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cta/10 text-cta flex-shrink-0">
              <Music className="h-6 w-6" />
            </span>
            <div>
              <p className="text-base text-muted-foreground leading-relaxed">
                A household move and a piano move need different equipment. Mention any piano,
                safe or pool table in your quote request so the crew arrives ready. For the
                instrument itself, see our dedicated page on{" "}
                <Link to="/piano-movers-tampa/" className="font-semibold text-brand hover:underline">
                  piano movers in Tampa
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StorageSection() {
  return (
    <ProseSection
      eyebrow="Between homes"
      title="Storage Options in Tampa"
      bg="bg-background"
    >
      <p>
        Closing dates and lease start dates rarely line up perfectly, and in a growing metro like
        Tampa — where new construction in Wesley Chapel and Riverview moves on builder schedules —
        a gap of a few weeks is common. Many Tampa movers offer storage-in-transit or partner with
        local facilities, so your furniture moves once and stays handled.
      </p>
      <p>
        Compare the{" "}
        <Link to="/storage-solutions/" className="font-semibold text-brand hover:underline">
          moving and storage options available across Florida
        </Link>
        , or mention storage in your quote form so movers price the full job door to door.
      </p>
    </ProseSection>
  );
}

function VerifySection() {
  return (
    <ProseSection eyebrow="Verify before you book" title="How Do You Verify a Tampa Mover?" bg="bg-surface-alt">
      <p>
        Florida Movers Direct is a free matching service — we are not a moving company and we do
        not verify licenses on your behalf. Verifying takes two minutes and you should do it
        yourself before paying any deposit:
      </p>
      <CardGrid>
        <SubBlock title="Moves inside Florida: FDACS">
          <p>
            Ask for the mover's FDACS registration number (Florida requires it for intrastate
            household moves) and confirm it in the Florida Department of Agriculture's public
            license search.
          </p>
        </SubBlock>
        <SubBlock title="Moves out of state: FMCSA / USDOT">
          <p>
            For any move leaving Florida — a Tampa-to-Georgia relocation, for example — ask for
            the company's USDOT number and look it up on the FMCSA SAFER system to see its
            operating status and insurance filing.
          </p>
        </SubBlock>
        <SubBlock title="How our matching works">
          <p>
            You tell us about your move once; up to four independent licensed Tampa movers in our
            network contact you with quotes. You compare, verify each license, and hire whoever
            you prefer — or no one. It is free and there is no obligation.
          </p>
        </SubBlock>
        <SubBlock title="Get everything in writing">
          <p>
            A written estimate, the COI your building requests, and the mover's registration
            numbers should all be on paper before move day — especially in Tampa towers where the
            dock will not release an elevator without them.
          </p>
        </SubBlock>
      </CardGrid>
      <p>
        Start with the{" "}
        <a href="https://www.fdacs.gov/Business-Services/Moving-Companies" rel="noopener">
          FDACS moving services information
        </a>{" "}
        for Florida-only moves and the{" "}
        <a href="https://safer.fmcsa.dot.gov/" rel="noopener">
          FMCSA SAFER company lookup
        </a>{" "}
        for interstate carriers. Our step-by-step guide on{" "}
        <Link to="/how-to-verify-florida-mover-license/">how to check a Florida mover's license</Link>{" "}
        shows what to match between the registry and your estimate.
      </p>
    </ProseSection>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Frequently Asked Questions</h2>
        <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white shadow-soft">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display font-bold text-ink">{f.q}</span>
                  <ChevronDown className={"h-5 w-5 text-muted-foreground transition-transform " + (isOpen ? "rotate-180 text-brand" : "")} />
                </button>
                {isOpen && <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RelatedLinks() {
  return (
    <ProseSection title="Nearby Cities and Related Tampa Bay Services" bg="bg-surface-alt">
      <p>
        Every Tampa quote is built on the same hourly structure explained in our{" "}
        <Link to="/local-movers-in-florida/">Florida local moving rate guide</Link>, which also lists
        crew sizes and example scenarios by home size. Crossing a state line instead? Compare{" "}
        <Link to="/long-distance-movers/">interstate movers and binding estimate options</Link>.
      </p>
      <p>
        Along the I-4 corridor, compare{" "}
        <Link to="/movers-in-orlando/">Orlando moving companies</Link>; heading north, see{" "}
        <Link to="/movers-in-ocala/">Ocala movers in Marion County</Link>, or read our{" "}
        <Link to="/movers-in-the-villages/">guide to moving into The Villages</Link> for retirement
        community rules. Offices
        relocating downtown should start with{" "}
        <Link to="/commercial-movers/">after-hours commercial moving services</Link>.
      </p>
      <p>
        South of the city, compare{" "}
        <Link to="/movers-in-riverview/">Riverview and South Hillsborough moving rates</Link> for
        the new-construction communities off US-301, and{" "}
        <Link to="/movers-in-sarasota/">Sarasota, Bradenton and Lakewood Ranch movers</Link> further
        down I-75.
      </p>
    </ProseSection>
  );
}

function BottomCta() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 text-center max-w-2xl">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Boxes className="h-6 w-6" />
        </div>
        <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-ink">
          Compare Tampa Moving Quotes — Free
        </h2>
        <p className="mt-4 text-muted-foreground">
          One form, up to four licensed Tampa movers, no obligation. Verify each registration and
          choose the quote that fits your move — or no one.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Free Quotes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
