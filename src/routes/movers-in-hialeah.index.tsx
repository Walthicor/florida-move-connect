import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { MoversCityPage, moversCitySchema } from "@/components/site/MoversCityPage";

const PATH = "/movers-in-hialeah/";

const FAQS = [
  {
    q: "How much do movers cost in Hialeah?",
    a: "A two-mover crew with a truck runs $95-$150 per hour. Most Hialeah apartment moves land at $400-$700, two-bedroom homes at $650-$1,100 and three-bedroom houses at $900-$1,600. Stairs and long carries from the parking area add billable time.",
  },
  {
    q: "¿Hay empresas de mudanzas en Hialeah que hablen español?",
    a: "Sí. La mayoría de las cuadrillas que trabajan en Hialeah atienden en español, y puede recibir su cotización, el estimado escrito y la coordinación del día de la mudanza completamente en español. Indíquelo en el formulario y le conectamos con empresas bilingües.",
  },
  {
    q: "Do Hialeah movers handle cross-town moves within Miami-Dade?",
    a: "Constantly. Hialeah to Miami, Doral, Hialeah Gardens or Miami Lakes is short-radius work billed by the hour, and crews build the drive time into the estimate. Traffic on the Palmetto after 3 PM is the main variable, so morning starts price better.",
  },
  {
    q: "What do multifamily buildings in Hialeah require on move day?",
    a: "Many buildings ask for a certificate of insurance from the mover, a reserved elevator or loading window, and weekday-only moving hours. Request the COI as soon as you pick a company — management offices rarely approve access on the same day you ask.",
  },
  {
    q: "How far ahead should I book a mover in Hialeah?",
    a: "Two to three weeks for a weekday move, longer if you need the last weekend of the month. Month-end demand across Miami-Dade is intense, and the cheapest identical job is almost always a mid-month Tuesday or Wednesday morning.",
  },
];

export const Route = createFileRoute("/movers-in-hialeah/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      title: "Movers in Hialeah FL | Mudanzas en Hialeah | Free Quotes",
      description: "Licensed movers in Hialeah with bilingual crews for apartments and cross-town Miami-Dade moves from $95 an hour. Compare up to four free quotes, no obligation.",
      faqs: FAQS,
    });
    return { ...base, scripts: [...base.scripts, ...moversCitySchema("Hialeah", PATH)] };
  },
  component: () => (
    <MoversCityPage
      city="Hialeah"
      eyebrow="Licensed Miami-Dade Movers"
      opening={
        <>
          Movers in Hialeah charge $95-$150 per hour for a two-mover crew with a truck — about
          $400-$700 for a one-bedroom apartment and $900-$1,600 for a three-bedroom home. Request
          quotes once and up to 4 licensed, insured bilingual moving companies respond, free.
        </>
      }
      challenges={[
        {
          t: "Dense multifamily housing",
          d: "Hialeah is built around apartment blocks and duplexes rather than single-family lots. That means shared stairwells, small lots where a 26-foot truck cannot turn, and buildings that require a certificate of insurance and a booked loading window before a crew can even start unloading.",
        },
        {
          t: "Cross-town Miami-Dade volume",
          d: "A large share of moves here stay inside the county — Hialeah to Doral, Miami Lakes or the city of Miami. Those jobs are billed hourly, so Palmetto and 826 traffic is literally part of your bill. Morning starts finish cheaper than afternoon ones on the identical inventory.",
        },
        {
          t: "Service in Spanish is not optional",
          d: "Most households here are Spanish-speaking, and a written binding estimate you cannot fully read is where disputes begin. We prioritize carriers whose estimators, dispatchers and crew leads all work in Spanish, so the paperwork and the crew match the conversation you had.",
        },
      ]}
      areas={[
        "Hialeah Gardens",
        "Miami Lakes",
        "West Hialeah",
        "Palm Springs North",
        "Opa-locka border",
      ]}
      areasIntro={
        <>
          Our matched crews cover Hialeah and the surrounding northwest Miami-Dade communities daily
          — Hialeah Gardens, Miami Lakes, West Hialeah, Palm Springs North and the neighborhoods
          along the Opa-locka border.
        </>
      }
      extra={
        <section className="bg-surface-alt">
          <div className="container-page py-16 md:py-20 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">En español</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
              Mudanzas en Hialeah, atendidas en español
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink">
              Hialeah es una ciudad mayoritariamente hispanohablante, y su mudanza no debería
              obligarle a negociar en inglés. Las empresas que le conectamos ofrecen cotización,
              estimado escrito y coordinación del día de la mudanza en español, desde $95-$150 por
              hora con dos trabajadores y camión.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Puede revisar toda la información de esta página en nuestra{" "}
              <Link to={"/es/movers-in-hialeah/" as "/"} className="font-semibold text-brand hover:underline">
                versión en español para Hialeah
              </Link>
              , o ver las{" "}
              <Link to={"/es/movers-in-miami/" as "/"} className="font-semibold text-brand hover:underline">
                mudanzas en Miami
              </Link>{" "}
              si se muda dentro del condado.
            </p>
          </div>
        </section>
      }
      related={[
        { to: "/movers-in-miami/", label: "Movers in Miami", d: "COIs, elevator slots and high-rise access across the rest of Miami-Dade." },
        { to: "/apartment-movers/", label: "Apartment moving", d: "Walk-ups, elevators and building rules handled as standard." },
        { to: "/local-movers-in-florida/", label: "Florida hourly moving rates", d: "The statewide rate card behind every Hialeah quote." },
        { to: "/piano-movers-miami/", label: "Piano movers in Miami-Dade", d: "Specialist crews for uprights and grands in condo buildings." },
        { to: "/movers-in-boca-raton/", label: "Movers in Boca Raton", d: "Pricing and gated-community access north of Miami-Dade." },
      ]}
      faqs={FAQS}
      ctaTitle="Compare Hialeah Moving Quotes"
    />
  ),
});
