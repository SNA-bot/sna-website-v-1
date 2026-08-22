import { Link } from 'react-router-dom'
import { NAV_LINKS, SCHOOL } from '../siteData'
import AdireDivider from './AdireDivider'

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-ivory">
      <AdireDivider tone="dark" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl text-brass-400">{SCHOOL.name}</h3>
          <p className="mt-3 max-w-xs text-sm text-ivory/70">{SCHOOL.tagline}</p>
        </div>
        <div>
          <p className="eyebrow mb-3">Explore</p>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-ivory/80 hover:text-brass-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3">Reach Us</p>
          <ul className="space-y-2 text-sm text-ivory/80">
            <li>{SCHOOL.location}</li>
            <li>{SCHOOL.phone}</li>
            <li>{SCHOOL.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-indigo-800 px-5 py-5 text-center font-mono text-xs text-ivory/50">
        © {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.
      </div>
    </footer>
  )
}
