"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Sales Report System",
    desc: "Daily Sales Report Tracking",
    img: "/sales.webp",
    link: "https://github.com/lostcreeper10/sales-report",
  },
  {
    title: "Creeper",
    desc: "E-clothing",
    img: "/creeper.png",
    link: "https://github.com/lostcreeper10/creeper-fashion-capstone",
  },
  {
    title: "CareSync",
    desc: "Remote care-button system for elderly communication",
    img: "/caresyncs.jpg",
    link: "https://youtu.be/i0rPkd9anr8",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-24 px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-center mb-20 text-white"
        >
          My Works
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-900/80 border border-slate-800 shadow-[0_20px_45px_rgba(2,6,23,0.7)] hover:shadow-[0_30px_65px_rgba(14,165,233,0.25)] transition-all duration-500"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.img || `/placeholder.svg?height=600&width=800`}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-slate-400 mb-6">{project.desc}</p>
                <Link
                  href={project.link}
                  className="text-cyan-300 font-semibold hover:text-white transition"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}