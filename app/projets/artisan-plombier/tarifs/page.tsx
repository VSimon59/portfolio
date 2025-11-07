import Section from "@artisan-plombier/Section";
import Link from "next/link";

const LIGNES = [
  { t: "Déplacement (Calais)", p: "Offert si intervention réalisée" },
  { t: "Main d'œuvre (heure entamée)", p: "à partir de 60€ HT" },
  { t: "Débouchage standard (méca)", p: "dès 90€ HT" },
  { t: "Débouchage renforcé (hydro)", p: "sur devis" },
  { t: "Remplacement mitigeur", p: "dès 120€ HT (hors fourniture)" },
  { t: "Recherche de fuite", p: "dès 80€ HT" },
  { t: "Entretien chauffe-eau", p: "dès 110€ HT" },
];

const EXEMPLES = [
  {
    titre: "Fuite sous évier",
    delai: "intervention sous 24–48h",
    prix: "≈ 60–90€ HT",
    desc: "Resserage/étanchéité, petite pièce si nécessaire. Hors fourniture spécifique.",
  },
  {
    titre: "WC bouché (standard)",
    delai: "le jour même selon créneau",
    prix: "≈ 90–120€ HT",
    desc: "Débouchage mécanique, contrôle évacuation. Hydrocureuse en option si besoin.",
  },
  {
    titre: "Mitigeur défectueux",
    delai: "sous 48–72h",
    prix: "≈ 120–160€ HT",
    desc: "Remplacement du robinet. Fourniture au choix (client ou sélection pro).",
  },
];

const FAQ = [
  {
    q: "Les prix sont-ils fixes ?",
    a: "Ce sont des indications. Un devis précis est établi avant intervention selon l’accès, la pièce et l’état de l’installation.",
  },
  {
    q: "Fournitures incluses ?",
    a: "Non, sauf mention contraire. Vous pouvez fournir votre matériel ou opter pour une fourniture professionnelle adaptée.",
  },
  {
    q: "Déplacement hors Calais ?",
    a: "Oui, un ajustement peut s’appliquer selon la distance. Il est précisé au devis.",
  },
];

export const metadata = {
  title: "Tarifs plomberie — Indications & exemples | Artisan à Calais",
  description:
    "Tarifs indicatifs : main d’œuvre, débouchage, remplacement robinetterie, entretien chauffe-eau. Devis clair avant intervention.",
};

export default function TarifsPage() {
  return (
    <Section>
      <h1 className="text-3xl font-semibold tracking-tight">Tarifs indicatifs</h1>
      <div className="mt-4 flex gap-2">
  <a
    href="/projets/artisan-plombier/tarifs/pdf"
    target="_blank"
    rel="noopener"
    className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
  >
    Télécharger le PDF
  </a>
  <a
    href="/projets/artisan-plombier/contact"
    className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
  >
    Demander un devis
  </a>
</div>

      <p className="mt-3 max-w-3xl text-gray-700">
        Les montants ci-dessous sont donnés à titre indicatif. Un devis clair est fourni avant toute intervention,
        en fonction de la configuration, des pièces et de l’accès.
      </p>

      {/* Tableau clair */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full border-separate border-spacing-0 text-sm">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-600">
              <th className="p-4 font-medium">Intervention</th>
              <th className="p-4 font-medium">Tarif indicatif</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {LIGNES.map((l) => (
              <tr key={l.t}>
                <td className="p-4 text-gray-900">{l.t}</td>
                <td className="p-4 font-medium text-gray-900">{l.p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Exemples concrets */}
      <h2 className="mt-10 text-xl font-semibold tracking-tight">Exemples d’interventions</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {EXEMPLES.map((e) => (
          <div key={e.titre} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold text-gray-900">{e.titre}</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">{e.delai}</div>
            <div className="mt-2 text-lg font-semibold text-gray-900">{e.prix}</div>
            <p className="mt-2 text-sm text-gray-600">{e.desc}</p>
          </div>
        ))}
      </div>

      {/* Mentions & CTA */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-600">
          <span className="font-medium text-gray-900">Mentions :</span> tarifs en {`HT`}, fourniture en sus sauf mention.
          Déplacement offert si intervention réalisée à Calais. Facture détaillée fournie.
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-600">
          <span className="font-medium text-gray-900">Pièces :</span> sélection pro (GROHE, Geberit, etc.) ou fourniture client.
          Conseils pour choisir la pièce adaptée à votre installation.
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="text-sm text-gray-600">Besoin d’un chiffrage précis ?</div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Link
              href="/projets/artisan-plombier/contact"
              className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
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
        </div>
      </div>

      {/* FAQ courte */}
      <div className="mt-10 rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="divide-y divide-gray-100">
          {FAQ.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-gray-900">
                {f.q}
                <span className="text-gray-400 transition group-open:rotate-45">＋</span>
              </summary>
              <p className="pt-3 text-sm text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        Les prix affichés peuvent varier selon l’accès, l’état des installations, la complexité et les pièces nécessaires.
      </p>
    </Section>
  );
}
