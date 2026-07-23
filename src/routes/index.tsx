import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BadgeCheck,
  DollarSign,
  MapPin,
  Home,
  Truck,
  Building2,
  Package,
  Boxes,
  Building,
  Piano,
  ChevronDown,
} from "lucide-react";
import { CITIES } from "../components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Movers in Florida — Compare Licensed Moving Companies and Save | FMD",
      },
      {
        name: "description",
        content:
          "Compare free quotes from licensed Florida movers in under 2 minutes. Up to 4 FDACS- and FMCSA-verified companies compete for your move.",
      },
      {
        property: "og:title",
        content: "Movers in Florida — Compare Licensed Moving Companies and Save",
      },
      {
        property: "og:description",
        content:
          "Compare free quotes from licensed Florida movers. FDACS & FMCSA verified. Always free, no obligation.",
      },
    ],
  }),
  component: Home,
});

const TRUST_BADGES = [
  "100% Free",
  "Licensed and Insured Movers Only",
  "No Obligation",
  "Florida Specialists",
];

const SERVICES = [
  {
    icon: Home,
    title: "Local Movers",
    body:
      "Hourly crews for moves under 50 miles — from $95/hour for two movers and a truck. Same-week availability in most cities.",
    to: "/local-movers-in-florida/",
  },
  {
    icon: Truck,
    title: "Long Distance Movers",
    body:
      "Interstate and intrastate moves with binding estimates, FMCSA-verified carriers and delivery windows in writing.",
    to: "/long-distance-movers/",
  },
  {
    icon: Building2,
    title: "Commercial and Office Movers",
    body:
      "After-hours and weekend relocations with COI handling and IT care — never lose a business day.",
    to: "/commercial-movers/",
  },
  {
    icon: Package,
    title: "Packing Services",
    body:
      "Full or fragile-only professional packing from $280, materials included.",
    to: "/packing-services/",
  },
  {
    icon: Boxes,
    title: "Moving and Storage",
    body:
      "Storage-in-transit and climate-controlled options — essential in Florida humidity.",
    to: "/storage-solutions/",
  },
  {
    icon: Building,
    title: "Apartment and Condo Movers",
    body:
      "COI, elevator reservations and building rules handled.",
    to: "/apartment-movers/",
  },
  {
    icon: Piano,
    title: "Piano and Specialty Movers",
    body:
      "Uprights from $150, grands from $300, moved with real piano equipment.",
    to: "/piano-movers/",
  },
] as const;

const FAQS = [
  {
    q: "How much do movers cost in Florida?",
    a: "Local moves typically cost $400-$1,600 depending on home size; long-distance moves from Florida range $2,200-$6,500+. A 2-3 bedroom local move averages $850-$1,500. Peak season adds 20-30%.",
  },
  {
    q: "Are the moving companies in your network licensed and insured?",
    a: "Yes. Every intrastate mover holds an active FDACS IM registration and every interstate mover holds active FMCSA authority — plus confirmed liability and cargo insurance. We verify before they ever receive a quote request.",
  },
  {
    q: "How far in advance should I book movers in Florida?",
    a: "2-4 weeks for an off-season local move; 6-8 weeks for peak season (May-September), month-end dates, or any long-distance move.",
  },
  {
    q: "Is your quote service really free?",
    a: "Completely. Movers pay to be part of the verified network; you never pay anything to compare, and there is zero obligation to book.",
  },
  {
    q: "Which Florida cities do you cover?",
    a: "All of them — from Miami and Tampa to Ocala, Naples and the Panhandle. Local moves, intrastate routes like Orlando to Miami, and interstate moves to all 50 states.",
  },
  {
    q: "When is the cheapest time to move in Florida?",
    a: "October through April, mid-month, on a weekday. Avoiding just the last weekend of the month saves most people 10-20%.",
  },
];

function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ServicesGrid />
      <CostTable />
      <WhyUs />
      <CitiesBand />
      <FaqSection />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
      <div className="container-page py-14 md:py-20 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
            <ShieldCheck className="h-3.5 w-3.5" />
            FDACS & FMCSA Verified Movers
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
            Movers in Florida —{" "}
            <span className="text-brand">Compare Licensed Moving Companies</span>{" "}
            and Save
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
            Compare free quotes from licensed movers in Florida in under 2
            minutes. One simple form connects you with up to 4 FDACS- and
            FMCSA-verified moving companies competing for your move — local,
            long distance, or commercial. No calls from random brokers, no spam,
            no obligation. Just Florida movers, verified the Florida way.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {TRUST_BADGES.map((b) => (
              <li
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-soft"
              >
                <BadgeCheck className="h-3.5 w-3.5 text-brand" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <QuoteFormCard />
      </div>
    </section>
  );
}

function QuoteFormCard() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-2xl border border-border bg-white p-6 md:p-7 shadow-card"
    >
      <h2 className="font-display text-xl font-bold text-ink">
        Get up to 4 free quotes
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Takes about 2 minutes · No obligation
      </p>

      <div className="mt-5 space-y-4">
        <div>
          <label
            htmlFor="from-zip"
            className="block text-sm font-semibold text-ink"
          >
            Moving From (ZIP)
          </label>
          <div className="relative mt-1.5">
            <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="from-zip"
              inputMode="numeric"
              maxLength={5}
              placeholder="e.g. 33101"
              className="w-full rounded-lg border border-border bg-white pl-9 pr-3 py-3 text-sm text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="to-zip"
            className="block text-sm font-semibold text-ink"
          >
            Moving To
          </label>
          <div className="relative mt-1.5">
            <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="to-zip"
              placeholder="ZIP or city"
              className="w-full rounded-lg border border-border bg-white pl-9 pr-3 py-3 text-sm text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>
        </div>

        <button type="submit" className="btn-cta btn-cta-hover w-full text-base">
          Get Free Quotes <ArrowRight className="h-4 w-4" />
        </button>

        <p className="text-[11px] text-center text-muted-foreground">
          Up to 4 licensed Florida movers · Always free
        </p>
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* How It Works                                                        */
/* ------------------------------------------------------------------ */

function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "Tell Us About Your Move",
      d: "Enter your ZIP codes, home size and moving date. It takes less time than making coffee.",
    },
    {
      n: "02",
      t: "We Match You With Verified Florida Movers",
      d: "Our network only includes companies with active FDACS registration (moves within Florida) or FMCSA authority (interstate), plus confirmed insurance. The companies national sites will not verify, we filter out.",
    },
    {
      n: "03",
      t: "Compare Quotes and Choose",
      d: "Up to 4 licensed movers send their best price. Customers who compare 3+ quotes save 30-40% versus taking the first offer.",
    },
  ];

  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Process
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            How It Works — 3 Simple Steps
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-border bg-white p-6 shadow-soft"
            >
              <span className="font-display text-3xl font-bold text-cta">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">
                {s.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services grid                                                       */
/* ------------------------------------------------------------------ */

function ServicesGrid() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Services
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Moving Services We Cover Across Florida
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, body, to }) => (
            <Link
              key={to}
              to={to}
              className="group rounded-2xl border border-border bg-white p-6 shadow-soft hover:border-brand hover:-translate-y-0.5 transition"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-brand">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Cost table                                                          */
/* ------------------------------------------------------------------ */

function CostTable() {
  const rows = [
    {
      size: "Studio / 1 Bedroom",
      local: "$400 – $900",
      long: "$1,200 – $3,200",
    },
    {
      size: "2 – 3 Bedroom",
      local: "$850 – $1,600",
      long: "$2,800 – $5,000",
    },
    {
      size: "4+ Bedroom",
      local: "$1,400 – $2,800",
      long: "$4,500 – $8,000+",
    },
  ];

  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Pricing
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            How Much Do Movers Cost in Florida? (2026)
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          {/* Desktop / tablet table */}
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">
                  Home Size
                </th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">
                  Local Move
                </th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">
                  Long Distance
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.size}
                  className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}
                >
                  <td className="px-6 py-4 font-semibold text-ink">{r.size}</td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.local}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.long}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile stacked */}
          <div className="sm:hidden divide-y divide-border">
            {rows.map((r) => (
              <div key={r.size} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.size}</div>
                <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Local
                    </dt>
                    <dd className="mt-0.5 font-semibold text-ink">{r.local}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Long Distance
                    </dt>
                    <dd className="mt-0.5 font-semibold text-ink">{r.long}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
          Florida moving prices rise 20-30% during peak season (May-September)
          and drop to their annual low January-March. Mid-month weekdays are
          consistently the cheapest dates statewide. For a personal number
          instead of a range,{" "}
          <Link to="/contact/" className="font-semibold text-brand hover:underline">
            get your free quotes
          </Link>{" "}
          — real prices from real movers beat any calculator.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why us                                                              */
/* ------------------------------------------------------------------ */

function WhyUs() {
  const points = [
    {
      title: "Verification that matches Florida law.",
      body:
        "National sites check federal USDOT numbers. But most Florida moves never cross state lines — they are regulated by FDACS, not the FMCSA. We verify the credential that actually applies to your move.",
    },
    {
      title: "Movers who know your building and your weather.",
      body:
        "Condo COI requirements in Brickell, hurricane-season scheduling, summer humidity that warps furniture in a hot truck — our movers plan for Florida realities because Florida is all they do.",
    },
    {
      title: "Your information goes to 4 movers, not 40.",
      body:
        "You get competing quotes, not a ringing phone for three weeks.",
    },
  ];

  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
        <div className="lg:sticky lg:top-28">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            The FMD difference
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Why Florida Movers Direct Instead of the Big National Sites?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            National moving marketplaces are built to cover 50 states — which
            means their Florida knowledge is a dropdown menu. We only do
            Florida. That difference shows up in three places that cost or save
            you real money:
          </p>
        </div>

        <ul className="space-y-4">
          {points.map((p) => (
            <li
              key={p.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-soft"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Cities band                                                         */
/* ------------------------------------------------------------------ */

function CitiesBand() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Coverage
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Cities We Serve
          </h2>
          <p className="mt-3 text-muted-foreground">
            Miami · Tampa · Orlando · Jacksonville · Ocala · Naples · Boca Raton
            — and every city and county across Florida.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
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
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 grid gap-10 lg:grid-cols-[1fr_1.5fr] items-start">
        <div className="lg:sticky lg:top-28">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            FAQ
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Straight answers about pricing, licensing, and how our free quote
            service works.
          </p>
        </div>

        <ul className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <li
                key={f.q}
                className="rounded-2xl border border-border bg-white shadow-soft"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-display text-base md:text-lg font-bold text-ink">
                    {f.q}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 -mt-1 text-sm md:text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
