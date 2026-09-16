import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

const PATH = "/es/terms/";

export const Route = createFileRoute("/es/terms/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Términos de Servicio | Mudanzas en Florida — FMD",
      description: "Términos y condiciones del servicio gratuito de emparejamiento con empresas de mudanzas licenciadas en Florida, incluido el consentimiento TCPA del usuario.",
    }),
  component: Page,
});

function Page() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-24 max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink">Términos de Servicio</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última actualización: 2026</p>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">1. Naturaleza del servicio</h2>
            <p className="mt-3 text-ink/90 leading-relaxed">
              Florida Movers Direct es una plataforma gratuita que conecta a residentes de Florida con empresas de mudanzas licenciadas. No somos una empresa de mudanzas ni operamos camiones. No transportamos bienes.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">2. Empresas independientes</h2>
            <p className="mt-3 text-ink/90 leading-relaxed">
              Las empresas emparejadas son operadores independientes con licencia FDACS o FMCSA. Cualquier contrato de mudanza se firma directamente entre usted y la empresa que elija. No somos responsables por servicios, daños, retrasos o disputas relacionadas con la mudanza.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">3. Uso del formulario</h2>
            <p className="mt-3 text-ink/90 leading-relaxed">
              Usted acepta enviar información verdadera y usar el servicio únicamente para solicitar cotizaciones legítimas para su propia mudanza. Envíos falsos o abusivos pueden ser bloqueados.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">4. Consentimiento de comunicación</h2>
            <p className="mt-3 text-ink/90 leading-relaxed">
              Al enviar su solicitud, acepta ser contactado por teléfono, SMS y correo por Florida Movers Direct y hasta 4 empresas emparejadas. Ver nuestra <a href="/es/privacy-policy/" className="text-brand underline">Política de Privacidad</a> para más detalles TCPA.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">5. Limitación de responsabilidad</h2>
            <p className="mt-3 text-ink/90 leading-relaxed">
              El servicio se ofrece "tal cual" sin garantías. En la medida permitida por la ley de Florida, no somos responsables por daños indirectos, incidentales o consecuentes derivados del uso del servicio o de las empresas emparejadas.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">6. Ley aplicable</h2>
            <p className="mt-3 text-ink/90 leading-relaxed">
              Estos términos se rigen por las leyes del Estado de Florida, sin considerar sus disposiciones sobre conflicto de leyes.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">7. Contacto</h2>
            <p className="mt-3 text-ink/90 leading-relaxed">
              Preguntas: <a href="mailto:mardigitalcali@gmail.com" className="text-brand underline">mardigitalcali@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
