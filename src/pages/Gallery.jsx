import PageHeader from '../components/PageHeader'

const PLACEHOLDER_COUNT = 9

export default function Gallery() {
  return (
    <div>
      <PageHeader
        eyebrow="Campus Life"
        title="Gallery"
        lead="Moments from classrooms, events, and celebrations at Sealed Nectar Academy. [Replace these placeholders with real campus photos.]"
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-lg border border-dashed border-indigo-900/20 bg-indigo-900/5 font-mono text-xs text-indigo-900/40"
            >
              Photo {i + 1}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
