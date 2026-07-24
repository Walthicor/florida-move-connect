import { useEffect } from "react";

/**
 * Adds `.is-visible` to elements with `.fade-up-in` when they scroll into view.
 * Runs once globally.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".fade-up-in").forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    const scan = () => {
      document.querySelectorAll(".fade-up-in:not(.is-visible)").forEach((el) => io.observe(el));
    };
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
