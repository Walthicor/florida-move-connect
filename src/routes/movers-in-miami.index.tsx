import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { ArrowRight, ShieldCheck, ChevronDown, DollarSign, Building2, MapPin, Route as RouteIcon } from "lucide-react";

export const Route = createFileRoute("/movers-in-miami/")({
  head: () => pageHead({
    path: "/movers-in-miami/",
    title: 'Movers in Miami FL | Compare Licensed Moving Companies',
    description: 'Compare free quotes from licensed movers in Miami. Condo & high-rise specialists, COI provided, from $450. Brickell to Kendall — verified companies.',
    service: { serviceType: 'Moving Services', areaServed: 'Miami, Florida' },
    faqs: FAQS,
  }),
  component: MiamiPage,
});

const COSTS = [
  { size: "Studio / 1BR", price: "$450-$900", detail: "$100-$160/hr, 2 movers" },
  { size: "2 Bedroom", price: "$700-$1,200", detail: "3 movers, 4-6 hrs" },
  { size: "3 Bedroom", price: "$850-$1,500", detail: "3-4 movers, 6-8 hrs" },
  { size: "High-rise / condo premium", price: "+$100-$300", detail: "Elevator + long carry time" },
];

const LOCAL = [
  {
    t: "Condo and high-rise rules",
    d: "From Brickell to Sunny Isles, most buildings require a certificate of insurance, a reserved service elevator slot and weekday-only moving hours (typically 9 AM-4 PM). Book your elevator with the association the moment you have a date — peak-season slots disappear 2-3 weeks out.",
  },
  {
    t: "Parking and truck access",
    d: "Little Havana, Coconut Grove and Miami Beach have streets where a 26-foot truck cannot legally park. Experienced Miami crews bring shuttle trucks or pull temporary permits — ask how each quote handles access, because improvised parking becomes your billable time.",
  },
  {
    t: "Season, heat and traffic",
    d: "Move mid-month and start early: I-95 and the 826 after 3 PM add billable hours to hourly jobs. October-April is cooler and cheaper; June-November requires hurricane-season flexibility.",
  },
];

const NEIGHBORHOODS = ["Brickell", "Downtown", "Wynwood", "Edgewater", "Coral Gables", "Coconut Grove", "Little Havana", "Kendall", "Doral", "Miami Beach", "North Miami", "Aventura"];

const ROUTES = [
  "Miami to Orlando (235 mi): $900-$1,600 for a 1BR; same-day service standard.",
  "Miami to Tampa (280 mi): $1,000-$1,800 for a 1BR; next-day delivery common.",
  "Miami to Atlanta / New York: see our long distance movers page for binding-estimate carriers.",
];

const FAQS = [
  { q: "How much do movers cost in Miami?", a: "$450-$900 for studios and 1-bedrooms, $850-$1,500 for 2-3 bedroom homes, locally. High-rises add $100-$300 in elevator and carry time. Hourly rates run $100-$160 for two movers." },
  { q: "How do I find cheap movers in Miami without getting scammed?", a: "Compare at least 3 licensed movers, move mid-month on a weekday, declutter first — and treat any quote 40% below the others as a red flag, not a bargain. Lowball bids are the classic setup for hostage-load scams in South Florida." },
  { q: "Do Miami condo buildings require special arrangements?", a: "Almost always: a COI from your mover, a reserved service elevator, weekday moving windows, and sometimes a refundable deposit ($250-$500). Our Miami movers send the COI to your property manager within 24 hours." },
  { q: "Can one company handle my move from Miami to another Florida city?", a: "Yes — intrastate routes like Miami-Orlando and Miami-Tampa are core routes for our long distance partners, with pricing by inventory rather than by the hour." },
  { q: "What are local mover rates in Miami-Dade County?", a: "Two movers and a truck run $100-$160 per hour in Miami-Dade. By home size that works out to $450-$900 for a studio or one-bedroom, $700-$1,200 for a two-bedroom and $850-$1,500 for a three-bedroom, plus $100-$300 where a high-rise is involved." },
  { q: "How do I confirm I am hiring licensed movers in Miami FL?", a: "Ask for the FDACS mover registration number for in-state work, or the USDOT number for anything crossing state lines, and verify it before paying a deposit. A licensed Miami mover will also produce an association-ready certificate of insurance on request." },
];

function MiamiPage() {
  return (
    <>
      <Hero
        eyebrow="Licensed Miami Movers"
        h1={<>Movers in <span className="text-brand">Miami</span>, Florida</>}
        intro="Local moves in Miami cost $450-$900 for a studio or 1-bedroom and $850-$1,500 for a 2-3 bedroom home — and the difference between a smooth Miami move and a nightmare is a crew that knows the buildings. COIs in Brickell, elevator slots in Sunny Isles, parking permits in Coconut Grove: our Miami movers handle all of it daily. Compare free quotes from licensed Miami moving companies in 2 minutes."
      />
      <CostTable title="Local Mover Rates in Miami-Dade County" col2="Price Range" col3="Crew & Time" rows={COSTS} />
      <RatesExplainer />
      <HighRiseSection />
      <MunicipalityCoverage />
      <LocalKnowledge title="Moving in Miami: What Actually Makes It Different" items={LOCAL} />
      <Neighborhoods title="Neighborhoods Our Miami Movers Cover Daily" items={NEIGHBORHOODS} tail="and all of Miami-Dade County." />
      <RoutesBlock title="Popular Routes from Miami" items={ROUTES} />

      <section className="bg-surface-alt">
        <div className="container-page py-14 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Moving to or from Hialeah?</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Hialeah is one of the highest-volume cross-town destinations in Miami-Dade, with its own
            mix of dense multifamily buildings and predominantly Spanish-speaking households. See our{" "}
            <Link to="/movers-in-hialeah/" className="font-semibold text-brand hover:underline">
              guide to movers in Hialeah
            </Link>{" "}
            for bilingual crews, building COI requirements and hourly pricing on that route.
          </p>
        </div>
      </section>
      <Faq faqs={FAQS} />

    </>
  );
}

function Hero({ eyebrow, h1, intro }: { eyebrow: string; h1: React.ReactNode; intro: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
      <div className="container-page py-14 md:py-20 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          <ShieldCheck className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">{h1}</h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{intro}</p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Free Quotes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CostTable({ title, col2, col3, rows }: { title: string; col2: string; col3: string; rows: { size: string; price: string; detail: string }[] }) {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Pricing</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">{title}</h2>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Home Size</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">{col2}</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">{col3}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.size} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.size}</td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.price}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-ink">{r.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sm:hidden divide-y divide-border">
            {rows.map((r) => (
              <div key={r.size} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.size}</div>
                <dl className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">{col2}</dt>
                    <dd className="font-semibold text-ink">{r.price}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">{col3}</dt>
                    <dd className="font-semibold text-ink">{r.detail}</dd>
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

function LocalKnowledge({ title, items }: { title: string; items: { t: string; d: string }[] }) {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Local Knowledge</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">{title}</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((it) => (
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

function Neighborhoods({ title, items, tail }: { title: string; items: string[]; tail?: string }) {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Coverage</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">{title}</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {items.map((n) => (
            <span key={n} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm text-ink shadow-soft">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              {n}
            </span>
          ))}
        </div>
        {tail && <p className="mt-5 text-sm text-muted-foreground">— and {tail}</p>}
      </div>
    </section>
  );
}

function RoutesBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Routes</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">{title}</h2>
        <ul className="mt-8 space-y-4">
          {items.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-soft">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand flex-shrink-0">
                <RouteIcon className="h-4 w-4" />
              </span>
              <span className="text-sm md:text-base text-ink leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Frequently Asked Questions</h2>
        <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white shadow-soft">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display font-bold text-ink">{f.q}</span>
                  <ChevronDown className={"h-5 w-5 text-muted-foreground transition-transform " + (isOpen ? "rotate-180 text-brand" : "")} />
                </button>
                {isOpen && <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
