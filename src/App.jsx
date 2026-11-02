// Section order: Preloader → Navbar → Hero → About → IntroVideo → TechnicalSkills
// → Services → Projects → Internships → Leadership → SoftSkills → Contact → Footer
// Components not yet created are marked with comments and will be added later.

import SplashCursor from './components/SplashCursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <SplashCursor VELOCITY_DISSIPATION={3} SPLAT_FORCE={3500} COLOR_UPDATE_SPEED={18} COLOR="#ffffff" RAINBOW_MODE={false} />
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <IntroVideo /> — coming later */}
        <TechnicalSkills />
        <Services />
        <Projects />
        <Internships />  {/* returns null when internshipsList is empty */}
        <Leadership />   {/* returns null when leadershipList is empty */}
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
