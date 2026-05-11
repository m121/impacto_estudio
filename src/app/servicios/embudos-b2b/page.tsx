import type { Metadata } from "next"

import { EmbudosB2bLanding } from "@/components/service-pages/embudos-b2b-landing"
import { ServicePageJsonLd } from "@/components/service-pages/service-page-json-ld"
import { embudosB2bLandingData } from "@/lib/service-embudos-b2b"
import { servicePageMetadata } from "@/lib/service-page-metadata"

export const metadata: Metadata = servicePageMetadata({
  path: embudosB2bLandingData.path,
  title: embudosB2bLandingData.metadataTitle,
  description: embudosB2bLandingData.metadataDescription,
  ogTitle: embudosB2bLandingData.ogTitle,
  keywords: [...embudosB2bLandingData.metadataKeywords],
})

export default function EmbudosB2bPage() {
  return (
    <>
      <ServicePageJsonLd
        canonicalPath={embudosB2bLandingData.path}
        schema={embudosB2bLandingData.schema}
        faqItems={embudosB2bLandingData.faqItems}
      />
      <EmbudosB2bLanding data={embudosB2bLandingData} />
    </>
  )
}
