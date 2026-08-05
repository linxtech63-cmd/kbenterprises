export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#0078D4]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl leading-tight text-[#101827] md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
