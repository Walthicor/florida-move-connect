import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Calendar, ChevronDown, Tag, User } from "lucide-react";
import { getPost, BLOG_POSTS, type BlogPost } from "@/lib/blog-posts";
import { pageHead, SITE_URL, ORG_LOGO } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug/")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found — Florida Movers Direct" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const path = `/blog/${params.slug}/`;
    const faqs = FAQS_BY_SLUG[post.slug] ?? [];
    const base = pageHead({
      path,
      title: post.metaTitle,
      description: post.metaDescription,
      image: post.image,
      faqs,
    });
    const url = `${SITE_URL}${path}`;
    const image = post.image.startsWith("http")
      ? post.image
      : `${SITE_URL}${post.image}`;
    const blogPosting = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      image: [image],
      datePublished: post.date,
      dateModified: post.date,
      articleSection: post.category,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: {
        "@type": "Organization",
        name: "Florida Movers Direct Team",
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "Florida Movers Direct",
        logo: { "@type": "ImageObject", url: ORG_LOGO },
      },
    };
    return {
      ...base,
      scripts: [
        ...(base.scripts ?? []),
        { type: "application/ld+json", children: JSON.stringify(blogPosting) },
      ],
    };
  },
  notFoundComponent: NotFoundView,
  component: ArticlePage,
});

// ---------- FAQs ----------
const COST_FAQS = [
  {
    q: "What do movers charge per hour in Florida?",
    a: "Between $95 and $150 per hour for two movers and a truck; each additional mover adds $40-$60/hour. Miami and Naples sit at the top of that range, Ocala and Gainesville near the bottom.",
  },
  {
    q: "Should I tip my movers?",
    a: "Tipping is customary but optional: $4-$6 per mover per hour, or 10-15% of the bill split among the crew, for good service. Cold water on a Florida summer job is almost as appreciated.",
  },
  {
    q: "Do movers require a deposit in Florida?",
    a: "Reputable movers ask for $0-$200 to reserve a date. Demands for large cash deposits (25%+ upfront) are a red flag under Florida consumer protection guidance.",
  },
];

const CHECKLIST_FAQS = [
  {
    q: "How early should I start planning a Florida move?",
    a: "8 weeks for a smooth move; 6 weeks minimum. Peak season (May-September) and hurricane season (June-November) need the earlier start because movers book out faster and weather adds risk.",
  },
  {
    q: "What is the biggest mistake people make moving to Florida?",
    a: "Underestimating heat and humidity. Wood furniture warps in unairconditioned trucks over long routes; electronics condensate when moved from AC to a hot truck and back. Full-service Florida movers plan for this — DIY movers often learn it the expensive way.",
  },
  {
    q: "Do I need to notify my HOA before moving out in Florida?",
    a: "Most Florida condos and gated communities require 30-day written notice. Some also require the incoming resident's mover to provide a COI. Check your association bylaws in Week 5.",
  },
  {
    q: "What paperwork do I need after moving to Florida?",
    a: "Within 30 days: Florida driver license (FLHSMV) and vehicle registration. If buying a home: file homestead exemption by March 1 for property tax savings. Update USPS, banks, and insurance immediately after moving.",
  },
];

const SNOWBIRD_FAQS = [
  {
    q: "What is the best time of year for a snowbird move to Florida?",
    a: "Mid-October through mid-November. Weather is comfortable, hurricane risk is fading, and you avoid the December price surge. For the return trip: mid-April to early May.",
  },
  {
    q: "Do I need to move my entire household?",
    a: "No — most snowbirds move partial shipments: bedroom set, dining table, seasonal wardrobe, personal items. Movers price by weight/cubic feet, so a partial shipment costs 40-60% less than a full home.",
  },
  {
    q: "Can my Florida moving company store items between seasons?",
    a: "Yes — storage-in-transit is standard for snowbird routes. Your goods stay in the mover climate-controlled warehouse until your next trip, avoiding a year-round self-storage rental.",
  },
  {
    q: "What documents do I need to move to Florida as a snowbird?",
    a: "For domicile: proof of Florida residence (utility bill, lease, deed), Florida driver license, voter registration, and a Declaration of Domicile filed with your county clerk. For gated communities: mover COI, association vendor approval, elevator reservation.",
  },
];

const FAQS_BY_SLUG: Record<string, { q: string; a: string }[]> = {
  "how-much-do-movers-cost-florida": COST_FAQS,
  "florida-moving-checklist-8-weeks": CHECKLIST_FAQS,
  "snowbird-moving-florida-guide": SNOWBIRD_FAQS,
};

function NotFoundView() {
  return (
    <section className="container-page py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-ink">Article not found</h1>
      <p className="mt-2 text-muted-foreground">
        The post you're looking for doesn't exist.
      </p>
      <Link
        to="/blog/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-white"
      >
        Back to the blog <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

function ArticlePage() {
  const { post } = Route.useLoaderData();
  return (
    <article className="bg-white">
      <ArticleHeader post={post} />
      {post.slug === "florida-moving-checklist-8-weeks" ? (
        <ChecklistBody />
      ) : post.slug === "snowbird-moving-florida-guide" ? (
        <SnowbirdBody />
      ) : (
        <CostGuideBody />
      )}
      <AuthorAndEnd faqs={FAQS_BY_SLUG[post.slug] ?? []} />
    </article>
  );
}

function ArticleHeader({ post }: { post: BlogPost }) {
  return (
    <>
      <header className="bg-surface-alt border-b border-border">
        <div className="container-page py-12 md:py-16 max-w-[820px]">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-wider">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-brand">
              <Tag className="h-3 w-3" /> {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <time dateTime={post.date}>{post.dateLabel}</time>
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <User className="h-3 w-3" /> Florida Movers Direct Team
            </span>
          </div>
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
            {post.title}
          </h1>
        </div>
      </header>
      <div className="container-page pt-8 md:pt-10 max-w-[820px]">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full rounded-2xl object-cover aspect-[16/9] shadow-soft"
        />
      </div>
    </>
  );
}

// ---------- Cost guide body (original article) ----------
function CostGuideBody() {
  return (
    <>
      <div className="container-page py-10 md:py-12 max-w-[720px] prose-blog">
        <p className="text-lg text-ink leading-relaxed">
          Movers in Florida cost <strong>$400 to $1,600</strong> for a local
          move and <strong>$2,200 to $6,500+</strong> for a long-distance move,
          as of 2026. A typical 2-3 bedroom local move averages{" "}
          <strong>$850-$1,500</strong>, with hourly rates of{" "}
          <strong>$95-$150</strong> for a two-mover crew and truck. Below is
          the full breakdown by home size, plus the factors that push your
          price up or down — and how to cut 20-30% off legally.
        </p>

        <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
          Florida Moving Costs by Home Size (2026)
        </h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-alt text-ink">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Home Size</th>
                <th className="text-left px-4 py-3 font-semibold">Local (under 50 mi)</th>
                <th className="text-left px-4 py-3 font-semibold">Long Distance (1,000+ mi)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Studio", "$400-$700", "$1,200-$2,500"],
                ["1 Bedroom", "$500-$900", "$1,800-$3,200"],
                ["2-3 Bedroom", "$850-$1,600", "$2,800-$5,000"],
                ["4+ Bedroom", "$1,400-$2,800", "$4,500-$8,000+"],
              ].map((row) => (
                <tr key={row[0]} className="bg-white">
                  <td className="px-4 py-3 font-semibold text-ink">{row[0]}</td>
                  <td className="px-4 py-3 text-ink">{row[1]}</td>
                  <td className="px-4 py-3 text-ink">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 font-display text-2xl md:text-3xl font-bold text-ink">
          The 6 Factors That Set Your Price
        </h2>
        <ul className="mt-5 space-y-4 text-ink">
          <li><strong>Distance and access:</strong> stairs, elevators, long carries — each adds time or flat fees ($40-$100 per flight of stairs).</li>
          <li><strong>Season:</strong> May through September is peak (school calendars + lease turnovers). Expect 20-30% higher rates than winter.</li>
          <li><strong>Date:</strong> the last weekend of any month is the most expensive 72 hours in moving. Mid-month weekdays are cheapest.</li>
          <li><strong>Packing:</strong> full professional packing adds $600-$1,200 for a typical home but saves 3-4 days of your labor.</li>
          <li><strong>Specialty items:</strong> pianos ($150-$800), safes, pool tables and art crating are quoted separately.</li>
          <li><strong>Storage:</strong> if your new home is not ready, storage-in-transit runs $150-$400/month.</li>
        </ul>
      </div>

      <MidCta />

      <div className="container-page py-10 md:py-12 max-w-[720px]">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          How to Pay Less (Without Risking a Scam)
        </h2>
        <p className="mt-4 text-ink">
          Compare 3-4 licensed movers — prices for the identical job routinely
          vary 30-40%. Move mid-month on a weekday. Declutter first: movers
          price by time or weight, and the average family pays to transport
          hundreds of pounds it will never use. Book 4+ weeks ahead in peak
          season. And never choose a mover just because the quote is
          dramatically lowest — quotes 40% under market are the classic setup
          for hostage-load scams.
        </p>
      </div>
    </>
  );
}

// ---------- Checklist article body ----------
const WEEKS: { week: string; focus: string; tasks: string }[] = [
  { week: "Week 8", focus: "Foundation", tasks: "Get 3-4 quotes, choose service level, set budget with 15% Florida buffer, start moving folder." },
  { week: "Week 7", focus: "Declutter", tasks: "Sell/donate/trash unused items. Book free charity pickup (Goodwill, Habitat ReStore, Salvation Army)." },
  { week: "Week 6", focus: "Book + Records", tasks: "Sign mover contract. Request school and dental/medical records. Tour new schools." },
  { week: "Week 5", focus: "Notify Everyone", tasks: "USPS change of address. Bank, cards, insurance, IRS, employer. Notify HOA/condo 30 days ahead." },
  { week: "Week 4", focus: "Utilities + COI", tasks: "Schedule utility transfer (FPL/Duke, water, internet). Submit mover's COI to condo, reserve service elevator." },
  { week: "Week 3", focus: "Pack Non-Essentials", tasks: "Off-season clothes, books, decor. Dish-pack double-wall boxes for glass. Label by room + contents." },
  { week: "Week 2", focus: "Confirm + Prep", tasks: "Reconfirm mover in writing. Build essentials box. Monitor NOAA if in hurricane season, have backup date." },
  { week: "Week 1", focus: "Home Stretch", tasks: "Pack remaining boxes. Defrost freezer 48h out. Cash for tips. Photo high-value items. Charge electronics." },
];

function ChecklistBody() {
  return (
    <>
      <div className="container-page py-10 md:py-12 max-w-[720px] prose-blog">
        <p className="text-lg text-ink leading-relaxed">
          A successful Florida move starts <strong>8 weeks out</strong> — 6
          weeks for peak season (May-September) or hurricane months
          (June-November). This week-by-week checklist covers everything:
          booking licensed movers, gathering records, condo COIs, utilities
          and school transfers, plus Florida-specific tasks nobody warns you
          about like humidity-safe packing and hurricane contingency planning.
          Save it, print it, or share it.
        </p>

        <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
          Week 8 — Foundation (before anything gets urgent)
        </h2>
        <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
          <li>
            Get 3-4 quotes from FDACS-registered{" "}
            <Link to="/local-movers-in-florida/" className="text-brand underline">
              licensed local movers
            </Link>{" "}
            or FMCSA-verified{" "}
            <Link to="/long-distance-movers/" className="text-brand underline">
              long-distance moving companies
            </Link>
            .
          </li>
          <li>Decide: full-service, self-pack, or DIY.</li>
          <li>Create a moving budget with a 15% buffer for Florida-specific costs (COI fees, storage, humidity-safe supplies).</li>
          <li>Start a moving folder (physical + digital): quotes, contracts, receipts.</li>
        </ul>

        <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
          Week 7 — Declutter Aggressively
        </h2>
        <p className="mt-3 text-ink">
          In Florida heat, every extra pound in the truck costs you twice:
          hourly rate + risk of heat damage. Sell, donate, or trash items you
          have not used in a year. Local charities pickup for free: Goodwill,
          Habitat ReStore, Salvation Army.
        </p>

        <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
          Week 6 — Book Movers + School/Medical Records
        </h2>
        <p className="mt-3 text-ink">
          Sign your moving contract. Request school records and
          dental/medical files. If moving with kids, tour new schools if
          possible.
        </p>

        <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
          Week 5 — Notify Everyone
        </h2>
        <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
          <li>USPS change of address online ($1.10).</li>
          <li>Update: bank, credit cards, insurance, IRS, employer, subscriptions.</li>
          <li>Florida-specific: notify HOA/condo association 30 days ahead (many require it in writing).</li>
        </ul>

        <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
          Week 4 — Utilities + Building Paperwork
        </h2>
        <p className="mt-3 text-ink">
          Schedule utility disconnect at old address and connect at new
          (electric FPL/Duke, water, internet). For condo moves: submit the
          mover's COI to your building — Miami and Boca associations often
          need 2-3 weeks to approve. Reserve the service elevator.
        </p>
      </div>

      <MidCta />

      <div className="container-page py-10 md:py-12 max-w-[720px] prose-blog">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          Week 3 — Start Packing Non-Essentials
        </h2>
        <p className="mt-3 text-ink">
          Pack off-season clothes, books and decorations — or hire{" "}
          <Link to="/packing-services/" className="text-brand underline">
            professional packers
          </Link>
          . Use dish-pack double-wall boxes for anything glass — Florida truck
          interiors hit 120°F+ in summer. Label boxes by ROOM + contents (not
          just "Kitchen").
        </p>

        <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
          Week 2 — Confirm + Prep
        </h2>
        <p className="mt-3 text-ink">
          Reconfirm mover date/time in writing. Prepare an essentials box
          (documents, meds, phone chargers, one week of clothes, toiletries,
          snacks). If moving during hurricane season: monitor NOAA — have a
          backup date in mind.
        </p>

        <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
          Week 1 — The Home Stretch
        </h2>
        <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
          <li>Pack remaining boxes.</li>
          <li>Defrost freezer 48 hours before.</li>
          <li>Withdraw cash for tips ($4-$6/mover/hour).</li>
          <li>Take photos of high-value items for insurance.</li>
          <li>Charge all electronics + keep them in AC on moving day (not the hot truck).</li>
        </ul>

        <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
          Moving Day + First Week
        </h2>
        <p className="mt-3 text-ink">
          Do a final walkthrough with movers. Verify the inventory sheet
          before signing. At the new home: unpack essentials box first, then
          kitchen, then bedrooms. Within 30 days: get your Florida driver
          license (state law), register your vehicle, and file the homestead
          exemption if you bought (by March 1 to cut property tax).
        </p>

        <h2 className="mt-12 font-display text-2xl md:text-3xl font-bold text-ink">
          The 8-Week Florida Moving Timeline at a Glance
        </h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-alt text-ink">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Week</th>
                <th className="text-left px-4 py-3 font-semibold">Focus</th>
                <th className="text-left px-4 py-3 font-semibold">Key Tasks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {WEEKS.map((r) => (
                <tr key={r.week} className="bg-white align-top">
                  <td className="px-4 py-3 font-semibold text-brand whitespace-nowrap">{r.week}</td>
                  <td className="px-4 py-3 font-semibold text-ink whitespace-nowrap">{r.focus}</td>
                  <td className="px-4 py-3 text-ink">{r.tasks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-ink">
          Want the numbers behind this timeline? Read our{" "}
          <Link
            to="/blog/$slug/"
            params={{ slug: "how-much-do-movers-cost-florida" }}
            className="text-brand underline"
          >
            full 2026 cost guide
          </Link>{" "}
          before you book.
        </p>
      </div>
    </>
  );
}

// ---------- Snowbird article body ----------
const SNOWBIRD_COSTS: { route: string; cost: string; notes: string }[] = [
  { route: "New York → Naples", cost: "$2,200-$3,800", notes: "Partial shipment" },
  { route: "Chicago → Sarasota", cost: "$2,000-$3,500", notes: "Partial shipment" },
  { route: "Boston → Palm Beach", cost: "$2,400-$4,000", notes: "Partial shipment" },
  { route: "Toronto → Fort Myers", cost: "$2,600-$4,500", notes: "Cross-border adds paperwork" },
  { route: "Full household (if consolidating)", cost: "+40-60%", notes: "Furniture + kitchen" },
];

function SnowbirdBody() {
  return (
    <>
      <div className="container-page py-10 md:py-12 max-w-[720px] prose-blog">
        <p className="text-lg text-ink leading-relaxed">
          Snowbirds — seasonal residents who winter in Florida and summer up
          north — represent one of the largest recurring moving patterns in
          America. If you are heading south for the first time or refining
          your routine, this guide covers everything: the ideal arrival
          window (mid-October to mid-November), typical costs (<strong>$1,800-$4,500</strong>{" "}
          for a partial home shipment from the Northeast), gated community
          access rules, storage between homes, and the tax nuances that make
          snowbird moves different from regular relocations.
        </p>

        <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
          When to Arrive (and When to Head Back)
        </h2>
        <p className="mt-3 text-ink">
          <strong>Arrival:</strong> mid-October through mid-November hits the
          sweet spot: heat has broken, hurricane season is winding down (peak
          ends late October), and you beat the December-January rate spike.{" "}
          <strong>Return:</strong> mid-April to early May before the summer
          heat + humidity peaks. Moving late April instead of June saves
          15-25%.
        </p>

        <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
          Snowbird Moving Costs (2026)
        </h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-alt text-ink">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Route</th>
                <th className="text-left px-4 py-3 font-semibold">Typical Cost</th>
                <th className="text-left px-4 py-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {SNOWBIRD_COSTS.map((r) => (
                <tr key={r.route} className="bg-white align-top">
                  <td className="px-4 py-3 font-semibold text-ink">{r.route}</td>
                  <td className="px-4 py-3 text-ink whitespace-nowrap">{r.cost}</td>
                  <td className="px-4 py-3 text-ink">{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
          The Storage-in-Transit Advantage
        </h2>
        <p className="mt-3 text-ink">
          Most snowbirds do not need to move an entire household — they need
          select furniture, seasonal clothes, and personal items.{" "}
          <Link to="/storage-solutions/" className="text-brand underline">
            Storage-in-transit (SIT)
          </Link>{" "}
          lets your mover hold everything in their climate-controlled
          warehouse between trips, so you avoid renting a Florida storage
          unit year-round. Typical cost: <strong>$150-$350/month</strong>{" "}
          for a partial-household shipment.
        </p>
      </div>

      <MidCta />

      <div className="container-page py-10 md:py-12 max-w-[720px] prose-blog">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          Gated Community + Condo Rules
        </h2>
        <p className="mt-3 text-ink">
          <Link to="/movers-in-naples/" className="text-brand underline">
            Naples movers
          </Link>
          ,{" "}
          <Link to="/movers-in-boca-raton/" className="text-brand underline">
            Boca Raton
          </Link>
          , Palm Beach, Marco Island: nearly every association requires:
        </p>
        <ul className="mt-4 space-y-3 text-ink list-disc pl-5">
          <li>COI from your mover naming the association as additionally insured;</li>
          <li>approved vendor lists (ask 30+ days ahead);</li>
          <li>moving windows (typically weekday 9 AM-4 PM);</li>
          <li>refundable move-in deposit ($250-$500).</li>
        </ul>
        <p className="mt-4 text-ink">
          Florida movers who specialize in{" "}
          <Link to="/long-distance-movers/" className="text-brand underline">
            snowbird routes
          </Link>{" "}
          handle all this — national van lines often do not.
        </p>

        <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
          Tax and Domicile Basics
        </h2>
        <p className="mt-3 text-ink">
          If Florida is your primary residence for tax purposes (no state
          income tax), you must actually live here more than half the year
          (183+ days) and file a Declaration of Domicile at the county
          clerk. If you split time, keep records: EZ-Pass logs, credit card
          statements, medical appointments. This is where many snowbirds
          get caught by their home-state tax authorities.
        </p>
      </div>
    </>
  );
}

// ---------- Shared tail (FAQ + author + end CTA) ----------
function AuthorAndEnd({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <>
      <div className="container-page py-10 md:py-12 max-w-[720px]">
        {faqs.length > 0 && (
          <>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Frequently Asked Questions
            </h2>
            <FaqList faqs={faqs} />
          </>
        )}

        <div className="mt-12 rounded-2xl border border-border bg-surface-alt p-6 flex gap-4 items-start">
          <div className="h-12 w-12 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0">
            <User className="h-6 w-6" />
          </div>
          <div>
            <div className="font-display font-bold text-ink">
              Florida Movers Direct Team
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              We connect Florida residents with FDACS and FMCSA-verified
              licensed movers. Our editorial team publishes practical,
              no-fluff guides based on real 2026 pricing across the state.
            </p>
          </div>
        </div>
      </div>

      <MidCta variant="end" />
    </>
  );
}

function MidCta({ variant = "mid" }: { variant?: "mid" | "end" }) {
  return (
    <section className="bg-cta text-white">
      <div className="container-page py-10 md:py-12 max-w-[820px] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <h3 className="font-display text-xl md:text-2xl font-bold">
            {variant === "end"
              ? "Ready to compare real Florida movers?"
              : "See what your move actually costs"}
          </h3>
          <p className="mt-1 text-white/90 text-sm">
            Get up to 4 free quotes from licensed FDACS-verified movers.
          </p>
        </div>
        <Link
          to="/contact/"
          className="pulse-cta inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-cta shadow-card"
        >
          Get Free Quotes <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-white overflow-hidden">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-display font-semibold text-ink">{f.q}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition ${
                  isOpen ? "rotate-180 text-brand" : "text-muted-foreground"
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm text-muted-foreground">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

void BLOG_POSTS;
