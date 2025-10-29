// app/sitemap.ts
import type { MetadataRoute } from "next";
import { promises as fs } from "fs";
import path from "path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://vsimon59.vercel.app";

  // Routes “fixes” de ton site
  const staticRoutes = ["", "/projets", "/services", "/about", "/contact"];

  // 🔎 Détecte automatiquement les sous-dossiers dans app/projets/*
  const projetsDir = path.join(process.cwd(), "app", "projets");
  let slugs: string[] = [];
  try {
    const entries = await fs.readdir(projetsDir, { withFileTypes: true });
    slugs = entries.filter((d) => d.isDirectory()).map((d) => d.name);
  } catch {
    // pas de dossier /projets ? on ignore
  }

  const now = new Date();

  const urls: MetadataRoute.Sitemap = [
    ...staticRoutes.map((p) => ({
      url: `${baseUrl}${p || "/"}`,
      lastModified: now,
    })),
    ...slugs.map((slug) => ({
      url: `${baseUrl}/projets/${slug}`,
      lastModified: now, // tu peux affiner si tu as des dates par projet
    })),
  ];

  return urls;
}
