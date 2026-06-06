import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { Clock, TrendingDown, Users } from "lucide-react"

import { KpiMetricsSection } from "@/components/sections/kpi-metrics-section"
import { ScrollReveal } from "@/components/motion/scroll-reveal"
import {
  ServiceContactBand,
} from "@/components/service-pages/service-landing-bands"
import { ServiceLandingHero } from "@/components/service-pages/service-landing-hero"
import {
  ServiceDarkSection,
  ServiceGlassCard,
} from "@/components/service-pages/service-dark-section"
import { MOTION_STAGGER_STEP } from "@/lib/motion"
import type { PainIconKey, ServiceLandingContent } from "@/lib/types"
import { cn } from "@/lib/utils"

import { ServicePageFaq } from "./service-page-faq"
import { ServiceStickyCta } from "./service-sticky-cta"

const PAIN_ICONS: Record<PainIconKey, LucideIcon> = {
  clock: Clock,
  "trending-down": TrendingDown,
  users: Users,
}

function slugFromPath(path: string) {
  const parts = path.split("/").filter(Boolean)
  return parts[parts.length - 1] ?? "servicio"
}

export function ServiceLandingTemplate({
  content,
}: {
  content: ServiceLandingContent
}) {
  const slug = slugFromPath(content.path)

  return (
    <article className="pb-28 md:pb-32">
      <ServiceLandingHero
        headingId={`${slug}-hero-h1`}
        eyebrow="Servicio B2B · Automatización IA"
        h1={content.hero.h1}
        h2={content.hero.h2DirectAnswer}
        primaryCtaHref={content.hero.primaryCtaHref}
        primaryCtaLabel={content.hero.primaryCtaLabel}
        image={content.hero.image}
        imageBadge="WhatsApp · Instagram · CRM"
      />

      {content.kpiSection ? (
        <KpiMetricsSection {...content.kpiSection} />
      ) : null}

      <ServiceDarkSection
        ariaLabelledby={`${slug}-pain-heading`}
        title="Si no sistematizáis la captación, esto es lo que pierde la organización"
        subtitle="Tres síntomas habituales en equipos B2B antes de automatizar con criterio."
      >
        <ul className="grid gap-5 md:grid-cols-3">
          {content.painPoints.map((pain, index) => {
            const Icon = PAIN_ICONS[pain.icon]
            return (
              <ScrollReveal key={pain.title} delay={index * MOTION_STAGGER_STEP}>
                <li className="list-none">
                  <ServiceGlassCard accent={index === 1 ? "pink" : "cyan"}>
                    <Icon className="size-10 text-brand-cyan" aria-hidden />
                    <h3 className="font-heading mt-4 text-lg font-semibold text-white">
                      {pain.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {pain.description}
                    </p>
                  </ServiceGlassCard>
                </li>
              </ScrollReveal>
            )
          })}
        </ul>
      </ServiceDarkSection>

      <section
        className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
        aria-labelledby={`${slug}-solution-heading`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-100/70 via-white to-slate-50"
        />
        <div className="relative mx-auto max-w-6xl">
          <ScrollReveal>
            <header className="mb-14 max-w-2xl">
              <p className="text-xs font-medium tracking-[0.2em] text-brand-cyan uppercase">
                Qué hacemos
              </p>
              <h2
                id={`${slug}-solution-heading`}
                className="font-heading mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              >
                Cómo se traduce en resultados para ventas y marketing
              </h2>
            </header>
          </ScrollReveal>

          <div className="flex flex-col gap-16 md:gap-20">
            {content.solutionRows.map((row, index) => (
              <ScrollReveal key={row.title} delay={index * 0.05}>
                <div
                  className={cn(
                    "flex flex-col gap-10 md:flex-row md:items-center",
                    row.imageRight ? "md:flex-row" : "md:flex-row-reverse",
                  )}
                >
                  <div className="flex-1 space-y-4">
                    <div className="inline-block rounded-xl border border-brand-cyan/20 bg-brand-cyan/5 px-4 py-3">
                      <p className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {row.statValue}
                      </p>
                      <p className="mt-1 text-xs font-semibold tracking-wide text-brand-cyan uppercase">
                        {row.statLabel}
                      </p>
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-slate-900">
                      {row.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {row.body}
                    </p>
                  </div>
                  <figure className="relative mx-auto w-full flex-1">
                    <div
                      aria-hidden
                      className="absolute -inset-2 rotate-1 rounded-2xl border border-slate-200/60 bg-slate-100/80"
                    />
                    <div className="relative aspect-5/3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg ring-1 ring-slate-900/5">
                      <Image
                        src={row.imageSrc}
                        alt={row.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-2"
                      />
                    </div>
                  </figure>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-y border-slate-200 bg-linear-to-b from-slate-50 to-white px-4 py-16 sm:px-6 sm:py-24"
        aria-labelledby={`${slug}-deliverables-heading`}
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <header className="mb-10 max-w-2xl">
              <h2
                id={`${slug}-deliverables-heading`}
                className="font-heading text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              >
                Entregables tangibles al cerrar el proyecto
              </h2>
              <p className="mt-3 text-muted-foreground">
                Lo que vuestro equipo puede auditar en el acto de entrega y en
                revisiones mensuales.
              </p>
            </header>
          </ScrollReveal>
          <ul className="grid gap-4 md:grid-cols-2">
            {content.deliverables.map((d, index) => (
              <ScrollReveal key={d.title} delay={index * MOTION_STAGGER_STEP}>
                <li
                  className={cn(
                    "list-none rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
                    "border-t-4",
                    index % 2 === 0 ? "border-t-brand-cyan" : "border-t-brand-pink",
                    d.wide && "md:col-span-2",
                  )}
                >
                  <h3 className="font-heading text-lg font-semibold text-slate-900">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {d.description}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
        aria-labelledby={`${slug}-usecases-heading`}
      >
        <ScrollReveal>
          <header className="mb-12 max-w-2xl">
            <h2
              id={`${slug}-usecases-heading`}
              className="font-heading text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Dónde encaja este servicio
            </h2>
            <p className="mt-3 text-muted-foreground">
              Ejemplos reales de aplicación por sector; el playbook se adapta a
              vuestro ICP y compliance.
            </p>
          </header>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {content.useCases.map((uc, index) => (
            <ScrollReveal key={uc.sector} delay={index * MOTION_STAGGER_STEP}>
              <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:shadow-md">
                <p className="inline-flex w-fit rounded-full bg-brand-cyan/10 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-brand-cyan uppercase">
                  {uc.sector}
                </p>
                <h3 className="font-heading mt-3 text-lg font-semibold text-slate-900">
                  {uc.headline}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {uc.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ServicePageFaq
        eyebrow={content.faqSectionEyebrow}
        title={content.faqSectionTitle}
        subtitle={content.faqSectionSubtitle}
        items={content.faqItems}
        slug={slug}
      />

      <ServiceContactBand
        headingId={`${slug}-lead-heading`}
        eyebrow="Contacto"
        title={content.bottomLead.title}
        description={content.bottomLead.description}
      />

      <ServiceStickyCta
        label={content.stickyCtaLabel}
        href="#cualificar"
      />
    </article>
  )
}
