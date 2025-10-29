import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Photographe freelance | Portfolio",
  description:
    "Site vitrine moderne et élégant pour un photographe freelance. Présentation claire des services et portfolio visuel immersif.",
};

export default function PhotographeFreelancePage() {
  return (
    <main className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-neutral-50">
      <article className="max-w-4xl mx-auto text-neutral-800">
        {/* Image principale */}
        <div className="aspect-video mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/photographe-freelance.jpg"
            alt="Aperçu du projet Photographe freelance"
            width={1200}
            height={675}
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        </div>

        {/* Titre + description */}
        <h1 className="text-3xl font-bold mb-4 text-blue-600">
          Photographe freelance
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          Un site vitrine minimaliste et immersif pour un photographe freelance,
          conçu pour mettre en valeur ses plus beaux clichés et attirer de
          nouveaux clients.
        </p>

        <p className="text-neutral-600 mb-6">
          L’accent est mis sur la qualité visuelle et la rapidité du chargement
          grâce à l’optimisation des médias (formats WebP/JPG et lazy loading).
          Le design s’adapte parfaitement à toutes les tailles d’écran, tout en
          conservant une mise en page élégante et épurée.
        </p>

        <p className="text-neutral-600 mb-6">
          Le projet intègre également des métadonnées Open Graph et un balisage
          JSON-LD pour un référencement optimal, garantissant une visibilité
          accrue sur les réseaux sociaux et moteurs de recherche.
        </p>
      </article>
    </main>
  );
}
