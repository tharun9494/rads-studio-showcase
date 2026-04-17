import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { WhyRads } from "@/components/site/WhyRads";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Architecture, Interiors & Turnkey · RADS" },
      {
        name: "description",
        content:
          "Architectural planning, interior design, project management, structural design, RERA consultations and turnkey contracts in Vijayawada.",
      },
      { property: "og:title", content: "Services — RADS Architecture Design Studio" },
      {
        property: "og:description",
        content:
          "Six disciplines, one studio — end-to-end architecture and interior services in Vijayawada.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <header className="bg-background pt-40 pb-20 md:pt-48">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="reveal flex items-center gap-3">
            <span className="gold-rule" />
            <span className="font-sans text-[11px] uppercase tracking-luxury text-muted-foreground">
              Services
            </span>
          </div>
          <h1 className="reveal mt-8 max-w-4xl font-display text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Six disciplines.{" "}
            <span className="font-display-italic">One studio.</span>
          </h1>
        </div>
      </header>
      <Services />
      <WhyRads />
      <Contact />
    </>
  );
}
