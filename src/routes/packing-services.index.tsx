import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
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
    description: 'Professional packers in Florida from $280. Full packing, fragile-only and unpacking services from licensed movers. Compare free quotes today.',
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
];

function PackingServicesPage() {
  return (
    <>
      <Hero />
      <CostTable />
      <FullVsFragile />
      <FloridaFactor />
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
