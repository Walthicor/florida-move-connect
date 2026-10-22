import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import {
  PageHero,
  PageCostTable,
  PageLocalKnowledge,
  PageNeighborhoods,
  PageFaq,
} from "@/components/site/PageBlocks";
import { ProseSection, CheckList } from "@/components/site/ContentSections";

const PATH = "/es/piano-movers-tampa/";

const FAQS = [
  {
    q: "¿Cuánto cuesta mudar un piano en Tampa?",
    a: "Como estimado, una mudanza local de piano en Tampa cuesta $150-$400 para pianos verticales, $250-$550 para pianos de media cola y $350-$800 para pianos de cola, más unos $40-$100 por cada tramo de escaleras. El precio final depende del piano, las escaleras, la distancia y el acceso en ambas direcciones, por eso conviene comparar 2 o 3 cotizaciones.",
  },
  {
    q: "¿Una compañía de mudanzas normal puede llevar mi piano con el resto de la casa?",
    a: "Las buenas compañías de servicio completo subcontratan a un especialista en pianos para esa parte, y eso está bien. Lo que debe evitar es una cuadrilla general improvisando con carretillas para muebles. Pregunte quién mueve el piano y con qué equipo; si la respuesta no incluye tabla de deslizamiento (skid) y correas para piano, siga buscando.",
  },
  {
    q: "¿Mi piano necesitará afinación después de la mudanza?",
    a: "Casi seguro. El traslado cambia la tensión de las cuerdas, y pasar entre casas de Tampa con aire acondicionado distinto lo acelera. Deje que se aclimate de 2 a 4 semanas y luego afínelo.",
  },
  {
    q: "¿Se pueden mover pianos a condos en torres del centro de Tampa?",
    a: "Sí. Los edificios de Downtown y Channelside piden un certificado de seguro (COI) y reservar el ascensor de servicio; los pianos de cola que no caben en el ascensor se suben con grúa y se cotizan caso por caso. Dé el nombre del edificio y las compañías lo coordinan con la administración.",
  },
  {
    q: "¿Una compañía de mudanza de pianos en Tampa puede mover un piano digital?",
    a: "Sí. Los pianos digitales pesan menos, pero se vuelcan con facilidad y sus esquinas se rompen. Se mueven como un mueble con protección de nivel piano, y los digitales con mueble de madera se tratan como un piano vertical pequeño.",
  },
  {
    q: "¿Cómo encuentro compañías de mudanza de pianos cerca de mí en Tampa?",
    a: "Busque una compañía de mudanza de pianos en Tampa que trabaje en su zona y hágale tres preguntas antes de comparar precios: ¿tienen tabla de deslizamiento y correas para piano?, ¿el seguro cubre el valor completo del instrumento?, ¿han trabajado en mi edificio o barrio? Con un solo formulario aquí, su solicitud llega hasta a 4 especialistas en pianos de Tampa Bay.",
  },
  {
    q: "¿Qué pasa si mi piano se daña durante la mudanza?",
    a: "La cobertura básica incluida en muchas cotizaciones paga por peso, una fracción de lo que vale un piano. Pida por escrito cobertura por el valor completo antes de la recogida, fotografíe el piano por todos los lados y anote cualquier marca existente en el documento de carga antes de que se vaya la cuadrilla.",
  },
];

export const Route = createFileRoute("/es/piano-movers-tampa/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas de Pianos en Tampa FL | Cotizaciones Gratis",
      description:
        "Compare compañías de mudanza de pianos en Tampa para pianos verticales, de media cola y de cola. Cotizaciones gratis según su piano, las escaleras y el acceso.",
      faqs: FAQS,
      service: { serviceType: "Mudanza de pianos", areaServed: "Tampa, FL" },
    }),
  component: PianoTampaEsPage,
});

function PianoTampaEsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tampa Bay · Pianos"
        h1="Mudanzas de Pianos en Tampa, FL"
        intro="Mover un piano en Tampa cuesta, como estimado, $150-$400 por un piano vertical y $350-$800 por un piano de cola; las escaleras, la distancia y el acceso cambian el precio final. Con Florida Movers Direct compare cotizaciones gratis de compañías de mudanza de pianos en Tampa que usan tabla de deslizamiento, correas de seguridad y colocación pensada para la humedad."
        ctaLabel="Cotización gratis"
        ctaHref="/es/contact/"
      />
      <PageLocalKnowledge
        eyebrow="Instrumentos"
        title="¿Qué tipos de piano se pueden cotizar?"
        items={[
          {
            t: "Piano vertical",
            d: "El más común en Tampa: 300-500 libras, se mueve de pie sobre carretilla y tabla. Un vertical completo necesita 3 personas en escaleras, y el mueble se envuelve en mantas antes de salir de la habitación.",
          },
          {
            t: "Espineta y consola",
            d: "Los verticales más bajos, comunes en apartamentos de Tampa. Una cuadrilla de 2 puede moverlos, pero en las consolas se retiran patas y pedales antes de envolverlas.",
          },
          {
            t: "Piano de media cola (menos de 6 pies)",
            d: "Se retiran las patas y la lira y el cuerpo viaja de lado sobre la tabla. Cabe por la mayoría de puertas y ascensores de servicio de Tampa: mida el giro de la entrada, no solo el ancho de la puerta.",
          },
          {
            t: "Piano de cola y de concierto",
            d: "De 6 pies en adelante: desmontaje completo, tabla de deslizamiento y con frecuencia una cuadrilla de 4. Algunos ascensores del centro no lo admiten, y entonces la grúa se cotiza caso por caso.",
          },
          {
            t: "Piano digital",
            d: "Más liviano pero pesado arriba, con esquinas frágiles. Se mueve como un mueble con protección de nivel piano; los digitales con mueble de madera se tratan como un vertical pequeño.",
          },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Conocimiento local"
        title="¿Qué retos de acceso hay en Tampa?"
        items={[
          {
            t: "Escaleras y puertas estrechas",
            d: "Cada tramo de escaleras suma tiempo y costo, unos $40-$100 por tramo como estimado. Las puertas de bungalows de menos de 32 pulgadas y los giros estrechos se miden al cotizar, no el día de la mudanza.",
          },
          {
            t: "Condos de Downtown y Channelside",
            d: "Las torres piden un certificado de seguro a nombre de la asociación, además de reservar el ascensor de servicio y el horario del muelle de carga. Envíe las reglas del edificio con su solicitud.",
          },
          {
            t: "Casas históricas de Hyde Park y Seminole Heights",
            d: "Pasillos estrechos, pisos de madera originales y escalones en el porche. Las cuadrillas protegen los marcos de las puertas y el piso; con un piano de cola a veces ensayan el giro antes de mover la tabla.",
          },
          {
            t: "Humedad de Tampa",
            d: "La humedad del Golfo y los cambios del aire acondicionado desafinan rápido los pianos. Los especialistas lo colocan lejos de rejillas y paredes exteriores, y conviene afinarlo de 2 a 4 semanas después.",
          },
        ]}
      />
      <ProseSection
        eyebrow="Proceso"
        title="¿Qué equipo y proceso usan las compañías de mudanza de pianos?"
        bg="bg-background"
      >
        <p>
          Mover un piano es un trabajo de aparejo, no de cargar. Las cuadrillas llegan con tabla de
          deslizamiento (skid), correas de seguridad, mantas gruesas y carretillas para escaleras. En
          los pianos de cola retiran las patas y la lira y transportan el cuerpo de lado sobre la
          tabla. Ese desmontaje es parte normal del trabajo: es lo que permite pasar un piano de cola
          de 6 pies por una puerta con seguridad.
        </p>
        <CheckList
          items={[
            "Evaluación: tipo de piano, peso, escaleras, ancho de puertas y pisos en ambas casas definen la cuadrilla (2-4 personas) y el equipo.",
            "Protección y desmontaje: tapa asegurada, patas y pedales retirados en pianos de cola, y el cuerpo envuelto y sujeto a la tabla.",
            "Traslado: puertas protegidas, rampas o carretillas para escaleras, y el piano viaja asegurado de pie en el camión, nunca acostado de espaldas.",
            "Colocación: se arma en el lugar exacto que usted elija, lejos de rejillas de aire, paredes exteriores y sol directo.",
          ]}
        />
      </ProseSection>
      <PageCostTable
        eyebrow="Precios estimados · Tampa"
        title="¿Qué factores cambian el costo de mudar un piano en Tampa?"
        col1="Tipo de piano"
        col2="Planta baja"
        col3="Con escaleras"
        rows={[
          { size: "Espineta / consola", price: "$150-$300", detail: "$200-$400" },
          { size: "Vertical completo", price: "$200-$400", detail: "$260-$500" },
          { size: "Media cola (menos de 6 pies)", price: "$250-$550", detail: "$350-$700" },
          { size: "Cola / concierto", price: "$350-$800", detail: "$450-$950" },
        ]}
      />
      <ProseSection eyebrow="Precios" title="¿Cómo se calcula la cotización?" bg="bg-surface-alt">
        <p>
          Cuatro cosas definen el precio: el tipo de piano, la cantidad de escaleras, la distancia
          entre direcciones y el acceso en ambos extremos (ascensores, puertas estrechas, recorridos
          largos). Todas las cifras de esta página son estimados. El transporte de larga distancia
          (Tampa a Miami, Orlando o fuera del estado) se cotiza por ruta, así que pregunte a cada
          compañía qué incluye antes de comparar.
        </p>
      </ProseSection>
      <ProseSection
        eyebrow="Protección"
        title="¿Qué preguntar sobre el seguro antes de contratar?"
        bg="bg-background"
      >
        <p>
          La cobertura básica de muchas mudanzas paga por peso, no por el valor del instrumento, así
          que puede quedarse muy corta frente a lo que vale un piano de cola. Antes de contratar,
          pregunte:
        </p>
        <CheckList
          items={[
            "¿El piano queda cubierto por su valor de reposición completo o solo por la cobertura básica por peso? Pida la cobertura completa por escrito.",
            "¿Quién mueve físicamente el piano: su propia cuadrilla o un subcontratista? Cualquiera sirve si está capacitado.",
            "¿Qué equipo traen: tabla de deslizamiento, correas para piano, mantas y carretilla para escaleras?",
            "¿Cómo se presenta un reclamo y en cuántos días? Fotografíe el piano antes de la recogida y anote las marcas existentes en los documentos.",
          ]}
        />
      </ProseSection>
      <PageNeighborhoods
        eyebrow="Cobertura"
        title="¿En qué zonas de Tampa Bay hay compañías de mudanza de pianos?"
        items={[
          "Tampa",
          "St. Petersburg",
          "Clearwater",
          "Brandon",
          "Riverview",
          "Wesley Chapel",
          "Hyde Park",
          "Westchase",
          "Carrollwood",
          "New Tampa",
          "Temple Terrace",
          "Largo",
        ]}
        tail="— en los condados de Hillsborough, Pinellas y Pasco."
      />
      <ProseSection eyebrow="Más ayuda" title="¿Necesita más información?" bg="bg-surface-alt">
        <p>
          Vea la guía de{" "}
          <Link to="/es/piano-movers/">mudanzas de pianos en Florida</Link> para todo el estado. Si
          se muda con toda la casa, revise las{" "}
          <Link to="/es/movers-in-tampa/">mudanzas en Tampa</Link> o las{" "}
          <Link to={"/es/movers-in-riverview/" as "/"}>mudanzas en Riverview</Link>.
        </p>
      </ProseSection>
      <PageFaq title="Preguntas frecuentes sobre mudanzas de pianos en Tampa" faqs={FAQS} />
    </>
  );
}
