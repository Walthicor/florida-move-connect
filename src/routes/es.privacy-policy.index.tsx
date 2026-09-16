import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

const PATH = "/es/privacy-policy/";

export const Route = createFileRoute("/es/privacy-policy/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Política de Privacidad | Florida Movers Direct",
      description: "Cómo Florida Movers Direct recopila, usa y comparte su información al solicitar cotizaciones de mudanza, incluido el consentimiento TCPA y sus derechos CCPA.",
    }),
  component: Page,
});

function Page() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-24 max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink">Política de Privacidad</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última actualización: 2026</p>

        <div className="prose prose-slate mt-10 max-w-none">
          <h2 className="font-display text-2xl font-bold text-ink mt-10">1. Información que recopilamos</h2>
          <p className="text-ink/90 leading-relaxed mt-3">
            Recopilamos la información que usted proporciona voluntariamente al solicitar cotizaciones: nombre, correo electrónico, teléfono, direcciones/ZIPs de origen y destino, fecha de mudanza, tipo de servicio y tamaño de la vivienda.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink mt-10">2. Cómo usamos y compartimos su información</h2>
          <p className="text-ink/90 leading-relaxed mt-3">
            Compartimos la información enviada con hasta 4 empresas de mudanzas licenciadas asociadas con el único propósito de proporcionarle las cotizaciones solicitadas. Estas empresas están verificadas por FDACS (mudanzas locales) o FMCSA (larga distancia).
          </p>

          <h2 className="font-display text-2xl font-bold text-ink mt-10">3. Consentimiento TCPA</h2>
          <p className="text-ink/90 leading-relaxed mt-3">
            Al enviar el formulario, usted acepta expresamente ser contactado por teléfono, mensaje de texto (SMS) y correo electrónico por Florida Movers Direct y por las empresas de mudanzas emparejadas — incluso si su número está en una lista Do-Not-Call — respecto a su solicitud de cotización. Su consentimiento no es condición para ninguna compra. Puede optar por no recibir comunicaciones en cualquier momento respondiendo STOP a los SMS o escribiéndonos.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink mt-10">4. Retención y eliminación de datos</h2>
          <p className="text-ink/90 leading-relaxed mt-3">
            Retenemos los datos de su solicitud mientras sean necesarios para completar el emparejamiento y por hasta 24 meses para efectos legales. Puede solicitar la eliminación de sus datos en cualquier momento escribiendo a{" "}
            <a href="mailto:mardigitalcali@gmail.com" className="text-brand underline">mardigitalcali@gmail.com</a>.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink mt-10">5. Derechos de privacidad en Florida y CCPA</h2>
          <p className="text-ink/90 leading-relaxed mt-3">
            Residentes de California (bajo CCPA) y de Florida tienen derecho a: (a) saber qué información personal recopilamos; (b) solicitar la eliminación de esa información; (c) optar por no recibir la venta o el intercambio comercial de datos personales. Contáctenos al correo indicado para ejercer estos derechos.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink mt-10">6. Seguridad</h2>
          <p className="text-ink/90 leading-relaxed mt-3">
            Empleamos medidas técnicas y organizativas razonables para proteger su información. Ninguna transmisión por internet es 100% segura; no podemos garantizar seguridad absoluta.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink mt-10">7. Contacto</h2>
          <p className="text-ink/90 leading-relaxed mt-3">
            Preguntas sobre esta política: <a href="mailto:mardigitalcali@gmail.com" className="text-brand underline">mardigitalcali@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
