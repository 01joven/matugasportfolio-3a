import React from 'react'

type Skill = { name: string; percent: number; initials?: string; color?: string }

// New design: 4 skills only
const skills: Skill[] = [
  { name: 'Figma', percent: 95, initials: 'F', color: 'from-pink-400 to-purple-500' },
  { name: 'React / Next.js', percent: 88, initials: 'N', color: 'from-cyan-400 to-blue-600' },
  { name: 'UI/UX Design', percent: 90, initials: 'UX', color: 'from-indigo-400 to-pink-400' },
  { name: 'Tailwind CSS', percent: 92, initials: 'TW', color: 'from-teal-400 to-indigo-500' },
]

// Provide Tailwind width classes for the specific percentages to avoid inline styles
const widthMap: Record<number, string> = {
  95: 'w-[95%]',
  92: 'w-[92%]',
  90: 'w-[90%]',
  88: 'w-[88%]',
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-lg border border-white/20">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-white shadow-inner flex items-center justify-center text-lg font-bold text-gray-800">
            {skill.initials}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
            <p className="text-sm text-gray-500">Expertise level</p>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end">
          <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
            {skill.percent}%
          </div>
          <div className="text-xs text-gray-400">proficiency</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
          <div className={`h-4 rounded-full bg-gradient-to-r ${skill.color ?? 'from-blue-400 to-purple-500'} ${widthMap[skill.percent] ?? 'w-[50%]'}`} />
        </div>
      </div>
    </div>
  )
}

export default function SkillsSimple() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <header className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-600">My Skills</h2>
        <p className="mt-3 text-gray-500">Tools & technologies I use every day</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((s) => (
          <SkillCard key={s.name} skill={s} />
        ))}
      </div>
    </section>
  )
}
