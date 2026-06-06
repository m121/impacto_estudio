import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { DarkEditorialBackdrop } from "@/components/sections/dark-editorial-backdrop"
import { FadeIn } from "@/components/motion/scroll-reveal"
import { Button } from "@/components/ui/button"
import { HERO_MAIN_IMAGE, HERO_PILLS } from "@/lib/constants"

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 text-white sm:px-6 sm:py-28"
      aria-labelledby="hero-heading"
    >
      <DarkEditorialBackdrop />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <FadeIn>
          <header className="flex flex-col gap-8">
            <p className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-brand-cyan uppercase">
              Crecimiento B2B · España
            </p>

            <div className="space-y-5">
              <h1
                id="hero-heading"
                className="font-heading max-w-2xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.35rem]"
              >
                Vende más y renueva tu{" "}
                <span className="text-brand-pink">
                  presencia digital
                </span>{" "}
                con Impacto Estudio
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Embudos medibles, automatización comercial con IA y web
                corporativa para generar oportunidades de mayor ticket — con
                KPIs que dirección puede defender.
              </p>
            </div>

            <ul className="flex flex-wrap gap-2" aria-label="Líneas de servicio">
              {HERO_PILLS.map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                >
                  {pill}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="shadow-lg shadow-brand-pink/30 transition hover:scale-[1.02] hover:brightness-110"
                asChild
              >
                <Link target="_blank" href="https://tr.ee/ncIMJqO4w9">
                  Solicitar diagnóstico
                </Link>
              </Button>
              <Link
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-brand-cyan/50 hover:bg-brand-cyan/10 hover:text-brand-cyan"
              >
                Ver servicios
                <ArrowUpRight
                  className="size-4 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </header>
        </FadeIn>

        <FadeIn delay={0.12}>
          <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)] backdrop-blur-sm">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-cyan/20 via-transparent to-brand-pink/15 opacity-90"
            />
            <div className="relative aspect-4/3 overflow-hidden sm:aspect-5/4">
              <div className="absolute inset-0 bg-linear-to-t from-[#020617]/70 via-[#020617]/15 to-transparent" />
              <div className="relative h-full bg-white p-5 sm:p-7">
                <Image
                  src={HERO_MAIN_IMAGE.src}
                  alt={HERO_MAIN_IMAGE.alt}
                  width={HERO_MAIN_IMAGE.width}
                  height={HERO_MAIN_IMAGE.height}
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>
            <figcaption className="sr-only">
              Visual principal del hero: panel de automatización B2B
            </figcaption>
            <div
              aria-hidden
              className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-[#020617]/70 px-3 py-1 text-xs text-slate-300 backdrop-blur-sm"
            >
              KPIs · Pipeline · CRM
            </div>
          </figure>
        </FadeIn>
      </div>
    </section>
  )
}
