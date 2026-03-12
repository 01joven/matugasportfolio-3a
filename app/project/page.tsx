"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageHeader from '@/app/components/PageHeader';
import matugasPic from '../images/matugas.jpg'

const projects = [
  {
    title: "E-commerce Shop",
    desc: "An e-commerce shop is a digital platform where businesses sell products directly to consumers. It involves creating a website or online store that allows customers to browse, purchase, and manage their orders",
    img: matugasPic,
    link: "https://appdevs.vercel.app",
  },
  
 
];

export default function Projects() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <PageHeader
          title="Projects"
          subtitle="Selected Work"
          description="A few examples of projects I've built. Click through to see more details."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group w-full sm:w-[320px] md:w-[360px] border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm dark:bg-slate-800 dark:border-slate-700"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.img || `/placeholder.svg?height=600&width=800`}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">{project.title}</h3>
                <p className="text-sm text-slate-600 mb-4 dark:text-slate-300">{project.desc}</p>
                <Link href={project.link} className="text-sm text-slate-700 font-medium hover:underline dark:text-slate-200">
                  View Project →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
    </main>
  )
}