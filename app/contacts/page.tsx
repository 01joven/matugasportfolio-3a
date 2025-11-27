"use client"

import React from 'react'

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24">
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16">
          <header className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
              Joven Matugas
            </h1>
            <p className="mt-4 text-2xl md:text-3xl text-gray-600">Full‑stack Developer & UI/UX Designer</p>
            <p className="mt-2 text-base text-gray-400">Available for hire · Open to remote opportunities</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-pink-50 border border-white/60">
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <a className="mt-2 block text-2xl md:text-3xl font-bold text-indigo-600 hover:underline" href="mailto:JovenMatugas@gmail.com">JovenMatugas@gmail.com</a>
                <p className="mt-1 text-sm text-gray-500">Prefer email for detailed inquiries</p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-white/60">
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <a className="mt-2 block text-2xl md:text-3xl font-bold text-teal-600" href="tel:+639276543210">+63 927 654 3210</a>
                <p className="mt-1 text-sm text-gray-500">WhatsApp & SMS available</p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-white/60">
                <h3 className="text-xl font-semibold text-gray-800">Location</h3>
                <p className="mt-2 text-2xl md:text-3xl font-bold text-gray-700">Gabi, Cordova, Cebu</p>
                <p className="mt-1 text-sm text-gray-500">Willing to relocate or work remotely</p>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="flex flex-col items-start gap-4">
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Social</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a className="text-indigo-600 font-semibold text-lg" href="https://www.facebook.com/jovvenmatugas" target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a className="text-gray-800 font-semibold text-lg" href="https://github.com/01joven" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>

             
            </aside>
          </div>

          <footer className="mt-10 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Joven Matugas — Built with Next.js & Tailwind CSS</p>
          </footer>
        </div>
      </section>
    </main>
  )
}