import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  DollarSign,
  Clock,
  Server,
  ClipboardCheck,
} from "lucide-react";

export const Route = createFileRoute("/commercial-movers/")({
  head: () => ({
    meta: [
      { title: "Commercial Movers in Florida — Office Move Quotes | FMD" },
      {
        name: "description",
        content:
          "Licensed Florida commercial movers for offices, retail and warehouses. Evening, overnight and weekend schedules. Compare free quotes.",
      },
      { property: "og:title", content: "Commercial Movers in Florida" },
      {
        property: "og:description",
        content:
          "Compare free quotes from licensed Florida commercial movers — offices, retail, warehouses.",
      },
    ],
  }),
  component: CommercialMoversPage,
});

const COST_ROWS = [
  { size: "Small office (under 10 desks)", price: "$1,200-$3,500", timing: "1 evening or weekend day" },
  { size: "Mid-size office (10-50 desks)", price: "$3,500-$12,000", timing: "1 weekend" },
  { size: "Large office / multi-floor", price: "Custom quote", timing: "Phased, 1-3 weekends" },
  { size: "Retail / warehouse", price: "By inventory", timing: "Off-hours by plan" },
];

const IT_BULLETS = [
  "Anti-static packing and server crates for computers, monitors and network gear.",
  "Chain-of-custody labeling: every asset tagged, listed and checked at both ends.",
  "Coordination with your IT provider for shutdown and reconnection sequencing.",
  "Secure document handling for filing rooms — sealed, tracked, delivered locked.",
];

const CHECKLIST = [
  "A walkthrough with the mover 2-4 weeks out — accurate crews come from accurate surveys.",
  "Color-coded floor plan: every desk, box and chair labeled to a destination zone.",
  "Both buildings notified with COIs and elevator reservations locked a week ahead.",
  "An employee pack-up deadline the day before — the crew moves boxes, not decisions.",
];

const FAQS = [
  {
    q: "How much does an office move cost in Florida?",
    a: "Small offices run $1,200-$3,500; mid-size $3,500-$12,000; larger relocations are quoted by project. The biggest variables: square footage, IT complexity, and building access.",
  },
  {
    q: "Can you really move our business over one weekend?",
    a: "Up to about 50 workstations, routinely yes — with a pre-move survey, labeling system and right-sized crew. Larger offices phase over two or three weekends.",
  },
  {
    q: "Do commercial movers handle cubicle disassembly?",
    a: "Yes — furniture systems, conference rooms and reception builds are disassembled, moved and rebuilt to your floor plan.",
  },
];

function CommercialMoversPage() {
  return (
    <>
      <Hero />
      <CostTable />
      <AfterHours />
      <ITSection />
      <Checklist />
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
          Licensed Commercial Movers
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Commercial Movers in <span className="text-brand">Florida</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          A business move measured in lost workdays costs more than any mover invoice.
          Florida commercial moving specialists relocate offices, retail spaces and
          warehouses on evening, overnight and weekend schedules — so your team leaves
          Friday and starts Monday at the new address with workstations live. Compare
          quotes from licensed commercial movers who handle the COI, the IT gear, and the
          building managers.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Commercial Quotes <ArrowRight className="h-4 w-4" />
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
            Commercial Moving Costs in Florida (2026)
          </h2>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Office Size</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Price Range</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Typical Timing</th>
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
                  <td className="px-6 py-4 text-ink">{r.timing}</td>
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
                    <dt className="text-muted-foreground">Timing</dt>
                    <dd className="font-semibold text-ink">{r.timing}</dd>
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

function AfterHours() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Zero Downtime</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          After-Hours and Weekend Moves: The Zero-Downtime Play
        </h2>
        <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-soft">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand flex-shrink-0">
              <Clock className="h-5 w-5" />
            </span>
            <p className="text-base text-muted-foreground leading-relaxed">
              A typical 20-desk office loads Friday 6 PM, moves Saturday, and reconnects
              Sunday. Building managers in Miami, Tampa and Orlando frequently require
              after-hours moves anyway — plus a certificate of insurance before the freight
              elevator unlocks. Our commercial movers deliver the COI to both buildings and
              work inside their approved windows, so nothing stalls at a loading dock.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ITSection() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">IT & Sensitive Gear</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          How Professional Crews Handle IT and Sensitive Equipment
        </h2>
        <ul className="mt-8 space-y-4">
          {IT_BULLETS.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-soft">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand flex-shrink-0">
                <Server className="h-4 w-4" />
              </span>
              <span className="text-sm md:text-base text-ink leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Checklist() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Prep</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          Your Pre-Move Checklist
        </h2>
        <ul className="mt-8 space-y-4">
          {CHECKLIST.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-soft">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cta/10 text-cta flex-shrink-0">
                <ClipboardCheck className="h-4 w-4" />
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
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
          Commercial Movers FAQ
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
