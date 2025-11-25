// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen py-24 px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto">

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
            About Me
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
          >
            I’m a <span className="font-semibold text-cyan-300">Bachelor of Science in Information Technology</span> student at 
            <span className="font-semibold text-white"> Cordova Public College</span>, aspiring to become a software developer 
            with a passion for building practical and user-centered solutions.
          </motion.p>
        </motion.div>

        {/* Resume Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <p className="text-lg text-slate-400">Want to know more? Here’s my resume</p>

          <div className="flex flex-col sm:flex-row gap-6">

            {/* View Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-slate-900/80 text-cyan-200 border border-slate-700 px-10 py-5 rounded-full font-semibold text-lg shadow-[0_18px_35px_rgba(15,23,42,0.65)] hover:border-cyan-400 hover:text-white hover:shadow-[0_25px_55px_rgba(14,165,233,0.35)] transform hover:scale-105 transition-all duration-300"
            >
              <Eye size={26} />
              View Resume
            </a>

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download="Jameboy_Escartin_Resume.pdf"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-[0_30px_60px_rgba(79,70,229,0.45)] hover:shadow-[0_40px_80px_rgba(236,72,153,0.35)] transform hover:scale-105 transition-all duration-300"
            >
              <Download size={26} className="group-hover:translate-y-1 transition" />
              Download Resume
            </a>
          </div>

          <p className="text-sm text-slate-500">
            Updated November 2025 • PDF
          </p>
        </motion.div>

      </div>
    </section>
  );
}