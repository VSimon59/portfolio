// app/layout.tsx — SERVER COMPONENT (no "use client")
import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Portfolio – Simon Verriele',
  description: 'Développeur Next.js/TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" data-theme="light">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
