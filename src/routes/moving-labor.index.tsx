import { createFileRoute, Link } from "@tanstack/react-router";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
import { pageHead } from "@/lib/seo";
import {
  ProseSection,
  SubBlock,
  CardGrid,
  CheckList,
  LinkDirectory,
} from "@/components/site/ContentSections";
import { useState } from "react";
import { ArrowRight, ShieldCheck, ChevronDown, Users } from "lucide-react";

const PATH = "/moving-labor/";

export const Route = createFileRoute("/moving-labor/")({
  head: () =>
    pageHead({
      path: PATH,
      title: "Moving Help in Florida | Labor-Only Loading & Unloading",
      description:
        "Moving help in Florida: hourly labor-only crews load and unload your rental truck or portable container. Compare rates, minimums and insurance before you book.",
      service: { serviceType: "Moving Labor", areaServed: "Florida" },
      faqs: FAQS,
      noAlternates: true,
    }),
  component: MovingLaborPage,
});

const COMPARE_ROWS = [
  {
    factor: "Who drives",
    labor: "You drive the rental truck or the container company moves it",
    full: "The moving company drives its own truck",
  },
  {
    factor: "Truck and fuel",
    labor: "You rent and pay for them separately",
    full: "Included in the hourly rate or the estimate",
  },
  {
    factor: "How it is billed",
    labor: "Hourly per helper or per crew, with a minimum",
    full: "Hourly for local moves; $95-$150/hr is typical for 2 movers + truck",
  },
  {
    factor: "Packing",
    labor: "Usually not included; some crews offer it",
    full: "Available as an add-on or full packing service",
  },
  {
    factor: "Your goods while driving",
    labor: "Your responsibility once the door is closed",
    full: "The mover's responsibility under its valuation terms",
  },
  {
    factor: "Registration to check",
    labor: "Ask FDACS what applies to the crew's services",
    full: "FDACS for moves inside Florida, USDOT for interstate",
  },
  {
    factor: "Best for",
    labor: "DIY moves, containers, long drives you want to handle yourself",
    full: "Busy schedules, heavy homes, moves with stairs and tight timing",
  },
];

const FAQS = [
  {
    q: "What is labor-only moving help?",
    a: "Labor-only moving help is a crew that loads, unloads or rearranges your belongings while you provide the truck, trailer or portable container. The crew does the lifting; you or the container company handle the transport.",
  },
  {
    q: "How much does moving labor cost in Florida?",
    a: "Moving labor is billed by the hour with a minimum, and rates vary by company, crew size and date. Because no truck or fuel is included, labor-only help is generally priced below a full-service crew, which typically runs $95-$150 per hour for two movers and a truck.",
  },
  {
    q: "How many movers do I need to load a rental truck?",
    a: "Two helpers handle most studio and one-bedroom loads. Larger homes, heavy pieces or long walks from the door to the truck usually call for three or more, so describe your home and the access when you ask for quotes.",
  },
  {
    q: "Will labor-only movers load a portable storage container?",
    a: "Yes, loading and unloading portable containers is one of the most common labor-only jobs. Have the container placed on level ground close to the door, and ask the crew to load heavy items first and strap each section.",
  },
  {
    q: "Is labor-only moving help licensed and insured?",
    a: "Ask each company what insurance it carries and how it handles damage during loading or unloading. FDACS registers companies that transport household goods inside Florida; to confirm what applies to a crew that only loads and unloads, check with FDACS.",
  },
  {
    q: "Who is responsible if something breaks in my rental truck?",
    a: "Once the truck is loaded and you are driving, shifting or damage on the road is generally your responsibility, not the loading crew's. Ask the crew to pad and tie off each tier, and review the coverage offered by the rental company.",
  },
  {
    q: "Can I book moving help for just one hour?",
    a: "Most companies set a minimum longer than one hour, and the minimum varies. If the job is small, add other tasks to the same visit so the time you pay for is used.",
  },
];

function MovingLaborPage() {
  return (
    <>
      <Hero />
      <NetworkDisclosure />
      <WhatIsIt />
      <Cost />
      <RentalTruck />
      <Comparison />
      <Licensing />
      <WhenToBook />
      <Faq />
      <Related />
      <BottomCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
      <div className="container-page py-14 md:py-20 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          <ShieldCheck className="h-3.5 w-3.5" />
          Loading and Unloading Help
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Moving Help and Labor in <span className="text-brand">Florida</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Moving help in Florida, also called moving labor or labor-only movers, is a crew that
          loads and unloads your rental truck, trailer or portable container while you handle the
          driving. It is billed by the hour with a minimum, and rates vary by company and crew size.
          Compare free quotes from up to 4 independent movers in our network and get the rate,
          minimum and insurance details in writing.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Moving Help Quotes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhatIsIt() {
  return (
    <ProseSection eyebrow="The basics" title="What Is Labor-Only Moving Help?" bg="bg-background">
      <p>
        Most people searching for moving help near me want exactly this: loading and unloading help
        without a moving truck. You hire the people and supply the vehicle. The crew carries
        furniture and boxes, wraps pieces in blankets, takes apart beds and tables, and stacks the
        load so it rides safely. When the doors close, you drive, or the container company picks the
        container up.
      </p>
      <CardGrid cols={3}>
        <SubBlock title="Loading help">
          <p>
            The crew loads your rental truck, trailer or portable container at the old home. The
            most common labor-only job, because loading well is what protects your furniture on the
            road.
          </p>
        </SubBlock>
        <SubBlock title="Unloading help">
          <p>
            A crew meets the truck or container at the new home and places every piece in the right
            room. Useful when you drove in from out of state and arrive tired.
          </p>
        </SubBlock>
        <SubBlock title="In-home moves">
          <p>
            Moving heavy pieces between rooms or floors with no truck at all. For single heavy items
            and appliances, see{" "}
            <Link to={"/furniture-movers/" as "/"}>
              furniture movers for heavy and single items
            </Link>
            .
          </p>
        </SubBlock>
      </CardGrid>
    </ProseSection>
  );
}

function Cost() {
  return (
    <ProseSection
      eyebrow="Pricing"
      title="How Much Does Moving Labor Cost in Florida?"
      bg="bg-surface-alt"
    >
      <p>
        Moving labor is billed by the hour, either per helper or for the whole crew, and almost
        every company sets a minimum number of hours. Rates vary by company, city, crew size and
        date. Because no truck, fuel or transport is included, labor-only help is generally priced
        below a full-service crew, which in Florida typically runs $95-$150 per hour for two movers
        and a truck.
      </p>
      <p>What changes the total on a labor-only job:</p>
      <CheckList
        items={[
          "The minimum: on a short load, you pay the minimum even if the crew finishes early.",
          "Crew size: three helpers cost more per hour than two, but often finish a large load sooner.",
          "Access: stairs, elevators and a long walk from the door to the truck add time.",
          "Readiness: boxes taped and labeled, and furniture emptied, keep the crew lifting instead of waiting.",
        ]}
      />
      <p>
        For the full-service hourly rates by home size, see our{" "}
        <Link to="/local-movers-in-florida/">Florida local movers rate guide</Link>. For short jobs
        billed by the hour, read{" "}
        <Link to={"/blog/small-moves-hourly-movers-florida/" as "/"}>
          how hourly movers price small moves in Florida
        </Link>
        .
      </p>
    </ProseSection>
  );
}

function RentalTruck() {
  return (
    <ProseSection eyebrow="DIY moves" title="Loading a Rental Truck or Portable Container">
      <p>
        The way a truck or container is loaded decides whether your furniture arrives in one piece.
        A labor-only crew loads in tiers: heavy, flat pieces against the front wall, boxes stacked
        heavy to light, and each tier padded and tied off before the next one starts.
      </p>
      <CardGrid>
        <SubBlock title="Rental trucks">
          <p>
            Reserve the truck for a pickup time before the crew arrives, and park it as close to the
            door as you legally can. Have moving blankets and straps on hand; many crews bring their
            own, but confirm it when you book.
          </p>
        </SubBlock>
        <SubBlock title="Portable containers">
          <p>
            Containers have a fixed size, so the crew loads tight from floor to ceiling. Ask your
            HOA or building whether a container may sit in the driveway and for how long.
          </p>
        </SubBlock>
        <SubBlock title="Florida heat">
          <p>
            Truck and container interiors get very hot in summer. Start early, keep candles, vinyl
            records and electronics in your car, and plan for afternoon storms.
          </p>
        </SubBlock>
      </CardGrid>
      <p>
        Not sure whether to drive the truck yourself at all? Our comparison of{" "}
        <Link to="/blog/$slug/" params={{ slug: "professional-movers-vs-diy-truck-florida" }}>
          professional movers vs. a DIY rental truck in Florida
        </Link>{" "}
        walks through the real costs on both sides.
      </p>
    </ProseSection>
  );
}

function Comparison() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Compare</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Labor-Only vs. Full-Service Movers
          </h2>
          <p className="mt-3 text-muted-foreground">
            Labor-only help saves money when you are happy to drive. Full-service movers cost more
            per hour but take the truck, the driving and the responsibility for your goods in
            transit.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">
                  Factor
                </th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">
                  Labor-only help
                </th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">
                  Full-service movers
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((r, i) => (
                <tr key={r.factor} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.factor}</td>
                  <td className="px-6 py-4 text-ink">{r.labor}</td>
                  <td className="px-6 py-4 text-ink">{r.full}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="sm:hidden divide-y divide-border">
            {COMPARE_ROWS.map((r) => (
              <div key={r.factor} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.factor}</div>
                <dl className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Labor-only help</dt>
                    <dd className="font-semibold text-ink">{r.labor}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Full-service movers</dt>
                    <dd className="font-semibold text-ink">{r.full}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          General comparison only. Rates, minimums and coverage are set by each company; only a
          written quote is binding.
        </p>
      </div>
    </section>
  );
}

function Licensing() {
  return (
    <ProseSection eyebrow="Before you book" title="Is Labor-Only Help Licensed and Insured?">
      <p>
        Ask every company the same questions, whether it is a labor-only crew or a full-service
        mover, and get the answers in writing.
      </p>
      <CheckList
        items={[
          "What insurance does the company carry, and does it cover damage to my home and belongings during loading and unloading?",
          "Are the helpers employees of the company, and is the company covered if a worker is injured on my property?",
          "How are damage claims handled, and how long do I have to report a problem?",
          "What is the hourly rate, the minimum, and is there a travel fee?",
        ]}
      />
      <p>
        Registration is the other check. The Florida Department of Agriculture and Consumer Services
        (FDACS) registers movers that transport household goods inside Florida. Whether a crew that
        only loads and unloads needs to register depends on the services it provides, so check with{" "}
        <a href="https://www.fdacs.gov/Business-Services/Moving-Companies" rel="noopener">
          FDACS moving services
        </a>{" "}
        if you are unsure. For moves that cross state lines, look up the company's USDOT number in{" "}
        <a href="https://safer.fmcsa.dot.gov/" rel="noopener">
          FMCSA SAFER
        </a>
        . Our{" "}
        <Link to="/how-to-verify-florida-mover-license/">
          step-by-step guide to checking a Florida mover license
        </Link>{" "}
        covers both lookups.
      </p>
    </ProseSection>
  );
}

function WhenToBook() {
  return (
    <ProseSection eyebrow="Timing" title="When Should I Book Moving Help?" bg="bg-surface-alt">
      <p>
        Reserve the truck or container first, then book the crew to start after your pickup so the
        truck is waiting when they arrive. One to two weeks ahead is usually enough for a midweek
        date; month-end weekends need more lead time.
      </p>
      <p>
        Need help in the next day or two? Read our tips for{" "}
        <Link to={"/blog/last-minute-movers-florida/" as "/"}>
          finding last-minute movers in Florida
        </Link>
        , and keep the job small and well prepared so a crew can fit it into an open slot.
      </p>
    </ProseSection>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Moving Help FAQ</h2>
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
                      "h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform " +
                      (isOpen ? "rotate-180 text-brand" : "")
                    }
                  />
                </button>
                <div
                  className={
                    isOpen ? "px-5 pb-5 text-sm leading-relaxed text-muted-foreground" : "sr-only"
                  }
                >
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

function Related() {
  return (
    <LinkDirectory
      eyebrow="Related services"
      title="Other Ways to Get Moving Help in Florida"
      links={[
        {
          to: "/local-movers-in-florida/",
          label: "Local movers in Florida",
          d: "Full-service hourly crews with a truck included.",
        },
        {
          to: "/furniture-movers/",
          label: "Furniture movers",
          d: "Single pieces, heavy items and appliances.",
        },
        {
          to: "/packing-services/",
          label: "Packing services",
          d: "Fragile-only or full packing before your crew arrives.",
        },
        {
          to: "/storage-solutions/",
          label: "Storage solutions",
          d: "Portable containers, self-storage and storage-in-transit.",
        },
        {
          to: "/long-distance-movers/",
          label: "Long-distance movers",
          d: "When you would rather not drive the truck across states.",
        },
      ]}
    />
  );
}

function BottomCta() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 text-center max-w-2xl">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Users className="h-6 w-6" />
        </div>
        <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-ink">
          Compare Moving Help Quotes — Free
        </h2>
        <p className="mt-4 text-muted-foreground">
          Tell us where the truck or container will be and what needs loading. Independent movers in
          our network reply with their rate, minimum and insurance details, and you choose — or no
          one.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Free Quotes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
