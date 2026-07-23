import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/packing-services/";
const FAQS = [
  { q: "¿Vale la pena pagar por empaque?", a: "Sí si transporta piezas frágiles, arte, o si tiene poco tiempo. También activa cobertura de 'Full Value Protection' — si usted empaca, la empresa no cubre roturas dentro de cajas cerradas por usted." },
  { q: "¿La empresa trae los materiales?", a: "Sí. Los planes 'Full Pack' incluyen cajas, papel, cinta y film. En 'Fragile-only' cobran los materiales aparte pero traen todo el día del servicio." },
  { q: "¿Puedo empacar parcialmente?", a: "Sí — 'Partial Pack'. Usted empaca ropa y libros, la empresa empaca cocina, arte y frágiles. Baja costo y mantiene la cobertura sobre lo que ellos empacaron." },
];

export const Route = createFileRoute("/es/packing-services/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Servicios Profesionales de Embalaje en Florida | Cotizaciones Gratis",
      description: "Servicios de embalaje profesional: full pack, fragile-only y materiales. Precios 2026 en Florida. Compare hasta 4 cotizaciones gratis.",
      faqs: FAQS,
      service: { serviceType: "Professional Packing Services", areaServed: "Florida" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Embalaje profesional"
        h1="Servicios Profesionales de Embalaje en Florida"
        intro="Empaque completo, solo frágiles y materiales. Ahorra tiempo, protege inversión y activa cobertura full-value de la empresa de mudanzas."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026"
        title="Costos típicos de empaque en Florida"
        col1="Servicio"
        col2="Rango de costo"
        col3="Detalle"
        rows={[
          { size: "Fragile-only", price: "$200-$500", detail: "Solo vajilla, arte, TVs, lámparas" },
          { size: "Full pack (2 hab)", price: "$500-$900", detail: "Toda la casa, incluye materiales" },
          { size: "Full pack (3-4 hab)", price: "$900-$1,800", detail: "Casa completa · 1-2 días" },
          { size: "Solo materiales", price: "$150-$400", detail: "Cajas, papel, cinta, film · entrega previa" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Full pack vs fragile-only"
        title="Qué nivel de empaque conviene"
        items={[
          { t: "Full pack", d: "Empresa empaca todo. Ideal si mueve por trabajo, tiene niños o poco tiempo. Cobertura completa." },
          { t: "Fragile-only", d: "Empresa empaca cristales, arte y electrónica. Usted empaca ropa/libros. Buen balance costo-protección." },
          { t: "Partial pack", d: "Personalizado: usted define qué empacan ellos. Mantiene cobertura en lo empacado por la empresa." },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="El factor Florida"
        title="Por qué el empaque importa más en Florida"
        items={[
          { t: "Humedad", d: "Cartón mal cerrado absorbe humedad y colapsa. El empaque profesional usa cajas grado mudanza que resisten." },
          { t: "Calor en camiones", d: "Cera, velas y vinilo se deforman. Empaque con papel protege del contacto directo con superficies calientes." },
          { t: "Tormentas súbitas", d: "Chubascos en tránsito ocurren todo el año. Film retráctil sobre muebles evita daño por agua." },
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
