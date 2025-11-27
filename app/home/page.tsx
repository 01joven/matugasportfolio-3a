"use client";

import { motion } from "framer-motion";
import AnimatedPhoto from "@/app/components/animated-photo";
import Link from "next/link";

export default function Home() {
  return (
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
            I build clean, responsive, and user-centered digital experiences.
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
  );
}