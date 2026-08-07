import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/packing-services/";
const FAQS = [
  { q: "¿Vale la pena pagar por empaque?", a: "Sí si transporta piezas frágiles, arte, o si tiene poco tiempo. También activa cobertura de 'Full Value Protection' — si usted empaca, la empresa no cubre roturas dentro de cajas cerradas por usted." },
  { q: "¿La empresa trae los materiales?", a: "Sí. Los planes 'Full Pack' incluyen cajas, papel, cinta y film. En 'Fragile-only' cobran los materiales aparte pero traen todo el día del servicio." },
  { q: "¿Puedo empacar parcialmente?", a: "Sí — 'Partial Pack'. Usted empaca ropa y libros, la empresa empaca cocina, arte y frágiles. Baja costo y mantiene la cobertura sobre lo que ellos empacaron." },
  { q: "¿Qué incluye exactamente el servicio de embalaje?", a: "Materiales grado mudanza, mano de obra del equipo, etiquetado por habitación e inventario básico. El desempaque y el retiro de cajas normalmente se cotizan aparte." },
  { q: "¿Quién empaca un piano o una obra de arte?", a: "Un equipo especializado. El piano requiere crew propio con tabla de deslizamiento y valuación declarada; el arte y los espejos se protegen en cajas a medida (custom crating), no en cajas estándar." },
];

export const Route = createFileRoute("/es/packing-services/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Servicios de Embalaje Profesional en Florida | Cotice",
      description: "Servicios de embalaje profesional en Florida: full pack, solo frágiles y materiales incluidos. Precios 2026. Compare hasta 4 cotizaciones gratis.",
      faqs: FAQS,
      service: { serviceType: "Professional Packing Services", areaServed: "Florida" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Embalaje profesional"
        h1="Servicios Profesionales de Embalaje en Florida"
        intro="El empaque profesional en Florida cuesta $300-$600 solo para frágiles y $800-$2,500 para empaque completo de una casa, más $50-$250 en materiales. Ahorra tiempo, protege su inversión y activa la cobertura full-value de la empresa de mudanzas."
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
      <PageLocalKnowledge
        eyebrow="Qué incluye"
        title="Qué incluye realmente un servicio de embalaje"
        items={[
          { t: "Materiales y mano de obra", d: "Cajas grado mudanza, papel sin tinta, cinta, film retráctil y el equipo que empaca. Todo llega el día del servicio." },
          { t: "Etiquetado e inventario", d: "Cada caja se rotula por habitación y contenido. Eso acelera la descarga y reduce horas facturables el día de la mudanza." },
          { t: "Cobertura sobre lo empacado", d: "Lo que empaca la empresa queda cubierto por su póliza. Lo que empaca usted, no — esa es la diferencia práctica más importante." },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Artículos especiales"
        title="Arte, espejos, TVs, lámparas de araña y pianos"
        items={[
          { t: "Arte y espejos", d: "Cajas a medida con esquineros y doble pared. Nunca en cajas estándar: el vidrio plano se quiebra por presión lateral." },
          { t: "TVs y electrónica", d: "Caja original o caja de TV con espuma. La pantalla viaja de canto, jamás acostada bajo peso." },
          { t: "Pianos", d: "Servicio aparte con equipo especializado. Vea la guía de mudanza de pianos en Florida antes de contratar un equipo general." },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Después de la mudanza"
        title="Desempaque y retiro de cajas"
        items={[
          { t: "Desempaque completo", d: "El equipo abre, coloca y organiza por habitación. Se cotiza por hora y se agenda el mismo día o al día siguiente." },
          { t: "Retiro de escombros", d: "Cajas vacías, papel y film se retiran al final. Sin ese servicio, el reciclaje queda a su cargo." },
          { t: "Agende con anticipación", d: "El desempaque debe pedirse al cotizar, no el día de la entrega: requiere horas de equipo reservadas." },
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
