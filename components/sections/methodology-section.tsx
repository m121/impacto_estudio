import { RotateCw } from "lucide-react"

import { ScrollReveal } from "@/components/motion/scroll-reveal"
import { HOME_METHODOLOGY_STEPS } from "@/lib/constants"
import { MOTION_STAGGER_STEP } from "@/lib/motion"
import { cn } from "@/lib/utils"

const CYCLE_POSITIONS = [
  "md:absolute md:top-0 md:left-1/2 md:w-[min(100%,18rem)] md:-translate-x-1/2 md:-translate-y-1",
  "md:absolute md:bottom-0 md:left-0 md:w-[min(100%,18rem)]",
  "md:absolute md:right-0 md:bottom-0 md:w-[min(100%,18rem)]",
] as const

function MethodologyCycleSvg() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 480 360"
      className="mx-auto h-auto w-full max-w-md text-brand-cyan md:absolute md:inset-0 md:max-w-none md:opacity-90"
      fill="none"
    >
      <defs>
        <linearGradient id="methodology-cycle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C1D5" />
          <stop offset="50%" stopColor="#F84677" />
          <stop offset="100%" stopColor="#00C1D5" />
        </linearGradient>
      </defs>
      <circle
        cx="240"
        cy="185"
        r="118"
        stroke="url(#methodology-cycle-grad)"
        strokeWidth="1.5"
        strokeDasharray="7 6"
        opacity="0.45"
      />
      <path
        d="M240 62 C 120 120, 95 250, 95 285"
        stroke="url(#methodology-cycle-grad)"
        strokeWidth="2"
        markerEnd="url(#methodology-arrow)"
      />
      <path
        d="M105 300 C 180 330, 300 330, 375 300"
        stroke="url(#methodology-cycle-grad)"
        strokeWidth="2"
        markerEnd="url(#methodology-arrow)"
      />
      <path
        d="M385 285 C 390 180, 340 90, 240 62"
        stroke="url(#methodology-cycle-grad)"
        strokeWidth="2"
        markerEnd="url(#methodology-arrow)"
      />
      <defs>
        <marker
          id="methodology-arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="#00C1D5" />
        </marker>
      </defs>
    </svg>
  )
}

export function MethodologySection() {
  return (
    <section
      className="border-y border-slate-200 bg-linear-to-b from-slate-100/70 via-white to-slate-50 px-4 py-16 sm:px-6 sm:py-24"
      aria-labelledby="methodology-heading"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <header className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <p className="text-xs font-medium tracking-[0.2em] text-brand-cyan uppercase">
              Metodología
            </p>
            <h2
              id="methodology-heading"
              className="font-heading mt-3 text-3xl font-semibold tracking-tight text-balance text-slate-900 sm:text-4xl"
            >
              Un ciclo de mejora, no un proyecto que termina
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Diagnosticamos, ejecutamos y optimizamos en bucle — alineando
              marketing, ventas y dirección con datos reales cada iteración.
            </p>
          </header>
        </ScrollReveal>

        <div className="relative md:mx-auto md:min-h-[34rem] md:max-w-4xl">
          <div className="hidden md:block">
            <MethodologyCycleSvg />
          </div>

          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 z-10 hidden size-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-slate-200 bg-white shadow-md md:flex"
          >
            <RotateCw className="size-7 text-brand-cyan" />
            <span className="mt-1 text-[0.625rem] font-semibold tracking-wide text-slate-500 uppercase">
              Ciclo
            </span>
          </div>

          <ol className="relative z-20 grid list-none gap-6 p-0 md:block md:min-h-[34rem]">
            {HOME_METHODOLOGY_STEPS.map((item, index) => (
              <li key={item.step} className={cn(CYCLE_POSITIONS[index])}>
                <ScrollReveal delay={index * MOTION_STAGGER_STEP}>
                  <div
                    className={cn(
                      "rounded-xl border border-slate-200 bg-white/95 p-5 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md sm:p-6",
                      "border-t-4",
                      index === 0 && "border-t-brand-cyan",
                      index === 1 && "border-t-brand-pink",
                      index === 2 && "border-t-brand-cyan",
                    )}
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-slate-600 uppercase">
                        {item.cycleLabel}
                      </span>
                      <span
                        className="font-heading text-2xl font-bold text-brand-cyan/30"
                        aria-hidden
                      >
                        {String(item.step).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-slate-900">
                      <span className="sr-only">Fase {item.step}: </span>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>

          <div
            aria-hidden
            className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground md:hidden"
          >
            <RotateCw className="size-4 text-brand-cyan" />
            El ciclo se repite con cada iteración de datos
          </div>
        </div>
      </div>
    </section>
  )
}
