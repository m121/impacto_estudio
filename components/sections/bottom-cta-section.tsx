import { Suspense } from "react"

import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/forms/ContactForm"
import Link from "next/link"

import { ContactFormFallback } from "./contact-form-fallback"

export function BottomCtaSection() {
  return (
    <section
      id="cualificar"
      className="scroll-mt-24 bg-[#020617] px-4 py-20 text-white sm:px-6 sm:py-28"
      aria-labelledby="cta-final-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-medium tracking-wide text-brand-cyan uppercase">
            Siguiente paso
          </p>
          <h2
            id="cta-final-heading"
            className="font-heading mt-3 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl"
          >
            Solicita una cualificación y recibe un plan acorde a tu ticket
            medio
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Cuéntanos objetivo, web actual y presupuesto orientativo: respondemos
            con propuesta o siguientes preguntas en 1–2 días laborables.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="shadow-lg shadow-brand-pink/30 transition hover:scale-[1.02] hover:brightness-110"
              asChild
            >
              <Link href="#cualificar-form-anchor">Rellenar formulario</Link>
            </Button>
          </div>
        </header>

        <div id="cualificar-form-anchor" className="mx-auto max-w-xl scroll-mt-28">
          <Suspense fallback={<ContactFormFallback />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
