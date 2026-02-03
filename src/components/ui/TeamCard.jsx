// import { User, Linkedin, Crown, Star, Users } from "lucide-react";

// /* Card color helpers */
// const cardColors = ["pink", "yellow", "cream", "mint", "gray"];

// const getCardColor = (index) => cardColors[index % cardColors.length];

// const getCardColorClasses = (color) => {
//   switch (color) {
//     case "pink":
//       return { bg: "bg-pink-300", text: "text-background" };
//     case "yellow":
//       return { bg: "bg-yellow-400", text: "text-primary-foreground" };
//     case "cream":
//       return { bg: "bg-yellow-100", text: "text-background" };
//     case "mint":
//       return { bg: "bg-green-300", text: "text-accent-foreground" };
//     case "gray":
//       return { bg: "bg-gray-300", text: "text-background" };
//     default:
//       return { bg: "bg-muted", text: "text-foreground" };
//   }
// };

// const TeamCard = ({ member, index }) => {
//   const isLeadership = member.category === "leadership";
//   const cardColor = getCardColor(index);
//   const colorClasses = getCardColorClasses(cardColor);

//   return (
//     <div
//       className="group relative flex flex-col items-center animate-fade-up"
//       style={{ animationDelay: `${index * 0.08}s` }}
//     >
//       {/* Pill-shaped card */}
//       <div
//         className={`
//           team-card-pill w-52 sm:w-56 md:w-60 aspect-[3/4] rounded-3xl
//           ${colorClasses.bg}
//           flex flex-col items-center justify-end
//           pb-6 px-4 shadow-lg hover:shadow-2xl
//           transition-shadow duration-300
//           relative overflow-hidden
//         `}
//       >
//         {/* Decorative burst for leadership */}
//         {isLeadership && (
//           <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full animate-pulse" />
//         )}

//         {/* Photo */}
//         <div className="absolute top-4 left-1/2 -translate-x-1/2">
//           <div
//             className="
//               relative w-28 h-28 rounded-full overflow-hidden
//               ring-4 ring-white/30 shadow-xl
//               transition-transform duration-300
//               group-hover:scale-105
//             "
//           >
//             {member.image ? (
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
//               />
//             ) : (
//               <div className="w-full h-full bg-white/20 flex items-center justify-center">
//                 <User className={`w-12 h-12 ${colorClasses.text} opacity-60`} />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Name + Role */}
//         <div className="text-center mt-auto">
//           <h3 className={`font-bold text-lg mb-0.5 ${colorClasses.text} font-sans tracking-tight`}>
//             {member.name}
//           </h3>
//           <p className={`text-sm ${colorClasses.text} opacity-80 italic font-serif`}>
//             {member.role}
//           </p>
//         </div>
//       </div>

//       {/* LinkedIn */}
//       {member.linkedIn && (
//         <a
//           href={member.linkedIn}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="
//             mt-4 p-2.5 rounded-full
//             bg-muted text-muted-foreground
//             hover:bg-primary hover:text-primary-foreground
//             transition-all duration-300
//             hover:scale-110
//           "
//         >
//           <Linkedin className="w-4 h-4" />
//         </a>
//       )}

//       {/* Year */}
//       {member.year && (
//         <span className="mt-2 text-xs text-muted-foreground">{member.year}</span>
//       )}
//     </div>
//   );
// };

// // export default TeamCard;

// import { User, Linkedin } from "lucide-react";

// /* Card color helpers */
// const cardColors = ["pink", "yellow", "cream", "mint", "gray"];

// const getCardColor = (index) => cardColors[index % cardColors.length];

// const getCardColorClasses = (color) => {
//   switch (color) {
//     case "pink":
//       return { bg: "bg-pink-600", text: "text-white" };
//     case "yellow":
//       return { bg: "bg-yellow-500", text: "text-gray-900" };
//     case "cream":
//       return { bg: "bg-yellow-200", text: "text-gray-900" };
//     case "mint":
//       return { bg: "bg-green-500", text: "text-gray-900" };
//     case "gray":
//       return { bg: "bg-gray-700", text: "text-white" };
//     default:
//       return { bg: "bg-gray-800", text: "text-white" };
//   }
// };

// const TeamCard = ({ member, index }) => {
//   const isLeadership = member.category === "leadership";
//   const cardColor = getCardColor(index);
//   const colorClasses = getCardColorClasses(cardColor);

//   return (
//     <div
//       className="group relative flex flex-col items-center animate-fade-up m-4" // <-- Added margin for spacing
//       style={{ animationDelay: `${index * 0.08}s` }}
//     >
//       {/* Pill-shaped card */}
//       <div
//         className={`
//           team-card-pill w-52 sm:w-56 md:w-60 aspect-[3/4] rounded-3xl
//           ${colorClasses.bg}
//           flex flex-col items-center justify-end
//           pb-6 px-4 shadow-lg hover:shadow-2xl
//           transition-shadow duration-300
//           relative overflow-hidden
//         `}
//       >
//         {/* Decorative burst for leadership */}
//         {isLeadership && (
//           <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400 rounded-full animate-pulse" />
//         )}

//         {/* Photo */}
//         <div className="absolute top-4 left-1/2 -translate-x-1/2">
//           <div
//             className="
//               relative w-28 h-28 rounded-full overflow-hidden
//               ring-4 ring-white/20 shadow-xl
//               transition-transform duration-300
//               group-hover:scale-105
//             "
//           >
//             {member.image ? (
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
//               />
//             ) : (
//               <div className="w-full h-full bg-gray-600 flex items-center justify-center">
//                 <User className={`w-12 h-12 ${colorClasses.text} opacity-80`} />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Name + Role */}
//         <div className="text-center mt-auto">
//           <h3 className={`font-bold text-lg mb-0.5 ${colorClasses.text} font-sans tracking-tight`}>
//             {member.name}
//           </h3>
//           <p className={`text-sm ${colorClasses.text} opacity-90 italic font-serif`}>
//             {member.role}
//           </p>
//         </div>
//       </div>

//       {/* LinkedIn */}
//       {member.linkedIn && (
//         <a
//           href={member.linkedIn}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`
//             mt-4 p-2.5 rounded-full
//             bg-gray-800 text-white
//             hover:bg-yellow-500 hover:text-gray-900
//             transition-all duration-300
//             hover:scale-110
//           `}
//         >
//           <Linkedin className="w-4 h-4" />
//         </a>
//       )}

//       {/* Year */}
//       {member.year && (
//         <span className="mt-2 text-xs text-gray-300">{member.year}</span>
//       )}
//     </div>
//   );
// };

// export default TeamCard;

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Twitter } from "lucide-react";
import Image1 from "@/assets/TeamPic/Ayush Chaubey.jpeg";
import Image2  from "@/assets/TeamPic/Ayush Sharma.JPG";
import Image4 from "@/assets/TeamPic/Aashish Goyal.jpg";
import Image5 from "@/assets/TeamPic/Aayush Agarwal.jpg";
import Image6 from "@/assets/TeamPic/Anurag Tomar.jpg";
import Image7 from "@/assets/TeamPic/Jay Sharma.webp";
import Image8 from "@/assets/TeamPic/Krishna Soni.jpg";

const teamMembers = [
  // Founders
  {
    name: "Marcus Chen",
    role: "Founder & CEO",
    image: Image2,
    category: "founders",
  },
  {
    name: "Ayush Chaubey",
    role: "President",
    image: Image1,
    category: "founders",
  },
  // Mentors
  {
    name: "James Sterling",
    role: "Senior Cinematographer",
    image: Image4,
    category: "mentors",
    highlight: true,
  },
  {
    name: "Sophia Martinez",
    role: "Director of Photography",
    image: Image5,
    category: "mentors",
  },
  // Team
  {
    name: "Thomas Müller",
    role: "Systems Engineer",
    image: Image6,
    category: "team",
  },
  {
    name: "Oleksii Suslov",
    role: "Frontend Engineer",
    image: Image7,
    category: "team",
  },
  {
    name: "Joe Harrison",
    role: "Production Manager",
    image: Image8,
    category: "team",
  },
  {
    name: "Jason Alex",
    role: "Post-Production Lead",
    image: Image1,
    category: "team",
  },
  // Members
  {
    name: "Anna Schmidt",
    role: "Cinematographer",
    image: Image2,
    category: "members",
  },
  {
    name: "David Kim",
    role: "Camera Operator",
    image: Image4,
    category: "members",
  },
  {
    name: "Lisa Chen",
    role: "Lighting Specialist",
    image:  Image5,
    category: "members",
  },
  // Alumni
  {
    name: "Robert Wilson",
    role: "Former Lead DP",
    image: Image6,
    category: "alumni",
  },
  {
    name: "Maria Santos",
    role: "Former Creative Lead",
    image: Image7,
    category: "alumni",
  },
];

const categories = [
  { key: "founders", label: "Founders" },
  { key: "mentors", label: "Mentors" },
  { key: "team", label: "Team" },
  { key: "members", label: "Members" },
  { key: "alumni", label: "Alumni" },
];

const TeamCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState("founders");

  const filteredMembers = teamMembers.filter(
    (member) => member.category === activeCategory
  );

  return (
    
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative rounded-2xl p-4 transition-all duration-300 ${
                member.highlight
                  ? "bg-accent text-accent-foreground"
                  : "bg-card hover:shadow-lg"
              }`}
            >
              {/* Social Links for highlighted */}
              {member.highlight && (
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href="#"
                    className="p-1.5 rounded-full bg-accent-foreground/20 hover:bg-accent-foreground/30 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#"
                    className="p-1.5 rounded-full bg-accent-foreground/20 hover:bg-accent-foreground/30 transition-colors"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Image */}
              {/* <div className="relative mb-4">
                <div
                  className={`aspect-square rounded-xl overflow-hidden ${
                    member.highlight ? "bg-accent-foreground/10" : "bg-muted"
                  }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div> */}
              <div className="relative mb-4 overflow-hidden rounded-xl">
  <div
    className={`aspect-square rounded-xl overflow-hidden ${
      member.highlight ? "bg-accent-foreground/10" : "bg-muted"
    }`}
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-500 transform group-hover:scale-110"
    />
  </div>
</div>

{/* Name + Role */}
<div className="text-center">
  {/* Name */}
  <h3
    className={`text-base md:text-lg font-bold mb-1 ${
      member.highlight ? "text-white" : "text-foreground"
    }`}
  >
    {member.name}
  </h3>

  {/* Role */}
  <p
    className={`text-sm md:text-base mb-1"text-gray-400"
    }`}
  >
    {member.role}
  </p>
</div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamCard;
