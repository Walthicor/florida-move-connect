import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  DollarSign,
  ClipboardCheck,
  Package,
  Truck,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/piano-movers-tampa/")({
  head: () => ({
    meta: [
      { title: "Piano Movers in Tampa, FL — Specialty Move Quotes | FMD" },
      {
        name: "description",
        content:
          "Compare free quotes from specialty piano movers in Tampa Bay — skid boards, locking straps and humidity know-how.",
      },
      { property: "og:title", content: "Piano Movers in Tampa, FL" },
      {
        property: "og:description",
        content:
          "Compare free quotes from specialty piano movers in Tampa Bay.",
      },
    ],
  }),
  component: PianoMoversTampaPage,
});

const COST_ROWS = [
  { type: "Spinet / console upright", ground: "$150-$300", stairs: "$200-$400" },
  { type: "Full upright", ground: "$200-$400", stairs: "$260-$500" },
  { type: "Baby grand (under 6 ft)", ground: "$250-$550", stairs: "$350-$700" },
  { type: "Grand / concert grand", ground: "$350-$800", stairs: "$450-$950" },
];

const STEPS = [
  { i: ClipboardCheck, t: "Assessment first", d: "Piano type, weight, stair count, door widths and floor surfaces at both homes determine crew size (2-4 movers) and equipment." },
  { i: Package, t: "Protection and disassembly", d: "Lid locked, pedals and legs removed on grands, body wrapped in thick pads and secured to a piano skid board." },
  { i: Truck, t: "The move itself", d: "Padded doorways, ramps or stair-climbing dollies, and the piano rides strapped upright in the truck — never on its back." },
  { i: MapPin, t: "Placement and reassembly", d: "Rebuilt on the exact spot you choose — away from AC vents, exterior walls and direct sun, because Tampa humidity swings detune pianos fast." },
];

const AREAS = [
  "Tampa", "South Tampa", "Hyde Park", "Carrollwood", "Westchase",
  "New Tampa", "Temple Terrace", "Brandon", "Riverview", "Valrico",
  "Wesley Chapel", "Lutz", "Clearwater", "Largo", "St. Petersburg",
];

const FAQS = [
  {
    q: "How much does it cost to move a piano in Tampa?",
    a: "Uprights $150-$400, baby grands $250-$550, grands $350-$800 locally, plus $40-$100 per flight of stairs. Piano moves quote flat-rate, so comparing 2-3 quotes takes minutes and routinely saves $100+.",
  },
  {
    q: "Can regular movers take my piano with the rest of the house?",
    a: "Good full-service movers subcontract a piano specialist for that portion — a fine arrangement. What to avoid is a general crew improvising with furniture dollies. Ask who physically moves the piano and with what equipment; if the answer is not a skid board and piano straps, keep looking.",
  },
  {
    q: "Will my piano need tuning after moving across Tampa?",
    a: "Almost certainly. Transport shifts tension, and moving between differently air-conditioned Tampa homes accelerates it. Let it acclimate 2-4 weeks, then tune ($100-$200).",
  },
  {
    q: "Do you move pianos into downtown high-rise condos?",
    a: "Yes — downtown and Channelside buildings need a COI and a service elevator reservation; grands that cannot fit the elevator are hoisted, quoted case by case. Give us the building name and the movers arrange it with your association.",
  },
];

function PianoMoversTampaPage() {
  return (
    <>
      <Hero />
      <CostTable />
      <HowItWorks />
      <Areas />
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
          Tampa Bay Piano Specialists
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Piano Movers in <span className="text-brand">Tampa, FL</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Moving a piano in Tampa costs $150-$400 for an upright and $300-$800 for a grand,
          depending on stairs, distance and crating. Through Florida Movers Direct you
          compare free quotes from specialty piano movers in Tampa — crews with skid boards,
          locking straps and the humidity know-how a 600-pound instrument demands. Standard
          crews damage pianos at many times the specialist rate; with an instrument worth
          thousands, the right crew costs less than the wrong repair.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Tampa Piano Quotes <ArrowRight className="h-4 w-4" />
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
            Piano Moving Costs in Tampa (2026)
          </h2>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Piano Type</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Ground Floor</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">With Stairs</th>
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map((r, i) => (
                <tr key={r.type} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.type}</td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.ground}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.stairs}
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
                    <dt className="text-muted-foreground">Ground Floor</dt>
                    <dd className="font-semibold text-ink">{r.ground}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">With Stairs</dt>
                    <dd className="font-semibold text-ink">{r.stairs}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Local Tampa Bay pricing. Long-distance piano transport (Tampa to Miami, Orlando or
          out of state) is quoted by route — typically $700-$2,500. Every quote includes
          padding, straps, skid board and basic valuation.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Process</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            How Professional Piano Movers Work
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

function Areas() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Coverage</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          Areas We Cover
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {AREAS.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm font-semibold text-ink shadow-soft"
            >
              <MapPin className="h-3.5 w-3.5 text-brand" />
              {a}
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
          Plus Clearwater, Largo and St. Petersburg across the bay. Hillsborough, Pinellas
          and Pasco counties, daily.
        </p>
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
          Tampa Piano Movers FAQ
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
