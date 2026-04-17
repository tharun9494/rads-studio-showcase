import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t-[1.5px] border-[var(--gold)] bg-background">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row md:px-12">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <span className="font-display text-2xl font-semibold tracking-tight text-foreground">
            RADS
          </span>
          <span className="font-sans text-xs tracking-wide text-muted-foreground">
            R Architecture Design Studio
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/portfolio", label: "Portfolio" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="gold-link font-sans text-[11px] uppercase tracking-luxury text-foreground/80"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="font-sans text-[11px] uppercase tracking-luxury text-muted-foreground">
          © 2025 RADS · Vijayawada, AP
        </p>
      </div>
    </footer>
  );
}
