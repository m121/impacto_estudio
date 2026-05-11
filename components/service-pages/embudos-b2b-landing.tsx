import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import {
  Radar,
  SlidersHorizontal,
  Workflow,
} from "lucide-react"

import { ContactForm } from "@/components/forms/ContactForm"
import { ContactFormFallback } from "@/components/sections/contact-form-fallback"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { EmbudosB2bLandingData } from "@/lib/types"

import { ServicePageFaq } from "./service-page-faq"
import { ServiceStickyCta } from "./service-sticky-cta"

const FEATURE_ICONS = [Radar, SlidersHorizontal, Workflow] as const

export function EmbudosB2bLanding({ data }: { data: EmbudosB2bLandingData }) {
  const slug = "embudos-b2b"

  return (
    <article className="pb-28 md:pb-32">
      <section
        className="border-b border-slate-800 bg-slate-950 px-4 py-16 sm:px-6 sm:py-20"
        aria-labelledby={`${slug}-hero-h1`}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <header className="flex flex-col gap-6">
            <p className="text-xs font-medium tracking-wide text-[#00C1D5] uppercase">
              Servicio B2B · Embudos
            </p>
            <h1
              id={`${slug}-hero-h1`}
              className="font-heading text-4xl leading-tight font-semibold tracking-tight text-balance text-slate-50 sm:text-5xl"
            >
              {data.hero.h1}
            </h1>
            <h2 className="text-lg leading-relaxed font-normal text-pretty text-slate-300 sm:text-xl">
              {data.hero.h2}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className={cn(
                  "border-transparent bg-[#F84677] text-white shadow-lg shadow-[#F84677]/35 transition hover:scale-[1.02] hover:bg-[#F84677]/90",
                )}
                asChild
              >
                <Link href={data.hero.primaryCtaHref}>
                  {data.hero.primaryCtaLabel}
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 bg-transparent text-slate-100 hover:bg-slate-800/80"
                asChild
              >
                <Link href="/">Volver al inicio</Link>
              </Button>
            </div>
          </header>

          <figure className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-slate-700/90 bg-slate-900 shadow-xl shadow-[#00C1D5]/15 ring-1 ring-[#00C1D5]/20">
              <Image
                src={data.hero.image.src}
                alt={data.hero.image.alt}
                width={data.hero.image.width}
                height={data.hero.image.height}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="sr-only">
              Ilustración de embudo de automatización para contexto visual
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="bg-slate-900 px-4 py-16 sm:px-6 sm:py-20"
        aria-labelledby={`${slug}-pain-heading`}
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id={`${slug}-pain-heading`}
            className="font-heading text-3xl font-semibold tracking-tight text-balance text-slate-50 sm:text-4xl"
          >
            {data.problem.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            {data.problem.body}
          </p>
        </div>
      </section>

      <section
        className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-20"
        aria-labelledby={`${slug}-solution-heading`}
      >
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 max-w-2xl">
            <p className="text-xs font-medium tracking-wide text-[#00C1D5] uppercase">
              Solución
            </p>
            <h2
              id={`${slug}-solution-heading`}
              className="font-heading mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
            >
              Pipeline predecible, sin diluir comercial con curiosos
            </h2>
          </header>
          <ul className="grid gap-10 md:grid-cols-3">
            {data.features.map((f, index) => {
              const Icon = FEATURE_ICONS[index]
              return (
                <li
                  key={f.title}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-6"
                >
                  <Icon
                    className="size-10 text-[#00C1D5]"
                    aria-hidden
                  />
                  <h3 className="font-heading mt-4 text-lg font-semibold text-slate-50">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {f.description}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section
        className="border-y border-slate-800 bg-slate-900/70 px-4 py-16 sm:px-6 sm:py-20"
        aria-labelledby={`${slug}-deliverables-heading`}
      >
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 max-w-2xl">
            <h2
              id={`${slug}-deliverables-heading`}
              className="font-heading text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
            >
              Entregables
            </h2>
          </header>
          <div className="grid auto-rows-fr gap-4 md:grid-cols-3">
            {data.deliverablesBento.map((item) => (
              <article
                key={item.title}
                className={cn(
                  "rounded-2xl border border-slate-700/90 bg-slate-950 p-6 shadow-sm",
                  item.className ?? "",
                )}
              >
                <h3 className="font-heading text-lg font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-20"
        aria-labelledby={`${slug}-proof-heading`}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id={`${slug}-proof-heading`}
            className="font-heading text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
          >
            {data.proof.title}
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {data.proof.items.map((text) => (
              <li
                key={text}
                className="rounded-xl border border-slate-800 bg-slate-900/50 px-5 py-4 text-sm leading-relaxed text-slate-300"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServicePageFaq
        eyebrow={data.faqSectionEyebrow}
        title={data.faqSectionTitle}
        subtitle={data.faqSectionSubtitle}
        items={data.faqItems}
        slug={slug}
      />

      <section
        id="cualificar"
        className="scroll-mt-24 bg-slate-900 px-4 py-20 text-slate-50 sm:px-6 sm:py-28"
        aria-labelledby={`${slug}-lead-heading`}
      >
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-medium tracking-wide text-[#00C1D5] uppercase">
              Contacto
            </p>
            <h2
              id={`${slug}-lead-heading`}
              className="font-heading mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              {data.bottomLead.title}
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              {data.bottomLead.description}
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
        label={data.stickyCtaLabel}
        href="#cualificar"
      />
    </article>
  )
}
