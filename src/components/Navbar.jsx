import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Navbar() {
  // Mobile drawer open state
  const [isOpen, setIsOpen] = useState(false)
  // Track scroll position to adjust padding
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-[#ff2a2a] py-4'
          : `bg-transparent ${isScrolled ? 'py-4' : 'py-6'}`
      }`}
    >
      {/* Inner wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left: Brand / Logo */}
        <a href="#" className="text-white text-2xl font-black tracking-tight">
          {personalInfo.brandName}
          <span className={isOpen ? 'text-black' : 'text-[#ff2a2a]'}>.</span>
        </a>

        {/* Centre: Desktop navigation links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group text-white/80 hover:text-white font-medium transition-colors duration-200"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-0.5 bg-red-500 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Right: Desktop "Hire Me" pill button */}
        <div className="hidden md:block">
          <a
            href={hireMeMailto}
            className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 inline-block"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile: Hamburger toggle button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? (
              // X icon when open
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger 3 lines when closed
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#ff2a2a] shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-lg py-3 border-b border-white/20 hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href={hireMeMailto}
            onClick={() => setIsOpen(false)}
            className="mt-4 text-center block w-full py-3 bg-white text-[#ff2a2a] font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
