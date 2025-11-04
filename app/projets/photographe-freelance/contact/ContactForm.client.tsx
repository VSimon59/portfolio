"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const form = new FormData(e.currentTarget);
      // TODO: envoyez vers une API route / action server si besoin
      // await fetch("/api/contact", { method: "POST", body: form });
      setTimeout(() => setStatus("sent"), 500); // démo
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input
        name="name"
        placeholder="Votre nom"
        className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Votre email"
        className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3"
        required
      />
      <input
        name="subject"
        placeholder="Sujet"
        className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3"
      />
      <textarea
        name="message"
        rows={6}
        placeholder="Votre message"
        className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3"
        required
      />

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-amber-500/90 hover:bg-amber-400 disabled:opacity-60
                     text-neutral-900 px-6 py-3 font-medium shadow-lg shadow-amber-900/20
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          {status === "sending" ? "Envoi..." : "Envoyer"}
        </button>
        {status === "sent" && (
          <span className="text-amber-300 text-sm">Message envoyé ✅</span>
        )}
        {status === "error" && (
          <span className="text-red-400 text-sm">Erreur d’envoi. Réessayez.</span>
        )}
      </div>
    </form>
  );
}
