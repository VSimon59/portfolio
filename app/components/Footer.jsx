import Link from "next/link";

const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Performance & SEO",
  "UI & direction visuelle",
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-8 md:flex-row md:items-start md:justify-between">
        {/* Identité */}
        <div className="space-y-3 max-w-sm">
          <p className="text-sm font-semibold text-slate-50">
            Verriele Simon
          </p>
          <p className="text-xs text-slate-300">
            Développeur web & créatif. Je conçois des interfaces sobres,
            lisibles et modernes pour studios, indépendants et artisans.
          </p>
        </div>

        {/* Stack technique */}
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            Stack technique
          </p>
          <ul className="flex flex-wrap gap-2 text-xs text-slate-200">
            {stack.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-[3px] w-[3px] rounded-full bg-emerald-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            Contact
          </p>
          <div className="space-y-1 text-xs text-slate-200">
            <Link
              href="mailto:contact@votre-email.fr"
              className="hover:text-emerald-300 transition"
            >
              simon.verriele@hotmail.fr
            </Link>
            <p>Basé en France, disponible pour des projets à distance.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-[11px] text-slate-500">
          <span>© {new Date().getFullYear()} Verriele Simon.</span>
          <span className="hidden sm:inline">
            Portfolio personnel — exploration visuelle & technique.
          </span>
        </div>
      </div>
    </footer>
  );
}
