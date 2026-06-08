import { z } from "zod"

import {
  BUDGET_OPTIONS,
  OBJECTIVE_OPTIONS,
} from "@/lib/constants"

const objectiveSet = new Set<string>(
  OBJECTIVE_OPTIONS.map((o) => o.value),
)
const budgetSet = new Set<string>(BUDGET_OPTIONS.map((b) => b.value))

export const contactLeadSchema = z.object({
  name: z.string().min(2, "Indica un nombre válido"),
  email: z.string().email("Introduce un email corporativo válido"),
  website: z
    .string()
    .trim()
    .refine(
      (val) =>
        val === "" ||
        /^https?:\/\/.+/i.test(val) ||
        /^[\w.-]+\.[a-z]{2,}.*$/i.test(val),
      { message: "Introduce una web válida (ej. https://…)" },
    ),
  objective: z.string().refine((v) => objectiveSet.has(v), {
    message: "Selecciona un objetivo",
  }),
  budget: z.string().refine((v) => budgetSet.has(v), {
    message: "Selecciona un presupuesto orientativo",
  }),
})

export type ContactLeadValues = z.infer<typeof contactLeadSchema>

export type KpiMetricItem = {
  value: string
  label: string
  description: string
}

export type KpiSectionContent = {
  eyebrow: string
  title: string
  subtitle: string
  items: readonly KpiMetricItem[]
}

export type HomeFaqItem = {
  question: string
  answer: string
}

export type PainIconKey = "clock" | "trending-down" | "users"

export type ServicePainPointContent = {
  icon: PainIconKey
  title: string
  description: string
}

export type ServiceSolutionRowContent = {
  title: string
  body: string
  statLabel: string
  statValue: string
  imageSrc: string
  imageAlt: string
  imageRight: boolean
}

export type ServiceDeliverableContent = {
  title: string
  description: string
  wide?: boolean
}

export type ServiceUseCaseContent = {
  sector: string
  headline: string
  body: string
}

export type ServiceSchemaContent = {
  name: string
  description: string
  serviceType: string
}

export type ServiceLandingContent = {
  path: string
  metadataTitle: string
  metadataDescription: string
  metadataKeywords: string[]
  ogTitle: string
  hero: {
    h1: string
    h2DirectAnswer: string
    image: {
      src: string
      alt: string
      width: number
      height: number
    }
    primaryCtaLabel: string
    primaryCtaHref: string
  }
  painPoints: ServicePainPointContent[]
  solutionRows: ServiceSolutionRowContent[]
  deliverables: ServiceDeliverableContent[]
  useCases: ServiceUseCaseContent[]
  faqItems: HomeFaqItem[]
  faqSectionEyebrow: string
  faqSectionTitle: string
  faqSectionSubtitle: string
  schema: ServiceSchemaContent
  kpiSection?: KpiSectionContent
  bottomLead: {
    title: string
    description: string
  }
  stickyCtaLabel: string
}

export type ServiceCroHeroImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type ServiceTripleFeatureItem = {
  title: string
  description: string
}

export type ServiceBentoDeliverable = {
  title: string
  description: string
  /** Clases Tailwind extra para el layout bento (ej. row-span, col-span). */
  className?: string
}

export type ServiceProofBlock = {
  title: string
  items: string[]
}

export type EmbudosB2bLandingData = {
  path: string
  metadataTitle: string
  metadataDescription: string
  metadataKeywords: string[]
  ogTitle: string
  hero: {
    h1: string
    h2: string
    primaryCtaLabel: string
    primaryCtaHref: string
    image: ServiceCroHeroImage
  }
  problem: {
    title: string
    body: string
  }
  features: [ServiceTripleFeatureItem, ServiceTripleFeatureItem, ServiceTripleFeatureItem]
  deliverablesBento: ServiceBentoDeliverable[]
  proof: ServiceProofBlock
  faqSectionEyebrow: string
  faqSectionTitle: string
  faqSectionSubtitle: string
  faqItems: HomeFaqItem[]
  schema: ServiceSchemaContent
  bottomLead: { title: string; description: string }
  stickyCtaLabel: string
}

export type PresenciaDigitalAlternateRow = {
  title: string
  body: string
  imageSrc: string
  imageAlt: string
  imageSide: "left" | "right"
}

export type ChatWidgetMessage = {
  role: "user" | "assistant"
  content: string
}

export type ChatWelcomeSuggestion = {
  title: string
  description?: string
  prompt: string
}

export type PresenciaDigitalLandingData = {
  path: string
  metadataTitle: string
  metadataDescription: string
  metadataKeywords: string[]
  ogTitle: string
  hero: {
    h1: string
    h2: string
    primaryCtaLabel: string
    primaryCtaHref: string
    image: ServiceCroHeroImage
  }
  problem: {
    title: string
    body: string
  }
  solutionRows: [
    PresenciaDigitalAlternateRow,
    PresenciaDigitalAlternateRow,
    PresenciaDigitalAlternateRow,
  ]
  deliverablesList: string[]
  proof: ServiceProofBlock
  faqSectionEyebrow: string
  faqSectionTitle: string
  faqSectionSubtitle: string
  faqItems: HomeFaqItem[]
  schema: ServiceSchemaContent
  bottomLead: { title: string; description: string }
  stickyCtaLabel: string
}

export type SocialLinkId =
  | "facebook"
  | "youtube"
  | "whatsapp"
  | "instagram"
  | "linkedin"

export type SocialLink = {
  id: SocialLinkId
  label: string
  href: string
}
