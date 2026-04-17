import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Adds `is-visible` class to any element with `.reveal` when it scrolls into view.
 * Re-scans on every route change so new route elements get observed.
 * Adds `js-ready` to <html> so CSS only hides `.reveal` once we know JS is running.
 */
export function useReveal() {
  const location = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;

    document.documentElement.classList.add("js-ready");

    const scan = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return null;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -10% 0px" },
      );
      els.forEach((el) => io.observe(el));
      return io;
    };

    // Run after paint so freshly-mounted route elements are in the DOM
    const raf = requestAnimationFrame(() => {
      const io = scan();
      // Safety: anything in viewport should be visible within 600ms
      const timeout = window.setTimeout(() => {
        document
          .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
          .forEach((el) => {
            const r = el.getBoundingClientRect();
            if (r.top < window.innerHeight && r.bottom > 0) {
              el.classList.add("is-visible");
            }
          });
      }, 600);

      (window as any).__radsRevealCleanup = () => {
        io?.disconnect();
        window.clearTimeout(timeout);
      };
    });

    return () => {
      cancelAnimationFrame(raf);
      (window as any).__radsRevealCleanup?.();
    };
  }, [location]);
}
