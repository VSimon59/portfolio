"use client";
import Link from "next/link";

export default function ApercuStudioCreatif() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Fond artistique */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/textures/pixel-grid.png')] bg-repeat" />

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-6 text-center text-gray-100">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Studio Créatif
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Un atelier numérique où design, pixel art et interactivité se rencontrent
          pour créer des expériences web modernes et poétiques.
        </p>

        {/* Ligne de séparation */}
        <div className="mt-8 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Trois piliers */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Design & Direction artistique",
              desc: "Identités visuelles et interfaces au style affirmé, entre modernité et rétro-futurisme.",
            },
            {
              title: "Pixel Art & Animation",
              desc: "Création d’univers visuels, sprites et atmosphères inspirées du jeu vidéo et de la narration visuelle.",
            },
            {
              title: "Web interactif",
              desc: "Sites dynamiques, expérimentation artistique, et expériences sur mesure développées en React/Next.js.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 transition"
            >
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/projets/studio-creatif/projets"
            className="inline-block rounded-xl bg-cyan-400 px-6 py-3 text-gray-900 font-semibold hover:bg-cyan-300 transition"
          >
            Découvrir mes projets
          </Link>
        </div>
      </div>
    </section>
  );
}
