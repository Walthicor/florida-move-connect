import { HeroQuoteForm } from "./QuoteForm";
import { useLang } from "@/lib/i18n";
import { ShieldCheck } from "lucide-react";

/**
 * Compact quote-form band displayed near the top of every internal page.
 * Uses the same HeroQuoteForm (ZIP -> ZIP -> CTA) that saves to Supabase.
 */
export function QuoteBand() {
  const lang = useLang();
  return (
    <section className="bg-gradient-to-b from-surface-alt to-background border-b border-border">
      <div className="container-page py-8 md:py-10 grid gap-6 lg:grid-cols-[1.15fr_1fr] items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
            <ShieldCheck className="h-3.5 w-3.5" />
            {lang === "es"
              ? "Empresas verificadas FDACS y FMCSA"
              : "FDACS & FMCSA Verified Movers"}
          </span>
          <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-ink leading-tight">
            {lang === "es"
              ? "Compare hasta 4 cotizaciones gratis"
              : "Compare up to 4 free quotes"}
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-lg">
            {lang === "es"
              ? "Un formulario. Empresas licenciadas de Florida compitiendo por su mudanza. Sin compromiso."
              : "One quick form. Licensed Florida movers compete for your move. No obligation, no spam."}
          </p>
        </div>
        <HeroQuoteForm />
      </div>
    </section>
  );
}
