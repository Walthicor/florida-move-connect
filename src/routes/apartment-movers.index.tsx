import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  DollarSign,
  Building2,
} from "lucide-react";

export const Route = createFileRoute("/apartment-movers/")({
  head: () => ({
    meta: [
      { title: "Apartment and Condo Movers in Florida — Free Quotes | FMD" },
      {
        name: "description",
        content:
          "Florida apartment and condo movers who handle COIs, elevator reservations and building rules. Compare free quotes.",
      },
      { property: "og:title", content: "Apartment and Condo Movers in Florida" },
      {
        property: "og:description",
        content:
          "Compare free quotes from Florida apartment specialists — COIs, elevators and HOA rules handled.",
      },
    ],
  }),
  component: ApartmentMoversPage,
});

const COST_ROWS = [
  { size: "Studio", price: "$400-$650", crew: "2 movers, 3-4 hrs" },
  { size: "1 Bedroom", price: "$450-$800", crew: "2 movers, 3-5 hrs" },
  { size: "2 Bedroom", price: "$600-$1,100", crew: "3 movers, 4-6 hrs" },
  { size: "High-rise premium", price: "+$100-$300", crew: "Elevator time + long carries" },
];

const BUILDING_ITEMS = [
  {
    t: "Certificate of Insurance (COI)",
    d: "Proof your mover carries liability coverage, naming the building as additionally insured. Our movers send it to your property manager, usually within 24 hours.",
  },
  {
    t: "Service elevator reservation",
    d: "Booked with the association as soon as you have a date — peak-season slots go 2-3 weeks out in Miami and Fort Lauderdale.",
  },
  {
    t: "Approved moving windows",
    d: "Many buildings allow weekday 9 AM-4 PM only. We schedule inside your building rules, not against them.",
  },
  {
    t: "Move-in deposits",
    d: "Some associations hold $250-$500 refundable. Ask your manager early so it is budgeted, not a surprise.",
  },
];

const FAQS = [
  {
    q: "What is a COI and do I really need one?",
    a: "A certificate of insurance protects the building lobbies and elevators. If a mover cannot produce one same-week, they are either uninsured or too small for condo work — choose another.",
  },
  {
    q: "How long does an apartment move take?",
    a: "Studios and 1-bedrooms: 3-5 hours door to door. Add 1-2 hours for high-rise elevator cycles and long carries.",
  },
  {
    q: "Do movers handle walk-up buildings without elevators?",
    a: "Yes — stairs add time on hourly jobs and $40-$100 per flight on flat-rate specialty items. Tell the mover the floor number upfront for an accurate quote.",
  },
];

function ApartmentMoversPage() {
  return (
    <>
      <Hero />
      <CostTable />
      <BuildingReqs />
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
          Licensed Apartment Specialists
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Apartment and Condo Movers in <span className="text-brand">Florida</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Apartment moves in Florida run $400-$1,100 depending on size — but the price is
          the easy part. The hard part is the building: COIs, elevator reservations,
          loading-dock windows and HOA rules that can turn away an unprepared truck at the
          curb. Our apartment specialists handle the paperwork before moving day so the
          only thing happening at your building is your move.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Apartment Quotes <ArrowRight className="h-4 w-4" />
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
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Apartment Moving Costs in Florida (2026)
          </h2>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Home Size</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Price Range</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Crew & Time</th>
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map((r, i) => (
                <tr key={r.size} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.size}</td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.price}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-ink">{r.crew}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sm:hidden divide-y divide-border">
            {COST_ROWS.map((r) => (
              <div key={r.size} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.size}</div>
                <dl className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Price</dt>
                    <dd className="font-semibold text-ink">{r.price}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Crew & Time</dt>
                    <dd className="font-semibold text-ink">{r.crew}</dd>
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

function BuildingReqs() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Building Rules</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            What Your Building Will Require (and How We Handle It)
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {BUILDING_ITEMS.map((it) => (
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

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
          Apartment Movers FAQ
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
