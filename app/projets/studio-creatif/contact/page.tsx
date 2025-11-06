import type { Metadata } from "next";
import ContactForm from "./ContactForm.client";

export const metadata: Metadata = {
  title: "Contact — Studio Créatif",
  description:
    "Parlez-nous de votre projet web : site vitrine, e-commerce, portfolio ou refonte.",
};

export default function ContactStudioCreatifPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-indigo-400">
          Contact — Studio Créatif
        </h1>

        <p className="mt-3 text-neutral-300">
          Donnez le contexte, les objectifs et les contraintes. On vous répond vite avec une approche claire.
        </p>

        <div className="mt-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
