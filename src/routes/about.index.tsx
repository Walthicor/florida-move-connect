import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead, SITE_URL, ORG_LOGO } from "@/lib/seo";
import { PageHero, PageFaq } from "@/components/site/PageBlocks";
import { ProseSection, SubBlock, CheckList, LinkDirectory } from "@/components/site/ContentSections";

const PATH = "/about/";

const FAQS = [
  {
    q: "Is Florida Movers Direct a moving company?",
    a: "No. We are a Florida-only matching service. We collect your move details once and pass them to up to 4 licensed moving companies, who then quote you directly. You never pay us anything.",
  },
  {
    q: "How can I verify the movers you send me to?",
    a: "Ask each company for its licence numbers and check them yourself, free of charge. For moves inside Florida, look the company up in the FDACS Household Moving Services registry (Florida requires state registration for in-state moves). For interstate moves, enter the USDOT or MC number at safer.fmcsa.dot.gov to confirm active operating authority and insurance on file. We only refer companies that state they hold current registration, but the public registries are the authoritative source.",
  },
  {
    q: "Why do you only cover Florida?",
    a: "Because move pricing and licensing rules are local. Florida has its own FDACS registration regime, condo COI culture, hurricane season windows and snowbird seasonality. Covering one state lets us keep the mover list current and the cost ranges realistic instead of publishing national averages.",
  },
  {
    q: "How many quotes will I receive?",
    a: "Up to 4. Most requests are matched within 1 business hour, and quotes arrive by phone or email within 24 hours.",
  },
];

const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Florida Movers Direct",
  alternateName: "FloridaMoversDirect.com",
  url: SITE_URL,
  logo: ORG_LOGO,
  description:
    "Florida-only referral service connecting residents with independent licensed moving companies. Not a moving company. Up to 4 free quotes per request.",
  foundingDate: "2024",
  foundingLocation: { "@type": "Place", name: "Florida, United States" },
  founder: {
    "@type": "Person",
    name: "MarDigital SAS",
    jobTitle: "Founder & Operator",
  },
  knowsAbout: [
    "Local moving in Florida",
    "Long-distance and interstate moving",
    "How to check FDACS mover registration",
    "How to check an FMCSA / USDOT record",
    "Piano and specialty moving",
    "Storage-in-transit",
  ],
  areaServed: { "@type": "State", name: "Florida", containedInPlace: { "@type": "Country", name: "US" } },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: `${SITE_URL}/contact/`,
    availableLanguage: ["English", "Spanish"],
    areaServed: "US-FL",
  },
  sameAs: [SITE_URL],
};

export const Route = createFileRoute("/about/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "About Florida Movers Direct | How We Verify Florida Movers",
      description: "Florida Movers Direct is a Florida-only quote service that checks FDACS and FMCSA licensing before matching your move with up to four vetted moving companies.",
      faqs: FAQS,
      noAlternates: true,
    });
    return { ...base, scripts: [...(base.scripts ?? []), { type: "application/ld+json", children: JSON.stringify(ABOUT_SCHEMA) }] };
  },
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us · A Florida referral service, not a moving company"
        h1="About Florida Movers Direct"
        intro="Florida Movers Direct is a free, Florida-only quote-matching service. One request gets you up to 4 written quotes from independent licensed moving companies, and we show you how to confirm each one yourself in the FDACS Household Moving Services registry or the FMCSA SAFER database — typically matched within 1 business hour, with quotes back inside 24 hours. We are not a moving company, we never charge consumers, and we operate in exactly one state: Florida."
        ctaLabel="Get Free Quotes"
        ctaHref="/contact/"
      />

      <ProseSection eyebrow="Who we are" title="A Florida-only matching service, not a broker network">
        <p>
        We are an independent Florida company operated by MarDigital SAS. Our job is narrow on
          purpose: collect your move details once, hand them to a small set of licensed companies
          that actually serve your ZIP code, and get out of the way. The movers quote you directly
          and you contract with them directly — we do not take a cut of your move, mark up rates, or
          resell your details to national aggregators.
        </p>
        <p>
          Every cost figure published on this site comes from the rate ranges our partner companies
          actually quote in Florida in 2026 — $95–$150 per hour for a two-mover local crew,
          $1,800–$8,000+ for a typical interstate move — not from national averages.
        </p>
      </ProseSection>

      <ProseSection eyebrow="Verification" title="How our verification process works" bg="bg-surface-alt">
        <SubBlock title="Intrastate movers — FDACS registration">
          <p>
            Florida requires every household moving company operating inside the state to register
            with the Florida Department of Agriculture and Consumer Services (FDACS) under Chapter
            507, Florida Statutes. We confirm each partner holds an active FDACS registration number
            and carries the required liability and cargo coverage before they can receive a single
            lead.
          </p>
        </SubBlock>
        <SubBlock title="Interstate carriers — FMCSA / USDOT">
          <p>
            Any company quoting a move across state lines must hold an active USDOT number and MC
            operating authority in the FMCSA SAFER system, with insurance on file and no
            out-of-service order. We check authority status, insurance status and complaint history
            before listing a carrier.
          </p>
        </SubBlock>
        <SubBlock title="Specialty and other verticals — license verification">
          <p>
            For the non-mover verticals we route (storage facilities, packing crews, piano and
            specialty transport, commercial and office relocation vendors), we verify the equivalent
            credential for that trade: active Florida business registration with the Division of
            Corporations, any applicable state or county occupational license, certificate of
            insurance naming general liability and cargo coverage, and — for building work — a
            current certificate of insurance the property manager will accept.
          </p>
        </SubBlock>
        <SubBlock title="Ongoing checks">
          <CheckList
            items={[
              "Registration and authority status re-checked at least quarterly.",
              "Insurance certificates must be current, not expired.",
              "Any partner with an out-of-service order or lapsed registration is removed immediately.",
              "Repeated unresolved consumer complaints remove a company from rotation.",
            ]}
          />
        </SubBlock>
      </ProseSection>

      <ProseSection eyebrow="Service area" title="Where we operate">
        <p>
          We cover the entire state of Florida — Miami to Pensacola, Key Largo to Jacksonville —
          including Miami-Dade, Broward, Palm Beach, Hillsborough, Pinellas, Orange, Duval, Leon,
          Escambia, Marion, Collier, Lee, Sarasota and Alachua counties. Interstate moves are
          supported in both directions when one end of the move is in Florida.
        </p>
      </ProseSection>

      <ProseSection eyebrow="Our focus" title="Why we only cover Florida" bg="bg-surface-alt">
        <p>
          Moving is a local business dressed up as a national one. The rules that decide what your
          move costs are county- and building-level: FDACS registration under Chapter 507, condo
          associations demanding certificates of insurance and reserved service elevators, June-to-
          November hurricane season rescheduling, the October-to-April snowbird surge in Naples and
          Boca Raton, and month-end rental turnover in Orlando and Tampa.
        </p>
        <p>
          A national directory cannot keep that current. By staying inside one state we can verify
          every company against the same two registries, keep the published rate tables tied to real
          Florida quotes, and answer questions like "what does a Brickell high-rise require?" with a
          specific answer instead of a generic one.
        </p>
      </ProseSection>

      <LinkDirectory
        eyebrow="Start here"
        title="Popular pages"
        intro="Pick the move you're planning and see the current Florida cost ranges."
        links={[
          { to: "/local-movers-in-florida/", label: "Local Movers in Florida", d: "$95–$150/hr hourly rate guide and booking timeline." },
          { to: "/long-distance-movers/", label: "Long-Distance Movers", d: "$1,800–$8,000+ interstate ranges and binding estimates." },
          { to: "/piano-movers/", label: "Piano Movers", d: "Uprights from $150, grands from $300, statewide." },
          { to: "/contact/", label: "Get Free Quotes", d: "One form, up to 4 licensed movers, no obligation." },
        ]}
      />

      <PageFaq title="About us — frequently asked questions" faqs={FAQS} />

      <section className="bg-white">
        <div className="container-page py-10 max-w-3xl text-sm text-muted-foreground">
          Questions about how we verify a specific company?{" "}
          <Link to="/contact/" className="font-semibold text-brand hover:underline">
            Ask us on the contact page
          </Link>{" "}
          and we'll send the registration numbers we hold on file.
        </div>
      </section>
    </>
  );
}
