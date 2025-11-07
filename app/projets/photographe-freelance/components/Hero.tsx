import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Image d’arrière-plan avec filtre chaud */}
      <div className="absolute inset-0">
        <Image
          src="/images/photographe-freelance.jpg"
          alt="Photographe freelance - site vitrine"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Contenu centré */}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-36 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-neutral-100 drop-shadow-md">
           <span className="text-amber-400">Photographe freelance</span>
        </h1>

        <p className="mt-6 text-neutral-200 text-lg max-w-2xl mx-auto">
          Une atmosphère lumineuse et naturelle pour révéler votre univers visuel
          et valoriser votre travail sous son meilleur angle.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#aperçu"
            className="inline-flex items-center rounded-full bg-amber-500/90 hover:bg-amber-400 text-neutral-900 px-6 py-3 font-medium shadow-lg shadow-amber-900/20 transition"
          >
            Voir la galerie
          </a>
        
        </div>
      </div>
    </section>
  );
}
