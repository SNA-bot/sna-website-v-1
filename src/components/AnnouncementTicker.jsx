import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

// A slow, continuous horizontal ticker. It shows the titles of the latest
// news posts published from the School Management System. Until a post
// exists, it shows the default announcements below.
const DEFAULT_ANNOUNCEMENTS = [
  'Admissions are open for the current session',
  'Nectar STEAM Boot Camp — enrolling now',
  'Visit our Gallery for highlights from recent events',
  'Follow the Programs page for our SS department tracks',
]

export default function AnnouncementTicker() {
  const [announcements, setAnnouncements] = useState(DEFAULT_ANNOUNCEMENTS)

  useEffect(() => {
    let cancelled = false

    async function loadAnnouncements() {
      if (!supabase) return
      const { data } = await supabase
        .from('app_storage')
        .select('value')
        .eq('key', 'newsPosts')
        .single()

      if (cancelled || !Array.isArray(data?.value)) return
      const titles = [...data.value]
        .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
        .map((p) => (p.title || '').trim())
        .filter(Boolean)
        .slice(0, 5)
      if (titles.length > 0) setAnnouncements(titles)
    }

    loadAnnouncements()
    return () => {
      cancelled = true
    }
  }, [])

  // Duplicate the list so the CSS animation can loop seamlessly
  const items = [...announcements, ...announcements]

  return (
    <div className="overflow-hidden border-y border-brass-500/30 bg-indigo-950 py-2.5">
      <div className="ticker-track flex w-max gap-12 whitespace-nowrap">
        {items.map((text, i) => (
          <span key={i} className="flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-brass-400">
            <span className="h-1 w-1 rounded-full bg-brass-500" />
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
