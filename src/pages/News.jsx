import PageHeader from '../components/PageHeader'

const POSTS = [
  {
    date: 'August 2, 2026',
    title: '6th Valedictory Service & Prize-Giving Day',
    excerpt: 'Our graduating class was celebrated under the theme "Despite All Odds, Guided by Faith and Driven by Success," with speeches, drama, and prize-giving.',
  },
  {
    date: 'August 2026',
    title: 'Nectar STEAM Boot Camp Kicks Off',
    excerpt: 'A 6-week holiday programme covering AI, coding, robotics, and digital creativity for learners aged 6–17 begins this month.',
  },
  {
    date: '[Date]',
    title: '[Post title]',
    excerpt: '[Short summary of the news item or announcement.]',
  },
]

export default function News() {
  return (
    <div>
      <PageHeader
        eyebrow="Stay Updated"
        title="News & Announcements"
        lead="Highlights from campus life, events, and academic milestones."
      />

      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-10">
          {POSTS.map((p) => (
            <article key={p.title} className="border-b border-indigo-900/10 pb-8">
              <p className="font-mono text-xs uppercase tracking-wide text-brass-600">{p.date}</p>
              <h2 className="mt-2 font-display text-2xl text-indigo-900">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-indigo-950/70">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
