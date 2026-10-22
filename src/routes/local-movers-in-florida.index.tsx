import { createFileRoute, Link } from "@tanstack/react-router";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
import { pageHead } from "@/lib/seo";
import { ProseSection, CheckList } from "@/components/site/ContentSections";
import { PageEstimateNote } from "@/components/site/PageBlocks";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  DollarSign,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export const Route = createFileRoute("/local-movers-in-florida/")({
  head: () => pageHead({
    path: "/local-movers-in-florida/",
    title: "Local Movers in Florida | Rates & Free Moving Quotes",
    description: "Compare licensed local movers in Florida. See typical hourly rates and cost factors, then request free moving quotes with no obligation.",
    service: { serviceType: 'Local Moving', areaServed: 'Florida' },
    faqs: FAQS,
  }),
  component: LocalMoversPage,
});

const RATE_ROWS = [
  { size: "Studio / 1BR", crew: "2 movers + truck", hours: "3-4 hrs", price: "$400 – $700" },
  { size: "2 Bedroom", crew: "3 movers + truck", hours: "4-6 hrs", price: "$650 – $1,100" },
  { size: "3 Bedroom", crew: "3-4 movers + truck", hours: "6-8 hrs", price: "$900 – $1,600" },
  { size: "4+ Bedroom", crew: "4+ movers + truck", hours: "8-10 hrs", price: "$1,400 – $2,600" },
];

const DRIVERS = [
  {
    direction: "up" as const,
    title: "Access and stairs",
    body:
      "Third-floor walk-ups, long carries from door to truck, and slow elevators add real billable time.",
  },
  {
    direction: "up" as const,
    title: "Month-end weekends",
    body:
      "The last Saturday of any month is typically the busiest and highest-priced slot in Florida moving — demand pricing is real.",
  },
  {
    direction: "down" as const,
    title: "Preparation",
    body:
      "Everything boxed, disassembled and staged near the door before the crew arrives can cut 1-2 billable hours. At $130/hour, your prep pays like a job.",
  },
  {
    direction: "up" as const,
    title: "Distance between homes",
    body:
      "The drive between addresses is billable time on an hourly job — a 40-minute haul across town is 40 minutes of crew pay, and some companies add a separate travel or fuel fee.",
  },
  {
    direction: "up" as const,
    title: "Packing and specialty items",
    body:
      "Crew packing runs by the hour plus materials, and pianos, safes and pool tables are priced as separate line items. Quote them before move day, not after — see our piano movers guide for instrument pricing.",
  },
  {
    direction: "down" as const,
    title: "Mid-month weekdays",
    body:
      "Tuesday or Wednesday mid-month typically quotes below weekend rates for the identical move; the gap varies by city and availability.",
  },
];

const FAQS = [
  {
    q: "Do local movers require a deposit?",
    a: "Reputable Florida movers ask for $0-$200 to hold a date. Large cash deposits demanded upfront are the classic red flag — walk away.",
  },
  {
    q: "Can I book a weekend or evening move?",
    a: "Yes — Saturdays are standard, Sundays common, and evening slots exist in most cities at a 0-15% premium. Condo buildings may restrict to weekdays; check yours first.",
  },
  {
    q: "Should I tip my local movers?",
    a: "Customary but optional: $4-$6 per mover per hour, or 10-15% of the bill split among the crew, for good work.",
  },
  {
    q: "How far ahead should I book?",
    a: "1-2 weeks off-season; 3-4 for summer or month-end.",
  },
  {
    q: "Are local movers in Florida required to be licensed?",
    a: "Intrastate household movers must register with the Florida Department of Agriculture and Consumer Services (FDACS) and carry a registration number. Ask for it, then confirm it on the FDACS business search before you pay a deposit.",
  },
  {
    q: "Do condo and high-rise buildings change what a local move costs?",
    a: "Yes. Local crews budget extra time for reserved service elevators, loading-dock windows and long carries, which typically adds $100-$300 to an otherwise standard job.",
  },
  {
    q: "How do I find local movers near me in Florida?",
    a: "Start with the city directory on this page — rates, access rules and seasonality differ between Miami, Tampa, Orlando and the smaller markets. Then compare written quotes from at least three licensed local moving companies in your city; one form here reaches up to four.",
  },
  {
    q: "What should a written estimate from a local mover include?",
    a: "The hourly rate, crew size, minimum hours, travel or fuel fees, charges for stairs and specialty items, and the mover's FDACS registration number. If any of those are missing or the mover refuses to put terms in writing, choose a different company.",
  },
];

function LocalMoversPage() {
  return (
    <>
      <Hero />
      <NetworkDisclosure />
      <RatesTable />
      <WhatCounts />
      <Drivers />
      <CondoMoves />
      <FdacsSection />
      <CityLinks />
      <Faq />
      <BottomCta />
    </>
  );
}

function BottomCta() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 text-center max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
          Compare Local Moving Quotes in Your City — Free
        </h2>
        <p className="mt-4 text-muted-foreground">
          One form, up to four licensed Florida movers, no obligation. Verify each registration and
          hire the quote that fits your move — or no one.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Free Local Quotes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CondoMoves() {
  return (
    <ProseSection
      eyebrow="Building access"
      title="How Do Condo Buildings Change a Local Move?"
      bg="bg-surface-alt"
    >
      <p>
        Florida has more condominium units than almost anywhere in the country, and
        a condo move is a different job from a single-family move even when the
        inventory is identical. A local crew plans around the building first and the
        furniture second.
      </p>
      <CheckList
        items={[
          "A certificate of insurance naming the association and management company, filed before move day — no COI, no elevator.",
          "A reserved and padded service elevator, usually in a timed block with a hard stop.",
          "Loading dock or designated truck bay access; downtown towers often have no street-side option at all.",
          "Approved moving hours, which in many associations exclude Sundays and holidays entirely.",
          "Long carries from dock to unit, which is where the $100-$300 high-rise premium comes from.",
        ]}
      />
      <p>
        Give the mover the building name and the association's move-in packet with
        your quote request. For the full checklist, compare{" "}
        <Link to="/apartment-movers/">apartment and condo movers in Florida</Link>, the page
        dedicated to elevator, COI and stair pricing.
      </p>
    </ProseSection>
  );
}

function FdacsSection() {
  return (
    <ProseSection
      eyebrow="Verification"
      title="What FDACS Registration Means and How to Verify It"
      bg="bg-background"
    >
      <p>
        Any company performing intrastate household moves in Florida — movers in FL
        working entirely inside state lines — must be registered as a mover with
        the Florida Department of Agriculture and Consumer Services. Registration
        means the company has filed as a moving business and carries the insurance
        the state requires. It is the baseline check that separates licensed movers
        in Miami FL, or anywhere else in the state, from an unregistered truck rental
        operation.
      </p>
      <CheckList
        items={[
          "Ask for the FDACS mover registration number in writing, before any deposit changes hands.",
          "Look the company up on the FDACS business search at fdacs.gov and confirm the registration is current.",
          "Verify the legal business name matches the name on your estimate — not just the brand on the truck.",
          "For any move crossing state lines, check the USDOT number with the FMCSA instead; see our guide to interstate carriers linked below.",
          "Refuse large cash deposits and blank or unsigned estimates regardless of what the paperwork claims.",
        ]}
      />
      <p>
        Moving out of state rather than across town? Federal rules and carrier
        verification apply instead —{" "}
        <Link to="/long-distance-movers/">
          our interstate moving guide explains the FMCSA check
        </Link>
        . Registration is only half the picture: read{" "}
        <Link to="/blog/$slug/" params={{ slug: "moving-insurance-florida-explained" }}>
          how moving insurance and valuation coverage work in Florida
        </Link>{" "}
        so you know what a mover's liability actually covers before you sign.
      </p>
    </ProseSection>
  );
}

const CITY_PAGES = [
  { to: "/movers-in-miami/", label: "Movers in Miami", d: "Condo COIs, elevator slots and Miami-Dade rate detail." },
  { to: "/movers-in-hialeah/", label: "Movers in Hialeah", d: "Bilingual crews for dense multifamily housing and cross-town Miami-Dade moves." },
  { to: "/movers-in-boca-raton/", label: "Movers in Boca Raton", d: "Palm Beach County associations, 55+ communities and season scheduling." },
  { to: "/movers-in-naples/", label: "Movers in Naples", d: "Southwest Florida gated communities and seasonal-resident timing." },
  { to: "/movers-in-tampa/", label: "Movers in Tampa", d: "Bay-area bridge routes, historic districts and Westshore offices." },
  { to: "/movers-in-riverview/", label: "Movers in Riverview", d: "South Hillsborough new-construction communities, HOA rules and US-301 access." },
  { to: "/movers-in-sarasota/", label: "Movers in Sarasota", d: "Sarasota, Bradenton and Lakewood Ranch rates, plus island and condo access." },
  
  { to: "/movers-in-orlando/", label: "Movers in Orlando", d: "Central Florida relocation volume and corporate housing gaps." },
  { to: "/movers-in-ocala/", label: "Movers in Ocala", d: "Marion County rates, horse-farm access and Villages-corridor routes." },
  { to: "/movers-in-the-villages/", label: "Movers in The Villages", d: "Downsizing moves, partial loads and storage overlap in the retirement community." },
  { to: "/movers-in-jacksonville/", label: "Movers in Jacksonville", d: "Northeast Florida coastal, military and logistics-corridor moves." },
  { to: "/movers-in-tallahassee/", label: "Movers in Tallahassee", d: "What movers actually cost in the capital, plus FSU and FAMU move seasonality." },
  { to: "/movers-in-pensacola/", label: "Movers in Pensacola", d: "Panhandle market, NAS Pensacola relocations and long-haul routes east on I-10." },
];


function CityLinks() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">By city</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Local Movers by City in Florida
          </h2>
          <p className="mt-3 text-muted-foreground">
            Hourly rates are statewide, but access, seasonality and building rules are not. This is
            the full directory of Florida cities we cover — each guide shows what actually changes
            the number where you live.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CITY_PAGES.map((c) => (
            <Link
              key={c.to}
              to={c.to as "/"}
              className="group rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:border-brand hover:shadow-card"
            >
              <h3 className="font-display text-lg font-bold text-ink group-hover:text-brand">{c.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                See {c.label} rates <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
      <div className="container-page py-14 md:py-20 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          <ShieldCheck className="h-3.5 w-3.5" />
          FDACS-Registered Local Movers
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Local Movers in <span className="text-brand">Florida</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Local movers in Florida charge $95-$150 per hour for a two-mover crew
          with a truck, and a typical local move (under 50 miles) runs
          $400-$1,600 depending on home size. Compare free quotes from licensed,
          FDACS-registered local moving companies in your city — the right crew
          at the best rate, without calling ten companies yourself. Moving farther than
          50 miles? Start with our{" "}
          <Link to="/" className="font-semibold text-brand hover:underline">
            comparison of movers in Florida
          </Link>{" "}
          for every type of move.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Free Local Quotes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function RatesTable() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Pricing
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Local Moving Rates in Florida (2026)
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Home Size</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Crew</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Typical Hours</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Price Range</th>
              </tr>
            </thead>
            <tbody>
              {RATE_ROWS.map((r, i) => (
                <tr key={r.size} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.size}</td>
                  <td className="px-6 py-4 text-ink">{r.crew}</td>
                  <td className="px-6 py-4 text-ink">{r.hours}</td>
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
            {RATE_ROWS.map((r) => (
              <div key={r.size} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.size}</div>
                <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">Crew</dt>
                    <dd className="mt-0.5 text-ink">{r.crew}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">Hours</dt>
                    <dd className="mt-0.5 text-ink">{r.hours}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">Price</dt>
                    <dd className="mt-0.5 font-semibold text-ink">{r.price}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
        <PageEstimateNote />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {SCENARIOS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <p className="mt-3 text-sm font-semibold text-brand">{s.estimate}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Scenarios are illustrative estimates, not quotes — your actual price comes only from a written estimate by the mover.
        </p>
      </div>
    </section>
  );
}

const SCENARIOS = [
  {
    title: "Studio across town",
    body: "Furnished studio, ground floor to ground floor, 8 miles, everything boxed in advance. Two movers, about 3 hours including load and unload.",
    estimate: "Typical estimate: $400 – $550",
  },
  {
    title: "2-bedroom apartment, third floor",
    body: "Walk-up with no elevator, 15 miles, some furniture disassembly. Three movers, 5-6 hours — the stairs are the single biggest line item.",
    estimate: "Typical estimate: $800 – $1,200",
  },
  {
    title: "4-bedroom house, same suburb",
    body: "Full household with garage and patio, 10 miles, mid-month weekday. Four movers, 8-10 hours with two trucks or two trips.",
    estimate: "Typical estimate: $1,600 – $2,600",
  },
];

const MOVE_TYPES = [
  { type: "Local move", example: "Tampa to St. Pete, Kendall to Doral", distance: "Under ~50 miles, inside Florida", pricing: "Hourly (crew size × hours)", oversight: "FDACS registration required" },
  { type: "Intrastate move", example: "Orlando to Miami, Tampa to Jacksonville", distance: "Over ~50 miles, inside Florida", pricing: "By inventory / weight and distance", oversight: "FDACS registration required" },
  { type: "Interstate move", example: "Miami to Atlanta, Orlando to New York", distance: "Crossing any state line", pricing: "By weight and mileage, written estimate", oversight: "FMCSA USDOT number required" },
];

function WhatCounts() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
          What Counts as a Local Move in Florida?
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Any move under roughly 50 miles that starts and ends inside Florida. Local
          moves bill hourly; anything longer or crossing state lines is priced by
          inventory or weight and distance — and the paperwork changes with it.
          Tampa to St. Pete is local. Orlando to Miami is not — that is an
          intrastate long-distance move.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[640px]">
              <thead className="bg-navy text-navy-foreground">
                <tr>
                  <th className="px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wider">Move Type</th>
                  <th className="px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wider">Example</th>
                  <th className="px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wider">Distance</th>
                  <th className="px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wider">How It Is Priced</th>
                  <th className="px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wider">Oversight</th>
                </tr>
              </thead>
              <tbody>
                {MOVE_TYPES.map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                    <td className="px-5 py-4 font-semibold text-ink">{r.type}</td>
                    <td className="px-5 py-4 text-ink">{r.example}</td>
                    <td className="px-5 py-4 text-ink">{r.distance}</td>
                    <td className="px-5 py-4 text-ink">{r.pricing}</td>
                    <td className="px-5 py-4 text-ink">{r.oversight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Drivers() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Cost Drivers
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            What Drives Your Hourly Total Up (or Down)
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {DRIVERS.map((d) => {
            const isUp = d.direction === "up";
            const Icon = isUp ? TrendingUp : TrendingDown;
            return (
              <div key={d.title} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                <div className="flex items-center gap-2">
                  <span
                    className={
                      "inline-flex h-9 w-9 items-center justify-center rounded-lg " +
                      (isUp ? "bg-cta/10 text-cta" : "bg-brand/10 text-brand")
                    }
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={
                      "text-xs font-bold uppercase tracking-wider " +
                      (isUp ? "text-cta" : "text-brand")
                    }
                  >
                    {isUp ? "Drives cost up" : "Drives cost down"}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
          Local Movers FAQ
        </h2>
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
                  <ChevronDown
                    className={
                      "h-5 w-5 text-muted-foreground transition-transform " +
                      (isOpen ? "rotate-180 text-brand" : "")
                    }
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
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
