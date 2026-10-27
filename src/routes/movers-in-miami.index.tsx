import { createFileRoute, Link } from "@tanstack/react-router";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
import { pageHead } from "@/lib/seo";
import { ProseSection, SubBlock, CardGrid, CheckList } from "@/components/site/ContentSections";
import { PageEstimateNote } from "@/components/site/PageBlocks";
import { useState } from "react";
import { ArrowRight, ShieldCheck, ChevronDown, DollarSign, MapPin, Languages } from "lucide-react";

export const Route = createFileRoute("/movers-in-miami/")({
  head: () => pageHead({
    path: "/movers-in-miami/",
    title: "Miami Movers | Compare Licensed Moving Companies",
    description: "Compare licensed Miami movers for local, apartment, condo and long-distance moves across Miami-Dade. Request free moving quotes today.",
    service: { serviceType: 'Moving Services', areaServed: 'Miami, Florida' },
    faqs: FAQS,
  }),
  component: MiamiPage,
});

const COSTS = [
  { size: "Studio / 1BR", price: "$450-$900", detail: "$100-$160/hr, 2 movers" },
  { size: "2 Bedroom", price: "$700-$1,200", detail: "3 movers, 4-6 hrs" },
  { size: "3 Bedroom", price: "$850-$1,500", detail: "3-4 movers, 6-8 hrs" },
  { size: "High-rise / condo premium", price: "+$100-$300", detail: "Elevator + long carry time" },
];

const NEIGHBORHOODS: { name: string; detail: React.ReactNode }[] = [
  {
    name: "Brickell",
    detail: "High-rise corridor where every move runs through a loading dock and a reserved service elevator — COIs and weekday windows are non-negotiable.",
  },
  {
    name: "Downtown",
    detail: "Older towers plus new construction share narrow bays; crews familiar with Flagler and Biscayne dock schedules save billable time.",
  },
  {
    name: "Doral",
    detail: "Office parks and newer townhome communities with gated access; many complexes require vendor registration before move day.",
  },
  {
    name: "Coral Gables",
    detail: "Historic single-family streets with tree canopy and tight driveway approaches — parking staging matters more than distance here.",
  },
  {
    name: "Kendall",
    detail: "Sprawling suburban subdivisions where long driveway carries and cul-de-sac staging, not mileage, drive the clock.",
  },
  {
    name: "Miami Beach",
    detail: "Street-side loading is rarely permitted and 26-foot trucks often need a shuttle; expect dock windows and strict building schedules.",
  },
  {
    name: "Little Havana",
    detail: "Dense walk-ups and streets where large trucks cannot legally park — experienced crews plan shuttle runs in advance.",
  },
  {
    name: "Hialeah",
    detail: (
      <>
        One of the highest-volume cross-town moves in Miami-Dade, with dense multifamily buildings and
        predominantly Spanish-speaking households — see our{" "}
        <Link to="/movers-in-hialeah/" className="font-semibold text-brand hover:underline">
          guide to movers in Hialeah
        </Link>
        .
      </>
    ),
  },
];

const ROUTES = [
  "Miami to Orlando (235 mi): typically $900-$1,600 for a 1BR; same-day service standard.",
  "Miami to Tampa (280 mi): typically $1,000-$1,800 for a 1BR; next-day delivery common.",
];

type MiamiFaq = { q: string; a: string; link?: { to: string; label: string } };

const FAQS: MiamiFaq[] = [
  {
    q: "How much do movers cost in Miami?",
    a: "Typical local estimates: $450-$900 for studios and 1-bedrooms, $850-$1,500 for 2-3 bedroom homes, with hourly rates of $100-$160 for two movers. High-rises often add $100-$300 in elevator and carry time. These are typical ranges — only a written quote from a mover is binding.",
  },
  {
    q: "What is the hourly rate for movers in Miami?",
    a: "Local movers in Miami typically charge $100-$160 per hour for two movers and a truck, and each additional mover adds roughly $35-$50 per hour. Most set a three- or four-hour minimum. These are typical estimates; your written quote sets the actual rate.",
  },
  {
    q: "Do Miami movers take small jobs?",
    a: "Yes. Many Miami-Dade movers take studio moves, single furniture items and partial loads, billed hourly with a minimum that is commonly three or four hours. On a small job, compare the minimum and how travel time is billed, not just the hourly rate.",
    link: { to: "/blog/small-moves-hourly-movers-florida/", label: "How hourly movers price small moves in Florida" },
  },
  {
    q: "Are apartment and condo movers in Miami different?",
    a: "The crews are often the same, but condo moves add building requirements: a certificate of insurance, a reserved service elevator, a dock time window and sometimes a refundable deposit. Rental apartments add notice periods and walk-up stairs in older buildings. Tell each mover the building name so the quote reflects its rules.",
    link: { to: "/apartment-movers/", label: "Apartment and condo moving requirements in Florida" },
  },
  {
    q: "How do I compare moving companies in Miami without getting scammed?",
    a: "Get at least three written quotes from licensed movers, move mid-month on a weekday, and declutter first. Treat any bid far below the others as a red flag, not a bargain — lowball quotes are the classic setup for hostage-load scams in South Florida.",
  },
  {
    q: "Do Miami condo buildings require special arrangements?",
    a: "Almost always: a certificate of insurance (COI) from your mover, a reserved service elevator, weekday moving windows, and sometimes a refundable deposit of $250-$500. Book the elevator with your association the moment you have a date — peak-season slots go two to three weeks out.",
  },
  {
    q: "What is the cheapest time to move in Miami?",
    a: "Mid-month weekdays, especially October through April, are typically the lowest-priced slots. Month-end, weekends and summer Saturdays book up fastest and usually price highest. June through November is hurricane season, so keep a flexible backup date.",
  },
  {
    q: "Can one company handle my move from Miami to another Florida city?",
    a: "Yes — intrastate routes like Miami-Orlando and Miami-Tampa are core routes for long-distance carriers, priced by inventory or weight rather than by the hour. For anything leaving Florida, verify the carrier's USDOT number on the FMCSA website before paying a deposit.",
  },
  {
    q: "How do I confirm I am hiring licensed movers in Miami, FL?",
    a: "For moves inside Florida, ask for the mover's FDACS registration number and check it in the state's public database. For interstate moves, look up the company's USDOT number on the FMCSA SAFER system. A licensed mover will also produce an association-ready certificate of insurance on request.",
  },
  {
    q: "Do movers in Miami speak Spanish?",
    a: "Many do — Miami-Dade is majority Spanish-speaking, and most crews in our network offer bilingual service. If you prefer to compare quotes in Spanish, read the Spanish version of our Miami movers guide or note your preference on the quote form.",
  },
  {
    q: "How far in advance should I book Miami movers?",
    a: "Two to four weeks is a safe window for most local moves; longer for month-end, peak season or buildings with limited elevator slots. Last-minute bookings are often possible, but your choice of date and crew narrows.",
  },
];

function MiamiPage() {
  return (
    <>
      <Hero
        eyebrow="Licensed Miami Movers"
        h1={<>Movers in <span className="text-brand">Miami</span>, FL</>}
        intro="Miami movers typically charge $100-$160 per hour for two movers and a truck, so a local move runs an estimated $450-$900 for a studio or 1-bedroom and $850-$1,500 for a 2-3 bedroom home. Compare free quotes from licensed local movers in Miami in about 2 minutes — for apartments, condos, houses and offices across Miami-Dade. The difference between a smooth Miami move and a nightmare is a crew that knows the buildings: COIs in Brickell, elevator slots downtown, parking permits in Coconut Grove. Tell us your move details and get matched with Miami moving companies — no obligation."
      />
      <NetworkDisclosure />

      <CostTable title="How Much Do Movers Cost in Miami?" col2="Estimated Range" col3="Crew & Time" rows={COSTS} />

      <MiamiDadeCosts />

      <ProseSection eyebrow="Cost factors" title="What Affects the Price of a Miami Move?" bg="bg-background">
        <p>
          Local movers in Miami bill by the hour, not flat — typically $100-$160 per hour for two
          movers and a truck, with a third mover adding roughly $35-$50 per hour. Those hourly rates
          produce the home-size ranges in the table above. What actually decides your final number is
          access, and Miami has more access quirks per block than anywhere else in Florida:
        </p>
        <CheckList
          items={[
            "High-rises and elevator reservations — reserved service elevators, padded in timed blocks, add $100-$300 in elevator cycles and dock-to-unit carries.",
            "Traffic — I-95 and the 826 after 3 PM add billable hours to hourly jobs; early-morning starts are the norm for a reason.",
            "Parking — Little Havana, Coconut Grove and Miami Beach have streets where a 26-foot truck cannot legally park, so crews shuttle or pull temporary permits.",
            "Summer heat and hurricane season — October-April is cooler and typically lower-priced; June-November requires schedule flexibility and a backup date.",
            "Minimums and extras — most Miami movers set a three- or four-hour minimum, and materials, stairs and specialty items are separate line items. Get them quoted before move day, not after.",
          ]}
        />
        <p>
          Comparing quotes is the single biggest lever on what you pay. For statewide context, see our{" "}
          <Link to="/local-movers-in-florida/" className="font-semibold text-brand hover:underline">
            Florida local moving rate guide
          </Link>
          .
        </p>
      </ProseSection>

      <ProseSection eyebrow="Buildings" title="Condo and High-Rise Moves in Miami" bg="bg-surface-alt">
        <p>
          Condo movers in Miami work to the building's schedule. Brickell, Downtown, Edgewater and
          the beach towers all run the same basic system, and missing any part of it can cost you
          the day.
        </p>
        <CardGrid>
          <SubBlock title="Certificate of insurance (COI)">
            <p>
              Associations require a COI naming the association and management company as additional
              insured, with liability and workers' comp listed. Ask each mover how fast they send it —
              experienced Miami crews turn it around to your property manager within 24 hours.
            </p>
          </SubBlock>
          <SubBlock title="Elevator booking">
            <p>
              Service elevators are padded and reserved in timed blocks, commonly weekdays between
              9 AM and 4 PM. Season slots go two to three weeks ahead — book the elevator the same
              day you book the crew.
            </p>
          </SubBlock>
          <SubBlock title="Loading dock windows">
            <p>
              Most towers require the truck to use a dock or designated bay with a height limit — a
              26-foot trailer may not fit, which means a shuttle. Street-side loading is rarely
              permitted downtown or on Miami Beach.
            </p>
          </SubBlock>
          <SubBlock title="HOA rules and deposits">
            <p>
              Refundable damage deposits of $250-$500 are common, along with restrictions on holidays
              and weekends. Rental buildings run the same playbook — see{" "}
              <Link to="/apartment-movers/" className="font-semibold text-brand hover:underline">
                apartment and condo move requirements
              </Link>
              .
            </p>
          </SubBlock>
        </CardGrid>
      </ProseSection>

      <section className="bg-background">
        <div className="container-page py-16 md:py-20 max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Coverage</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Neighborhoods We Cover in Miami</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {NEIGHBORHOODS.map((n) => (
              <div key={n.name} className="rounded-xl border border-border bg-white p-5 shadow-soft">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand" />
                  <h3 className="font-display font-bold text-ink">{n.name}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">— and all of Miami-Dade County, from Aventura to Homestead.</p>
        </div>
      </section>

      <ProseSection eyebrow="Distance" title="Local vs. Long-Distance Moves From Miami" bg="bg-surface-alt">
        <p>
          Within Miami-Dade, your move is billed hourly. The moment you head for Orlando, Tampa or
          out of state, pricing changes to inventory or weight, and the paperwork changes with it —
          intrastate movers register with FDACS, interstate carriers with FMCSA.
        </p>
        <CheckList items={ROUTES} />
        <p>
          For interstate pricing, delivery windows and binding estimates, see our{" "}
          <Link to="/long-distance-movers/" className="font-semibold text-brand hover:underline">
            long-distance movers guide for Florida
          </Link>
          . Need a gap between move-out and move-in?{" "}
          <Link to="/storage-solutions/" className="font-semibold text-brand hover:underline">
            Moving and storage options in Florida
          </Link>{" "}
          covers short-term and climate-controlled choices.
        </p>
      </ProseSection>

      <ProseSection eyebrow="Apartments" title="Apartment Movers in Miami" bg="bg-background">
        <p>
          Apartment movers in Miami deal with the same building machinery as condos — COIs,
          elevator slots, deposits — plus tight stairwells in older walk-ups in Little Havana and
          Coconut Grove. Smaller inventory does not always mean a smaller bill when access is the
          bottleneck, so describe stairs, floor number and parking when you request quotes.
        </p>
        <p>
          Our{" "}
          <Link to="/apartment-movers/" className="font-semibold text-brand hover:underline">
            apartment moving guide for Florida
          </Link>{" "}
          walks through deposits, notice periods and how to keep a one-bedroom move inside a
          four-hour minimum.
        </p>
      </ProseSection>

      <section className="bg-navy text-navy-foreground">
        <div className="container-page py-14 max-w-3xl">
          <div className="flex items-center gap-2">
            <Languages className="h-5 w-5 text-brand" />
            <h2 className="font-display text-2xl md:text-3xl font-bold">Can You Get Help in Spanish?</h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-navy-foreground/90">
            Prefer to compare quotes in Spanish? Most crews in our Miami-Dade network offer
            bilingual service. Read the{" "}
            <Link to="/es/movers-in-miami/" className="font-semibold text-brand hover:underline">
              Spanish version of our Miami movers guide
            </Link>{" "}
            or note your language preference on the quote form.
          </p>
        </div>
      </section>

      <ProseSection eyebrow="Verify before you book" title="How Do You Verify a Miami Mover?" bg="bg-background">
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
              Ask for the company's USDOT number and look it up on the FMCSA SAFER system — you will
              see its operating status, insurance filing and complaint history.
            </p>
          </SubBlock>
          <SubBlock title="How our matching works">
            <p>
              You tell us about your move once; up to four independent licensed movers in our
              network contact you with quotes. You compare, verify each license, and hire whoever
              you prefer — or no one. It is free and there is no obligation.
            </p>
          </SubBlock>
          <SubBlock title="Get everything in writing">
            <p>
              A binding written estimate, the COI for your building, and the mover's registration
              numbers should all be on paper before move day. Any mover who refuses written terms is
              telling you something.
            </p>
          </SubBlock>
        </CardGrid>
      </ProseSection>

      <ProseSection eyebrow="Nearby" title="Nearby Cities and Miami Specialty Moves" bg="bg-surface-alt">
        <p>
          Staying in South Florida? Compare{" "}
          <Link to="/movers-in-hialeah/">Hialeah moving companies</Link> and{" "}
          <Link to="/movers-in-boca-raton/">Boca Raton condo movers</Link> in Palm Beach County, or
          cross the state to <Link to="/movers-in-naples/">Naples movers on the Gulf coast</Link>.
          For the hourly rate structure behind every quote, see our{" "}
          <Link to="/local-movers-in-florida/">Florida local moving rate guide</Link>.
        </p>
        <p>
          Households with an instrument should start with{" "}
          <Link to="/piano-movers-miami/">Miami piano movers and high-rise staging</Link>, and
          business relocations in Brickell or Doral with{" "}
          <Link to="/commercial-movers/">after-hours commercial moving services</Link>.
        </p>
      </ProseSection>

      <Faq faqs={FAQS} />

      <section className="bg-surface-alt">
        <div className="container-page py-16 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Compare Miami Moving Quotes — Free</h2>
          <p className="mt-4 text-muted-foreground">
            One form, up to four licensed Miami movers, no obligation. Verify each one and choose the
            quote that fits your move.
          </p>
          <div className="mt-7">
            <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
              Get Free Quotes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const DADE_RATES = [
  { item: "Two movers + truck", price: "$100-$160/hr", note: "Base rate for most apartments, condos and small homes" },
  { item: "Each additional mover", price: "+$35-$50/hr", note: "Common on 2-3 bedroom homes and long carries" },
  { item: "Minimum booking", price: "3-4 hours", note: "Set by each company; applies even if the job is shorter" },
  { item: "High-rise / condo access", price: "+$100-$300", note: "Elevator cycles and dock-to-unit carry time" },
  { item: "Building move deposit", price: "$250-$500", note: "Refundable, paid to the association, not the mover" },
];

function MiamiDadeCosts() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Miami-Dade rates</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          How Much Do Local Movers Cost in Miami-Dade County?
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground [&_a]:font-semibold [&_a]:text-brand hover:[&_a]:underline">
          <p>
            Local movers in Miami-Dade County typically charge $100-$160 per hour for two movers and
            a truck, which works out to an estimated $450-$900 for a studio or 1-bedroom and
            $850-$1,500 for a 2-3 bedroom home. The line items below are what build that total.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Line Item</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Typical Range</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">What It Covers</th>
              </tr>
            </thead>
            <tbody>
              {DADE_RATES.map((r, i) => (
                <tr key={r.item} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.item}</td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.price}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-ink">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sm:hidden divide-y divide-border">
            {DADE_RATES.map((r) => (
              <div key={r.item} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.item}</div>
                <dl className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Typical Range</dt>
                    <dd className="font-semibold text-ink">{r.price}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Covers</dt>
                    <dd className="text-right text-ink">{r.note}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
        <PageEstimateNote />

        <div className="mt-10 space-y-4 text-base leading-relaxed text-muted-foreground [&_a]:font-semibold [&_a]:text-brand hover:[&_a]:underline">
          <h3 className="font-display text-xl md:text-2xl font-bold text-ink">How Miami hourly rates work</h3>
          <p>
            The clock usually starts when the crew arrives at your first address and stops when the
            last item is placed. Many Miami movers also bill travel time from their base or a flat
            trip fee, so ask how that is handled. Because the rate is hourly, anything that slows the
            crew down — a long walk from the dock, a shared elevator, a truck that cannot park — shows
            up on the bill, even if your inventory is small.
          </p>

          <h3 className="pt-2 font-display text-xl md:text-2xl font-bold text-ink">Why Miami-Dade jobs cost more</h3>
          <CheckList
            items={[
              <>
                <strong className="text-ink">Condo COIs:</strong> most associations want a certificate
                of insurance naming the building before the elevator is released. A mover that cannot
                produce one quickly can cost you your date.
              </>,
              <>
                <strong className="text-ink">Elevator windows:</strong> service elevators are booked in
                fixed blocks, often weekdays only. If the job runs past the window, you may need a
                second day, and a second trip.
              </>,
              <>
                <strong className="text-ink">Parking:</strong> on Miami Beach, in Brickell and in
                older neighborhoods, a full-size truck often cannot stop at the door. Shuttling with a
                smaller vehicle or carrying from a distant dock adds hours.
              </>,
              <>
                <strong className="text-ink">Toll roads:</strong> cross-county routes often use tolled
                expressways such as SR 836 (the Dolphin Expressway) and Florida's Turnpike. Ask whether
                tolls are billed as a line item or built into the travel charge.
              </>,
              <>
                <strong className="text-ink">Bridges to Miami Beach:</strong> every Beach move crosses
                a causeway, such as the MacArthur or Julia Tuttle, and causeway traffic or a drawbridge
                opening on some routes can stall a crew while the clock runs. Early starts help.
              </>,
            ]}
          />

          <h3 className="pt-2 font-display text-xl md:text-2xl font-bold text-ink">
            Small jobs and cheap local movers in Miami-Dade
          </h3>
          <p>
            The cheapest Miami move is usually the one that fits neatly inside the mover's minimum.
            For a studio, a few pieces of furniture or a partial load, list every item, give the
            floor number and parking situation, and book a mid-month weekday morning. Ask each
            company for its minimum, its travel charge and whether it can combine your job with
            another nearby, then compare the written totals rather than the hourly rate alone.
          </p>
          <p>
            Be wary of any bid far below the others: very low quotes are a common setup for added
            charges on move day. Our guide to{" "}
            <Link to="/blog/$slug/" params={{ slug: "small-moves-hourly-movers-florida" }}>
              small moves and hourly movers in Florida
            </Link>{" "}
            explains how minimums work, and if you only need hands to load a rented truck, see{" "}
            <Link to={"/moving-labor/" as "/"}>hourly moving labor without a truck</Link>. Single
            heavy items are covered on our{" "}
            <Link to={"/furniture-movers/" as "/"}>furniture movers page</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Hero({ eyebrow, h1, intro }: { eyebrow: string; h1: React.ReactNode; intro: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
      <div className="container-page py-14 md:py-20 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          <ShieldCheck className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">{h1}</h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{intro}</p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Free Quotes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CostTable({ title, col2, col3, rows }: { title: string; col2: string; col3: string; rows: { size: string; price: string; detail: string }[] }) {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Pricing</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">{title}</h2>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Home Size</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">{col2}</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">{col3}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.size} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.size}</td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.price}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-ink">{r.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sm:hidden divide-y divide-border">
            {rows.map((r) => (
              <div key={r.size} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.size}</div>
                <dl className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">{col2}</dt>
                    <dd className="font-semibold text-ink">{r.price}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">{col3}</dt>
                    <dd className="font-semibold text-ink">{r.detail}</dd>
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

function Faq({ faqs }: { faqs: MiamiFaq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Miami Movers: Frequently Asked Questions</h2>
        <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white shadow-soft">
          {faqs.map((f, i) => {
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
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                    {f.link && (
                      <>
                        {" "}
                        <Link to={f.link.to as "/"} className="font-semibold text-brand hover:underline">
                          {f.link.label}
                        </Link>
                        .
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
