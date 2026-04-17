import { SectionLabel } from "./SectionLabel";

const reviews = [
  {
    quote: "Services are simply superb and designs are awesome!",
    name: "Sai Krishna",
  },
  {
    quote: "Any concerns were addressed with efficiency and care.",
    name: "Lakshmi P.",
  },
  {
    quote: "I highly recommend RADS for interior projects.",
    name: "Ravi Teja",
  },
];

export function Reviews() {
  return (
    <section className="bg-bone py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <SectionLabel number="05" title="Client Words" />
          <h2 className="reveal mt-6 max-w-3xl font-display text-4xl font-light leading-tight tracking-tight text-foreground md:text-6xl">
            Trusted by those who{" "}
            <span className="font-display-italic">live in our work.</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="reveal group relative flex flex-col bg-background p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="font-display text-7xl leading-none text-[var(--gold)]">
                "
              </span>
              <blockquote className="mt-2 flex-1 font-display text-xl font-light leading-snug text-foreground md:text-2xl">
                {r.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <div className="font-sans text-[11px] uppercase tracking-luxury text-foreground">
                  {r.name}
                </div>
                <div
                  className="mt-2 font-sans text-sm tracking-[0.3em] text-[var(--gold)]"
                  aria-label="5 star rating"
                >
                  ★★★★★
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reveal mt-16 flex justify-center">
          <div className="inline-flex items-center gap-4 border border-[var(--gold)] px-6 py-3">
            <span className="font-display text-2xl font-light text-foreground">5.0</span>
            <span className="h-6 w-px bg-[var(--gold)]" />
            <span className="font-sans text-[11px] uppercase tracking-luxury text-foreground">
              13 Google Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
