import { Link } from 'react-router-dom'
import AdireDivider from '../components/AdireDivider'
import AnnouncementTicker from '../components/AnnouncementTicker'
import HeroSlideshow from '../components/HeroSlideshow'
import Reveal from '../components/Reveal'
import { SCHOOL } from '../siteData'

const STATS = [
  { label: 'Years Guiding Learners', value: '—' },
  { label: 'Levels: KG to SS3', value: '13' },
  { label: 'Core Values Departments', value: '3' },
]

const PILLARS = [
  {
    title: 'Faith-Guided Foundation',
    body: 'Character and Islamic values are woven into daily school life, not treated as a separate subject.',
  },
  {
    title: 'Full Academic Ladder',
    body: 'A continuous pathway from Kindergarten through Senior Secondary, with STEM, Business, and Humanities tracks at SS level.',
  },
  {
    title: 'Driven by Success',
    body: 'Structured assessment, dedicated facilitators, and a culture that expects — and supports — excellence.',
  },
]

export default function Home() {
  return (
    <div>
      <AnnouncementTicker />

      {/* Hero */}
      <section className="relative overflow-hidden bg-indigo-900 text-ivory">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:py-28">
          <Reveal>
            <p className="eyebrow text-brass-400">{SCHOOL.location}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] md:text-5xl">
              {SCHOOL.tagline}
            </h1>
            <p className="mt-3 font-mono text-xs uppercase tracking-wide text-brass-400/80">
              {SCHOOL.motto}
            </p>
            <p className="mt-5 max-w-md text-ivory/75">
              {SCHOOL.name} carries learners from their first Kindergarten steps to Senior
              Secondary graduation — grounded in faith, shaped by discipline, aimed at success.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="rounded-full bg-brass-500 px-6 py-3 font-mono text-xs uppercase tracking-wider text-indigo-950 transition-colors hover:bg-brass-400"
              >
                Begin Admissions
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-ivory/30 px-6 py-3 font-mono text-xs uppercase tracking-wider text-ivory transition-colors hover:border-brass-400 hover:text-brass-400"
              >
                About the School
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <HeroSlideshow />
          </Reveal>
        </div>
        <AdireDivider tone="dark" />
      </section>

      {/* Stats strip */}
      <Reveal>
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 py-12 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-brass-500 pl-4">
              <p className="font-display text-3xl text-indigo-900">{s.value}</p>
              <p className="mt-1 text-sm text-indigo-900/60">{s.label}</p>
            </div>
          ))}
        </section>
      </Reveal>

      {/* Pillars */}
      <section className="bg-ivory px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow">What Shapes Us</p>
            <h2 className="mt-2 font-display text-3xl text-indigo-900">Three commitments, one path</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="rounded-lg border border-indigo-900/10 bg-white p-6 shadow-sm">
                  <span className="font-mono text-xs text-brass-600">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-xl text-indigo-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-indigo-950/70">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <Reveal>
        <section className="bg-emerald-700 px-5 py-16 text-ivory">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl">Ready to see the campus and meet our facilitators?</h2>
              <p className="mt-2 text-ivory/80">Admissions are open for the current session.</p>
            </div>
            <Link
              to="/contact"
              className="whitespace-nowrap rounded-full bg-brass-500 px-6 py-3 font-mono text-xs uppercase tracking-wider text-indigo-950 hover:bg-brass-400"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
