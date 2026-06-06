import Image from "next/image"
import { AlertCircle, TrendingDown } from "lucide-react"

import { ScrollReveal } from "@/components/motion/scroll-reveal"
import { HOME_PROBLEM_IMAGE, HOME_PROBLEM_SIGNALS } from "@/lib/constants"

export function ProblemAgitationSection() {
  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
      aria-labelledby="problem-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-pink/[0.04] via-white to-brand-cyan/[0.06]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-brand-pink/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 size-64 rounded-full bg-brand-cyan/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <article className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-pink/20 bg-brand-pink/5 px-3 py-1 text-xs font-medium tracking-wide text-brand-pink uppercase">
                <AlertCircle className="size-3.5" aria-hidden />
                El problema
              </div>

              <div className="space-y-4 border-l-4 border-brand-pink/50 pl-5">
                <h2
                  id="problem-heading"
                  className="font-heading text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
                >
                  ¿Tu marca genera visitas pero no oportunidades comerciales?
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Muchas empresas B2B invierten en diseño o tráfico sin un
                  sistema detrás: embudo difuso, presencia digital
                  desactualizada y ventas persiguiendo leads fríos sin datos que
                  lo justifiquen.
                </p>
              </div>

              <p className="leading-relaxed text-muted-foreground">
                Sin embudos medibles, IA aplicada con criterio o una web que
                transmita autoridad, marketing no puede demostrar impacto en SQL,
                pipeline ni velocidad hasta cierre ante dirección.
              </p>

              <ul className="space-y-3" aria-label="Señales del problema">
                {HOME_PROBLEM_SIGNALS.map((signal) => (
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
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <figure className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-3 rotate-2 rounded-2xl border border-slate-200/60 bg-slate-100/80"
              />
              <div
                aria-hidden
                className="absolute -inset-1.5 -rotate-1 rounded-2xl border border-slate-200 bg-white/60"
              />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-lg ring-1 ring-slate-900/5 sm:p-6">
                <Image
                  src={HOME_PROBLEM_IMAGE.src}
                  alt={HOME_PROBLEM_IMAGE.alt}
                  width={HOME_PROBLEM_IMAGE.width}
                  height={HOME_PROBLEM_IMAGE.height}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full object-contain"
                />
                <figcaption className="sr-only">
                  Ilustración del problema: métricas de captación planas en
                  entorno B2B
                </figcaption>
                <div
                  aria-hidden
                  className="absolute bottom-5 left-5 rounded-lg border border-brand-pink/20 bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm"
                >
                  <p className="text-[0.65rem] font-semibold tracking-wide text-slate-500 uppercase">
                    Señal de alerta
                  </p>
                  <p className="font-heading text-lg font-semibold text-brand-pink">
                    Pipeline plano
                  </p>
                </div>
              </div>
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
