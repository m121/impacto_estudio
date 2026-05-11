"use client"

import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { NAV_LINKS, SITE_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Navbar({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md",
        className,
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight text-slate-50"
        >
         <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Principal"
        >
          {NAV_LINKS.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" asChild>
              <Link
                href={link.href}
                className="text-slate-300 hover:text-slate-50"
              >
                {link.label}
              </Link>
            </Button>
          ))}
          <Button size="sm" className="ml-2 shadow-md shadow-brand-pink/20" asChild>
            <Link href="/#cualificar">Cualificar proyecto</Link>
          </Button>
        </nav>

        <details className="relative md:hidden">
          <summary className="list-none [&::-webkit-details-marker]:hidden">
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              className="border-slate-700 bg-slate-900 text-slate-100"
              aria-label="Abrir menú"
            >
              <MenuIcon />
            </Button>
          </summary>
          <div className="absolute right-0 mt-2 w-52 rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-lg ring-1 ring-white/10">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Button key={link.href} variant="ghost" size="sm" asChild>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
              <Button size="sm" className="mt-1 shadow-md shadow-brand-pink/20" asChild>
                <Link href="/#cualificar">Cualificar proyecto</Link>
              </Button>
            </div>
          </div>
        </details>
      </div>
    </header>
  )
}
