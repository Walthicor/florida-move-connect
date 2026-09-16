import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { ProseSection, SubBlock, CardGrid, CheckList } from "@/components/site/ContentSections";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  DollarSign,
  Building2,
} from "lucide-react";

export const Route = createFileRoute("/apartment-movers/")({
  head: () => pageHead({
    path: "/apartment-movers/",
    title: 'Apartment Movers in Florida | Condo & High-Rise Specialists',
    description: "Apartment and condo movers across Florida handle building COIs, elevator reservations and stair carries. Compare free quotes from licensed local crews today.",
    service: { serviceType: 'Apartment and Condo Moving', areaServed: 'Florida' },
    faqs: FAQS,
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
  {
    q: "How far ahead do I need to reserve the elevator?",
    a: "Most Florida complexes release the service elevator in two- to four-hour blocks and want the reservation a week or more out, along with the mover's certificate of insurance. Book the elevator the same day you book the crew.",
  },
  {
    q: "What does a studio or one-bedroom apartment move cost in Florida?",
    a: "A studio runs $400-$650 and a one-bedroom $450-$800 for a two-mover crew, with high-rise access adding $100-$300. Hourly rates across the state sit at $95-$150 per hour for two movers and a truck.",
  },
];

function ApartmentMoversPage() {
  return (
    <>
      <Hero />
      <CostTable />
      <ElevatorCoi />
      <StairsPricing />
      <SmallUnitCosts />
      <ApartmentCities />
      <BuildingReqs />
      <Faq />
    </>
  );
}

function ElevatorCoi() {
  return (
    <ProseSection
      eyebrow="Building rules"
      title="Elevator Reservations and Certificate of Insurance Requirements"
      bg="bg-background"
    >
      <p>
        In Florida apartment complexes and condo towers, the building controls the
        move — not the mover. Two pieces of admin decide whether the truck gets
        unloaded on the day you booked: a reserved service elevator and an
        approved certificate of insurance on file with management.
      </p>
      <CheckList
        items={[
          "Elevators are released in timed blocks, often two to four hours, and padded by building staff. Overrun the block and the crew waits on the clock.",
          "The COI must name the property owner and management company as additional insured, and list general liability and workers' compensation.",
          "Many buildings restrict moves to weekdays between set hours, which rules out Saturday moves entirely in some towers.",
          "Loading-dock access, freight entrances and gate codes need to be confirmed before move morning, not discovered on it.",
        ]}
      />
      <p>
        Ask the leasing office for the move-in packet as soon as you sign, and hand
        it to the mover with the quote request. Commercial buildings run the same
        system — our{" "}
        <Link to="/commercial-movers/">office relocation guide</Link> covers the
        paperwork side in more depth.
      </p>
    </ProseSection>
  );
}

function StairsPricing() {
  return (
    <ProseSection
      eyebrow="Access"
      title="Stairs and Walk-Up Pricing"
      bg="bg-surface-alt"
    >
      <p>
        Garden-style complexes and older walk-ups are the most common apartment
        layout in Florida, and stairs are the single biggest variable in what an
        apartment move actually costs. On hourly jobs the effect is indirect: each
        flight slows the carry cycle, so a third-floor unit routinely takes one to
        two hours longer than the identical unit at ground level. On flat-rate and
        specialty items, stairs are billed directly at $40-$100 per flight.
      </p>
      <CheckList
        items={[
          "Give the mover your floor number and whether an elevator exists — a quote built for ground level will not hold.",
          "Long carries matter as much as stairs: distance from the truck to your door across a parking lot adds real time.",
          "Reserve parking near the building entrance where the complex allows it; a shuttle from an overflow lot changes the job.",
          "Heavy single items — sleeper sofas, safes, treadmills — are quoted separately when stairs are involved.",
        ]}
      />
    </ProseSection>
  );
}

function SmallUnitCosts() {
  return (
    <ProseSection
      eyebrow="Budget"
      title="Studio and One-Bedroom Cost Expectations"
      bg="bg-background"
    >
      <p>
        Small units are the bread and butter of Florida apartment movers. A studio
        with a two-mover crew runs $400-$650 and typically takes three to four
        hours; a one-bedroom runs $450-$800 across three to five hours. A
        two-bedroom apartment moves with a three-mover crew at $600-$1,100. High-rise
        access adds $100-$300 on top for elevator cycles and long carries.
      </p>
      <p>
        Those figures assume you are packed before the crew arrives. If you are
        not, either add hours or book{" "}
        <Link to="/packing-services/">fragile-only or partial packing</Link>, which
        is usually cheaper than paying movers to box a kitchen on the clock. If your
        lease dates do not line up,{" "}
        <Link to="/storage-solutions/">short-term storage</Link> bridges the gap. For
        statewide hourly context, see{" "}
        <Link to="/local-movers-in-florida/">local moving rates in Florida</Link>.
      </p>
    </ProseSection>
  );
}

function ApartmentCities() {
  return (
    <ProseSection
      eyebrow="Coverage"
      title="Apartment Moves by Florida Market"
      bg="bg-surface-alt"
    >
      <CardGrid>
        <SubBlock title="Boca Raton apartment movers">
          <p>
            Palm Beach County associations are the strictest in the state on COIs,
            approved hours and vendor registration. Rates and building detail are
            in our{" "}
            <Link to="/movers-in-boca-raton/">Boca Raton moving guide</Link>.
          </p>
        </SubBlock>
        <SubBlock title="Ocala apartment moves">
          <p>
            Marion County rentals are mostly garden-style walk-ups, which makes
            stairs the pricing factor rather than elevators. See{" "}
            <Link to="/movers-in-ocala/">what movers charge in Ocala</Link>.
          </p>
        </SubBlock>
        <SubBlock title="Tallahassee student moves">
          <p>
            August turnover around the universities compresses the whole market
            into two weeks. Book early — details in our{" "}
            <Link to="/movers-in-tallahassee/">Tallahassee moving costs guide</Link>.
          </p>
        </SubBlock>
        <SubBlock title="Miami high-rise apartments">
          <p>
            Loading docks, timed service elevators and HOA-approved insurance are
            standard downtown and on the beach. Start with{" "}
            <Link to="/movers-in-miami/">Miami-Dade moving rates</Link>.
          </p>
        </SubBlock>
      </CardGrid>
    </ProseSection>
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
