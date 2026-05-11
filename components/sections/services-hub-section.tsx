import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SERVICE_CARDS } from "@/lib/constants"

export function ServicesHubSection() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="services-hub-heading"
    >
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium tracking-wide text-brand-cyan uppercase">
          Servicios
        </p>
        <h2
          id="services-hub-heading"
          className="font-heading mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
        >
          Hub SEO: profundiza en cada línea de trabajo
        </h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Tres landing dedicadas con contenido específico para decisores que
          investigan antes de solicitar una reunión.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {SERVICE_CARDS.map((item) => (
          <article key={item.href}>
            <Card className="h-full overflow-hidden gap-0 border-slate-200 pt-0 pb-4 transition-shadow hover:shadow-md dark:border-slate-800">
              <div className="relative aspect-5/3 w-full bg-slate-200 dark:bg-slate-800">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader className="pt-4">
                <CardTitle className="font-heading text-lg">{item.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <div className="px-4">
                <Button variant="secondary" size="sm" asChild>
                  <Link href={item.href}>Ir a la landing del servicio</Link>
                </Button>
              </div>
            </Card>
          </article>
        ))}
      </div>
    </section>
  )
}
