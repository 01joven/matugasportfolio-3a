import React from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
}

export default function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
        {title}
      </h1>
      {subtitle && <p className="mt-2 text-xl text-slate-600 dark:text-slate-300">{subtitle}</p>}
      {description && <p className="mt-4 text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{description}</p>}
    </header>
  )
}
