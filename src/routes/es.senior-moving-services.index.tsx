import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import {
  PageHero,
  PageCostTable,
  PageLocalKnowledge,
  PageNeighborhoods,
  PageFaq,
} from "@/components/site/PageBlocks";

const PATH = "/es/senior-moving-services/";

const FAQS = [
  {
    q: "¿Cuánto cuesta una mudanza para adultos mayores en Florida?",
    a: "La mayoría cuesta entre $600 y $2,500 según el tamaño de la vivienda y cuánta clasificación se necesite. El servicio completo de downsizing (clasificar, empacar, mudar y coordinar donaciones) cuesta $1,800-$4,500.",
  },
  {
    q: "¿Las empresas ayudan con el downsizing y la clasificación?",
    a: "Sí — los especialistas en mudanzas para adultos mayores ofrecen sesiones de clasificación donde trabajan junto a usted o la familia para decidir qué se muda, qué se dona y qué se vende, y luego se encargan de las tres cosas.",
  },
  {
    q: "¿Las comunidades 55+ tienen reglas especiales de mudanza?",
    a: "Casi siempre: ventanas de horario para la mudanza, registro en la garita y con frecuencia un certificado de seguro (COI) de la empresa. Indique el nombre de la comunidad al pedir cotizaciones y las empresas se encargan de los requisitos.",
  },
  {
    q: "Mi padre o madre vive en Florida y yo vivo en otro estado, ¿pueden ayudarme?",
    a: "Es uno de los escenarios más comunes. Las empresas entregan estimados por escrito, coordinan por teléfono directamente con el familiar que administra la mudanza y envían actualizaciones con fotos durante el proceso.",
  },
];

export const Route = createFileRoute("/es/senior-moving-services/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas para Adultos Mayores en Florida | Gratis",
      description: "Mudanzas para adultos mayores en Florida: ayuda con downsizing, comunidades 55+, clasificación y donaciones, con equipos licenciados. Cotizaciones gratis hoy.",
      service: { serviceType: "Senior Moving Services", areaServed: "Florida" },
      faqs: FAQS,
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Especialistas 55+"
        h1="Mudanzas para Adultos Mayores en Florida"
        intro="Una mudanza para adultos mayores cuesta $600-$2,500 en la mayoría de las reubicaciones en Florida e implica mucho más que cajas: reducir décadas de pertenencias (downsizing), cumplir las reglas de ingreso de las comunidades 55+ y, con frecuencia, trabajar junto a hijos adultos que viven en otro estado. Las empresas de nuestra red especializadas en este tipo de mudanza aportan paciencia, ayuda para clasificar y donar, y experiencia en comunidades como The Villages, Solivita y On Top of the World. Compare cotizaciones gratis en 2 minutos."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026"
        title="Costos de mudanza para adultos mayores en Florida (2026)"
        col1="Tipo de mudanza"
        col2="Costo típico"
        col3="Duración"
        rows={[
          {
            size: "Estudio o 1 hab. a comunidad 55+",
            price: "$600-$1,100",
            detail: "3-5 horas",
          },
          {
            size: "Casa de 2 hab. a apartamento (downsizing)",
            price: "$900-$1,800",
            detail: "5-8 horas",
          },
          {
            size: "Casa completa a assisted living (envío parcial)",
            price: "$700-$1,500",
            detail: "La clasificación suma 1-2 días",
          },
          {
            size: "Downsizing completo (clasificar, empacar, mudar, donar)",
            price: "$1,800-$4,500",
            detail: "2-4 días",
          },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Diferencias"
        title="Qué hace distinta una mudanza para adultos mayores"
        items={[
          {
            t: "Las decisiones de downsizing toman tiempo",
            d: "Pasar de una casa de 3 habitaciones a una villa de 2 significa decidir qué 40% de sus pertenencias no cabrá. Los equipos especializados reservan días de clasificación en lugar de apurarlo la mañana de la mudanza.",
          },
          {
            t: "Reglas de las comunidades 55+",
            d: "The Villages, Solivita, On Top of the World, Kings Point y la mayoría de las comunidades 55+ de Florida exigen horario de ingreso, registro en la garita y a menudo un certificado de seguro. Nuestros equipos manejan este papeleo cada semana.",
          },
          {
            t: "Coordinación con familia en otro estado",
            d: "Muchas mudanzas de adultos mayores en Florida las organiza un hijo adulto en otro estado. Las empresas entregan estimados por escrito, actualizaciones con fotos y coordinación telefónica directa para administrar todo a distancia.",
          },
          {
            t: "Donación y descarte",
            d: "Lo que no viaja necesita un destino. Las empresas especializadas coordinan recolecciones con Habitat ReStore, Goodwill y compradores de bienes, para que nada quede pendiente para la familia.",
          },
        ]}
      />
      <PageNeighborhoods
        eyebrow="Cobertura"
        title="Comunidades y zonas que atendemos"
        items={[
          "The Villages",
          "Solivita",
          "On Top of the World (Ocala)",
          "Kings Point",
          "Century Village",
          "Sun City Center",
          "Comunidades Del Webb",
          "Naples",
          "Sarasota",
          "Boca Raton",
          "Vero Beach",
          "Área de Tampa",
          "Área de Orlando",
        ]}
        tail="Y barrios 55+ en toda Florida."
      />
      <PageLocalKnowledge
        eyebrow="Planeación"
        title="Cómo planear la mudanza (cronograma)"
        items={[
          {
            t: "8 y 6 semanas antes",
            d: "8 semanas: mida la nueva vivienda y defina qué muebles realmente caben. 6 semanas: empiece a clasificar habitación por habitación — conservar, regalar, donar, descartar.",
          },
          {
            t: "4 y 2 semanas antes",
            d: "4 semanas: contrate la empresa y confirme los requisitos de ingreso de la comunidad. 2 semanas: agende las recolecciones de donación y confirme el manejo de medicamentos y documentos.",
          },
          {
            t: "Día de la mudanza",
            d: "El bolso de esenciales (medicamentos, documentos, cargador y una muda de ropa) viaja con la persona, nunca en el camión.",
          },
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
