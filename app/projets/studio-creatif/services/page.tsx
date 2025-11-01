import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Identité visuelle, site vitrine Next.js, Tailwind, SEO (Open Graph, Twitter Cards, JSON-LD) et optimisation images.",
  alternates: { canonical: "/studio-creatif/services" },
};

export default function Services() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Services — Studio Créatif",
    url: "https://vsimon59.vercel.app/studio-creatif/services",
    inLanguage: "fr-FR",
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { emoji: "🎨", title: "Identité visuelle", text: "Logo, charte, typographies et univers de marque cohérent." },
          { emoji: "⚡", title: "Site vitrine performant", text: "Next.js App Router, Tailwind, lazy loading, tailles adaptées." },
          { emoji: "📈", title: "SEO & contenus", text: "Open Graph, Twitter Cards, JSON-LD, structure sémantique." },
        ].map((b) => (
          <div key={b.title} className="rounded-2xl border p-6 bg-white">
            <div className="text-3xl mb-2">{b.emoji}</div>
            <h2 className="font-semibold text-xl">{b.title}</h2>
            <p className="text-neutral-600 text-sm mt-2">{b.text}</p>
          </div>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
