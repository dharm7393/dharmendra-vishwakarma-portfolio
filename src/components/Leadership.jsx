import { leadershipList } from '../data/portfolioData'

// Single timeline item card
function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex items-start md:items-center w-full mb-12 last:mb-0">
      {/* Red glowing dot on the timeline */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_rgba(255,42,42,0.6)] z-10 border-2 border-[#0a0a0a]" />

      {/* Card layout — alternates left/right on md+ */}
      <div className={`flex w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Card side (45% on md+) */}
        <div
          className={`ml-10 md:ml-0 w-full md:w-[45%] ${isEven ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}
          data-aos={isEven ? 'fade-right' : 'fade-left'}
          data-aos-delay={index * 100}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(255,42,42,0.1)] transition-all duration-300">
            {/* Badge pill */}
            {item.badge && (
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-[10px] uppercase tracking-widest font-bold mb-3">
                {item.badge}
              </span>
            )}

            {/* Title */}
            <h3 className="text-lg font-black text-white hover:text-[#ff2a2a] transition-colors duration-200 mb-1">
              {item.title}
            </h3>

            {/* Role */}
            <p className="font-mono text-xs uppercase tracking-widest text-red-400 mb-3">
              {item.role}
            </p>

            {/* Description */}
            <p className="text-sm text-white/60 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>

        {/* Empty spacer (other 45% + 10% centre gap) */}
        <div className="hidden md:block md:w-[55%]" />
      </div>
    </div>
  )
}

export default function Leadership() {
  // Skip rendering entirely if no leadership items
  if (!leadershipList || leadershipList.length === 0) return null

  return (
    <section className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn-paper SVG divider at the top (red → dark transition) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#ff2a2a] block"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Header */}
      <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-xs uppercase tracking-widest font-semibold mb-4">
          Activities
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase">
          Leadership & Engagement
        </h2>
        <p className="text-white/50 mt-3">
          Communities, events, and initiatives I have contributed to.
        </p>
      </div>

      {/* Vertical timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Gradient timeline line */}
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10 pointer-events-none" />

        {leadershipList.map((item, index) => (
          <LeadershipItem key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
