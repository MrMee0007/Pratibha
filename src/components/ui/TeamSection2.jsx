// import { getCategoryTitle, getCategoryDescription } from "../Team/TeamData";
// import TeamCard from "./TeamCard";
// import MentorCard from "./MentorCard";

// const TeamSection2 = ({ category, members = [] }) => {
//   const isMentor = category === "mentor";

//   return (
//     <section className="py-20">
//       {/* Header */}
//       <div className="text-center mb-16">
//         {/* Category badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 mb-6">
//           <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
//             {category}
//           </span>
//         </div>

//         {/* Title */}
//         <h2
//           className={`
//             text-4xl md:text-5xl font-bold mb-4 font-serif
//             ${isMentor ? "text-primary" : "text-foreground"}
//           `}
//         >
//           {getCategoryTitle(category)}
//         </h2>

//         {/* Description */}
//         <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//           {getCategoryDescription(category)}
//         </p>

//         {/* Decorative line */}
//         <div
//           className={`
//             w-24 h-1 mx-auto mt-6 rounded-full
//             ${isMentor ? "bg-primary" : "bg-secondary"}
//           `}
//         />
//       </div>

//       {/* Content */}
//       {isMentor ? (
//         <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
//           {members.map((member, index) => (
//             <MentorCard
//               key={member.id || index}
//               member={member}
//               index={index}
//             />
//           ))}
//         </div>
//       ) : (
//         <div
//           className={`
//             flex flex-wrap justify-center gap-8
//             ${category === "leadership" ? "max-w-5xl mx-auto" : ""}
//             ${category === "core" ? "max-w-6xl mx-auto" : ""}
//             ${category === "member" ? "max-w-7xl mx-auto gap-6" : ""}
//           `}
//         >
//           {members.map((member, index) => (
//             <div
//               key={member.id || index}
//               className={`
//                 ${category === "leadership" ? "w-48" : ""}
//                 ${category === "core" ? "w-44" : ""}
//                 ${category === "member" ? "w-40" : ""}
//               `}
//             >
//               <TeamCard member={member} index={index} />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default TeamSection2;


// import { getCategoryTitle, getCategoryDescription } from "../Team/TeamData";
// import TeamCard from "./TeamCard";
// import MentorCard from "./MentorCard";

// const TeamSection2 = ({ category, members = [] }) => {
//   const isMentor = category === "mentor";

//   return (
//     <section className="py-14">
//       {/* Header */}
//       <div className="text-center mb-10">
//         {/* Category badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 mb-4">
//           <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
//             {category}
//           </span>
//         </div>

//         {/* Title */}
//         <h2
//           className={`
//             text-3xl md:text-4xl font-bold mb-3 font-serif
//             ${isMentor ? "text-primary" : "text-foreground"}
//           `}
//         >
//           {getCategoryTitle(category)}
//         </h2>

//         {/* Description */}
//         <p className="text-muted-foreground text-base max-w-xl mx-auto">
//           {getCategoryDescription(category)}
//         </p>

//         {/* Decorative line */}
//         <div
//           className={`
//             w-16 h-0.5 mx-auto mt-4 rounded-full
//             ${isMentor ? "bg-primary" : "bg-secondary"}
//           `}
//         />
//       </div>

//       {/* Content */}
//       {isMentor ? (
//         <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
//           {members.map((member, index) => (
//             <MentorCard
//               key={member.id || index}
//               member={member}
//               index={index}
//             />
//           ))}
//         </div>
//       ) : (
//         <div
//           className={`
//             flex flex-wrap justify-center
//             ${category === "leadership" ? "gap-8 max-w-5xl mx-auto" : ""}
//             ${category === "core" ? "gap-7 max-w-6xl mx-auto" : ""}
//             ${category === "member" ? "gap-6 max-w-7xl mx-auto" : ""}
//           `}
//         >
//           {members.map((member, index) => (
//             <div
//               key={member.id || index}
//               className={`
//                 ${category === "leadership" ? "w-48" : ""}
//                 ${category === "core" ? "w-44" : ""}
//                 ${category === "member" ? "w-40" : ""}
//               `}
//             >
//               <TeamCard member={member} index={index} />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default TeamSection2;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter } from "lucide-react";
import { getCategoryTitle, getCategoryDescription } from "../Team/TeamData";
import MentorCard from "./MentorCard";

const TeamSection2 = ({ category, members = [] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const isMentor = category === "mentor";

  return (
    <section ref={ref} className="py-14 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 mb-4">
            <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
              {category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-serif">
            {getCategoryTitle(category)}
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            {getCategoryDescription(category)}
          </p>

          {/* Line */}
          <div className="w-16 h-0.5 mx-auto mt-4 rounded-full bg-secondary" />
        </motion.div>

        {/* ===== CONTENT ===== */}
        {isMentor ? (
          /* 🔒 Mentor section UNCHANGED */
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
            {members.map((member, index) => (
              <MentorCard
                key={member.id || index}
                member={member}
                index={index}
              />
            ))}
          </div>
        ) : (
          /* ✅ TeamSection-style grid */
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
            className="
              grid grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-4 md:gap-6
              max-w-7xl mx-auto
            "
          >
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative rounded-2xl p-4 transition-all duration-300 ${
                  member.highlight
                    ? "bg-accent text-accent-foreground"
                    : "bg-card hover:shadow-lg"
                }`}
              >
                {/* Social icons (only if highlight) */}
                {member.highlight && (
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a className="p-1.5 rounded-full bg-accent-foreground/20">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a className="p-1.5 rounded-full bg-accent-foreground/20">
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {/* Image */}
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <div
                    className={`aspect-square rounded-xl overflow-hidden ${
                      member.highlight
                        ? "bg-accent-foreground/10"
                        : "bg-muted"
                    }`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="
                        w-full h-full object-cover
                        grayscale group-hover:grayscale-0
                        transition-transform duration-500
                        group-hover:scale-110
                      "
                    />
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center">
                  <h3 className="text-base md:text-lg font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TeamSection2;
