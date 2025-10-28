'use client'

import Link from 'next/link'
import Image from 'next/image'

function Container({ children }: { children?: React.ReactNode }) {
  // ✅ sécurité : on vérifie que children n’est pas null
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {children || null}
    </div>
  )
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <header className="mb-8 space-y-2">
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      {subtitle && <p className="max-w-prose text-neutral-600">{subtitle}</p>}
    </header>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Simon Verriele
          </Link>
          <ul className="hidden items-center gap-6 sm:flex">
            <li><a href="#projets">Projets</a></li>
            <li><a href="#apropos">À propos</a></li>
            <li><a href="#contact" className="font-semibold">Contact</a></li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

function Hero() {
  return (
    <section className="py-16 border-b bg-neutral-50">
      <Container>
        <h1 className="text-4xl font-bold">Développeur Next.js / TypeScript</h1>
        <p className="mt-4 text-neutral-600">
          Performances, accessibilité, SEO. Idéal TPE et indépendants.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#projets" className="rounded bg-black px-4 py-2 text-white">Voir mes projets</a>
          <a href="#contact" className="rounded border px-4 py-2">Me contacter</a>
        </div>
      </Container>
    </section>
  )
}

function Projects() {
  const projets = [
    {
      titre: 'Studio créatif',
      desc: 'Site vitrine moderne et animé.',
    },
    {
      titre: 'Photographe freelance',
      desc: 'Portfolio rapide et optimisé pour mobile.',
    },
    {
      titre: 'Artisan plombier',
      desc: 'Site simple et clair pour contact rapide.',
    },
  ]

  return (
    <section id="projets" className="py-16">
      <Container>
        <SectionTitle title="3 exemples concrets" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projets.map((p) => (
            <div key={p.titre} className="rounded-xl border p-5 shadow-sm bg-white">
              <h3 className="font-semibold text-lg">{p.titre}</h3>
              <p className="text-neutral-600 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function About() {
  return (
    <section id="apropos" className="py-16 border-t">
      <Container>
        <SectionTitle title="À propos" />
        <p className="max-w-prose text-neutral-700">
          Je m’appelle Simon Verriele, développeur web spécialisé en Next.js et TypeScript.
          J’aime concevoir des sites vitrines rapides, clairs et accessibles.
        </p>
      </Container>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-16 border-t bg-neutral-50">
      <Container>
        <SectionTitle title="Discutons de votre projet" />
        <p>Envoyez-moi un message à : <a href="mailto:simon.verriele@hotmail.fr" className="underline text-blue-600">simon.verriele@hotmail.fr</a></p>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-neutral-600">
      © {new Date().getFullYear()} Simon Verriele — Tous droits réservés
    </footer>
  )
}

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
