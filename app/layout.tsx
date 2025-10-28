// app/layout.tsx — VERSION FINALE PROPRE
// Ce fichier définit uniquement la structure HTML de base du site.
// Il ne contient AUCUNE logique d'affichage de page (header, sections, etc.)
// Ces éléments doivent rester dans app/page.jsx.

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio – Simon Verriele',
  description: 'Développeur Next.js/TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

