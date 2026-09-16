// Referral disclosure shown directly under the hero on the homepage and on
// every service, city and specialty page (EN + ES). Also explains how a
// visitor can verify a mover's licensing themselves.

import { Info } from "lucide-react";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: {
    main: "Florida Movers Direct is not a moving company. We connect you with independent licensed movers.",
    verify:
      "You can verify any mover yourself: look up the USDOT number in the FMCSA SAFER database for interstate moves, or the FDACS Household Moving Services registry for moves inside Florida.",
  },
  es: {
    main: "Florida Movers Direct no es una empresa de mudanzas. Le conectamos con empresas de mudanzas independientes con licencia.",
    verify:
      "Usted puede verificar cualquier empresa: consulte el número USDOT en la base FMCSA SAFER para mudanzas interestatales, o el registro FDACS de Household Moving Services para mudanzas dentro de Florida.",
  },
} as const;

export function NetworkDisclosure({ className = "" }: { className?: string }) {
  const lang = useLang();
  const copy = COPY[lang];
  return (
    <div className={`border-y border-border bg-surface-alt ${className}`}>
      <div className="container-page flex items-start gap-2.5 py-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
        <p className="text-xs sm:text-sm leading-relaxed text-ink">
          <strong className="font-semibold">{copy.main}</strong>{" "}
          <span className="text-muted-foreground">{copy.verify}</span>
        </p>
      </div>
    </div>
  );
}
