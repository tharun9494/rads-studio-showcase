import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start a Project · RADS Vijayawada" },
      {
        name: "description",
        content:
          "Begin your architecture or interior project with RADS. Studio in Brindavan Colony, Vijayawada. Call 098858 48042.",
      },
      { property: "og:title", content: "Contact RADS — Start a Project" },
      {
        property: "og:description",
        content: "Architecture and interior design studio in Vijayawada — let's talk.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <header className="bg-background pt-40 pb-12 md:pt-48">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="reveal flex items-center gap-3">
            <span className="gold-rule" />
            <span className="font-sans text-[11px] uppercase tracking-luxury text-muted-foreground">
              Contact
            </span>
          </div>
          <h1 className="reveal mt-8 max-w-4xl font-display text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Start a <span className="font-display-italic">Project.</span>
          </h1>
        </div>
      </header>
      <Contact />
    </>
  );
}
