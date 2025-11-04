import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Performances — Photographe freelance | VSIMON",
  description: "Détails SEO technique et performances : Open Graph, schema.org, Core Web Vitals.",
};

export default function SeoPerfPage() {
  const items = [
    { k: "Core Web Vitals", v: "LCP < 1.1s · CLS < 0.02 · INP < 200ms", d: "Images locales optimisées, cache headers, tailles responsives." },
    { k: "SEO technique", v: "title/description, Open Graph, sitemap, robots", d: "Balises propres par page, images locales OG." },
    { k: "Données structurées", v: "Article + LocalBusiness", d: "Marquage JSON-LD sur la home ou la page contact." },
    { k: "Accessibilité", v: "Contrastes AA, focus visibles", d: "Sémantique claire, alt pertinents, zones cliquables." },
  ];

  return (
    <section className="pt-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">SEO & Performances</h1>
        <p className="mt-2 text-neutral-300">
          Ce projet charge vite, se référence proprement, et reste accessible. Voici ce qui est mis en place.
        </p>
      </header>

      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((it) => (
          <li key={it.k} className="rounded-2xl border border-neutral-800 p-5 bg-neutral-900/40">
            <div className="text-sm text-neutral-400">{it.k}</div>
            <div className="text-lg font-medium mt-1">{it.v}</div>
            <p className="text-neutral-300 mt-2">{it.d}</p>
          </li>
        ))}
      </ul>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Exemple JSON-LD (LocalBusiness)</h2>
        <pre className="mt-2 overflow-x-auto rounded-xl border border-neutral-800 p-4 text-sm bg-neutral-950">{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nom du photographe",
  "image": "https://ton-domaine.fr/images/photographe-freelance.jpg",
  "url": "https://ton-domaine.fr",
  "address": { "@type": "PostalAddress", "addressLocality": "Calais", "addressCountry": "FR" },
  "telephone": "+33 6 00 00 00 00",
  "areaServed": "Hauts-de-France",
  "priceRange": "€€"
}`}</pre>
        <p className="text-neutral-400 text-sm mt-2">
          À injecter via <code>{`<script type="application/ld+json">`}</code> dans la page concernée.
        </p>
      </section>
    </section>
  );
}
