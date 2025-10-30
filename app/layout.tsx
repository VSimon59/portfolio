// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const site = {
  name: "Verriele Simon – Portfolio",
  url: "https://vsimon59.vercel.app",
  description:
    "Portfolio de Victor Simon – développeur front-end et designer. Projets : Studio Créatif, Photographe Freelance, Artisan Plombier.",
  locale: "fr_FR",
  twitter: "@vsimon",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
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
    title: site.name,
    description: site.description,
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organization = {
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
      <body className="antialiased bg-white text-neutral-900">
        {/* --- NAVIGATION (simple, au besoin) --- */}
        <header className="py-4 border-b">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
            <a href="/" className="font-bold text-lg hover:text-blue-600">
              {site.name}
            </a>
            <nav className="space-x-6 text-sm text-neutral-700">
              <a href="#projets" className="hover:text-blue-600">
                Projets
              </a>
              <a
                href="https://github.com/VSimon59/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                Code source
              </a>
            </nav>
          </div>
        </header>

        {/* --- CONTENU PRINCIPAL --- */}
        {children}

        {/* --- PIED DE PAGE --- */}
        <footer className="py-10 border-t mt-20 text-center text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} Victor Simon – Portfolio. Tous droits réservés.
          </p>
        </footer>

        {/* --- JSON-LD pour SEO --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
