import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

// Shared SVG path for the desktop winding line
const DESKTOP_PATH =
  'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

// Card position presets: [className, aosType, aosDelay, activateAt (fraction of 1350)]
const CARD_PRESETS = [
  {
    className: 'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
    aos: 'fade-left',
    delay: 100,
    activateFraction: 200 / 1350,
  },
  {
    className: 'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
    aos: 'fade-right',
    delay: 200,
    activateFraction: 600 / 1350,
  },
  {
    className: 'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
    aos: 'fade-left',
    delay: 300,
    activateFraction: 950 / 1350,
  },
  {
    className: 'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
    aos: 'fade-right',
    delay: 400,
    activateFraction: 1200 / 1350,
  },
]

// A "hanging tag" card that turns red when the scroll-driven path reaches it
function TagCard({ number, title, text, className, aosDelay, aosType, pathLength, activateFraction }) {
  const [isActive, setIsActive] = useState(false)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    setIsActive(latest >= activateFraction)
  })

  return (
    <div
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 z-10 ${className}`}
    >
      <div
        className={`rounded-[2rem] p-2 transition-all duration-700 ${
          isActive
            ? 'bg-[#ff2a2a] shadow-[0_10px_40px_rgba(255,42,42,0.35)]'
            : 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
        }`}
      >
        {/* Punched hole */}
        <div className="flex justify-center -mt-1 mb-0">
          <div
            className={`w-6 h-6 rounded-full border-4 ${
              isActive ? 'border-red-300/50 bg-red-800/30' : 'border-gray-300 bg-white'
            }`}
          />
        </div>

        {/* Inner panel */}
        <div
          className={`rounded-[1.5rem] mt-2 p-8 min-h-[220px] flex flex-col justify-center transition-colors duration-700 ${
            isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-800'
          }`}
        >
          <span
            className={`text-5xl font-black font-serif italic leading-none mb-3 ${
              isActive ? 'text-white/30' : 'text-gray-200'
            }`}
          >
            {number}
          </span>
          <h3 className="text-2xl font-black mb-2">{title}</h3>
          <p
            className={`text-sm leading-relaxed ${
              isActive ? 'text-white/80' : 'text-gray-500'
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* ── Header ── */}
        <div
          data-aos="fade-up"
          className="md:absolute md:top-10 md:left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-500 text-xs uppercase tracking-widest font-semibold mb-4">
            {skillsContent.badge}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] relative">
            {skillsContent.heading}
            {/* Hand-drawn arrow */}
            <svg
              className="absolute -bottom-6 right-0 w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 20 20"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </h2>
          <p className="text-gray-500 mt-6">{skillsContent.description}</p>
        </div>

        {/* ── Desktop SVG winding path ── */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* 1. Faint guide path */}
          <path
            d={DESKTOP_PATH}
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* 2. Mask driven by scroll progress */}
          <defs>
            <mask id="path-mask">
              <motion.path
                d={DESKTOP_PATH}
                stroke="white"
                strokeWidth="20"
                fill="none"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* 3. Real dashed path revealed through the mask */}
          <path
            d={DESKTOP_PATH}
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* ── Mobile SVG vertical path ── */}
        <svg
          className="md:hidden absolute left-[50%] -translate-x-1/2 top-0 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 2,0 L 2,100"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                stroke="white"
                strokeWidth="20"
                fill="none"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>
          <path
            d="M 2,0 L 2,100"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* ── Cards ── */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, i) => (
            <TagCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              className={CARD_PRESETS[i].className}
              aosType={CARD_PRESETS[i].aos}
              aosDelay={CARD_PRESETS[i].delay}
              pathLength={pathLength}
              activateFraction={CARD_PRESETS[i].activateFraction}
            />
          ))}
        </div>

        {/* ── Hand-written end note ── */}
        <span className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none pointer-events-none z-10">
          {skillsContent.endText}
        </span>
      </div>
    </section>
  )
}

