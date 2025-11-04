"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const form = new FormData(e.currentTarget);
      // TODO: fetch("/api/contact", { method: "POST", body: form })
      setTimeout(() => setStatus("sent"), 500);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* inputs... */}
      <button type="submit" disabled={status === "sending"} className="rounded-full bg-amber-500/90 hover:bg-amber-400 text-neutral-900 px-6 py-3 font-medium">
        {status === "sending" ? "Envoi..." : "Envoyer"}
      </button>
      {status === "sent" && <span className="text-amber-300 text-sm">Message envoyé ✅</span>}
      {status === "error" && <span className="text-red-400 text-sm">Erreur d’envoi.</span>}
    </form>
  );
}
