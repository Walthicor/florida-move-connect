import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/local-movers-in-florida/";
const FAQS = [
  { q: "¿Se necesita depósito?", a: "Las empresas licenciadas de Florida pueden pedir un depósito pequeño (usualmente $50-$100) para reservar la fecha. Desconfíe de empresas que pidan grandes anticipos en efectivo." },
  { q: "¿Cuesta más mudarse en fin de semana?", a: "Sí. Sábados y fines de mes son las fechas más caras. Un martes o miércoles a mitad de mes puede ahorrarle 10-20%." },
  { q: "¿Cuánto propina se acostumbra?", a: "$20-$40 por trabajador para mudanzas locales de medio día, $40-$60 para día completo. No es obligatorio pero es común en Florida." },
  { q: "¿Con cuánta anticipación reservar?", a: "En temporada baja (oct-abr) 2 semanas alcanza. En temporada alta (may-sep) y fines de mes, reserve 4-6 semanas antes." },
];

export const Route = createFileRoute("/es/local-movers-in-florida/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Empresas de Mudanzas Locales en Florida | Cotice Gratis",
      description: "Empresas de mudanzas locales licenciadas en Florida con tarifas 2026 desde $95 a $150 por hora. Compare hasta 4 cotizaciones gratis y consulte cada licencia en FDACS.",
      faqs: FAQS,
      service: { serviceType: "Local Moving Services", areaServed: "Florida" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Mudanzas locales · Licenciadas FDACS"
        h1="Empresas de Mudanzas Locales en Florida"
        intro="Tarifas 2026 de $95-$150/hora dependiendo del tamaño de la vivienda y equipo. Compare hasta 4 cotizaciones por escrito de empresas licenciadas y aseguradas."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026"
        title="Tarifas por hora — mudanzas locales en Florida"
        col1="Tamaño"
        col2="Tarifa/hora"
        col3="Duración típica"
        rows={[
          { size: "Studio", price: "$95-$110/hr", detail: "2 trabajadores · 3-4 hrs" },
          { size: "1 habitación", price: "$95-$120/hr", detail: "2-3 trabajadores · 4-5 hrs" },
          { size: "2 habitaciones", price: "$110-$140/hr", detail: "3 trabajadores · 5-7 hrs" },
          { size: "3 habitaciones", price: "$130-$170/hr", detail: "3-4 trabajadores · 7-9 hrs" },
          { size: "4+ habitaciones", price: "$160-$220/hr", detail: "4+ trabajadores · 9+ hrs" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Qué cuenta como mudanza local"
        title="Mudanza local vs larga distancia en Florida"
        items={[
          { t: "Dentro del mismo condado", d: "Casi siempre es una mudanza local por hora." },
          { t: "Menos de 50 millas", d: "Suele cotizarse por hora aunque cruce condados." },
          { t: "Más de 50 millas o cruzando estados", d: "Se considera larga distancia y regulada por FMCSA, no FDACS." },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Factores que suben o bajan el costo"
        title="Qué mueve su tarifa por hora"
        items={[
          { t: "Piso y ascensores", d: "Escaleras o distancia larga al camión agregan tiempo — y el reloj corre." },
          { t: "Complejidad del inventario", d: "Piano, gimnasio, arte y cajas fuertes requieren equipo y personal extra." },
          { t: "Día y hora", d: "Sábados y fines de mes cuestan más. Mitad de semana ahorra." },
          { t: "Empacado", d: "Empacar usted mismo baja costo; empaque completo lo sube pero protege más." },
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
