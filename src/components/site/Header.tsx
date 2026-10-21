import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import {
  SERVICES_BY_LANG,
  CITIES_BY_LANG,
  useLang,
  useTwinPath,
  t,
} from "@/lib/i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "services" | "cities">(null);
  const lang = useLang();
  const twin = useTwinPath();
  const navigate = useNavigate();
  const dict = t[lang];

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Persist language choice on toggle so subsequent visits know the user's preference.
  useEffect(() => {
    try {
      localStorage.setItem("fmd_lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const toggleLang = () => {
    try {
      localStorage.setItem("fmd_lang", lang === "en" ? "es" : "en");
    } catch {
      /* ignore */
    }
    // Navigate directly to the twin path; typed routes bypassed intentionally.
    navigate({ to: twin as unknown as "/" });
  };

  const services = SERVICES_BY_LANG[lang];
  const cities = CITIES_BY_LANG[lang];
  const homeHref = lang === "es" ? "/es/" : "/";
  const blogHref = lang === "es" ? "/es/blog/" : "/blog/";
  const contactHref = lang === "es" ? "/es/contact/" : "/contact/";
  const otherLang = lang === "en" ? "ES" : "EN";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Logo */}
        <Link to={homeHref as "/"} className="flex items-center gap-2 shrink-0">
          <img
            src="/images/logo.webp"
            width={1130}
            height={520}
            alt="Florida Movers Direct"
            className="h-9 w-auto md:h-11"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <DropdownNav
            label={dict.services}
            items={services}
            isOpen={openMenu === "services"}
            onOpen={() => setOpenMenu("services")}
            onClose={() => setOpenMenu(null)}
          />
          <DropdownNav
            label={dict.locations}
            items={cities}
            isOpen={openMenu === "cities"}
            onOpen={() => setOpenMenu("cities")}
            onClose={() => setOpenMenu(null)}
          />
          <Link
            to={blogHref as "/blog/"}
            className="rounded-md px-3 py-2 text-sm font-medium text-ink hover:text-brand transition"
          >
            {dict.blog}
          </Link>
          <Link
            to={contactHref as "/contact/"}
            className="rounded-md px-3 py-2 text-sm font-medium text-ink hover:text-brand transition"
          >
            {dict.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={toggleLang}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-ink hover:border-brand hover:text-brand transition"
            aria-label={dict.languageToggleAria}
            title={dict.languageToggleAria}
          >
            <Globe className="h-3.5 w-3.5" />
            {lang.toUpperCase()} / {otherLang}
          </button>
          <Link
            to={contactHref as "/contact/"}
            className="btn-cta btn-cta-hover hidden md:inline-flex text-sm"
          >
            {dict.getFreeQuotes}
          </Link>
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-ink hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileGroup label={dict.services} items={services} onNavigate={() => setOpen(false)} />
            <MobileGroup label={dict.locations} items={cities} onNavigate={() => setOpen(false)} />
            <Link
              to={blogHref as "/blog/"}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2 text-base font-semibold text-ink"
            >
              {dict.blog}
            </Link>
            <Link
              to={contactHref as "/contact/"}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2 text-base font-semibold text-ink"
            >
              {dict.contact}
            </Link>
            <Link
              to={contactHref as "/contact/"}
              onClick={() => setOpen(false)}
              className="btn-cta btn-cta-hover w-full"
            >
              {dict.getFreeQuotes}
            </Link>
            <button
              onClick={() => {
                setOpen(false);
                toggleLang();
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-semibold text-ink"
            >
              <Globe className="h-4 w-4" />
              {dict.languageLabel}: {lang.toUpperCase()} → {otherLang}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function DropdownNav({
  label,
  items,
  isOpen,
  onOpen,
  onClose,
}: {
  label: string;
  items: ReadonlyArray<{ label: string; to: string }>;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink hover:text-brand transition"
        onClick={() => (isOpen ? onClose() : onOpen())}
      >
        {label}
        <ChevronDown className="h-4 w-4" />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full pt-2">
          <div className="w-64 rounded-lg border border-border bg-popover p-2 shadow-card">
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to as "/"}
                onClick={onClose}
                className="block rounded-md px-3 py-2 text-sm text-ink hover:bg-muted hover:text-brand transition"
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileGroup({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: ReadonlyArray<{ label: string; to: string }>;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-md px-2 py-2 text-base font-semibold text-ink"
      >
        {label}
        <ChevronDown className={`h-5 w-5 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-2 pb-2 space-y-1">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to as "/"}
              onClick={onNavigate}
              className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-brand"
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
