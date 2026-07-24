import { ArrowRight } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export function StickyMobileCta() {
  const lang = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isContact = pathname === "/contact/" || pathname === "/es/contact/";
  if (isContact) return null;

  const href = lang === "es" ? "/es/contact/" : "/contact/";
  const label = lang === "es" ? "Cotización Gratis" : "Get Free Quotes";

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 backdrop-blur px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <Link
        to={href}
        className="btn-cta btn-cta-hover w-full min-h-11 text-sm"
        aria-label={label}
      >
        {label} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
