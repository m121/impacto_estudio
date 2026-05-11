import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Clock, TrendingDown, Users } from "lucide-react"
import { Suspense } from "react"

import { ContactForm } from "@/components/forms/ContactForm"
import { ContactFormFallback } from "@/components/sections/contact-form-fallback"
import { Button } from "@/components/ui/button"
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
      <section
        className="border-b border-slate-200 bg-slate-50 px-4 py-16 dark:border-slate-800 dark:bg-slate-950 sm:px-6 sm:py-20"
        aria-labelledby={`${slug}-hero-h1`}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <header className="flex flex-col gap-6">
            <p className="text-xs font-medium tracking-wide text-brand-cyan uppercase dark:text-brand-cyan">
              Servicio B2B
            </p>
            <h1
              id={`${slug}-hero-h1`}
              className="font-heading text-4xl leading-tight font-semibold tracking-tight text-slate-900 text-balance dark:text-slate-50 sm:text-5xl"
            >
              {content.hero.h1}
            </h1>
            <h2 className="text-lg leading-relaxed font-normal text-slate-600 text-pretty dark:text-slate-300 sm:text-xl">
              {content.hero.h2DirectAnswer}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="shadow-lg shadow-brand-pink/25 transition hover:scale-[1.02] hover:brightness-110"
                asChild
              >
                <Link href={content.hero.primaryCtaHref}>
                  {content.hero.primaryCtaLabel}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/">Volver al inicio</Link>
              </Button>
            </div>
          </header>

          <figure className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-slate-200 bg-slate-200 shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <Image
                src={content.hero.image.src}
                alt={content.hero.image.alt}
                width={content.hero.image.width}
                height={content.hero.image.height}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="sr-only">
              Imagen principal del servicio para contexto visual del comprador B2B
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="bg-slate-900 px-4 py-16 text-white sm:px-6 sm:py-20"
        aria-labelledby={`${slug}-pain-heading`}
      >
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 max-w-2xl">
            <h2
              id={`${slug}-pain-heading`}
              className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Si no sistematizáis la captación, esto es lo que pierde la organización
            </h2>
            <p className="mt-4 text-slate-300">
              Tres síntomas habituales en equipos B2B antes de automatizar con criterio.
            </p>
          </header>
          <ul className="grid gap-8 md:grid-cols-3">
            {content.painPoints.map((pain) => {
              const Icon = PAIN_ICONS[pain.icon]
              return (
                <li
                  key={pain.title}
                  className="rounded-xl border border-slate-700/80 bg-slate-800/40 p-6"
                >
                  <Icon
                    className="size-10 text-brand-cyan"
                    aria-hidden
                  />
                  <h3 className="font-heading mt-4 text-lg font-semibold">
                    {pain.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {pain.description}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
        aria-labelledby={`${slug}-solution-heading`}
      >
        <header className="mb-14 max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-brand-cyan uppercase dark:text-brand-cyan">
            Qué hacemos
          </p>
          <h2
            id={`${slug}-solution-heading`}
            className="font-heading mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
          >
            Cómo se traduce en resultados para ventas y marketing
          </h2>
        </header>

        <div className="flex flex-col gap-16 md:gap-20">
          {content.solutionRows.map((row) => (
            <div
              key={row.title}
              className={cn(
                "flex flex-col gap-10 md:flex-row md:items-center",
                row.imageRight ? "md:flex-row" : "md:flex-row-reverse",
              )}
            >
              <div className="flex-1 space-y-4">
                <div>
                  <p className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
                    {row.statValue}
                  </p>
                  <p className="mt-1 text-xs font-semibold tracking-wide text-brand-cyan uppercase dark:text-brand-cyan">
                    {row.statLabel}
                  </p>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-slate-900 dark:text-slate-50">
                  {row.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {row.body}
                </p>
              </div>
              <figure className="relative aspect-5/3 w-full flex-1 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
                <Image
                  src={row.imageSrc}
                  alt={row.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </figure>
            </div>
          ))}
        </div>
      </section>

      <section
        className="border-y border-slate-200 bg-slate-50 px-4 py-16 dark:border-slate-800 dark:bg-slate-900/40 sm:px-6 sm:py-20"
        aria-labelledby={`${slug}-deliverables-heading`}
      >
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 max-w-2xl">
            <h2
              id={`${slug}-deliverables-heading`}
              className="font-heading text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
            >
              Entregables tangibles al cerrar el proyecto
            </h2>
            <p className="mt-3 text-muted-foreground">
              Lo que vuestro equipo puede auditar en el acto de entrega y en revisiones mensuales.
            </p>
          </header>
          <ul className="grid gap-4 md:grid-cols-2">
            {content.deliverables.map((d) => (
              <li
                key={d.title}
                className={cn(
                  "rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950",
                  d.wide && "md:col-span-2",
                )}
              >
                <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-slate-50">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
        aria-labelledby={`${slug}-usecases-heading`}
      >
        <header className="mb-12 max-w-2xl">
          <h2
            id={`${slug}-usecases-heading`}
            className="font-heading text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
          >
            Dónde encaja este servicio
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ejemplos reales de aplicación por sector; el playbook se adapta a vuestro ICP y compliance.
          </p>
        </header>
        <div className="grid gap-8 md:grid-cols-3">
          {content.useCases.map((uc) => (
            <article
              key={uc.sector}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <p className="text-xs font-semibold tracking-wide text-brand-cyan uppercase dark:text-brand-cyan">
                {uc.sector}
              </p>
              <h3 className="font-heading mt-3 text-lg font-semibold text-slate-900 dark:text-slate-50">
                {uc.headline}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {uc.body}
              </p>
            </article>
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

      <section
        id="cualificar"
        className="scroll-mt-24 bg-slate-900 px-4 py-20 text-slate-50 sm:px-6 sm:py-28"
        aria-labelledby={`${slug}-lead-heading`}
      >
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-medium tracking-wide text-brand-cyan uppercase">
              Contacto
            </p>
            <h2
              id={`${slug}-lead-heading`}
              className="font-heading mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              {content.bottomLead.title}
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              {content.bottomLead.description}
            </p>
          </header>
          <div className="mx-auto max-w-xl">
            <Suspense fallback={<ContactFormFallback />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      <ServiceStickyCta
        label={content.stickyCtaLabel}
        href="#cualificar"
      />
    </article>
  )
}
