"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { HomeFaqItem } from "@/lib/types"

type ServicePageFaqProps = {
  eyebrow: string
  title: string
  subtitle: string
  items: HomeFaqItem[]
  /** Prefijo único por página para valores del acordeón (ej. automatizacion-ia). */
  slug: string
}

export function ServicePageFaq({
  eyebrow,
  title,
  subtitle,
  items,
  slug,
}: ServicePageFaqProps) {
  const headingId = `${slug}-faq-heading`

  return (
    <section
      className="border-y border-slate-200 bg-slate-50 px-4 py-16 dark:border-slate-800 dark:bg-slate-900/50 sm:px-6 sm:py-20"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 text-center">
          <p className="text-xs font-medium tracking-wide text-brand-cyan uppercase">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="font-heading mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground">{subtitle}</p>
        </header>

        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem
              key={`${slug}-faq-${index}`}
              value={`${slug}-faq-${index}`}
            >
              <AccordionTrigger className="text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
