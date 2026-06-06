import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowUpRight, Bot, Megaphone, Waypoints } from "lucide-react"

import { ScrollReveal } from "@/components/motion/scroll-reveal"
import { SERVICE_CARDS } from "@/lib/constants"
import { MOTION_STAGGER_STEP } from "@/lib/motion"
import { cn } from "@/lib/utils"

const SERVICE_ICONS: Record<
  (typeof SERVICE_CARDS)[number]["icon"],
  LucideIcon
> = {
  bot: Bot,
  funnel: Waypoints,
  megaphone: Megaphone,
}

const STEP_RING = [
  "border-brand-cyan text-brand-cyan shadow-brand-cyan/20",
  "border-brand-pink text-brand-pink shadow-brand-pink/20",
  "border-brand-cyan text-brand-cyan shadow-brand-cyan/20",
] as const

type ServiceCard = (typeof SERVICE_CARDS)[number]

function ServiceStepCard({
  item,
  index,
  isLast,
  delay,
}: {
  item: ServiceCard
  index: number
  isLast: boolean
  delay: number
}) {
  const Icon = SERVICE_ICONS[item.icon]
  const step = String(index + 1).padStart(2, "0")

  return (
    <li className="relative grid grid-cols-[3rem_1fr] gap-x-5 gap-y-0 md:grid-cols-1 md:gap-x-0">
      {!isLast ? (
        <div
          aria-hidden
          className="absolute top-11 bottom-0 left-6 w-px -translate-x-1/2 bg-linear-to-b from-brand-cyan via-brand-pink/70 to-brand-cyan md:hidden"
        />
      ) : null}

      <div className="relative z-10 flex flex-col items-center md:mb-6">
        <div
          className={cn(
            "flex size-11 shrink-0 items-center justify-center rounded-full border-2 bg-white font-heading text-sm font-bold shadow-md",
            STEP_RING[index] ?? STEP_RING[0],
          )}
        >
          {step}
        </div>
        <p className="mt-2 hidden text-center text-[0.65rem] font-semibold tracking-wide text-slate-500 uppercase md:block">
          {item.phase}
        </p>
      </div>

      <ScrollReveal delay={delay} className="min-w-0 md:col-start-1">
      <article
        className={cn(
          "group mb-10 flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 md:mb-0",
          "hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:shadow-md",
        )}
      >
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-2.5 md:hidden">
          <Icon className="size-4 text-brand-cyan" aria-hidden />
          <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            {item.phase}
          </span>
        </div>

        <div className="relative aspect-5/3 w-full bg-white p-4">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <Icon
            className="hidden size-8 text-brand-cyan md:block"
            aria-hidden
          />
          <div className="space-y-2">
            <h3 className="font-heading text-lg font-semibold text-slate-900 sm:text-xl">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
          <Link
            href={item.href}
            className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan transition hover:text-brand-pink"
          >
            Ver landing del servicio
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </article>
      </ScrollReveal>
    </li>
  )
}

export function ServicesHubSection() {
  const lastIndex = SERVICE_CARDS.length - 1

  return (
    <section
      id="servicios"
      className="scroll-mt-24 border-y border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-24"
      aria-labelledby="services-hub-heading"
    >
      <div className="mx-auto w-full max-w-6xl">
        <ScrollReveal>
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-medium tracking-[0.2em] text-brand-cyan uppercase">
              Servicios
            </p>
            <h2
              id="services-hub-heading"
              className="font-heading mt-3 text-3xl font-semibold tracking-tight text-balance text-slate-900 sm:text-4xl"
            >
              Tres servicios para vender más y{" "}
              <span className="text-brand-pink">crecer con datos</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Un roadmap progresivo: captar conversaciones, convertir con
              embudos medibles y consolidar tu presencia digital.
            </p>
          </header>
        </ScrollReveal>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute top-5.5 right-[16.667%] left-[16.667%] hidden h-0.5 md:block"
          >
            <div className="h-full rounded-full bg-linear-to-r from-brand-cyan via-brand-pink to-brand-cyan opacity-60" />
          </div>

          <ol className="grid md:grid-cols-3 md:gap-8">
            {SERVICE_CARDS.map((item, index) => (
              <ServiceStepCard
                key={item.href}
                item={item}
                index={index}
                isLast={index === lastIndex}
                delay={index * MOTION_STAGGER_STEP}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
