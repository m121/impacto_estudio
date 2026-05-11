"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

type ServiceStickyCtaProps = {
  label: string
  href: string
}

export function ServiceStickyCta({ label, href }: ServiceStickyCtaProps) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-800 bg-slate-950/95 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md supports-[padding:max(0px)]:pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Acción rápida"
    >
      <div className="mx-auto flex max-w-lg justify-center">
        <Button
          size="lg"
          className="w-full shadow-lg shadow-brand-pink/25 transition hover:scale-[1.02] hover:brightness-110 md:w-auto"
          asChild
        >
          <Link href={href}>{label}</Link>
        </Button>
      </div>
    </div>
  )
}
