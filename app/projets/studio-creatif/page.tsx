import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// --- MÉTADONNÉES SEO --- //
export const metadata: Metadata = {
  title: "Studio Créatif – design & développement",
  description:
    "Un site vitrine Next.js & Tailwind performant et éco-conçu. Optimisation des médias JPG, lazy loading, SEO Open Graph et JSON-LD.",
  alternates: { canonical: "/projets/studio-creatif" },
  openGraph: {
    type: "website",
    title: "Studio Créatif – design & développement",
    description:
      "Un site vitrine Next.js & Tailwind performant et éco-conçu. Optimisation des médias JPG, lazy loading, SEO Open Graph et JSON-LD.",
    url: "https://vsimon59.vercel.app/projets/studio-creatif",
    siteName: "Studio Créatif",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu du site Studio Créatif",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Créatif – design & développement",
    description:
      "Site vitrine moderne réalisé avec Next.js, Tailwind, SEO et optimisation des médias.",
    images: ["/opengraph-image.jpg"],
  },
};

// --- PAGE PRINCIPALE --- //
export default function StudioCreatifPage() {
  return (
    <article className="max-w-6xl mx-auto py-12 md:py-16 px-4">
      {/* HERO */}
      <section className="relative aspect-[16/9] w-full mb-12 md:mb-16 overflow-hidden rounded-2xl shadow-lg">
        <Image
          src="/images/studio-site/hero.jpg"
          alt="Aperçu — Studio Créatif moderne"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end items-start p-6 md:p-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Studio Créatif</h1>
          <p className="mt-3 text-base md:text-lg max-w-2xl text-white/90">
            Design & développement web — performance réelle, esthétique soignée et SEO sémantique.
          </p>
          {/* Boutons d’accès rapide aux pages */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/projets/studio-creatif/services" className="bg-white text-black px-5 py-2.5 rounded-md hover:bg-neutral-200 transition">
              Services
            </Link>
            <Link href="/projets/studio-creatif/projets" className="bg-black/80 text-white px-5 py-2.5 rounded-md hover:bg-black transition border border-white/20">
              Projets
            </Link>
            <Link
                  href="/projets/studio-creatif/a-propos"
                  className="px-5 py-2.5 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-sm"
            >
                  À propos
            </Link>

            <Link href="/projets/studio-creatif/contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 transition">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* OBJECTIFS (agencement cartes) */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Objectifs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border p-5 bg-white">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold">Vitesse & Core Web Vitals</h3>
            <p className="text-sm text-neutral-600 mt-1">
              Rendu rapide (App Router), lazy loading, tailles d’images adaptées pour une sensation de fluidité.
            </p>
          </div>
          <div className="rounded-xl border p-5 bg-white">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold">SEO propre</h3>
            <p className="text-sm text-neutral-600 mt-1">
              Open Graph, Twitter Cards et JSON-LD bien structurés pour un partage clair et un meilleur référencement.
            </p>
          </div>
          <div className="rounded-xl border p-5 bg-white">
            <div className="text-2xl mb-2">🌱</div>
            <h3 className="font-semibold">Design modulaire & éco-conçu</h3>
            <p className="text-sm text-neutral-600 mt-1">
              Système de composants Tailwind réutilisables, visuels sobres et coûts carbone limités.
            </p>
          </div>
        </div>
      </section>

      {/* APPROCHE TECHNIQUE */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Approche technique</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
          <li className="rounded-lg border p-4">
            <strong>Next.js App Router</strong> : architecture modulaire et SSR/ISR pour des chargements rapides.
          </li>
          <li className="rounded-lg border p-4">
            <strong>Tailwind CSS</strong> : design systémique, lisible et facile à maintenir.
          </li>
          <li className="rounded-lg border p-4">
            <strong>Optimisation médias</strong> : JPG, lazy loading et <code>sizes</code> précis via <code>next/image</code>.
          </li>
          <li className="rounded-lg border p-4">
            <strong>Méta-données</strong> : Open Graph, Twitter Cards & JSON-LD pour un SEO sémantique propre.
          </li>
        </ul>
      </section>

      {/* GALERIE */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Galerie</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <figure className="relative aspect-video rounded-xl overflow-hidden border">
            <Image
              src="/images/studio-site/work-1.jpg"
              alt="Aperçu – page d'accueil du site Studio Créatif"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              loading="lazy"
            />
          </figure>
          <figure className="relative aspect-video rounded-xl overflow-hidden border">
            <Image
              src="/images/studio-site/work-2.jpg"
              alt="Aperçu – page portfolio du site Studio Créatif"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* RÉSULTATS + CTA */}
      <section className="text-center">
        <div className="mb-8 inline-grid grid-cols-3 gap-4 text-left">
          <div className="rounded-lg border p-4">
            <div className="text-3xl font-semibold">95+</div>
            <div className="text-sm text-neutral-600">Performance</div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="text-3xl font-semibold">100</div>
            <div className="text-sm text-neutral-600">Accessibilité</div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="text-3xl font-semibold">100</div>
            <div className="text-sm text-neutral-600">SEO</div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          Envie d’un site rapide et élégant ?
        </h2>
        <Link
          href="/projets/studio-creatif/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-neutral-800 transition"
        >
          Discutons de votre projet
        </Link>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Studio Créatif – design & développement",
            description:
              "Site vitrine performant et éco-conçu, réalisé avec Next.js, Tailwind, et SEO avancé (Open Graph + JSON-LD).",
            image: [
              "/opengraph-image.jpg",
              "/images/studio-site/hero.jpg",
              "/images/studio-site/work-1.jpg",
              "/images/studio-site/work-2.jpg",
            ],
            author: {
              "@type": "Person",
              name: "Verriele Simon",
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
