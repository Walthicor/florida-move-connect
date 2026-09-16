import { createFileRoute, Link } from "@tanstack/react-router";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { ArrowRight, ShieldCheck, ChevronDown, DollarSign, Building2, MapPin } from "lucide-react";
import { ProseSection, SubBlock, CardGrid, CheckList, LinkDirectory } from "@/components/site/ContentSections";

export const Route = createFileRoute("/movers-in-ocala/")({
  head: () => pageHead({
    path: "/movers-in-ocala/",
    title: "Ocala Movers | Compare Local Moving Companies",
    description: "Compare licensed Ocala movers for local, senior, downsizing and long-distance moves across Marion County. Request free quotes today.",
    service: { serviceType: 'Moving Services', areaServed: 'Ocala, Florida' },
    faqs: FAQS,
  }),
  component: OcalaPage,
});

const COSTS = [
  { size: "Studio / 1BR", price: "$350-$700" },
  { size: "2-3 Bedroom", price: "$700-$1,200" },
  { size: "4+ Bedroom", price: "$1,100-$2,000" },
  { size: "Ocala to The Villages", price: "$450-$900 (most common route)" },
];

const LOCAL = [
  { t: "Farm and acreage properties", d: "Long gravel drives and gate access mean the truck may stage differently — tell your mover if the home sits on acreage for an accurate quote." },
  { t: "The Villages corridor", d: "Ocala-to-Villages is the busiest short route in the region; crews run it weekly and know every gate and community rule." },
  { t: "Seasonal demand", d: "Winter brings the retiree wave; book 2-3 weeks ahead November-March." },
];

const MARION_COMMUNITIES = [
  "Marion Oaks",
  "Silver Springs",
  "Belleview",
  "Dunnellon",
  "Ocklawaha",
  "On Top of the World",
  "Summerfield",
];

const FAQS = [
  { q: "How much do movers cost in Ocala?", a: "$350-$700 for a 1-bedroom and $700-$1,200 for 2-3 bedrooms — typically below Miami rates for the same crew size. Hourly work across Florida runs $95-$150 per hour for a two-mover crew with a truck." },
  { q: "Which moving companies in Ocala FL serve Marion County?", a: "The licensed Ocala moving companies in our network cover the whole county — Marion Oaks, Silver Springs, Belleview, Dunnellon, Ocklawaha, On Top of the World and Summerfield — at the same rate card as the city itself." },
  { q: "Do Ocala movers handle moves to The Villages?", a: "Weekly — it is the most requested route in Marion County, usually $450-$900 for typical homes with community access rules handled." },
  { q: "Can I get same-week movers in Ocala?", a: "Usually yes outside the winter peak; November-March book 2-3 weeks ahead." },
  { q: "Do you have long distance movers in Ocala FL for out-of-state moves?", a: "Yes. Interstate movers in Ocala must hold active FMCSA operating authority and a USDOT number. Northbound moves — Pennsylvania, New Jersey, New York and the rest of the Northeast — are a regular Marion County route and are priced by inventory weight and distance, not by the hour." },
  { q: "Can I hire furniture movers in Ocala FL for just a few items?", a: "Yes. Furniture-only and single-item jobs are billed hourly with a minimum, which is why they are usually the most affordable moving option in Ocala FL for apartment moves and partial loads." },
  { q: "Is moving and storage in Ocala FL available in one booking?", a: "Yes — many Ocala movers offer storage-in-transit so one company loads, stores and redelivers. That avoids a second handling of your furniture between closing dates." },
];

function OcalaPage() {
  return (
    <>
      <CityHero
        eyebrow="Licensed Marion County Movers"
        h1={<>Movers in <span className="text-brand">Ocala</span>, Florida</>}
        intro="Local moves in Ocala run $350-$700 for a 1-bedroom and $700-$1,200 for a 2-3 bedroom home — among the friendliest moving rates in Florida. Ocala moves have their own character: horse-country properties with long private drives, a fast-growing retiree corridor toward The Villages, and distances that stay easy. Our licensed Marion County movers know all three."
      />
      <NetworkDisclosure />

      <Neighborhoods
        title="Marion County Coverage"
        items={MARION_COMMUNITIES}
        tail="Ocala is the county seat of Marion County, and the professional movers in Ocala we work with quote the surrounding communities on the same rate card as the city itself."
        bg="bg-surface-alt"
      />

      <ProseSection title="Why Marion County Coverage Matters When You Compare Ocala Movers">
        <p>
          A moving company in Marion County FL that only works inside the Ocala city
          limits will add travel time once your address sits in Dunnellon or
          Ocklawaha. Every mover in our network quotes the county as one service
          area, so Marion Oaks movers, Belleview crews and Summerfield jobs are
          priced the same way as a move across town. On Top of the World and other
          gated 55+ communities are routine work here, with vendor registration and
          approved move-in hours handled before the truck arrives.
        </p>
        <p>
          When you request quotes, name the community rather than just the city.
          Silver Springs river-access lots, Dunnellon's tree-lined drives and Marion
          Oaks' newer subdivisions each change how a truck stages, and that detail is
          what turns an estimate into a price you can rely on.
        </p>
      </ProseSection>

      <SimpleCostTable title="Moving Costs in Ocala" rows={COSTS} />

      <ProseSection title="Ocala Long-Distance and Out-of-State Moves" bg="bg-surface-alt">
        <p>
          Ocala has real demand for moves north. Reverse-snowbird households and
          family relocations push a steady volume of moving companies from Ocala to
          Pennsylvania, New Jersey, New York and the wider Northeast every year, and
          those jobs are nothing like a local hourly move. Interstate movers in Ocala
          price by shipment weight, distance and access — not by the clock — and the
          carrier must hold active FMCSA operating authority with a USDOT number on
          file.
        </p>
        <CheckList
          items={[
            "Ask for a binding or binding-not-to-exceed estimate before you sign anything on an interstate move.",
            "Verify the USDOT number is active with insurance on file before the deposit.",
            "Confirm the delivery spread in writing — Northeast routes from Marion County typically run several days, not overnight.",
          ]}
        />
        <p>
          Our{" "}
          <Link to="/long-distance-movers/">
            Florida interstate moving guide
          </Link>{" "}
          breaks down binding estimates, carrier verification and realistic transit
          windows for long distance movers in Ocala FL and the rest of the state.
        </p>
      </ProseSection>

      <ProseSection title="Apartment and Furniture-Only Moves in Ocala">
        <p>
          Not every job is a full household. Ocala apartment moves and furniture-only
          loads make up a large share of what local crews do here, especially around
          the college corridor and the newer rental communities off SR 200. These are
          hourly jobs with a minimum, which usually makes them the most affordable
          moving option in Ocala FL.
        </p>
        <CardGrid>
          <SubBlock title="Apartment and rental moves">
            <p>
              Elevator buildings, third-floor walk-ups and complex-mandated insurance
              paperwork all change crew size. Our{" "}
              <Link to="/apartment-movers/">apartment moving cost breakdown</Link>{" "}
              covers stair pricing and certificate-of-insurance requirements before
              you book.
            </p>
          </SubBlock>
          <SubBlock title="Furniture movers in Ocala FL">
            <p>
              Single-item and room-only jobs — a bedroom set, a sectional, a gun safe —
              are quoted hourly. Add{" "}
              <Link to="/packing-services/">professional packing and materials</Link>{" "}
              if fragile pieces, mirrors or artwork are travelling with the furniture.
            </p>
          </SubBlock>
        </CardGrid>
      </ProseSection>

      <ProseSection title="Moving and Storage in Ocala" bg="bg-surface-alt">
        <p>
          Moving and storage in Ocala FL is one of the most common combined requests
          in Marion County, usually because a closing date slipped or a downsizing
          household needs a holding period. Booking both with one company means your
          furniture is loaded once, stored on the mover's inventory, and redelivered
          without a second handling.
        </p>
        <p>
          Florida humidity is the reason climate control matters here: wood furniture,
          upholstery, instruments and electronics all suffer in an unconditioned unit.
          Compare the two models in our{" "}
          <Link to="/storage-solutions/">
            guide to storage-in-transit and self-storage
          </Link>{" "}
          before you pick one.
        </p>
      </ProseSection>

      <ProseSection title="Horse Farm and Rural Property Moves">
        <p>
          Ocala is a major equestrian region, and farm addresses move differently from
          subdivision addresses. Long private driveways, gravel and sand access, and
          overhanging oaks all affect where a tractor-trailer or 26-foot box truck can
          stage — sometimes the crew shuttles loads to the house with a smaller
          vehicle, which adds time to the job.
        </p>
        <p>
          Outbuilding contents are the other variable. Tack rooms, barns, workshops
          and detached garages hold tools, feed equipment and tack that are rarely
          counted in a walkthrough of the main house, and they change both crew size
          and truck space. Mention acreage, gate codes, driveway surface and
          outbuildings when you request quotes so the estimate reflects the property
          you actually have.
        </p>
      </ProseSection>

      <LinkDirectory
        eyebrow="Nearby markets"
        title="Moving Between Ocala and Neighboring Florida Markets"
        intro="Ocala crews cross into the surrounding markets constantly. If your origin or destination sits outside Marion County, start with the page for that city."
        links={[
          { to: "/movers-in-the-villages/", label: "Movers in The Villages", d: "The busiest short route out of Ocala — villa staging and downsizing loads." },
          { to: "/movers-in-orlando/", label: "Movers in Orlando", d: "Roughly 80 miles southeast; a common job-relocation route." },
          { to: "/movers-in-tampa/", label: "Movers in Tampa", d: "Bay-area corridor moves and Gulf-side relocations." },
          { to: "/movers-in-jacksonville/", label: "Movers in Jacksonville", d: "Northeast Florida route for coastal and military relocations." },
          { to: "/local-movers-in-florida/", label: "Local movers across Florida", d: "Statewide hourly rates and the full city directory." },
          { to: "/long-distance-movers/", label: "Out-of-state moves", d: "Interstate carriers for Northeast and cross-country routes." },
        ]}
      />

      <section className="bg-background">
        <div className="container-page py-14 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Moving between Ocala and The Villages</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The Ocala-to-Villages corridor is the busiest short route in Marion County. If the
            community itself is your destination, our{" "}
            <Link to="/movers-in-the-villages/" className="font-semibold text-brand hover:underline">
              guide to movers in The Villages
            </Link>{" "}
            covers villa truck staging, downsizing partial loads and the storage overlap that
            almost every inbound household needs. For On Top of the World and other 55+ addresses,
            our{" "}
            <Link to="/senior-moving-services/" className="font-semibold text-brand hover:underline">
              senior moving services
            </Link>{" "}
            explain sorting days, gate registration and donation coordination.
          </p>
        </div>
      </section>

      <LocalKnowledge title="Moving in Ocala: What Local Crews Plan For" items={LOCAL} />

      <Faq faqs={FAQS} />
    </>
  );

}


export function CityHero({ eyebrow, h1, intro }: { eyebrow: string; h1: React.ReactNode; intro: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
      <div className="container-page py-14 md:py-20 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          <ShieldCheck className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">{h1}</h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{intro}</p>
        <div className="mt-7">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Free Quotes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SimpleCostTable({ title, rows }: { title: string; rows: { size: string; price: string }[] }) {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Pricing</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">{title}</h2>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Home Size</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Price Range</th>
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
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sm:hidden divide-y divide-border">
            {rows.map((r) => (
              <div key={r.size} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.size}</div>
                <div className="mt-2 text-sm font-semibold text-ink">{r.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LocalKnowledge({ title, items, cols = 3 }: { title: string; items: { t: string; d: string }[]; cols?: 2 | 3 }) {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Local Knowledge</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">{title}</h2>
        </div>
        <div className={"mt-10 grid gap-5 " + (cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3")}>
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

export function Neighborhoods({ title, items, tail, bg = "bg-background" }: { title: string; items: string[]; tail?: string; bg?: string }) {
  return (
    <section className={bg}>
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Coverage</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">{title}</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {items.map((n) => (
            <span key={n} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm text-ink shadow-soft">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              {n}
            </span>
          ))}
        </div>
        {tail && <p className="mt-5 text-sm text-muted-foreground">{tail}</p>}
      </div>
    </section>
  );
}

export function Faq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Frequently Asked Questions</h2>
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
                  <ChevronDown className={"h-5 w-5 text-muted-foreground transition-transform " + (isOpen ? "rotate-180 text-brand" : "")} />
                </button>
                {isOpen && <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
