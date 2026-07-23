import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { ArrowRight, ShieldCheck, ChevronDown, DollarSign, Building2, MapPin, Route as RouteIcon } from "lucide-react";

export const Route = createFileRoute("/movers-in-orlando/")({
  head: () => pageHead({
    path: "/movers-in-orlando/",
    title: 'Movers in Orlando FL | Compare Licensed Moving Companies',
    description: 'Compare free quotes from licensed movers in Orlando. Lake Nona to Winter Park, apartment specialists, from $400. FDACS-verified moving companies.',
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
    t: "The tourist-corridor factor",
    d: "Moves near I-Drive, Lake Buena Vista or the attractions can lose an hour to park traffic on the wrong day. Experienced Orlando crews schedule those zones early morning and route around event days.",
  },
  {
    t: "The month-end squeeze",
    d: "Orlando is one of Florida biggest renter markets, which means the last weekend of every month books out first in the entire state. If your lease turns over at month-end, book 3-4 weeks ahead — or negotiate a mid-month overlap and save 15-25%.",
  },
];

const NEIGHBORHOODS = ["Downtown", "Lake Nona", "Winter Park", "Dr. Phillips", "Baldwin Park", "College Park", "MetroWest", "Waterford Lakes", "Altamonte Springs", "Kissimmee"];

const ROUTES = [
  "Orlando to Miami (235 mi): $900-$1,600 for a 1BR, same-day standard.",
  "Orlando to Tampa (85 mi): often same-day round trip; priced as intrastate distance moves.",
  "Orlando to out of state: FMCSA-verified carriers on our long distance movers page.",
];

const FAQS = [
  { q: "How much do movers cost in Orlando?", a: "$400-$750 for a 1-bedroom, $750-$1,300 for 2-3 bedrooms, at $90-$140/hour for two movers — slightly below Miami and Tampa for equivalent crews." },
  { q: "How far ahead should I book Orlando movers?", a: "2-3 weeks for mid-month dates; 4+ weeks for month-end. Orlando rental market makes end-of-month the tightest booking window in Florida." },
  { q: "Do Orlando movers handle apartment complexes?", a: "Daily — including leasing-office coordination, breezeway carries and 3rd-floor walk-ups. Tell the mover the floor and building layout for an exact quote." },
];

function OrlandoPage() {
  return (
    <>
      <Hero />
      <CostTable />
      <LocalKnowledge />
      <Neighborhoods />
      <RoutesBlock />
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
          Local Orlando moves average $400-$750 for a 1-bedroom and $750-$1,300 for a 2-3 bedroom home — some of the most affordable big-city rates in Florida. What Orlando adds is timing complexity: tourist-corridor traffic and the state most competitive month-end rental turnover. Our licensed Orlando movers route around both. Compare free quotes in 2 minutes.
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
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Orlando Moving Costs (2026)</h2>
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
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Moving in Orlando: Timing Is Everything</h2>
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

function Neighborhoods() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Coverage</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Areas Our Orlando Movers Cover Daily</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {NEIGHBORHOODS.map((n) => (
            <span key={n} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm text-ink shadow-soft">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              {n}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted-foreground">— and the greater Orange-Osceola area.</p>
      </div>
    </section>
  );
}

function RoutesBlock() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Routes</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Popular Routes from Orlando</h2>
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
