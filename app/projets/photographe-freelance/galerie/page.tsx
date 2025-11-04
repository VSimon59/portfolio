import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Galerie — Photographe freelance | VSIMON",
  description: "Galerie locale : portraits urbains, scènes de rue, paysages et détails matériels.",
};

const images = [
  { src: "/images/studio-site/galerie-portrait.jpg", alt: "Jeu d’ombres et lumière dorée sur un mur urbain" },
  { src: "/images/studio-site/galerie-urbain.jpg", alt: "Rue pavée ancienne au coucher du soleil" },
  { src: "/images/studio-site/galerie-paysage.jpg", alt: "Prairie dorée au soleil couchant" },
  { src: "/images/studio-site/galerie-details.jpg", alt: "Appareil photo posé sur une table en lumière diffuse" },
  { src: "/images/studio-site/photographe-freelance.jpg", alt: "Image hero du projet photographe" },
];

export default function GaleriePage() {
  return (
    <section className="pt-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Galerie</h1>
        <p className="mt-2 text-neutral-300">
          Sélection d’images locales optimisées via <code>next/image</code>. Aucune ressource distante.
        </p>
      </header>

      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img) => (
          <li key={img.src} className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
            <div className="relative aspect-[3/2]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition will-change-transform group-hover:scale-[1.02]"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
