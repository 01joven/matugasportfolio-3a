"use client";

import { motion } from "framer-motion";
import AnimatedPhoto from "@/app/components/animated-photo";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center text-slate-100">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Hi,
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              I&apos;m Jameboy
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-slate-300">Web Designer</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-xl text-slate-400 max-w-xl"
          >
            I craft beautiful, responsive, and user-centered digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10"
          >
            <Link
              href="/contacts"
              className="inline-block rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-10 py-4 text-lg font-semibold text-white shadow-[0_20px_45px_rgba(99,102,241,0.35)] transition hover:shadow-[0_25px_60px_rgba(236,72,153,0.35)]"
            >
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