import { createFileRoute, Link } from "@tanstack/react-router";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
import { PageEstimateNote } from "@/components/site/PageBlocks";
import { pageHead } from "@/lib/seo";
import {
  ProseSection,
  SubBlock,
  CardGrid,
  CheckList,
  LinkDirectory,
} from "@/components/site/ContentSections";
import { useState } from "react";
import { ArrowRight, ShieldCheck, ChevronDown, Sofa } from "lucide-react";

const PATH = "/furniture-movers/";

export const Route = createFileRoute("/furniture-movers/")({
  head: () =>
    pageHead({
      path: PATH,
      title: "Furniture Movers in Florida | Single & Heavy Items",
      description:
        "Furniture movers in Florida charge $95-$150 an hour for two movers, plus a minimum that varies. Compare licensed crews for one piece, heavy items and appliances.",
      service: { serviceType: "Furniture Moving", areaServed: "Florida" },
      faqs: FAQS,
      noAlternates: true,
    }),
  component: FurnitureMoversPage,
});

const COST_ROWS = [
  {
    job: "One piece (sofa, dresser, bed)",
    crew: "2 movers + truck",
    drivers: "Stairs, doorways, drive time",
    billing: "$95-$150/hr + company minimum",
  },
  {
    job: "A room or partial load",
    crew: "2-3 movers + truck",
    drivers: "Number of pieces, disassembly",
    billing: "$95-$150/hr for 2 movers; more for 3",
  },
  {
    job: "Store or Marketplace pickup",
    crew: "2 movers + truck",
    drivers: "Pickup distance, wait time",
    billing: "$95-$150/hr + company minimum",
  },
  {
    job: "Rearranging inside your home",
    crew: "2 movers",
    drivers: "Weight, stairs, floor protection",
    billing: "Hourly + minimum, quoted in writing",
  },
  {
    job: "Safes and specialty items",
    crew: "2-4 movers + equipment",
    drivers: "Weight, stairs, floor type",
    billing: "Item fee or hourly, quoted in writing",
  },
];

const FAQS = [
  {
    q: "How much do furniture movers cost in Florida?",
    a: "Most local furniture moves are billed by the hour, and a two-mover crew with a truck typically runs $95-$150 per hour. Each company also sets its own minimum number of hours, so a single item often costs the minimum rather than the actual time.",
  },
  {
    q: "Can I hire movers for just one piece of furniture?",
    a: "Yes. Many local movers take single-item jobs such as one sofa, a dresser or a bed. Ask each company for its hourly minimum and whether travel time is billed, because those two lines decide the total on a small job.",
  },
  {
    q: "Do furniture movers disassemble and reassemble furniture?",
    a: "Most crews take apart and put back together beds, tables and desks with standard hardware as part of the hourly job. Complex pieces like wall units, adjustable beds or built-ins may take extra time, so mention them in your request.",
  },
  {
    q: "Will movers pick up furniture from Facebook Marketplace or a store?",
    a: "Many local movers will, billed hourly from the time the crew arrives. Pay the seller and confirm the pickup time before the crew is booked, and check the item yourself, since the mover is responsible for handling, not the item's condition before pickup.",
  },
  {
    q: "Do furniture movers move appliances?",
    a: "Many do move refrigerators, washers, dryers and freezers. Gas appliances and some water connections should be disconnected and reconnected by a qualified technician, so plan that separately unless the mover confirms it offers the service.",
  },
  {
    q: "Can regular furniture movers move a piano or a gun safe?",
    a: "A gun safe is often handled by experienced local crews with the right equipment, but tell them the weight and the stairs. Pianos need a specialist crew with a piano board and the right valuation, which is why they are quoted separately.",
  },
  {
    q: "Are furniture movers responsible if something is damaged?",
    a: "A mover that transports your goods should explain its valuation options in writing. Basic released value coverage pays only a small amount per pound, so ask about full value protection for expensive pieces before the move.",
  },
];

function FurnitureMoversPage() {
  return (
    <>
      <Hero />
      <NetworkDisclosure />
      <CostTable />
      <OnePiece />
      <InHome />
      <SpecialtyItems />
      <StorePickup />
      <ByCity />
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
          Licensed Furniture Moving Crews
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Furniture Movers in <span className="text-brand">Florida</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Furniture movers in Florida typically charge $95-$150 per hour for a two-mover crew with a
          truck, plus a minimum number of hours that varies by company. That covers a single sofa, a
          bedroom set, heavy pieces moved inside your home, appliances and large items picked up
          from a store. Compare free quotes from up to 4 independent licensed movers and see the
          minimum in writing before you book.
        </p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Furniture Moving Quotes <ArrowRight className="h-4 w-4" />
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
            How Much Do Furniture Movers Cost in Florida?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Furniture moving service is priced like any local move: by the hour, from the time the
            crew arrives until the last piece is placed. On small jobs the company minimum matters
            more than the rate, so always compare the minimum and how travel time is billed.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">
                  Job
                </th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">
                  Typical crew
                </th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">
                  What drives the time
                </th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">
                  How it is billed
                </th>
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map((r, i) => (
                <tr key={r.job} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.job}</td>
                  <td className="px-6 py-4 text-ink">{r.crew}</td>
                  <td className="px-6 py-4 text-ink">{r.drivers}</td>
                  <td className="px-6 py-4 font-semibold text-ink">{r.billing}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="sm:hidden divide-y divide-border">
            {COST_ROWS.map((r) => (
              <div key={r.job} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.job}</div>
                <dl className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Typical crew</dt>
                    <dd className="text-ink">{r.crew}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">What drives the time</dt>
                    <dd className="text-ink">{r.drivers}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">How it is billed</dt>
                    <dd className="font-semibold text-ink">{r.billing}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
        <PageEstimateNote />
        <p className="mt-4 text-sm text-muted-foreground">
          Minimums, travel fees and specialty-item charges are set by each mover and vary across
          Florida. For the full hourly rate card by home size, see our{" "}
          <Link to="/local-movers-in-florida/" className="font-semibold text-brand hover:underline">
            Florida local moving rates guide
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function OnePiece() {
  return (
    <ProseSection
      eyebrow="Small jobs"
      title="Can I Hire Movers for Just One Piece of Furniture?"
      bg="bg-surface-alt"
    >
      <p>
        Yes. Single-item jobs are common: a new sectional from a showroom, a dresser going to a
        family member across town, a bed moving into a second-floor bedroom. Many local movers
        accept them, but each sets a minimum number of billable hours. If the job takes 40 minutes
        and the minimum is longer, you pay the minimum.
      </p>
      <p>
        So bundle: add anything else that needs to move on the same trip while you are already
        paying for the time.
      </p>
      <CheckList
        items={[
          "Measure the item and every doorway, stairwell and hallway turn on both ends.",
          "Send photos of the piece and the path, including any stairs or elevator.",
          "Ask for the minimum, the hourly rate and how travel time is billed, in writing.",
          "Be flexible on the date: a midweek slot is usually easier to book than a Saturday.",
        ]}
      />
      <p>
        If you already have a truck or a friend with a trailer and only need muscle, labor-only help
        can cost less. Compare{" "}
        <Link to={"/moving-labor/" as "/"}>moving labor for loading and unloading</Link> before you
        book a full crew.
      </p>
    </ProseSection>
  );
}

function InHome() {
  return (
    <ProseSection eyebrow="No truck needed" title="Moving Heavy Furniture Inside Your House">
      <p>
        Heavy furniture movers also handle jobs where nothing leaves the property: carrying a
        sleeper sofa upstairs, swapping two bedrooms, clearing rooms for new flooring or paint, or
        staging a house before a sale. These are billed by the hour like any other job. For flooring
        work, one visit to clear the rooms and one to set them back is often cheaper than off-site
        storage.
      </p>
      <CardGrid>
        <SubBlock title="Protecting floors and walls">
          <p>
            Ask the crew to bring floor runners, door-jamb pads and furniture sliders. Tile and wood
            floors scratch easily under heavy pieces, and drywall corners on stair landings take the
            most hits.
          </p>
        </SubBlock>
        <SubBlock title="Stairs and second floors">
          <p>
            Stairs are the single biggest time factor in heavy furniture moves. Tell the mover how
            many steps, whether there is a landing and whether the stairwell turns.
          </p>
        </SubBlock>
      </CardGrid>
    </ProseSection>
  );
}

function SpecialtyItems() {
  return (
    <ProseSection
      eyebrow="Heavy and large items"
      title="Appliances, Safes and Specialty Items"
      bg="bg-surface-alt"
    >
      <p>
        Appliance movers and large item movers handle pieces that are heavy, awkward or connected to
        utilities. Not every crew takes every item, so list them clearly when you request quotes.
      </p>
      <CardGrid>
        <SubBlock title="Refrigerators, washers and dryers">
          <p>
            Crews use an appliance dolly and straps. Empty and defrost the refrigerator, and for
            front-load washers ask whether the drum should be secured for transport. Water lines and
            ice makers should be disconnected before the crew arrives.
          </p>
        </SubBlock>
        <SubBlock title="Gas ranges and dryers">
          <p>
            Gas connections should be disconnected and reconnected by a qualified technician. Most
            movers will not do this part, so schedule it separately.
          </p>
        </SubBlock>
        <SubBlock title="Gun safes">
          <p>
            Safes are quoted on weight, stairs and floor type. Give the mover the model or the
            weight, and say whether the safe is bolted down.
          </p>
        </SubBlock>
        <SubBlock title="Pianos">
          <p>
            Pianos are not general furniture. They need a specialist crew, a piano board and their
            own valuation. Compare{" "}
            <Link to="/piano-movers/">piano movers in Florida for uprights and spinets</Link>, and
            for baby and concert grands see{" "}
            <Link to="/grand-piano-movers/">grand piano movers and disassembly</Link>.
          </p>
        </SubBlock>
      </CardGrid>
    </ProseSection>
  );
}

function StorePickup() {
  return (
    <ProseSection eyebrow="Pickups" title="Furniture Delivery From Stores or Facebook Marketplace">
      <p>
        Many stores charge for delivery or do not deliver at all, and Marketplace and estate-sale
        purchases are pickup-only. Local movers fill that gap: the crew drives to the store or the
        seller, loads the piece and delivers it into the room you choose.
      </p>
      <CheckList
        items={[
          "Pay the seller and confirm the pickup time before you book the crew, so the movers are not waiting on the clock.",
          "Ask the seller about stairs, elevators and parking at the pickup address.",
          "Inspect the item for damage and pests yourself. The mover is responsible for handling, not for the condition of the piece before pickup.",
          "Combine several pickups on one trip when you can, to make the hourly minimum work for you.",
        ]}
      />
      <p>
        If fragile items such as glass tops or mirrors travel with the furniture, add{" "}
        <Link to="/packing-services/">professional packing for fragile pieces</Link> to the same
        quote.
      </p>
    </ProseSection>
  );
}

function ByCity() {
  return (
    <ProseSection eyebrow="Local crews" title="Furniture Movers Near You in Florida">
      <p>
        Furniture moving service works the same way across the state, but access changes by city. In
        Tampa Bay, condo towers and older bungalows mean elevators and tight stairs; compare{" "}
        <Link to="/movers-in-tampa/">Tampa movers for apartment and furniture jobs</Link>. In Marion
        County, single-item and partial-load jobs are a big part of the local market; see{" "}
        <Link to="/movers-in-ocala/">furniture movers in Ocala FL and nearby towns</Link>.
      </p>
      <p>
        Whatever the city, ask any company that transports your furniture inside Florida for its
        FDACS registration number and check it with{" "}
        <a href="https://www.fdacs.gov/Business-Services/Moving-Companies" rel="noopener">
          FDACS moving services
        </a>{" "}
        before you pay a deposit.
      </p>
    </ProseSection>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
          Furniture Movers FAQ
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
      title="More Ways to Move Furniture in Florida"
      bg="bg-background"
      links={[
        {
          to: "/local-movers-in-florida/",
          label: "Local movers in Florida",
          d: "Hourly rates by home size for full household moves.",
        },
        {
          to: "/moving-labor/",
          label: "Moving labor",
          d: "Loading and unloading help when you have your own truck.",
        },
        {
          to: "/packing-services/",
          label: "Packing services",
          d: "Fragile-only or full packing with materials included.",
        },
        {
          to: "/piano-movers/",
          label: "Piano movers",
          d: "Specialist crews for uprights, spinets and grands.",
        },
        {
          to: "/movers-in-ocala/",
          label: "Movers in Ocala",
          d: "Marion County crews for furniture-only and partial loads.",
        },
        {
          to: "/storage-solutions/",
          label: "Storage solutions",
          d: "Hold furniture between homes or during renovations.",
        },
      ]}
    />
  );
}

function BottomCta() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 text-center max-w-2xl">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Sofa className="h-6 w-6" />
        </div>
        <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-ink">
          Compare Furniture Moving Quotes — Free
        </h2>
        <p className="mt-4 text-muted-foreground">
          Tell us what needs to move once. Up to four independent licensed Florida movers reply with
          their rate and minimum, and you choose the one that fits — or no one.
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
