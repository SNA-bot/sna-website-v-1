import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { SCHOOL } from '../siteData'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // [Wire this up to Supabase or an email service once ready.]
    setSent(true)
  }

  return (
    <div>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        lead="Questions about admissions, programs, or campus visits — we're happy to help."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
        <div>
          <p className="eyebrow">Details</p>
          <h2 className="mt-2 font-display text-2xl text-indigo-900">{SCHOOL.name}</h2>
          <ul className="mt-6 space-y-3 text-sm text-indigo-950/75">
            <li><span className="font-mono text-xs uppercase text-brass-600">Address </span><br />{SCHOOL.location}</li>
            <li><span className="font-mono text-xs uppercase text-brass-600">Phone </span><br />{SCHOOL.phone}</li>
            <li><span className="font-mono text-xs uppercase text-brass-600">Email </span><br />{SCHOOL.email}</li>
          </ul>
        </div>

        <div>
          {sent ? (
            <div className="rounded-lg border border-emerald-700/30 bg-emerald-700/10 p-6 text-emerald-700">
              Thank you — your message has been noted. We'll be in touch shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-xs uppercase tracking-wide text-indigo-900/70">Full Name</label>
                <input required type="text" className="mt-1 w-full rounded border border-indigo-900/20 px-3 py-2 focus:border-brass-500" />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-wide text-indigo-900/70">Email</label>
                <input required type="email" className="mt-1 w-full rounded border border-indigo-900/20 px-3 py-2 focus:border-brass-500" />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-wide text-indigo-900/70">Message</label>
                <textarea required rows={4} className="mt-1 w-full rounded border border-indigo-900/20 px-3 py-2 focus:border-brass-500" />
              </div>
              <button
                type="submit"
                className="rounded-full bg-brass-500 px-6 py-3 font-mono text-xs uppercase tracking-wider text-indigo-950 hover:bg-brass-400"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
