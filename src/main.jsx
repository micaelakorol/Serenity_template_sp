import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import Services from './components/Services/Services.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import FAQ from './components/FAQ/FAQ.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contact from './components/Contact/Contact.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode> {/*Se visualizan en este orden, si desea, puede modificarlo*/}
    <Navbar />
    <HeroSection/>
    <Services />
    <AboutMe />
    <Contact />
    <FAQ />
    <Footer />
  </StrictMode>,
)
