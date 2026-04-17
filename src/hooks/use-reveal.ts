import { useEffect, useRef } from "react";

/**
 * Adds `is-visible` to any `.reveal` element when it scrolls into view.
 * Uses a MutationObserver so newly-mounted elements (after route changes,
 * lazy loads, or accordions) are picked up automatically.
 *
 * The CSS only hides `.reveal` once `<html>` has the `js-ready` class, so if
 * JS is disabled or fails, content remains visible.
 */
export function useReveal() {
  const isHydratedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Mark that hydration is complete
    isHydratedRef.current = true;
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
      // Only apply classes after hydration is complete
      if (!isHydratedRef.current) return;

      const els = document.querySelectorAll<HTMLElement>(".reveal");
      els.forEach((el) => {
        if (observed.has(el) || el.classList.contains("is-visible")) return;
        observed.add(el);
        if (io) {
          io.observe(el);
        } else {
          el.classList.add("is-visible");
        }
      });
    };

    // Delay initial scan to let React hydration complete fully
    const timeout = setTimeout(scan, 50);

    // Watch for new .reveal elements appearing (route changes, lazy loads, accordions)
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeout);
      mo.disconnect();
      io?.disconnect();
    };
  }, []);
}
