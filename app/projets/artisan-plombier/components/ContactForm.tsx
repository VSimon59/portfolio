"use client";

import { useMemo, useState } from "react";

type Initial = Partial<{
  nom: string;
  email: string;
  tel: string;
  adresse: string;
  sujet: string;     // "fuite" | "wc-bouche" | "chauffe-eau" | "autre"
  urgence: string;   // "oui" | "non"
  disponibilites: string;
  message: string;
}>;

export default function ContactForm({ initial }: { initial?: Initial }) {
  const init = useMemo(
    () => ({
      nom: initial?.nom ?? "",
      email: initial?.email ?? "",
      tel: initial?.tel ?? "",
      adresse: initial?.adresse ?? "",
      sujet: initial?.sujet ?? "autre",
      urgence: initial?.urgence ?? "non",
      disponibilites: initial?.disponibilites ?? "",
      message: initial?.message ?? "",
    }),
    [initial]
  );

  const [form, setForm] = useState(init);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  // Démo sans backend : ouvre un email pré-rempli
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const to = "contact@exemple.fr";
    const subject = encodeURIComponent(
      `[Demande] ${form.urgence === "oui" ? "URGENCE — " : ""}${labelSujet(form.sujet)}`
    );
    const body = encodeURIComponent(
`Nom: ${form.nom}
Email: ${form.email}
Téléphone: ${form.tel}
Adresse: ${form.adresse}
Sujet: ${labelSujet(form.sujet)}
Urgence: ${form.urgence}
Disponibilités: ${form.disponibilites}

Message:
${form.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4">
        <div className="grid gap-3 md:grid-cols-2">
          <input
            required
            value={form.nom}
            onChange={set("nom")}
            placeholder="Nom"
            className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
          />
          <input
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            placeholder="Email"
            className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <input
            value={form.tel}
            onChange={set("tel")}
            placeholder="Téléphone"
            className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
          />
          <input
            value={form.adresse}
            onChange={set("adresse")}
            placeholder="Adresse d’intervention"
            className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
          />
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <select
            value={form.sujet}
            onChange={set("sujet")}
            className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
            aria-label="Type d'intervention"
          >
            <option value="fuite">Recherche / réparation de fuite</option>
            <option value="wc-bouche">WC bouché</option>
            <option value="chauffe-eau">Chauffe-eau</option>
            <option value="autre">Autre</option>
          </select>

          <select
            value={form.urgence}
            onChange={set("urgence")}
            className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
            aria-label="Urgence"
          >
            <option value="non">Pas urgent</option>
            <option value="oui">Urgence</option>
          </select>

          <input
            value={form.disponibilites}
            onChange={set("disponibilites")}
            placeholder="Disponibilités (ex : aujourd’hui 16–18h)"
            className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
          />
        </div>

        <textarea
          required
          value={form.message}
          onChange={set("message")}
          placeholder="Décrivez le problème (contexte, photos, depuis quand, débit/odeur/bruit...)"
          rows={6}
          className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900/10"
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Envoyer la demande
          </button>
          <button
            type="button"
            onClick={() => setForm(init)}
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </form>
  );
}

function labelSujet(code?: string) {
  switch (code) {
    case "fuite": return "Recherche / réparation de fuite";
    case "wc-bouche": return "WC bouché";
    case "chauffe-eau": return "Chauffe-eau";
    default: return "Autre";
  }
}
