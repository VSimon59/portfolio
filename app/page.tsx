// app/page.tsx
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* HERO */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Sites vitrines <span className="text-blue-500">React</span>, orientés{" "}
          <span className="text-blue-500">UX/UI</span>
          <br className="hidden md:block" />
          rapides, accessibles et soignés.
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Je conçois des interfaces nettes, performantes (Lighthouse 90+) et accessibles (AA),
          avec un design system cohérent et des micro-interactions discrètes.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://github.com/VSimon59"
            target="_blank"
            rel="noopener"
            className="rounded-xl border border-slate-700 px-4 py-2 hover:border-blue-500 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tonpseudo"
            target="_blank"
            rel="noopener"
            className="rounded-xl border border-slate-700 px-4 py-2 hover:border-blue-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:simon.verriele@hotmail.com"
            className="rounded-xl bg-blue-600 px-4 py-2 hover:bg-blue-500 transition"
          >
            Me contacter
          </a>
        </div>
      </section>

      {/* PROJETS */}
      <section>
        <h2 className="text-sm tracking-widest text-blue-400 font-semibold mb-3">
          PROJETS
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-slate-800 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Simon Verriele — Front-End (React). Déployé sur Vercel.
      </footer>
    </main>
  );
}
