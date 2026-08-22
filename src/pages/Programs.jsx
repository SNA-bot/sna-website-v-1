import PageHeader from '../components/PageHeader'

const TRACKS = [
  { title: 'STEM', body: 'Mathematics, Physics, Chemistry, Biology, and Further Mathematics for learners headed toward science and technology.' },
  { title: 'Business', body: 'Accounting, Commerce, Marketing, and Economics for learners headed toward enterprise and finance.' },
  { title: 'Humanities', body: 'Government, Literature, Geography, and CRS/IRS for learners headed toward the arts and social sciences.' },
]

const LEVELS = [
  { title: 'Early Years', body: 'Kindergarten and Nursery — foundational literacy, numeracy, and character formation through play-guided learning.' },
  { title: 'Basic / Primary', body: 'A broad, structured curriculum building core academic and moral foundations.' },
  { title: 'Junior Secondary (JSS1–JSS3)', body: 'A common curriculum preparing learners for elective specialisation at Senior Secondary level.' },
  { title: 'Senior Secondary (SS1–SS3)', body: 'Learners select a department — STEM, Business, or Humanities — and pursue elective subjects toward WAEC/NECO.' },
]

export default function Programs() {
  return (
    <div>
      <PageHeader
        eyebrow="Curriculum"
        title="Programs & Academic Tracks"
        lead="A single continuous pathway from Kindergarten to Senior Secondary, with specialised departments at SS level."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="eyebrow">Academic Levels</p>
        <h2 className="mt-2 font-display text-3xl text-indigo-900">From first steps to graduation</h2>
        <div className="mt-10 space-y-6">
          {LEVELS.map((l) => (
            <div key={l.title} className="border-l-2 border-brass-500 pl-5">
              <h3 className="font-display text-xl text-indigo-900">{l.title}</h3>
              <p className="mt-1 text-sm text-indigo-950/70">{l.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-900 px-5 py-16 text-ivory">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-brass-400">Senior Secondary Departments</p>
          <h2 className="mt-2 font-display text-3xl">Three elective tracks</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {TRACKS.map((t) => (
              <div key={t.title} className="rounded-lg bg-indigo-800/60 p-6">
                <h3 className="font-display text-xl text-brass-400">{t.title}</h3>
                <p className="mt-2 text-sm text-ivory/70">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
