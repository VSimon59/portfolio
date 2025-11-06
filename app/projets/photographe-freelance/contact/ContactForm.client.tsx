"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      // Exemple : POST vers /api/contact/photographe-freelance (à brancher si tu veux)
      // await fetch("/api/contact/photographe-freelance", { method: "POST", body: new FormData(e.currentTarget) });
      setTimeout(() => setStatus("sent"), 600); // simulation
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-300">Nom complet</label>
          <input id="name" name="name" required className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 mt-1" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300">Email</label>
          <input id="email" name="email" type="email" required className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 mt-1" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-neutral-300">Type de séance</label>
          <select id="type" name="type" required className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 mt-1">
            <option value="">Choisir…</option>
            <option value="portrait">Portrait</option>
            <option value="mariage">Mariage</option>
            <option value="produit">Produit</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-neutral-300">Lieu</label>
          <input id="location" name="location" placeholder="Calais, studio, extérieur…" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 mt-1" />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-neutral-300">Date souhaitée</label>
          <input id="date" name="date" type="date" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 mt-1" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-300">
            Téléphone <span className="text-neutral-500">(facultatif)</span>
          </label>
        <input id="phone" name="phone" type="tel" placeholder="+33 6 …" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 mt-1" />
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-neutral-300">Budget estimé</label>
          <select id="budget" name="budget" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 mt-1">
            <option value="">À définir</option>
            <option value="200-500">200–500 €</option>
            <option value="500-1000">500–1 000 €</option>
            <option value="1000-2000">1 000–2 000 €</option>
            <option value="2000+">2 000 € et +</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-300">Votre message</label>
        <textarea id="message" name="message" rows={6} required placeholder="Décrivez votre besoin, style, contraintes…" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 mt-1"></textarea>
      </div>

      <label className="flex items-start gap-3 text-sm text-neutral-300">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>J’accepte que mes données soient utilisées pour me recontacter.</span>
      </label>

      <div className="flex items-center gap-3">
        <button type="submit" disabled={status === "sending"} className="rounded-full bg-amber-500/90 hover:bg-amber-400 disabled:opacity-60 text-neutral-900 px-8 py-3 font-medium shadow-lg">
          {status === "sending" ? "Envoi…" : "Envoyer la demande"}
        </button>
        {status === "sent" && <span className="text-amber-300 text-sm">✅ Message envoyé !</span>}
        {status === "error" && <span className="text-red-400 text-sm">❌ Erreur d’envoi</span>}
      </div>
    </form>
  );
}
