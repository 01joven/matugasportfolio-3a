"use client";

import { motion } from "framer-motion";
import AnimatedPhoto from "@/app/components/animated-photo";
import Link from "next/link";
import PageHeader from '@/app/components/PageHeader';

export default function Home() {
  return (
    <> {/* root fragment allows multiple sibling sections */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <PageHeader
            title="Welcome to My Portfolio"
            subtitle="Creative Web Designer"
            description="Explore my work, skills, and get in touch for your next project."
          />
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center text-slate-900">

          <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi,

            <br />
            <span className="text-slate-900">I&apos;m Joveniano Matugas</span>
            <br />
            <span className="text-2xl md:text-4xl text-slate-600">Web Designer</span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 text-lg text-slate-600 max-w-lg">
            I build clean, responsive, and user-centered digital experiences. section should blend your professional experience, design philosophy, and personality. Highlight your expertise (e.g., branding, UI/UX, illustration), mention key accomplishments or industries, and articulate your unique creative approach. A strong, personal bio helps connect with potential employers or clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10"
          >
            <Link href="/contacts" className="inline-block rounded-md border border-gray-200 px-6 py-3 text-base font-semibold text-slate-900 bg-white hover:bg-gray-50">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center"
        >
          <AnimatedPhoto />
        </motion.div>
      </div>
    </section>

    {/* three-column feature section resembling wireframe cards */}
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">Feature One</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Brief description of the first service or feature offered.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">Feature Two</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Brief description of the second service or feature offered.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">Feature Three</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Brief description of the third service or feature offered.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}