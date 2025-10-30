// app/studio-creatif/v2/layout.tsx
import type { Metadata } from "next";

const site = {
  name: "Studio créatif",
  baseUrl: "https://vsimon59.vercel.app",
  path: "/studio-creatif/v2",
  description:
    "Version optimisée : Next/Image, SEO (Open Graph + JSON-LD), médias JPG, lazy, tailles adaptées.",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: "Studio créatif — V2 (optimisée)",
  description: site.description,
  alternates: { canonical: site.path },
  openGraph: {
    type: "website",
    url: site.path,
    siteName: site.name,
    title: "Studio créatif — V2 (optimisée)",
    description: site.description,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: site.name }],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio créatif — V2 (optimisée)",
    description: site.description,
    images: ["/opengraph-image.png"],
  },
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: `${site.baseUrl}${site.path}`,
    logo: `${site.baseUrl}/logo.svg`,
  };

  return (
    <>
      <div className="px-6 md:px-12 lg:px-24 py-6 border-b bg-neutral-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/studio-creatif" className="font-semibold">← Comparatif</a>
          <span className="text-sm font-medium text-green-700">V2 — Optimisée</span>
        </div>
      </div>
      {children}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
    </>
  );
}
