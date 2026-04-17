import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/rads-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-background/85 backdrop-blur-md transition-all duration-500 ${
        scrolled ? "border-b border-border/70 py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-12">
        <Link to="/" className="flex items-center gap-3" aria-label="RADS home">
          <img
            src={logo}
            alt="RADS — R Architecture Design Studio"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
          />
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            RADS
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="gold-link font-sans text-[13px] uppercase tracking-luxury text-foreground/85 hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden items-center gap-2 border-b border-foreground pb-1 font-sans text-[12px] uppercase tracking-luxury text-foreground transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)] md:inline-flex"
        >
          Start a Project <span className="gold-arrow">→</span>
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-border/60 bg-background md:hidden ${
          open ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-500 ease-in-out`}
      >
        <div className="flex flex-col gap-5 px-6 py-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              className="gold-link font-sans text-sm uppercase tracking-luxury text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
