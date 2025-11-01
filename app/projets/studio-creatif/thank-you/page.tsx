import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merci – Studio Créatif",
  description: "Votre message a bien été envoyé.",
  robots: { index: false, follow: false }, // évite d’indexer la page
  alternates: { canonical: "/projets/studio-creatif/thank-you" },
  openGraph: {
    title: "Merci – Studio Créatif",
    description: "Votre message a bien été envoyé.",
    url: "https://vsimon59.vercel.app/projets/studio-creatif/thank-you",
    siteName: "Studio Créatif",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630 }],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merci – Studio Créatif",
    description: "Votre message a bien été envoyé.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center border rounded-2xl p-10 bg-white shadow-sm">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full grid place-items-center bg-green-100 text-green-700">
          ✓
        </div>
        <h1 className="text-3xl font-bold">Merci pour votre message</h1>
        <p className="text-neutral-600 mt-3">
          Je reviens vers vous très vite. En attendant, vous pouvez revenir à l’accueil du studio
          ou découvrir nos services.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            href="/projets/studio-creatif"
            className="px-5 py-2.5 rounded-md bg-black text-white hover:bg-neutral-800 transition"
          >
            Retour à l’accueil
          </Link>
          <Link
            href="/projets/studio-creatif/services"
            className="px-5 py-2.5 rounded-md border hover:bg-neutral-50 transition"
          >
            Voir les services
          </Link>
        </div>
      </div>
    </main>
  );
}
