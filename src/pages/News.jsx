import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { supabase } from '../supabaseClient'

// Shown only until the first post is published from the School Management System.
const FALLBACK_POSTS = [
  {
    id: 'fallback-1',
    date: '2026-08-02',
    title: '6th Valedictory Service & Prize-Giving Day',
    content: 'Our graduating class was celebrated under the theme "Despite All Odds, Guided by Faith and Driven by Success," with speeches, drama, and prize-giving.',
  },
  {
    id: 'fallback-2',
    date: '2026-08-01',
    title: 'Nectar STEAM Boot Camp Kicks Off',
    content: 'A 6-week holiday programme covering AI, coding, robotics, and digital creativity for learners aged 6–17 begins this month.',
  },
]

function formatDate(d) {
  if (!d) return ''
  const parsed = new Date(d + 'T00:00:00')
  if (isNaN(parsed.getTime())) return d
  return parsed.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function News() {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function loadPosts() {
      if (!supabase) {
        setPosts([])
        return
      }
      const { data } = await supabase
        .from('app_storage')
        .select('value')
        .eq('key', 'newsPosts')
        .single()

      if (cancelled) return
      const list = Array.isArray(data?.value) ? data.value : []
      list.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
      setPosts(list)
    }

    loadPosts()
    return () => {
      cancelled = true
    }
  }, [])

  const shown = posts === null ? [] : posts.length > 0 ? posts : FALLBACK_POSTS

  return (
    <div>
      <PageHeader
        eyebrow="Stay Updated"
        title="News & Announcements"
        lead="Highlights from campus life, events, and academic milestones."
      />

      <section className="mx-auto max-w-4xl px-5 py-16">
        {posts === null ? (
          <p className="text-center text-sm text-indigo-950/60">Loading…</p>
        ) : (
          <div className="space-y-10">
            {shown.map((p) => (
              <article key={p.id || p.title} className="border-b border-indigo-900/10 pb-8">
                <p className="font-mono text-xs uppercase tracking-wide text-brass-600">{formatDate(p.date)}</p>
                <h2 className="mt-2 font-display text-2xl text-indigo-900">{p.title}</h2>
                {p.imageUrl && (
                  <img src={p.imageUrl} alt="" className="mt-4 max-h-96 w-full rounded-lg object-cover" />
                )}
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-indigo-950/70">{p.content}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
