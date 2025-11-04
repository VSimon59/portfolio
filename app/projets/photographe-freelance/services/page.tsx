import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services — Photographe freelance | VSIMON",
  description:
    "Découvrez les prestations photo proposées : portraits, mariages et shootings produits, dans un style naturel et chaleureux.",
};

const services = [
  {
    title: "Portrait",
    desc: "Des portraits naturels et authentiques, réalisés en lumière douce. L’objectif : révéler votre personnalité sans artifice.",
    img: "/images/studio-site/service-portrait.jpg",
  },
  {
    title: "Mariage",
    desc: "Un reportage complet du jour J, immortalisant chaque émotion et détail, avec une esthétique lumineuse et sincère.",
    img: "/images/studio-site/service-mariage.jpg",
  },
  {
    title: "Produit",
    desc: "Des mises en valeur précises et élégantes de vos produits, parfaites pour le e-commerce, les réseaux ou la presse.",
    img: "/images/studio-site/service-produit.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-amber-400">
            Services photographiques
          </h1>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto text-lg">
            Chaque séance est conçue comme une rencontre entre la lumière, le
            regard et l’instant. Trois univers pour trois façons d’exprimer votre histoire.
          </p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <li
              key={s.title}
              className="relative group overflow-hidden rounded-2xl border border-neutral-800"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={s.img}
                  alt={`${s.title} — illustration`}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10" />
              </div>

              {/* Contenu */}
              <div className="relative z-10 p-6 flex min-h-[300px] flex-col justify-end">
                <h2 className="text-2xl font-semibold text-amber-400">
                  {s.title}
                </h2>
                <p className="mt-3 text-neutral-200 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
