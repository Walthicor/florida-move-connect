import { useEffect, useState } from "react";
import { ArrowUp, ClipboardList } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export function FloatingActions() {
  const lang = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isContact = pathname === "/contact/" || pathname === "/es/contact/";
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const href = lang === "es" ? "/es/contact/" : "/contact/";
  const quoteLabel = lang === "es" ? "Cotización gratis" : "Get free quotes";
  const topLabel = lang === "es" ? "Volver arriba" : "Back to top";

  return (
    <>
      {/* Back to top — left, teardrop */}
      <button
        type="button"
        onClick={scrollTop}
        aria-label={topLabel}
        title={topLabel}
        className={`fab fab-teardrop fixed left-4 z-40 bottom-20 md:bottom-6 transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
        }`}
      >
        <span className="fab-ring" aria-hidden="true" />
        <span className="fab-inner fab-inner-navy">
          <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
        </span>
      </button>

      {/* Quote form — right, circle */}
      {!isContact && (
        <Link
          to={href}
          aria-label={quoteLabel}
          title={quoteLabel}
          className="fab fixed right-4 z-40 bottom-20 md:bottom-6"
        >
          <span className="fab-ring fab-ring-cta" aria-hidden="true" />
          <span className="fab-inner fab-inner-cta">
            <ClipboardList className="h-5 w-5" strokeWidth={2.5} />
          </span>
        </Link>
      )}
    </>
  );
}
