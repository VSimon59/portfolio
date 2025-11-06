import Link from "next/link";

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 text-center rounded-3xl mt-16">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
        Pourquoi choisir <span className="text-indigo-400">Studio Créatif</span> ?
      </h2>
      <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
        Parce que chaque pixel compte. Nous unissons design, technique et stratégie pour livrer
        des sites aussi performants qu’élégants — sans compromis.
      </p>
      <div className="mt-8">
        <Link
          href="/projets/studio-creatif/contact"
          className="inline-flex items-center rounded-full bg-indigo-500/90 hover:bg-indigo-400 text-neutral-950 px-8 py-3 font-medium shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition-all"
        >
          Démarrer mon projet
        </Link>
      </div>
    </section>
  );
  <WhyUsSection />
}
