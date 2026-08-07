import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/piano-movers/";
const FAQS = [
  { q: "¿Cualquier empresa puede mover un piano?", a: "No. Los pianos verticales pesan 300-500 lb y los de cola 500-1,200 lb. Requieren skid boards, correas y personal entrenado. Contrate solo especialistas certificados." },
  { q: "¿Cuánto cuesta mover un piano en Florida?", a: "Local: $250-$600 piso a piso; $400-$900 con escaleras. Larga distancia: $800-$2,500 según ruta y tipo de piano." },
  { q: "¿Necesito afinarlo después?", a: "Sí. El movimiento y los cambios de temperatura desafinan cualquier piano. Espere 2-4 semanas antes de afinar para que se estabilice en el nuevo ambiente." },
];

export const Route = createFileRoute("/es/piano-movers/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Empresas Especializadas en Mudanzas de Pianos en Florida",
      description: "Especialistas certificados para pianos verticales, de cola y de concierto. Costos 2026 y cobertura full-value. Compare cotizaciones gratis.",
      faqs: FAQS,
      service: { serviceType: "Piano Moving Services", areaServed: "Florida" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Especialistas en pianos"
        h1="Empresas Especializadas en Mudanzas de Pianos en Florida"
        intro="Mover un piano vertical en Florida cuesta $150-$500 y uno de cola $300-$800 localmente; interestatal $450-$2,300. Verticales, de cola y de concierto con personal certificado, skid boards, dollies especializados y protección full-value."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026"
        title="Costos típicos de mudanza de pianos"
        col1="Tipo"
        col2="Local (mismo piso)"
        col3="Local (con escaleras / larga distancia)"
        rows={[
          { size: "Vertical (upright)", price: "$250-$450", detail: "$400-$700 · $800-$1,500 LD" },
          { size: "Baby grand", price: "$400-$700", detail: "$600-$1,000 · $1,200-$2,000 LD" },
          { size: "Grand (6-7 ft)", price: "$550-$900", detail: "$800-$1,300 · $1,500-$2,500 LD" },
          { size: "Concert grand (9 ft)", price: "$800-$1,300", detail: "Requiere desmontaje · cotización especial" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Por qué especialistas"
        title="Qué hace un mover de pianos"
        items={[
          { t: "Skid board y correas", d: "Fijan el piano al skid con correas industriales — sin arrastrarlo sobre las ruedas del piano (que no están diseñadas para transportar)." },
          { t: "Control de clima", d: "Camión con clima cuando el piano sale de un ambiente controlado. En Florida evita fracturas por cambios de humedad." },
          { t: "Cobertura full-value", d: "Un piano de $30,000 no cabe en el mínimo federal de 60¢/lb. Firmar full-value protege el instrumento entero." },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Proceso"
        title="4 pasos para mover un piano"
        items={[
          { t: "1 · Evaluación", d: "Fotos y medidas de puertas, escaleras y pasillos previo al día." },
          { t: "2 · Protección", d: "Manta acolchada, film, esquineros y correas al skid board." },
          { t: "3 · Transporte", d: "Camión con climatización — pianos no viajan en trailers abiertos." },
          { t: "4 · Colocación", d: "Ubicación exacta en destino, retiro de embalaje, listo para afinar." },
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
