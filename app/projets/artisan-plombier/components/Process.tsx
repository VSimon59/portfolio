import Section from "@artisan-plombier/Section";

const steps = [
  { t: "Contact & diagnostic", d: "Vous décrivez le problème, estimation rapide au téléphone si possible." },
  { t: "Intervention planifiée", d: "Créneau défini selon l'urgence, arrivée à l'heure indiquée." },
  { t: "Réparation", d: "Recherche de fuite, pièce adaptée, réparation propre et durable." },
  { t: "Contrôle & conseils", d: "Test, vérifications, recommandations d’entretien pour éviter les récidives." },
];

export default function Process() {
  return (
    <Section>
      <h2 className="text-3xl font-semibold tracking-tight">Comment ça se passe ?</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.t} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-3xl font-bold text-gray-300">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
            <p className="mt-2 text-gray-700">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}