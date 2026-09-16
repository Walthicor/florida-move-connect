import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { ProseSection, SubBlock, CardGrid, CheckList } from "@/components/site/ContentSections";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  DollarSign,
  Wine,
  Box,
  Sun,
} from "lucide-react";

export const Route = createFileRoute("/packing-services/")({
  head: () => pageHead({
    path: "/packing-services/",
    title: 'Professional Packing Services in Florida | Full & Partial',
    description: "Professional packers in Florida start near $280 for full packing, fragile-only jobs and unpacking. Compare free quotes from licensed, insured moving crews.",
    service: { serviceType: 'Packing Services', areaServed: 'Florida' },
    faqs: FAQS,
  }),
  component: PackingServicesPage,
});

const COST_ROWS = [
  {
    service: "Fragile-only packing",
    scope: "Kitchen, glass, art, electronics",
    price: "$280-$550",
  },
  {
    service: "Full packing (2-3 BR)",
    scope: "Every item boxed + materials",
    price: "$600-$1,200",
  },
  {
    service: "Full pack + unpack",
    scope: "Packing, unpacking, debris removal",
    price: "$1,000-$2,000",
  },
  {
    service: "Materials only",
    scope: "Boxes, tape, paper delivered",
    price: "$120-$350",
  },
];

const FAQS = [
  {
    q: "Is professional packing worth the cost?",
    a: "If your time is worth more than $20/hour, usually yes — you buy back 2-3 days and cut breakage dramatically. For long distance moves it also upgrades the carrier liability for your goods.",
  },
  {
    q: "Do packers bring their own materials?",
    a: "Yes — all standard materials are included in the quote. Custom crating for art, antiques or TVs over 65 inches is quoted as an add-on.",
  },
  {
    q: "Can I pack some rooms myself and hire packers for the rest?",
    a: "Absolutely — partial packing is priced by room or by hour. Most popular split: you do bedrooms and books, the pros do kitchen and breakables.",
  },
  {
    q: "What do full packing and unpacking services actually include?",
    a: "Labor, all standard cartons, paper, bubble, tape and labeling on the pack side; on the unpack side, contents placed on flat surfaces or into cabinets, plus removal of the empty boxes and packing debris. Custom crating and disposal beyond a normal load are quoted separately.",
  },
  {
    q: "Do Florida packing services cover artwork, mirrors and chandeliers?",
    a: "Yes, as specialty items. Mirrors and glass go in telescoping mirror cartons, artwork in custom-built crates when value warrants it, and chandeliers are dismantled, wrapped arm by arm and boxed to a fitted cavity.",
  },
];

function PackingServicesPage() {
  return (
    <>
      <Hero />
      <CostTable />
      <PackLevels />
      <WhatsIncluded />
      <SpecialtyItems />
      <Unpacking />
      <FullVsFragile />
      <FloridaFactor />
      <Faq />
    </>
  );
}

function PackLevels() {
  return (
    <ProseSection
      eyebrow="Choose a level"
      title="Full Pack vs Partial Pack vs Fragile-Only"
      bg="bg-background"
    >
      <p>
        Florida packing services are sold at three levels, and the right one
        depends on how much time you have rather than how much stuff you own.
      </p>
      <CardGrid cols={3}>
        <SubBlock title="Full pack">
          <p>
            The crew packs the entire home — closets, kitchen, garage, everything —
            usually in one or two days before load day. Highest cost, lowest effort,
            and the strongest position if you later file a claim, because the mover
            packed the carton.
          </p>
        </SubBlock>
        <SubBlock title="Partial pack">
          <p>
            You handle clothing, books and linens; the crew takes the rooms that
            eat time. Priced by room or by hour. The most common split is
            homeowner-packed bedrooms with professionally packed kitchen and
            breakables.
          </p>
        </SubBlock>
        <SubBlock title="Fragile-only">
          <p>
            Glassware, china, stemware, lamps, mirrors and electronics only. The
            cheapest way to protect the items that actually break, and the option
            most people should default to if the budget is tight.
          </p>
        </SubBlock>
      </CardGrid>
    </ProseSection>
  );
}

function WhatsIncluded() {
  return (
    <ProseSection
      eyebrow="Scope"
      title="What a Packing Service Actually Includes"
      bg="bg-surface-alt"
    >
      <CheckList
        items={[
          "Labor: trained packers working room by room, not the loading crew doing it in a hurry on move morning.",
          "Materials: cartons in every standard size, dish packs, wardrobe boxes, packing paper, bubble wrap, tape and stretch film.",
          "Labeling: every carton marked by room and contents so the unload crew places it where it belongs.",
          "An inventory that ties cartons to the bill of lading, which is what a claim is settled against.",
          "Disassembly of beds, tables and mirrors from dressers where the pack requires it.",
        ]}
      />
      <p>
        Quoted separately: custom wooden crates, TVs over 65 inches, gun safes,
        appliance servicing, and anything requiring a licensed trade to disconnect.
        Ask for those line items in writing rather than assuming they are folded
        into the packing rate.
      </p>
    </ProseSection>
  );
}

function SpecialtyItems() {
  return (
    <ProseSection
      eyebrow="High-value items"
      title="Specialty Item Packing: Artwork, Mirrors, TVs, Chandeliers and Pianos"
      bg="bg-background"
    >
      <CardGrid>
        <SubBlock title="Artwork and mirrors">
          <p>
            Framed pieces are corner-protected, glass-taped and packed face to face
            in mirror cartons; higher-value canvases get a built-to-size wooden
            crate. Never lay framed glass flat in a truck — it travels on edge.
          </p>
        </SubBlock>
        <SubBlock title="TVs and electronics">
          <p>
            Original cartons are best; otherwise a fitted TV box with foam corners.
            Screens travel upright and are the first thing to suffer in an
            unconditioned truck sitting in Florida sun.
          </p>
        </SubBlock>
        <SubBlock title="Chandeliers and light fixtures">
          <p>
            Removed by the crew where safe, arms and crystals wrapped individually,
            then set into a cavity cut to shape. Photograph the assembly before it
            comes down so reinstallation is straightforward.
          </p>
        </SubBlock>
        <SubBlock title="Pianos">
          <p>
            Pianos are not a packing job — they need a specialist crew, a board and
            skid, and their own valuation. Read{" "}
            <Link to="/piano-movers/">
              what professional piano handling involves
            </Link>{" "}
            before booking packers who say they can "wrap it".
          </p>
        </SubBlock>
      </CardGrid>
    </ProseSection>
  );
}

function Unpacking() {
  return (
    <ProseSection
      eyebrow="After delivery"
      title="Unpacking and Debris Removal"
      bg="bg-surface-alt"
    >
      <p>
        Full packing and unpacking services close the loop at the destination.
        Standard unpack means cartons are opened, contents are placed on counters,
        shelves and flat surfaces, and the empties are broken down and taken away
        the same day — which matters, because a three-bedroom pack produces more
        cardboard than most driveways can hold.
      </p>
      <p>
        Settle-in unpacking goes further: dishes into cabinets, clothes onto
        hangers, beds made. It is billed hourly and is worth booking for seniors,
        families with small children and anyone returning to work immediately. If
        furniture is leaving the house rather than arriving, ask about donation
        drop-off and disposal at the same time — and if some of it needs to be
        held rather than moved, our{" "}
        <Link to="/storage-solutions/">storage options</Link> cover the overlap.
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
          Licensed Packing Crews
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Professional Packing Services in <span className="text-brand">Florida</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          A professional crew packs a 3-bedroom Florida home in 4-6 hours — the same job
          that takes most families three full days and a mountain of stress. Packing services
          start at $280 for fragile-only and include every material: boxes, paper, bubble
          wrap, tape and specialty crates. And there is a hidden benefit: movers accept far
          more liability for boxes they packed themselves.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Packing Quotes <ArrowRight className="h-4 w-4" />
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
            Packing Service Costs in Florida (2026)
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Service</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">What It Covers</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Price Range</th>
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map((r, i) => (
                <tr key={r.service} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.service}</td>
                  <td className="px-6 py-4 text-ink">{r.scope}</td>
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
              <div key={r.service} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.service}</div>
                <dl className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">What It Covers</dt>
                    <dd className="font-semibold text-ink">{r.scope}</dd>
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

function FullVsFragile() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Choose Your Level
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Full Packing vs. Fragile-Only: Which One Do You Actually Need?
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <Wine className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">
              Choose fragile-only if...
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              You can box books and clothes yourself but the kitchen, the glassware and the
              TV make you nervous. This is the highest-value option for most families — the
              pros handle the 20% of items that cause 90% of breakage.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cta/10 text-cta">
              <Box className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">
              Choose full packing if...
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              You are short on time, moving long distance (carrier liability matters more),
              or physically unable to spend days packing. The crew arrives 1-2 days before
              moving day and the house becomes boxes while you handle everything else.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloridaFactor() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">
          Florida Climate
        </span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          The Florida Factor: Why Packing Quality Matters More Here
        </h2>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Heat and humidity are hard on packed goods. Professional packers use dish-pack
          double-wall boxes that survive truck temperatures, wrap electronics against
          condensation shock when moving from AC to a hot truck and back, and never pack
          candles, vinyl records or aerosols — the classic Florida melt list.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-soft">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cta/10 text-cta flex-shrink-0">
              <Sun className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">
                Pack for 120°F truck interiors
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Florida moving trucks can exceed 120°F in summer. Pros know which items melt,
                warp or sweat — and how to keep them safe. That is the difference between
                arriving with intact dishes and arriving with a box of glass shards.
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
          Packing Services FAQ
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
