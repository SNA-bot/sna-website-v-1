import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS, SCHOOL } from '../siteData'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-indigo-900 text-ivory shadow-lg shadow-indigo-950/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brass-500 font-display text-lg font-semibold text-brass-400">
            SN
          </span>
          <span className="font-display text-lg leading-tight">
            {SCHOOL.shortName}
            <span className="block font-mono text-[10px] tracking-[0.15em] text-brass-400">ACADEMY</span>
          </span>
        </NavLink>

        <nav className="hidden gap-7 font-body text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative py-1 transition-colors hover:text-brass-400 ${
                  isActive ? 'text-brass-400' : 'text-ivory/90'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="https://sealed-nectar-sms.vercel.app"
          className="hidden rounded-full border border-brass-500 px-4 py-2 font-mono text-xs uppercase tracking-wider text-brass-400 transition-colors hover:bg-brass-500 hover:text-indigo-950 md:block"
        >
          Portal Login
        </a>

        <button
          className="text-ivory md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6l-12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-indigo-800 bg-indigo-900 px-5 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded px-2 py-2 text-sm ${isActive ? 'bg-indigo-800 text-brass-400' : 'text-ivory/90'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://sealed-nectar-sms.vercel.app"
            className="mt-2 rounded-full border border-brass-500 px-4 py-2 text-center font-mono text-xs uppercase tracking-wider text-brass-400"
          >
            Portal Login
          </a>
        </nav>
      )}
    </header>
  )
}
