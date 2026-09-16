import { createFileRoute, Link } from "@tanstack/react-router";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
import { pageHead } from "@/lib/seo";
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
  head: () => pageHead({
    path: "/piano-movers-tampa/",
    title: "Piano Movers in Tampa, FL | Free Piano Moving Quotes",
    description: "Compare licensed piano movers in Tampa for uprights, baby grands and grand pianos. Get free quotes based on your piano, stairs and access.",
    service: { serviceType: 'Piano Moving', areaServed: 'Tampa, Florida' },
    faqs: FAQS,
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
  {
    q: "Can a piano moving company in Tampa handle a digital piano?",
    a: "Yes. Digitals are lighter but still top-heavy and easy to crack at the cabinet corners. Most Tampa specialists move them for $100-$250 locally, often as an add-on to a household move. Consoles with wooden cabinets (Clavinova-style) are treated like small uprights.",
  },
  {
    q: "How do I find piano movers near me in Tampa?",
    a: "Ask three questions before comparing price: do you carry a skid board and piano straps, are you insured for the instrument's full value, and have you worked my building or neighborhood before? One form here sends those questions to up to 4 Tampa Bay specialists at once.",
  },
  {
    q: "What happens if my piano is damaged during the move?",
    a: "Basic valuation included in most quotes pays by weight — a fraction of what a piano is worth. Ask for full-value coverage in writing before pickup, photograph the piano from all sides, and note any existing marks on the bill of lading before the crew leaves.",
  },
];

function PianoMoversTampaPage() {
  return (
    <>
      <Hero />
      <NetworkDisclosure />
      <PianoTypes />
      <CostTable />
      <AccessChallenges />
      <HowItWorks />
      <Insurance />
      <Areas />
      <Faq />
      <BottomCta />
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
          locking straps and the humidity know-how a 600-pound instrument demands. A general
          crew improvising with furniture dollies is how soundboards crack; with an
          instrument worth thousands, the right crew costs less than the wrong repair.
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
          Local Tampa Bay pricing — typical ranges labeled as estimates; your quote depends
          on piano type, stair count, distance between addresses and access at both ends.
          Long-distance piano transport (Tampa to Miami, Orlando or out of state) is quoted
          by route — typically $700-$2,500. Every quote includes padding, straps, skid board
          and basic valuation. For a deeper breakdown by piano type and scenario, see{" "}
          <Link to="/piano-moving-cost/" className="text-brand font-semibold underline underline-offset-2">
            what piano moving costs in Florida
          </Link>
          .
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
            Equipment and Process: How Professional Piano Movers Work
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Piano moving is a rigging job, not a carrying job. The crews we match you with
            arrive with a piano board (skid), locking straps, thick moving pads and
            stair-climbing dollies — and for grands, they remove the legs and lyre and
            travel the body on its side on the skid. That disassembly is standard, not an
            upsell: it is what lets a 6-foot grand fit a doorway safely.
          </p>
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

const PIANO_TYPES = [
  { t: "Upright", d: "The Tampa standard — 300-500 lbs, moved upright on a dolly and skid. Full uprights need 3 movers on stairs; the cabinet wraps fully in pads before it leaves the room." },
  { t: "Spinet and console", d: "The shortest uprights, common in Tampa apartments. Light enough for a 2-person crew, but the legs and pedals still come off on consoles before wrapping." },
  { t: "Baby grand (under 6 ft)", d: "Legs and lyre removed, body traveled on its side on the skid board. Fits most Tampa doorways and service elevators — measure the turn at the door, not just the doorway width." },
  { t: "Grand and concert grand", d: "6 ft and up: full disassembly, skid board, and frequently a 4-person crew. Some downtown elevators will not take one — that is when hoisting is quoted case by case." },
  { t: "Digital", d: "Lighter but top-heavy with fragile cabinet corners. Moved like furniture with piano-level padding; cabinet-style digitals are handled like small uprights." },
];

function PianoTypes() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Instruments</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Piano Types We Get Quotes For
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PIANO_TYPES.map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg font-bold text-ink">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Statewide coverage for every type — see the{" "}
          <Link to="/piano-movers/" className="text-brand font-semibold underline underline-offset-2">
            Florida piano moving hub
          </Link>
          , or the dedicated guide for{" "}
          <Link to="/grand-piano-movers/" className="text-brand font-semibold underline underline-offset-2">
            grand and baby grand piano movers
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

const ACCESS = [
  { t: "Stairs and tight doorways", d: "Each flight adds crew time and cost — typically $40-$100 per flight as an estimate. Bungalow doorways under 32 inches and tight landing turns are measured during the quote, not discovered on moving day." },
  { t: "Downtown and Channelside condos", d: "High-rises require a certificate of insurance naming the association, plus a reserved service elevator and loading dock window. Send the building rules with your quote request so the crew books both." },
  { t: "Hyde Park and Seminole Heights historic homes", d: "Narrow halls, original wood floors and porch steps are the norm. Crews pad door frames and run floor protection; grands may need a doorway turn rehearsed before the skid rolls." },
  { t: "Tampa humidity", d: "Gulf humidity and AC swings detune pianos fast. Specialists place the instrument away from vents and exterior walls, and you should plan a tuning 2-4 weeks after the move." },
];

function AccessChallenges() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Local knowledge</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Tampa Access Challenges a Piano Crew Plans Around
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {ACCESS.map((a) => (
            <div key={a.t} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg font-bold text-ink">{a.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Moving the rest of the house too? Our{" "}
          <Link to="/movers-in-tampa/" className="text-brand font-semibold underline underline-offset-2">
            Tampa movers cost and neighborhood guide
          </Link>{" "}
          covers full-household pricing across the bay.
        </p>
      </div>
    </section>
  );
}

const INSURANCE_ASKS = [
  "Is the piano covered for its full replacement value, or basic released-value by weight? Get full-value coverage in writing before pickup.",
  "Who physically moves the piano — your trained crew or a subcontractor? Either is fine; an unqualified crew is not.",
  "What equipment comes to the job: skid board, piano straps, pads, stair-climbing dolly?",
  "How are claims filed and within how many days? Photograph the piano before pickup and note existing marks on the paperwork.",
];

function Insurance() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Protection</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          Insurance and What to Ask Before Hiring a Tampa Piano Mover
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          The default coverage on most moves pays by weight — roughly $0.60 per
          pound on long-distance shipments — which values a $10,000 grand at a
          few hundred dollars. Before you book, ask:
        </p>
        <ul className="mt-8 space-y-4">
          {INSURANCE_ASKS.map((q) => (
            <li key={q} className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-soft">
              <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
              <span className="text-sm md:text-base leading-relaxed text-ink">{q}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BottomCta() {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container-page py-16 md:py-20 text-center max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Compare Tampa Piano Moving Quotes
        </h2>
        <p className="mt-4 text-base md:text-lg opacity-90 leading-relaxed">
          Tell us the piano type, the stairs and the addresses — we match you
          with up to 4 Tampa Bay piano specialists. Free, no obligation.
        </p>
        <div className="mt-8">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Tampa Piano Quotes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="mt-6 text-sm opacity-80">
          ¿Prefieres ayuda en español?{" "}
          <Link to="/es/piano-movers-tampa/" className="underline font-semibold">
            Mudanzas de pianos en Tampa
          </Link>
          .
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
