import PageHeader from '../components/PageHeader'

const STAFF = [
  { name: 'Name Surname', role: 'Proprietor / Head of School' },
  { name: 'Name Surname', role: 'Vice Principal, Academics' },
  { name: 'Name Surname', role: 'Head, Junior Secondary' },
  { name: 'Name Surname', role: 'Head, Senior Secondary' },
  { name: 'Name Surname', role: 'Head, Early Years' },
  { name: 'Name Surname', role: 'School Administrator' },
]

export default function Staff() {
  return (
    <div>
      <PageHeader
        eyebrow="Our People"
        title="Staff & Facilitators"
        lead="Meet the team guiding learners at every level of Sealed Nectar Academy. [Replace placeholder names, roles, and photos with real staff data.]"
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STAFF.map((s) => (
            <div key={s.name + s.role} className="rounded-lg border border-indigo-900/10 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto h-24 w-24 rounded-full border-2 border-brass-500 bg-indigo-900/5" />
              <h3 className="mt-4 font-display text-lg text-indigo-900">{s.name}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-brass-600">{s.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
