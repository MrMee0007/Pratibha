// import React from 'react'
// import Navbar from '@/components/navbar.jsx'
// import MediaContentSection from '@/components/ui/MediaContentSection'
// import teamImage from '@/assets/Team.jpg'
// import HeroTeam from '@/components/ui/HeroTeam'
// import ProfileCard from '@/components/Profilecard'
// import TeamHierarchy from '@/components/TeamHierarchy'
// import Footer from '@/components/Footer'
// import { teamMemberss } from "@/components/Team/TeamData";
// import { teamMembers } from '@/components/Team/TeamData'
// import TeamSection from '@/components/TeamSection'
// import TeamCategoryGrid from '@/components/TeamcategoryGrid'
// import { teamMembersss, MentorCard } from "@/components/ui/MentorCard";


// const Team = () => {
//   // Filter members by category


//   return (
//     <div>
//        <Navbar/>
//       <HeroTeam />
//       {teamMembersss.map((mentor, index) => (
//   <MentorCard key={mentor.id} member={mentor} index={index} />
// ))}
      

//       {/* {leadership.length > 0 && <TeamSection2 category="leadership" members={leadership}/>} */}
//       <TeamSection />
   
//       <Footer />
//     </div>
//   )
// }

// export default Team

import React from "react";

import Navbar from "@/components/navbar.jsx";
import HeroTeam from "@/components/ui/HeroTeam";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

import { teamMembersss, MentorCard } from "@/components/ui/MentorCard";

const Team = () => {
  return (
    <div>
      <Navbar />

      <HeroTeam />

      {/* ===================== MENTOR SECTION ===================== */}
     <section className="py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-16
        place-items-center
      "
    >
      {teamMembersss.map((mentor) => (
        <MentorCard key={mentor.id} member={mentor} />
      ))}
    </div>
  </div>
</section>


      {/* ===================== OTHER TEAM SECTIONS ===================== */}
      <TeamSection />

      <Footer />
    </div>
  );
};

export default Team;
