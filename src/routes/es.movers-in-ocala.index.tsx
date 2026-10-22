import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageNeighborhoods, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/movers-in-ocala/";
const FAQS = [
  { q: "¿Sirven a The Villages y Marion County?", a: "Sí, todo Marion County incluyendo The Villages, Belleview y Dunnellon. The Villages tiene reglas específicas de acceso." },
  { q: "¿Manejan mudanzas de fincas de caballos?", a: "Sí. Coordinamos con empresas especializadas en fincas: cercas, arneses, equipo pesado. Requiere planificación adicional." },
  { q: "¿Cuánto cuesta Ocala → The Villages?", a: "Es la ruta más común desde Ocala. Como estimado, $450-$900 para viviendas típicas con reglas de acceso de la comunidad; el precio final depende del tamaño y la fecha." },
];

export const Route = createFileRoute("/es/movers-in-ocala/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas en Ocala FL | Marion County · Cotizaciones Gratis",
      description: "Empresas de mudanzas licenciadas en Ocala y Marion County: precios 2026, rutas hacia The Villages y fincas de horse country. Cotice gratis hoy, sin compromiso.",
      faqs: FAQS,
      service: { serviceType: "Moving Services", areaServed: "Ocala, FL" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Ocala · Marion County"
        h1="Empresas de Mudanzas en Ocala"
        intro="Las mudanzas locales en Ocala cuestan $350-$700 para 1 habitación y $700-$1,200 para 2-3 habitaciones — entre las tarifas más económicas de Florida. Casas suburbanas, fincas ecuestres y The Villages, con empresas licenciadas del norte-centro de Florida."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026 · Ocala"
        title="Costos típicos en Ocala"
        col1="Tamaño"
        col2="Rango"
        col3="Notas"
        rows={[
          { size: "Estudio / 1 habitación", price: "$350-$700", detail: "Estimado local" },
          { size: "2-3 habitaciones", price: "$700-$1,200", detail: "Estimado local" },
          { size: "4+ habitaciones", price: "$1,100-$2,000", detail: "Estimado local" },
          { size: "Ocala → The Villages", price: "$450-$900", detail: "Ruta más común" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Conocimiento local"
        title="Particularidades de Ocala y Marion County"
        items={[
          { t: "Horse country", d: "Fincas con portones largos, cercas de tablas y accesos de grava — camiones grandes requieren evaluación." },
          { t: "The Villages", d: "Comunidad 55+ con reglas de acceso y ventanas horarias — coordinamos con gate y HOA." },
          { t: "Distancias rurales", d: "Muchos destinos rurales suben el tiempo facturable por millaje al camión." },
        ]}
      />
      <PageNeighborhoods
        eyebrow="Cobertura"
        title="Áreas que servimos"
        items={[
          "Downtown Ocala", "SE Ocala", "SW Ocala", "The Villages", "Belleview", "Dunnellon", "Silver Springs", "Marion Oaks", "On Top of the World",
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
