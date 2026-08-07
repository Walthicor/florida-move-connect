import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageNeighborhoods, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/movers-in-tampa/";
const FAQS = [
  { q: "¿Cuánto cuesta mudarse en Tampa?", a: "Local: $95-$150/hr. Un 2 hab típico: $700-$1,200. Cruces de puente a St. Pete pueden sumar 30-60 min de tiempo facturado." },
  { q: "¿Cómo afectan las tormentas de verano?", a: "Chubascos vespertinos (mayo-oct) pueden interrumpir cargas. Las empresas serias programan mudanzas grandes por la mañana en temporada de lluvias." },
  { q: "¿Buscan mudarse a St. Petersburg?", a: "Sí — servimos Tampa, St. Pete, Clearwater y Bay Area completa. Consideramos peaje de puentes en la cotización." },
];

export const Route = createFileRoute("/es/movers-in-tampa/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas en Tampa FL | Empresas Licenciadas · Cotizaciones Gratis",
      description: "Empresas de mudanzas en Tampa. Costos 2026, Bay Area, puentes a St. Pete y estrategia de tormentas. Compare 4 cotizaciones gratis.",
      faqs: FAQS,
      service: { serviceType: "Moving Services", areaServed: "Tampa, FL" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Tampa · Licenciadas FDACS"
        h1="Empresas de Mudanzas en Tampa"
        intro="Las mudanzas locales en Tampa cuestan $95-$150 por hora con equipo de 2 personas y camión: $600-$1,100 para 2 habitaciones. De Hyde Park a Westchase, Downtown a Brandon, y todo Tampa Bay incluyendo St. Petersburg y Clearwater. Compare hasta 4 cotizaciones gratis."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026 · Tampa"
        title="Costos típicos de mudanza en Tampa"
        col1="Tamaño"
        col2="Casa"
        col3="Condo / cruce a St. Pete"
        rows={[
          { size: "Studio / 1 hab", price: "$350-$600", detail: "$450-$750" },
          { size: "2 habitaciones", price: "$600-$1,100", detail: "$800-$1,400" },
          { size: "3 habitaciones", price: "$1,000-$1,700", detail: "$1,300-$2,100" },
          { size: "4+ habitaciones", price: "$1,600-$2,600", detail: "$2,000-$3,400" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Conocimiento local"
        title="Particularidades de mudarse en Tampa"
        items={[
          { t: "Cruce de bahía", d: "Howard Frankland, Gandhy y Courtney Campbell — sume 20-40 min ida y vuelta al reloj." },
          { t: "Tormentas de verano", d: "Programe cargas antes de las 2 PM (mayo-oct) para evitar chubascos." },
          { t: "Bungalows históricos", d: "Hyde Park y Seminole Heights — puertas estrechas y escalones frontales. Requieren evaluación previa." },
        ]}
      />
      <PageNeighborhoods
        eyebrow="Cobertura"
        title="Áreas de Tampa Bay que servimos"
        items={[
          "Hyde Park", "SoHo", "Downtown Tampa", "Westchase", "Carrollwood", "Brandon", "New Tampa", "South Tampa", "Davis Islands", "St. Petersburg", "Clearwater", "Riverview", "Wesley Chapel",
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
