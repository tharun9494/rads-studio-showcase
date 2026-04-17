export function About() {
  return (
    <section id="about" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
          {/* Left: number + heading */}
          <div className="reveal md:col-span-5">
            <span className="font-display text-[8rem] font-light leading-none text-foreground md:text-[10rem]">
              01
            </span>
            <h2 className="mt-6 font-display text-3xl font-light tracking-tight text-foreground md:text-5xl">
              Who <span className="font-display-italic">We Are</span>
            </h2>
            <span className="mt-6 block h-px w-16 bg-[var(--gold)]" />
          </div>

          {/* Right: copy */}
          <div className="md:col-span-7 md:pt-10">
            <p
              className="reveal font-sans text-lg leading-relaxed text-foreground/90 md:text-xl"
              style={{ transitionDelay: "100ms" }}
            >
              RADS is a Vijayawada-based architecture and design studio offering end-to-end
              services — from{" "}
              <span className="text-foreground">Architectural Planning</span> and{" "}
              <span className="text-foreground">Interior Design</span> to Structural Engineering,
              RERA Consultations, and full Turnkey Contracts.
            </p>
            <p
              className="reveal mt-6 font-sans text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ transitionDelay: "180ms" }}
            >
              We design for residential and commercial spaces, delivering projects that are
              beautiful, functional, and built to last.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal mt-24 grid grid-cols-1 sm:grid-cols-3">
          {[
            { value: "5.0★", label: "Excellence Rated" },
            { value: "Google", label: "Verified Reviews" },
            { value: "Vijayawada", label: "Andhra Pradesh" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-2 px-2 py-6 sm:px-8 ${
                i > 0 ? "sm:border-l sm:border-[var(--gold-soft)]" : ""
              } ${i > 0 ? "border-t border-[var(--gold-soft)] sm:border-t-0" : ""}`}
            >
              <span className="font-display text-4xl font-light text-foreground md:text-5xl">
                {stat.value}
              </span>
              <span className="font-sans text-[11px] uppercase tracking-luxury text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
