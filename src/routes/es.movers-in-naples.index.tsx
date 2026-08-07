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
      title: "Mudanzas en Naples FL | Empresas Licenciadas · Cotizaciones Gratis",
      description: "Empresas de mudanzas en Naples. Precios 2026, snowbird season y comunidades exclusivas. Compare hasta 4 cotizaciones gratis.",
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
        col2="Temporada baja (may-sep)"
        col3="Temporada alta (oct-abr)"
        rows={[
          { size: "Studio / 1 hab", price: "$350-$650", detail: "$450-$850" },
          { size: "2 habitaciones", price: "$650-$1,200", detail: "$850-$1,600" },
          { size: "3 habitaciones", price: "$1,000-$1,800", detail: "$1,400-$2,400" },
          { size: "Comunidades exclusivas", price: "Cotización especial", detail: "Alta cobertura y personal extra" },
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
