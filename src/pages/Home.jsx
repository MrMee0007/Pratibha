import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Layout1 from '@/components/Layout1.jsx'
import { Image1, Image10, Image11, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9 } from '@/assets/assets.js'
import VideoGallery from '@/components/videoGallery.jsx'
import CapturingMoments from '@/components/CapturingMoments.jsx'
import ParallaxHero from '@/components/ParallaxHero.jsx'
import Gallery from '@/components/ui/Gallery.jsx'
import FeaturedProjects from '@/components/ui/FeaturedProjects.jsx'
import OverlappingCTA from '@/components/ui/OverlappingCTA.jsx'

import Footer from '@/components/Footer.jsx'

const Home = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9
  ]

  return (
    <div>
      <Navbar />
      <ParallaxHero/>
      <OverlappingCTA />
      {/* <Hero /> */}
      <Layout1 />
      <Gallery />
      <FeaturedProjects />
      <CapturingMoments/>
      <Footer />

     
    </div>
  )
}

export default Home
