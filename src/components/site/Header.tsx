import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { SERVICES, CITIES } from "./data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const [openMenu, setOpenMenu] = useState<null | "services" | "cities">(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/images/logo.jpg"
            alt="Florida Movers Direct"
            className="h-9 w-auto md:h-11"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <DropdownNav
            label="Services"
            items={SERVICES}
            isOpen={openMenu === "services"}
            onOpen={() => setOpenMenu("services")}
            onClose={() => setOpenMenu(null)}
          />
          <DropdownNav
            label="Locations"
            items={CITIES}
            isOpen={openMenu === "cities"}
            onOpen={() => setOpenMenu("cities")}
            onClose={() => setOpenMenu(null)}
          />
          <Link
            to="/blog/"
            className="rounded-md px-3 py-2 text-sm font-medium text-ink hover:text-brand transition"
          >
            Blog
          </Link>
          <Link
            to="/contact/"
            className="rounded-md px-3 py-2 text-sm font-medium text-ink hover:text-brand transition"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => setLang(lang === "EN" ? "ES" : "EN")}
            className="hidden sm:inline-flex items-center rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-ink hover:border-brand hover:text-brand transition"
            aria-label="Toggle language"
          >
            {lang} / {lang === "EN" ? "ES" : "EN"}
          </button>
          <Link
            to="/contact/"
            className="btn-cta btn-cta-hover hidden md:inline-flex text-sm"
          >
            Get Free Quotes
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
            <MobileGroup label="Services" items={SERVICES} onNavigate={() => setOpen(false)} />
            <MobileGroup label="Locations" items={CITIES} onNavigate={() => setOpen(false)} />
            <Link
              to="/blog/"
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2 text-base font-semibold text-ink"
            >
              Blog
            </Link>
            <Link
              to="/contact/"
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2 text-base font-semibold text-ink"
            >
              Contact
            </Link>
            <Link
              to="/contact/"
              onClick={() => setOpen(false)}
              className="btn-cta btn-cta-hover w-full"
            >
              Get Free Quotes
            </Link>
            <button
              onClick={() => setLang(lang === "EN" ? "ES" : "EN")}
              className="w-full rounded-md border border-border px-3 py-2 text-sm font-semibold text-ink"
            >
              Language: {lang}
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
                to={it.to}
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
              to={it.to}
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
