import Image from "next/image"
import {
  Radar,
  SlidersHorizontal,
  Workflow,
} from "lucide-react"

import { ScrollReveal } from "@/components/motion/scroll-reveal"
import {
  ServiceContactBand,
  ServiceProblemBand,
} from "@/components/service-pages/service-landing-bands"
import { ServiceLandingHero } from "@/components/service-pages/service-landing-hero"
import {
  ServiceDarkSection,
  ServiceGlassCard,
} from "@/components/service-pages/service-dark-section"
import { MOTION_STAGGER_STEP } from "@/lib/motion"
import { cn } from "@/lib/utils"
import type { EmbudosB2bLandingData } from "@/lib/types"

import { ServicePageFaq } from "./service-page-faq"
import { ServiceStickyCta } from "./service-sticky-cta"

const FEATURE_ICONS = [Radar, SlidersHorizontal, Workflow] as const

const PROBLEM_SIGNALS = [
  "Facturación atada a referidos sin pipeline predecible",
  "Leads curiosos que saturan el calendario comercial",
  "Ciclos largos sin datos de atribución por etapa",
] as const

export function EmbudosB2bLanding({ data }: { data: EmbudosB2bLandingData }) {
  const slug = "embudos-b2b"

  return (
    <article className="pb-28 md:pb-32">
      <ServiceLandingHero
        headingId={`${slug}-hero-h1`}
        eyebrow="Servicio B2B · Embudos"
        h1={data.hero.h1}
        h1Accent="reuniones cualificadas"
        h2={data.hero.h2}
        primaryCtaHref={data.hero.primaryCtaHref}
        primaryCtaLabel={data.hero.primaryCtaLabel}
        image={data.hero.image}
        imageBadge="Captación · Scoring · CRM"
      />

      <ServiceProblemBand
        headingId={`${slug}-pain-heading`}
        title={data.problem.title}
        body={data.problem.body}
        signals={PROBLEM_SIGNALS}
      />

      <ServiceDarkSection
        ariaLabelledby={`${slug}-solution-heading`}
        eyebrow="Solución"
        title="Pipeline predecible, sin diluir comercial con curiosos"
      >
        <ul className="grid gap-5 md:grid-cols-3">
          {data.features.map((f, index) => {
            const Icon = FEATURE_ICONS[index]
            return (
              <ScrollReveal key={f.title} delay={index * MOTION_STAGGER_STEP}>
                <li className="list-none">
                  <ServiceGlassCard accent={index === 1 ? "pink" : "cyan"}>
                    <span
                      className="font-heading text-3xl font-bold text-white/15"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="mt-3 size-10 text-brand-cyan" aria-hidden />
                    <h3 className="font-heading mt-4 text-lg font-semibold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {f.description}
                    </p>
                  </ServiceGlassCard>
                </li>
              </ScrollReveal>
            )
          })}
        </ul>
      </ServiceDarkSection>

      <section
        className="border-y border-slate-200 bg-linear-to-b from-slate-50 to-white px-4 py-16 sm:px-6 sm:py-24"
        aria-labelledby={`${slug}-deliverables-heading`}
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <header className="mb-10 max-w-2xl">
              <p className="text-xs font-medium tracking-[0.2em] text-brand-cyan uppercase">
                Entregables
              </p>
              <h2
                id={`${slug}-deliverables-heading`}
                className="font-heading mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              >
                Lo que recibes al cerrar el embudo
              </h2>
            </header>
          </ScrollReveal>
          <div className="grid auto-rows-fr gap-4 md:grid-cols-3">
            {data.deliverablesBento.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * MOTION_STAGGER_STEP}>
                <article
                  className={cn(
                    "h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
                    "border-t-4",
                    index === 1 ? "border-t-brand-pink" : "border-t-brand-cyan",
                    item.className ?? "",
                  )}
                >
                  <h3 className="font-heading text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceDarkSection
        ariaLabelledby={`${slug}-proof-heading`}
        title={data.proof.title}
      >
        <ul className="grid gap-5 md:grid-cols-3">
          {data.proof.items.map((text, index) => (
            <ScrollReveal key={text} delay={index * MOTION_STAGGER_STEP}>
              <li className="list-none">
                <ServiceGlassCard accent={index === 1 ? "pink" : "cyan"}>
                  <p className="text-sm leading-relaxed text-slate-200">{text}</p>
                </ServiceGlassCard>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </ServiceDarkSection>

      <ServicePageFaq
        eyebrow={data.faqSectionEyebrow}
        title={data.faqSectionTitle}
        subtitle={data.faqSectionSubtitle}
        items={data.faqItems}
        slug={slug}
      />

      <ServiceContactBand
        headingId={`${slug}-lead-heading`}
        eyebrow="Contacto"
        title={data.bottomLead.title}
        description={data.bottomLead.description}
      />

      <ServiceStickyCta label={data.stickyCtaLabel} href="#cualificar" />
    </article>
  )
}
