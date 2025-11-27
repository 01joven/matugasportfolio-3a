"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/project" },
  { name: "Scheduling", path: "/round-robin" },
  { name: "Contact", path: "/contacts" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    return (localStorage.getItem('theme') as 'light' | 'dark') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    if (typeof document === 'undefined') return
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/90 dark:bg-slate-900/90 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Joven Matugas
        </Link>

        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`transition ${isActive ? 'text-slate-900 font-semibold dark:text-slate-100' : 'text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100'}`}
              >
                {item.name}
              </Link>
            )
          })}
          
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="ml-2 inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 hover:shadow-sm transition"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M21.64 13.12A9 9 0 1110.88 2.36 7 7 0 0021.64 13.12z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M6.76 4.84l-1.8-1.79L3.17 4.84 4.97 6.63 6.76 4.84zM1 13h3v-2H1v2zm10 8h2v-3h-2v3zm7.24-2.16l1.8 1.79 1.79-1.79-1.8-1.79-1.79 1.79zM17 13h3v-2h-3v2zM12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}