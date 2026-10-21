import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead, WEBSITE_SCHEMA } from "@/lib/seo";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BadgeCheck,
  DollarSign,
  Home as HomeIcon,
  Truck,
  Building2,
  Package,
  Boxes,
  Building,
  Piano,
  Users,
  ChevronDown,
} from "lucide-react";
import { CITIES } from "../components/site/data";
import { HeroQuoteForm } from "@/components/site/QuoteForm";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";

export const Route = createFileRoute("/")({
  head: () => {
    const head = pageHead({
      path: "/",
      title: "Movers in Florida | Compare Licensed Movers & Free Quotes",
      description: "Compare licensed Florida movers and request free quotes for local, long-distance, commercial and specialty moves. Free to use, no obligation.",
      service: { serviceType: 'Moving Company Lead Matching', areaServed: 'Florida' },
      faqs: FAQS,
    });
    return {
      ...head,
      links: [...head.links, { rel: "preload", as: "image", href: "/images/hero-family.webp", fetchPriority: "high" }],
      scripts: [
        ...head.scripts,
        { type: "application/ld+json", children: JSON.stringify(WEBSITE_SCHEMA) },
      ],
    };
  },
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
    icon: HomeIcon,
    title: "Local Movers",
    body:
      "Hourly crews for moves under 50 miles — from $95/hour for two movers and a truck. Same-week availability in most cities.",
    anchor: "Local Movers in Florida",
    to: "/local-movers-in-florida/",
  },
  {
    icon: Truck,
    title: "Long Distance Movers",
    body:
      "Interstate and intrastate moves with binding estimates, FMCSA-verified carriers and delivery windows in writing.",
    anchor: "Long Distance Movers",
    to: "/long-distance-movers/",
  },
  {
    icon: Building2,
    title: "Commercial and Office Movers",
    body:
      "After-hours and weekend relocations with COI handling and IT care — never lose a business day.",
    anchor: "Commercial Movers",
    to: "/commercial-movers/",
  },
  {
    icon: Package,
    title: "Packing Services",
    body:
      "Full or fragile-only professional packing from $280, materials included.",
    anchor: "Packing Services",
    to: "/packing-services/",
  },
  {
    icon: Boxes,
    title: "Moving and Storage",
    body:
      "Storage-in-transit and climate-controlled options — essential in Florida humidity.",
    anchor: "Moving and Storage",
    to: "/storage-solutions/",
  },
  {
    icon: Building,
    title: "Apartment and Condo Movers",
    body:
      "COI, elevator reservations and building rules handled.",
    anchor: "Apartment Movers",
    to: "/apartment-movers/",
  },
  {
    icon: Users,
    title: "Senior Moving Services",
    body:
      "Downsizing help, 55+ community move-in rules and donation coordination — $600-$2,500 for most senior moves.",
    anchor: "Senior Moving Services",
    to: "/senior-moving-services/",
  },
  {
    icon: Piano,
    title: "Piano and Specialty Movers",
    body:
      "Uprights from $150, grands from $300, moved with real piano equipment.",
    anchor: "Piano Movers",
    to: "/piano-movers/",
  },
] as const;

const FAQS = [
  {
    q: "How much do movers cost in Florida?",
    a: "Typical ranges: $400-$1,600 for a local move depending on home size, and $2,200-$6,500+ for a long-distance move from Florida. A 2-3 bedroom local move usually falls between $850 and $1,500. Estimates vary by home size, access and season, and peak-season dates normally price higher. Only a written quote is binding.",
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
    a: "October through April, mid-month, on a weekday. Month-end weekends are the busiest slots and typically the most expensive, so flexible dates usually quote lower.",
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
      <FeaturedGuides />
      <FaqSection />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Featured pillar guides (one per SEO silo)                           */
/* ------------------------------------------------------------------ */
const PILLAR_GUIDES = [
  {
    slug: "how-much-do-movers-cost-florida",
    category: "Moving Costs",
    title: "How Much Do Movers Cost in Florida? (2026 Price Guide)",
    excerpt: "Local $400-$1,600, long distance $2,200-$6,500+. Full breakdown by home size, city and season.",
    image: "/__l5e/assets-v1/eb89c274-9067-43d1-addc-f9a6378e584d/local-movers-in-miami-costs.jpg",
    alt: "Couple reviewing a local moving estimate in Miami",
  },
  {
    slug: "florida-moving-checklist-8-weeks",
    category: "Moving Guides",
    title: "The Ultimate Florida Moving Checklist (8-Week Timeline)",
    excerpt: "8-week timeline, condo COIs, hurricane-season prep and humidity-safe packing.",
    image: "/__l5e/assets-v1/e6d70080-93a6-4f16-a558-c2651f439f34/florida-moving-checklist.jpg",
    alt: "Florida couple reviewing their moving quote on a laptop",
  },
  {
    slug: "best-florida-neighborhoods-families-2026",
    category: "Florida Cities",
    title: "Best Florida Neighborhoods to Move to in 2026 (By Lifestyle)",
    excerpt: "Where to move by lifestyle — families, remote workers, retirees and young pros.",
    image: "/__l5e/assets-v1/cb23e605-364c-4f6f-8814-72ac30e14852/best-florida-neighborhoods-families.jpg",
    alt: "Aerial view of a leafy Florida family neighborhood at golden hour",
  },
];

function FeaturedGuides() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Editorial guides
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
              Read before you book
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Our most useful pillar guides on Florida moving costs, planning and where to live.
            </p>
          </div>
          <Link
            to="/blog/"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:underline"
          >
            All Florida moving guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLAR_GUIDES.map((g) => (
            <Link
              key={g.slug}
              to="/blog/$slug/"
              params={{ slug: g.slug }}
              className="group rounded-2xl border border-border bg-white overflow-hidden shadow-soft hover:-translate-y-0.5 hover:border-brand transition"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface-alt">
                <img src={g.image} alt={g.alt} loading="lazy" className="h-full w-full object-cover group-hover:scale-[1.03] transition" />
              </div>
              <div className="p-6">
                <span className="rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
                  {g.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-brand transition">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden isolate">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/hero-family.webp"
        width={520}
        height={620}
        fetchPriority="high"
        alt=""
        aria-hidden="true"
      />
      {/* Dark gradient overlay for readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,83,148,0.88)_0%,rgba(11,25,45,0.78)_55%,rgba(11,25,45,0.55)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/25"
      />

      <div className="relative container-page py-16 md:py-24 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/25 px-3 py-1 text-xs font-semibold text-white shadow-soft">
            <ShieldCheck className="h-3.5 w-3.5" />
            Licensed Florida Movers — Verify Any License Yourself
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
            Movers in Florida —{" "}
            <span className="text-accent">Compare Licensed Moving Companies</span>{" "}
            and Save
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/90 max-w-xl">
            Compare free quotes from licensed movers in Florida in under 2
            minutes. One simple form connects you with up to 4 independent
            licensed moving companies competing for your move — local, long
            distance, or commercial. You can confirm any mover's credentials
            yourself: USDOT number in the FMCSA SAFER database for interstate
            moves, FDACS registration for moves inside Florida. No calls from
            random brokers, no spam, no obligation.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {TRUST_BADGES.map((b) => (
              <li
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white shadow-soft"
              >
                <BadgeCheck className="h-3.5 w-3.5 text-accent" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <QuoteFormCard />
      </div>
      <NetworkDisclosure />
    </section>
  );
}

function QuoteFormCard() {
  return <HeroQuoteForm />;
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
      d: "Up to 4 licensed movers send their best price. Comparing three or more written quotes is the simplest way to see the real price spread for your move.",
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
          {SERVICES.map(({ icon: Icon, title, body, to, anchor }) => (
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
                {anchor} <ArrowRight className="h-4 w-4" />
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
        <p className="mt-3 text-xs text-muted-foreground">Typical ranges only — estimates vary by home size, access, stairs, distance and season. Only a written quote from a mover is binding.</p>

        <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
          Florida moving prices typically climb during peak season
          (May-September) and are usually at their lowest January-March. Mid-month weekdays are
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
              Movers in {c.label}
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
