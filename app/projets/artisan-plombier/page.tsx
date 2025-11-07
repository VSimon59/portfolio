import Section from "@artisan-plombier/Section";
import Link from "next/link";
import AvailabilityCalendar from "app/projets/artisan-plombier/components/AvailabilityCalendar";


export default function Page() {
return (
<>
<Section>
<div className="grid gap-6 lg:grid-cols-3">
<div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm lg:col-span-2">
  <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
    Dépannage & entretien
  </h2>

  <p className="mt-3 text-gray-700 leading-relaxed max-w-2xl">
    Intervention rapide et soignée sur Calais et les environs.
    Recherche de fuites, débouchage, remplacement de robinetterie,
    entretien de chauffe-eau et petits travaux de plomberie.
    Chaque intervention est réalisée avec du matériel professionnel
    et des pièces adaptées, dans le respect des normes actuelles.
  </p>

  <div className="mt-6 grid gap-6 sm:grid-cols-3">
    <div>
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
        Réactivité
      </h3>
      <p className="mt-1 text-sm text-gray-600">
        Créneaux rapides selon l’urgence, diagnostics clairs avant intervention.
      </p>
    </div>
    <div>
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
        Qualité
      </h3>
      <p className="mt-1 text-sm text-gray-600">
        Travail propre et soigné, respect des installations existantes et des lieux.
      </p>
    </div>
    <div>
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
        Transparence
      </h3>
      <p className="mt-1 text-sm text-gray-600">
        Devis clairs, tarifs justes, pas de frais cachés ni de surprise à la facturation.
      </p>
    </div>
  </div>

  <div className="mt-8 flex flex-wrap gap-3">
    <Link
      href="/projets/artisan-plombier/urgences"
      className="rounded-xl bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
    >
      Intervention urgente
    </Link>
    <Link
      href="/projets/artisan-plombier/contact"
      className="rounded-xl border border-gray-300 px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 transition"
    >
      Demander un devis
    </Link>
  </div>

  <div className="mt-6 border-t border-gray-100 pt-4 text-sm text-gray-500">
    Entreprise déclarée et assurée — Garantie décennale — Intervention moyenne : 40 min
  </div>
</div>



{/* Carte Disponibilités avec agenda pro */}
<div className="rounded-2xl border border-gray-200 bg-white p-0 shadow-sm">
<AvailabilityCalendar />
</div>
</div>
</Section>
</>
);
}