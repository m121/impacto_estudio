import type { Metadata } from "next"

import {
  DEFAULT_OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_URL,
} from "@/lib/constants"

function absoluteSiteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, "")
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${base}${normalized}`
}

/** Metadatos SEO alineados con Next Metadata API para landings de servicio. */
export function servicePageMetadata(opts: {
  path: string
  title: string
  description: string
  ogTitle: string
  keywords?: string[]
}): Metadata {
  const pageUrl = absoluteSiteUrl(opts.path)

  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords?.length ? { keywords: opts.keywords } : {}),
    alternates: {
      canonical: opts.path.startsWith("/") ? opts.path : `/${opts.path}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: pageUrl,
      title: opts.ogTitle,
      description: opts.description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: OG_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.ogTitle,
      description: opts.description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}
