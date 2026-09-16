import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { ProseSection, SubBlock, CardGrid, CheckList } from "@/components/site/ContentSections";
import { useState } from "react";
import { ArrowRight, ShieldCheck, ChevronDown, DollarSign, Users } from "lucide-react";

const COST_ROWS = [
  {
    move: "Studio / 1BR apartment to 55+ community",
    cost: "$600-$1,100",
    timeline: "3-5 hours",
  },
  {
    move: "2BR home downsizing to apartment",
    cost: "$900-$1,800",
    timeline: "5-8 hours",
  },
  {
    move: "Full home to assisted living (partial shipment)",
    cost: "$700-$1,500",
    timeline: "Sorting adds 1-2 days",
  },
  {
    move: "Full-service downsizing (sort, pack, move, donate)",
    cost: "$1,800-$4,500",
    timeline: "2-4 days",
  },
];

const FAQS = [
  {
    q: "How much does a senior move cost in Florida?",
    a: "Most senior moves run $600-$2,500 depending on home size and how much sorting is involved. Full-service downsizing (sorting, packing, moving and donation coordination) runs $1,800-$4,500.",
  },
  {
    q: "Can movers help with downsizing and sorting?",
    a: "Yes — senior move specialists offer sorting sessions where they work alongside you or the family to decide what moves, what gets donated and what gets sold, then handle all three.",
  },
  {
    q: "Do 55+ communities have special moving rules?",
    a: "Almost always: scheduled move-in windows, gate registration, and often a certificate of insurance from the mover. Tell us the community name when requesting quotes and the movers handle the requirements.",
  },
  {
    q: "My parent lives in Florida and I live out of state — can you help?",
    a: "This is one of the most common senior move scenarios. Our movers provide written estimates, coordinate directly by phone with the family member managing the move, and send photo updates during the process.",
  },
];

export const Route = createFileRoute("/senior-moving-services/")({
  head: () =>
    pageHead({
      path: "/senior-moving-services/",
      title: "Senior Moving Services in Florida | Free Quotes",
      description: "Compare Florida senior moving help for downsizing, 55+ communities, packing, storage and assisted-living moves. Free quotes, no obligation.",
      service: { serviceType: "Senior Moving Services", areaServed: "Florida" },
      faqs: FAQS,
    }),
  component: SeniorMovingServicesPage,
});

function SeniorMovingServicesPage() {
  return (
    <>
      <Hero />
      <CostTable />
      <WhatMakesItDifferent />
      <Communities />
      <Timeline />
      <Faq />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
      <div className="container-page py-14 md:py-20 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          <ShieldCheck className="h-3.5 w-3.5" />
          Senior Move Specialists
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Senior Moving Services in <span className="text-brand">Florida</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          A senior move costs $600-$2,500 for most Florida relocations and involves far more than
          boxes: downsizing decades of belongings, coordinating with 55+ community move-in rules,
          and often working alongside adult children who live out of state. The movers in our
          network who specialize in senior relocations bring patience, sorting and donation help,
          and experience with communities like The Villages, Solivita and On Top of the World.
          Compare free quotes in 2 minutes.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Senior Moving Quotes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CostTable() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Pricing</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Senior Moving Costs in Florida (2026)
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">
                  Move Type
                </th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">
                  Typical Cost
                </th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">
                  Timeline
                </th>
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map((r, i) => (
                <tr key={r.move} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.move}</td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.cost}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-ink">{r.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="sm:hidden divide-y divide-border">
            {COST_ROWS.map((r) => (
              <div key={r.move} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.move}</div>
                <dl className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Typical Cost</dt>
                    <dd className="font-semibold text-ink">{r.cost}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Timeline</dt>
                    <dd className="font-semibold text-ink">{r.timeline}</dd>
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

function WhatMakesItDifferent() {
  return (
    <ProseSection
      eyebrow="Senior moves"
      title="What Makes a Senior Move Different"
      bg="bg-surface-alt"
    >
      <CardGrid>
        <SubBlock title="Downsizing decisions take time">
          <p>
            Moving from a 3-bedroom house to a 2-bedroom villa means deciding what 40% of your
            belongings will not fit. Specialized crews build in sorting days rather than rushing you
            on moving morning.
          </p>
        </SubBlock>
        <SubBlock title="55+ community rules">
          <p>
            The Villages, Solivita, On Top of the World, Kings Point and most Florida 55+
            communities require move-in scheduling, gate registration and often a certificate of
            insurance from the mover. Our crews handle this paperwork weekly.
          </p>
        </SubBlock>
        <SubBlock title="Coordination with family out of state">
          <p>
            Many Florida senior moves are organized by adult children in another state. Our movers
            provide written estimates, photo updates and direct phone coordination so families can
            manage the move remotely.
          </p>
        </SubBlock>
        <SubBlock title="Donation and disposal">
          <p>
            What does not travel needs a destination. Specialized movers coordinate pickups with
            Habitat ReStore, Goodwill and estate buyers, so nothing is left behind for the family to
            handle.
          </p>
        </SubBlock>
      </CardGrid>
    </ProseSection>
  );
}

function Communities() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">
          Coverage
        </span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          Communities and Areas We Serve
        </h2>
        <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-soft">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-cta/10 text-cta">
              <Users className="h-5 w-5" />
            </span>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Villages · Solivita · On Top of the World (Ocala) · Kings Point · Century Village ·
              Sun City Center · Del Webb communities · and 55+ neighborhoods across{" "}
              <Link to="/movers-in-naples/">Naples</Link>, Sarasota,{" "}
              <Link to="/movers-in-boca-raton/">Boca Raton</Link>, Vero Beach and the greater{" "}
              <Link to="/movers-in-tampa/">Tampa</Link> and{" "}
              <Link to="/movers-in-orlando/">Orlando</Link> areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <ProseSection
      eyebrow="Planning"
      title="How to Plan a Senior Move (Timeline)"
      bg="bg-surface-alt"
    >
      <CheckList
        items={[
          "8 weeks out: measure the new home and map which furniture actually fits.",
          "6 weeks: start sorting one room at a time — keep, gift, donate, discard.",
          "4 weeks: book the mover and confirm community move-in requirements.",
          "2 weeks: schedule donation pickups and confirm medication and document handling.",
          "Moving day: essentials bag (medications, documents, phone charger, change of clothes) travels with the person, never in the truck.",
        ]}
      />
      <p>
        If part of the household needs to be held rather than moved, compare{" "}
        <Link to="/storage-solutions/">climate-controlled storage options</Link>, and if a piano is
        making the trip, book a <Link to="/piano-movers/">piano specialist</Link> separately.
      </p>
    </ProseSection>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
          Senior Moving FAQ
        </h2>
        <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white shadow-soft">
          {FAQS.map((f, i) => {
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
