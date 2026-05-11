import type { Metadata } from "next"

import { PresenciaDigitalLanding } from "@/components/service-pages/presencia-digital-landing"
import { ServicePageJsonLd } from "@/components/service-pages/service-page-json-ld"
import { presenciaDigitalLandingData } from "@/lib/service-presencia-digital"
import { servicePageMetadata } from "@/lib/service-page-metadata"

export const metadata: Metadata = servicePageMetadata({
  path: presenciaDigitalLandingData.path,
  title: presenciaDigitalLandingData.metadataTitle,
  description: presenciaDigitalLandingData.metadataDescription,
  ogTitle: presenciaDigitalLandingData.ogTitle,
  keywords: [...presenciaDigitalLandingData.metadataKeywords],
})

export default function PresenciaDigitalPage() {
  return (
    <>
      <ServicePageJsonLd
        canonicalPath={presenciaDigitalLandingData.path}
        schema={presenciaDigitalLandingData.schema}
        faqItems={presenciaDigitalLandingData.faqItems}
      />
      <PresenciaDigitalLanding data={presenciaDigitalLandingData} />
    </>
  )
}
