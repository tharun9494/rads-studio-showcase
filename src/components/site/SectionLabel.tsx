export function SectionLabel({
  number,
  title,
  tone = "dark",
}: {
  number: string;
  title: string;
  tone?: "dark" | "light";
}) {
  const color = tone === "dark" ? "text-foreground/70" : "text-white/70";
  return (
    <div className="reveal flex items-center gap-3">
      <span className="gold-rule" />
      <span className={`font-sans text-[11px] uppercase tracking-luxury ${color}`}>
        <span className="text-[var(--gold)]">{number}</span> — {title}
      </span>
    </div>
  );
}
