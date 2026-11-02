import { softSkillsList } from '../data/portfolioData'

// Single soft-skill card
function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] flex flex-col items-center justify-center text-center hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(255,42,42,0.12)] transition-all duration-300"
    >
      {/* Emoji icon in a rounded square */}
      <div className="w-14 h-14 rounded-xl bg-gray-200 flex items-center justify-center text-2xl mb-4 group-hover:bg-red-100 group-hover:scale-110 transition-all duration-300">
        {skill.icon}
      </div>

      {/* Skill name */}
      <h3 className="text-xs uppercase tracking-widest font-black text-gray-900 mb-2">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed">
        {skill.desc}
      </p>
    </div>
  )
}

export default function SoftSkills() {
  if (!softSkillsList || softSkillsList.length === 0) return null

  return (
    <section id="soft-skills" className="bg-white bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn-paper SVG divider at the top (dark → white transition) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#0a0a0a] block"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Header */}
      <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-14 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-500 text-xs uppercase tracking-widest font-semibold mb-4">
          Core Competencies
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase">
          Professional Soft Skills
        </h2>
        <p className="text-gray-500 mt-3">
          The interpersonal strengths I bring to every team and project.
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {softSkillsList.map((skill, index) => (
          <SoftSkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}

