import { createFileRoute, Link } from "@tanstack/react-router";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
import { pageHead } from "@/lib/seo";
import { ProseSection, SubBlock, CardGrid, CheckList } from "@/components/site/ContentSections";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  DollarSign,
  ThermometerSun,
  Warehouse,
} from "lucide-react";

export const Route = createFileRoute("/storage-solutions/")({
  head: () => pageHead({
    path: "/storage-solutions/",
    title: 'Moving and Storage in Florida | Climate-Controlled Options',
    description: "Moving and storage in Florida explained: storage-in-transit vs self-storage vs containers, climate control and condo storage tips. Compare free mover quotes.",
    service: { serviceType: 'Moving and Storage', areaServed: 'Florida' },
    faqs: FAQS,
  }),
  component: StorageSolutionsPage,
});

const COST_ROWS = [
  {
    type: "Storage-in-transit (mover warehouse)",
    use: "Gaps between closing dates",
    price: "$150-$400/mo + redelivery",
  },
  {
    type: "Self-storage 5x10 climate-controlled",
    use: "1 bedroom contents",
    price: "$95-$160/mo",
  },
  {
    type: "Self-storage 10x15 climate-controlled",
    use: "2-3 bedroom contents",
    price: "$150-$260/mo",
  },
  {
    type: "Portable container",
    use: "DIY pace + storage",
    price: "$120-$250/mo + delivery",
  },
];

const FAQS = [
  {
    q: "Can my moving company store my belongings between homes?",
    a: "Yes — that is storage-in-transit, offered by most full-service Florida movers for up to 90 days. Ask for the monthly rate and the redelivery fee in the same quote.",
  },
  {
    q: "What items should never go into non-climate storage in Florida?",
    a: "Solid wood furniture, leather, electronics, photos, artwork, instruments, candles and anything with adhesive. In practice: if you care about it, climate-control it.",
  },
  {
    q: "Is a portable container cheaper than a mover with storage?",
    a: "For flexible DIY timelines, often yes. For full households needing loading labor anyway, SIT usually wins on total cost and single-company accountability.",
  },
  {
    q: "What is the difference between mover storage and self-storage?",
    a: "Storage-in-transit keeps your shipment on the mover's inventory in a warehouse you do not visit; self-storage is a unit you rent and access yourself. One company handles the whole chain with SIT, which is what most established moving and storage companies in Florida quote for closing-date gaps.",
  },
  {
    q: "What is the best storage option for newcomers moving into a Florida condo?",
    a: "If the condo is ready on a known date, storage-in-transit with your mover is usually simplest because the same crew redelivers on the building's schedule. If you are still deciding what fits, rent a climate-controlled self-storage unit near the condo. Check the association's move-in rules before you book either.",
  },
  {
    q: "How long can a mover keep my things in storage-in-transit?",
    a: "Storage-in-transit is meant for short gaps, and many Florida movers offer it for up to about 90 days. Terms vary, so ask each mover for its limit, the monthly rate and what happens if your date moves past it.",
  },
  {
    q: "Is moving and storage in Ocala FL available from the same company?",
    a: "Yes. Marion County movers commonly quote load, store and redeliver as one job, so your furniture is handled once rather than twice.",
  },
];

function StorageSolutionsPage() {
  return (
    <>
      <Hero />
      <NetworkDisclosure />
      <CostTable />
      <NeedClimateControl />
      <WhatIsSit />
      <ComparisonTable />
      <SitVsSelf />
      <CondoNewcomers />
      <ClimateSection />
      <OverlapScenarios />
      <ClimateControl />
      <StorageInTransit />
      <CityCoverage />
      <Faq />
    </>
  );
}

function NeedClimateControl() {
  return (
    <ProseSection
      eyebrow="Florida humidity"
      title="Do You Need Climate-Controlled Storage in Florida?"
      bg="bg-surface-alt"
    >
      <p>
        For most household goods, yes. Florida's heat and humidity last for much of the year, and
        humidity is what warps wood, grows mildew on fabric and corrodes electronics. A
        climate-controlled unit keeps temperature and humidity in a narrower band than the outside
        air. If you are storing anything for more than a few weeks, or anything you would be upset
        to lose, choose climate control.
      </p>
      <CardGrid>
        <SubBlock title="Climate control is worth it for">
          <p>
            Wood and upholstered furniture, mattresses, leather, electronics, photos and documents,
            artwork, musical instruments, and anything you plan to keep long term.
          </p>
        </SubBlock>
        <SubBlock title="A standard unit can be fine for">
          <p>
            Metal patio furniture, plastic bins of seasonal decor, garden tools and other items that
            tolerate heat and moisture, for short periods.
          </p>
        </SubBlock>
      </CardGrid>
      <p>
        Ask the facility or mover how the space is conditioned, not just whether it is "indoor."
        For a full breakdown of what to look for, read our deep dive on{" "}
        <Link to="/blog/$slug/" params={{ slug: "climate-controlled-storage-florida" }}>
          climate-controlled storage in Florida
        </Link>
        .
      </p>
    </ProseSection>
  );
}

function WhatIsSit() {
  return (
    <ProseSection
      eyebrow="Mover storage"
      title="What Is Storage-in-Transit (SIT)?"
      bg="bg-background"
    >
      <p>
        Storage-in-transit is short-term storage provided by your moving company as part of the
        move. The crew loads your home, the mover holds the inventoried shipment in its warehouse,
        and the same company delivers it to your new address when you are ready. You do not visit
        the warehouse or unload anything yourself.
      </p>
      <CheckList
        items={[
          "How it is billed: usually a monthly or daily storage charge plus a redelivery charge, quoted alongside the move.",
          "How long it lasts: it is designed for short gaps — many Florida movers offer up to about 90 days. Ask each mover for its own limit.",
          "Who is responsible: one company holds your goods from pickup to delivery, so there is a single inventory and a single claim process.",
          "What you give up: access. You generally cannot pull out a box mid-stay, so keep essentials with you.",
        ]}
      />
      <p>
        SIT is the usual answer when a closing date slips, a builder runs late or a lease starts
        after you have to be out. Ask for it in the quote form so each mover prices the full
        sequence, and confirm whether the warehouse space is climate-controlled.
      </p>
    </ProseSection>
  );
}

const COMPARE_ROWS = [
  {
    label: "Who loads and unloads",
    sit: "The mover, start to finish",
    self: "You, or a crew you hire each time",
    pod: "You, or labor you hire",
  },
  {
    label: "Access while stored",
    sit: "Generally none",
    self: "Whenever the facility is open",
    pod: "On your driveway; limited once moved to the depot",
  },
  {
    label: "Number of moves",
    sit: "One move, with a pause",
    self: "Two: home to unit, unit to new home",
    pod: "One container, delivered twice",
  },
  {
    label: "Best for",
    sit: "Known gaps between closing or lease dates",
    self: "Open-ended timelines or regular access",
    pod: "Flexible, do-it-yourself pace",
  },
  {
    label: "Watch out for",
    sit: "Time limits and redelivery fees",
    self: "Two rounds of labor and split responsibility",
    pod: "HOA and condo rules on driveway or street placement",
  },
  {
    label: "Climate control",
    sit: "Ask whether the warehouse is conditioned",
    self: "Widely available at a higher monthly rate",
    pod: "Depends on the company's storage facility",
  },
];

function ComparisonTable() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Compare</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Storage-in-Transit vs Self-Storage vs Portable Container
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A side-by-side look at how each option works. For typical monthly prices, see the cost
            table above.
          </p>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden md:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Feature</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Storage-in-Transit</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Self-Storage</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Portable Container</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((r, i) => (
                <tr key={r.label} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.label}</td>
                  <td className="px-6 py-4 text-sm text-ink">{r.sit}</td>
                  <td className="px-6 py-4 text-sm text-ink">{r.self}</td>
                  <td className="px-6 py-4 text-sm text-ink">{r.pod}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="md:hidden divide-y divide-border">
            {COMPARE_ROWS.map((r) => (
              <div key={r.label} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.label}</div>
                <dl className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Storage-in-transit</dt>
                    <dd className="font-semibold text-ink">{r.sit}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Self-storage</dt>
                    <dd className="font-semibold text-ink">{r.self}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Portable container</dt>
                    <dd className="font-semibold text-ink">{r.pod}</dd>
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

function CondoNewcomers() {
  return (
    <ProseSection
      eyebrow="New to Florida"
      title="Storage for Condo and Apartment Newcomers"
      bg="bg-surface-alt"
    >
      <p>
        The best storage solution for newcomers moving into a Florida condo or apartment depends on
        two things: whether your move-in date is fixed, and how much of your old home will actually
        fit. Condos and apartments are often smaller than the house people are leaving, and the
        building sets the rules for when furniture can come in.
      </p>
      <CheckList
        items={[
          <>
            <strong className="text-ink">Move-in date is fixed, everything fits:</strong> use
            storage-in-transit if you arrive before the unit is ready. The mover redelivers on the
            building's elevator schedule, with a certificate of insurance already on file.
          </>,
          <>
            <strong className="text-ink">Not sure what fits:</strong> rent a climate-controlled
            self-storage unit close to the new building, move only what fits the floor plan, and
            decide on the rest once you have lived in the space.
          </>,
          <>
            <strong className="text-ink">Seasonal or second-home condo:</strong> a small
            climate-controlled unit for off-season items and hurricane supplies keeps a compact
            condo usable.
          </>,
          <>
            <strong className="text-ink">Portable containers:</strong> check first. Many condo and
            apartment communities restrict where a container can sit, or do not allow one at all.
          </>,
        ]}
      />
      <p>
        Before you book, ask the association or property manager for its move-in hours, elevator
        reservation process and insurance requirements, and pass them to every mover you are
        comparing. Our guide to{" "}
        <Link to="/apartment-movers/">apartment and condo movers in Florida</Link> covers the
        building side in more detail. If you are new to the state, the{" "}
        <Link to="/blog/$slug/" params={{ slug: "interstate-move-to-florida-timeline" }}>moving to Florida guide</Link> walks through the
        rest of the relocation.
      </p>
    </ProseSection>
  );
}

function SitVsSelf() {
  return (
    <ProseSection
      eyebrow="Two different products"
      title="Storage-in-Transit vs Self-Storage: What Actually Differs"
      bg="bg-background"
    >
      <p>
        People searching for moving and storage companies in Florida are usually
        choosing between two things that only look similar. Storage-in-transit
        (SIT) is warehouse space provided by the mover: your shipment stays
        inventoried, palletized or vaulted, and the same company that loaded it
        redelivers it. Self-storage is a unit you rent directly, load yourself or
        pay a crew to load, and access whenever you like.
      </p>
      <CardGrid>
        <SubBlock title="Storage-in-transit (mover-provided)">
          <p>
            One contract, one inventory list, one party accountable for damage.
            Typically capped around 90 days, billed monthly with a redelivery fee.
            You cannot walk in and grab a box — the warehouse is not a
            self-access facility. This is what trusted moving and storage
            operators quote when a closing slips.
          </p>
        </SubBlock>
        <SubBlock title="Self-storage (you rent the unit)">
          <p>
            Cheapest per square foot and open-ended, but you handle two moves:
            house to unit, unit to new home. Liability splits between the facility
            and whoever you hire each time. Best when the timeline is genuinely
            unknown or you need regular access to what is stored.
          </p>
        </SubBlock>
      </CardGrid>
    </ProseSection>
  );
}

function ClimateSection() {
  return (
    <ProseSection
      eyebrow="Florida-specific"
      title="Climate-Controlled Storage and Why Florida Humidity Changes the Math"
      bg="bg-background"
    >
      <p>
        An unconditioned storage unit in Florida tracks the outside air. Through
        the summer that means sustained high heat and high relative humidity for
        months, and moisture is what damages stored contents — not the temperature
        by itself. Climate-controlled units hold both temperature and humidity in
        a narrower band, which is why every established moving and storage company
        in Florida quotes it as the default for anything valuable.
      </p>
      <CheckList
        items={[
          "Wood furniture: joints swell and shrink with humidity swings, veneer lifts and finishes cloud.",
          <>
            Pianos: soundboards, pinblocks and action parts are hygroscopic, so an
            instrument left in an unconditioned unit goes out of regulation. See{" "}
            <Link to="/piano-movers/">how specialist piano crews handle storage</Link>{" "}
            before you park one anywhere.
          </>,
          "Artwork and photographs: canvas slackens, paper cockles and mold takes hold on framed pieces.",
          "Electronics: condensation on cold boards and corrosion on connectors are the usual failure modes.",
        ]}
      />
      <p>
        Upholstery, leather, mattresses, documents and anything with adhesive
        belong on the same list. If a mover quotes a rate that looks unusually low,
        confirm whether the unit is actually conditioned.
      </p>
    </ProseSection>
  );
}

function OverlapScenarios() {
  return (
    <ProseSection
      eyebrow="When people need it"
      title="Typical Overlap Scenarios That Require Storage"
      bg="bg-surface-alt"
    >
      <CardGrid cols={3}>
        <SubBlock title="Closing-date gaps">
          <p>
            The sale funds before the purchase does. SIT covers the days or weeks
            between, and the mover redelivers when keys change hands — no second
            loading crew required.
          </p>
        </SubBlock>
        <SubBlock title="Snowbird seasonal storage">
          <p>
            Seasonal residents store furnishings between stays rather than paying
            year-round for space they use six months. Climate control is
            non-negotiable through a Florida summer.
          </p>
        </SubBlock>
        <SubBlock title="Downsizing">
          <p>
            Moving from a house into a villa or condo leaves furniture with no
            room yet. Storage buys time to sell, gift or place pieces instead of
            deciding under pressure on move day.
          </p>
        </SubBlock>
      </CardGrid>
      <p>
        Renovations, military and corporate relocations with delayed housing, and
        estate transitions produce the same requirement. In all of them the cost
        driver is duration and volume, so give the mover a realistic end date.
      </p>
    </ProseSection>
  );
}

function CityCoverage() {
  return (
    <ProseSection
      eyebrow="Coverage"
      title="Moving and Storage Coverage Across Florida"
      bg="bg-background"
    >
      <p>
        Storage capacity varies by market, and so does availability during
        season. These are the metros where our network holds the most warehouse
        space.
      </p>
      <CheckList
        items={[
          <>
            <strong className="text-ink">Ocala and Marion County</strong> — combined{" "}
            <Link to="/movers-in-ocala/">Ocala moving and storage</Link> bookings are
            routine, often tied to Villages-corridor downsizing.
          </>,
          <>
            <strong className="text-ink">Tampa Bay</strong> — see{" "}
            <Link to="/movers-in-tampa/">Tampa moving rates</Link> for local crew
            pricing alongside warehouse holds.
          </>,
          <>
            <strong className="text-ink">Orlando and Central Florida</strong> —{" "}
            <Link to="/movers-in-orlando/">Orlando movers</Link> cover relocation and
            corporate housing gaps.
          </>,
          <>
            <strong className="text-ink">Miami and Miami-Dade</strong> —{" "}
            <Link to="/movers-in-miami/">Miami moving costs</Link> include the
            high-rise access factors that also affect redelivery.
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
          Licensed Movers + Storage Partners
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Moving and Storage Solutions in <span className="text-brand">Florida</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Moving and storage in Florida comes down to three choices: storage-in-transit, where
          your mover holds your inventoried load in its warehouse (often up to 90 days, from about
          $150/month for a full household), a self-storage unit you rent yourself ($80-$260/month
          by size and climate control), or a portable container. In Florida heat and humidity,
          climate-controlled is not a luxury — it is what stands between your wood furniture and a
          warped, mildewed surprise.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Storage Quotes <ArrowRight className="h-4 w-4" />
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
            Florida Storage Costs (2026)
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Storage Type</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Best For</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Price Range</th>
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map((r, i) => (
                <tr key={r.type} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.type}</td>
                  <td className="px-6 py-4 text-ink">{r.use}</td>
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
            {COST_ROWS.map((r) => (
              <div key={r.type} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.type}</div>
                <dl className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Best For</dt>
                    <dd className="font-semibold text-ink">{r.use}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Price Range</dt>
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

function ClimateControl() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">
          Climate Protection
        </span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          Why Climate Control Is Non-Negotiable in Florida
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Ambient humidity in Florida regularly exceeds 70%. In a non-climate unit that
          means warped wood within weeks, mold on upholstery, corroded electronics and
          ruined photos. Climate-controlled units hold both temperature and humidity stable
          for $20-$50 more per month — the cheapest insurance you will ever buy for a
          household of belongings.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-soft">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cta/10 text-cta flex-shrink-0">
              <ThermometerSun className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">
                The $30/month upgrade that saves thousands
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A single solid-wood dresser or leather sofa can cost more to replace than a
                year of climate-controlled storage. For anything you plan to keep more than
                a month, the math is simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StorageInTransit() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">
          Storage-In-Transit
        </span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          Storage-in-Transit: The Option Most People Miss
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          If your new home is not ready, you do not need to rent a unit, hire two moves,
          and haul everything twice. With SIT, your mover keeps the shipment packed,
          inventoried and insured in their warehouse, then completes delivery when you say
          go. One contract, one chain of custody, no double-handling damage.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-soft">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand flex-shrink-0">
              <Warehouse className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">
                One company, one inventory, one claim path
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Because the same mover packs, stores and delivers, there is no finger
                pointing if something is damaged. That single-company accountability is why
                SIT often beats self-storage for full households, even when the monthly rate
                looks higher.
              </p>
            </div>
          </div>
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
          Storage Solutions FAQ
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
