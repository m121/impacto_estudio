import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  /**
   * Mastra y el AI SDK deben externalizarse en el servidor (Next / Vercel).
   * Si añades más paquetes `@mastra/*`, inclúyelos aquí.
   */
  serverExternalPackages: [
    "@mastra/core",
    "ai",
    "ai-v5",
    "@ai-sdk/provider",
    "@ai-sdk/provider-v5",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
