import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { ProseSection, SubBlock, CardGrid, CheckList } from "@/components/site/ContentSections";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  DollarSign,
  Lock,
  Award,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/long-distance-movers/")({
  head: () => pageHead({
    path: "/long-distance-movers/",
    title: 'Long Distance Movers in Florida | Compare Quotes & Save 40%',
    description: 'Compare free quotes from licensed long distance moving companies in Florida. Binding estimates, FMCSA-verified movers, routes to all 50 states. 2026 rates inside.',
    service: { serviceType: 'Long Distance Moving', areaServed: 'Florida' },
    faqs: FAQS,
  }),
  component: LongDistancePage,
});

const COST_ROWS = [
  { route: "Miami to Atlanta (660 mi)", br1: "$1,800 – $2,900", br2: "$2,800 – $4,500", br4: "$4,200 – $6,800" },
  { route: "Tampa to New York (1,130 mi)", br1: "$2,300 – $3,600", br2: "$3,500 – $5,800", br4: "$5,500 – $8,500" },
  { route: "Orlando to Dallas (1,080 mi)", br1: "$2,200 – $3,400", br2: "$3,400 – $5,500", br4: "$5,200 – $8,000" },
  { route: "Florida to California (2,700 mi)", br1: "$3,200 – $4,900", br2: "$4,800 – $7,500", br4: "$7,000 – $11,000" },
  { route: "Within Florida (100+ mi)", br1: "$1,100 – $1,900", br2: "$1,700 – $3,200", br4: "$2,900 – $5,200" },
];

const ESTIMATE_TYPES = [
  {
    icon: Lock,
    tone: "brand" as const,
    label: "Binding Estimate",
    body:
      "Your price is locked to the surveyed inventory. The mover cannot charge more at delivery. Best when your budget is fixed.",
  },
  {
    icon: Award,
    tone: "cta" as const,
    label: "Binding-Not-To-Exceed",
    body:
      "The gold standard — your price cannot rise, but it drops if the actual weight comes in lower. Ask for this by name; not every carrier volunteers it.",
  },
  {
    icon: AlertTriangle,
    tone: "navy" as const,
    label: "Non-Binding Estimate",
    body:
      "The final bill follows actual weight. Federal law caps what you must pay at delivery at 110% of the estimate, with the remainder invoiced later. Fine for small flexible moves; risky for full households.",
  },
];

const VERIFY_STEPS = [
  "Ask for the USDOT number — legitimate carriers print it on everything.",
  "Run it through the FMCSA mover search at fmcsa.dot.gov: authority must be ACTIVE with insurance on file.",
  "Confirm whether you are dealing with a CARRIER (owns the trucks) or a BROKER (resells your move). Brokers are legal — but then verify the carrier who actually shows up.",
  "Check the complaint history. Patterns matter more than one bad review.",
];

const TIMELINE = [
  { region: "Florida to the Southeast", time: "1-4 days" },
  { region: "Florida to the Northeast or Midwest", time: "3-8 days" },
  { region: "Florida to the West Coast", time: "7-14 days" },
];

const FAQS = [
  {
    q: "How much do long distance movers cost in Florida?",
    a: "A 2-3 bedroom home averages $2,800-$5,500 depending on distance. Short interstate routes start around $1,800 for small homes; cross-country runs $4,800-$7,500 for a typical household.",
  },
  {
    q: "Is a move from Miami to Orlando a long distance move?",
    a: "Yes — an intrastate long distance move. It stays under Florida FDACS rules rather than federal ones, but at 235 miles it is priced by inventory and distance, not by the hour.",
  },
  {
    q: "Do long distance movers offer storage if my new home is not ready?",
    a: "Yes — storage-in-transit (SIT) keeps your shipment in the carrier warehouse for up to 90 days, typically $150-$400/month plus a redelivery fee.",
  },
  {
    q: "What should never go in the moving truck?",
    a: "Documents, medications, jewelry, cash and anything irreplaceable travel with you. In Florida heat, add candles, electronics and instruments to the keep-with-me list — truck interiors can pass 120°F in summer.",
  },
  {
    q: "Which Florida long distance moving companies can I trust?",
    a: "Any interstate carrier must hold active FMCSA operating authority and a USDOT number with insurance on file. That single check separates real Florida long distance movers from brokers and rogue operators.",
  },
  {
    q: "Can I get a long distance moving instant quote?",
    a: "You can get instant ballpark ranges online, but a price you can hold a mover to comes from a video or in-home survey. Use the instant number to shortlist, then convert it into a binding written estimate.",
  },
];

function LongDistancePage() {
  return (
    <>
      <Hero />
      <CostTable />
      <InboundMoves />
      <Estimates />
      <BindingBlog />
      <PianoTransport />
      <SouthwestCoverage />
      <Verify />
      <Timeline />
      <Faq />
    </>
  );
}

function InboundMoves() {
  return (
    <ProseSection
      eyebrow="Inbound routes"
      title="Moving to Florida From Out of State"
      bg="bg-background"
    >
      <p>
        Most of the volume on Florida interstate moving lanes runs one direction:
        in. Every inbound route below is handled by carriers that must hold active
        FMCSA operating authority and a USDOT number, and on each one a binding
        estimate is what keeps the delivery-day invoice from drifting. Transit
        windows are delivery spreads, not guarantees — long-haul shipments share
        trailer space, and the mover commits to a range in writing.
      </p>
      <CardGrid>
        <SubBlock title="From New York City to South Florida">
          <p>
            Typical transit is roughly 3-6 days to Palm Beach and Broward
            addresses. Movers from NYC to Boca Raton deal with two hard access
            problems at once: a Manhattan or Brooklyn origin with permit parking
            and elevator windows, and a South Florida association that wants a
            certificate of insurance before the truck reaches the loading dock.
            Get both buildings' rules to the carrier before the estimate is
            signed, and insist on binding-not-to-exceed pricing.
          </p>
        </SubBlock>
        <SubBlock title="From Chicago to Florida">
          <p>
            Chicago to Boca Raton and the rest of South Florida usually runs 3-7
            days in transit. Winter departures are the busy window for this lane,
            and weather delays at origin are the most common reason a spread
            stretches. Confirm the carrier's USDOT authority is active, and ask
            how the estimate changes if the pickup date moves.
          </p>
        </SubBlock>
        <SubBlock title="From Washington DC to Miami">
          <p>
            Movers from DC to Miami generally quote 2-5 days. The complication is
            almost always the destination: Miami-Dade high-rises schedule service
            elevators in blocks and require an HOA-approved COI. A binding
            estimate protects you when the building forces a shuttle or a second
            delivery attempt. Our{" "}
            <Link to="/movers-in-miami/">Miami moving cost guide</Link> covers the
            dock and elevator rules in detail.
          </p>
        </SubBlock>
        <SubBlock title="From the West Coast to Florida">
          <p>
            San Francisco to Miami movers and other cross-country lanes run the
            longest spreads — commonly 7-14 days. On a haul this long the weight
            of your shipment drives the price, so a survey-based binding estimate
            matters more than anywhere else. Verify the FMCSA record of the
            carrier that actually loads the truck, not just the company that took
            your call.
          </p>
        </SubBlock>
      </CardGrid>
    </ProseSection>
  );
}

function BindingBlog() {
  return (
    <ProseSection
      title="Binding vs Non-Binding Estimates"
      bg="bg-background"
    >
      <p>
        The estimate type is the contract term that decides what you actually pay
        on delivery day. Binding locks the price to the surveyed inventory.
        Binding-not-to-exceed can only move down. Non-binding follows actual
        weight, and federal rules cap what you must pay at delivery at 110% of the
        written estimate — with the balance billed afterwards.
      </p>
      <p>
        We wrote a full walkthrough of how each one behaves when the inventory
        changes, what a reweigh looks like, and the language to ask for before
        signing:{" "}
        <a href="/blog/binding-vs-non-binding-moving-estimates/">
          how binding and non-binding moving estimates differ in practice
        </a>
        .
      </p>
    </ProseSection>
  );
}

function PianoTransport() {
  return (
    <ProseSection
      eyebrow="Specialty freight"
      title="Interstate Piano Transport"
      bg="bg-surface-alt"
    >
      <p>
        A piano on an interstate move is specialty freight, not another box. Piano
        movers interstate crate or board-and-wrap the instrument, secure it upright
        or on its side depending on type, and load it where trailer shift is
        lowest. Uprights and grands are handled differently, and grands are almost
        always removed from their legs and travel on a skid board.
      </p>
      <p>
        The valuation issue is the part people miss. Basic released-value
        protection on an interstate shipment pays $0.60 per pound, per article —
        so a 700-pound grand worth five figures would settle at roughly $420 if it
        is damaged. Declare full-value protection separately for the instrument,
        in writing, before pickup.
      </p>
      <CheckList
        items={[
          <>
            Start with our{" "}
            <Link to="/piano-movers/">Florida piano moving hub</Link> for crew
            requirements, crating and what specialist handling costs.
          </>,
          <>
            Concert and baby grands have their own procedure — see{" "}
            <Link to="/grand-piano-movers/">grand piano transport</Link>.
          </>,
          "Ask whether the piano travels on the same truck the whole way or is transferred at a terminal.",
        ]}
      />
    </ProseSection>
  );
}

function SouthwestCoverage() {
  return (
    <ProseSection
      eyebrow="Regional coverage"
      title="Southwest Florida Long-Distance Coverage"
      bg="bg-background"
    >
      <p>
        Southwest Florida generates a steady flow of outbound interstate work, and
        the carriers in our network run the corridor as one service area. Estero
        FL long distance movers, Naples households heading north for the summer,
        Fort Myers relocations and Bonita Springs seasonal residents are all quoted
        on the same lane pricing as the rest of the state — the difference is
        pickup routing, not rate.
      </p>
      <p>
        Gulf-side communities add two practical wrinkles: gated developments that
        restrict truck size and hurricane-season scheduling that compresses summer
        availability. Name the community and the gate rules when you request
        quotes. For local work in the region, see our{" "}
        <Link to="/movers-in-naples/">Naples moving guide</Link>, and for
        statewide hourly pricing start with{" "}
        <Link to="/local-movers-in-florida/">local movers in Florida</Link>.
      </p>
    </ProseSection>
  );
}


function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
      <div className="container-page py-14 md:py-20 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          <ShieldCheck className="h-3.5 w-3.5" />
          FMCSA-Verified Long Distance Carriers
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Long Distance Movers in <span className="text-brand">Florida</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Long distance moves from Florida cost $1,800-$8,000+ depending on
          route and home size, and the single biggest factor in what YOU pay is
          comparing binding quotes from verified carriers. We connect you with
          FMCSA-registered long distance moving companies — the ones that pass
          federal verification, publish real delivery windows, and put every
          number in writing. One form, up to 4 competing quotes, zero
          obligation.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Free Long Distance Quotes <ArrowRight className="h-4 w-4" />
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
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Pricing
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Long Distance Moving Costs from Florida (2026)
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden md:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Route</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">1 Bedroom</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">2-3 Bedroom</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">4+ Bedroom</th>
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map((r, i) => (
                <tr key={r.route} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.route}</td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.br1}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.br2}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.br4}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="md:hidden divide-y divide-border">
            {COST_ROWS.map((r) => (
              <div key={r.route} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.route}</div>
                <dl className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">1 Bedroom</dt>
                    <dd className="font-semibold text-ink">{r.br1}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">2-3 Bedroom</dt>
                    <dd className="font-semibold text-ink">{r.br2}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">4+ Bedroom</dt>
                    <dd className="font-semibold text-ink">{r.br4}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
          Rates include linehaul, fuel and basic valuation. Your exact price
          depends on actual weight, access at both homes, and season.
        </p>
      </div>
    </section>
  );
}

function Estimates() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            The Contract
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Binding vs. Non-Binding Estimates: The Contract Detail That Protects You
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ESTIMATE_TYPES.map((e) => {
            const toneClass =
              e.tone === "brand"
                ? "bg-brand/10 text-brand"
                : e.tone === "cta"
                ? "bg-cta/10 text-cta"
                : "bg-navy/10 text-navy";
            const Icon = e.icon;
            return (
              <div
                key={e.label}
                className="rounded-2xl border border-border bg-white p-6 shadow-soft"
              >
                <span className={"inline-flex h-11 w-11 items-center justify-center rounded-lg " + toneClass}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {e.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {e.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Verify() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">
          Due Diligence
        </span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          How to Verify a Long Distance Mover Before You Book
        </h2>
        <ul className="mt-8 space-y-4">
          {VERIFY_STEPS.map((step) => (
            <li
              key={step}
              className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-soft"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
              <span className="text-sm md:text-base leading-relaxed text-ink">{step}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base md:text-lg leading-relaxed text-ink">
          Every long distance mover in our network passes this exact
          verification before receiving a single quote request —{" "}
          <span className="font-semibold text-brand">
            that filter is the product.
          </span>
        </p>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Delivery Windows
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            How Long Does a Long Distance Move Take?
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TIMELINE.map((t) => (
            <div
              key={t.region}
              className="rounded-2xl border border-border bg-white p-6 shadow-soft"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ink">
                {t.region}
              </h3>
              <p className="mt-2 font-display text-2xl font-bold text-cta">
                {t.time}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl">
          Carriers quote a delivery window, not an exact date — dedicated or
          expedited service shrinks the window for a premium.
        </p>
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
          Long Distance Movers FAQ
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
