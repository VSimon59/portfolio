import Image from "next/image";

const images = [
  {
    src: "/images/studio-site/galerie-portrait.jpg",
    alt: "Jeu d’ombres sur mur urbain, lumière chaude",
  },
  {
    src: "/images/studio-site/galerie-urbain.jpg",
    alt: "Rue pavée dorée au coucher du soleil",
  },
  {
    src: "/images/studio-site/galerie-paysage.jpg",
    alt: "Prairie et collines baignées de lumière dorée",
  },
  {
    src: "/images/studio-site/galerie-details.jpg",
    alt: "Appareil photo en studio, lumière diffuse",
  },
];

export default function Gallery() {
  return (
    <section
      id="aperçu"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-900"
    >
      <header className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-amber-400">
          Aperçu du rendu
        </h2>
        <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
          Une sélection d’images illustrant le style et la lumière du projet :
          tons chauds, ambiance naturelle et compositions soignées.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <figure
            key={img.src}
            className="group relative overflow-hidden rounded-2xl border border-neutral-800"
          >
            <div className="relative aspect-[3/2]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
              />
              {/* Overlay chaud au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <figcaption className="absolute bottom-0 left-0 right-0 p-4 z-10 text-sm text-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {img.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
