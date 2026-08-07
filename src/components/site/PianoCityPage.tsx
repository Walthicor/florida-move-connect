import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  DollarSign,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { HeroQuoteForm } from "./QuoteForm";
import { SITE_URL } from "@/lib/seo";

/* ---------------------------------------------------------------------- */
/* Types                                                                   */
/* ---------------------------------------------------------------------- */

export type PianoFaq = { q: string; a: string };

export type PianoCityLink = { to: string; label: string; d: string };

export interface PianoCityPageProps {
  city: string;
  eyebrow: string;
  /** 40-60 word opening answer block, rendered directly under the H1. */
  opening: React.ReactNode;
  /** City-specific challenges — must be unique per city. */
  challenges: { t: string; d: React.ReactNode }[];
  /** Real neighborhood / area names. */
  areas: string[];
  /** Intro paragraph above the neighborhood pills (unique per city). */
  areasIntro: React.ReactNode;
  /** Optional extra section (e.g. Miami bilingual block). */
  extra?: React.ReactNode;
  faqs: PianoFaq[];
  /** Sibling piano city pages + matching general movers page. */
  related: PianoCityLink[];
}

/* ---------------------------------------------------------------------- */
/* Shared data — verified hub figures only                                 */
/* ---------------------------------------------------------------------- */

export const PIANO_RATE_ROWS = [
  { type: "Upright / spinet / console", weight: "300-900 lb", crew: "2 movers", price: "$150 - $500" },
  { type: "Baby grand", weight: "500-800 lb", crew: "3-4 movers", price: "$300 - $800" },
  { type: "Concert grand", weight: "up to 1,300 lb", crew: "4-5 movers", price: "$500 - $1,500" },
  { type: "Interstate transport (any)", weight: "—", crew: "varies", price: "$450 - $2,300" },
];

export const PIANO_SURCHARGES = [
  { t: "Each flight of stairs", d: "$40 - $130" },
  { t: "Second or third floor placement", d: "+$100 average" },
  { t: "Partial disassembly (legs, pedal box, music rack)", d: "~$150" },
  { t: "Heat-treated crating for interstate", d: "$1,000 - $1,600" },
  { t: "Adding an upright to a full household move", d: "+$75 - $150" },
];

const VETTING = [
  {
    t: "FDACS registration",
    d: "Every mover operating inside Florida must be registered with the Florida Department of Agriculture and Consumer Services. We verify the registration before a quote reaches you.",
  },
  {
    t: "Certified Piano Mover (CPM) credential",
    d: "The CPM credential from the Piano Technician Academy shows the crew is trained on piano boards, skid boards and grand disassembly — not just furniture handling.",
  },
  {
    t: "Full value protection",
    d: "Released value protection pays only $0.60 per pound, so a 500-pound baby grand is covered for $300. We check that full value protection is offered and documented.",
  },
  {
    t: "Written binding estimate",
    d: "Crew size, stairs, disassembly and any crating stated on paper before work starts — never a verbal ballpark, and never full payment up front.",
  },
];

/* ---------------------------------------------------------------------- */
/* Schema helpers                                                          */
/* ---------------------------------------------------------------------- */

export function pianoCitySchema(city: string, path: string) {
  return [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Piano Moving",
        name: `Piano Movers in ${city}, FL`,
        url: `${SITE_URL}${path}`,
        areaServed: {
          "@type": "City",
          name: city,
          containedInPlace: { "@type": "State", name: "Florida" },
        },
        provider: { "@id": `${SITE_URL}/#organization` },
      }),
    },
  ];
}

/* ---------------------------------------------------------------------- */
/* Template                                                                */
/* ---------------------------------------------------------------------- */

export function PianoCityPage(props: PianoCityPageProps) {
  return (
    <>
      <Hero {...props} />
      <Costs city={props.city} />
      <Challenges city={props.city} items={props.challenges} />
      <Vetting />
      <Areas city={props.city} areas={props.areas} intro={props.areasIntro} />
      {props.extra}
      <Related city={props.city} related={props.related} />
      <Faq city={props.city} faqs={props.faqs} />
      <QuoteCta city={props.city} />
    </>
  );
}

function Hero({ city, eyebrow, opening }: PianoCityPageProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
      <div className="container-page py-14 md:py-20 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          <ShieldCheck className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Piano Movers in <span className="text-brand">{city}</span>, FL
        </h1>
        <p className="mt-5 text-base md:text-lg font-medium text-ink leading-relaxed">{opening}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get {city} Piano Quotes <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/piano-movers/"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand hover:text-brand transition"
          >
            Back to the Florida piano movers hub
          </Link>
        </div>
      </div>
    </section>
  );
}

function Costs({ city }: { city: string }) {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Pricing 2026</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Piano Moving Costs in {city}
          </h2>
          <p className="mt-3 text-muted-foreground">
            The same verified statewide rate card our{" "}
            <Link to="/piano-movers/" className="font-semibold text-brand hover:underline">
              Florida piano movers hub
            </Link>{" "}
            publishes, applied to {city} moves.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Piano type</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Weight</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Crew</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Local price</th>
              </tr>
            </thead>
            <tbody>
              {PIANO_RATE_ROWS.map((r, i) => (
                <tr key={r.type} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.type}</td>
                  <td className="px-6 py-4 text-ink">{r.weight}</td>
                  <td className="px-6 py-4 text-ink">{r.crew}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-ink">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.price}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sm:hidden divide-y divide-border">
            {PIANO_RATE_ROWS.map((r) => (
              <div key={r.type} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.type}</div>
                <dl className="mt-3 grid gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Weight</dt>
                    <dd className="text-ink">{r.weight}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Crew</dt>
                    <dd className="text-ink">{r.crew}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Local price</dt>
                    <dd className="font-semibold text-ink">{r.price}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <h3 className="font-display text-xl font-bold text-ink">Surcharges that change the total</h3>
          <dl className="mt-5 divide-y divide-border rounded-2xl border border-border bg-white shadow-soft">
            {PIANO_SURCHARGES.map((s) => (
              <div key={s.t} className="flex flex-wrap items-baseline justify-between gap-3 px-5 py-4">
                <dt className="text-sm md:text-base text-ink">{s.t}</dt>
                <dd className="font-display font-bold text-brand">{s.d}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted-foreground">
            Line-by-line breakdown in our{" "}
            <Link to="/piano-moving-cost/" className="font-semibold text-brand hover:underline">
              Florida piano moving cost guide
            </Link>
            , or see what changes for{" "}
            <Link to="/grand-piano-movers/" className="font-semibold text-brand hover:underline">
              baby grands and concert grands
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function Challenges({ city, items }: { city: string; items: { t: string; d: React.ReactNode }[] }) {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Local reality</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            {city} Piano Moving Challenges
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg font-bold text-ink">{it.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vetting() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Screening</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            What We Check Before Matching You
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {VETTING.map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas({ city, areas, intro }: { city: string; areas: string[]; intro: React.ReactNode }) {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Coverage</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          Neighborhoods and Areas We Cover in {city}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {areas.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm text-ink shadow-soft"
            >
              <MapPin className="h-3.5 w-3.5 text-brand" />
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Related({ city, related }: { city: string; related: PianoCityLink[] }) {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Keep exploring</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            More moving help near {city}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.to}
              to={r.to as "/"}
              className="group rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:border-brand hover:shadow-card"
            >
              <h3 className="font-display text-lg font-bold text-ink group-hover:text-brand">{r.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Read more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq({ city, faqs }: { city: string; faqs: PianoFaq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
          {city} Piano Moving FAQ
        </h2>
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
                  <ChevronDown
                    className={
                      "h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform " +
                      (isOpen ? "rotate-180 text-brand" : "")
                    }
                  />
                </button>
                <div className={isOpen ? "px-5 pb-5 text-sm leading-relaxed text-muted-foreground" : "sr-only"}>
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QuoteCta({ city }: { city: string }) {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
            Compare Piano Moving Quotes in {city}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            One short form. Up to 4 licensed, insured Florida piano movers respond with real
            pricing for your instrument, your building and your dates. Free, no obligation.
          </p>
        </div>
        <HeroQuoteForm />
      </div>
    </section>
  );
}
