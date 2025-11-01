import type { Metadata } from "next";

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
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Créatif – Contact",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-neutral-50">
      <div className="max-w-xl w-full bg-white shadow-sm border rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-center">Entrons en contact</h1>
        <p className="text-neutral-600 text-center mb-8">
          Une idée, un projet, ou simplement une question ? Laissez-moi un message
          et je vous répondrai rapidement.
        </p>

        {/* FORMULAIRE FORMSPREE */}
        <form
          action="https://formspree.io/f/xjkppzgj" // ← remplace par ton ID Formspree
          method="POST"
          className="space-y-6"
        >
          {/* CHAMP CACHÉ DE REDIRECTION */}
          <input
            type="hidden"
            name="_redirect"
            value="https://vsimon59.vercel.app/projets/studio-creatif/thank-you"
          />

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
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-3 rounded-md hover:bg-neutral-800 transition"
          >
            Envoyer le message
          </button>
        </form>

        {/* AUTRES MOYENS DE CONTACT */}
        <div className="mt-8 text-center text-sm text-neutral-600">
          <p>ou contactez-moi directement :</p>
          <p className="mt-1">
            <a
              href="mailto:contact@exemple.com"
              className="text-blue-600 hover:underline"
            >
              contact@exemple.com
            </a>
          </p>
          <p className="mt-1">
            <a
              href="tel:+33612345678"
              className="text-blue-600 hover:underline"
            >
              +33 6 12 34 56 78
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
