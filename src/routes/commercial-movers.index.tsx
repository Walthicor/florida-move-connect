import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { ProseSection, SubBlock, CardGrid, CheckList } from "@/components/site/ContentSections";
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
  head: () => pageHead({
    path: "/commercial-movers/",
    title: "Commercial Movers in Florida | Compare Free Quotes",
    description: "Compare licensed commercial movers in Florida for office, retail and business relocations. Request free quotes with no obligation.",
    service: { serviceType: 'Commercial and Office Moving', areaServed: 'Florida' },
    faqs: FAQS,
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
  {
    q: "Will our landlord need a certificate of insurance from the commercial mover?",
    a: "Almost always. Commercial landlords and property managers in Florida require a COI naming the building owner and management company as additional insured, with general liability and workers' compensation listed, before the freight elevator is released.",
  },
  {
    q: "Do commercial movers in Florida handle server rooms and IT equipment?",
    a: "Yes. Server racks, network gear and workstations are inventoried, shut down in a documented sequence, transported anti-static and reconnected to a port map. Coordinate the cutover window with your IT team before the move date is booked.",
  },
];

function CommercialMoversPage() {
  return (
    <>
      <Hero />
      <CostTable />
      <MoveTypes />
      <Scheduling />
      <ITHandling />
      <CoiSection />
      <CityCoverage />
      <AfterHours />
      <ITSection />
      <Checklist />
      <Faq />
    </>
  );
}

function MoveTypes() {
  return (
    <ProseSection
      eyebrow="Project types"
      title="Office Relocation vs Warehouse Move vs Retail Buildout"
      bg="bg-background"
    >
      <p>
        "Commercial moving" covers three jobs that share almost nothing
        operationally. Telling a commercial mover which one you have is the
        fastest way to a realistic quote.
      </p>
      <CardGrid cols={3}>
        <SubBlock title="Office relocation">
          <p>
            Workstations, cubicle systems, conference furniture, files and IT.
            Priced by station count and floor plan complexity, with labeling and
            rebuild to a numbered seating chart. Building access at both ends
            usually drives the schedule more than distance does.
          </p>
        </SubBlock>
        <SubBlock title="Warehouse and industrial">
          <p>
            Racking, pallets, inventory and machinery. Needs forklifts, dock
            height matching and often a phased plan so shipping never fully stops.
            Weight and equipment rigging replace station count as the pricing
            driver.
          </p>
        </SubBlock>
        <SubBlock title="Retail buildout">
          <p>
            Fixtures, displays, POS hardware and stock, usually sequenced around a
            construction schedule and a fixed opening date. Deliveries are staged
            to arrive as trades finish, not all at once.
          </p>
        </SubBlock>
      </CardGrid>
    </ProseSection>
  );
}

function Scheduling() {
  return (
    <ProseSection
      eyebrow="Downtime"
      title="After-Hours and Weekend Scheduling to Avoid Business Downtime"
      bg="bg-surface-alt"
    >
      <p>
        The real cost of an office move is rarely the invoice — it is the hours
        your staff cannot work. Commercial movers schedule around that by loading
        after close on Friday and rebuilding through the weekend, so the office is
        operational Monday morning. Many Florida buildings only permit freight
        elevator use outside business hours anyway, which makes evening and
        weekend work the default rather than the exception.
      </p>
      <CheckList
        items={[
          "Book the freight elevator and loading dock the same day you book the mover — in multi-tenant towers those slots go first.",
          "Phase larger offices across consecutive weekends by department so no team loses more than one workday.",
          "Agree a labeling and floor-plan numbering system before packing starts; rebuild speed depends on it entirely.",
          "Confirm building security procedures for after-hours access, badge escorts and elevator operators.",
        ]}
      />
    </ProseSection>
  );
}

function ITHandling() {
  return (
    <ProseSection
      eyebrow="Technology"
      title="IT and Server Equipment Handling"
      bg="bg-background"
    >
      <p>
        Servers, network switches, UPS units and workstations are the highest-risk
        items in any office relocation, and they are the reason a commercial move
        needs a documented sequence rather than a truck and a crew. Equipment is
        inventoried by asset tag, powered down in an agreed order, cabling is
        photographed and labeled, and racks are moved on air-ride equipment with
        anti-static protection.
      </p>
      <p>
        Reconnection is the half people underestimate. Give the mover and your IT
        provider the same port map and rack elevation, and schedule the cutover so
        the network is tested before staff return. Anything business-critical —
        backups, cloud failover, phone routing — should be verified the evening
        before, not on the morning after.
      </p>
    </ProseSection>
  );
}

function CoiSection() {
  return (
    <ProseSection
      eyebrow="Paperwork"
      title="Certificate of Insurance Requirements Landlords Demand"
      bg="bg-surface-alt"
    >
      <p>
        In Florida commercial property, no COI means no elevator. Property
        managers require a certificate of insurance from the moving company before
        move day, and they are specific about what appears on it. A mover who
        cannot produce one within a day is a mover who has not done this before.
      </p>
      <CheckList
        items={[
          "The building owner and the management company named as additional insured — both, exactly as the lease spells them.",
          "General liability at the limit the lease requires, commonly $1M per occurrence with a $2M aggregate.",
          "Workers' compensation coverage listed, since the crew works inside the landlord's property.",
          "Auto liability and cargo coverage for the vehicles on the dock.",
          "Submitted to property management in advance of the move date — most buildings want it days ahead, not on arrival.",
        ]}
      />
      <p>
        The same requirement follows you into residential towers.{" "}
        <Link to="/apartment-movers/">
          Apartment and condo buildings ask for near-identical paperwork
        </Link>
        , which is why COI-ready crews handle both.
      </p>
    </ProseSection>
  );
}

function CityCoverage() {
  return (
    <ProseSection
      eyebrow="Coverage"
      title="Florida Commercial Movers by Market"
      bg="bg-background"
    >
      <p>
        Office movers in Florida work the state's business corridors, and building
        rules differ noticeably between them.
      </p>
      <CheckList
        items={[
          <>
            <strong className="text-ink">Miami and Miami-Dade</strong> — Brickell and
            Downtown towers run the strictest dock and COI regimes; see{" "}
            <Link to="/movers-in-miami/">what Miami access rules involve</Link>.
          </>,
          <>
            <strong className="text-ink">Tampa</strong> — Westshore and Downtown office
            parks, covered in our{" "}
            <Link to="/movers-in-tampa/">Tampa moving guide</Link>.
          </>,
          <>
            <strong className="text-ink">Orlando</strong> — corporate and hospitality
            relocations across{" "}
            <Link to="/movers-in-orlando/">Central Florida</Link>.
          </>,
          <>
            <strong className="text-ink">Jacksonville</strong> — logistics and warehouse
            work along the{" "}
            <Link to="/movers-in-jacksonville/">Northeast Florida corridor</Link>.
          </>,
          <>
            <strong className="text-ink">Boca Raton and Palm Beach County</strong> —
            professional-services offices;{" "}
            <Link to="/movers-in-boca-raton/">see local rates</Link>.
          </>,
        ]}
      />
    </ProseSection>
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
