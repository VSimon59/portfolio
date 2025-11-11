export default function ApercuStudioCreatif() {
  return (
    <section className="relative overflow-hidden">
      {/* Fond sombre harmonisé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/textures/pixel-grid.png')] bg-repeat" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">
        <div className="inline-block">
          <h1
            className="text-3xl md:text-4xl font-semibold tracking-tight"
            style={{ color: "rgb(165 180 252)" }}
          >
            Studio Créatif
          </h1>
          <div
            className="h-0.5 w-16 mt-2 rounded-full"
            style={{ backgroundColor: "rgb(165 180 252)" }}
          />
        </div>

        <div className="mt-6 max-w-3xl text-gray-200 leading-relaxed space-y-4">
          <p>
            <strong>Développeur web & créatif indépendant</strong>, je conçois des
            sites modernes, clairs et performants, pensés pour offrir la meilleure
            expérience utilisateur possible.
          </p>
          <p>
            Fort d’un DEUST en développement web & web design,
            j’allie créativité et rigueur technique pour donner vie à des projets
            sur mesure. Chaque réalisation repose sur un équilibre entre esthétique,
            accessibilité et performance.
          </p>
          <p>
            Passionné par le design et les expériences numériques immersives, je
            m’inspire de l’univers interactif pour imaginer des interfaces uniques —
            sobres, lisibles, mais toujours marquantes.
          </p>
          <p>
            Ici, tu découvriras mes projets, mes expérimentations et les processus
            qui donnent forme à mon approche du web.
          </p>
        </div>
      </div>
    </section>
  );
}
