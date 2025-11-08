import Link from "next/link";

export const metadata = {
  title: "Offres — Studio Créatif",
  description:
    "Forfaits clairs pour identité visuelle, pixel art et web interactif — dans une ambiance studio sobre et cohérente.",
};

const ACCENT = "rgb(165 180 252)";

const OFFRES = [
  {
    id: "identite",
    titre: "Identité visuelle",
    intro:
      "Logo, palette, typographies et règles d’usage. Dossier synthèse prêt à l’emploi.",
    livrables: [
      "Logo (SVG/PNG), variantes & monochrome",
      "Guide couleurs & typographies",
      "Mini charte (PDF) et exports sociaux",
    ],
    delai: "2–3 semaines",
    a_partir_de: "à partir de 690€",
  },
  {
    id: "pixel-art",
    titre: "Pixel art & animation",
    intro:
      "Sprites, décors, objets, effets et petites animations pour univers ludiques.",
    livrables: [
      "Spritesheets (PNG) + grille & tailles au choix",
      "Animations clés (idle, run, hit…)",
      "Dossier d’export organisé",
    ],
    delai: "selon volume (1–4 semaines)",
    a_partir_de: "sur devis",
  },
  {
    id: "web-interactif",
    titre: "Web interactif",
    intro:
      "Modules et pages interactives en React/Next.js, avec performances et accessibilité.",
    livrables: [
      "Intégration responsive",
      "Animations discrètes & chargement optimisé",
      "Déploiement & documentation courte",
    ],
    delai: "2–5 semaines",
    a_partir_de: "à partir de 1 290€",
  },
];

export default function OffresPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Fond studio sombre harmonisé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/textures/pixel-grid.png')] bg-repeat" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12">
        {/* Titre + intro */}
        <header className="max-w-3xl">
          <div className="inline-block">
            <h1
              className="text-3xl md:text-4xl font-semibold tracking-tight"
              style={{ color: ACCENT }}
            >
              Offres
            </h1>
            <div className="h-0.5 w-16 mt-2 rounded-full" style={{ backgroundColor: ACCENT }} />
          </div>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Des formules claires et adaptées&nbsp;: identité visuelle, pixel art et web interactif.
            Chaque projet commence par un échange rapide pour cadrer objectifs et livrables.
          </p>
        </header>

        {/* Cartes offres — translucides + bords fins */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {OFFRES.map((o) => (
            <section
              key={o.id}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-[0_1px_1px_rgba(0,0,0,.15),0_16px_40px_-24px_rgba(0,0,0,.45)]"
            >
              <h2 className="text-xl font-semibold" style={{ color: ACCENT }}>
                {o.titre}
              </h2>
              <p className="mt-2 text-gray-200">{o.intro}</p>

              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {o.livrables.map((l, i) => (
                  <li key={i} className="pl-3">
                    <span className="mr-2 inline-block h-[3px] w-3 align-middle rounded-full" style={{ backgroundColor: ACCENT }} />
                    {l}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-gray-200">
                  Délai&nbsp;: {o.delai}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium text-gray-100">
                  {o.a_partir_de}
                </span>
              </div>

              <div className="mt-6 flex gap-2">
                <Link
                  href={`/projets/studio-creatif/contact?sujet=${encodeURIComponent(o.titre)}`}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-gray-900 hover:opacity-90"
                  style={{ backgroundColor: ACCENT }}
                >
                  Demander un devis
                </Link>
                <Link
                  href="/projets/studio-creatif/projets"
                  className="rounded-xl border border-white/10 bg-white/0 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-white/5"
                >
                  Voir des projets
                </Link>
              </div>
            </section>
          ))}
        </div>

        {/* Bloc Process & garanties — même traitement visuel */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-[0_1px_1px_rgba(0,0,0,.15),0_16px_40px_-24px_rgba(0,0,0,.45)]">
          <h3 className="text-lg font-semibold" style={{ color: ACCENT }}>
            Process & garanties
          </h3>
          <div className="mt-3 grid gap-4 md:grid-cols-3 text-sm">
            {[
              {
                t: "Cadrage rapide",
                d: "Atelier de 30–45 min pour clarifier objectifs, audience et livrables.",
              },
              {
                t: "Transparence",
                d: "Devis clair, jalons définis, points d’étape planifiés.",
              },
              {
                t: "Qualité d’exécution",
                d: "Livrables propres, organisés, et documentés.",
              },
            ].map((b) => (
              <div key={b.t} className="rounded-xl border border-white/10 bg-white/0 p-4">
                <div className="font-medium text-gray-100">{b.t}</div>
                <p className="mt-1 text-gray-300 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
