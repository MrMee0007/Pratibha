// import { User, Linkedin, Mail, Sparkles } from "lucide-react";

// const MentorCard = ({ member = {}, index = 0 }) => {
//   if (!member || Object.keys(member).length === 0) return null;

//   const isEven = index % 2 === 0;

//   return (
//     <div
//       className="relative bg-card border border-border animate-fade-up"
//       style={{ animationDelay: `${index * 0.15}s` }}
//     >
//       <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

//       <div className="p-8 flex flex-col md:flex-row gap-8 items-center">
//         {/* Image */}
//         <div className="relative flex-shrink-0">
//           <div
//             className={`w-36 h-48 rounded-full overflow-hidden shadow-xl
//               ${isEven ? "bg-primary" : "bg-secondary"}`}
//           >
//             {member.image ? (
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center">
//                 <User className="w-16 h-16 text-white" />
//               </div>
//             )}
//           </div>

//           <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
//             <Sparkles className="w-3 h-3" />
//             MENTOR
//           </div>
//         </div>

//         {/* Info */}
//         <div className="flex-1 text-center md:text-left">
//           <h3 className="text-2xl font-bold">{member.name}</h3>
//           <p className="text-sm text-secondary font-semibold mb-3">
//             {member.role}
//           </p>

//           <p className="text-sm text-muted-foreground mb-4">
//             {member.bio}
//           </p>

//           <div className="flex gap-3 justify-center md:justify-start">
//             {member.email && (
//               <a
//                 href={`mailto:${member.email}`}
//                 className="px-4 py-2 bg-primary text-white rounded-full text-sm"
//               >
//                 <Mail className="inline w-4 h-4 mr-1" />
//                 Contact
//               </a>
//             )}
//             {member.linkedIn && (
//               <a
//                 href={member.linkedIn}
//                 target="_blank"
//                 className="px-4 py-2 bg-muted rounded-full text-sm"
//               >
//                 <Linkedin className="inline w-4 h-4 mr-1" />
//                 LinkedIn
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MentorCard;


import { User, Linkedin, Mail, Sparkles } from "lucide-react";

/* ===================== TEAM DATA ===================== */

export const teamMembersss = [
  {
    id: "1",
    name: "Dr. Rajesh Kumar",
    role: "Founder & Mentor",
    category: "mentor",
    year: "2020–Present",
    bio: "15+ years of experience guiding students in ML, Data Science and IoT.",
    expertise: ["Machine Learning", "Data Science", "IoT"],
    email: "rajesh.kumar@college.edu",
    image: "/src/assets/TeamPic/Aashish Goyal.jpg",
  },
  {
    id: "2",
    name: "Prof. Anita Sharma",
    role: "Advisor",
    category: "mentor",
    year: "2020–Present",
    bio: "Entrepreneurship and product strategy expert.",
    expertise: ["Entrepreneurship", "Product Design", "Strategy"],
    email: "anita.sharma@college.edu",
    image: "/src/assets/TeamPic/Anurag Tomar.jpg",
  },
];

/* ===================== MENTOR CARD ===================== */

export const MentorCard = ({ member, index }) => {
  if (!member) return null;

  const isEven = index % 2 === 0;

  return (
    <div
      className="relative bg-card border border-border rounded-2xl p-8 flex gap-8 items-center"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold">
        <Sparkles size={14} /> MENTOR
      </div>

      {/* Image */}
      <div
        className={`w-36 h-48 rounded-full overflow-hidden ${
          isEven ? "bg-primary" : "bg-secondary"
        }`}
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <User className="w-full h-full p-10" />
        )}
      </div>

      {/* Info */}
      <div>
        <h3 className="text-2xl font-bold">{member.name}</h3>
        <p className="text-sm uppercase tracking-wide text-muted-foreground">
          {member.role}
        </p>

        {member.bio && (
          <p className="mt-3 text-sm text-muted-foreground">
            {member.bio}
          </p>
        )}

        {member.expertise && (
          <div className="flex flex-wrap gap-2 mt-3">
            {member.expertise.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-muted border"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-2 mt-4 text-primary font-medium"
          >
            <Mail size={16} />
            Contact
          </a>
        )}
      </div>
    </div>
  );
};
export default MentorCard;