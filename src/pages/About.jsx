import PageHeader from '../components/PageHeader'
import AdireDivider from '../components/AdireDivider'
import { SCHOOL } from '../siteData'

const CULTURE_PILLARS = [
  'Faith guides character.',
  'Knowledge develops understanding.',
  'Skills create opportunities.',
  'Discipline builds responsibility.',
  'Creativity encourages innovation.',
  'Service gives education a greater purpose.',
]

const CORE_VALUES = [
  {
    title: 'Excellence',
    body: 'We encourage learners and staff to pursue high standards in all they do.',
  },
  {
    title: 'Islamic Values',
    body: 'We nurture faith, good character, integrity and responsibility.',
  },
  {
    title: 'High Ethical & Moral Standards',
    body: 'We promote honesty, respect, discipline and responsible conduct.',
  },
  {
    title: 'Child-Centeredness',
    body: 'We recognize the individuality, potential and learning needs of every child.',
  },
  {
    title: 'Skill Acquisition',
    body: 'We equip learners with practical, digital, creative and problem-solving skills for the future.',
  },
]

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow={SCHOOL.motto}
        title="About Sealed Nectar Academy"
        lead="A faith-guided, child-centered educational institution committed to raising confident, knowledgeable, morally upright and future-ready learners."
      />

      <section className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-indigo-950/80 leading-relaxed">
          At SNA, we believe that education is more than the acquisition of academic
          knowledge. True education should develop the mind, character, skills and
          sense of responsibility of every child. Our approach therefore combines
          quality Western education with Islamic values, character development and
          practical skills that prepare learners to contribute meaningfully to society.
        </p>
      </section>

      <section className="bg-indigo-900 px-5 py-16 text-ivory">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-brass-400">Who We Are</p>
          <p className="mt-4 leading-relaxed text-ivory/80">
            Sealed Nectar Academy provides a continuous educational pathway from
            Creche and Kindergarten through Nursery, Primary, Junior Secondary and
            Senior Secondary education.
          </p>
          <p className="mt-4 leading-relaxed text-ivory/80">
            Our learning environment is designed to help every child discover their
            abilities, develop their confidence and build a strong foundation for
            lifelong learning. We recognize that every learner is unique, and we
            strive to provide supportive, engaging and inclusive learning experiences
            that respond to different abilities, interests and learning needs.
          </p>
        </div>
        <AdireDivider tone="dark" />
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <p className="eyebrow">What Makes Us Different</p>
        <p className="mt-4 text-indigo-950/80 leading-relaxed">
          At SNA, Islamic values are woven into everyday school life rather than
          treated merely as a separate subject. We encourage learners to develop
          good character, honesty, discipline, responsibility, respect, compassion
          and service to others.
        </p>
        <p className="mt-4 text-indigo-950/80 leading-relaxed">
          At the same time, we prepare our learners for the opportunities and
          challenges of the modern world through exposure to Science, Technology,
          Engineering, Arts and Mathematics (STEAM), Robotics, Artificial
          Intelligence, Programming, Graphics and Digital Skills.
        </p>
        <p className="mt-4 font-display text-lg text-indigo-900">
          We want our learners not only to consume technology, but to understand
          it, create with it and use it responsibly.
        </p>
      </section>

      <section className="bg-emerald-700 px-5 py-16 text-ivory">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-brass-400">Our Educational Philosophy</p>
          <p className="mt-4 font-display text-2xl">We believe that every child has potential.</p>
          <p className="mt-4 leading-relaxed text-ivory/85">
            Our responsibility as educators is to identify that potential, nurture
            it and provide the knowledge, guidance, environment and opportunities
            needed for it to flourish. We therefore seek to create a school culture
            where:
          </p>
          <ul className="mt-6 space-y-3">
            {CULTURE_PILLARS.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass-400" />
                <span className="text-ivory/90">{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-ivory/85">
            Our ultimate goal is to raise learners who can succeed academically
            while remaining grounded in strong moral and Islamic values.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-indigo-900/10 bg-white p-8 shadow-sm">
            <p className="eyebrow">Our Vision</p>
            <p className="mt-3 leading-relaxed text-indigo-950/80">
              To be leaders in raising the &ldquo;Ideal Muslim Child&rdquo; —
              intellectually capable, morally upright, spiritually conscious,
              skillful and prepared to make a positive difference in the world.
            </p>
          </div>
          <div className="rounded-lg border border-indigo-900/10 bg-white p-8 shadow-sm">
            <p className="eyebrow">Our Mission</p>
            <p className="mt-3 leading-relaxed text-indigo-950/80">
              To provide high-quality education through effective instructional
              techniques, modern technology and innovative learning experiences,
              while nurturing Islamic culture, values, character and practical
              skills in every learner.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-indigo-900 px-5 py-16 text-ivory">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-brass-400">What We Stand For</p>
          <h2 className="mt-2 font-display text-3xl">Our Core Values</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((v) => (
              <div key={v.title} className="border-t-2 border-brass-500 pt-4">
                <h3 className="font-display text-xl text-brass-400">{v.title}</h3>
                <p className="mt-2 text-sm text-ivory/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <p className="eyebrow">Our Commitment</p>
        <p className="mt-4 text-indigo-950/80 leading-relaxed">
          At Sealed Nectar Academy, we are committed to building more than
          successful students. We are committed to developing well-rounded human
          beings who possess knowledge, character, confidence, creativity and a
          sense of responsibility towards Allah and humanity.
        </p>
        <p className="mt-4 text-indigo-950/80 leading-relaxed">
          We believe that despite all odds, with faith as our guide and excellence
          as our pursuit, every child can be equipped to succeed and make a
          difference.
        </p>
        <p className="mt-8 font-display text-2xl text-indigo-900">
          Sealed Nectar Academy — Guided by Faith. Driven by Success.
        </p>
      </section>
    </div>
  )
}
