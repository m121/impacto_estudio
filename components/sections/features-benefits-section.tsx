import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowUpRight, Bot, Cpu, Megaphone, Waypoints } from "lucide-react"

import { ScrollReveal } from "@/components/motion/scroll-reveal"
import { DarkEditorialBackdrop } from "@/components/sections/dark-editorial-backdrop"
import { HOME_FEATURE_BLOCKS } from "@/lib/constants"
import { MOTION_STAGGER_STEP } from "@/lib/motion"
import { cn } from "@/lib/utils"

const FEATURE_ICONS: Record<
  (typeof HOME_FEATURE_BLOCKS)[number]["icon"],
  LucideIcon
> = {
  cpu: Cpu,
  bot: Bot,
  funnel: Waypoints,
  megaphone: Megaphone,
}

const BENTO_LAYOUT = [
  { colSpan: "lg:col-span-7", featured: true, reverse: false },
  { colSpan: "lg:col-span-5", featured: false, reverse: false },
  { colSpan: "lg:col-span-5", featured: false, reverse: false },
  { colSpan: "lg:col-span-7", featured: true, reverse: true },
] as const

const ACCENT_STYLES = [
  "from-brand-cyan/20 via-transparent to-transparent ring-brand-cyan/30",
  "from-brand-pink/15 via-transparent to-transparent ring-brand-pink/25",
  "from-brand-cyan/15 via-transparent to-transparent ring-brand-cyan/25",
  "from-brand-pink/20 via-brand-cyan/10 to-transparent ring-brand-pink/30",
] as const

type FeatureBlock = (typeof HOME_FEATURE_BLOCKS)[number]

function FeatureBentoCard({
  block,
  index,
  layout,
  accent,
}: {
  block: FeatureBlock
  index: number
  layout: (typeof BENTO_LAYOUT)[number]
  accent: (typeof ACCENT_STYLES)[number]
}) {
  const Icon = FEATURE_ICONS[block.icon]
  const step = String(index + 1).padStart(2, "0")

  return (
    <article
      className={cn(
        "group relative flex h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)] backdrop-blur-sm transition-all duration-500",
        "hover:border-white/20 hover:bg-white/[0.07]",
        layout.featured
          ? "min-h-[320px] flex-col lg:min-h-[360px] lg:flex-row"
          : "min-h-[380px] flex-col",
        layout.featured && layout.reverse && "lg:flex-row-reverse",
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-linear-to-br opacity-80 transition-opacity duration-500 group-hover:opacity-100",
          accent,
        )}
      />

      <div
        className={cn(
          "relative z-10 flex flex-1 flex-col justify-between gap-6 p-6 sm:p-8",
          layout.featured ? "lg:max-w-[52%]" : "",
        )}
      >
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-brand-cyan">
              <Icon className="size-5" aria-hidden />
            </span>
            <span
              className="font-heading text-3xl font-bold tracking-tight text-brand-pink sm:text-4xl"
              aria-hidden
            >
              {step}
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="font-heading text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {block.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-[0.9375rem]">
              {block.description}
            </p>
          </div>
        </div>

        <Link
          href={block.learnMoreHref}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-cyan/50 hover:bg-brand-cyan/10 hover:text-brand-cyan"
        >
          Saber más
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </Link>
      </div>

      <div
        className={cn(
          "relative z-10 shrink-0 overflow-hidden",
          layout.featured
            ? "aspect-5/3 w-full lg:aspect-auto lg:w-[48%] lg:self-stretch"
            : "aspect-5/3 w-full border-t border-white/10 lg:border-t-0",
        )}
      >
        <div className="absolute inset-0 bg-linear-to-t from-[#020617]/80 via-[#020617]/20 to-transparent lg:bg-linear-to-l lg:from-[#020617]/70 lg:via-transparent lg:to-transparent" />
        <div className="relative h-full bg-white p-4 sm:p-5">
          <Image
            src={block.imageSrc}
            alt={block.imageAlt}
            fill
            sizes={
              layout.featured
                ? "(max-width: 1024px) 100vw, 42vw"
                : "(max-width: 1024px) 100vw, 28vw"
            }
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      </div>
    </article>
  )
}

export function FeaturesBenefitsSection() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28"
      aria-labelledby="features-heading"
    >
      <DarkEditorialBackdrop />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <header className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-brand-cyan uppercase">
                La solución
              </p>
              <h2
                id="features-heading"
                className="font-heading mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
              >
                Lo que Impacto Estudio puede hacer por tu marca
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-slate-300 lg:text-lg">
              Cuatro capacidades que puedes activar por separado o combinar en
              un roadmap de crecimiento — de la primera conversación al KPI que
              presentas en comité.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {HOME_FEATURE_BLOCKS.map((block, index) => (
            <ScrollReveal
              key={block.title}
              className={cn("h-full", BENTO_LAYOUT[index]?.colSpan)}
              delay={index * MOTION_STAGGER_STEP}
            >
              <FeatureBentoCard
                block={block}
                index={index}
                layout={BENTO_LAYOUT[index] ?? BENTO_LAYOUT[0]}
                accent={ACCENT_STYLES[index] ?? ACCENT_STYLES[0]}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
