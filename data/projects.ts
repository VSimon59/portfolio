// data/projects.ts

export type Project = {
  title: string;
  description: string;
  url: string;
  tech: string[];
  highlights?: string[]; // ex: ["Lighthouse 95+", "A11y AA", "CLS 0.01"]
};

export const projects: Project[] = [
  {
    title: "Vitrine artisan",
    description:
      "Refonte React + design system. Navigation claire, prise de contact simplifiée, micro-interactions.",
    url: "https://exemple-vitrine.vercel.app",
    tech: ["Next.js", "React", "Tailwind", "Framer Motion"],
    highlights: ["Lighthouse 95+", "A11y AA", "CLS 0.01"],
  },
  {
    title: "Studio photo",
    description:
      "Galeries optimisées (next/image), preload des polices, animations discrètes.",
    url: "https://exemple-studio.vercel.app",
    tech: ["Next.js", "Tailwind"],
    highlights: ["LCP < 2.0s", "INP < 200ms"],
  },
  {
    title: "Coaching sport",
    description:
      "Landing orientée conversion, formulaire accessible, sections modulaires.",
    url: "https://exemple-coach.vercel.app",
    tech: ["React", "Vercel"],
  },
];
