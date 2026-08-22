import PageHeader from '../components/PageHeader'

const STEPS = [
  { title: 'Enquire', body: 'Reach out to the school office or submit the enquiry form with your child\u2019s details.' },
  { title: 'Assessment', body: 'Prospective learners sit a brief entrance assessment appropriate to their level.' },
  { title: 'Offer & Registration', body: 'Successful candidates receive an offer letter and complete registration and fee arrangements.' },
  { title: 'Resumption', body: 'Welcome to Sealed Nectar Academy — orientation and class placement follow.' },
]

const LEVELS = ['Kindergarten (KG1 – KG2)', 'Nursery', 'Basic / Primary', 'Junior Secondary (JSS1 – JSS3)', 'Senior Secondary (SS1 – SS3)']

export default function Admissions() {
  return (
    <div>
      <PageHeader
        eyebrow="Join Us"
        title="Admissions"
        lead="Places are open across every level, from Kindergarten through Senior Secondary School."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="eyebrow">The Process</p>
        <h2 className="mt-2 font-display text-3xl text-indigo-900">Four steps to enrolment</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-lg border border-indigo-900/10 bg-white p-6 shadow-sm">
              <span className="font-mono text-xs text-brass-600">0{i + 1}</span>
              <h3 className="mt-2 font-display text-lg text-indigo-900">{s.title}</h3>
              <p className="mt-2 text-sm text-indigo-950/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-900 px-5 py-16 text-ivory">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow text-brass-400">Levels Offered</p>
          <h2 className="mt-2 font-display text-3xl">Every stage, one campus</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {LEVELS.map((l) => (
              <li key={l} className="flex items-center gap-3 text-ivory/85">
                <span className="h-1.5 w-1.5 rounded-full bg-brass-400" />
                {l}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ivory/60">
            [Add: entrance requirements, fee structure or link to it, and application deadlines.]
          </p>
        </div>
      </section>
    </div>
  )
}
