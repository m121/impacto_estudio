import Link from "next/link"
import { Star } from "lucide-react"

import { SocialIcon } from "@/components/layout/social-icon"
import {
  GOOGLE_REVIEWS_URL,
  NAV_LINKS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SOCIAL_LINKS,
} from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 md:gap-12">
        <div className="space-y-3">
          <p className="font-heading text-lg font-semibold text-slate-50">
            {SITE_NAME}
          </p>
          <p className="max-w-md text-sm leading-relaxed">{SITE_DESCRIPTION}</p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
            Servicios
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-300 underline-offset-4 hover:text-brand-cyan hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
            Síguenos
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 transition hover:border-brand-cyan/50 hover:bg-brand-cyan/10 hover:text-brand-cyan"
                >
                  <SocialIcon id={link.id} />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 transition hover:border-brand-pink/40 hover:text-brand-pink"
          >
            <Star className="size-4 fill-brand-pink text-brand-pink" aria-hidden />
            Ver opiniones en Google
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE_NAME}. España.
      </div>
    </footer>
  )
}
