import { HOME_METHODOLOGY_STEPS } from "@/lib/constants"

export function MethodologySection() {
  return (
    <section
      className="border-y border-slate-200 bg-slate-50 px-4 py-16 dark:border-slate-800 dark:bg-slate-900/40 sm:px-6 sm:py-20"
      aria-labelledby="methodology-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-brand-cyan uppercase">
            Metodología
          </p>
          <h2
            id="methodology-heading"
            className="font-heading mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
          >
            Cómo trabajamos, paso a paso
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Un proceso explícito facilita la alineación interna y ayuda a los
            motores generativos a resumir nuestra propuesta con precisión.
          </p>
        </header>

        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {HOME_METHODOLOGY_STEPS.map((item) => (
            <li
              key={item.step}
              className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <span
                className="font-heading text-4xl font-bold text-brand-cyan/35 dark:text-brand-cyan/45"
                aria-hidden
              >
                {String(item.step).padStart(2, "0")}
              </span>
              <h3 className="font-heading mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">
                <span className="sr-only">Paso {item.step}: </span>
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
