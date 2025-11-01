import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Studio créatif dirigé par Verriele Simon : design systémique, performance et éco-conception.",
  alternates: { canonical: "/studio-creatif/a-propos" },
};

export default function APropos() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "À propos — Studio Créatif",
    url: "https://vsimon59.vercel.app/studio-creatif/a-propos",
    inLanguage: "fr-FR",
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">À propos</h1>

      <div className="flex items-start gap-6">
        <div className="relative w-28 h-28 rounded-full overflow-hidden border">
          <Image
            src="/images/avatar.png"
            alt="Verriele Simon"
            fill
            className="object-cover"
            sizes="112px"
          />
        </div>
        <p className="text-neutral-700">
          Je m’appelle <strong>Verriele Simon</strong>. J’aide les marques et
          indépendants à créer des expériences web claires, rapides et
          désirables. Next.js, Tailwind et SEO sémantique sont au cœur de mon approche.
        </p>
      </div>

      <ul className="mt-8 grid md:grid-cols-2 gap-4 text-sm">
        <li className="rounded-lg border p-4">✅ Core Web Vitals excellents</li>
        <li className="rounded-lg border p-4">✅ Accessibilité & sémantique</li>
        <li className="rounded-lg border p-4">✅ Design éco-conçu</li>
        <li className="rounded-lg border p-4">✅ Maintenance simple</li>
      </ul>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
