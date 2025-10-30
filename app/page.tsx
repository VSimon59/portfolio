// app/studio-creatif/page.tsx

import Image from "next/image";
import Link from "next/link";
import BeforeAfter from "./components/BeforeAfter";

export default function Page() {
  return (
    <main className="px-6 md:px-12 lg:px-24">
      <section className="max-w-6xl mx-auto py-14 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Site vitrine — <span className="text-blue-600">comparatif V1 / V2</span>
        </h1>
        <p className="mt-4 text-lg text-neutral-700 max-w-3xl">
          V1 : version rudimentaire et lisible. V2 : version optimisée (Next/Image,
          SEO, JSON-LD, médias et perfs).
        </p>
      </section>

      {/* Cartes */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">Aperçu</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Carte V1 */}
          <Link
            href="/studio-creatif/v1"
            target="_blank"
            rel="noopener noreferrer"
            className="group block border rounded-2xl overflow-hidden hover:shadow-md transition"
            aria-label="Ouvrir la version rudimentaire (nouvel onglet)"
          >
            <div className="aspect-video bg-neutral-100 relative">
              <Image
                src="/images/studio-site/v1-preview.png"
                alt="Aperçu V1 — site vitrine rudimentaire"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition">
                Version V1 (rudimentaire)
              </h3>
              <p className="text-neutral-700 mt-1">
                Structure simple, HTML sémantique, Tailwind minimal.
              </p>
            </div>
          </Link>

          {/* Carte V2 */}
          <Link
            href="/studio-creatif/v2"
            target="_blank"
            rel="noopener noreferrer"
            className="group block border rounded-2xl overflow-hidden hover:shadow-md transition"
            aria-label="Ouvrir la version optimisée (nouvel onglet)"
          >
            <div className="aspect-video bg-neutral-100 relative">
              <Image
                src="/images/studio-site/v2-preview.png"
                alt="Aperçu V2 — site vitrine optimisé"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition">
                Version V2 (optimisée)
              </h3>
              <p className="text-neutral-700 mt-1">
                Next/Image, SEO (Open Graph + JSON-LD), médias optimisés.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Comparateur avant / après */}
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Avant / Après</h2>
        <p className="text-neutral-700 mb-6">
          Compare la version rudimentaire et la version optimisée directement ci-dessous.
        </p>

        <BeforeAfter
          beforeSrc="/images/studio-site/hero-v1.png"
          afterSrc="/images/studio-site/hero-v2.png"
          altBefore="Hero V1 rudimentaire"
          altAfter="Hero V2 optimisée"
          initial={0.5}
          className="aspect-video"
        />
      </section>
    </main>
  );
}
