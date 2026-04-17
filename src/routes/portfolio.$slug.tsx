import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getAdjacent, getProject, projects, type Project } from "@/data/projects";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — RADS" }] };
    const title = `${p.title} — ${p.category} · RADS`;
    return {
      meta: [
        { title },
        { name: "description", content: p.brief },
        { property: "og:title", content: title },
        { property: "og:description", content: p.brief },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 pt-32">
      <div className="text-center">
        <h1 className="font-display text-5xl font-light text-foreground">Project not found</h1>
        <span className="mx-auto mt-6 block h-px w-16 bg-[var(--gold)]" />
        <Link
          to="/portfolio"
          className="mt-8 inline-flex items-center gap-3 border-b border-foreground pb-1 font-sans text-[11px] uppercase tracking-luxury text-foreground"
        >
          Back to Portfolio <span className="text-[var(--gold)]">→</span>
        </Link>
      </div>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const { prev, next } = getAdjacent(project.slug);
  const index = projects.findIndex((p) => p.slug === project.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden bg-ink">
        <img
          src={project.image}
          alt={`${project.title} hero`}
          width={1280}
          height={1600}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1400px] px-6 pb-12 md:px-12 md:pb-20">
            <div className="reveal flex items-center gap-3">
              <span className="gold-rule" />
              <span className="font-sans text-[11px] uppercase tracking-luxury text-white/85">
                {String(index + 1).padStart(2, "0")} · {project.category}
              </span>
            </div>
            <h1 className="reveal mt-6 max-w-4xl font-display text-5xl font-light leading-[1.05] tracking-tight text-white md:text-7xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Brief + meta */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <SectionLabel number="01" title="The Brief" />
              <h2 className="reveal mt-6 font-display text-3xl font-light tracking-tight text-foreground md:text-4xl">
                A space, <span className="font-display-italic">considered.</span>
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-2">
              <p className="reveal font-sans text-lg leading-relaxed text-foreground/90 md:text-xl">
                {project.brief}
              </p>

              <dl className="reveal mt-12 grid grid-cols-2 gap-y-6 border-t border-[var(--gold-soft)] pt-8 sm:grid-cols-4">
                {[
                  { k: "Location", v: project.location },
                  { k: "Year", v: project.year },
                  { k: "Area", v: project.area },
                  { k: "Category", v: project.category },
                ].map((item) => (
                  <div key={item.k}>
                    <dt className="font-sans text-[10px] uppercase tracking-luxury text-muted-foreground">
                      {item.k}
                    </dt>
                    <dd className="mt-2 font-display text-lg font-light text-foreground">
                      {item.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <SectionLabel number="02" title="Scope of Work" tone="light" />
          <ul className="reveal mt-12 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {project.scope.map((s: string, i: number) => (
              <li
                key={s}
                className="flex items-baseline gap-4 bg-ink px-6 py-8 md:px-8"
              >
                <span className="font-display text-sm text-[var(--gold)]">
                  0{i + 1}
                </span>
                <span className="font-display text-xl font-light text-white md:text-2xl">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <SectionLabel number="03" title="Gallery" />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {project.gallery.map((g: Project["gallery"][number], i: number) => (
              <figure
                key={i}
                className={`reveal overflow-hidden ${i % 3 === 0 ? "md:col-span-2" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="group relative aspect-[4/3] overflow-hidden bg-ink">
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-3 font-sans text-[11px] uppercase tracking-luxury text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} — {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-border bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {prev && (
              <Link
                to="/portfolio/$slug"
                params={{ slug: prev.slug }}
                className="group block"
              >
                <span className="font-sans text-[10px] uppercase tracking-luxury text-muted-foreground">
                  ← Previous Project
                </span>
                <h3 className="mt-3 font-display text-2xl font-light text-foreground transition-colors group-hover:text-[var(--gold)] md:text-3xl">
                  {prev.title}
                </h3>
                <span className="mt-2 block font-sans text-xs uppercase tracking-luxury text-muted-foreground">
                  {prev.category}
                </span>
              </Link>
            )}
            {next && (
              <Link
                to="/portfolio/$slug"
                params={{ slug: next.slug }}
                className="group block md:text-right"
              >
                <span className="font-sans text-[10px] uppercase tracking-luxury text-muted-foreground">
                  Next Project →
                </span>
                <h3 className="mt-3 font-display text-2xl font-light text-foreground transition-colors group-hover:text-[var(--gold)] md:text-3xl">
                  {next.title}
                </h3>
                <span className="mt-2 block font-sans text-xs uppercase tracking-luxury text-muted-foreground">
                  {next.category}
                </span>
              </Link>
            )}
          </div>

          <div className="mt-14">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 border-b border-foreground pb-1 font-sans text-[11px] uppercase tracking-luxury text-foreground hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              All Projects <span className="gold-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
