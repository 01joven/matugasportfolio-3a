// app/team/page.tsx
import React from 'react'
import Image from 'next/image'
import PageHeader from '@/app/components/PageHeader'

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

const team: TeamMember[] = [
  {
    name: "Joven Matugas",
    role: "Lead Designer & Developer",
    bio: "Passionate about creating beautiful, functional web experiences with over 5 years of experience.",
    image: "/images/matugas.jpg" // placeholder
  },
  {
    name: "Alex Johnson",
    role: "UI/UX Designer",
    bio: "Specializes in user research and interface design, ensuring every pixel serves a purpose.",
    image: "/images/placeholder.jpg"
  },
  {
    name: "Sarah Chen",
    role: "Full-Stack Developer",
    bio: "Brings designs to life with clean, efficient code and modern web technologies.",
    image: "/images/placeholder.jpg"
  }
]

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-square relative">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
          {member.name}
        </h3>
        <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
          {member.role}
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          {member.bio}
        </p>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <main className="bg-white dark:bg-slate-900">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <PageHeader
          title="Our Team"
          subtitle="Meet the People"
          description="Get to know the talented individuals behind our creative work."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </section>
    </main>
  )
}