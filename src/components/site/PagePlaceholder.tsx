import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  image?: string;
};

export function PagePlaceholder({ eyebrow, title, description, bullets, image }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-alt">
        <div className="container-page py-14 md:py-20 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              {eyebrow}
            </span>
            <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl">
              {description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact/" className="btn-cta btn-cta-hover">
                Get Free Quotes <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact/"
                className="inline-flex items-center rounded-lg border border-border bg-white px-5 py-3 font-semibold text-ink hover:border-brand hover:text-brand transition"
              >
                Talk to us
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              FDACS & FMCSA verified partners · Always free for you
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card bg-white">
              <img
                src={image ?? "/images/hero-family.jpg"}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder content block */}
      <section>
        <div className="container-page py-16 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              What you'll get
            </h2>
            <p className="text-muted-foreground">
              Placeholder content. Real copy, benefits, and SEO content for this page
              will land in the next iteration. The structure, routing, and design system
              are ready to receive it.
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {(bullets ?? DEFAULT_BULLETS).map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-lg border border-border bg-white p-4 shadow-soft"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="text-sm text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-border bg-surface-alt p-6">
            <h3 className="font-display text-lg font-bold text-ink">Compare 4 free quotes</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your move and we'll match you with up to 4 licensed Florida
              movers. Always free.
            </p>
            <Link to="/contact/" className="btn-cta btn-cta-hover mt-5 w-full">
              Start now
            </Link>
            <p className="mt-3 text-[11px] text-muted-foreground text-center">
              Takes about 2 minutes · No obligation
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}

const DEFAULT_BULLETS = [
  "Up to 4 quotes from vetted movers",
  "Licensed, insured, FDACS & FMCSA verified",
  "Transparent pricing — no hidden fees",
  "Free for you, always",
];
