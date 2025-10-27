import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Simon Verriele — Développeur Front-End (React)",
  description:
    "Sites vitrines React orientés UX/UI : rapides, accessibles et soignés.",
  metadataBase: new URL("https://vsimon59.vercel.app"),
  openGraph: {
    title: "Simon Verriele — Front-End React",
    description:
      "Sites vitrines React orientés UX/UI : rapides, accessibles et soignés.",
    url: "https://vsimon59.vercel.app",
    siteName: "Portfolio vsimon59",
    type: "website",
  },
} satisfies import("next").Metadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-slate-200 antialiased">
        {children}
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Simon Verriele",
              url: "https://vsimon59.vercel.app",
              jobTitle: "Développeur Front-End",
              sameAs: [
                "https://github.com/VSimon59",
                "https://www.linkedin.com/in/simon-verriele/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
