import { projects, socialLinks } from '../data/portfolioData'

// Small inline SVG icon components
function GitHubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalLinkIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

// Single project card with gradient border
function ProjectCard({ project, aosDelay }) {
  // Outer wrapper classes for gradient border
  const outerBorder = project.isFlagship
    ? 'bg-gradient-to-br from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/70 hover:via-white/20 hover:to-red-500/50'
    : 'bg-white/10'

  return (
    <div data-aos="fade-up" data-aos-delay={aosDelay}>
      {/* 1px gradient border wrapper */}
      <div className={`p-[1px] rounded-2xl transition-all duration-300 ${outerBorder}`}>
        {/* Inner dark panel */}
        <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90">
          {/* Badge pill (optional) */}
          {project.badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs uppercase tracking-widest font-bold mb-4">
              {project.badge}
            </span>
          )}

          {/* Number + Title row */}
          <div className="flex items-baseline gap-4 mb-3">
            <span className="text-5xl font-black text-white/10 leading-none select-none font-serif italic">
              {project.number}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-white/60 leading-relaxed mb-5 max-w-3xl">
            {project.description}
          </p>

          {/* Tech tag pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-xs font-bold bg-white/5 border border-white/10 text-white/70 hover:bg-red-600/20 hover:text-red-400 hover:border-red-500/30 transition-colors duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {/* GitHub button */}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
            )}

            {/* Demo button */}
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                <ExternalLinkIcon />
                <span>Live Demo</span>
              </a>
            ) : (
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/30 text-sm font-semibold cursor-not-allowed"
              >
                <ExternalLinkIcon className="w-4 h-4 opacity-40" />
                <span>Demo Coming Soon</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Header */}
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-xs uppercase tracking-widest font-semibold mb-4">
          Featured Projects
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
          Work that speaks for itself
        </h2>
        <p className="text-white/50 mt-4">
          A selection of projects that demonstrate my ability to ship real products end to end.
        </p>
      </div>

      {/* Project cards */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            aosDelay={(index + 1) * 100}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div data-aos="fade-up" data-aos-delay="400" className="text-center mt-14">
        <a
          href={socialLinks.github || 'https://github.com'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-200"
        >
          <GitHubIcon />
          <span>Explore All My Repositories</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}

