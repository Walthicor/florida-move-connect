import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/commercial-movers/";
const FAQS = [
  { q: "¿Trabajan fines de semana o de noche?", a: "Sí. La mayoría de mudanzas comerciales se hacen viernes noche a domingo para minimizar el tiempo de oficina cerrada. Cotizamos ese horario sin sobrecargo excesivo." },
  { q: "¿Mueven servidores y equipo de IT?", a: "Sí, con crating especializado y protocolos anti-estática. Recomendamos que su equipo de IT desconecte y reconecte; el mover transporta con protección." },
  { q: "¿Necesito COI para el edificio?", a: "Casi siempre sí. El building management pedirá un Certificate of Insurance nombrando al edificio como additional insured. La empresa de mudanzas lo emite gratis 24-72 hrs antes." },
];

export const Route = createFileRoute("/es/commercial-movers/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas Comerciales en Florida | Oficinas y Retail",
      description: "Mudanzas comerciales y de oficinas en Florida sin perder un día de trabajo. Manejamos equipos IT, COIs y horarios de fin de semana. Compare 4 cotizaciones gratis.",
      faqs: FAQS,
      service: { serviceType: "Commercial Moving Services", areaServed: "Florida" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Mudanzas comerciales"
        h1="Empresas de Mudanzas Comerciales en Florida"
        intro="Las mudanzas comerciales en Florida cuestan $1,500-$10,000+ según metros cuadrados y estaciones de trabajo, con equipos desde $130 por hora. Oficinas, retail y clínicas: programamos fines de semana, manejamos servidores, tramitamos COIs y minimizamos días fuera del trabajo."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026"
        title="Costos típicos de mudanzas comerciales"
        col1="Tamaño"
        col2="Rango"
        col3="Duración"
        rows={[
          { size: "Oficina pequeña (5-15 empleados)", price: "$1,500-$3,500", detail: "1 día · fin de semana" },
          { size: "Oficina mediana (15-50)", price: "$3,500-$8,000", detail: "1-2 días" },
          { size: "Oficina grande (50-150)", price: "$8,000-$20,000", detail: "2-4 días · planificación previa" },
          { size: "Retail / clínica", price: "$2,500-$10,000", detail: "Requiere permit y fixtures especializados" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Zero-downtime"
        title="Cómo minimizamos días cerrados"
        items={[
          { t: "Viernes noche a domingo", d: "Su equipo sale el viernes con laptop; el lunes llega a una oficina nueva funcionando." },
          { t: "Etiquetado por escritorio", d: "Cada caja y monitor rotulado con nombre. Los empleados encuentran todo al llegar." },
          { t: "IT coordinado", d: "Coordinamos con su MSP para que servidores y switches se muevan primero y se enciendan el sábado." },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Preparación previa"
        title="Checklist antes del día de mudanza"
        items={[
          { t: "COI emitido", d: "72 hrs antes con building management aprobándolo." },
          { t: "Reservar ascensor de carga", d: "Muchos edificios en Miami/Tampa/Orlando lo exigen." },
          { t: "Inventario etiquetado", d: "Muebles, monitores, cajas por departamento — evita horas de búsqueda." },
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
