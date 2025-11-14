type SectionHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
        {kicker}
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-sm sm:text-base text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
