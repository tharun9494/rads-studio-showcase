import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/site/Portfolio";
import { Reviews } from "@/components/site/Reviews";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Selected Projects · RADS" },
      {
        name: "description",
        content:
          "Residential villas, luxury apartments, offices and commercial spaces designed by RADS in Vijayawada.",
      },
      { property: "og:title", content: "Portfolio — RADS Architecture Design Studio" },
      {
        property: "og:description",
        content:
          "A selection of homes, offices and turnkey projects shaped across Andhra Pradesh.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <header className="bg-background pt-40 pb-20 md:pt-48">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="reveal flex items-center gap-3">
            <span className="gold-rule" />
            <span className="font-sans text-[11px] uppercase tracking-luxury text-muted-foreground">
              Portfolio
            </span>
          </div>
          <h1 className="reveal mt-8 max-w-4xl font-display text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Selected <span className="font-display-italic">Work.</span>
          </h1>
        </div>
      </header>
      <Portfolio />
      <Reviews />
      <Contact />
    </>
  );
}
