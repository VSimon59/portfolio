// app/layout.tsx — SERVER COMPONENT (no "use client")
import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Portfolio – Simon Verriele',
  description: 'Développeur Next.js/TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
