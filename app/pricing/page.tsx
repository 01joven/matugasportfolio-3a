// app/pricing/page.tsx
import React from 'react'
import Link from 'next/link'
import PageHeader from '@/app/components/PageHeader'

interface PricingPlan {
  name: string
  price: string
  period: string
  features: string[]
  popular?: boolean
  cta: string
  ctaLink: string
}

const plans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$499",
    period: "one-time",
    features: [
      "Responsive website design",
      "Up to 5 pages",
      "Basic SEO optimization",
      "Contact form",
      "Mobile optimization",
      "1 month support"
    ],
    cta: "Get Started",
    ctaLink: "/contacts"
  },
  {
    name: "Professional",
    price: "$999",
    period: "one-time",
    features: [
      "Everything in Basic",
      "Up to 15 pages",
      "Advanced SEO setup",
      "E-commerce integration",
      "Custom animations",
      "3 months support",
      "Analytics setup"
    ],
    popular: true,
    cta: "Choose Professional",
    ctaLink: "/contacts"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    features: [
      "Everything in Professional",
      "Unlimited pages",
      "Custom functionality",
      "API integrations",
      "Advanced analytics",
      "6 months support",
      "Ongoing maintenance"
    ],
    cta: "Contact for Quote",
    ctaLink: "/contacts"
  }
]

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 relative ${plan.popular ? 'border-2 border-indigo-500' : 'border border-gray-200'}`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {plan.name}
        </h3>
        <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-1">
          {plan.price}
        </div>
        <div className="text-slate-500 dark:text-slate-400">
          {plan.period}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-slate-600 dark:text-slate-300">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={plan.ctaLink}
        className={`block text-center py-3 px-6 rounded-lg font-semibold transition ${
          plan.popular
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600'
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  )
}

export default function Pricing() {
  return (
    <main className="bg-white dark:bg-slate-900">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <PageHeader
          title="Pricing"
          subtitle="Choose Your Plan"
          description="Transparent pricing for high-quality web design and development services."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Need something custom? Let's discuss your specific requirements.
          </p>
          <Link
            href="/contacts"
            className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
          >
            Get Custom Quote
          </Link>
        </div>
      </section>
    </main>
  )
}