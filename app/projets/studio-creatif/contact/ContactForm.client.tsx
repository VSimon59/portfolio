// app/projets/studio-creatif/contact/ContactForm.client.tsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      // POST vers ton endpoint quand tu voudras
      setTimeout(() => setStatus("sent"), 700);
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full bg-neutral-950/60 border border-neutral-800 focus:border-indigo-400/80 focus:ring-indigo-400/30 rounded-xl px-4 py-3 outline-none transition";

  return (
    <form onSubmit={onSubmit} className="grid gap-7 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 md:p-10 shadow-xl">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Parlons de votre projet</h2>
        <p className="text-neutral-400 mt-2 text-sm">Réponse sous 24–48h ouvrées.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">Nom / Société</label>
          <input id="name" name="name" required className={field} placeholder="Jane Doe ou Studio Nova" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">Email</label>
          <input id="email" name="email" type="email" required className={field} placeholder="contact@exemple.com" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-neutral-300 mb-1">Type de projet</label>
          <select id="projectType" name="projectType" required className={field}>
            <option value="">Sélectionner…</option>
            <option value="vitrine">Site vitrine</option>
            <option value="ecommerce">E-commerce</option>
            <option value="portfolio">Portfolio</option>
            <option value="refonte">Refonte</option>
          </select>
        </div>
        <div>
          <label htmlFor="pages" className="block text-sm font-medium text-neutral-300 mb-1">Nb. de pages</label>
          <input id="pages" name="pages" type="number" min={1} placeholder="5" className={field} />
        </div>
        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-neutral-300 mb-1">Deadline</label>
          <input id="deadline" name="deadline" type="date" className={field} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-neutral-300 mb-1">Budget estimé</label>
          <select id="budget" name="budget" className={field}>
            <option value="">À définir</option>
            <option value="1k-3k">1 000–3 000 €</option>
            <option value="3k-6k">3 000–6 000 €</option>
            <option value="6k+">6 000 € et +</option>
          </select>
        </div>
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-neutral-300 mb-1">URL actuelle (si refonte)</label>
          <input id="url" name="url" type="url" placeholder="https://exemple.com" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">Brief / besoins</label>
        <textarea id="message" name="message" rows={6} required placeholder="Objectifs, audience, contenu, contraintes techniques…" className={`${field} resize-none`} />
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-indigo-500/90 hover:bg-indigo-400 disabled:opacity-60 text-neutral-950 font-medium shadow-lg shadow-indigo-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition-all"
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer la demande"}
        </button>
        {status === "sent" && <span className="text-indigo-300 text-sm">✅ Message envoyé !</span>}
        {status === "error" && <span className="text-red-400 text-sm">❌ Erreur d’envoi</span>}
      </div>
    </form>
  );
}
