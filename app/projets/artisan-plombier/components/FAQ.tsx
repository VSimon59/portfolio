import Section from "@artisan-plombier/Section";

const faqs = [
  {
    q: "Intervenez‑vous en urgence ?",
    a: "Oui, selon disponibilité. Un créneau prioritaire est proposé pour les fuites et dégâts des eaux.",
  },
  {
    q: "Faites‑vous les devis ?",
    a: "Oui, devis détaillé fourni avant l'intervention. Déplacement offert si l'intervention est réalisée.",
  },
  {
    q: "Quelles marques installez‑vous ?",
    a: "Matériel adapté au besoin et au budget (GROHE, Geberit, Atlantic, etc.). Possibilité de fourniture client.",
  },
  {
    q: "Zones d'intervention ?",
    a: "Calais et alentours (littoral et arrière‑pays). Voir la section dédiée.",
  },
];

export default function FAQ() {
  return (
    <Section>
      <h2 className="text-3xl font-semibold tracking-tight">Questions fréquentes</h2>
      <div className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {faqs.map((f, i) => (
          <details key={f.q} className="group p-5 [&_summary]:cursor-pointer">
            <summary className="flex items-center justify-between text-lg font-medium">
              {f.q}
              <span className="text-gray-400 transition group-open:rotate-45">＋</span>
            </summary>
            <p className="pt-3 text-gray-700">{f.a}</p>
            {i < faqs.length - 1 && <div className="mt-5 border-t border-gray-100" />}
          </details>
        ))}
      </div>
    </Section>
  );
}