import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
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

export type CityFaq = { q: string; a: string };
export type CityLink = { to: string; label: string; d: string };

export interface MoversCityPageProps {
  city: string;
  eyebrow: string;
  /** 40-60 word opening answer block rendered under the H1. */
  opening: React.ReactNode;
  /** Optional short paragraph above the rate table (used for cost-led pages). */
  costIntro?: React.ReactNode;
  /** Render the cost table immediately after the hero (cost-intent cities). */
  costFirst?: boolean;
  /** Materially different per city. */
  challenges: { t: string; d: React.ReactNode }[];
  areas: string[];
  areasIntro: React.ReactNode;
  /** Optional extra section (e.g. Hialeah bilingual block). */
  extra?: React.ReactNode;
  faqs: CityFaq[];
  /** Nearby city / hub pages linked in body copy. */
  related: CityLink[];
  /** CTA headline override. */
  ctaTitle?: string;
}

/* ---------------------------------------------------------------------- */
/* Shared data — statewide rate card from /local-movers-in-florida/        */
/* ---------------------------------------------------------------------- */

export const CITY_RATE_ROWS = [
  { size: "Studio / 1BR", crew: "2 movers + truck", hours: "3-4 hrs", price: "$400 – $700" },
  { size: "2 Bedroom", crew: "3 movers + truck", hours: "4-6 hrs", price: "$650 – $1,100" },
  { size: "3 Bedroom", crew: "3-4 movers + truck", hours: "6-8 hrs", price: "$900 – $1,600" },
  { size: "4+ Bedroom", crew: "4+ movers + truck", hours: "8-10 hrs", price: "$1,400 – $2,600" },
];

const SERVICE_LINKS: CityLink[] = [
  { to: "/local-movers-in-florida/", label: "Local moving", d: "Hourly crews at $95-$150/hr with truck, blankets and basic protection included." },
  { to: "/long-distance-movers/", label: "Long-distance moving", d: "Interstate and cross-Florida carriers quoting by inventory with binding estimates." },
  { to: "/packing-services/", label: "Packing services", d: "Fragile-only or full-home packing, materials supplied by the crew." },
  { to: "/storage-solutions/", label: "Storage solutions", d: "Storage-in-transit or self-storage when your dates do not line up." },
  { to: "/commercial-movers/", label: "Commercial moving", d: "Offices, clinics and retail relocated after hours to protect business days." },
  { to: "/apartment-movers/", label: "Apartment moving", d: "Walk-ups, elevators, COIs and tight loading windows handled routinely." },
  { to: "/piano-movers/", label: "Piano moving", d: "Uprights from $150 and grands from $300, with CPM-trained specialist crews." },
];

const VETTING = [
  { t: "FDACS registration", d: "Every mover operating inside Florida must be registered with the Florida Department of Agriculture and Consumer Services. We verify it before a quote reaches you." },
  { t: "FMCSA / USDOT number", d: "Any mover crossing a state line needs an active USDOT number and interstate authority — we check the record, not the claim." },
  { t: "Written binding estimate", d: "Crew size, hours, stairs and materials stated on paper before work starts — never a verbal ballpark and never full payment up front." },
  { t: "Real insurance coverage", d: "Released value protection pays only $0.60 per pound, so we confirm full value protection is offered and documented." },
];

/* ---------------------------------------------------------------------- */
/* Schema                                                                  */
/* ---------------------------------------------------------------------- */

export function moversCitySchema(city: string, path: string) {
  return [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Moving Services",
        name: `Movers in ${city}, FL`,
        url: `${SITE_URL}${path}`,
        areaServed: {
          "@type": "City",
          name: city,
          containedInPlace: { "@type": "State", name: "Florida" },
        },
        provider: { "@id": `${SITE_URL}/#organization` },
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Florida Movers", item: `${SITE_URL}/local-movers-in-florida/` },
          { "@type": "ListItem", position: 3, name: city, item: `${SITE_URL}${path}` },
        ],
      }),
    },
  ];
}

/* ---------------------------------------------------------------------- */
/* Template                                                                */
/* ---------------------------------------------------------------------- */

export function MoversCityPage(props: MoversCityPageProps) {
  const costs = <Costs city={props.city} intro={props.costIntro} alt={!!props.costFirst} />;
  return (
    <>
      <Hero {...props} />
      {props.costFirst && costs}
      <Challenges city={props.city} items={props.challenges} alt={!props.costFirst} />
      {!props.costFirst && costs}
      <Areas city={props.city} areas={props.areas} intro={props.areasIntro} />
      <Services city={props.city} />
      {props.extra}
      <Vetting />
      <Related city={props.city} related={props.related} />
      <Faq city={props.city} faqs={props.faqs} />
      <QuoteCta city={props.city} title={props.ctaTitle} />
    </>
  );
}

function Hero({ city, eyebrow, opening }: MoversCityPageProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
      <div className="container-page py-14 md:py-20 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          <ShieldCheck className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Movers in <span className="text-brand">{city}</span>, FL
        </h1>
        <p className="mt-5 text-base md:text-lg font-medium text-ink leading-relaxed">{opening}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get {city} Moving Quotes <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/local-movers-in-florida/"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand hover:text-brand transition"
          >
            Statewide local moving rates
          </Link>
        </div>
      </div>
    </section>
  );
}

function Costs({ city, intro, alt }: { city: string; intro?: React.ReactNode; alt?: boolean }) {
  return (
    <section className={alt ? "bg-surface-alt" : "bg-background"}>
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Pricing 2026</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Moving Costs in {city}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {intro ?? (
              <>
                The statewide rate card published on our{" "}
                <Link to="/local-movers-in-florida/" className="font-semibold text-brand hover:underline">
                  Florida local movers guide
                </Link>
                , applied to {city} jobs. A two-mover crew with a truck runs $95-$150 per hour.
              </>
            )}
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Home size</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Crew</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Typical time</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Price range</th>
              </tr>
            </thead>
            <tbody>
              {CITY_RATE_ROWS.map((r, i) => (
                <tr key={r.size} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.size}</td>
                  <td className="px-6 py-4 text-ink">{r.crew}</td>
                  <td className="px-6 py-4 text-ink">{r.hours}</td>
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
            {CITY_RATE_ROWS.map((r) => (
              <div key={r.size} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.size}</div>
                <dl className="mt-3 grid gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Crew</dt>
                    <dd className="text-ink">{r.crew}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Typical time</dt>
                    <dd className="text-ink">{r.hours}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Price range</dt>
                    <dd className="font-semibold text-ink">{r.price}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Ranges cover a standard ground-floor move inside {city}. Stairs, long carries, month-end
          weekends and packing labor push totals toward the upper end.
        </p>
      </div>
    </section>
  );
}

function Challenges({ city, items, alt }: { city: string; items: { t: string; d: React.ReactNode }[]; alt?: boolean }) {
  return (
    <section className={alt ? "bg-surface-alt" : "bg-background"}>
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Local reality</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            {city} Moving Challenges
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Building2 className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{it.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
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
          Neighborhoods We Cover
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

function Services({ city }: { city: string }) {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">What you can book</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Services Available in {city}
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every {city} quote request can include one service or several — tell us what you need and
            the matched companies price it together.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_LINKS.map((s) => (
            <Link
              key={s.to}
              to={s.to as "/"}
              className="group rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:border-brand hover:shadow-card"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cta/10 text-cta">
                <Boxes className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-brand">{s.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vetting() {
  return (
    <section className="bg-surface-alt">
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

function Related({ city, related }: { city: string; related: CityLink[] }) {
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

function Faq({ city, faqs }: { city: string; faqs: CityFaq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">{city} Moving FAQ</h2>
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

function QuoteCta({ city, title }: { city: string; title?: string }) {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
            {title ?? `Compare Moving Quotes in ${city}`}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            One short form. Up to 4 licensed, insured Florida moving companies respond with real
            pricing for your home, your access and your dates. Free, no obligation.
          </p>
        </div>
        <HeroQuoteForm />
      </div>
    </section>
  );
}
