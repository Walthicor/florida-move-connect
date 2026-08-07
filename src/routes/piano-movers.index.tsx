import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { HeroQuoteForm } from "@/components/site/QuoteForm";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  DollarSign,
  Music,
  MapPin,
  Ruler,
  BadgeCheck,
} from "lucide-react";

const PATH = "/piano-movers/";

const RATE_ROWS = [
  { type: "Upright / spinet / console", weight: "300-900 lb", crew: "2 movers", price: "$150 - $500" },
  { type: "Baby grand", weight: "500-800 lb", crew: "3-4 movers", price: "$300 - $800" },
  { type: "Concert grand", weight: "up to 1,300 lb", crew: "4-5 movers", price: "$500 - $1,500" },
  { type: "Interstate transport (any)", weight: "—", crew: "varies", price: "$450 - $2,300" },
];

const SURCHARGES = [
  { t: "Each flight of stairs", d: "$40 - $130" },
  { t: "Second or third floor placement", d: "+$100 average" },
  { t: "Partial disassembly (legs, pedal box, music rack)", d: "~$150" },
  { t: "Heat-treated crating for interstate", d: "$1,000 - $1,600" },
  { t: "Adding an upright to a full household move", d: "+$75 - $150" },
];

const VETTING = [
  {
    t: "FDACS registration for intrastate moves",
    d: "Any piano moving company operating inside Florida must be registered with the Florida Department of Agriculture and Consumer Services. Ask for the registration number and check it before you book.",
  },
  {
    t: "FMCSA / USDOT number for interstate",
    d: "Piano movers interstate must carry an active USDOT number. If a piano transport company crosses state lines without one, walk away.",
  },
  {
    t: "Certified Piano Mover (CPM) credential",
    d: "The CPM credential from the Piano Technician Academy is the clearest signal that a crew is trained on piano boards, skid boards and grand disassembly rather than general furniture handling.",
  },
  {
    t: "Proof of full value protection",
    d: "Ask for the coverage option in writing, with the declared value of your instrument on the paperwork — not a verbal promise on move day.",
  },
  {
    t: "A written binding estimate before work starts",
    d: "A professional piano movers quote states crew size, stairs, disassembly and any crating. Verbal ballparks are where surprise charges live.",
  },
  {
    t: "Never pay the full amount up front",
    d: "A deposit is normal. Full prepayment is not. Reputable piano mover service providers collect the balance on delivery.",
  },
];

const CITY_CARDS = [
  { to: "/piano-movers-tampa/", city: "Tampa", d: "Bay-area bungalows, historic stairs and downtown condo freight elevators." },
  { to: "/piano-movers-orlando/", city: "Orlando", d: "Studio and church instruments plus fast-growing suburban two-story homes." },
  { to: "/piano-movers-jacksonville/", city: "Jacksonville", d: "Long cross-town hauls and Riverside homes with narrow front porches." },
  { to: "/piano-movers-miami/", city: "Miami", d: "High-rise buildings that require certificates of insurance and elevator windows." },
  { to: "/piano-movers-boca-raton/", city: "Boca Raton", d: "Gated communities and high-value grands that need declared-value coverage." },
  { to: "/piano-movers-the-villages/", city: "The Villages", d: "Downsizing and second-home moves for retirees relocating within the community." },
] as const;

const FAQS = [
  {
    q: "How much does it cost to move a piano in Florida?",
    a: "A local move runs $150 to $500 for an upright, $300 to $800 for a baby grand and $500 to $1,500 for a concert grand. Interstate piano transport costs $450 to $2,300. Stairs add $40 to $130 per flight and partial disassembly adds about $150.",
  },
  {
    q: "Can two people move an upright piano?",
    a: "Two trained movers with a piano board, straps and a stair dolly can move most uprights safely. Two untrained people cannot. The instrument weighs 300 to 900 pounds, its weight sits high and unevenly, and a tipped upright injures people long before it damages the floor.",
  },
  {
    q: "Do I need a specialist or will general movers do?",
    a: "Specialist piano movers cost roughly $100 to $300 more than general movers, and that difference buys piano boards, skid boards, stair equipment and insurance written for instruments. For anything beyond a flat, single-floor upright move, hire a professional piano moving company.",
  },
  {
    q: "Will my piano need tuning after the move?",
    a: "Almost always. Movement plus a change in room humidity pulls the strings out of pitch. Wait two to four weeks so the soundboard acclimates to its new room, then book a tuning. Tuning the same week usually means paying for a second tuning later.",
  },
  {
    q: "How far ahead should I book piano movers?",
    a: "Two to three weeks is comfortable for a local move, and four or more for interstate piano transport or a crated concert grand. Month-end, snowbird season and hurricane season rescheduling all tighten crew availability across Florida.",
  },
  {
    q: "What happens if the piano does not fit through the door?",
    a: "The crew measures doorways, turns and stairwells before move day. If the instrument will not clear, it is removed through a window by crane, which is quoted separately. On grands, taking off the legs, pedal box and music rack often solves the clearance problem first.",
  },
];

export const Route = createFileRoute("/piano-movers/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Piano Movers in Florida | Licensed Piano Moving Quotes",
      description:
        "Compare licensed Florida piano movers. Upright moves from $150, grand pianos from $300. Insured, CPM-trained crews. Up to 4 free quotes.",
      service: { serviceType: "Piano Moving", areaServed: "Florida" },
      faqs: FAQS,
    });
    return base;
  },
  component: PianoMoversPage,
});

function PianoMoversPage() {
  return (
    <>
      <Hero />
      <Rates />
      <Transport />
      <Insurance />
      <Vetting />
      <Cities />
      <Specialty />
      <FloridaAngle />
      <Faq />
      <QuoteCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
      <div className="container-page py-14 md:py-20 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          <ShieldCheck className="h-3.5 w-3.5" />
          Licensed &amp; insured piano moving companies
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.05]">
          Piano Movers in <span className="text-brand">Florida</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-ink leading-relaxed font-medium">
          Florida piano movers charge $150 - $500 for an upright and $300 - $800 for a grand
          piano locally, while interstate piano transport runs $450 - $2,300. Florida Movers
          Direct matches you with up to 4 licensed, insured Florida piano movers at no cost,
          so you compare real piano movers quotes instead of guessing.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/contact/" className="btn-cta btn-cta-hover text-base">
            Get Piano Moving Quotes <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/piano-moving-cost/"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand hover:text-brand transition"
          >
            See the full piano moving cost breakdown
          </Link>
        </div>
      </div>
    </section>
  );
}

function Rates() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Pricing</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Piano Moving Rates in Florida (2026)
          </h2>
          <p className="mt-3 text-muted-foreground">
            What professional piano movers charge across the state, by instrument type,
            weight and crew size.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Piano type</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Weight</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Crew</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Local price</th>
              </tr>
            </thead>
            <tbody>
              {RATE_ROWS.map((r, i) => (
                <tr key={r.type} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.type}</td>
                  <td className="px-6 py-4 text-ink">{r.weight}</td>
                  <td className="px-6 py-4 text-ink">{r.crew}</td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5 font-semibold">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.price}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sm:hidden divide-y divide-border">
            {RATE_ROWS.map((r) => (
              <div key={r.type} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.type}</div>
                <dl className="mt-3 grid gap-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Weight</dt>
                    <dd className="text-ink">{r.weight}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Crew</dt>
                    <dd className="text-ink">{r.crew}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">Local price</dt>
                    <dd className="font-semibold text-ink">{r.price}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <h3 className="font-display text-xl font-bold text-ink">Common piano moving surcharges</h3>
          <dl className="mt-5 divide-y divide-border rounded-2xl border border-border bg-white shadow-soft">
            {SURCHARGES.map((s) => (
              <div key={s.t} className="flex flex-wrap items-baseline justify-between gap-3 px-5 py-4">
                <dt className="text-sm md:text-base text-ink">{s.t}</dt>
                <dd className="font-display font-bold text-brand">{s.d}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted-foreground">
            Moving the whole house too? Bundling the instrument into a{" "}
            <Link to="/long-distance-movers/" className="font-semibold text-brand hover:underline">
              long-distance move across state lines
            </Link>{" "}
            is usually cheaper than booking piano transport separately.
          </p>
        </div>
      </div>
    </section>
  );
}

function Transport() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Method</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          What "Piano Transport" Actually Involves
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink">
          <p>
            Pianos are rolled, never lifted and carried. The crew tips the instrument onto a
            padded piano board or a four-wheel piano dolly, straps it down, and moves it on
            wheels for the entire trip from room to truck. The small casters underneath a piano
            are decorative furniture hardware — they are not designed to roll a 700-pound body
            across a floor, and using them is how legs snap and floors gouge.
          </p>
          <p>
            A grand piano is disassembled first. The lid is closed and locked, the music rack
            comes off, the pedal box (lyre) is detached, and the legs are removed one at a time
            while the body is supported. The piano is then laid on its straight side onto a skid
            board, wrapped in moving blankets, and strapped to the board so nothing shifts in
            transit. It travels on that edge, never flat on its back.
          </p>
          <p>
            Measurements come before muscle. The crew checks door widths, hallway turns, stair
            runs and elevator openings at both ends. If the instrument will not clear the doors
            or the stairs, it is removed through a window by crane — a planned, quoted operation,
            not an improvised one. That single check is why a piano mover service walks the route
            before touching the piano.
          </p>
        </div>
      </div>
    </section>
  );
}

function Insurance() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Coverage</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          The Insurance Detail Most Piano Owners Miss
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink">
          <p>
            Released value protection is the free minimum coverage interstate movers are required
            to provide. It pays $0.60 per pound. That is per pound of the object, not per dollar
            of its value.
          </p>
          <p>
            Run the math on a 500-pound baby grand: 500 × $0.60 = <strong>$300 total</strong>.
            That is the payout whether the instrument is worth $5,000 or $50,000. The included
            coverage on a piano is effectively symbolic.
          </p>
          <p>
            Full value protection is the alternative. It is paid coverage, and it obligates the
            piano moving company to repair, replace or settle at the declared value of the
            instrument. Confirm it in writing, with the declared value written on the estimate,
            before the crew arrives — not on move day, and not verbally. If a mover will not put
            the coverage option on paper, that answer is the answer.
          </p>
        </div>
      </div>
    </section>
  );
}

function Vetting() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Checklist</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            How to Vet a Florida Piano Mover
          </h2>
          <p className="mt-3 text-muted-foreground">
            Six checks, in order. Every mover in our network is screened against them before a
            piano movers quote reaches you.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {VETTING.map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm md:text-base text-muted-foreground">
          Specialist piano movers cost $100 - $300 more than general movers. That premium buys
          piano boards, skid boards, stair-climbing equipment, trained crews and insurance
          written for instruments — the things piano work actually requires.
        </p>
      </div>
    </section>
  );
}

function Cities() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Coverage</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Piano Movers by Florida City
          </h2>
          <p className="mt-3 text-muted-foreground">
            Searching for piano movers near me or piano movers in my area? Start with your metro —
            local crews, local building rules, local pricing.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CITY_CARDS.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:border-brand hover:shadow-card"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-brand">
                Piano moving in {c.city}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                View {c.city} crews <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Specialty() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Go deeper</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Specialty Piano Services
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Link
            to="/grand-piano-movers/"
            className="group rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:border-brand hover:shadow-card"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <Music className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-brand">
              Grand piano movers and disassembly
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Skid boards, leg and lyre removal, crane exits and crating for baby grands through
              concert grands.
            </p>
          </Link>
          <Link
            to="/piano-moving-cost/"
            className="group rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:border-brand hover:shadow-card"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <Ruler className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-brand">
              What piano moving costs, line by line
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Every surcharge explained — stairs, floors, disassembly, crating and interstate
              mileage.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FloridaAngle() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Local context</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
          Florida-Specific Piano Considerations
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink">
          <p>
            <strong>Humidity moves the wood.</strong> Florida air affects tuning stability and the
            soundboard itself, and a new room rarely holds the same humidity as the old one. Plan
            to re-tune two to four weeks after the move, once the instrument has acclimated. Keep
            it off exterior walls and out of direct AC airflow while it settles.
          </p>
          <p>
            <strong>Hurricane season shapes the calendar.</strong> From June through November,
            storm systems reroute and delay interstate piano transport. If your move date is
            flexible in those months, book early and keep a backup window.
          </p>
          <p>
            <strong>Snowbird traffic is real.</strong> A large share of Florida piano moves are
            seasonal second-home relocations — instruments going north in spring and south in
            fall. Those same weeks are the tightest for specialist crews statewide.
          </p>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Piano Moving FAQ</h2>
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
                <div className={isOpen ? "px-5 pb-5 text-sm leading-relaxed text-muted-foreground" : "sr-only"}>
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

function QuoteCta() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20 grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
            Compare Piano Moving Quotes in Florida
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            One short form. Up to 4 licensed, insured Florida piano movers respond with real
            pricing for your instrument, your stairs and your dates. Free, no obligation.
          </p>
        </div>
        <HeroQuoteForm />
      </div>
    </section>
  );
}
