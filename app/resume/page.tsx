// app/resume/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import jovenPic from '../images/joven.jpg'

export default function ResumeView() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-4xl">
        <div className="mb-6">
          <Link href="/about" className="text-sm text-slate-600 hover:underline">← Back to About</Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image src={jovenPic} alt="Joveniano Matugas Resume" className="w-full h-auto object-contain" priority />
        </div>
      </div>
    </main>
  )
}
