import { useRef, useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroVideo from '../assets/hero/hero.mp4'
import heroPoster from '../assets/about/profile.png'
import { heroContent, socialLinks } from '../data/portfolioData'

export default function Hero() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    // Initialize AOS with ease-out and once: true
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' })

    const handleLoad = () => {
      AOS.refresh()
    }

    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  // Toggle video play/pause with audio enabled
  const toggleVideo = async (e) => {
    if (e && e.stopPropagation) e.stopPropagation()
    const video = videoRef.current
    if (!video) return

    if (!video.paused) {
      video.pause()
    } else {
      video.muted = isMuted
      try {
        await video.play()
      } catch (err) {
        console.warn('Playback error with audio, trying muted fallback:', err)
        video.muted = true
        setIsMuted(true)
        await video.play()
      }
    }
  }

  // Toggle sound mute / unmute
  const toggleAudio = (e) => {
    if (e && e.stopPropagation) e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    const nextMuted = !video.muted
    video.muted = nextMuted
    setIsMuted(nextMuted)
  }

  // Social icons helper
  const renderSocialIcons = (extraClass = '') => (
    <>
      <a
        href={socialLinks.github || 'https://github.com'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={`text-white/60 hover:text-white hover:scale-125 transition-all duration-300 ${extraClass}`}
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </a>

      <a
        href={socialLinks.linkedin || 'https://linkedin.com'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={`text-white/60 hover:text-white hover:scale-125 transition-all duration-300 ${extraClass}`}
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>

      <a
        href={socialLinks.instagram || 'https://instagram.com'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={`text-white/60 hover:text-white hover:scale-125 transition-all duration-300 ${extraClass}`}
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>
    </>
  )

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#ff2a2a]">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={heroVideo}
        className="absolute inset-0 w-full h-full object-contain object-top md:object-right z-0 cursor-pointer"
        playsInline
        preload="auto"
        poster={heroPoster}
        onClick={toggleVideo}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Readability gradient overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

      {/* Left floating social bar (desktop) */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference flex-col space-y-5">
        {renderSocialIcons()}
      </div>

      {/* Content container */}
      <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-[8%] flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end pointer-events-none">
        {/* Left block */}
        <div className="max-w-2xl pointer-events-auto">
          {/* Mobile inline social icons */}
          <div
            className="lg:hidden flex items-center space-x-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {renderSocialIcons()}
          </div>

          {/* Heading */}
          <h1
            className="text-white text-3xl md:text-5xl font-bold leading-tight"
            data-aos="fade-up"
          >
            {heroContent.greeting}, <br />
            <span className="text-black">{heroContent.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white text-sm md:text-lg font-semibold max-w-md mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {heroContent.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 mt-6 items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Primary button */}
            {heroContent.ctaPrimary && (
              <a
                href={heroContent.ctaPrimary.href}
                className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-200 shadow-md inline-block"
              >
                {heroContent.ctaPrimary.text}
              </a>
            )}

            {/* Secondary button */}
            {heroContent.ctaSecondary && (
              <a
                href={heroContent.ctaSecondary.href}
                className="px-6 py-3 rounded-full bg-black/40 border border-white text-white font-semibold backdrop-blur hover:bg-black/60 transition-colors duration-200 inline-block"
              >
                {heroContent.ctaSecondary.text}
              </a>
            )}

            {/* Resume download button */}
            {heroContent.ctaResume && heroContent.ctaResume.href && (
              <a
                href={heroContent.ctaResume.href}
                download
                className="px-6 py-3 rounded-full bg-transparent border border-white/50 text-white font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center gap-2"
              >
                {/* Download Document Icon */}
                <svg
                  className="w-4 h-4 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>{heroContent.ctaResume.text}</span>
              </a>
            )}
          </div>
        </div>

        {/* Right block: Play Reel & Audio controls */}
        <div className="pointer-events-auto flex items-center gap-4 mt-6 md:mt-0 select-none">
          {/* Play / Pause Reel control */}
          <div
            className="flex flex-col items-center justify-center cursor-pointer group"
            onClick={toggleVideo}
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur hover:scale-110 hover:bg-[#ff2a2a] hover:shadow-[0_0_20px_#ff2a2a] transition-all duration-300 flex items-center justify-center text-white">
              {isPlaying ? (
                // Pause Icon
                <svg className="w-5 h-5 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                // Play Icon
                <svg className="w-5 h-5 md:w-8 md:h-8 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
            <span className="mt-2 text-[10px] md:text-xs text-white/90 uppercase tracking-widest font-semibold">
              {isPlaying ? 'Pause' : 'Play Reel'}
            </span>
          </div>

          {/* Sound / Mute toggle button */}
          <button
            type="button"
            onClick={toggleAudio}
            aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
            className="flex flex-col items-center justify-center cursor-pointer group focus:outline-none"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/20 backdrop-blur hover:scale-110 hover:bg-[#ff2a2a] hover:shadow-[0_0_15px_#ff2a2a] transition-all duration-300 flex items-center justify-center text-white">
              {isMuted ? (
                // Muted speaker icon
                <svg className="w-4 h-4 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                // Unmuted volume icon
                <svg className="w-4 h-4 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </div>
            <span className="mt-2 text-[10px] md:text-xs text-white/90 uppercase tracking-widest font-semibold">
              {isMuted ? 'Muted' : 'Sound On'}
            </span>
          </button>
        </div>
      </div>

      {/* Bottom-centre bouncing down-arrow scroll indicator */}
      <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce pointer-events-none text-white">
        <svg
          className="w-6 h-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

