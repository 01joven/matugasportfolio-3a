"use client"

import Link from 'next/link'

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Something went wrong</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{error?.message}</p>
          <div className="mt-6">
            <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">Go back home</Link>
          </div>
        </div>
      </body>
    </html>
  )
}
