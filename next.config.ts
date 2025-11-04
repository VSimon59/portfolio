// Projets/portfolio/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // soit cette forme (simple) :
    domains: ["images.unsplash.com"],
    // ou, équivalent/plus précis :
    // remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
