import Image from "next/image"
import { CircleCheck } from "lucide-react"

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
import type { PresenciaDigitalLandingData } from "@/lib/types"

import { ServicePageFaq } from "./service-page-faq"
import { ServiceStickyCta } from "./service-sticky-cta"

const PROBLEM_SIGNALS = [
  "Web lenta o desactualizada que resta credibilidad",
  "Marca inconsistente entre canales y materiales",
  "Competencia por precio por falta de autoridad percibida",
] as const

export function PresenciaDigitalLanding({
  data,
}: {
  data: PresenciaDigitalLandingData
}) {
  const slug = "presencia-digital"

  return (
    <article className="pb-28 md:pb-32">
      <ServiceLandingHero
        headingId={`${slug}-hero-h1`}
        eyebrow="Servicio B2B · Marca digital"
        h1={data.hero.h1}
        h1Accent="High-Ticket"
        h2={data.hero.h2}
        primaryCtaHref={data.hero.primaryCtaHref}
        primaryCtaLabel={data.hero.primaryCtaLabel}
        image={data.hero.image}
        imageBadge="Marca · Next.js · SEO"
      />

      <ServiceProblemBand
        headingId={`${slug}-pain-heading`}
        title={data.problem.title}
        body={data.problem.body}
        signals={PROBLEM_SIGNALS}
      />

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
                Solución
              </p>
              <h2
                id={`${slug}-solution-heading`}
                className="font-heading mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              >
                De la marca al rendimiento tecnológico
              </h2>
            </header>
          </ScrollReveal>

          <ol className="flex list-none flex-col gap-16 p-0 md:gap-20">
            {data.solutionRows.map((row, index) => {
              const rowId = `${slug}-solution-${index + 1}`
              const mediaFirst = row.imageSide === "left"

              return (
                <ScrollReveal key={row.title} delay={index * 0.05}>
                  <li>
                    <article
                      className={cn(
                        "flex flex-col gap-10 md:flex-row md:items-center",
                        mediaFirst ? "md:flex-row" : "md:flex-row-reverse",
                      )}
                      aria-labelledby={rowId}
                    >
                      <div className="flex-1 space-y-4">
                        <p className="font-heading text-4xl font-bold text-brand-cyan/25">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3
                          id={rowId}
                          className="font-heading text-2xl font-semibold text-slate-900"
                        >
                          {row.title}
                        </h3>
                        <p className="leading-relaxed text-muted-foreground">
                          {row.body}
                        </p>
                      </div>
                      <figure className="relative mx-auto w-full flex-1">
                        <div
                          aria-hidden
                          className="absolute -inset-2 -rotate-1 rounded-2xl border border-slate-200/60 bg-slate-100/80"
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
                    </article>
                  </li>
                </ScrollReveal>
              )
            })}
          </ol>
        </div>
      </section>

      <section
        className="border-y border-slate-200 bg-linear-to-b from-slate-50 to-white px-4 py-16 sm:px-6 sm:py-24"
        aria-labelledby={`${slug}-deliverables-heading`}
      >
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <header className="mb-10">
              <p className="text-xs font-medium tracking-[0.2em] text-brand-cyan uppercase">
                Entregables
              </p>
              <h2
                id={`${slug}-deliverables-heading`}
                className="font-heading mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              >
                Paquete de autoridad digital
              </h2>
            </header>
          </ScrollReveal>
          <ul className="space-y-4">
            {data.deliverablesList.map((line, index) => (
              <ScrollReveal key={line} delay={index * MOTION_STAGGER_STEP}>
                <li className="flex gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md">
                  <CircleCheck
                    className="mt-0.5 size-6 shrink-0 text-brand-cyan"
                    aria-hidden
                  />
                  <span className="text-base leading-relaxed text-slate-800">
                    {line}
                  </span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
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
