// app/studio-creatif/v2/page.tsx
import Image from "next/image";

export default function Page() {
  return (
    <main className="px-6 md:px-12 lg:px-24">
      <section className="max-w-6xl mx-auto py-14 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Studio créatif — V2 (optimisée)
        </h1>
        <p className="mt-4 text-lg text-neutral-700 max-w-3xl">
          Version optimisée : <strong>Next/Image</strong>, <strong>Tailwind</strong>,
          <strong> Open Graph</strong>, <strong>Twitter Cards</strong> et <strong>JSON-LD</strong>.
          Médias <strong>JPG/PNG</strong> avec lazy loading et tailles adaptées.
        </p>

        <div className="aspect-video overflow-hidden rounded-xl bg-neutral-100 mt-8 relative">
          <Image
            src="/images/studio-site/hero-v2.png"
            alt="Aperçu V2 — site vitrine optimisé"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 960px"
            className="object-cover"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-12 border-t">
        <h2 className="text-2xl md:text-3xl font-semibold">Objectifs réalisés</h2>
        <ul className="grid md:grid-cols-3 gap-6 mt-6">
          <li className="p-5 rounded-xl border">
            <h3 className="font-semibold">Vitesse & Web Vitals</h3>
            <p className="text-neutral-700 mt-2">LCP/CLS/INP maîtrisés, images optimisées.</p>
          </li>
          <li className="p-5 rounded-xl border">
            <h3 className="font-semibold">SEO enrichi</h3>
            <p className="text-neutral-700 mt-2">Open Graph, Twitter Cards, JSON-LD valides.</p>
          </li>
          <li className="p-5 rounded-xl border">
            <h3 className="font-semibold">Design modulaire</h3>
            <p className="text-neutral-700 mt-2">Composants réutilisables, mise en page fluide.</p>
          </li>
        </ul>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            headline: "Studio créatif — V2 (optimisée)",
            about:
              "Version optimisée du site vitrine : Next/Image, SEO (Open Graph + Twitter + JSON-LD), médias JPG/PNG.",
            inLanguage: "fr-FR",
            image: ["/images/studio-site/hero-v2.png"],
          }),
        }}
      />
    </main>
  );
}
