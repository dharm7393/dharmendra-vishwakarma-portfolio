import { technicalSkills } from '../data/portfolioData'

// Rounded pill badge for a single skill
function SkillBadge({ name }) {
  return (
    <span className="inline-flex rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20 transition-colors duration-200 cursor-default">
      {name}
    </span>
  )
}

// Glassmorphism card for one skill category
function SkillCard({ category, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(255,42,42,0.15)] transition-all duration-300"
    >
      <h3 className="text-xs uppercase font-black tracking-widest text-white/80 pb-3 mb-4 border-b border-white/10">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </div>
  )
}

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Blurred red background circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-xs uppercase tracking-widest font-semibold mb-4">
          Technical Stack
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase">
          My Skillset
        </h2>
        <p className="text-white/50 mt-3">
          The languages, frameworks, databases, and tools I work with every day.
        </p>
      </div>

      {/* Skills grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {technicalSkills.categories.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </section>
  )
}
