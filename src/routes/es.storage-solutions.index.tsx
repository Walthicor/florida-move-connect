import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/storage-solutions/";
const FAQS = [
  { q: "¿Qué es storage-in-transit (SIT)?", a: "SIT es almacenamiento a corto plazo (usualmente hasta 90 días) ofrecido por la misma empresa de mudanzas que transporta sus cosas. Sus muebles permanecen empacados y regresan al camión cuando su destino esté listo." },
  { q: "¿Qué NO debo guardar en una bodega sin clima?", a: "Cuero, madera fina, arte, electrónica, instrumentos musicales, colchones y libros: el calor y humedad de Florida los dañan en semanas. Estos siempre van en clima controlado." },
  { q: "¿Los contenedores portátiles funcionan en Florida?", a: "Sí para mudanzas planeadas, pero en Florida el sol directo eleva la temperatura interna a 130°F. No los use para almacenamiento prolongado sin sombra." },
];

export const Route = createFileRoute("/es/storage-solutions/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Almacenamiento en Florida | Storage-in-Transit y Clima",
      description: "Almacenamiento con clima controlado y storage-in-transit (SIT) en Florida: costos 2026 y cómo elegir la opción correcta. Cotizaciones gratis hoy.",
      faqs: FAQS,
      service: { serviceType: "Moving and Storage Solutions", areaServed: "Florida" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Storage-in-transit y clima controlado"
        h1="Soluciones de Mudanza y Almacenamiento en Florida"
        intro="Storage-in-transit (SIT) para transición entre casas y bodegas con clima controlado — imprescindibles en Florida por el calor y la humedad."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026"
        title="Costos típicos de almacenamiento en Florida"
        col1="Servicio"
        col2="Costo mensual"
        col3="Notas"
        rows={[
          { size: "SIT (1 habitación)", price: "$150-$250", detail: "Empacado y sellado en la bodega del mover" },
          { size: "SIT (3 habitaciones)", price: "$350-$550", detail: "Hasta 90 días típicamente" },
          { size: "Self-storage 10x10 (sin clima)", price: "$120-$180", detail: "No recomendado en Florida para muebles" },
          { size: "Self-storage 10x10 clima controlado", price: "$180-$280", detail: "Estándar para muebles y electrónica" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Por qué clima controlado no es opcional"
        title="Florida exige clima controlado"
        items={[
          { t: "Humedad 70-90%", d: "Genera moho en madera, cuero y textiles en pocas semanas." },
          { t: "Calor extremo", d: "Bodegas sin AC pasan de 110°F en verano — daña electrónica, velas y ceras." },
          { t: "Plagas", d: "Termitas y cucarachas prosperan en bodegas sin control ambiental." },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="La opción que casi nadie considera"
        title="Storage-in-transit: cuándo tiene sentido"
        items={[
          { t: "Casa nueva no está lista", d: "Cierre demorado o remodelación en curso. SIT le da 30-90 días sin renovar contratos." },
          { t: "Vendió antes de comprar", d: "Puente entre venta y compra sin mover cosas dos veces." },
          { t: "Sale del país temporalmente", d: "Empresa reserva sus cosas hasta que regrese sin usted tener que hacer un contrato aparte." },
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
