import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { ArrowRight, ShieldCheck, ChevronDown, DollarSign, Building2, MapPin, Music } from "lucide-react";

export const Route = createFileRoute("/movers-in-tampa/")({
  head: () => pageHead({
    path: "/movers-in-tampa/",
    title: "Tampa Movers | Compare Licensed Moving Companies",
    description: "Compare licensed Tampa movers for local, apartment, commercial and long-distance moves across Hillsborough County. Free quotes, no obligation.",
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
    t: "The bay crossing rule",
    d: "South Tampa to St. Petersburg is only 25 miles — across a bridge that becomes a parking lot at rush hour. Experienced crews schedule bay crossings before 7 AM or after 7 PM on hourly jobs. That one scheduling choice can save $150-$300.",
  },
  {
    t: "Summer storm strategy",
    d: "July-September brings near-daily afternoon downpours that can shut a loading dock for an hour while the clock runs. Reputable Tampa crews start 7-8 AM to beat both the heat and the rain.",
  },
  {
    t: "Downtown and Channelside high-rises",
    d: "COI requirements and service-elevator reservations, same as Miami. Tell your mover the building name when quoting and the paperwork is handled before moving day.",
  },
];

const NEIGHBORHOODS = ["Hyde Park", "South Tampa", "Channelside", "Ybor City", "Seminole Heights", "Carrollwood", "Westchase", "New Tampa", "Brandon", "Riverview", "Wesley Chapel", "Temple Terrace"];

const FAQS = [
  { q: "How much do movers cost in Tampa?", a: "$400-$800 for a 1-bedroom, $800-$1,400 for a 2-3 bedroom home, at hourly rates of $95-$150 for two movers — typically below Miami for the identical job, though estimates vary by home size and access." },
  { q: "Do you have piano movers in Tampa?", a: "Yes — one of our most requested Tampa services. Uprights from $150, grands from $300, including stairs and crating. See the dedicated Tampa piano movers page for the full price table." },
  { q: "When is the best time to schedule a Tampa move?", a: "Early morning, mid-month, on a weekday. In summer, a 7-8 AM start beats the heat and the daily storms; if crossing the bay, avoid 7-9 AM and 4-7 PM bridge traffic." },
  { q: "Do Tampa movers cover St. Petersburg and Clearwater?", a: "Yes — Pinellas County is standard territory. Cross-bay moves bill the same hourly rates; only the drive time differs, which smart scheduling minimizes." },
  { q: "Do Tampa buildings require a certificate of insurance?", a: "Channelside, downtown and most Westshore-area towers do. The association or property manager wants the COI on file before the service elevator is released, so send it over as soon as your date is set." },
  { q: "How far ahead should I book movers in Tampa?", a: "One to two weeks off-season is usually enough. For summer, month-end dates or any move needing a reserved elevator, give it three to four weeks." },
];

function TampaPage() {
  return (
    <>
      <Hero />
      <CostTable />
      <LocalKnowledge />
      <PianoCard />
      <Neighborhoods />
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
          Licensed Tampa Movers
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Movers in <span className="text-brand">Tampa</span>, Florida
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Local Tampa moves average $400-$800 for a 1-bedroom and $800-$1,400 for a 2-3 bedroom home, with hourly crews from $95-$150. Tampa Bay has its own moving logic — a bay that splits the metro, daily summer storms, and one of the busiest piano-moving markets in Florida. Our licensed Tampa movers plan around all three. Compare free quotes in 2 minutes.
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
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Tampa Moving Costs (2026)</h2>
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
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Moving in Tampa: Local Knowledge That Saves You Money</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
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

function PianoCard() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Specialty</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Need a Piano Moved in Tampa?</h2>
        <div className="mt-6 rounded-2xl border border-border bg-gradient-to-br from-white to-surface-alt p-6 md:p-8 shadow-card">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cta/10 text-cta flex-shrink-0">
              <Music className="h-6 w-6" />
            </span>
            <div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Tampa is one of the most active piano-moving markets in Florida — and a piano is the one item standard crews should never touch. Our network includes dedicated piano movers in Tampa handling uprights from $150 and grands from $300, with skid boards, stair expertise and humidity-aware placement. Start with the full{" "}
                <Link to="/piano-movers-tampa/" className="font-semibold text-brand hover:underline">
                  Tampa piano moving price table and crew requirements
                </Link>{" "}
                before you book a general moving crew for an instrument.
              </p>
              <div className="mt-5">
                <Link to="/piano-movers-tampa/" className="btn-cta btn-cta-hover text-sm">
                  Tampa Piano Movers <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Neighborhoods() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Coverage</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Areas Our Tampa Movers Cover Daily</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {NEIGHBORHOODS.map((n) => (
            <span key={n} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm text-ink shadow-soft">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              {n}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted-foreground">— plus Clearwater, Largo and St. Petersburg across the bay.</p>
      </div>
    </section>
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
