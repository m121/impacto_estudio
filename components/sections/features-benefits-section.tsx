import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Bot, Cpu, Megaphone, Waypoints } from "lucide-react"

import { HOME_FEATURE_BLOCKS } from "@/lib/constants"
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

export function FeaturesBenefitsSection() {
  return (
    <section
      className="border-y border-slate-200 bg-[#FFFFFF] px-4 py-16 dark:border-slate-800 dark:bg-slate-950 sm:px-6 sm:py-20"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-brand-cyan uppercase">
            La solución
          </p>
          <h2
            id="features-heading"
            className="font-heading mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
          >
            Resultados que tu equipo comercial puede defender ante dirección
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Desarrollo técnico, IA aplicada con criterio y embudos construidos
            para reuniones cualificadas — no para vanity metrics.
          </p>
        </header>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-3">
          {HOME_FEATURE_BLOCKS.map((block) => {
            const Icon = FEATURE_ICONS[block.icon]
            return (
              <article
                key={block.title}
                className={cn(
                  "group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 shadow-sm transition-colors hover:border-brand-cyan/45 dark:border-slate-800 dark:bg-slate-900/60",
                  block.wide ? "md:col-span-2" : "md:col-span-1",
                )}
              >
                <div className="relative aspect-5/3 w-full shrink-0 bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={block.imageSrc}
                    alt={block.imageAlt}
                    fill
                    sizes={
                      block.wide
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <Icon
                    className="size-9 shrink-0 text-brand-cyan"
                    aria-hidden
                  />
                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-slate-50">
                      {block.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {block.description}
                    </p>
                  </div>
                  <Link
                    href={block.learnMoreHref}
                    className="mt-auto inline-flex text-sm font-medium text-brand-cyan underline-offset-4 transition hover:text-brand-pink hover:underline"
                  >
                    Saber más
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
