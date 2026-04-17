import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Contact } from "@/components/site/Contact";
import villa from "@/assets/projects/residential-villa.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RADS — Architecture & Interior Design Studio · Vijayawada" },
      {
        name: "description",
        content:
          "Founded in Vijayawada, RADS is an architecture and interior design studio delivering residential and commercial projects end-to-end — from concept through handover.",
      },
      { property: "og:title", content: "About RADS — R Architecture Design Studio" },
      {
        property: "og:description",
        content:
          "Our story, our team, our design philosophy and the five-step process behind every RADS project.",
      },
      { property: "og:image", content: villa },
      { name: "twitter:image", content: villa },
    ],
  }),
  component: AboutPage,
});

const team = [
  { initials: "RK", name: "Rajesh Kumar", role: "Principal Architect" },
  { initials: "AS", name: "Aditi Sharma", role: "Head of Interiors" },
  { initials: "VR", name: "Vikram Rao", role: "Structural Lead" },
  { initials: "PN", name: "Priya Nair", role: "Project Manager" },
];

const principles = [
  {
    title: "Quiet Materiality",
    body: "We design with restraint — honest materials, considered tones and details that age with grace.",
  },
  {
    title: "Light as Geometry",
    body: "Every plan is sketched against the path of the sun, treating daylight as a primary building material.",
  },
  {
    title: "Built to Last",
    body: "We engineer with the same care we draw with — durable structures, careful detailing, no shortcuts.",
  },
  {
    title: "One Studio, End-to-End",
    body: "From the first sketch to the final styling, the same team carries the project — no handoffs, no surprises.",
  },
];

const process = [
  {
    step: "Brief",
    body: "We listen first — understanding how you live or work, your aspirations, site, and budget.",
  },
  {
    step: "Concept",
    body: "Sketches, mood boards and a single guiding idea that every later decision will return to.",
  },
  {
    step: "Design",
    body: "Architectural drawings, interior layouts, material palettes and 3D walkthroughs for full clarity.",
  },
  {
    step: "Build",
    body: "Structural engineering, MEP coordination and on-site supervision by our own project managers.",
  },
  {
    step: "Handover",
    body: "Final styling, snagging and a fully finished space — keys handed over, ready to live in.",
  },
];

function AboutPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-background pt-40 pb-20 md:pt-48">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="reveal flex items-center gap-3">
            <span className="gold-rule" />
            <span className="font-sans text-[11px] uppercase tracking-luxury text-muted-foreground">
              About the Studio
            </span>
          </div>
          <h1 className="reveal mt-8 max-w-4xl font-display text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl">
            A studio shaped by{" "}
            <span className="font-display-italic">place, people</span> and patience.
          </h1>
        </div>
      </header>

      {/* Founder story */}
      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <SectionLabel number="01" title="Founder's Note" />
              <h2 className="reveal mt-6 font-display text-3xl font-light tracking-tight text-foreground md:text-5xl">
                A studio born <span className="font-display-italic">in Vijayawada.</span>
              </h2>
              <span className="reveal mt-6 block h-px w-16 bg-[var(--gold)]" />
            </div>
            <div className="md:col-span-7 md:pt-2">
              <p className="reveal font-sans text-lg leading-relaxed text-foreground/90 md:text-xl">
                RADS began with a simple belief — that great architecture is not about scale or
                spectacle, but about how a room feels at six in the morning and how it ages over
                twenty years.
              </p>
              <p
                className="reveal mt-6 font-sans text-base leading-relaxed text-muted-foreground md:text-lg"
                style={{ transitionDelay: "120ms" }}
              >
                What started as a small practice in Vijayawada has grown into a multi-disciplinary
                studio working across residential and commercial projects throughout Andhra
                Pradesh. We remain deliberately small, so every project carries the attention of
                the people who designed it — from the first sketch to the day the keys change
                hands.
              </p>
              <p
                className="reveal mt-6 font-sans text-base leading-relaxed text-muted-foreground md:text-lg"
                style={{ transitionDelay: "200ms" }}
              >
                We design for clients who want their home or workspace to feel like theirs —
                quiet, considered, and built to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-bone py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <SectionLabel number="02" title="Design Philosophy" />
          <h2 className="reveal mt-6 max-w-3xl font-display text-3xl font-light tracking-tight text-foreground md:text-5xl">
            Four ideas that shape{" "}
            <span className="font-display-italic">every project.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-px bg-[var(--gold-soft)] sm:grid-cols-2">
            {principles.map((p, i) => (
              <article
                key={p.title}
                className="reveal bg-bone p-8 md:p-12"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-display text-sm text-[var(--gold)]">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl font-light text-foreground md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel number="03" title="The Team" />
              <h2 className="reveal mt-6 font-display text-3xl font-light tracking-tight text-foreground md:text-5xl">
                Small studio. <span className="font-display-italic">Full attention.</span>
              </h2>
            </div>
            <p className="reveal max-w-sm font-sans text-sm text-muted-foreground md:text-base">
              Architects, interior designers, engineers and project managers — all under one roof.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {team.map((m, i) => (
              <article
                key={m.name}
                className="reveal group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-bone">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-7xl font-light text-foreground/85 md:text-8xl">
                      {m.initials}
                    </span>
                  </div>
                  <div className="absolute inset-6 border border-[var(--gold-soft)] transition-colors duration-500 group-hover:border-[var(--gold)]" />
                </div>
                <h3 className="mt-5 font-display text-lg font-light text-foreground md:text-xl">
                  {m.name}
                </h3>
                <p className="mt-1 font-sans text-[11px] uppercase tracking-luxury text-muted-foreground">
                  {m.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <SectionLabel number="04" title="Our Process" tone="light" />
          <h2 className="reveal mt-6 max-w-3xl font-display text-3xl font-light tracking-tight text-white md:text-5xl">
            Brief to handover, in{" "}
            <span className="font-display-italic">five steps.</span>
          </h2>

          <ol className="mt-16 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-5">
            {process.map((p, i) => (
              <li
                key={p.step}
                className="reveal flex flex-col gap-6 bg-ink p-8 md:p-10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-light text-[var(--gold)] md:text-5xl">
                    0{i + 1}
                  </span>
                  <span className="h-px w-10 bg-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-light text-white md:text-3xl">
                    {p.step}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-white/65">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="reveal mt-16">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 border-b border-white pb-1 font-sans text-[11px] uppercase tracking-luxury text-white hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Start a Project <span className="gold-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
