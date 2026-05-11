import Image from "next/image"

import { TRUST_LOGOS } from "@/lib/constants"

export function SocialProofBar() {
  return (
    <section
      className="border-y border-slate-200 bg-[#FFFFFF] py-10 dark:border-slate-800 dark:bg-slate-900"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="trust-heading"
          className="text-center text-xs font-medium tracking-wide text-muted-foreground uppercase"
        >
          Stack y partners tecnológicos que integramos en proyectos B2B
        </h2>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-12">
          {TRUST_LOGOS.map((logo) => (
            <li key={logo.alt}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                sizes="160px"
                className="h-8 w-auto grayscale opacity-60 transition-opacity hover:opacity-100 md:h-10"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
