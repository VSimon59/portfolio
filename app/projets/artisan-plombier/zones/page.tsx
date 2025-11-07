import Section from "@artisan-plombier/Section";
import MapClient from "app/projets/artisan-plombier/zones/MapClient"; // client wrapper

export const metadata = {
  title: "Zones d'intervention | Artisan plombier à Calais",
  description: "Carte des secteurs d’intervention : Calais, Marck, Guînes, Coulogne, Coquelles, Sangatte, Grande-Synthe…",
};

export default function ZonesPage() {
  return (
    <Section>
      <h1 className="text-3xl font-semibold tracking-tight">Zones d’intervention</h1>
      <p className="mt-3 max-w-3xl text-gray-700">
        Basé à Calais. Interventions rapides sur le littoral et l’arrière-pays. Selon la distance, un ajustement peut
        s’appliquer (précisé au devis).
      </p>

      <div className="mt-6">
        <MapClient />
      </div>

      <p className="mt-3 text-sm text-gray-500">
        Hors secteur ? Un devis spécifique peut être établi selon la distance.
      </p>
    </Section>
  );
}
