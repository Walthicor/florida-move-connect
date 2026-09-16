import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageNeighborhoods, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/piano-movers-tampa/";
const FAQS = [
  { q: "¿Trabajan en toda el área de Tampa Bay?", a: "Sí — Tampa, St. Petersburg, Clearwater, Brandon, Westchase, Carrollwood, Hyde Park y ciudades cercanas." },
  { q: "¿Los pianos aguantan la humedad de Tampa?", a: "Solo si el traslado se hace con clima controlado y si el destino tiene AC constante. Sin AC, el bastidor de madera se deforma en meses." },
  { q: "¿Cuánto tarda una mudanza local de piano en Tampa?", a: "Piso a piso 1-2 horas incluyendo protección. Con escaleras o edificios de acceso complejo, 2-4 horas." },
];

export const Route = createFileRoute("/es/piano-movers-tampa/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas de Pianos en Tampa FL | Cotizaciones Gratis",
      description: "Especialistas en mudanzas de pianos en Tampa Bay: Hyde Park, Westchase, Brandon y St. Pete. Verticales desde $150. Compare cotizaciones gratis 2026 sin costo.",
      faqs: FAQS,
      service: { serviceType: "Piano Moving Services", areaServed: "Tampa, FL" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Tampa · Pianos"
        h1="Empresas de Mudanzas de Pianos en Tampa, Florida"
        intro="En Tampa, mover un piano vertical cuesta $150-$500 y uno de cola $300-$800; transporte interestatal $450-$2,300. Especialistas certificados para verticales, baby grand y de cola en toda Tampa Bay, con camión climatizado y cobertura full-value."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026 · Tampa"
        title="Costos locales de mudanza de piano"
        col1="Tipo"
        col2="Planta baja"
        col3="Con escaleras"
        rows={[
          { size: "Vertical (upright)", price: "$250-$400", detail: "$400-$650" },
          { size: "Baby grand", price: "$400-$650", detail: "$600-$950" },
          { size: "Grand 6-7 ft", price: "$550-$850", detail: "$800-$1,200" },
          { size: "Concert grand", price: "$800-$1,200", detail: "Cotización especial" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Contexto Tampa"
        title="Particularidades de Tampa Bay"
        items={[
          { t: "Bungalows en Hyde Park", d: "Casas históricas con escalones frontales y ventanas estrechas. Requieren pre-inspección." },
          { t: "Condos en Downtown", d: "Ascensores de carga y COIs — reserve con al menos 3 días de anticipación." },
          { t: "Puentes a St. Pete", d: "Rutas con Howard Frankland/Gandhi Bridge — evaluamos horario para reducir vibración por tráfico pesado." },
        ]}
      />
      <PageNeighborhoods
        eyebrow="Cobertura"
        title="Áreas de servicio en Tampa Bay"
        items={[
          "Hyde Park", "SoHo", "Downtown Tampa", "Westchase", "Carrollwood", "Brandon", "New Tampa", "South Tampa", "Davis Islands", "St. Petersburg", "Clearwater", "Riverview",
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
