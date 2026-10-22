import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PianoCityPage, pianoCitySchema, type PianoFaq } from "@/components/site/PianoCityPage";

const PATH = "/piano-movers-miami/";
const CITY = "Miami";

const FAQS: PianoFaq[] = [
  {
    q: "What does my Miami condo building need before move day?",
    a: "Most buildings require a certificate of insurance naming the association, a reserved service-elevator slot and an approved loading-dock window. Management usually wants the paperwork several days ahead, so send the building's rules to the mover when you request quotes.",
  },
  {
    q: "How much do piano movers in Miami charge?",
    a: "Uprights cost $150 - $500 locally, baby grands $300 - $800 and concert grands $500 - $1,500. Interstate transport runs $450 - $2,300. Stairs add $40 - $130 per flight, upper-floor placement about $100, and partial disassembly of a grand roughly $150.",
  },
  {
    q: "What if the grand will not fit in the service elevator?",
    a: "It comes out through a window or balcony by crane, which is planned and quoted separately, never improvised. Before that, taking off the legs, pedal box and music rack often creates the clearance needed, at around $150 for partial disassembly.",
  },
  {
    q: "Does coastal humidity really affect the piano?",
    a: "Yes. Salt air, constant air conditioning and open-balcony living all shift how the soundboard sits, so post-move tuning matters more here than inland. Wait two to four weeks for the instrument to acclimate, then tune, and keep it away from vents and exterior walls.",
  },
  {
    q: "Do the crews speak Spanish?",
    a: "Many of our matched Miami-Dade crews are bilingual, and you can request a Spanish-speaking coordinator when you submit the form. Our Spanish site covers the same rates, licensing checks and insurance terms if you prefer to read them in Spanish.",
  },
];

export const Route = createFileRoute("/piano-movers-miami/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Piano Movers in Miami FL | Grand & Upright Piano Moving",
      description: "Miami piano movers serve condos and houses with uprights at $150-$500 and grands at $300-$800, using COI-ready, insured, CPM-trained crews. Four free quotes.",
      faqs: FAQS,
      noAlternates: true,
    });
    return { ...base, scripts: [...base.scripts, ...pianoCitySchema(CITY, PATH)] };
  },
  component: () => (
    <PianoCityPage
      city={CITY}
      eyebrow="Condo-ready Miami piano crews"
      opening="Miami piano moving costs $150 - $500 for an upright and $300 - $800 for a grand piano locally, with interstate transport at $450 - $2,300. Describe your instrument and your building once, and up to 4 licensed, insured Miami piano movers send free written quotes with no obligation."
      challenges={[
        {
          t: "High-rise buildings set the schedule",
          d: "High-rise condos dominate the Miami market, so most piano moves here run through a service elevator rather than a front door. Management controls when that elevator is yours, and the crew works inside that window.",
        },
        {
          t: "COIs and loading-dock windows",
          d: "HOAs almost always require a certificate of insurance naming the association before a mover is allowed on the property, plus a reserved loading-dock slot booked with building management in advance. Missing paperwork is the single most common reason a Miami piano move gets turned away at the door.",
        },
        {
          t: "Coastal humidity and tuning",
          d: "Salt air and heavy air conditioning make post-move tuning especially important in Miami. Give the instrument two to four weeks in its new room before a technician touches it, and keep it clear of exterior walls, balcony doors and direct vent airflow.",
        },
      ]}
      areasIntro="From Brickell towers to single-family homes in the Gables and the Grove, crews cover Miami-Dade with the building paperwork handled up front rather than on move morning."
      areas={[
        "Brickell",
        "Coral Gables",
        "Coconut Grove",
        "Key Biscayne",
        "Aventura",
        "Miami Beach",
        "Doral",
        "Pinecrest",
      ]}
      extra={
        <section className="bg-background">
          <div className="container-page py-16 md:py-20 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Bilingual service</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
              Can Miami Piano Movers Help You in Spanish?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink">
              A large share of Miami-Dade homeowners prefer to arrange a move in Spanish, and
              many of the crews we match are bilingual. You can ask for a Spanish-speaking
              coordinator on the quote form, and the same rates, licensing checks and insurance
              terms are published on our Spanish site.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink">
              Same prices, same licensed and insured companies. Read the{" "}
              <Link to="/es/movers-in-miami/" className="font-semibold text-brand hover:underline">
                Spanish version of our Miami movers guide
              </Link>{" "}
              or the{" "}
              <Link to="/es/piano-movers/" className="font-semibold text-brand hover:underline">
                Spanish version of our piano movers guide
              </Link>
              .
            </p>
          </div>
        </section>
      }
      faqs={FAQS}
      related={[
        { to: "/movers-in-miami/", label: "Full-service movers in Miami", d: "Whole-home moves with the same COI and elevator handling, piano included for $75 - $150 extra." },
        { to: "/piano-movers-boca-raton/", label: "Piano movers in Boca Raton", d: "Gated-community access and high-value grands an hour up the coast." },
        { to: "/piano-movers-tampa/", label: "Piano movers in Tampa", d: "Bay-area crews for historic bungalows and downtown freight elevators." },
      ]}
    />
  ),
});
