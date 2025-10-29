import type { Metadata } from "next";
import Image from "next/image";

// --- MÉTADONNÉES SEO --- //
export const metadata: Metadata = {
  title: "Studio Créatif – étude de cas",
  description:
    "Vitrine design pour une agence de création numérique : Next.js (App Router), Tailwind CSS, images JPG optimisées, SEO (Open Graph + JSON-LD).",
  alternates: { canonical: "/projets/studio-creatif" },
  openGraph: {
    type: "article",
    title: "Studio Créatif – étude de cas",
    description:
      "Vitrine design pour une agence de création numérique : Next.js (App Router), Tailwind CSS, images JPG optimisées, SEO (Open Graph + JSON-LD).",
    url: "https://vsimon59.vercel.app/projets/studio-creatif",
    siteName: "Studio Créatif",
    images: [
      {
        url: "/images/studio/studio-hero.png",
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
      "Vitrine design pour une agence de création numérique : Next.js (App Router), Tailwind CSS, images JPG optimisées, SEO (Open Graph + JSON-LD).",
    images: ["/images/studio/studio-hero.png"],
  },
};

// --- PAGE PRINCIPALE --- //
export default function Page() {
  return (
    <article className="prose md:prose-lg max-w-3xl mx-auto py-16 px-4">
      {/* TITRE + INTRO */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Studio Créatif</h1>
        <p className="text-gray-600 mt-3">
          Vitrine design pour une agence de création numérique. Développée avec{" "}
          <strong>Next.js (App Router)</strong> et{" "}
          <strong>Tailwind CSS</strong>, ce projet met en avant la performance,
          le design systémique et le SEO sémantique (Open Graph + JSON-LD).
        </p>
      </header>

      {/* IMAGE PRINCIPALE */}
      <Image
        src="/images/studio/studio-hero.png"
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
            <strong>Optimisation des médias</strong> : formats JPG, lazy loading,
            tailles adaptées.
          </li>
          <li>
            <strong>Méta-données enrichies</strong> : Open Graph, Twitter et
            JSON-LD.
          </li>
        </ul>
      </section>

      {/* RÉSULTATS */}
      <section>
        <h2>Résultats</h2>
        <p>
          Le site obtient un score Lighthouse élevé : <br />
          <strong>Performance :</strong> 95+ ·{" "}
          <strong>Accessibilité :</strong> 100 · <strong>SEO :</strong> 100
        </p>
      </section>

      {/* GALERIE D’IMAGES */}
      <section>
        <section>
          <h2>Galerie</h2>
          <div className="grid md:grid-cols-2 gap-6 not-prose">
            <Image
              src="/images/studio/studio-home.png"
              alt="Aperçu – page d'accueil du site Studio Créatif"
              className="rounded-xl opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards] [animation-delay:0.1s]"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            <Image
              src="/images/studio/studio-hero.png"
              alt="Aperçu – page d'accueil du projet Studio Créatif"
              className="rounded-xl opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards] [animation-delay:0.3s]"
              width={1400}
              height={900}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
            <Image
              src="/images/studio/studio-portfolio.png"
              alt="Aperçu – page portfolio du site Studio Créatif"
              className="rounded-xl opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards] [animation-delay:0.5s]"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </section>



      </section>

      {/* DONNÉES STRUCTURÉES (JSON-LD) */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            headline: "Studio Créatif – étude de cas",
            about:
              "Vitrine Next.js (App Router), Tailwind CSS, images JPG optimisées, SEO (Open Graph + JSON-LD).",
            image: [
              "/images/studio/studio-hero.png",
              "/images/studio/studio-home.png",
              "/images/studio/studio-portfolio.png",
            ],
            author: {
              "@type": "Person",
              name: "Victor Simon",
              url: "https://vsimon59.vercel.app",
            },
            publisher: {
              "@type": "Organization",
              name: "Studio Créatif",
              logo: "/logo.svg",
            },
            inLanguage: "fr-FR",
          }),
        }}
      />
    </article>
  );
}
