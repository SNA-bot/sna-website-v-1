import PageHeader from '../components/PageHeader'
import { SCHOOL } from '../siteData'

const VALUES = [
  { title: 'Faith', body: 'Islamic values guide conduct, character formation, and the daily rhythm of school life.' },
  { title: 'Discipline', body: 'Structure and consistency in the classroom build habits that last well beyond graduation.' },
  { title: 'Excellence', body: 'Every learner is held to a standard, and supported with the tools to reach it.' },
]

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="Our Story"
        title="About Sealed Nectar Academy"
        lead={`A school in ${SCHOOL.location}, carrying learners from Kindergarten through Senior Secondary School.`}
      />

      <section className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-indigo-950/80 leading-relaxed">
          {SCHOOL.name} was founded to give children in Ota a complete, faith-guided education —
          one continuous journey from their earliest years in Kindergarten through to Senior
          Secondary graduation. [Replace this paragraph with the school's actual founding story,
          year established, and founder/proprietor details.]
        </p>
        <p className="mt-4 text-indigo-950/80 leading-relaxed">
          Our name reflects a promise: an education that is pure, well-guarded, and worth
          seeking out — for every learner who passes through our gates. [Add mission and vision
          statements here.]
        </p>
      </section>

      <section className="bg-indigo-900 px-5 py-16 text-ivory">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-brass-400">What We Stand For</p>
          <h2 className="mt-2 font-display text-3xl">Our Core Values</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="border-t-2 border-brass-500 pt-4">
                <h3 className="font-display text-xl text-brass-400">{v.title}</h3>
                <p className="mt-2 text-sm text-ivory/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
