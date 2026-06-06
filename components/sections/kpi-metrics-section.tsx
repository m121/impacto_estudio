import type { KpiSectionContent } from "@/lib/types"
import { MOTION_STAGGER_STEP } from "@/lib/motion"
import { ScrollReveal } from "@/components/motion/scroll-reveal"

type KpiMetricsSectionProps = KpiSectionContent

export function KpiMetricsSection({
  eyebrow,
  title,
  subtitle,
  items,
}: KpiMetricsSectionProps) {
  return (
    <section
      className="border-y border-slate-200 bg-slate-950 px-4 py-14 text-white dark:border-slate-800 sm:px-6 sm:py-16"
      aria-labelledby="kpis-heading"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
        <header className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-medium tracking-wide text-brand-cyan uppercase">
            {eyebrow}
          </p>
          <h2
            id="kpis-heading"
            className="font-heading mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-slate-300">{subtitle}</p>
        </header>
        </ScrollReveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((kpi, index) => (
            <ScrollReveal key={kpi.label} delay={index * MOTION_STAGGER_STEP}>
            <li
              className="rounded-xl border border-slate-800 bg-slate-900/80 p-6"
            >
              <p className="font-heading text-3xl font-semibold text-brand-cyan">
                {kpi.value}
              </p>
              <h3 className="mt-2 font-medium text-white">{kpi.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {kpi.description}
              </p>
            </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
