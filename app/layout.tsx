import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

// --- POLICE GLOBALE --- //
const inter = Inter({ subsets: ["latin"] });

// --- INFORMATIONS DU SITE --- //
const site = {
  name: "Studio créatif",
  url: "https://vsimon59.vercel.app",
  description:
    "Studio de design & dev : identités visuelles, sites web, contenu et campagnes — rapide, modulaire et éco-conçu.",
  locale: "fr_FR",
  twitter: "@vsimon",
};

// --- MÉTADONNÉES --- //
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
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitter,
    title: `${site.name} – design & dev`,
    description: site.description,
    images: ["/opengraph-image.png"],
  },
};

// --- LAYOUT GLOBAL --- //
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Données structurées Schema.org (Organization)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.svg`,
    sameAs: [
      "https://www.linkedin.com/in/vsimon",
      "https://www.instagram.com/vsimon",
    ],
  };

  return (
    <html lang="fr">
      {/* ✅ Appliquer la classe de la police ici, côté serveur */}
      <body className={inter.className}>
        {children}

        {/* Données structurées JSON-LD (évite les mismatches) */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
