type Props = {
  title: string;
  description: string;
  url: string;
  tech: string[];
  highlights?: string[];
};

export default function ProjectCard({ title, description, url, tech, highlights = [] }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="group rounded-2xl border border-slate-800 p-5 hover:border-blue-500 transition"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        {highlights.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {highlights.map((h) => (
              <span key={h} className="text-xs px-2 py-1 rounded-full border border-slate-700">
                {h}
              </span>
            ))}
          </div>
        )}
      </div>
      <p className="mt-2 text-slate-400">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-slate-800">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 text-sm text-blue-400 underline opacity-0 group-hover:opacity-100 transition">
        Voir le projet ↗
      </div>
    </a>
  );
}
