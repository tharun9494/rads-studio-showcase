import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-background pt-32 md:pt-40">
      {/* Diagonal gold hairline */}
      <div className="diagonal-gold pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex min-h-[calc(100svh-10rem)] max-w-[1400px] flex-col px-6 md:px-12">
        {/* Top-left mark */}
        <div className="reveal flex flex-col gap-3">
          <span className="font-sans text-[11px] uppercase tracking-luxury text-foreground">
            RADS
          </span>
          <span className="gold-rule" />
        </div>

        {/* Center headline */}
        <div className="flex flex-1 items-center">
          <div className="max-w-5xl">
            <h1 className="reveal font-display text-[15vw] font-extralight leading-[0.95] tracking-tight text-foreground sm:text-[12vw] md:text-[8.5vw] lg:text-[7.5rem]">
              Architecture
              <br />
              <span className="font-display-italic text-foreground">
                Designed for <span className="text-[var(--gold)]">Life.</span>
              </span>
            </h1>

            <p
              className="reveal mt-10 font-sans text-[11px] uppercase tracking-luxury text-muted-foreground"
              style={{ transitionDelay: "120ms" }}
            >
              Interior Design · Architecture · Turnkey Projects · Vijayawada
            </p>

            <div className="reveal mt-10" style={{ transitionDelay: "220ms" }}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 border-b border-foreground pb-2 font-sans text-sm uppercase tracking-luxury text-foreground transition-colors hover:border-[var(--gold)]"
              >
                Start a Project
                <span className="gold-arrow text-base">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom rotated text */}
        <div
          className="pointer-events-none absolute right-4 bottom-10 hidden md:block"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="font-sans text-[10px] uppercase tracking-luxury text-muted-foreground">
            Est. Vijayawada, Andhra Pradesh
          </span>
        </div>

        {/* Bottom hairline */}
        <div className="mt-16 mb-6 flex items-center justify-between border-t border-border pt-6">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-muted-foreground">
            Scroll
          </span>
          <span className="font-sans text-[10px] uppercase tracking-luxury text-muted-foreground">
            01 / 06
          </span>
        </div>
      </div>
    </section>
  );
}
