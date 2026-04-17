import { SectionLabel } from "./SectionLabel";

const projects = [
  { title: "Residential Villa", category: "Architecture", tone: "ink" },
  { title: "Office Interior", category: "Commercial", tone: "warm" },
  { title: "Luxury Apartment", category: "Interior", tone: "graphite" },
  { title: "Modern Home", category: "Architecture", tone: "warm" },
  { title: "Commercial Space", category: "Interior", tone: "ink" },
  { title: "Turnkey Project", category: "Full Delivery", tone: "graphite" },
];

const toneStyles: Record<string, string> = {
  ink: "bg-[oklch(0.18_0_0)]",
  graphite: "bg-[oklch(0.32_0_0)]",
  warm: "bg-[oklch(0.42_0.012_60)]",
};

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel number="03" title="Our Work" />
            <h2 className="reveal mt-6 font-display text-4xl font-light tracking-tight text-foreground md:text-6xl">
              Selected <span className="font-display-italic">Projects.</span>
            </h2>
          </div>
          <p className="reveal max-w-sm font-sans text-sm text-muted-foreground md:text-base">
            A glimpse into the homes, offices and spaces we've shaped across Andhra Pradesh.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative aspect-[4/5] cursor-pointer overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${toneStyles[p.tone]}`}
              >
                {/* subtle architectural line decor */}
                <div className="absolute inset-6 border border-white/[0.06]" />
                <div className="absolute top-1/2 left-6 h-px w-12 bg-white/15" />
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-[var(--gold)]" />

              {/* Text */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="font-sans text-[10px] uppercase tracking-luxury text-[var(--gold)]">
                  0{i + 1} · {p.category}
                </span>
                <h3 className="mt-3 font-display text-2xl font-light text-white transition-transform duration-500 group-hover:-translate-y-1 md:text-3xl">
                  {p.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-luxury text-white/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  View Project <span className="text-[var(--gold)]">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
