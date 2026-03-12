// app/faq/page.tsx
"use client"

import React, { useState } from 'react'
import PageHeader from '@/app/components/PageHeader'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "I offer web design, UI/UX design, front-end development, and full-stack development services."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity, but most websites take 2-4 weeks from start to finish."
  },
  {
    question: "Do you work with clients remotely?",
    answer: "Yes, I work with clients worldwide and prefer remote collaboration for most projects."
  },
  {
    question: "What is your pricing structure?",
    answer: "I offer both fixed-price projects and hourly rates. Contact me for a custom quote."
  },
  {
    question: "Can you help with existing websites?",
    answer: "Absolutely! I can redesign, optimize, or add new features to existing websites."
  }
]

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {item.question}
          </h3>
          <svg
            className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="pb-6 px-4">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <main className="bg-white dark:bg-slate-900">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <PageHeader
          title="Frequently Asked Questions"
          subtitle="Common Questions"
          description="Find answers to the most common questions about my services and process."
        />

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} item={faq} index={index} />
          ))}
        </div>
      </section>
    </main>
  )
}