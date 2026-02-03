import React from 'react'
import Navbar from '@/components/navbar.jsx'
import MediaContentSection from '@/components/ui/MediaContentSection'
import teamImage from '@/assets/Team.jpg'
import HeroTeam from '@/components/ui/HeroTeam'
import ProfileCard from '@/components/Profilecard'
import TeamHierarchy from '@/components/TeamHierarchy'
import Footer from '@/components/Footer'
import { teamMemberss } from "@/components/Team/TeamData";
import { teamMembers } from '@/components/Team/TeamData'
import TeamSection from '@/components/TeamSection'
import TeamCategoryGrid from '@/components/TeamcategoryGrid'
import { teamMembersss, MentorCard } from "@/components/ui/MentorCard";


const Team = () => {
  // Filter members by category


  return (
    <div>
       <Navbar/>
      <HeroTeam />
      {teamMembersss.map((mentor, index) => (
  <MentorCard key={mentor.id} member={mentor} index={index} />
))}
      

      {/* {leadership.length > 0 && <TeamSection2 category="leadership" members={leadership}/>} */}
      <TeamSection />
   
      <Footer />
    </div>
  )
}

export default Team
