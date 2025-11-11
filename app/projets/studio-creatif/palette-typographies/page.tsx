import Link from "next/link";

const ACCENT = "rgb(165 180 252)";

export default function PaletteTypographiesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-gray-200">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/textures/pixel-grid.png')] bg-repeat" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/projets/studio-creatif"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-gray-200 hover:bg-white/10 transition"
        >
          ← Retour à l’accueil
        </Link>

        <header className="mt-10 mb-8">
          <h1
            className="text-3xl font-semibold tracking-tight"
            style={{ color: ACCENT }}
          >
            Palette & typographies
          </h1>
          <p className="mt-2 text-gray-300 leading-relaxed max-w-3xl">
            Des teintes harmonieuses et des typographies lisibles pour traduire
            l’esprit du studio : clair, précis, et créatif.
          </p>
        </header>

        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <img
            src="/images/studio-site/ui-prototype.png"
            alt="Palette & typographies"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </main>
  );
}
