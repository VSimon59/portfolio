

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Artisan Plombier | Portfolio",
  description: "Présentation claire et rassurante pour un artisan plombier local.",
};


export default function ArtisanPlombierPage() {
  return (
    <main className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-neutral-50">
      <article className="max-w-4xl mx-auto text-neutral-800">
        <div className="aspect-video mb-8 overflow-hidden rounded-xl">
          <Image
            src="/images/artisan-plombier.jpg"
            alt="Aperçu du projet Plomberie locale"
            width={1200}
            height={675}
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        </div>

        <h1 className="text-3xl font-bold mb-4 text-blue-600">Artisan plombier</h1>
        <p className="text-lg leading-relaxed mb-6">
          Ce site vitrine a été conçu pour inspirer confiance et refléter la qualité du travail d’un artisan plombier local.
        </p>

        <p className="text-neutral-600 mb-6">
          L’objectif était de proposer une interface simple, claire et rassurante, avec des informations accessibles rapidement
          et un design adapté aux appareils mobiles.
        </p>
      </article>
    </main>
  );
}

