import Footer from '@/components/Footer'
import HeroAbout from '@/components/HeroAbout'
import Navbar from '@/components/Navbar.jsx'
import ParallaxAbout from '@/components/ParallaxAbout'
import ParallaxShowcase from '@/components/ParallaxShowcase'
import ParallaxStatsVideography from '@/components/ParallaxStatsVideography'
import ProcessTimeline from '@/components/ProcessTimeline'
import React from 'react'


const About = () => {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <ParallaxAbout />
      <ParallaxShowcase />
      <ProcessTimeline />
      <ParallaxStatsVideography />
      <Footer />
    </div>
  )
}

export default About
