// app/about/page.tsx
import Link from 'next/link'
import PageHeader from '@/app/components/PageHeader'

export default function About() {
  return (
    <main className="bg-gradient-to-br from-white to-indigo-50">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <PageHeader
          title="About Me"
          subtitle="Web Designer & Developer"
          description="Learn more about my background, experience, and the kind of projects I enjoy building."
        />

        <div className="text-center">
          {/* avatar or photo can go here if desired */}
          <p className="mt-8 text-lg text-slate-700 dark:text-slate-300">
            I&apos;m a creative web designer with a passion for crafting modern,
            user‑friendly interfaces. My approach blends aesthetics with
            functionality to deliver engaging digital experiences.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <Link
              href="/resume"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-indigo-400 rounded-full text-indigo-600 hover:bg-indigo-50 transition"
            >
              View Resume
            </Link>

            <a
              href="/images/matugas.jpg"
              download="matugas.jpg"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full shadow-lg hover:brightness-105 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}