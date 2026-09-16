import { ShieldCheck, BadgeCheck, CircleDollarSign, FileCheck2 } from "lucide-react";
import { useLang } from "@/lib/i18n";

const COPY = {
  en: [
    { icon: CircleDollarSign, label: "100% Free" },
    { icon: ShieldCheck, label: "Licensed & Insured Movers" },
    { icon: BadgeCheck, label: "No Obligation" },
    { icon: FileCheck2, label: "Check any license: FMCSA & FDACS" },
  ],
  es: [
    { icon: CircleDollarSign, label: "100% Gratis" },
    { icon: ShieldCheck, label: "Licenciados y Asegurados" },
    { icon: BadgeCheck, label: "Sin Compromiso" },
    { icon: FileCheck2, label: "Consulte licencias: FMCSA y FDACS" },
  ],
} as const;

export function TrustBar() {
  const lang = useLang();
  const items = COPY[lang];
  return (
    <div className="border-b border-border bg-surface-alt">
      <div className="container-page">
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-2.5 text-[11px] sm:text-xs font-semibold text-ink">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <li key={it.label} className="inline-flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 text-brand" aria-hidden />
                <span>{it.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
