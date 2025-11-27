// app/about/page.tsx
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-indigo-50 p-8">
      <div className="w-full max-w-3xl text-center">
        {/* avatar removed per request */}

        <h1 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
          About Me
        </h1>

       

        <p className="mt-8 text-sm text-slate-500">Want to know more? Here's my resume</p>

        <div className="mt-6 flex justify-center gap-6">
          <Link href="/resume" className="inline-flex items-center gap-3 px-6 py-3 border-2 border-indigo-400 rounded-full text-indigo-600 hover:bg-indigo-50 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="font-medium">View Resume</span>
          </Link>

          <a href="/images/matugas.jpg" download="matugas.jpg" className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full shadow-lg hover:brightness-105 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l4-4m-4 4l-4-4M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6" />
            </svg>
            <span className="font-medium">Download Resume</span>
          </a>
        </div>
      </div>
    </main>
  )
}