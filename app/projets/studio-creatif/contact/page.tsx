import type { Metadata } from "next";
import ContactForm from "./ContactForm.client";

export const metadata: Metadata = {
  title: "Contact – Studio Créatif",
  description:
    "Contactez Studio Créatif pour discuter de votre projet : design, développement web, performance et SEO.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-amber-400">
          Contact
        </h1>
        <p className="mt-3 text-neutral-300">
          Dites-m’en plus sur votre projet. Je reviens vers vous rapidement.
        </p>

        <div className="mt-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
