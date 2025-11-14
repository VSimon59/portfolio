import Link from "next/link";
import { ProjectCard } from "app/components/ProjectCard";

const projects = [
  {
    href: "/projets/studio-creatif",
    title: "Studio Créatif",
    image: "/images/studio-creatif.png",
    alt: "Visuel du projet Studio Créatif",
    
  },
  {
    href: "/projets/photographe-freelance",
    title: "Photographe freelance",
    image: "/images/photographe-freelance.png",
    alt: "Visuel du projet Photographe freelance",
    
  },
  {
    href: "/projets/artisan-plombier",
    title: "Artisan plombier",
    image: "/images/artisan-plombier.png",
    alt: "Visuel du projet Artisan plombier",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-metal-dark text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-20">

       
        <section className="relative">
          
          <div className="space-y-8 max-w-6xl mx-auto px-6 py-12 md:py-20">
            
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Portfolio
            </p>

            {/* TITRE + TEXTE CENTRÉS */}
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50">
                Verriele Simon — développeur web & créatif.
              </h1>

              <p className="text-base md:text-lg text-slate-200/90 leading-relaxed">
                Je conçois des interfaces sobres, lisibles et performantes, avec une
                attention particulière portée à l’image, à la lumière et à la cohérence
                visuelle. Trois projets, chacun avec sa propre identité.
              </p>
            </div>

            {/* BOUTONS CENTRÉS */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-slate-50 px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-white transition"
              >
                Voir les projets
              </Link>

              <Link
                href="mailto:simon..verriele@hotmail.fr"
                className="inline-flex items-center justify-center rounded-full border border-slate-500/60 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-slate-300 hover:bg-white/10 transition"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </section>


        {/* SECTION PROJETS */}
        <section id="projects" className=" mt-24 space-y-6 pb-8">

          <div className="max-w-3xl mx-auto px-6 space-y-12">
            {/* Label aligné à gauche */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400 text-center mb-6">
              Projets récents
            </p>
          </div>

          <div className="text-2xl font-semibold text-slate-50 text-center">
            <div className="grid gap-4 md:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.href}
                  href={project.href}
                  title={project.title}
                  image={project.image}
                  alt={project.alt}
                />
              ))}
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}
