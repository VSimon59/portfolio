import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "app/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio – Verriele Simon",
  description: "Développeur web & créatif.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-neutral-950 text-slate-50">
        {children}
        <Footer />
      </body>
    </html>
  );
}
