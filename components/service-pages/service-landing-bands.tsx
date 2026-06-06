import { Suspense } from "react"
import { AlertCircle, TrendingDown } from "lucide-react"

import { ContactForm } from "@/components/forms/ContactForm"
import { ContactFormFallback } from "@/components/sections/contact-form-fallback"
import { DarkEditorialBackdrop } from "@/components/sections/dark-editorial-backdrop"
import { ScrollReveal } from "@/components/motion/scroll-reveal"

type ServiceProblemBandProps = {
  headingId: string
  title: string
  body: string
  signals?: readonly string[]
}

export function ServiceProblemBand({
  headingId,
  title,
  body,
  signals,
}: ServiceProblemBandProps) {
  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
      aria-labelledby={headingId}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-pink/4 via-white to-brand-cyan/6"
      />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-pink/20 bg-brand-pink/5 px-3 py-1 text-xs font-medium tracking-wide text-brand-pink uppercase">
              <AlertCircle className="size-3.5" aria-hidden />
              El problema
            </div>

            <div className="space-y-4 border-l-4 border-brand-pink/50 pl-5">
              <h2
                id={headingId}
                className="font-heading text-3xl font-semibold tracking-tight text-balance text-slate-900 sm:text-4xl"
              >
                {title}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>

            {signals && signals.length > 0 ? (
              <ul className="space-y-3" aria-label="Señales del problema">
                {signals.map((signal) => (
                  <li
                    key={signal}
                    className="flex items-start gap-3 rounded-lg border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm"
                  >
                    <TrendingDown
                      className="mt-0.5 size-4 shrink-0 text-brand-pink"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-slate-700">
                      {signal}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

type ServiceContactBandProps = {
  headingId: string
  eyebrow: string
  title: string
  description: string
}

export function ServiceContactBand({
  headingId,
  eyebrow,
  title,
  description,
}: ServiceContactBandProps) {
  return (
    <section
      id="cualificar"
      className="relative scroll-mt-24 overflow-hidden px-4 py-20 text-white sm:px-6 sm:py-28"
      aria-labelledby={headingId}
    >
      <DarkEditorialBackdrop />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <header className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-medium tracking-[0.2em] text-brand-cyan uppercase">
              {eyebrow}
            </p>
            <h2
              id={headingId}
              className="font-heading mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-4 text-lg text-slate-300">{description}</p>
          </header>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/4 p-1 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)] backdrop-blur-sm">
            <Suspense fallback={<ContactFormFallback />}>
              <ContactForm />
            </Suspense>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
