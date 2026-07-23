// Reusable page-block components for city and service pages (EN + ES).
// All labels are passed in as props so the same building blocks render both trees.

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  DollarSign,
  Building2,
  MapPin,
  Route as RouteIcon,
} from "lucide-react";

/* ---------------------------------------------------------------------- */
/* Hero                                                                    */
/* ---------------------------------------------------------------------- */

export function PageHero({
  eyebrow,
  h1,
  intro,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  h1: React.ReactNode;
  intro: React.ReactNode;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
      <div className="container-page py-14 md:py-20 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          <ShieldCheck className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          {h1}
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
        <div className="mt-7">
          <Link to={ctaHref as "/"} className="btn-cta btn-cta-hover text-base">
            {ctaLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* Cost table                                                              */
/* ---------------------------------------------------------------------- */

export function PageCostTable({
  eyebrow,
  title,
  col1,
  col2,
  col3,
  rows,
}: {
  eyebrow: string;
  title: string;
  col1: string;
  col2: string;
  col3: string;
  rows: { size: string; price: string; detail: string }[];
}) {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            {eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            {title}
          </h2>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">{col1}</th>
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

/* ---------------------------------------------------------------------- */
/* Local knowledge                                                         */
/* ---------------------------------------------------------------------- */

export function PageLocalKnowledge({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { t: string; d: string }[];
}) {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">{eyebrow}</span>
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

/* ---------------------------------------------------------------------- */
/* Neighborhoods (pills)                                                   */
/* ---------------------------------------------------------------------- */

export function PageNeighborhoods({
  eyebrow,
  title,
  items,
  tail,
}: {
  eyebrow: string;
  title: string;
  items: string[];
  tail?: string;
}) {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">{eyebrow}</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">{title}</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {items.map((n) => (
            <span
              key={n}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm text-ink shadow-soft"
            >
              <MapPin className="h-3.5 w-3.5 text-brand" />
              {n}
            </span>
          ))}
        </div>
        {tail && <p className="mt-5 text-sm text-muted-foreground">— {tail}</p>}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* Routes list                                                             */
/* ---------------------------------------------------------------------- */

export function PageRoutes({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">{eyebrow}</span>
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

/* ---------------------------------------------------------------------- */
/* FAQ                                                                     */
/* ---------------------------------------------------------------------- */

export function PageFaq({
  title,
  faqs,
}: {
  title: string;
  faqs: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">{title}</h2>
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
