import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { DarkEditorialBackdrop } from "@/components/sections/dark-editorial-backdrop"
import { FadeIn } from "@/components/motion/scroll-reveal"
import { Button } from "@/components/ui/button"

type ServiceLandingHeroProps = {
  headingId: string
  eyebrow: string
  h1: string
  h2: string
  primaryCtaHref: string
  primaryCtaLabel: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  imageBadge?: string
  h1Accent?: string
}

export function ServiceLandingHero({
  headingId,
  eyebrow,
  h1,
  h2,
  primaryCtaHref,
  primaryCtaLabel,
  image,
  imageBadge,
  h1Accent,
}: ServiceLandingHeroProps) {
  const accentIndex = h1Accent ? h1.indexOf(h1Accent) : -1
  const h1Before = accentIndex >= 0 ? h1.slice(0, accentIndex) : h1
  const h1After =
    accentIndex >= 0 ? h1.slice(accentIndex + (h1Accent?.length ?? 0)) : ""

  return (
    <section
      className="relative overflow-hidden px-4 py-20 text-white sm:px-6 sm:py-28"
      aria-labelledby={headingId}
    >
      <DarkEditorialBackdrop />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <FadeIn>
          <header className="flex flex-col gap-8">
            <p className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-brand-cyan uppercase">
              {eyebrow}
            </p>

            <div className="space-y-5">
              <h1
                id={headingId}
                className="font-heading max-w-2xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.1rem]"
              >
                {h1Accent && accentIndex >= 0 ? (
                  <>
                    {h1Before}
                    <span className="text-brand-pink">{h1Accent}</span>
                    {h1After}
                  </>
                ) : (
                  h1
                )}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {h2}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="shadow-lg shadow-brand-pink/30 transition hover:scale-[1.02] hover:brightness-110"
                asChild
              >
                <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
              </Button>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-brand-cyan/50 hover:bg-brand-cyan/10 hover:text-brand-cyan"
              >
                Volver al inicio
                <ArrowUpRight
                  className="size-4 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </header>
        </FadeIn>

        <FadeIn delay={0.12}>
          <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/4 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)] backdrop-blur-sm">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-cyan/20 via-transparent to-brand-pink/15 opacity-90"
            />
            <div className="relative aspect-4/3 overflow-hidden sm:aspect-5/4">
              <div className="absolute inset-0 bg-linear-to-t from-[#020617]/70 via-[#020617]/15 to-transparent" />
              <div className="relative h-full bg-white p-5 sm:p-7">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>
            {imageBadge ? (
              <div
                aria-hidden
                className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-[#020617]/70 px-3 py-1 text-xs text-slate-300 backdrop-blur-sm"
              >
                {imageBadge}
              </div>
            ) : null}
            <figcaption className="sr-only">{image.alt}</figcaption>
          </figure>
        </FadeIn>
      </div>
    </section>
  )
}
