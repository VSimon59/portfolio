"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import Link from "next/link";

type Cat = "all" | "identite" | "uiux" | "web" | "motion" | "dataviz";
const ACCENT = "rgb(165 180 252)";

type Item = {
  id: string;
  cat: Exclude<Cat, "all">;
  title: string;
  desc: string;
  cover: string;   // image statique
  tags: string[];
  href?: string;   // lien vers un case study ou projets
  impact?: { label: string; value: number; suffix?: string }; // métrique animée
};

const ITEMS: Item[] = [
  {
    id: "brand-01",
    cat: "identite",
    title: "Identité & système visuel",
    desc: "Plateforme de marque, grille modulaire, déclinaisons multi-supports.",
    cover: "/studio/brand-system.jpg",
    tags: ["Brand book", "Système", "Accessibilité"],
    impact: { label: "Cohérence perçue", value: 92, suffix: "%" },
  },
  {
    id: "uiux-01",
    cat: "uiux",
    title: "Design d’interface & prototypage",
    desc: "Design system, flows critiques, test utilisateur rapide.",
    cover: "/studio/ui-prototype.jpg",
    tags: ["Design System", "Prototypage", "Tests"],
    impact: { label: "Tâches réussies", value: 87, suffix: "%" },
  },
  {
    id: "web-01",
    cat: "web",
    title: "Web interactif (Next.js)",
    desc: "Chargement rapide, SEO technique, animations discrètes.",
    cover: "/studio/web-next.jpg",
    tags: ["Next.js", "Perf", "SEO"],
    href: "/projets/studio-creatif/projets",
    impact: { label: "Lighthouse Perf", value: 98, suffix: "/100" },
  },
  {
    id: "motion-01",
    cat: "motion",
    title: "Micro-interactions & motion",
    desc: "Transitions calmes, retours d’état, hiérarchie visuelle.",
    cover: "/studio/motion.jpg",
    tags: ["Transitions", "Easing", "States"],
    impact: { label: "Engagement", value: 1.8, suffix: "x" },
  },
  {
    id: "dataviz-01",
    cat: "dataviz",
    title: "Data-viz claire",
    desc: "Narration visuelle, lisibilité, accessibilité couleur.",
    cover: "/studio/dataviz.jpg",
    tags: ["Narrative", "Lisibilité", "A11y"],
    impact: { label: "Compréhension", value: 76, suffix: "%" },
  },
];

const TABS: { key: Cat; label: string }[] = [
  { key: "all", label: "Tout" },
  { key: "identite", label: "Identité" },
  { key: "uiux", label: "UI/UX" },
  { key: "web", label: "Web" },
  { key: "motion", label: "Motion" },
  { key: "dataviz", label: "Data-viz" },
];

// Compteur minimaliste qui s’anime à l’affichage/survol
function useCountUp(active: boolean, to: number, duration = 700) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.round(to * (0.1 + 0.9 * p))); // easing simple + petit headstart
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to, duration]);
  return val;
}

export default function CapabilitiesShowcase() {
  const [tab, setTab] = useState<Cat>("all");
  const list = useMemo(() => (tab === "all" ? ITEMS : ITEMS.filter(i => i.cat === tab)), [tab]);

  return (
    <section className="relative overflow-hidden py-12">
      {/* Fond sombre cohérent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/textures/pixel-grid.png')] bg-repeat" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Titre + ligne accent */}
        <div className="inline-block">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ color: ACCENT }}>
            Aperçu des capacités du studio
          </h2>
          <div className="h-0.5 w-16 mt-2 rounded-full" style={{ backgroundColor: ACCENT }} />
        </div>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          {TABS.map(t => {
            const active = t.key === tab;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`rounded-full border px-3 py-1 transition ${
                  active ? "border-white/30 bg-white/10 text-white" : "border-white/10 bg-white/0 text-gray-200 hover:bg-white/5"
                }`}
                aria-pressed={active}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Grid cartes */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(card => (
            <CapabilityCard key={card.id} item={card} />
          ))}
        </div>

        {/* CTA global */}
        <div className="mt-10 flex flex-wrap gap-2">
          <Link
            href="/projets/studio-creatif/projets"
            className="rounded-xl border border-white/10 bg-white/0 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-white/5"
          >
            Voir des cas concrets
          </Link>
          <Link
            href="/projets/studio-creatif/contact?sujet=Brief%20Studio%20—%20capacit%C3%A9s"
            className="rounded-xl px-4 py-2 text-sm font-medium text-gray-900 hover:opacity-90"
            style={{ backgroundColor: ACCENT }}
          >
            Discuter d’un projet
          </Link>
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ item }: { item: Item }) {
  const [hover, setHover] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const showCount = hover || inView;
  const val = useCountUp(showCount, item.impact?.value ?? 0);

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_1px_1px_rgba(0,0,0,.15),0_16px_40px_-24px_rgba(0,0,0,.45)]"
    >
      {/* Media avec liseré animé */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.cover}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5"
          style={{ background: ACCENT, opacity: 0.6 }}
        />
        {/* Halo doux au survol */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20"
          style={{ background: ACCENT }}
        />
      </div>

      {/* Contenu */}
      <div className="p-5">
        <div className="text-sm uppercase tracking-wide text-gray-300/80">{labelCat(item.cat)}</div>
        <h3 className="mt-1 text-lg font-semibold text-gray-100">{item.title}</h3>
        <p className="mt-1 text-gray-300 text-sm leading-relaxed">{item.desc}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tg, i) => (
            <span key={i} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-200">
              {tg}
            </span>
          ))}
        </div>

        {/* “Surprise” pro : métrique qui s’anime */}
        {item.impact && (
          <div className="mt-4 flex items-baseline gap-2">
            <div className="text-2xl font-semibold" style={{ color: ACCENT }}>
              {val}
              {item.impact.suffix ?? ""}
            </div>
            <div className="text-xs uppercase tracking-wide text-gray-300/80">{item.impact.label}</div>
          </div>
        )}

        <div className="mt-5">
          {item.href ? (
            <Link
              href={item.href}
              className="inline-flex items-center rounded-xl border border-white/10 bg-white/0 px-3 py-2 text-sm font-medium text-gray-100 hover:bg-white/5"
            >
              Voir un cas concret
            </Link>
          ) : (
            <span className="inline-flex items-center rounded-xl border border-white/10 bg-white/0 px-3 py-2 text-sm font-medium text-gray-400">
              Démo interne
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function labelCat(c: Exclude<Cat, "all">) {
  switch (c) {
    case "identite": return "Identité";
    case "uiux": return "UI/UX";
    case "web": return "Web";
    case "motion": return "Motion";
    case "dataviz": return "Data-viz";
  }
}
