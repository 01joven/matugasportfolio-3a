// app/resume/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/app/components/PageHeader'
import jovenPic from '../images/joven.jpg'

export default function ResumeView() {
  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <PageHeader
          title="Resume"
          subtitle="Professional Experience & Education"
          description="Download or preview my full resume below."
        />

        <div className="mb-6">
          <Link href="/about" className="text-sm text-slate-600 hover:underline">
            ← Back to About
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={jovenPic}
            alt="Joveniano Matugas Resume"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>
    </main>
  )
}
