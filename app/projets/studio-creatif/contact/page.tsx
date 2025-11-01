"use client";

import type { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Contact – Studio Créatif",
  description:
    "Contactez Studio Créatif pour discuter de votre projet : design, développement web, performance et SEO.",
  alternates: { canonical: "/projets/studio-creatif/contact" },
  openGraph: {
    title: "Contact – Studio Créatif",
    description:
      "Discutons de votre projet web : design, performance et identité numérique.",
    url: "https://vsimon59.vercel.app/projets/studio-creatif/contact",
    siteName: "Studio Créatif",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      // Remplace XXXXXXXX par ton ID Formspree
      const res = await fetch("https://formspree.io/f/xjkppzgj", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (res.ok) {
        window.location.href = "/projets/studio-creatif/thank-you";
      } else {
        setError("Une erreur est survenue. Réessayez plus tard.");
      }
    } catch (err) {
      setError("Impossible d’envoyer le message. Vérifiez votre connexion.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-neutral-50">
      <div className="max-w-xl w-full bg-white shadow-sm border rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-center">Entrons en contact</h1>
        <p className="text-neutral-600 text-center mb-8">
          Une idée, un projet, ou simplement une question ? Laissez-moi un message
          et je vous répondrai rapidement.
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Nom
            </label>
            <input
              id="name"
              name="Nom"
              type="text"
              required
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="Email"
              type="email"
              required
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="votremail@exemple.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="Message"
              rows={5}
              required
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Décrivez votre projet ou votre question..."
            />
          </div>

          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-black text-white font-medium py-3 rounded-md hover:bg-neutral-800 transition disabled:opacity-60"
          >
            {submitting ? "Envoi en cours…" : "Envoyer le message"}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-neutral-600">
          <p>ou contactez-moi directement :</p>
          <p className="mt-1">
            <a href="mailto:contact@exemple.com" className="text-blue-600 hover:underline">
              contact@exemple.com
            </a>
          </p>
          <p className="mt-1">
            <a href="tel:+33612345678" className="text-blue-600 hover:underline">
              +33 6 12 34 56 78
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
