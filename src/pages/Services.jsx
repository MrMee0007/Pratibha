import CapturingEnergySection from '@/components/ui/CapturingEnergySection'
import CollaborationSection from '@/components/ui/CollaborationSection'
import HeroPort from '@/components/ui/HeroPort'
import React from 'react'
import Navbar from '@/components/Navbar.jsx'
import ExpertiseSection from '@/components/ExpertiseSection'
import ServicesOverview from '@/components/ui/ServicesOverview'

const Services = () => {
  return (
    <div>
      <Navbar />
      <HeroPort />
       <CapturingEnergySection/>
       <CollaborationSection />
       <ExpertiseSection />
       <ServicesOverview />
    </div>
  )
}

export default Services
