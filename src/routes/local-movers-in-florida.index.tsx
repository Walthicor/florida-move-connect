import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
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
    title: 'Local Movers in Florida | Hourly Rates & Free Quotes 2026',
    description: 'Compare licensed local moving companies across Florida. Hourly rates from $95/hr, FDACS-verified movers, same-week availability. Get up to 4 free quotes.',
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
      "The last Saturday of any month is the most expensive day in Florida moving — demand pricing is real.",
  },
  {
    direction: "down" as const,
    title: "Preparation",
    body:
      "Everything boxed, disassembled and staged near the door before the crew arrives can cut 1-2 billable hours. At $130/hour, your prep pays like a job.",
  },
  {
    direction: "down" as const,
    title: "Mid-month weekdays",
    body:
      "Tuesday or Wednesday mid-month routinely quotes 10-20% under weekend rates for the identical move.",
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
];

function LocalMoversPage() {
  return (
    <>
      <Hero />
      <RatesTable />
      <WhatCounts />
      <Drivers />
      <CityLinks />
      <Faq />
    </>
  );
}

const CITY_PAGES = [
  { to: "/movers-in-pensacola/", label: "Movers in Pensacola", d: "Panhandle market, NAS Pensacola relocations and long-haul routes east on I-10." },
  { to: "/movers-in-tallahassee/", label: "Movers in Tallahassee", d: "What movers actually cost in the capital, plus FSU and FAMU move seasonality." },
  { to: "/movers-in-the-villages/", label: "Movers in The Villages", d: "Downsizing moves, partial loads and storage overlap in the retirement community." },
  { to: "/movers-in-hialeah/", label: "Movers in Hialeah", d: "Bilingual crews for dense multifamily housing and cross-town Miami-Dade moves." },
  { to: "/movers-in-miami/", label: "Movers in Miami", d: "Condo COIs, elevator slots and parking access across Miami-Dade." },
  { to: "/movers-in-ocala/", label: "Movers in Ocala", d: "Marion County rates and the busiest short route in north-central Florida." },
];

function CityLinks() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">By city</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Local Moving Rates by Florida City
          </h2>
          <p className="mt-3 text-muted-foreground">
            Hourly rates are statewide, but access, seasonality and building rules are not. These
            city guides show what actually changes the number where you live.
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
                View rates <ArrowRight className="h-4 w-4" />
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
          at the best rate, without calling ten companies yourself.
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
      </div>
    </section>
  );
}

function WhatCounts() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
          What Counts as a Local Move in Florida?
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Any move under 50 miles that starts and ends inside Florida. Local
          moves bill hourly; anything over 50 miles or crossing state lines is
          priced by weight and distance. Tampa to St. Pete is local. Orlando to
          Miami is not — that is an intrastate long distance move.
        </p>
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
