import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { ArrowRight, ShieldCheck, ChevronDown, DollarSign, Building2, MapPin } from "lucide-react";

export const Route = createFileRoute("/movers-in-ocala/")({
  head: () => pageHead({
    path: "/movers-in-ocala/",
    title: 'Movers in Ocala FL | Compare Local Moving Companies',
    description: 'Compare free quotes from licensed movers in Ocala. Horse-country properties, The Villages routes, from $350. Marion County specialists.',
    service: { serviceType: 'Moving Services', areaServed: 'Ocala, Florida' },
    faqs: FAQS,
  }),
  component: OcalaPage,
});

const COSTS = [
  { size: "Studio / 1BR", price: "$350-$700" },
  { size: "2-3 Bedroom", price: "$700-$1,200" },
  { size: "4+ Bedroom", price: "$1,100-$2,000" },
  { size: "Ocala to The Villages", price: "$450-$900 (most common route)" },
];

const LOCAL = [
  { t: "Farm and acreage properties", d: "Long gravel drives and gate access mean the truck may stage differently — tell your mover if the home sits on acreage for an accurate quote." },
  { t: "The Villages corridor", d: "Ocala-to-Villages is the busiest short route in the region; crews run it weekly and know every gate and community rule." },
  { t: "Seasonal demand", d: "Winter brings the retiree wave; book 2-3 weeks ahead November-March." },
];

const FAQS = [
  { q: "How much do movers cost in Ocala?", a: "$350-$700 for a 1-bedroom and $700-$1,200 for 2-3 bedrooms — typically 15-25% below Miami rates for the same crew size." },
  { q: "Do Ocala movers handle moves to The Villages?", a: "Weekly — it is the most requested route in Marion County, usually $450-$900 for typical homes with community access rules handled." },
  { q: "Can I get same-week movers in Ocala?", a: "Usually yes outside the winter peak; November-March book 2-3 weeks ahead." },
];

function OcalaPage() {
  return (
    <>
      <CityHero
        eyebrow="Licensed Marion County Movers"
        h1={<>Movers in <span className="text-brand">Ocala</span>, Florida</>}
        intro="Local moves in Ocala run $350-$700 for a 1-bedroom and $700-$1,200 for a 2-3 bedroom home — among the friendliest moving rates in Florida. Ocala moves have their own character: horse-country properties with long private drives, a fast-growing retiree corridor toward The Villages, and distances that stay easy. Our licensed Marion County movers know all three."
      />
      <SimpleCostTable title="Ocala Moving Costs (2026)" rows={COSTS} />
      <LocalKnowledge title="Moving in Ocala: What Local Crews Plan For" items={LOCAL} />
      <section className="bg-background">
        <div className="container-page py-14 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Moving between Ocala and The Villages</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The Ocala-to-Villages corridor is the busiest short route in Marion County. If the
            community itself is your destination, our{" "}
            <Link to="/movers-in-the-villages/" className="font-semibold text-brand hover:underline">
              guide to movers in The Villages
            </Link>{" "}
            covers villa truck staging, downsizing partial loads and the storage overlap that
            almost every inbound household needs.
          </p>
        </div>
      </section>
      <Faq faqs={FAQS} />
    </>
  );

}

export function CityHero({ eyebrow, h1, intro }: { eyebrow: string; h1: React.ReactNode; intro: string }) {
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

export function SimpleCostTable({ title, rows }: { title: string; rows: { size: string; price: string }[] }) {
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
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Price Range</th>
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
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sm:hidden divide-y divide-border">
            {rows.map((r) => (
              <div key={r.size} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.size}</div>
                <div className="mt-2 text-sm font-semibold text-ink">{r.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LocalKnowledge({ title, items, cols = 3 }: { title: string; items: { t: string; d: string }[]; cols?: 2 | 3 }) {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Local Knowledge</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">{title}</h2>
        </div>
        <div className={"mt-10 grid gap-5 " + (cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3")}>
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

export function Neighborhoods({ title, items, tail, bg = "bg-background" }: { title: string; items: string[]; tail?: string; bg?: string }) {
  return (
    <section className={bg}>
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
        {tail && <p className="mt-5 text-sm text-muted-foreground">{tail}</p>}
      </div>
    </section>
  );
}

export function Faq({ faqs }: { faqs: { q: string; a: string }[] }) {
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
