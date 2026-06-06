import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"

import { ChatWidget } from "@/src/components/chat/ChatWidget"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { SmoothScrollHandler } from "@/components/motion/smooth-scroll-handler"
import { ThemeProvider } from "@/components/theme-provider"
import {
  DEFAULT_OG_IMAGE,
  OG_IMAGE_ALT,
  SCROLL_PADDING_TOP,
  ORGANIZATION_SAME_AS,
  SITE_DESCRIPTION,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants"
import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const organizationLogoUrl =
  `${SITE_URL.replace(/\/?$/, "")}${SITE_LOGO_PATH}`

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  logo: organizationLogoUrl,
  areaServed: {
    "@type": "Country",
    name: "España",
  },
  sameAs: ORGANIZATION_SAME_AS,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · Vende más, embudos e IA para B2B`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
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
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn("antialiased", inter.variable, playfair.variable)}
      style={
        {
          "--scroll-padding-top": SCROLL_PADDING_TOP,
        } as React.CSSProperties
      }
    >
      <body className="min-h-svh bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <ThemeProvider>
          <SmoothScrollHandler />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
