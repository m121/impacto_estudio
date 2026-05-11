import Image from "next/image"

import { HOME_TESTIMONIALS } from "@/lib/constants"

export function TestimonialsSection() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="testimonials-heading"
    >
      <header className="mb-12 max-w-2xl">
        <p className="text-xs font-medium tracking-wide text-brand-cyan uppercase">
          Casos y testimonios
        </p>
        <h2
          id="testimonials-heading"
          className="font-heading mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
        >
          Equipos que ya venden con datos, no con conjeturas
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Resultados representativos de proyectos high-ticket con foco en SQL,
          reuniones y eficiencia comercial.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {HOME_TESTIMONIALS.map((t) => (
          <article
            key={t.name}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div className="flex items-start gap-4">
              <Image
                src={t.avatarSrc}
                alt={t.avatarAlt}
                width={48}
                height={48}
                className="size-12 shrink-0 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700"
              />
              <blockquote className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
            </div>

            <figure className="mt-6 overflow-hidden rounded-lg border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
              <Image
                src={t.roiSrc}
                alt={t.roiAlt}
                width={400}
                height={120}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-auto w-full object-cover"
              />
              <figcaption className="sr-only">
                Indicador antes y después del proyecto para {t.name}
              </figcaption>
            </figure>

            <footer className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800">
              <cite className="not-italic font-semibold text-slate-900 dark:text-slate-50">
                {t.name}
              </cite>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}
