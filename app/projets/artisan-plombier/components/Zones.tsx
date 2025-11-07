import Section from "@artisan-plombier/Section";

const zones = [
  "Calais", "Coulogne", "Sangatte", "Marck", "Guînes", "Coquelles", "Grande‑Synthe"
];

export default function Zones() {
  return (
    <Section>
      <h2 className="text-3xl font-semibold tracking-tight">Zones d'intervention</h2>
      <p className="mt-3 text-gray-700 max-w-3xl">
        Basé à Calais, interventions rapides sur le littoral et l'arrière‑pays.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {zones.map((z) => (
          <span key={z} className="rounded-full border px-3 py-1 text-sm text-gray-700">{z}</span>
        ))}
      </div>
    </Section>
  );
}
