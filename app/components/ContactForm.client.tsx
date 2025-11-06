"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = new FormData(e.currentTarget);


      setTimeout(() => setStatus("sent"), 1000); // simulation
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 bg-neutral-900/60 backdrop-blur-lg border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-xl"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-300">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jean Dupont"
            required
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 mt-1 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
            Adresse email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jean.dupont@email.com"
            required
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 mt-1 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-300">
          Téléphone <span className="text-neutral-500">(facultatif)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+33 6 12 34 56 78"
          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 mt-1 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-neutral-300">
          Sujet de votre demande
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 mt-1 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <option value="">Choisissez une option...</option>
          <option value="portrait">Shooting portrait</option>
          <option value="mariage">Reportage mariage</option>
          <option value="produit">Photo produit</option>
          <option value="autre">Autre projet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Parlez-moi un peu de votre projet, vos besoins, vos dates..."
          required
          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 mt-1 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
        ></textarea>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-amber-500/90 hover:bg-amber-400 disabled:opacity-60
                     text-neutral-900 px-8 py-3 font-medium shadow-lg shadow-amber-900/30
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition"
        >
          {status === "sending" ? "Envoi..." : "Envoyer le message"}
        </button>

        {status === "sent" && (
          <span className="text-amber-300 text-sm">✅ Message envoyé avec succès !</span>
        )}
        {status === "error" && (
          <span className="text-red-400 text-sm">❌ Une erreur est survenue.</span>
        )}
      </div>
    </form>
  );
}
