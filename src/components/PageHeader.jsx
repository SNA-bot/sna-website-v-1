import AdireDivider from './AdireDivider'

export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <section className="bg-indigo-900 text-ivory">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-16">
        {eyebrow && <p className="eyebrow mb-3 text-brass-400">{eyebrow}</p>}
        <h1 className="font-display text-4xl font-semibold md:text-5xl">{title}</h1>
        {lead && <p className="mt-4 max-w-2xl text-ivory/75">{lead}</p>}
      </div>
      <AdireDivider tone="dark" />
    </section>
  )
}
