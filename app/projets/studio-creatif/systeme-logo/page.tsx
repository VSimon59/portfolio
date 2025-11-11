import Link from "next/link";

const ACCENT = "rgb(165 180 252)";

export default function SystemeLogoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-gray-200">
      {/* Fond */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/textures/pixel-grid.png')] bg-repeat" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">
        {/* Bouton retour */}
        <Link
          href="/projets/studio-creatif"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-gray-200 hover:bg-white/10 transition"
        >
          ← Retour à l’accueil
        </Link>

        {/* Contenu principal */}
        <header className="mt-10 mb-8">
          <h1
            className="text-3xl font-semibold tracking-tight"
            style={{ color: ACCENT }}
          >
            Système & logo
          </h1>
          <p className="mt-2 text-gray-300 leading-relaxed max-w-3xl">
            Le cœur visuel de l’identité : monogramme, variantes, grilles, marges
            et principes de cohérence. Chaque élément est pensé pour garantir la
            lisibilité et la reconnaissance sur tous les supports.
          </p>
        </header>

        {/* Image pleine largeur */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <img
            src="/images/studio-site/brand-system.png"
            alt="Système & logo"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Section détails */}
        <section className="mt-12 space-y-6 max-w-3xl">
          <p>
            Le logo combine géométrie et douceur : une structure en T stylisée,
            équilibrée et modulable. Il s’adapte aux déclinaisons digitales et
            imprimées sans perdre en impact visuel.
          </p>
          <p>
            Les zones de protection assurent sa lisibilité dans toutes les
            tailles. La version principale est accompagnée d’une variante
            monochrome pour les supports sombres.
          </p>
        </section>
      </div>
    </main>
  );
}
