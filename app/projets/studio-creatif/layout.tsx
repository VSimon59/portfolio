// app/projets/studio-creatif/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Studio Créatif – design & dev",
    template: "%s – Studio Créatif",
  },
  description:
    "Sous-site vitrine : Next.js App Router, Tailwind, images optimisées (JPG), SEO (Open Graph, Twitter Cards, JSON-LD).",
  alternates: { canonical: "/projets/studio-creatif" },
  openGraph: {
    type: "website",
    url: "https://vsimon59.vercel.app/projets/studio-creatif",
    siteName: "Studio Créatif",
    title: "Studio Créatif – design & dev",
    description:
      "Site vitrine moderne et performant : Next.js, Tailwind, SEO et optimisation des médias.",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630 }],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Créatif – design & dev",
    description:
      "Site vitrine moderne et performant : Next.js, Tailwind, SEO et optimisation des médias.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function StudioCreatifLayout({ children }: { children: ReactNode }) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Studio Créatif",
    url: "https://vsimon59.vercel.app/projets/studio-creatif",
    logo: "/logo.svg",
    sameAs: [
      "https://www.linkedin.com/in/vsimon",
      "https://www.instagram.com/vsimon",
    ],
  };

  return (
    <section className="min-h-screen bg-white text-neutral-900">
      <header className="border-b bg-white/70 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center gap-5 text-sm">
          <Link href="/" className="font-semibold hover:text-black">
            Accueil
          </Link>
        
          <Link
            href="/projets/studio-creatif"
            className="text-neutral-900 font-medium"
          >
            Studio Créatif
          </Link>
          {/* Ajoute d’autres liens internes si tu crées des sous-pages locales */}
          {/* <Link href="/projets/studio-creatif/services" className="text-neutral-600 hover:text-black">Services</Link> */}
          {/* <Link href="/projets/studio-creatif/contact" className="text-neutral-600 hover:text-black">Contact</Link> */}
        </nav>
      </header>

      {children}

      <footer className="mt-16 border-t text-center text-sm text-neutral-500 py-8">
        © {new Date().getFullYear()} Studio Créatif — Verriele Simon
      </footer>

      {/* JSON-LD Organization (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
    </section>
  );
}
