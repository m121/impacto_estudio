"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function scrollToHash(hash: string, smooth: boolean) {
  const id = hash.replace(/^#/, "")
  if (!id) return

  const target = document.getElementById(id)
  if (!target) return

  target.scrollIntoView({
    behavior: smooth ? "smooth" : "auto",
    block: "start",
  })
}

export function SmoothScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const node = event.target
      if (!(node instanceof Element)) return

      const anchor = node.closest<HTMLAnchorElement>("a[href*='#']")
      if (!anchor || anchor.target === "_blank") return

      const url = new URL(anchor.href, window.location.href)
      if (url.pathname !== window.location.pathname) return

      const { hash } = url
      if (!hash || hash === "#") return

      if (!document.getElementById(hash.slice(1))) return

      event.preventDefault()
      scrollToHash(hash, !prefersReducedMotion())
      window.history.pushState(null, "", `${url.pathname}${hash}`)
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [pathname])

  useEffect(() => {
    const { hash } = window.location
    if (!hash) return

    const timer = window.setTimeout(
      () => scrollToHash(hash, !prefersReducedMotion()),
      80,
    )
    return () => window.clearTimeout(timer)
  }, [pathname])

  return null
}
