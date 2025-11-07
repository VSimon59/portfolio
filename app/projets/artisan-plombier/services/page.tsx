import Section from "@artisan-plombier/Section";
import Link from "next/link";

export const metadata = {
  title: "Services plomberie — Dépannage, débouchage, chauffe-eau | Artisan à Calais",
  description:
    "Services de plomberie à Calais : urgences, débouchage, recherche de fuite, entretien chauffe-eau, robinetterie, petits travaux. Intervention soignée et devis clair.",
};

type ServiceBloc = {
  id: string;
  titre: string;
  intro: string;
  points: string[];
  indicatif?: string;
  faq?: { q: string; a: string }[];
};

const SERVICES: ServiceBloc[] = [
  {
    id: "depannage",
    titre: "Dépannage d’urgence",
    intro:
      "Intervention prioritaire sur fuites, ruptures, chasses d’eau défectueuses et pannes courantes. Diagnostic rapide, sécurisation et remise en service.",
    points: [
      "Coupe d’eau, diagnostic, réparation ou provisoire sécurisé",
      "Rapport simple de fin d’intervention",
      "Conseils d’entretien pour éviter la récidive",
    ],
    indicatif: "Main d’œuvre : à partir de 60€ HT",
    faq: [
      { q: "Intervenez-vous le jour même ?", a: "Selon créneau et gravité : oui, un créneau prioritaire est proposé." },
      { q: "Proposez-vous un devis avant déplacement ?", a: "Un ordre de prix indicatif est donné au téléphone, puis devis clair sur place." },
    ],
  },
  {
    id: "debouchage",
    titre: "Débouchage",
    intro:
      "Débouchage mécanique (pompe, furet) ou renforcé (hydrocureuse si nécessaire) pour WC, éviers, douches et réseaux domestiques.",
    points: [
      "Localisation du bouchon et débouchage adapté",
      "Contrôle d’écoulement après intervention",
      "Préconisations évitement (graisses, calcaire, pente…)",
    ],
    indicatif: "Débouchage standard : dès 90€ HT",
    faq: [
      { q: "Hydrocureuse incluse ?", a: "Seulement si nécessaire ; un devis ajusté est proposé avant l’utilisation." },
      { q: "Et si le bouchon revient ?", a: "Un contrôle des causes racines est proposé (pente, joints, dépôt calcaire)." },
    ],
  },
  {
    id: "chauffe-eau",
    titre: "Chauffe-eau (entretien / remplacement)",
    intro:
      "Entretien, détartrage, remplacement d’anodes et diagnostic des pannes courantes. Proposition de remplacement si l’appareil est en fin de vie.",
    points: [
      "Détartrage, contrôle sécurité et raccordements",
      "Mesure de la pression et réglages si besoin",
      "Conseils de consommation et longévité",
    ],
    indicatif: "Entretien : dès 110€ HT — Remplacement : sur devis",
    faq: [
      { q: "Quel délai pour un remplacement ?", a: "Sous 48–72h en général, selon modèle et disponibilité." },
      { q: "Fourniture ou client ?", a: "Au choix : fourniture pro adaptée ou matériel fourni par vos soins." },
    ],
  },
  {
    id: "robinetterie",
    titre: "Robinetterie & petits travaux",
    intro:
      "Remplacement de mitigeurs, flexibles, siphons, mécanismes de chasse. Petites adaptations de tuyauterie cuivre/PEX et étanchéité.",
    points: [
      "Remplacement propre, respect de l’existant",
      "Références compatibles et durables",
      "Vérification étanchéité en fin d’intervention",
    ],
    indicatif: "Remplacement mitigeur : dès 120€ HT (hors fourniture)",
  },
  {
    id: "recherche-fuite",
    titre: "Recherche de fuite",
    intro:
      "Méthodes non destructives privilégiées (selon accès) : mise en pression, écoute, colorant, inspection locale. Rapport simple et solution proposée.",
    points: [
      "Délimitation de zone et test progressif",
      "Intervention ciblée pour limiter les dégâts",
      "Coordination avec autres corps d’état si besoin",
    ],
    indicatif: "Recherche de fuite : dès 80€ HT",
  },
];

export default function ServicesPage() {
  return (
    <Section>
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">Services de plomberie</h1>
        <p className="mt-3 text-gray-700">
          Basé à Calais, j’interviens sur les urgences, l’entretien courant et les petits travaux. Chaque intervention
          fait l’objet d’un diagnostic clair et d’un devis transparent avant réalisation.
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1">Devis clair</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1">Intervention soignée</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1">Matériel professionnel</span>
        </div>
      </header>

      {/* Sommaire ancre rapide */}
      <nav className="mt-8 text-sm">
        <ul className="flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="rounded-xl border border-gray-200 bg-white px-3 py-1 hover:bg-gray-50"
              >
                {s.titre}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Blocs services */}
      <div className="mt-8 grid gap-6">
        {SERVICES.map((s) => (
          <section
            id={s.id}
            key={s.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-gray-900">{s.titre}</h2>
                <p className="mt-2 max-w-3xl text-gray-700">{s.intro}</p>
              </div>
              {s.indicatif && (
                <div className="shrink-0 rounded-xl bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200">
                  {s.indicatif}
                </div>
              )}
            </div>

            <ul className="mt-4 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
              {s.points.map((p, i) => (
                <li key={i} className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-2">
                  {p}
                </li>
              ))}
            </ul>

            {s.faq && s.faq.length > 0 && (
              <div className="mt-5 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
                {s.faq.map((f, i) => (
                  <details key={i} className="group p-4">
                    <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-gray-900">
                      {f.q}
                      <span className="text-gray-400 transition group-open:rotate-45">＋</span>
                    </summary>
                    <p className="pt-2 text-sm text-gray-700">{f.a}</p>
                  </details>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/projets/artisan-plombier/urgences"
                className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
              >
                Urgence
              </Link>
              <Link
                href="/projets/artisan-plombier/contact"
                className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Demander un devis
              </Link>
              <a
                href="tel:+33XXXXXXXXX"
                className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Appeler
              </a>
            </div>
          </section>
        ))}
      </div>

      {/* Bandeau “méthode & garanties” */}
      <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Méthode & garanties</h3>
        <div className="mt-3 grid gap-4 md:grid-cols-3 text-sm text-gray-700">
          <div>
            <div className="font-medium text-gray-900">Diagnostic clair</div>
            <p className="mt-1">
              Explication simple du problème et des options avant toute action.
            </p>
          </div>
          <div>
            <div className="font-medium text-gray-900">Transparence tarifaire</div>
            <p className="mt-1">
              Devis détaillé, pas de frais cachés. Fourniture au choix (client ou pro).
            </p>
          </div>
          <div>
            <div className="font-medium text-gray-900">Qualité d’exécution</div>
            <p className="mt-1">
              Travail propre, respect de l’existant, tests et contrôle en fin d’intervention.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
