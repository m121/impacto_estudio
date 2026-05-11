import Link from "next/link"

import { NAV_LINKS, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:gap-16">
        <div className="space-y-3">
          <p className="font-heading text-lg font-semibold text-slate-50">
            {SITE_NAME}
          </p>
          <p className="max-w-md text-sm leading-relaxed">{SITE_DESCRIPTION}</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
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
      </div>
      <div className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE_NAME}. España.
      </div>
    </footer>
  )
}
