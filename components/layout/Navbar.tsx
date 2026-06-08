"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { MenuIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { NAV_LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"

const mobileLinkClassName =
  "w-full justify-start text-slate-200 hover:bg-slate-800 hover:text-white"

export function Navbar({ className }: { className?: string }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!mobileOpen) return

    function onPointerDown(event: MouseEvent) {
      if (menuRef.current?.contains(event.target as Node)) return
      setMobileOpen(false)
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false)
    }

    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [mobileOpen])

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
                className="text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                {link.label}
              </Link>
            </Button>
          ))}
          <Button size="sm" className="ml-2 shadow-md shadow-brand-pink/20" asChild>
            <Link target="_blank" href="https://tr.ee/ncIMJqO4w9">
              Cualificar proyecto
            </Link>
          </Button>
        </nav>

        <div className="relative md:hidden" ref={menuRef}>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="border-slate-700 bg-slate-900 text-slate-100"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </Button>

          {mobileOpen ? (
            <nav
              id="mobile-nav"
              className="absolute right-0 z-50 mt-2 w-56 rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-lg ring-1 ring-white/10"
              aria-label="Principal móvil"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    size="sm"
                    className={mobileLinkClassName}
                    asChild
                  >
                    <Link href={link.href} onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </Link>
                  </Button>
                ))}
                <Button
                  size="sm"
                  className="mt-1 w-full shadow-md shadow-brand-pink/20"
                  asChild
                >
                  <Link
                    target="_blank"
                    href="https://tr.ee/ncIMJqO4w9"
                    onClick={() => setMobileOpen(false)}
                  >
                    Cualificar proyecto
                  </Link>
                </Button>
              </div>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  )
}
