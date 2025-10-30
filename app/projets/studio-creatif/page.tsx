import type { Metadata } from "next";
import Image from "next/image";

// --- MÉTADONNÉES SEO --- //
export const metadata: Metadata = {
  title: "Studio Créatif – étude de cas",
  description:
    "Vitrine design pour une agence de création numérique : Next.js, Tailwind CSS, images JPG optimisées, SEO (Open Graph + JSON-LD).",
  alternates: { canonical: "/projets/studio-creatif" },
  openGraph: {
    type: "article",
    title: "Studio Créatif – étude de cas",
    description:
      "Vitrine design pour une agence de création numérique : Next.js, Tailwind CSS, images JPG optimisées, SEO (Open Graph + JSON-LD).",
    url: "https://vsimon59.vercel.app/projets/studio-creatif",
    siteName: "Portfolio Verriele Simon",
    images: [
      {
        url: "/images/studio-site/hero-v2.jpg",
        width: 1400,
        height: 900,
        alt: "Aperçu du projet Studio Créatif",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Créatif – étude de cas",
    description:
      "Vitrine design pour une agence de création numérique : Next.js, Tailwind CSS, images JPG optimisées, SEO (Open Graph + JSON-LD).",
    images: ["/images/studio-site/hero-v2.jpg"],
  },
};

// --- PAGE PRINCIPALE --- //
export default function Page() {
  return (
    <article className="prose md:prose-lg max-w-3xl mx-auto py-16 px-6">
      {/* TITRE + INTRO */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Studio Créatif</h1>
        <p className="text-gray-600 mt-3">
          Site vitrine conçu pour une agence numérique. Développé avec{" "}
          <strong>Next.js (App Router)</strong> et{" "}
          <strong>Tailwind CSS</strong>, ce projet met en avant la performance,
          un design systémique et un SEO sémantique via Open Graph et JSON-LD.
        </p>
      </header>

      {/* IMAGE PRINCIPALE */}
      <Image
        src="/images/studio-site/hero-v2.jpg"
        alt="Aperçu – page d'accueil du projet Studio Créatif"
        className="rounded-2xl mb-12"
        width={1400}
        height={900}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
      />

      {/* OBJECTIFS */}
      <section>
        <h2>Objectifs</h2>
        <ul>
          <li>Vitesse perçue et Core Web Vitals excellents.</li>
          <li>SEO propre (Open Graph + JSON-LD).</li>
          <li>Design modulaire, éco-conçu et réutilisable.</li>
        </ul>
      </section>

      {/* APPROCHE */}
      <section>
        <h2>Approche technique</h2>
        <ul>
          <li>
            <strong>Next.js App Router</strong> pour un rendu rapide et modulaire.
          </li>
          <li>
            <strong>Tailwind CSS</strong> pour un design systémique et fluide.
          </li>
          <li>
            <strong>Optimisation des médias :</strong> formats JPG, lazy loading,
            tailles adaptées.
          </li>
          <li>
            <strong>Méta-données enrichies :</strong> Open Graph, Twitter, JSON-LD.
          </li>
        </ul>
      </section>

      {/* RÉSULTATS */}
      <section>
        <h2>Résultats</h2>
        <p>
          Le site obtient un excellent score Lighthouse :
          <br />
          <strong>Performance :</strong> 95+ ·{" "}
          <strong>Accessibilité :</strong> 100 ·{" "}
          <strong>SEO :</strong> 100
        </p>
      </section>

      {/* GALERIE D’IMAGES */}
      <section>
        <h2>Galerie</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          {/* Version 1 – Rudimentaire */}
                  <a
                      href="/projets/studio-creatif/v1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                      title="Ouvrir la version rudimentaire (V1)"
                    >
                      <Image
                        src="/images/studio-site/v1-preview.jpg"
                        alt="Aperçu – ancienne version du site (V1 rudimentaire)"
                        className="rounded-xl opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards] group-hover:opacity-90 transition"
                        width={1200}
                        height={800}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      />
                      <p className="text-center text-sm text-neutral-500 mt-2">Version rudimentaire (V1)</p>
                    </a>

                    {/* Version 2 – Optimisée */}
                    <a
                      href="/projets/studio-creatif/v2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                      title="Ouvrir la version optimisée (V2)"
                    >
                      <Image
                        src="/images/studio-site/v2-preview.jpg"
                        alt="Aperçu – version optimisée du site (V2)"
                        className="rounded-xl opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards] group-hover:opacity-90 transition"
                        width={1200}
                        height={800}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      />
                      <p className="text-center text-sm text-neutral-500 mt-2">Version optimisée (V2)</p>
                    </a>
          </div>
      </section>

      {/* JSON-LD STRUCTURÉ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            headline: "Studio Créatif – étude de cas",
            about:
              "Vitrine Next.js (App Router), Tailwind CSS, images JPG, SEO (Open Graph + JSON-LD).",
            image: [
              "/images/studio-site/hero-v2.jpg",
              "/images/studio-site/v1-preview.jpg",
              "/images/studio-site/v2-preview.jpg",
            ],
            author: {
              "@type": "Person",
              name: "Verriele Simon",
              url: "https://vsimon59.vercel.app",
            },
            publisher: {
              "@type": "Organization",
              name: "Verriele Simon",
              logo: "/logo.svg",
            },
            inLanguage: "fr-FR",
          }),
        }}
      />
    </article>
  );
}
