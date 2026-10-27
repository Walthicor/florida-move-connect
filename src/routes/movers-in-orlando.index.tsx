import { createFileRoute, Link } from "@tanstack/react-router";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
import { PageEstimateNote } from "@/components/site/PageBlocks";
import { ProseSection, SubBlock, CardGrid, CheckList } from "@/components/site/ContentSections";
import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { ArrowRight, ShieldCheck, ChevronDown, DollarSign, Building2, MapPin, Route as RouteIcon, Music } from "lucide-react";

export const Route = createFileRoute("/movers-in-orlando/")({
  head: () => pageHead({
    path: "/movers-in-orlando/",
    title: "Orlando Movers | Compare Licensed Moving Companies",
    description: "Compare licensed Orlando movers for local, apartment, commercial and long-distance moves in Central Florida. Free quotes, no obligation.",
    service: { serviceType: 'Moving Services', areaServed: 'Orlando, Florida' },
    faqs: FAQS,
  }),
  component: OrlandoPage,
});

const COSTS = [
  { size: "Studio / 1BR", hrs: "3-4 hrs", price: "$400-$750" },
  { size: "2 Bedroom", hrs: "4-6 hrs", price: "$600-$1,000" },
  { size: "3 Bedroom", hrs: "6-8 hrs", price: "$750-$1,300" },
  { size: "4+ Bedroom", hrs: "8-10 hrs", price: "$1,200-$2,200" },
];

const LOCAL = [
  {
    t: "I-4 rush hours",
    d: "I-4 runs straight through the metro, from Kissimmee and the attractions through downtown to Altamonte Springs, and it crawls during the morning and evening commutes. Crews that know Orlando start early and quote realistic drive times between neighborhoods. Some route over SR 408, SR 417 or SR 429 instead — ask whether tolls are included in the quote.",
  },
  {
    t: "The tourist-corridor factor",
    d: "Moves near International Drive, Lake Buena Vista or the theme parks can lose an hour to park traffic on the wrong day. Holiday weeks, spring break and big convention or event days are the worst. Experienced Orlando crews schedule those zones early in the morning and route around event days.",
  },
  {
    t: "The month-end squeeze",
    d: "Orlando is one of Florida's biggest renter markets, so the last few days of every month book out fast. If your lease turns over at month-end, book 3-4 weeks ahead — or negotiate a few days of overlap mid-month, which typically quotes lower and gives you more crews to choose from.",
  },
  {
    t: "Summer storm strategy",
    d: "From June through September, afternoon thunderstorms roll through Central Florida almost daily, and lightning stops loading on an open ramp while the clock keeps running. A 7-8 AM start beats both the heat and the storms. June through November is also Atlantic hurricane season, so keep a backup date in mind.",
  },
];

const AREAS = [
  {
    t: "Downtown Orlando",
    d: "High-rise apartments and condos with loading docks, freight-elevator reservations and certificate-of-insurance requirements. Event nights at the downtown arena and stadium jam the streets — check the calendar before you pick a date.",
  },
  {
    t: "Lake Nona",
    d: "Master-planned neighborhoods and newer apartment buildings in southeast Orlando near the airport. Expect HOA rules on truck parking and move hours, and new-construction closing dates that can slip.",
  },
  {
    t: "Winter Park",
    d: "Brick streets, mature oaks and older homes on tight lots. A large truck may not fit every street or driveway, so crews sometimes park farther away and carry or shuttle the load.",
  },
  {
    t: "Dr. Phillips",
    d: "Larger homes and gated communities in southwest Orlando, close to Sand Lake Road and International Drive traffic. Register the crew at the gate in advance and plan an early start.",
  },
  {
    t: "Baldwin Park",
    d: "Built on the former Naval Training Center site, with townhomes, rear-alley garages and narrow streets. Confirm whether the truck loads from the alley or the street before move day.",
  },
  {
    t: "College Park",
    d: "Historic bungalows near Edgewater Drive with narrow driveways, front steps and tight interior turns. Mention doorway widths and stairs if you are moving large furniture.",
  },
  {
    t: "Kissimmee",
    d: "Osceola County, along the US-192 tourist corridor, with many vacation-home and resort communities that require vendor registration at the gate. Holiday-week traffic near the parks adds drive time.",
  },
  {
    t: "Winter Garden",
    d: "Fast-growing west Orange County, including new-construction neighborhoods in Horizon West. SR 429 access is good, but builder closing dates move — confirm yours before you lock in a crew.",
  },
  {
    t: "Oviedo and the UCF area",
    d: "East-side apartments and family homes in Seminole and east Orange County. Student-housing turnover around the August semester start and the May semester end fills crew calendars quickly.",
  },
];

const ROUTES = [
  "Orlando to Miami (235 mi): $900-$1,600 for a 1BR, same-day standard.",
  "Orlando to Tampa (85 mi): often same-day round trip; priced as intrastate distance moves.",
  "Orlando to out of state: FMCSA-registered carriers on our long distance movers page.",
];

const FAQS = [
  { q: "How much do movers cost in Orlando?", a: "As typical estimates, $400-$750 for a 1-bedroom and $750-$1,300 for 2-3 bedrooms, at $90-$140 per hour for two movers — slightly below Miami and Tampa for equivalent crews. Stairs, long carries and I-4 drive time are what move the final number." },
  { q: "How far ahead should I book Orlando movers?", a: "2-3 weeks for mid-month dates and 4+ weeks for month-end. Orlando's rental market makes the last days of the month one of the tightest booking windows in Florida." },
  { q: "Do Orlando movers handle apartment complexes?", a: "Yes — leasing-office coordination, breezeway carries and third-floor walk-ups are routine work for the licensed movers we match you with. Tell each mover the floor, whether there is an elevator and the complex name for an accurate quote." },
  { q: "What is the best time of day to move in Orlando?", a: "Early morning. A 7-8 AM start gets the truck loaded before I-4 traffic peaks and, in summer, before the afternoon thunderstorms arrive." },
  { q: "Is a move from Orlando to Tampa a local move?", a: "No. At roughly 85 miles it falls outside the local band of about 50 miles, so it is priced as an intrastate distance move by inventory and mileage rather than by the hour. The mover still needs a Florida FDACS registration." },
  { q: "Do Orlando movers cover Kissimmee, Winter Garden and Oviedo?", a: "Yes. Local crews cover Orange, Osceola and Seminole counties, from Kissimmee and Winter Garden to Oviedo, Altamonte Springs and Lake Nona. Moves inside the metro bill hourly; only the drive time changes." },
  { q: "How do I check that an Orlando mover is licensed?", a: "For a move inside Florida, ask for the mover's FDACS registration number and confirm it with the Florida Department of Agriculture and Consumer Services. For a move out of state, look up the USDOT number on FMCSA SAFER." },
  { q: "What should I tell Orlando movers to get an accurate quote?", a: "Both full addresses, the floor and elevator situation at each end, gate or HOA rules, and any oversized items such as a piano, safe or sectional. Those details decide crew size and hours." },
];

function OrlandoPage() {
  return (
    <>
      <Hero />
      <NetworkDisclosure />
      <CostTable />
      <LocalKnowledge />
      <ApartmentRules />
      <Neighborhoods />
      <RoutesBlock />
      <SpecialtySection />
      <VerifySection />
      <ProseSection title="Related Moving Services in Central Florida" bg="bg-surface-alt">
        <p>
          Orlando crews price the same way as the rest of the state — hourly, by crew size — which
          our <Link to="/local-movers-in-florida/">Florida local moving rate guide</Link> breaks down
          scenario by scenario. If the move crosses a state line, compare{" "}
          <Link to="/long-distance-movers/">long-distance moving quotes and delivery windows</Link>{" "}
          instead.
        </p>
        <p>
          Nearby markets worth comparing: <Link to="/movers-in-tampa/">Tampa moving companies</Link>{" "}
          across I-4, <Link to="/movers-in-ocala/">Ocala movers in Marion County</Link> and{" "}
          <Link to="/movers-in-jacksonville/">Jacksonville movers on the First Coast</Link>. For a
          downtown high-rise or a Lake Nona apartment complex, see{" "}
          <Link to="/apartment-movers/">apartment and condo moving requirements</Link>, and{" "}
          <Link to="/piano-movers-orlando/">Orlando piano movers</Link> for studio and church
          instruments.
        </p>
      </ProseSection>
      <Faq />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
      <div className="container-page py-14 md:py-20 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          <ShieldCheck className="h-3.5 w-3.5" />
          Licensed Orlando Movers
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Movers in <span className="text-brand">Orlando</span>, Florida
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Orlando movers typically charge $90-$140 per hour for a two-mover crew with a truck — about $400-$750 for a 1-bedroom and $750-$1,300 for a 2-3 bedroom home, as typical estimates rather than quotes. Those are some of the most affordable big-city rates in Florida. What Orlando adds is timing: I-4 rush hours, tourist-corridor traffic, afternoon summer storms and heavy month-end rental turnover. Compare free quotes from up to four licensed movers in Orlando, FL who plan around all of it.
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
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">How Much Do Movers Cost in Orlando?</h2>
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
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Every Orlando quote is built from the same three pieces: crew size, hours on the job and
            the drive between addresses. Two movers handle most studios and 1-bedroom apartments; a
            3-bedroom house usually needs three or four, which raises the hourly rate but shortens
            the day.
          </p>
          <p>
            The Orlando-specific factors that most often add billable time are third-floor walk-ups
            in garden-style apartment complexes, long carries from a distant parking lot to the
            unit, and cross-metro drives — Winter Garden to Oviedo, for example — during I-4 rush
            hour. Ask each mover whether the quote includes travel time, stair charges and any toll
            roads on the route.
          </p>
        </div>
      </div>
    </section>
  );
}

function LocalKnowledge() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Local Knowledge</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">When Is the Best Time to Move in Orlando?</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Mid-month, midweek and early in the morning. Four local patterns explain why timing
            changes the price of an Orlando move more than distance does.
          </p>
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

function ApartmentRules() {
  return (
    <ProseSection
      eyebrow="Apartment moves"
      title="What Do Orlando Apartment Complexes Require on Moving Day?"
      bg="bg-background"
    >
      <p>
        A large share of Orlando lives in garden-style complexes — three-story buildings with
        breezeway stairs and no elevator — plus a growing number of mid-rise and high-rise towers
        downtown and in Lake Nona. Either way, the property sets rules your mover has to follow.
      </p>
      <CheckList
        items={[
          <>
            <strong className="text-ink">Reserve the date with the leasing office.</strong> Many
            complexes limit moves to office hours or weekdays and want notice in advance.
          </>,
          <>
            <strong className="text-ink">Certificate of insurance.</strong> Towers and many managed
            communities want a COI naming the property before the crew starts. Ask each mover for
            one while you are still comparing quotes.
          </>,
          <>
            <strong className="text-ink">Elevator or breezeway?</strong> Tell the mover the floor
            and whether there is an elevator. A third-floor walk-up adds carry time to every heavy
            item.
          </>,
          <>
            <strong className="text-ink">Truck parking and gate codes.</strong> Ask where a 26-foot
            truck can park and share the gate code. A long walk from the lot to the unit is
            billable time.
          </>,
        ]}
      />
      <p>
        Our{" "}
        <Link to="/apartment-movers/">Florida apartment and condo moving guide</Link> covers
        stair pricing, COIs and elevator reservations in more detail.
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
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Which Orlando Neighborhoods and Nearby Areas Do Movers Cover?</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            An Orlando move changes character from one side of the metro to the other. Here is what
            local crews watch for in the areas where most moves happen.
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
          — plus MetroWest, Waterford Lakes, Altamonte Springs and the rest of the greater
          Orange-Osceola-Seminole area.
        </p>
      </div>
    </section>
  );
}

function RoutesBlock() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Routes</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Is a Move From Orlando to Tampa or Miami Still Local?</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Not usually. Moves within roughly 50 miles are billed hourly as local moves. Beyond that,
          a move inside Florida becomes an intrastate distance move priced by inventory and
          mileage, and any move that crosses a state line needs a carrier with FMCSA operating
          authority and a USDOT number.
        </p>
        <ul className="mt-8 space-y-4">
          {ROUTES.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-soft">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand flex-shrink-0">
                <RouteIcon className="h-4 w-4" />
              </span>
              <span className="text-sm md:text-base text-ink leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SpecialtySection() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Specialty items</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Who Moves Pianos and Specialty Items in Orlando?</h2>
        <div className="mt-6 rounded-2xl border border-border bg-gradient-to-br from-white to-surface-alt p-6 md:p-8 shadow-card">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cta/10 text-cta flex-shrink-0">
              <Music className="h-6 w-6" />
            </span>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed [&_a]:font-semibold [&_a]:text-brand hover:[&_a]:underline">
              <p>
                A household crew and a piano crew need different equipment. Uprights and grands
                travel on a skid board with a trained team, so mention any piano, safe or pool table
                in your quote request. For the instrument itself, see our page on{" "}
                <Link to="/piano-movers-orlando/">piano movers in Orlando</Link>.
              </p>
              <p>
                Artwork, mirrors and glass tabletops belong in proper cartons or crates — add{" "}
                <Link to="/packing-services/">professional packing for fragile items</Link> to the
                quote. If your closing date and move-in date do not line up,{" "}
                <Link to="/storage-solutions/">storage-in-transit options in Florida</Link> keep the
                load with the mover instead of being handled twice. Relocating an office along the
                I-4 corridor? <Link to="/commercial-movers/">Commercial moving services</Link> plan
                after-hours and weekend work to avoid downtime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VerifySection() {
  return (
    <ProseSection eyebrow="Verify before you book" title="How Do You Verify an Orlando Moving Company?" bg="bg-background">
      <p>
        Florida Movers Direct is a free matching service — we are not a moving company and we do
        not verify licenses on your behalf. Checking takes a few minutes; do it before you pay any
        deposit.
      </p>
      <CardGrid>
        <SubBlock title="Moves inside Florida: FDACS">
          <p>
            Florida requires household movers working inside the state to register with the
            Florida Department of Agriculture and Consumer Services. Ask for the registration number
            and confirm it through the{" "}
            <a href="https://www.fdacs.gov/Business-Services/Moving-Companies" rel="noopener">
              FDACS moving services page
            </a>
            .
          </p>
        </SubBlock>
        <SubBlock title="Moves out of state: FMCSA / USDOT">
          <p>
            Leaving Florida? Look up the mover's USDOT number on{" "}
            <a href="https://safer.fmcsa.dot.gov/" rel="noopener">FMCSA SAFER</a> to check its
            operating status. FMCSA's{" "}
            <a href="https://www.fmcsa.dot.gov/protect-your-move" rel="noopener">Protect Your Move</a>{" "}
            page explains your rights on an interstate move.
          </p>
        </SubBlock>
        <SubBlock title="How our matching works">
          <p>
            You describe the move once; up to four independent licensed Orlando movers in our
            network contact you with quotes. Compare them, verify each one and hire whoever you
            prefer — or no one. It is free, with no obligation.
          </p>
        </SubBlock>
        <SubBlock title="Get it in writing">
          <p>
            A written estimate, the COI your complex requests and the mover's registration number
            should all be in hand before move day. Our{" "}
            <Link to="/how-to-verify-florida-mover-license/">guide to checking a Florida mover license</Link>{" "}
            walks through both lookups step by step.
          </p>
        </SubBlock>
      </CardGrid>
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
