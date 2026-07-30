// Shared long-form content blocks used to expand service and city pages.
// Every link renders as a real server-rendered <a href> via TanStack Link.

import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";

type Bg = "bg-background" | "bg-surface-alt";

export function ProseSection({
  eyebrow,
  title,
  children,
  bg = "bg-background",
  id,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  bg?: Bg;
  id?: string;
}) {
  return (
    <section className={bg} id={id}>
      <div className="container-page py-14 md:py-18 max-w-4xl">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-2 font-display text-2xl md:text-3xl lg:text-4xl font-bold text-ink">
          {title}
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground [&_a]:font-semibold [&_a]:text-brand hover:[&_a]:underline">
          {children}
        </div>
      </div>
    </section>
  );
}

export function SubBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
      <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      <div className="mt-2 space-y-3 text-sm leading-relaxed text-muted-foreground [&_a]:font-semibold [&_a]:text-brand hover:[&_a]:underline">
        {children}
      </div>
    </div>
  );
}

export function CardGrid({
  children,
  cols = 2,
}: {
  children: React.ReactNode;
  cols?: 2 | 3;
}) {
  return (
    <div
      className={
        "mt-6 grid gap-5 " + (cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2")
      }
    >
      {children}
    </div>
  );
}

export function CheckList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-base leading-relaxed text-muted-foreground [&_a]:font-semibold [&_a]:text-brand hover:[&_a]:underline">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function LinkDirectory({
  eyebrow,
  title,
  intro,
  links,
  note,
  bg = "bg-surface-alt",
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  links: { to: string; label: string; d?: string }[];
  note?: React.ReactNode;
  bg?: Bg;
}) {
  return (
    <section className={bg}>
      <div className="container-page py-14 md:py-18">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-2 font-display text-2xl md:text-3xl lg:text-4xl font-bold text-ink">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
          )}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <Link
              key={l.to + l.label}
              to={l.to as "/"}
              className="group flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-soft transition hover:border-brand/40 hover:shadow-card"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>
                <span className="block font-display text-sm font-bold text-ink group-hover:text-brand">
                  {l.label}
                </span>
                {l.d && (
                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                    {l.d}
                  </span>
                )}
              </span>
              <ArrowRight className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-brand" />
            </Link>
          ))}
        </div>
        {note && (
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground [&_a]:font-semibold [&_a]:text-brand hover:[&_a]:underline">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
