import { DarkEditorialBackdrop } from "@/components/sections/dark-editorial-backdrop"
import { ScrollReveal } from "@/components/motion/scroll-reveal"
import { cn } from "@/lib/utils"

type ServiceDarkSectionProps = {
  id?: string
  ariaLabelledby?: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  headerClassName?: string
  centered?: boolean
}

export function ServiceDarkSection({
  id,
  ariaLabelledby,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  headerClassName,
  centered = false,
}: ServiceDarkSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-24",
        className,
      )}
      aria-labelledby={ariaLabelledby}
    >
      <DarkEditorialBackdrop />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <header
            className={cn(
              "mb-12 max-w-2xl",
              centered && "mx-auto text-center",
              headerClassName,
            )}
          >
            {eyebrow ? (
              <p className="text-xs font-medium tracking-[0.2em] text-brand-cyan uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h2
              id={ariaLabelledby}
              className="font-heading mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-4 text-slate-300">{subtitle}</p>
            ) : null}
          </header>
        </ScrollReveal>
        {children}
      </div>
    </section>
  )
}

type ServiceGlassCardProps = {
  children: React.ReactNode
  accent?: "cyan" | "pink"
  className?: string
}

export function ServiceGlassCard({
  children,
  accent = "cyan",
  className,
}: ServiceGlassCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-6 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-7",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-linear-to-br opacity-80",
          accent === "pink"
            ? "from-brand-pink/18 via-transparent to-transparent"
            : "from-brand-cyan/20 via-transparent to-transparent",
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
