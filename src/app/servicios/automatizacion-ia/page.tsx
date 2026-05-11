import type { Metadata } from "next"

import { ServiceLandingTemplate } from "@/components/service-pages/service-landing-template"
import { ServicePageJsonLd } from "@/components/service-pages/service-page-json-ld"
import { automatizacionIaLandingContent } from "@/lib/service-automatizacion-ia"
import { servicePageMetadata } from "@/lib/service-page-metadata"

export const metadata: Metadata = servicePageMetadata({
  path: automatizacionIaLandingContent.path,
  title: automatizacionIaLandingContent.metadataTitle,
  description: automatizacionIaLandingContent.metadataDescription,
  ogTitle: automatizacionIaLandingContent.ogTitle,
  keywords: [...automatizacionIaLandingContent.metadataKeywords],
})

export default function AutomatizacionIaPage() {
  return (
    <>
      <ServicePageJsonLd
        canonicalPath={automatizacionIaLandingContent.path}
        schema={automatizacionIaLandingContent.schema}
        faqItems={automatizacionIaLandingContent.faqItems}
      />
      <ServiceLandingTemplate content={automatizacionIaLandingContent} />
    </>
  )
}
