// A slow, continuous horizontal ticker for short announcements
// (admissions open, upcoming events, etc.). Edit ANNOUNCEMENTS below
// to change what it shows.
const ANNOUNCEMENTS = [
  'Admissions are open for the current session',
  'Nectar STEAM Boot Camp — enrolling now',
  'Visit our Gallery for highlights from recent events',
  'Follow the Programs page for our SS department tracks',
]

export default function AnnouncementTicker() {
  // Duplicate the list so the CSS animation can loop seamlessly
  const items = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS]

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
