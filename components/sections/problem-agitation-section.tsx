import Image from "next/image"

import { HOME_PROBLEM_IMAGE } from "@/lib/constants"

export function ProblemAgitationSection() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="problem-heading"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <article className="space-y-6">
          <p className="text-xs font-medium tracking-wide text-brand-cyan uppercase">
            El problema actual
          </p>
          <h2
            id="problem-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
          >
            ¿Tu web es un folleto digital que no genera oportunidades?
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Muchas marcas B2B invierten en diseño pero no en sistemas: sin
            embudo claro, sin cualificación y sin métricas que importen al
            comité de dirección. El resultado son visitas que no se convierten
            en reuniones con perfil ideal.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Sin automatización ni mensajes alineados al ticket medio, ventas
            acaba respondiendo a leads fríos y marketing no puede demostrar
            impacto en SQL ni velocidad hasta propuesta.
          </p>
        </article>

        <figure className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <Image
            src={HOME_PROBLEM_IMAGE.src}
            alt={HOME_PROBLEM_IMAGE.alt}
            width={HOME_PROBLEM_IMAGE.width}
            height={HOME_PROBLEM_IMAGE.height}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full object-cover"
          />
          <figcaption className="sr-only">
            Ilustración del problema: métricas de captación planas en entorno B2B
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
