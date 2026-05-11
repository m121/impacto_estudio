import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { HERO_MAIN_IMAGE } from "@/lib/constants"

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#020617] px-4 py-16 text-white sm:px-6 sm:py-24"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,193,213,0.18),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(248,70,119,0.14),transparent_45%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <header className="flex flex-col gap-8">
          <p className="text-xs font-medium tracking-wide text-brand-cyan uppercase">
            Marketing high-ticket · España
          </p>
          <h1
            id="hero-heading"
            className="font-heading max-w-2xl text-4xl leading-tight font-semibold tracking-tight text-balance text-white sm:text-5xl"
          >
            Escalamos tus ventas B2B con{" "}
            <span className="bg-linear-to-r from-brand-pink via-primary to-brand-pink bg-clip-text text-transparent">
              Inteligencia Artificial
            </span>
            , embudos y automatización comercial
          </h1>
          <h2 className="max-w-xl text-lg leading-relaxed font-normal text-slate-300 text-pretty sm:text-xl">
            Automatización comercial, funnels B2B y presencia digital para
            cerrar negocios de mayor ticket con menos fricción operativa.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="shadow-lg shadow-brand-pink/25 transition hover:scale-[1.02] hover:brightness-110" asChild>
              <Link href="/#cualificar">Solicitar diagnóstico</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-cyan/70 bg-transparent text-brand-cyan hover:bg-brand-cyan/10"
              asChild
            >
              <Link href="/servicios/automatizacion-ia">
                Ver automatización IA
              </Link>
            </Button>
          </div>
        </header>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <figure className="relative aspect-4/3 overflow-hidden rounded-xl bg-slate-800 shadow-2xl ring-1 ring-brand-cyan/25">
            <Image
              src={HERO_MAIN_IMAGE.src}
              alt={HERO_MAIN_IMAGE.alt}
              width={HERO_MAIN_IMAGE.width}
              height={HERO_MAIN_IMAGE.height}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
            <figcaption className="sr-only">
              Visual principal del hero: mockup de panel de automatización B2B
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
