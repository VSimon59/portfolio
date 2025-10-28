'use client'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold">Page introuvable</h1>
        <p className="text-neutral-600">La page demandée n’existe pas ou a été déplacée.</p>
        <a href="/" className="inline-flex rounded bg-black px-4 py-2 text-white">Retour à l’accueil</a>
      </div>
    </main>
  )
}
