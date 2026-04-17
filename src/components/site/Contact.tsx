import { useState } from "react";
import { SectionLabel } from "./SectionLabel";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-foreground py-28 text-white md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionLabel number="06" title="Start a Project" tone="light" />

        <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left: headline & details */}
          <div className="lg:col-span-5">
            <h2 className="reveal font-display text-4xl font-light leading-[1.05] tracking-tight text-white md:text-6xl">
              Let's Create
              <br />
              Something{" "}
              <span className="font-display-italic text-[var(--gold)]">Remarkable.</span>
            </h2>

            <div className="mt-12 space-y-7">
              {[
                {
                  icon: "📍",
                  title: "Studio",
                  body: "Sriram Apartment, Nandamuri Rd,\nBrindavan Colony, Vijayawada — 520010",
                },
                { icon: "📞", title: "Call", body: "098858 48042" },
                { icon: "🕐", title: "Hours", body: "Mon – Sat · Open until 8:00 PM" },
              ].map((d, i) => (
                <div
                  key={d.title}
                  className="reveal flex gap-5 border-t border-white/10 pt-6"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="text-xl">{d.icon}</span>
                  <div>
                    <div className="font-sans text-[10px] uppercase tracking-luxury text-[var(--gold)]">
                      {d.title}
                    </div>
                    <p className="mt-2 font-sans text-base whitespace-pre-line text-white/85">
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="reveal grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7"
          >
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label
                htmlFor="project"
                className="font-sans text-[10px] uppercase tracking-luxury text-white/55"
              >
                Project Type
              </label>
              <select
                id="project"
                name="project"
                required
                defaultValue=""
                className="border-b border-white/20 bg-transparent py-3 font-sans text-base text-white outline-none transition-colors focus:border-[var(--gold)]"
              >
                <option value="" disabled className="bg-foreground">
                  Select a service
                </option>
                {[
                  "Architectural Planning",
                  "Interior Designing",
                  "Turnkey Contract",
                  "Structural Designing",
                  "RERA Consultation",
                  "Other",
                ].map((o) => (
                  <option key={o} value={o} className="bg-foreground text-white">
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label
                htmlFor="message"
                className="font-sans text-[10px] uppercase tracking-luxury text-white/55"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="resize-none border-b border-white/20 bg-transparent py-3 font-sans text-base text-white outline-none transition-colors focus:border-[var(--gold)]"
                placeholder="Tell us about your space, timeline, vision…"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 border border-[var(--gold)] bg-[var(--gold)] px-8 py-4 font-sans text-[11px] uppercase tracking-luxury text-foreground transition-all duration-500 hover:bg-transparent hover:text-[var(--gold)]"
              >
                {submitted ? "Sent — we'll be in touch" : "Send Enquiry"}
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-sans text-[10px] uppercase tracking-luxury text-white/55"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border-b border-white/20 bg-transparent py-3 font-sans text-base text-white outline-none transition-colors focus:border-[var(--gold)]"
      />
    </div>
  );
}
