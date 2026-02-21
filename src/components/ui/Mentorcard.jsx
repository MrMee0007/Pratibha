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


// import { User, Linkedin, Mail, Sparkles } from "lucide-react";

// /* ===================== TEAM DATA ===================== */

// export const teamMembersss = [
//   {
//     id: "1",
//     name: "Dr. Rajesh Kumar",
//     role: "Founder & Mentor",
//     category: "mentor",
//     year: "2020–Present",
//     bio: "15+ years of experience guiding students in ML, Data Science and IoT.",
//     expertise: ["Machine Learning", "Data Science", "IoT"],
//     email: "rajesh.kumar@college.edu",
//     image: "/src/assets/TeamPic/Aashish Goyal.jpg",
//   },
//   {
//     id: "2",
//     name: "Prof. Anita Sharma",
//     role: "Advisor",
//     category: "mentor",
//     year: "2020–Present",
//     bio: "Entrepreneurship and product strategy expert.",
//     expertise: ["Entrepreneurship", "Product Design", "Strategy"],
//     email: "anita.sharma@college.edu",
//     image: "/src/assets/TeamPic/Anurag Tomar.jpg",
//   },
// ];

// /* ===================== MENTOR CARD ===================== */

// export const MentorCard = ({ member, index }) => {
//   if (!member) return null;

//   const isEven = index % 2 === 0;

//   return (
//     <div
//       className="relative bg-card border border-border rounded-2xl p-8 flex gap-8 items-center"
//       style={{ animationDelay: `${index * 0.15}s` }}
//     >
//       {/* Badge */}
//       <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold">
//         <Sparkles size={14} /> MENTOR
//       </div>

//       {/* Image */}
//       <div
//         className={`w-36 h-48 rounded-full overflow-hidden ${
//           isEven ? "bg-primary" : "bg-secondary"
//         }`}
//       >
//         {member.image ? (
//           <img
//             src={member.image}
//             alt={member.name}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <User className="w-full h-full p-10" />
//         )}
//       </div>

//       {/* Info */}
//       <div>
//         <h3 className="text-2xl font-bold">{member.name}</h3>
//         <p className="text-sm uppercase tracking-wide text-muted-foreground">
//           {member.role}
//         </p>

//         {member.bio && (
//           <p className="mt-3 text-sm text-muted-foreground">
//             {member.bio}
//           </p>
//         )}

//         {member.expertise && (
//           <div className="flex flex-wrap gap-2 mt-3">
//             {member.expertise.map((skill, i) => (
//               <span
//                 key={i}
//                 className="px-3 py-1 text-xs rounded-full bg-muted border"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         )}

//         {member.email && (
//           <a
//             href={`mailto:${member.email}`}
//             className="inline-flex items-center gap-2 mt-4 text-primary font-medium"
//           >
//             <Mail size={16} />
//             Contact
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };
// export default MentorCard;

// import { User, Mail, Sparkles } from "lucide-react";

// export const MentorCard = ({ member, index }) => {
//   if (!member) return null;

//   return (
//     <div className="flex justify-center">
//       <div
//         className="
//           group
//           relative
//           w-[380px]
//           min-h-[520px]
//           bg-gradient-to-br from-card via-background to-card
//           border border-border
//           rounded-3xl
//           p-8
//           flex flex-col items-center text-center
//           shadow-xl
//           transition-all duration-700
//           hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)]
//         "
//         style={{
//           transformStyle: "preserve-3d",
//           perspective: "1200px",
//         }}
//       >
//         {/* Glow */}
//         <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

//         {/* Mentor Badge */}
//         <div
//           className="
//             absolute top-5 right-5
//             flex items-center gap-2
//             px-4 py-1
//             rounded-full
//             text-xs font-bold tracking-widest
//             bg-primary text-primary-foreground
//             shadow-md
//           "
//           style={{ transform: "translateZ(40px)" }}
//         >
//           <Sparkles size={14} />
//           MENTOR
//         </div>

//         {/* Profile Image */}
//         <div
//           className="
//             relative
//             w-44 h-44
//             rounded-full
//             overflow-hidden
//             ring-4 ring-primary/40
//             shadow-[0_20px_40px_rgba(0,0,0,0.4)]
//             transition-transform duration-700
//             group-hover:translate-y-[-6px]
//           "
//           style={{ transform: "translateZ(60px)" }}
//         >
//           {member.image ? (
//             <img
//               src={member.image}
//               alt={member.name}
//               className="w-full h-full object-cover scale-110"
//             />
//           ) : (
//             <User className="w-full h-full p-10" />
//           )}
//         </div>

//         {/* Info */}
//         <div
//           className="mt-6"
//           style={{ transform: "translateZ(50px)" }}
//         >
//           <h3 className="text-3xl font-extrabold tracking-tight">
//             {member.name}
//           </h3>

//           <p className="mt-1 text-sm uppercase tracking-widest text-primary">
//             {member.role}
//           </p>

//           {member.bio && (
//             <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
//               {member.bio}
//             </p>
//           )}
//         </div>

//         {/* Expertise */}
//         {member.expertise && (
//           <div
//             className="flex flex-wrap justify-center gap-2 mt-5"
//             style={{ transform: "translateZ(45px)" }}
//           >
//             {member.expertise.map((skill, i) => (
//               <span
//                 key={i}
//                 className="
//                   px-4 py-1.5
//                   text-xs font-semibold
//                   rounded-full
//                   bg-muted/60
//                   border
//                   backdrop-blur
//                 "
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* CTA */}
//         {member.email && (
//           <a
//             href={`mailto:${member.email}`}
//             className="
//               mt-6
//               inline-flex items-center gap-2
//               px-6 py-2.5
//               rounded-full
//               bg-primary text-primary-foreground
//               font-semibold
//               shadow-lg
//               transition-all
//               hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]
//             "
//             style={{ transform: "translateZ(55px)" }}
//           >
//             <Mail size={16} />
//             Contact
//           </a>
//         )}

//         {/* 3D Tilt Effect */}
//         <div className="absolute inset-0 rounded-3xl transition-transform duration-700 group-hover:[transform:rotateX(8deg)_rotateY(-8deg)]" />
//       </div>
//     </div>
//   );
// };

// export default MentorCard;

// import { User, Mail, Sparkles } from "lucide-react";

// /* ===================== TEAM DATA ===================== */

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

// /* ===================== MENTOR CARD ===================== */

// export const MentorCard = ({ member, index }) => {
//   if (!member) return null;

//   return (
//     <div
//       className="
//         group
//         relative
//         w-[380px]
//         min-h-[520px]
//         bg-gradient-to-br from-card via-background to-card
//         border border-border
//         rounded-3xl
//         p-8
//         flex flex-col items-center text-center
//         shadow-xl
//         transition-all duration-700
//         hover:shadow-[0_40px_80px_rgba(0,0,0,0.45)]
//       "
//       style={{
//         transformStyle: "preserve-3d",
//         perspective: "1200px",
//         animationDelay: `${index * 120}ms`,
//       }}
//     >
//       {/* Glow */}
//       <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

//       {/* Mentor Badge */}
//       <div
//         className="
//           absolute top-5 right-5
//           flex items-center gap-2
//           px-4 py-1
//           rounded-full
//           text-xs font-bold tracking-widest
//           bg-primary text-primary-foreground
//           shadow-md
//         "
//         style={{ transform: "translateZ(40px)" }}
//       >
//         <Sparkles size={14} />
//         MENTOR
//       </div>

//       {/* Profile Image */}
//       <div
//         className="
//           relative
//           w-44 h-44
//           rounded-full
//           overflow-hidden
//           ring-4 ring-primary/40
//           shadow-[0_20px_40px_rgba(0,0,0,0.4)]
//           transition-transform duration-700
//           group-hover:-translate-y-2
//         "
//         style={{ transform: "translateZ(60px)" }}
//       >
//         {member.image ? (
//           <img
//             src={member.image}
//             alt={member.name}
//             className="w-full h-full object-cover scale-110"
//           />
//         ) : (
//           <User className="w-full h-full p-10" />
//         )}
//       </div>

//       {/* Info */}
//       <div className="mt-6" style={{ transform: "translateZ(50px)" }}>
//         <h3 className="text-3xl font-extrabold tracking-tight">
//           {member.name}
//         </h3>

//         <p className="mt-1 text-sm uppercase tracking-widest text-primary">
//           {member.role}
//         </p>

//         {member.bio && (
//           <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
//             {member.bio}
//           </p>
//         )}
//       </div>

//       {/* Expertise */}
//       {member.expertise && (
//         <div
//           className="flex flex-wrap justify-center gap-2 mt-5"
//           style={{ transform: "translateZ(45px)" }}
//         >
//           {member.expertise.map((skill, i) => (
//             <span
//               key={i}
//               className="
//                 px-4 py-1.5
//                 text-xs font-semibold
//                 rounded-full
//                 bg-muted/60
//                 border
//                 backdrop-blur
//               "
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       )}

//       {/* CTA */}
//       {member.email && (
//         <a
//           href={`mailto:${member.email}`}
//           className="
//             mt-6
//             inline-flex items-center gap-2
//             px-6 py-2.5
//             rounded-full
//             bg-primary text-primary-foreground
//             font-semibold
//             shadow-lg
//             transition-all
//             hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]
//           "
//           style={{ transform: "translateZ(55px)" }}
//         >
//           <Mail size={16} />
//           Contact
//         </a>
//       )}

//       {/* 3D Tilt */}
//       <div className="absolute inset-0 rounded-3xl transition-transform duration-700 group-hover:[transform:rotateX(8deg)_rotateY(-8deg)]" />
//     </div>
//   );
// };

// export default MentorCard;


import { User, Mail, Sparkles } from "lucide-react";

/* ===================== MENTOR CARD ===================== */

export const MentorCard = ({ member, index }) => {
  if (!member) return null;

  return (
    <div
      className="
        group relative
        w-[390px] min-h-[600px]
        rounded-[28px]
        p-[1px]
        bg-gradient-to-br
        from-primary/40 via-transparent to-secondary/40
        shadow-[0_40px_120px_rgba(0,0,0,0.6)]
        transition-all duration-700
        hover:scale-[1.04]
      "
      style={{
        perspective: "1400px",
        transformStyle: "preserve-3d",
        animationDelay: `${index * 120}ms`,
      }}
    >
      {/* ===================== CARD BODY ===================== */}
      <div
        className="
          relative h-full w-full
          rounded-[26px]
          bg-white/5
          backdrop-blur-2xl
          border border-white/10
          px-7 pt-7 pb-8
          flex flex-col items-center text-center
          overflow-hidden
        "
      >
        {/* Ambient floating lights */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />

        {/* Mentor Badge */}
        <div
          className="
            absolute top-5 right-5
            z-20
            flex items-center gap-2
            px-4 py-1
            rounded-full
            text-xs font-bold tracking-widest
            bg-primary text-primary-foreground
            shadow-lg
          "
          style={{ transform: "translateZ(50px)" }}
        >
          <Sparkles size={14} />
          MENTOR
        </div>

        {/* ===================== IMAGE ===================== */}
        <div
          className="
            relative z-10
            w-full h-64
            rounded-2xl
            overflow-hidden
            shadow-[0_25px_60px_rgba(0,0,0,0.6)]
            transition-transform duration-700
            group-hover:-translate-y-2
          "
          style={{ transform: "translateZ(70px)" }}
        >
          {member.image ? (
            <>
              <img
                src={member.image}
                alt={member.name}
                className="
                  w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              {/* Dark cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Holographic shine */}
              <div
                className="
                  absolute inset-0
                  bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)]
                  opacity-0 group-hover:opacity-100
                  translate-x-[-120%] group-hover:translate-x-[120%]
                  transition-all duration-1000
                "
              />

              {/* Inner glow */}
              <div className="absolute inset-0 ring-1 ring-white/20 rounded-2xl" />
            </>
          ) : (
            <User className="w-full h-full p-12" />
          )}
        </div>

        {/* ===================== INFO ===================== */}
        <div
          className="mt-6 z-10"
          style={{ transform: "translateZ(60px)" }}
        >
          <h3 className="text-3xl font-extrabold tracking-tight">
            {member.name}
          </h3>

          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-primary">
            {member.role}
          </p>

          {member.bio && (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {member.bio}
            </p>
          )}
        </div>

        {/* ===================== SKILLS ===================== */}
        {member.expertise && (
          <div
            className="
              flex flex-wrap justify-center gap-2 mt-5 z-10
            "
            style={{ transform: "translateZ(55px)" }}
          >
            {member.expertise.map((skill, i) => (
              <span
                key={i}
                className="
                  px-4 py-1.5
                  text-xs font-semibold
                  rounded-full
                  bg-white/10
                  border border-white/20
                  backdrop-blur
                  transition-all duration-500
                  hover:-translate-y-1 hover:bg-white/20
                "
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* ===================== CTA ===================== */}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="
              mt-7 z-10
              inline-flex items-center gap-2
              px-8 py-3
              rounded-full
              bg-primary text-primary-foreground
              font-semibold
              shadow-lg
              transition-all duration-500
              hover:shadow-[0_0_45px_rgba(255,255,255,0.7)]
              hover:-translate-y-1
            "
            style={{ transform: "translateZ(65px)" }}
          >
            <Mail size={16} />
            Contact Mentor
          </a>
        )}

        {/* ===================== 3D TILT ===================== */}
        <div className="absolute inset-0 rounded-[26px] transition-transform duration-700 group-hover:[transform:rotateX(7deg)_rotateY(-7deg)]" />
      </div>
    </div>
  );
};

export default MentorCard;
