import Section from "@artisan-plombier/Section";
import ContactForm from "../components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Devis & urgences | Artisan à Calais",
  description:
    "Demande de devis, message ou urgence plomberie. Réponse rapide selon créneau disponible.",
};

// Utilitaires
const str = (v: string | string[] | undefined) =>
  Array.isArray(v) ? (v[0] ?? "") : (v ?? "");

// 👇 Page async : on attend searchParams (Promise dans Next 15)
export default async function ContactPage({
  searchParams,
}: {
  // accepte le cas Promise exigé par les types générés par Next 15
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = (await searchParams) ?? {};

  const initial = {
    nom: str(sp.nom),
    email: str(sp.email),
    tel: str(sp.tel),
    adresse: str(sp.adresse),
    sujet: str(sp.sujet),
    urgence: str(sp.urgence),
    disponibilites: str(sp.disponibilites),
    message: str(sp.message),
  };

  return (
    <Section>
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-3 max-w-3xl text-gray-700">
        Décrivez votre besoin et vos disponibilités. Une réponse vous est apportée dans les meilleurs délais.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <ContactForm initial={initial} />
        <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="text-sm text-gray-600">Téléphone</div>
          <a href="tel:+33XXXXXXXXX" className="text-lg font-semibold text-gray-900">
            +33 7 66 29 22 58
          </a>
          <div className="mt-4 text-sm text-gray-600">Email</div>
          <a href="mailto:contact@exemple.fr" className="font-medium text-gray-900">
            simon.verriele@hotmail.fr
          </a>
          <div className="mt-4 text-sm text-gray-600">Horaires</div>
          <div className="text-gray-900">Lun–Ven 8h–19h, Sam 9h–13h</div>
        </aside>
      </div>
    </Section>
  );
}
