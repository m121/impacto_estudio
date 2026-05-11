"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { HomeFaqItem } from "@/lib/types"

type HomeFAQProps = {
  items: HomeFaqItem[]
}

export function HomeFAQ({ items }: HomeFAQProps) {
  return (
    <section
      className="border-y border-slate-200 bg-white px-4 py-16 dark:border-slate-800 dark:bg-slate-950 sm:px-6 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 text-center">
          <p className="text-xs font-medium tracking-wide text-brand-cyan uppercase">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="font-heading mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
          >
            Preguntas frecuentes de clientes B2B
          </h2>
          <p className="mt-4 text-muted-foreground">
            Respuestas directas para equipos que evalúan automatización, Next.js
            y embudos high-ticket.
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
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
