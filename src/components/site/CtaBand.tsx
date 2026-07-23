import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLang, t } from "@/lib/i18n";

export function CtaBand() {
  const lang = useLang();
  const dict = t[lang];
  const contactHref = lang === "es" ? "/es/contact/" : "/contact/";
  return (
    <section className="bg-cta text-cta-foreground">
      <div className="container-page py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
            {dict.ctaBandTitle}
          </h2>
          <p className="mt-2 text-white/90 text-sm md:text-base">
            {dict.ctaBandSub}
          </p>
        </div>
        <Link
          to={contactHref as "/contact/"}
          className="pulse-cta inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-cta shadow-card hover:bg-white/95 transition"
        >
          {dict.getFreeQuotes}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
