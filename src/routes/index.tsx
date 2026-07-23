import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Clock, DollarSign, Star, CheckCircle2 } from "lucide-react";
import { SERVICES, CITIES } from "../components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Florida Movers Direct — Compare Free Quotes from Licensed Movers" },
      {
        name: "description",
        content:
          "Compare up to 4 free quotes from licensed, FDACS & FMCSA verified Florida moving companies. Fast, easy, and always free.",
      },
      { property: "og:title", content: "Florida Movers Direct" },
      {
        property: "og:description",
        content: "Up to 4 free quotes from licensed Florida movers. Always free.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
        <div className="container-page py-16 md:py-24 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
              <ShieldCheck className="h-3.5 w-3.5" />
              FDACS & FMCSA Verified Movers
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold text-ink leading-[1.05]">
              Compare Free Quotes from{" "}
              <span className="text-brand">Licensed Florida Movers</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Up to 4 quotes in about 2 minutes. Local, long-distance, storage, commercial,
              piano, and more. Always free for you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
                Get Free Quotes <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#how"
                className="inline-flex items-center rounded-lg border border-border bg-white px-5 py-3 font-semibold text-ink hover:border-brand hover:text-brand transition"
              >
                How it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="flex text-cta">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-ink">4.9/5</span>
              </div>
              <span>10,000+ moves matched</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-card">
              <img
                src="/images/hero-family.jpg"
                alt="Happy family after successful move"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-white p-5 shadow-card border border-border max-w-[240px]">
              <div className="flex items-center gap-2 text-brand">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-display font-bold">Successful Match</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Your move is complete. Thank you for choosing us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-background">
        <div className="container-page py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Clock, title: "2-minute request", body: "Tell us about your move once." },
            { icon: ShieldCheck, title: "Licensed & insured", body: "FDACS & FMCSA verified partners." },
            { icon: DollarSign, title: "Always free", body: "No fees. No obligation. Ever." },
            { icon: Star, title: "Top-rated movers", body: "Vetted, reviewed, ready to help." },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-white p-6 shadow-soft"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display font-bold text-ink">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-surface-alt">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              How it works
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
              Three simple steps to your best move
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Tell us about your move", d: "From, to, size, and date. Takes ~2 minutes." },
              { n: "02", t: "Get up to 4 free quotes", d: "Licensed Florida movers respond fast." },
              { n: "03", t: "Choose & move with confidence", d: "Compare, pick, and get moving." },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-border bg-white p-6 shadow-soft"
              >
                <span className="font-display text-3xl font-bold text-cta">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="container-page py-16 md:py-20">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                Services
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
                Whatever the move, we match you
              </h2>
            </div>
            <Link
              to="/local-movers-in-florida/"
              className="text-sm font-semibold text-brand hover:text-brand/80"
            >
              See all services →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group rounded-2xl border border-border bg-white p-6 shadow-soft hover:border-brand hover:-translate-y-0.5 transition"
              >
                <h3 className="font-display font-bold text-ink group-hover:text-brand">
                  {s.label}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Compare quotes from vetted providers.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="bg-surface-alt">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                Locations
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
                Trusted movers across Florida
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg">
                From Miami to Jacksonville, we connect you with local pros who know your city.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {CITIES.map((c) => (
                  <Link
                    key={c.to}
                    to={c.to}
                    className="rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-brand hover:text-brand transition"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <img
                src="/images/movers-truck.jpg"
                alt="Florida Movers Direct truck"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
