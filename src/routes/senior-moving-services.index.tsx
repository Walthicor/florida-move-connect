import { createFileRoute, Link } from "@tanstack/react-router";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
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
    a: "Yes, this is one of the most common senior move scenarios. Many movers in our network can do a video walkthrough, send written estimates by email, coordinate by phone with the family member managing the move and share photo updates. Ask each mover which of these it offers before you book.",
  },
  {
    q: "What is the difference between a senior move manager and a mover?",
    a: "A senior move manager plans the move: sorting, floor plans, donation and sale coordination, and setting up the new home. A mover packs, loads and transports. Some companies offer both; others work together, so ask who is responsible for each step.",
  },
  {
    q: "Do elderly movers help unpack and set up the new home?",
    a: "Many senior moving specialists offer unpacking, furniture placement, bed making and hanging pictures as an add-on. Ask for it in writing in the estimate, because standard moving quotes usually end when the last box comes off the truck.",
  },
  {
    q: "How can I find low-cost movers for seniors?",
    a: "The biggest saving is moving less: downsize first, so the crew and truck can be smaller. Then compare several written quotes, choose a mid-month weekday, and ask whether the family can handle packing while the movers handle only the heavy items.",
  },
];

export const Route = createFileRoute("/senior-moving-services/")({
  head: () =>
    pageHead({
      path: "/senior-moving-services/",
      title: "Senior Moving Services in Florida | Compare Senior Movers",
      description: "Senior moving services in Florida: compare licensed senior movers for downsizing, 55+ communities, assisted living, packing and storage. Free quotes.",
      service: { serviceType: "Senior Moving Services", areaServed: "Florida" },
      faqs: FAQS,
    }),
  component: SeniorMovingServicesPage,
});

function SeniorMovingServicesPage() {
  return (
    <>
      <Hero />
      <NetworkDisclosure />
      <CostTable />
      <WhatMakesItDifferent />
      <ManagerVsMover />
      <Downsizing />
      <AssistedLiving />
      <Communities />
      <CityMoves />
      <Timeline />
      <RemoteFamily />
      <ScamAwareness />
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
          Senior moving services in Florida combine a regular move with downsizing, sorting and
          help settling in, and most senior moves cost an estimated $600-$2,500. Florida Movers
          Direct is not a moving company: one free form connects you with up to four independent,
          licensed senior movers. The movers in our network who specialize in senior relocations
          bring patience, sorting and donation help, and experience with 55+ communities like The
          Villages, Solivita and On Top of the World, often working alongside adult children who
          live out of state. Compare free quotes in 2 minutes.
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
            insurance from the mover. Movers in our network who work these communities are used to
            this paperwork.
          </p>
        </SubBlock>
        <SubBlock title="Coordination with family out of state">
          <p>
            Many Florida senior moves are organized by adult children in another state. Ask the
            movers you compare for written estimates, photo updates and direct phone coordination so
            the family can manage the move remotely.
          </p>
        </SubBlock>
        <SubBlock title="Donation and disposal">
          <p>
            What does not travel needs a destination. Many senior move specialists can help arrange
            donation pickups, consignment or estate buyers, so less is left behind for the family to
            handle. Ask what is included and what costs extra.
          </p>
        </SubBlock>
      </CardGrid>
    </ProseSection>
  );
}

function Communities() {
  return (
    <section className="bg-surface-alt">
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

function ManagerVsMover() {
  return (
    <ProseSection
      eyebrow="Who does what"
      title="What Does a Senior Move Manager Do vs. a Moving Company?"
      bg="bg-background"
    >
      <p>
        A senior move manager organizes the whole transition; a moving company moves the
        belongings. Some senior movers offer both under one contract, while others partner with a
        separate move manager. Knowing the difference helps you ask for the right quote.
      </p>
      <CardGrid>
        <SubBlock title="Senior move manager">
          <p>
            Builds the plan and the timeline, measures the new home and makes a floor plan, guides
            sorting decisions, arranges sale, consignment or donation of what is not moving, and
            often unpacks and sets up the new home so it feels familiar on the first night.
          </p>
        </SubBlock>
        <SubBlock title="Moving company for seniors">
          <p>
            Packs, protects, loads, transports and unloads. A good moving company for seniors works
            at a calmer pace, labels boxes by room, reassembles beds first and follows the community's
            move-in rules. It must be registered with FDACS for moves inside Florida.
          </p>
        </SubBlock>
      </CardGrid>
      <p>
        If your parent is moving from a large home with decades of belongings, a combined service
        usually saves the family the most time. If the sorting is already done, standard senior
        movers paid by the hour are often enough.
      </p>
    </ProseSection>
  );
}

function Downsizing() {
  return (
    <ProseSection
      eyebrow="Downsizing"
      title="How Do You Downsize Before a Senior Move?"
      bg="bg-surface-alt"
    >
      <p>
        Downsizing is usually the hardest part of a senior move, and the part that most affects the
        cost. Every item that does not move lowers the crew time and the truck size. Work through it
        in this order:
      </p>
      <CheckList
        items={[
          "Get the floor plan of the new home and measure the rooms, closets and doorways.",
          "Choose the furniture that fits first — bed, favorite chair, dining set — so everything else is a clear decision.",
          "Sort one room at a time into keep, give to family, sell, donate and discard. Start with rooms that are used least.",
          "Let family members claim heirlooms early, and photograph sentimental items that cannot come along.",
          "Book sale, consignment and donation pickups before moving day, not after.",
          "Use short-term storage only for items that are truly undecided, with a date to decide.",
        ]}
      />
      <p>
        For a detailed room-by-room plan, read our deep dive on{" "}
        <Link to="/blog/$slug/" params={{ slug: "downsizing-for-seniors-florida" }}>
          downsizing for seniors in Florida
        </Link>
        . If part of the household needs to be held for a while, compare{" "}
        <Link to="/storage-solutions/">moving and storage options in Florida</Link>.
      </p>
    </ProseSection>
  );
}

function AssistedLiving() {
  return (
    <ProseSection
      eyebrow="New community"
      title="Moving Into Assisted Living or a 55+ Community"
      bg="bg-background"
    >
      <CardGrid>
        <SubBlock title="Assisted living and memory care">
          <p>
            Rooms are smaller than most apartments, and the facility usually sets the move-in date
            and time. Ask for its furniture list — some rooms come furnished, some limit what can be
            brought in — and confirm the elevator and entrance the crew should use.
          </p>
          <p>
            Keep medications, glasses, hearing aids, documents and a change of clothes with the
            person, not on the truck. Setting up the room before your parent arrives makes the
            first day much easier.
          </p>
        </SubBlock>
        <SubBlock title="55+ and active-adult communities">
          <p>
            Villas and condos in 55+ communities usually have association rules: approved move
            hours, gate or guest registration for the truck, size limits on vehicles and sometimes a
            certificate of insurance from the mover.
          </p>
          <p>
            Request the community's move-in packet as soon as the date is set, and share it with
            every mover you are comparing so the quotes reflect the real conditions.
          </p>
        </SubBlock>
      </CardGrid>
    </ProseSection>
  );
}

function CityMoves() {
  return (
    <ProseSection
      eyebrow="Popular destinations"
      title="Senior Moves in The Villages, Boca Raton and Naples"
      bg="bg-background"
    >
      <p>
        Three of Florida's most common retirement destinations each bring their own move-day
        details:
      </p>
      <CheckList
        items={[
          <>
            <strong className="text-ink">The Villages:</strong> many moves are downsizing into a
            villa or patio home, with neighborhood gates and golf-cart traffic on community roads.
            See our guide to{" "}
            <Link to="/movers-in-the-villages/">movers in The Villages for downsizing moves</Link>.
          </>,
          <>
            <strong className="text-ink">Boca Raton:</strong> condo towers and gated communities
            where a certificate of insurance and a reserved elevator are standard. Compare{" "}
            <Link to="/movers-in-boca-raton/">Boca Raton condo movers</Link>.
          </>,
          <>
            <strong className="text-ink">Naples:</strong> gated communities and seasonal residents,
            with demand rising when winter residents arrive and leave. Compare{" "}
            <Link to="/movers-in-naples/">Naples movers on the Gulf coast</Link>.
          </>,
        ]}
      />
    </ProseSection>
  );
}

function RemoteFamily() {
  return (
    <ProseSection
      eyebrow="Family support"
      title="How Can Families Help With a Senior Move Remotely?"
      bg="bg-background"
    >
      <p>
        Many senior moves in Florida are managed by an adult child in another state. You can run
        most of the process from a distance if you set it up clearly:
      </p>
      <CheckList
        items={[
          "Choose one family point person so movers and the community hear one voice.",
          "Ask movers for a video walkthrough of the home and a written estimate by email.",
          "Verify each mover's registration yourself before anyone pays a deposit.",
          "Share the new home's floor plan and the community's move-in rules with every mover.",
          "Arrange for a trusted local person — a relative, friend or move manager — to be there on move day.",
          "Ask for photo or phone updates at loading and delivery, and confirm the final bill in writing.",
          "Handle the paperwork in parallel: mail forwarding, utilities, prescriptions and important documents.",
        ]}
      />
    </ProseSection>
  );
}

function ScamAwareness() {
  return (
    <ProseSection
      eyebrow="Protect your parent"
      title="How Do You Avoid Moving Scams When Hiring Senior Movers?"
      bg="bg-surface-alt"
    >
      <p>
        Older adults are a frequent target of moving scams, so check every senior mover before you
        sign. Warning signs include a quote far below the others, a demand for a large deposit or
        cash, no written estimate, pressure to book immediately, and a company name that does not
        match its registration.
      </p>
      <p>
        For moves inside Florida, look up the mover with the{" "}
        <a href="https://www.fdacs.gov/Business-Services/Moving-Companies" rel="noopener">
          Florida Department of Agriculture and Consumer Services (FDACS)
        </a>
        ; for moves to or from another state, check the USDOT number in{" "}
        <a href="https://safer.fmcsa.dot.gov/" rel="noopener">FMCSA SAFER</a>. Read our guide to{" "}
        <Link to="/moving-scams-florida/">moving scams in Florida and the warning signs</Link>, and
        follow the steps in{" "}
        <Link to="/how-to-verify-florida-mover-license/">how to verify a Florida mover's license</Link>.
      </p>
    </ProseSection>
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
