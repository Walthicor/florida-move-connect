import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageNeighborhoods, PageRoutes, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/movers-in-miami/";
const FAQS = [
  { q: "¿Cuánto cuesta mudarse en Miami?", a: "Local: $110-$180/hr. High-rise/condo sube 15-25% por tiempo extra en ascensores y COIs. Un 2 hab típico: $900-$1,500 total." },
  { q: "¿Necesito COI para mi condo en Brickell?", a: "Sí. Todos los buildings en Brickell, Downtown y Miami Beach lo exigen 48-72 hrs antes. La empresa lo emite gratis." },
  { q: "¿Se puede mudar en fin de semana en Miami Beach?", a: "Depende del building. Muchos edificios de South Beach prohíben mudanzas los domingos y algunos limitan sábado a 9 AM-5 PM." },
];

export const Route = createFileRoute("/es/movers-in-miami/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas en Miami FL | Compare Empresas Licenciadas",
      description: "Empresas de mudanzas licenciadas en Miami-Dade: costos 2026, requisitos de condos, COIs y reserva de ascensores. Compare 4 cotizaciones gratis.",
      faqs: FAQS,
      service: { serviceType: "Moving Services", areaServed: "Miami, FL" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Miami · Licenciadas FDACS"
        h1="Empresas de Mudanzas en Miami"
        intro="Las mudanzas locales en Miami cuestan $95-$150 por hora: $700-$1,300 para 2 habitaciones y $1,100-$1,900 desde un condo en torre. Especialistas en Brickell y Miami Beach, Coral Gables y Coconut Grove. Manejamos COIs, ascensores de carga y reglas del building."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026 · Miami"
        title="Costos típicos de mudanza en Miami"
        col1="Tamaño"
        col2="Casa/Townhouse"
        col3="Condo/High-rise"
        rows={[
          { size: "Studio / 1 hab", price: "$400-$700", detail: "$500-$900" },
          { size: "2 habitaciones", price: "$700-$1,200", detail: "$900-$1,600" },
          { size: "3 habitaciones", price: "$1,100-$1,800", detail: "$1,400-$2,400" },
          { size: "4+ habitaciones", price: "$1,700-$2,800", detail: "$2,200-$3,800" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Conocimiento local"
        title="Lo que hace única a una mudanza en Miami"
        items={[
          { t: "Condos y COIs", d: "Brickell, Downtown y Miami Beach exigen COI y reserva de ascensor. Presupueste 1-2 hrs extra por logística vertical." },
          { t: "Parqueo del camión", d: "Muchas calles requieren permit de la ciudad. En South Beach y Wynwood se coordina con anticipación." },
          { t: "Tráfico", d: "I-95 y Biscayne son pesados 7-10 AM y 4-7 PM. Programe salidas fuera de esas ventanas." },
        ]}
      />
      <PageNeighborhoods
        eyebrow="Cobertura"
        title="Barrios que servimos en Miami"
        items={[
          "Brickell", "Downtown", "Miami Beach", "South Beach", "Coral Gables", "Coconut Grove", "Wynwood", "Design District", "Edgewater", "Kendall", "Doral", "Aventura", "Bal Harbour", "Key Biscayne", "Pinecrest",
        ]}
      />
      <PageRoutes
        eyebrow="Rutas comunes"
        title="Mudanzas desde/hacia Miami"
        items={[
          "Miami ↔ Orlando (~230 mi, cotizada como local extendida)",
          "Miami ↔ Tampa (~280 mi)",
          "Miami → Atlanta, GA (larga distancia, FMCSA)",
          "Miami → Nueva York, NY (larga distancia, FMCSA)",
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
