// app/projets/studio-creatif/page.tsx
import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Studio Créatif — Aperçu",
  description: "Un site clair, rapide et crédible : design net, UX rassurante, performances et SEO.",
};

export default function StudioCreatifHomePage() {
  return (
    <section className="w-full bg-neutral-950 text-neutral-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero centré */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Un site clair, rapide <span className="text-indigo-300">et crédible</span>.
          </h1>
          <p className="mt-6 text-neutral-300 max-w-2xl mx-auto">
            Positionnement, UX et développement moderne. Nous concevons des interfaces
            fiables qui inspirent confiance et transforment l’attention en action.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/projets/studio-creatif/contact"
              className="rounded-full bg-indigo-500/90 hover:bg-indigo-400 text-neutral-950 px-6 py-3 font-medium shadow-lg shadow-indigo-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Démarrer mon projet
            </Link>
            <a
              href="/projets/studio-creatif/offres"
              className="rounded-full border border-neutral-800 hover:bg-neutral-900/60 px-6 py-3"
            >
              Voir l’offre
            </a>
          </div>
        </div>

        {/* Séparateur fluide */}
        <div className="h-32 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950" />
     
        {/* Aperçu des offres (teaser) */}
        <section className="py-20 bg-neutral-950 text-neutral-100">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Des solutions claires et sur mesure</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              E-commerce, refonte : nous créons des interfaces efficaces et élégantes.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {[
              
                { t: "E-commerce", d: "Vendez en ligne avec une expérience fluide et rassurante." },
                { t: "Refonte", d: "Modernisez votre site sans perdre votre identité." },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 w-72 transition-transform hover:-translate-y-1 hover:bg-neutral-900/80 duration-300"
                >
                  <h3 className="text-lg font-semibold text-indigo-400 mb-2">{c.t}</h3>
                  <p className="text-sm text-neutral-400">{c.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="/projets/studio-creatif/offres"
                className="rounded-full bg-indigo-500/90 hover:bg-indigo-400 text-neutral-950 px-8 py-3 font-medium shadow-lg shadow-indigo-900/20 transition-colors duration-300"
              >
                Découvrir les offres
              </a>
            </div>
          </div>
        </section>

      
      </div>
    </section>
  );
}
