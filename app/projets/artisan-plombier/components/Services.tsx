import Section from "@artisan-plombier/Section";

const services = [
  { title: "Dépannage d'urgence", desc: "Intervention rapide pour fuites, ruptures, surpression, chasse d'eau." },
  { title: "Débouchage", desc: "Évier, lavabo, douche, WC — mécanique et hydrocureuse si besoin." },
  { title: "Chauffe‑eau", desc: "Installation, remplacement, entretien, réglage thermostat, détartrage." },
  { title: "Salle de bains", desc: "Rénovation partielle, robinetterie, douche, baignoire, vasque, étanchéité." },
  { title: "Réseaux & robinetterie", desc: "Pose et réparation tuyauterie cuivre/PEX, vannes, réducteur de pression." },
  { title: "Conseil & entretien", desc: "Prévention des pannes, optimisation consommation, contrats d’entretien." },
];

export default function Services() {
  return (
    <Section id="services">
      <h2 className="text-3xl font-semibold tracking-tight">Services de plomberie</h2>
      <p className="mt-3 text-gray-700 max-w-3xl">
        Un panel complet pour couvrir les urgences comme les travaux planifiés, avec devis transparent et pièces garanties.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}