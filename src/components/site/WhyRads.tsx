import { SectionLabel } from "./SectionLabel";

const reasons = [
  {
    title: "Turnkey Delivery",
    body: "From first sketch to final styling — one accountable team manages every phase of your project.",
  },
  {
    title: "RERA Compliant",
    body: "Every project is structured around full regulatory compliance for absolute peace of mind.",
  },
  {
    title: "Residential & Commercial",
    body: "Versatile expertise across homes, villas, offices and retail — tailored to each typology.",
  },
  {
    title: "Personalized Process",
    body: "We design around your life, your routines and your aesthetic — never around a template.",
  },
];

export function WhyRads() {
  return (
    <section className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <SectionLabel number="04" title="Why Choose Us" />
          <h2 className="reveal mt-6 max-w-3xl font-display text-4xl font-light leading-tight tracking-tight text-foreground md:text-6xl">
            Considered design.{" "}
            <span className="font-display-italic">Quietly executed.</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px bg-[var(--gold-soft)] sm:grid-cols-2">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="reveal group relative bg-background p-10 transition-colors duration-500 hover:bg-bone md:p-14"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="absolute top-0 left-0 h-px w-16 bg-[var(--gold)] transition-all duration-500 group-hover:w-full" />
              <div className="flex items-baseline gap-4">
                <span className="text-[var(--gold)]">✦</span>
                <span className="font-sans text-[11px] uppercase tracking-luxury text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-light text-foreground md:text-3xl">
                {r.title}
              </h3>
              <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
