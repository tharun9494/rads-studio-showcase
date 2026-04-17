import { useEffect } from "react";

/**
 * Adds `is-visible` to any `.reveal` element when it scrolls into view.
 * Uses a MutationObserver so newly-mounted elements (after route changes,
 * lazy loads, or accordions) are picked up automatically.
 *
 * The CSS only hides `.reveal` once `<html>` has the `js-ready` class, so if
 * JS is disabled or fails, content remains visible.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    document.documentElement.classList.add("js-ready");

    const supportsIO = "IntersectionObserver" in window;

    const io = supportsIO
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                io!.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.05, rootMargin: "0px 0px -8% 0px" },
        )
      : null;

    const observed = new WeakSet<Element>();

    const scan = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal");
      els.forEach((el) => {
        if (observed.has(el) || el.classList.contains("is-visible")) return;
        observed.add(el);
        if (io) {
          io.observe(el);
          // Anything already in the viewport — reveal immediately
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        } else {
          el.classList.add("is-visible");
        }
      });
    };

    // Initial scan after the first paint
    const raf = requestAnimationFrame(scan);

    // Watch for new .reveal elements appearing (route changes, lazy loads, accordions)
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      io?.disconnect();
    };
  }, []);
}
