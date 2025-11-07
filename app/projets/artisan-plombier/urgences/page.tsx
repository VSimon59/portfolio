import Section from "@artisan-plombier/Section";
import Link from "next/link";

export const metadata = {
  title: "Urgences plomberie — Intervention prioritaire | Artisan à Calais",
  description:
    "Fuite d’eau, WC bouchés, panne de chauffe-eau : intervention prioritaire à Calais et alentours. Mesures immédiates, diagnostic rapide, devis clair.",
};

export default function UrgencesPage() {
  return (
    <Section>
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">Urgences plomberie</h1>
        <p className="mt-3 text-gray-700">
          Fuite d’eau, WC bouchés, ballon en panne ou surpression&nbsp;: une intervention prioritaire est proposée
          en fonction des créneaux disponibles. Diagnostic rapide, sécurisation et remise en service si possible.
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1">Calais et alentours</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1">Créneaux prioritaires</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1">Devis clair</span>
        </div>
      </header>

      {/* Bandeau d’action rapide */}
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="text-sm uppercase tracking-wide text-gray-500">Besoin immédiat</div>
            <div className="mt-1 text-xl font-semibold text-gray-900">
              Contact direct pour une prise en charge prioritaire
            </div>
            <p className="mt-1 text-sm text-gray-600">
              Indiquez le problème, l’adresse, et une photo si possible pour accélérer le diagnostic.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="tel:+33XXXXXXXXX"
              className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Appeler maintenant
            </a>
            <Link
              href="/projets/artisan-plombier/contact"
              className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Formulaire de contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mesures immédiates à appliquer */}
      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">Mesures immédiates</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <div className="text-sm font-medium text-gray-900">Couper l’eau</div>
            <p className="mt-1 text-sm text-gray-700">
              Fermez l’arrivée générale (souvent sous évier, local technique ou compteur). Coupez l’alimentation locale si possible.
            </p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <div className="text-sm font-medium text-gray-900">Sécuriser</div>
            <p className="mt-1 text-sm text-gray-700">
              Éloignez appareils électriques, protégez le sol, placez un récipient sous la fuite et aérez si nécessaire.
            </p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <div className="text-sm font-medium text-gray-900">Documenter</div>
            <p className="mt-1 text-sm text-gray-700">
              Prenez 1 à 2 photos nettes de la zone et notez le contexte (heure d’apparition, débit, bruit, odeur).
            </p>
          </div>
        </div>
      </section>

      {/* Types d’urgences pris en charge */}
      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">Situations prises en charge</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Fuite visible", d: "Joint, flexible, siphon, robinet, raccords cuivre/PEX." },
            { t: "WC bouchés", d: "Débouchage mécanique. Contrôle d’écoulement en sortie." },
            { t: "Évier / douche bouchés", d: "Pompe/furet. Préconisations d’entretien." },
            { t: "Chauffe-eau en panne", d: "Diagnostic, remise en service si possible, sinon solution temporaire." },
            { t: "Chasse d’eau défectueuse", d: "Remplacement mécanisme, réglage flotteur et étanchéité." },
            { t: "Surpression / bruit", d: "Contrôle de pression, réducteur, fixation et purge ciblée." },
          ].map((e) => (
            <div key={e.t} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div className="text-sm font-medium text-gray-900">{e.t}</div>
              <p className="mt-1 text-sm text-gray-700">{e.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Déroulé d’intervention */}
      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">Déroulé d’une intervention urgente</h2>
        <ol className="mt-3 list-decimal pl-5 text-sm text-gray-700">
          <li className="mb-2">
            Prise d’informations (téléphone ou formulaire) et estimation indicatrice si possible.
          </li>
          <li className="mb-2">
            Déplacement prioritaire selon créneau disponible. Sécurisation de la zone et diagnostic.
          </li>
          <li className="mb-2">
            Intervention immédiate si faisable, ou solution provisoire sécurisée avec devis de reprise si nécessaire.
          </li>
          <li>
            Rapport simple de fin d’intervention et conseils pour éviter la récidive.
          </li>
        </ol>
        <p className="mt-3 text-xs text-gray-500">
          La priorité est déterminée selon la gravité (fuite active, dégâts, absence d’eau chaude) et la disponibilité.
        </p>
      </section>

      {/* Encadré disponibilité & zones (renvoi vers Zones) */}
      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-gray-900">Disponibilité & secteur</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-700">
              Basé à Calais, interventions rapides sur les communes proches. Selon la distance, un ajustement de déplacement
              peut s’appliquer et sera indiqué au devis.
            </p>
          </div>
          <Link
            href="/projets/artisan-plombier/zones"
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            Voir les zones d’intervention
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <div className="mt-8 flex flex-wrap gap-2">
        <a
          href="tel:+33XXXXXXXXX"
          className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Appeler maintenant
        </a>
        <Link
          href="/projets/artisan-plombier/contact"
          className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
        >
          Demander un devis
        </Link>
      </div>
    </Section>
  );
}
