import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projets",
  description: "Sélection : vitrine moderne, identité élégante, campagne digitale.",
  alternates: { canonical: "/studio-creatif/projets" },
};

const items = [
  { img: "/images/studio-site/work-1.jpg", title: "Interface fluide", desc: "UX/UI minimaliste, réactive." },
  { img: "/images/studio-site/work-2.jpg", title: "Identité élégante", desc: "Système visuel cohérent." },
  { img: "/images/studio-site/work-3.jpg", title: "Campagne digitale", desc: "Assets et déclinaisons." },
];

export default function Projets() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projets — Studio Créatif",
    url: "https://vsimon59.vercel.app/studio-creatif/projets",
    inLanguage: "fr-FR",
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Projets</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((p) => (
          <article key={p.title} className="group rounded-xl overflow-hidden border">
            <div className="relative aspect-video">
              <Image
                src={p.img}
                alt={`Aperçu du projet ${p.title}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw, 400px"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg">{p.title}</h2>
              <p className="text-sm text-neutral-600">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
