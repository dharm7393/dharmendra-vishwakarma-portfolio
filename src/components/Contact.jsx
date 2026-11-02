import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax effect on the background giant text
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    if (!formRef.current) return

    const firstName = formRef.current.querySelector('#firstName')?.value.trim() || ''
    const lastName = formRef.current.querySelector('#lastName')?.value.trim() || ''
    const email = formRef.current.querySelector('#email')?.value.trim() || ''
    const message = formRef.current.querySelector('#message')?.value.trim() || ''

    // Validate required fields
    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured = Boolean(
      serviceId &&
      templateId &&
      publicKey &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'
    )

    if (!isConfigured) {
      // Fallback: Mailto client
      const subject = `Portfolio Contact from ${firstName} ${lastName}`.trim()
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        '_blank'
      )
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Behind: Parallax giant Contact word */}
      <motion.div
        style={{ y }}
        className="absolute top-10 left-6 md:left-12 pointer-events-none z-0 select-none origin-top"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter text-white/5 scale-y-[1.6]"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* In front: Red contact card aligned to the right */}
      <div className="relative z-10 w-full flex justify-end">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 rounded-tl-3xl md:rounded-tl-[3rem] shadow-2xl"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-6 mb-10">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/90">
              Reach Me
            </span>
            <a
              href={socialLinks.instagram || 'https://instagram.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-black font-semibold text-xs tracking-wider uppercase transition-colors duration-200"
            >
              DM on Instagram
            </a>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-10"
          >
            {/* Two column layout on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column: Inputs */}
              <div className="flex flex-col gap-8">
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  required
                  placeholder="First Name *"
                  className="bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors"
                />
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Last Name"
                  className="bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors"
                />
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  placeholder="Email Address *"
                  className="bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Right Column: Textarea */}
              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your Message *"
                  className="bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors resize-none min-h-[140px] flex-1"
                />
              </div>
            </div>

            {/* Bottom details & controls */}
            <div className="flex flex-col gap-6 pt-4 border-t border-white/20">
              {/* Consent checkbox */}
              <label className="flex items-start gap-3 text-xs text-white/90 cursor-pointer select-none">
                <input
                  type="checkbox"
                  required
                  className="accent-black w-4 h-4 mt-0.5 rounded cursor-pointer"
                />
                <span>
                  I consent to having this website store my submitted information so they can respond to my inquiry.
                </span>
              </label>

              {/* Response time note & urgent mailto */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-white/80 gap-2">
                <p>
                  Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
                </p>
                <a
                  href={`mailto:${personalInfo.emails.primary}?subject=Urgent Inquiry – Portfolio`}
                  className="underline hover:text-white shrink-0"
                >
                  Need urgent response?
                </a>
              </div>

              {/* Submit button */}
              <div className="pt-2">
                {status === 'sending' && (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/20 border border-white/30 text-white font-semibold cursor-wait"
                  >
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </button>
                )}

                {status === 'success' && (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-600 border border-green-500 text-white font-semibold shadow-lg"
                  >
                    <span>Sent Successfully ✓</span>
                  </button>
                )}

                {status === 'error' && (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-950 border border-red-800 text-white font-semibold"
                  >
                    <span>Failed — Try Again</span>
                  </button>
                )}

                {status === 'idle' && (
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border border-white text-white font-semibold hover:bg-white hover:text-[#ff2a2a] transition-all duration-300"
                  >
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

