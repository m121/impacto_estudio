import type { Metadata } from "next"

/**
 * Home long-form B2B — Impacto Estudio design system:
 * brand pink (#F84677) en CTAs vía tokens `--primary`, brand cyan (#00C1D5) en acentos,
 * hero/footer oscuros #020617, logos sobre blanco #FFFFFF.
 * JSON-LD FAQPage para GEO (Organization en layout raíz).
 */
import { BottomCtaSection } from "@/components/sections/bottom-cta-section"
import { FeaturesBenefitsSection } from "@/components/sections/features-benefits-section"
import { HeroSection } from "@/components/sections/hero-section"
import { HomeFAQ } from "@/components/sections/home-faq"
import { MethodologySection } from "@/components/sections/methodology-section"
import { ProblemAgitationSection } from "@/components/sections/problem-agitation-section"
import { ServicesHubSection } from "@/components/sections/services-hub-section"
import { SocialProofBar } from "@/components/sections/social-proof-bar"
import {
  DEFAULT_OG_IMAGE,
  HOME_FAQ_ITEMS,
  HOME_METADATA_KEYWORDS,
  OG_IMAGE_ALT,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants"
import type { HomeFaqItem } from "@/lib/types"

const homeOgDescription =
  "Escalamos ventas B2B con embudos, automatización con IA y presencia digital para equipos comerciales en España. Landing larga con metodología, testimonios y FAQ."

const homeOgUrl = SITE_URL.replace(/\/?$/, "")

export const metadata: Metadata = {
  title: "Inicio",
  description: homeOgDescription,
  keywords: [...HOME_METADATA_KEYWORDS],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: homeOgUrl,
    title: `${SITE_NAME} · Inicio`,
    description: homeOgDescription,
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
    title: `${SITE_NAME} · Inicio`,
    description: homeOgDescription,
    images: [DEFAULT_OG_IMAGE],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function HomePage() {
  const faqItems = HOME_FAQ_ITEMS as HomeFaqItem[]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <div className="flex flex-col">
        <HeroSection />
        <SocialProofBar />
        <ProblemAgitationSection />
        <FeaturesBenefitsSection />
        <ServicesHubSection />
        <MethodologySection />
        {/* <TestimonialsSection /> */}
        <HomeFAQ items={faqItems} />
        <BottomCtaSection />
      </div>
    </>
  )
}
