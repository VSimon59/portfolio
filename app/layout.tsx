// app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const site = {
  name: "Studio Créatif",
  url: "https://vsimon59.vercel.app", // remplace par ton domaine si besoin
  description:
    "Studio de design & dev : identités visuelles, sites web, contenu et campagnes — rapide, modulaire et éco-conçu.",
  locale: "fr_FR",
  twitter: "@vsimon", // laisse vide si pas de compte
  ogImage: "/opengraph-image.jpg", // JPG placé dans /public
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – design & dev`,
    template: `%s – ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} – design & dev`,
    description: site.description,
    url: site.url,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Studio Créatif – design & développement",
      },
    ],
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitter,
    title: `${site.name} – design & dev`,
    description: site.description,
    images: [site.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // Données structurées globales (Organization)
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.svg`,
    sameAs: [
      "https://github.com/VSimon59",
      "https://www.instagram.com/vsimon",
      "https://www.linkedin.com/in/vsimon",
    ],
  };

  return (
    <html lang="fr">
      <body>
        {children}

        {/* JSON-LD global */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </body>
    </html>
  );
}
