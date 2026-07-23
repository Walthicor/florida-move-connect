import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  DollarSign,
  Music,
  ClipboardCheck,
  Package,
  Truck,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/piano-movers/")({
  head: () => pageHead({
    path: "/piano-movers/",
    title: 'Piano Movers in Florida | Upright & Grand Piano Moving',
    description: 'Specialty piano movers across Florida. Upright from $150, grand pianos from $300. Climate-aware handling, stairs & crating. Compare free quotes.',
    service: { serviceType: 'Piano Moving', areaServed: 'Florida' },
    faqs: FAQS,
  }),
  component: PianoMoversPage,
});

const COST_ROWS = [
  { type: "Upright / spinet", local: "$150-$400", ld: "$500-$1,200" },
  { type: "Baby grand", local: "$250-$600", ld: "$700-$1,800" },
  { type: "Grand / concert", local: "$300-$800", ld: "$1,000-$2,500" },
  { type: "Stairs surcharge", local: "+$40-$100 per flight", ld: "+$40-$100 per flight" },
];

const WHY_BULLETS = [
  "Weight and physics: 300-1,200 pounds balanced on removable legs. Skid boards and piano straps exist because furniture dollies fail.",
  "10,000+ moving parts inside: jolts misalign actions and crack soundboards invisibly.",
  "Florida humidity: the trip from one AC profile to another detunes and can warp. Specialists plan placement away from vents, exterior walls and direct sun.",
  "Insurance math: standard valuation pays 60 cents per pound — about $400 on a $15,000 grand. Specialists offer full-value options.",
];

const STEPS = [
  { i: ClipboardCheck, t: "Assessment", d: "Type, weight, stair count, door widths and floor surfaces at both homes determine crew size (2-4) and equipment." },
  { i: Package, t: "Protection and disassembly", d: "Lid locked, pedals and legs removed on grands, body wrapped and secured to the skid board." },
  { i: Truck, t: "Transport", d: "Ramps or stair-climbing dollies, padded doorways, and the piano rides strapped upright — never on its back." },
  { i: MapPin, t: "Placement", d: "Reassembled on the exact spot you choose, with Florida-smart positioning advice included." },
];

const FAQS = [
  {
    q: "Will my piano need tuning after the move?",
    a: "Plan on it. Let the instrument acclimate 2-4 weeks in the new room, then tune ($100-$200). Tuning immediately after a move wastes money — it will drift again as the wood settles.",
  },
  {
    q: "Can regular movers take my piano with the rest of the house?",
    a: "Many full-service movers subcontract a piano specialist for that part — a good arrangement. What you avoid is a general crew improvising. Ask exactly who moves the piano and with what equipment.",
  },
  {
    q: "Do you move pianos in Tampa?",
    a: "Yes — Tampa is one of the busiest piano markets in the state. See our dedicated Tampa piano movers page for local pricing and coverage.",
    link: { to: "/piano-movers-tampa/", label: "View Tampa piano movers" },
  },
];

function PianoMoversPage() {
  return (
    <>
      <Hero />
      <CostTable />
      <WhySpecialists />
      <HowItWorks />
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
          Piano Moving Specialists
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Piano Movers in <span className="text-brand">Florida</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Moving a piano in Florida costs $150-$400 for an upright and $300-$800 for a
          grand — moved by crews with skid boards, locking straps and the humidity know-how
          a 600-pound instrument demands. A piano is the one item a general moving crew
          should never improvise with: one drop costs more than ten professional moves.
          Compare free quotes from Florida piano specialists.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Piano Move Quotes <ArrowRight className="h-4 w-4" />
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
            Piano Moving Costs in Florida (2026)
          </h2>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Piano Type</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Local Move</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Long Distance</th>
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map((r, i) => (
                <tr key={r.type} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.type}</td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.local}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.ld}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sm:hidden divide-y divide-border">
            {COST_ROWS.map((r) => (
              <div key={r.type} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.type}</div>
                <dl className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Local</dt>
                    <dd className="font-semibold text-ink">{r.local}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Long Distance</dt>
                    <dd className="font-semibold text-ink">{r.ld}</dd>
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

function WhySpecialists() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Why Specialists</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          Why Pianos Need Specialists (Especially in Florida)
        </h2>
        <ul className="mt-8 space-y-4">
          {WHY_BULLETS.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-soft">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand flex-shrink-0">
                <Music className="h-4 w-4" />
              </span>
              <span className="text-sm md:text-base text-ink leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Process</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            How a Professional Piano Move Works
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => {
            const Icon = s.i;
            return (
              <div key={s.t} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
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
          Piano Movers FAQ
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
                    {f.link && (
                      <div className="mt-3">
                        <Link to={f.link.to} className="inline-flex items-center gap-1.5 font-semibold text-brand hover:underline">
                          {f.link.label} <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
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
