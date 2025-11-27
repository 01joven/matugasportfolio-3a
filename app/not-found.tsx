import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Page not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">We couldn't find the page you're looking for.</p>
        <div className="mt-6">
          <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
