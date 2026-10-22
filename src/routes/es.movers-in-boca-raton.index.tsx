import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageNeighborhoods, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/movers-in-boca-raton/";
const FAQS = [
  { q: "¿Requieren COI los condos de Boca?", a: "Sí, casi todos. Boca Raton concentra muchos edificios de lujo y comunidades 55+ que exigen COI, ascensor reservado y ventanas específicas de acceso." },
  { q: "¿Sirven a comunidades 55+?", a: "Sí — Century Village, Kings Point, Del Aire y otras. Manejamos reglas HOA, gate house y horarios permitidos." },
  { q: "¿Manejan mudanzas de vuelta al norte?", a: "Sí. Boca es punto común de mudanzas de larga distancia a NY, NJ, MA. Son mudanzas interestatales reguladas por FMCSA; consulte el número USDOT del transportista antes de reservar." },
];

export const Route = createFileRoute("/es/movers-in-boca-raton/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas en Boca Raton FL | Empresas Licenciadas 2026",
      description: "Empresas de mudanzas licenciadas en Boca Raton: costos 2026, condos de gran altura, country clubs y comunidades 55+. Compare 4 cotizaciones gratis sin costo.",
      faqs: FAQS,
      service: { serviceType: "Moving Services", areaServed: "Boca Raton, FL" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Boca Raton · Palm Beach County"
        h1="Empresas de Mudanzas en Boca Raton"
        intro="Condos de lujo, country clubs y comunidades 55+. Empresas licenciadas con experiencia en COIs, HOAs y ventanas de acceso."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026 · Boca Raton"
        title="Costos típicos de mudanza en Boca"
        col1="Tamaño"
        col2="Rango estimado"
        col3="Notas"
        rows={[
          { size: "Estudio / 1 habitación", price: "$450-$900", detail: "Estimado local" },
          { size: "2-3 habitaciones", price: "$850-$1,500", detail: "Estimado local" },
          { size: "4+ habitaciones", price: "$1,400-$2,600", detail: "Estimado local" },
          { size: "Recargo por condo / torre", price: "+$100-$300", detail: "Ascensor y acarreo largo" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Conocimiento local"
        title="Particularidades de Boca Raton"
        items={[
          { t: "Country clubs", d: "Boca West, Broken Sound y St. Andrews — pases del gate y ventanas específicas. Coordinamos con concierge." },
          { t: "Comunidades 55+", d: "Reglas HOA sobre día y hora de mudanza. Sábados y domingos suelen estar restringidos." },
          { t: "Condos", d: "COI obligatorio, ascensor de carga reservado 3-7 días antes y protección de pisos exigida por building." },
        ]}
      />
      <PageNeighborhoods
        eyebrow="Cobertura"
        title="Áreas que servimos en Boca"
        items={[
          "East Boca", "West Boca", "Boca Del Mar", "Boca Pointe", "Boca West", "Broken Sound", "St. Andrews", "Mizner Park", "Royal Palm Yacht Club", "Highland Beach", "Delray Beach",
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
