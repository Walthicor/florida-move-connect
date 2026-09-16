import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Shield } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { MultiStepQuoteForm } from "@/components/site/QuoteForm";

const PATH = "/es/contact/";

export const Route = createFileRoute("/es/contact/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Contacto | Cotizaciones Gratis de Mudanzas en Florida",
      description: "Solicite hasta 4 cotizaciones gratis de empresas de mudanzas licenciadas en Florida, con respuesta en una hora hábil y sin costo. Consulte cada licencia en FDACS y FMCSA.",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-alt to-background">
        <div className="container-page py-14 md:py-20 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
              <Shield className="h-3.5 w-3.5" />
              Todas las empresas licenciadas y aseguradas
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-5xl font-bold text-ink leading-[1.05]">
              Reciba sus cotizaciones gratis
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Complete el formulario y hasta 4 empresas licenciadas en Florida le contactarán con cotizaciones por escrito. Sin compromiso, siempre gratis.
            </p>
            <p className="mt-4 text-sm font-semibold text-ink">
              Cubrimos todo Florida — de Miami a Pensacola
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Correo</div>
                  <a href="mailto:mardigitalcali@gmail.com" className="font-semibold text-ink hover:text-brand">
                    mardigitalcali@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Respuesta</div>
                  <div className="font-semibold text-ink">En 1 hora hábil</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Área de servicio</div>
                  <div className="font-semibold text-ink">Todo Florida — Miami, Tampa, Orlando, Jacksonville, Naples, Boca Raton y más</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <MultiStepQuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
