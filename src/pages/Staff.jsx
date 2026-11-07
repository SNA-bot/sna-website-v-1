import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { supabase } from '../supabaseClient'

function initials(name) {
  return (name || '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
}

export default function Staff() {
  const [staff, setStaff] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function loadStaff() {
      if (!supabase) {
        setLoading(false)
        return
      }
      const { data } = await supabase
        .from('app_storage')
        .select('value')
        .eq('key', 'staffMembers')
        .single()

      if (cancelled) return
      setStaff(Array.isArray(data?.value) ? data.value : [])
      setLoading(false)
    }

    loadStaff()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div>
      <PageHeader
        eyebrow="Our People"
        title="Staff & Facilitators"
        lead="Meet the team guiding learners at every level of Sealed Nectar Academy."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        {loading ? (
          <p className="text-center text-sm text-indigo-950/60">Loading…</p>
        ) : staff.length === 0 ? (
          <p className="text-center text-sm text-indigo-950/60">Our staff list is coming soon.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((s) => (
              <div key={s.id || s.name + s.role} className="rounded-lg border border-indigo-900/10 bg-white p-6 text-center shadow-sm">
                {s.photo ? (
                  <img
                    src={s.photo}
                    alt={s.name}
                    className="mx-auto h-24 w-24 rounded-full border-2 border-brass-500 object-cover"
                  />
                ) : (
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-brass-500 bg-indigo-900/5 font-display text-xl text-indigo-900/60">
                    {initials(s.name)}
                  </div>
                )}
                <h3 className="mt-4 font-display text-lg text-indigo-900">{s.name}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-brass-600">{s.role}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
