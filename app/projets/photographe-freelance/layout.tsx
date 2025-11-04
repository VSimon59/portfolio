import Script from "next/script";

export default function PhotographeFreelanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schéma SEO (optionnel, tu peux le garder)
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Photographe Freelance VSIMON",
    "image": "https://vsimon59.vercel.app/images/photographe-freelance.jpg",
    "url": "https://vsimon59.vercel.app/projets/photographe-freelance",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calais",
      "addressCountry": "FR"
    },
    "telephone": "+33 6 00 00 00 00",
    "priceRange": "€€",
    "areaServed": "Hauts-de-France"
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Schéma SEO local (optionnel) */}
      <Script
        id="schema-localbusiness"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Contenu principal du projet */}
      <div className="pb-16">{children}</div>
    </div>
  );
}
