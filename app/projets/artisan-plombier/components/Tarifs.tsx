import Section from "@artisan-plombier/Section";

const tarifs = [
  { t: "Déplacement (Calais)", p: "Offert avec intervention" },
  { t: "Main d'œuvre horaire", p: "à partir de 60€ HT" },
  { t: "Débouchage standard", p: "dès 90€ HT" },
  { t: "Remplacement mitigeur", p: "dès 120€ HT (hors fourniture)" },
  { t: "Entretien chauffe‑eau", p: "dès 110€ HT" },
];

export default function Tarifs() {
  return (
    <Section>
      <h2 className="text-3xl font-semibold tracking-tight">Tarifs indicatifs</h2>
      <p className="mt-3 text-gray-700 max-w-3xl">
        Prix donnés à titre indicatif. Un devis précis est fourni avant toute intervention.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tarifs.map((e) => (
          <div key={e.t} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="text-sm text-gray-600">{e.t}</div>
            <div className="mt-1 text-lg font-semibold">{e.p}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}