import { useState } from "react";
import { SectionLabel } from "./SectionLabel";

const services = [
  {
    title: "Architectural Planning",
    short: "Site analysis, concept design & approval drawings.",
    long: "From feasibility studies and zoning analysis to concept development, working drawings and municipal approvals — we plan every line before it becomes a wall.",
  },
  {
    title: "Interior Designing",
    short: "Bespoke interiors for residential & commercial spaces.",
    long: "Layout planning, materials, lighting, custom joinery and styling — interiors built around how you actually live and work.",
  },
  {
    title: "Project Management",
    short: "End-to-end coordination of every trade & timeline.",
    long: "We manage contractors, schedules, budgets and quality checks so the project moves on time, on cost and on vision.",
  },
  {
    title: "Structural Designing",
    short: "Safe, efficient structural engineering solutions.",
    long: "RCC and steel structural design with detailed analysis, drawings and on-site supervision aligned with current Indian codes.",
  },
  {
    title: "RERA Consultations",
    short: "Full regulatory compliance for builders & developers.",
    long: "Documentation, registration and ongoing RERA advisory for promoters and homebuyers in Andhra Pradesh.",
  },
  {
    title: "Turnkey Contracts",
    short: "From empty plot to handed-over keys — one team.",
    long: "Single-point-of-contact delivery covering design, structure, MEP, finishing and styling. You unlock the door.",
  },
];

export function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="services" className="bg-foreground py-28 text-white md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionLabel number="02" title="What We Do" tone="light" />

        <h2 className="reveal mt-8 max-w-3xl font-display text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
          Six disciplines.{" "}
          <span className="font-display-italic text-[var(--gold)]">One studio.</span>
        </h2>

        <div className="mt-20 divide-y divide-white/10 border-t border-white/10">
          {services.map((s, i) => {
            const isOpen = openIdx === i;
            return (
              <button
                key={s.title}
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="reveal group block w-full border-l-2 border-transparent py-8 text-left transition-all duration-500 hover:border-[var(--gold)] hover:pl-8 md:py-10"
                style={{ transitionDelay: `${i * 60}ms` }}
                aria-expanded={isOpen}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-6">
                      <span className="font-display text-xs text-white/40">
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-2xl font-light text-white md:text-4xl">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-3 ml-12 font-sans text-sm text-white/55 md:text-base">
                      {s.short}
                    </p>

                    <div
                      className={`overflow-hidden transition-all duration-700 ${
                        isOpen ? "mt-6 max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="ml-12 max-w-2xl font-sans text-sm leading-relaxed text-white/75 md:text-base">
                        {s.long}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`gold-arrow shrink-0 text-2xl text-[var(--gold)] transition-transform duration-500 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
