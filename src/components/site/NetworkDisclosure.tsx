// Referral disclosure shown directly under the hero on the homepage and on
// every service, city and specialty page (EN + ES). Also explains how a
// visitor can verify a mover's licensing themselves, linking to the official
// public registries (FMCSA SAFER and the FDACS business search).

import { Info } from "lucide-react";
import { useLang } from "@/lib/i18n";

const FMCSA_SAFER_URL = "https://safer.fmcsa.dot.gov/";
const FDACS_SEARCH_URL = "https://www.fdacs.gov/Consumer-Resources/Business-Search";

const COPY = {
  en: {
    main: "Florida Movers Direct is not a moving company. We connect you with independent licensed movers.",
    verifyA: "You can verify any mover yourself: look up the USDOT number in the ",
    safer: "FMCSA SAFER database",
    verifyB: " for interstate moves, or search the ",
    fdacs: "FDACS business registry",
    verifyC: " for household moving services inside Florida.",
  },
  es: {
    main: "Florida Movers Direct no es una empresa de mudanzas. Le conectamos con empresas de mudanzas independientes con licencia.",
    verifyA: "Usted puede verificar cualquier empresa: consulte el número USDOT en la ",
    safer: "base de datos FMCSA SAFER",
    verifyB: " para mudanzas interestatales, o busque en el ",
    fdacs: "registro de empresas de FDACS",
    verifyC: " para servicios de mudanza dentro de Florida.",
  },
} as const;

const linkClass = "font-semibold text-brand underline underline-offset-2 hover:no-underline";

export function NetworkDisclosure({ className = "" }: { className?: string }) {
  const lang = useLang();
  const copy = COPY[lang];
  return (
    <div className={`border-y border-border bg-surface-alt ${className}`}>
      <div className="container-page flex items-start gap-2.5 py-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
        <p className="text-xs sm:text-sm leading-relaxed text-ink">
          <strong className="font-semibold">{copy.main}</strong>{" "}
          <span className="text-muted-foreground">
            {copy.verifyA}
            <a href={FMCSA_SAFER_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {copy.safer}
            </a>
            {copy.verifyB}
            <a href={FDACS_SEARCH_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {copy.fdacs}
            </a>
            {copy.verifyC}
          </span>
        </p>
      </div>
    </div>
  );
}
