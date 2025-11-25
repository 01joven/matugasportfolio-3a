// app/skills/page.tsx
"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Figma",           level: 95 },
  { name: "UI/UX Design",    level: 90 },
  { name: "React / Next.js", level: 85 },
  { name: "Tailwind CSS",    level: 92 },
  { name: "Webflow",         level: 80 },
  { name: "JavaScript",      level: 87 },
  { name: "TypeScript",      level: 82 },
  { name: "Next.js",         level: 92 },
  { name: "Express",         level: 88 },
  { name: "PHP",             level: 82 },
];

const Logo = ({ name }: { name: string }) => {
  switch (name) {
    case "Figma":         return <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 rounded-md" />;
    case "UI/UX Design":  return <div className="w-10 h-10 bg-gradient-to-tr from-pink-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-black text-lg">UX</div>;
    case "React / Next.js":
    case "Next.js":       return <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-3xl font-light">N</div>;
    case "Tailwind CSS":  return <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">TW</div>;
    case "Webflow":       return <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">W</div>;
    case "JavaScript":    return <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black font-bold text-xl">JS</div>;
    case "TypeScript":    return <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl">TS</div>;
    case "Express":       return <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-white font-mono text-lg">EX</div>;
    case "PHP":           return <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">PHP</div>;
    default:              return <div className="w-10 h-10 bg-gray-400 rounded-xl" />;
  }
};

export default function Skills() {
  return (
    <section className="min-h-screen py-24 px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">

        {/* Title Only */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Skills
          </h1>
          <p className="text-xl text-slate-400 mt-6">
            Tools & technologies I use every day
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-6">
                  <div className="p-3 bg-slate-900/80 rounded-2xl shadow-xl ring-1 ring-slate-800 group-hover:ring-cyan-400/60 group-hover:scale-110 transition-all duration-300">
                    <Logo name={skill.name} />
                  </div>
                  <span className="text-xl font-semibold text-slate-100">
                    {skill.name}
                  </span>
                </div>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-7 bg-slate-800/80 rounded-full overflow-hidden shadow-inner shadow-black/40 border border-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}