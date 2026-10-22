import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageNeighborhoods, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/movers-in-naples/";
const FAQS = [
  { q: "¿Cuándo es la temporada alta en Naples?", a: "Octubre-abril. Snowbirds regresan y la demanda sube 40-60%. Reserve con 4-8 semanas de anticipación en esa ventana." },
  { q: "¿Es más barato mudarse en verano?", a: "Sí. Mayo-septiembre las tarifas bajan 15-25%. Si es flexible, es la mejor ventana en Naples." },
  { q: "¿Manejan casas de lujo?", a: "Sí. Empresas con experiencia en Port Royal, Aqualane Shores, Pelican Bay y comunidades exclusivas. Cobertura full-value disponible." },
];

export const Route = createFileRoute("/es/movers-in-naples/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas en Naples FL | Empresas Licenciadas 2026",
      description: "Empresas de mudanzas licenciadas en Naples y Collier County: precios 2026, temporada snowbird y comunidades cerradas. Compare 4 cotizaciones gratis sin costo.",
      faqs: FAQS,
      service: { serviceType: "Moving Services", areaServed: "Naples, FL" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Naples · Costa Suroeste"
        h1="Empresas de Mudanzas en Naples"
        intro="Las mudanzas locales en Naples cuestan $450-$900 para 1 habitación y $850-$1,500 para 2-3 habitaciones. Especialistas en temporada de snowbirds (octubre a abril) y comunidades exclusivas: Port Royal, Pelican Bay, Aqualane Shores y toda Collier County."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026 · Naples"
        title="Costos típicos de mudanza en Naples"
        col1="Tamaño"
        col2="Rango estimado"
        col3="Notas"
        rows={[
          { size: "Estudio / 1 habitación", price: "$450-$900", detail: "Estimado local" },
          { size: "2-3 habitaciones", price: "$850-$1,500", detail: "Estimado local" },
          { size: "4+ habitaciones / casas de lujo", price: "$1,500-$3,000+", detail: "Según inventario y acceso" },
          { size: "Guante blanco / antigüedades", price: "Cotizado por inventario", detail: "Manejo especializado" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Conocimiento local"
        title="Particularidades de Naples"
        items={[
          { t: "Snowbird season", d: "Alta demanda oct-abr. Precios y disponibilidad se ajustan. Reserve con tiempo." },
          { t: "Comunidades cerradas", d: "Port Royal, Pelican Bay, Grey Oaks — guard-house con pases y ventanas de acceso." },
          { t: "Inventario de lujo", d: "Cristalería, arte y mobiliario europeo requieren embalaje especializado y full-value." },
        ]}
      />
      <PageNeighborhoods
        eyebrow="Cobertura"
        title="Áreas que servimos en Naples"
        items={[
          "Old Naples", "Port Royal", "Aqualane Shores", "Pelican Bay", "Grey Oaks", "Vineyards", "North Naples", "East Naples", "Marco Island", "Bonita Springs", "Estero",
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
