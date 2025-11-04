export default function Results() {
  const items = [
    { k: "Demandes de devis", v: "+35%", detail: "UX simplifiée, CTA visibles, rassurance visuelle." },
    { k: "Temps de chargement", v: "−48%", detail: "Optimisation images et cache navigateur." },
    { k: "Score SEO", v: "+12 pts", detail: "Balises meta et données structurées locales." },
  ];
  return (
    <section id="resultats" className="border-y border-neutral-900 bg-neutral-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Résultats & impact</h2>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <li key={it.k} className="rounded-2xl border border-neutral-800 p-6">
              <div className="text-3xl font-semibold text-amber-300">{it.v}</div>
              <div className="mt-1 text-sm text-neutral-400">{it.k}</div>
              <p className="mt-3 text-neutral-300">{it.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
