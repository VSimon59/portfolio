import Link from "next/link";
import ApercuStudioCreatif from "./Apercu";

const ACCENT = "rgb(165 180 252)";

export const metadata = {
  title: "Studio Créatif — Design, UI/UX & Développement Web",
  description:
    "Studio créatif indépendant : design d’interfaces, identité visuelle et développement web moderne. Basé à Calais.",
};

export default function PageStudioCreatif() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* --- Fond global --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/textures/pixel-grid.png')] bg-repeat" />

      {/* --- Contenu principal --- */}
      <div className="relative z-10 flex flex-col">
        <ApercuStudioCreatif />

        {/* --- Section de présentation --- */}
        <section className="mx-auto max-w-5xl px-6 py-20 text-gray-200 animate-page">
          <div className="text-center space-y-4 mb-16">
            <h2
              className="text-2xl md:text-3xl font-semibold"
              style={{ color: ACCENT }}
            >
              Une approche centrée sur la clarté et la cohérence
            </h2>
            <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Le studio met l’accent sur la simplicité, la lisibilité et la
              fluidité des expériences digitales. Chaque projet est conçu comme un
              parcours clair, intuitif et esthétique — pensé pour servir autant la
              marque que l’utilisateur.
            </p>
          </div>

          {/* --- Aperçus des projets --- */}
          <div className="grid gap-10 md:grid-cols-3">
            {/* --- Système & logo --- */}
            <Link
              href="/projets/studio-creatif/systeme-logo"
              className="block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_1px_1px_rgba(0,0,0,.15),0_16px_40px_-24px_rgba(0,0,0,.45)] card-link overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/images/studio-site/brand-system.png"
                  alt="Système & logo"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5"
                  style={{ background: ACCENT, opacity: 0.6 }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-100">
                  Système & logo
                </h3>
                <p className="mt-1 text-sm text-gray-300 leading-relaxed">
                  Logotype principal, variantes, grilles et principes d’alignement.
                </p>
              </div>
            </Link>

            {/* --- Palette & typographies --- */}
            <Link
              href="/projets/studio-creatif/palette-typographies"
              className="block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_1px_1px_rgba(0,0,0,.15),0_16px_40px_-24px_rgba(0,0,0,.45)] card-link overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/images/studio-site/ui-prototype.png"
                  alt="Palette & typographies"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5"
                  style={{ background: ACCENT, opacity: 0.6 }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-100">
                  Palette & typographies
                </h3>
                <p className="mt-1 text-sm text-gray-300 leading-relaxed">
                  Couleurs et familles de caractères qui définissent l’identité
                  visuelle du studio.
                </p>
              </div>
            </Link>

            {/* --- Guidelines & usages --- */}
            <Link
              href="/projets/studio-creatif/guidelines-usages"
              className="block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_1px_1px_rgba(0,0,0,.15),0_16px_40px_-24px_rgba(0,0,0,.45)] card-link overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/images/studio-site/web-next.png"
                  alt="Guidelines & usages"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5"
                  style={{ background: ACCENT, opacity: 0.6 }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-100">
                  Guidelines & usages
                </h3>
                <p className="mt-1 text-sm text-gray-300 leading-relaxed">
                  Mini charte graphique et exemples d’application sur le web et
                  les réseaux sociaux.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
