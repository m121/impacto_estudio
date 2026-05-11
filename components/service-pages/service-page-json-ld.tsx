import type { HomeFaqItem } from "@/lib/types"

import { SITE_URL } from "@/lib/constants"

type ServicePageJsonLdProps = {
  canonicalPath: string
  schema: {
    name: string
    description: string
    serviceType: string
  }
  faqItems: HomeFaqItem[]
}

function normalizeSiteUrl() {
  return SITE_URL.replace(/\/$/, "")
}

export function ServicePageJsonLd({
  canonicalPath,
  schema,
  faqItems,
}: ServicePageJsonLdProps) {
  const base = normalizeSiteUrl()
  const pageUrl = `${base}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`

  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: schema.name,
        description: schema.description,
        serviceType: schema.serviceType,
        url: pageUrl,
        provider: { "@id": `${base}/#organization` },
        areaServed: { "@type": "Country", name: "España" },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload),
      }}
    />
  )
}
