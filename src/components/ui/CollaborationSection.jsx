// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowRight, Sparkles } from "lucide-react";
// import teamImage from "@/assets/Team.jpg";

// gsap.registerPlugin(ScrollTrigger);

// const CollaborationSection = () => {
//   const sectionRef = useRef(null);
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         cardRef.current,
//         { y: 80, opacity: 0, scale: 0.95 },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 1.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );

//       gsap.to(".float-element", {
//         y: -20,
//         duration: 2,
//         ease: "sine.inOut",
//         yoyo: true,
//         repeat: -1,
//         stagger: 0.3,
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-black">
//       {/* Background decoration */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6">
//         <div
//           ref={cardRef}
//           className="relative bg-gray-900/50 border border-gray-700 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm"
//         >
//           {/* Glow effects */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
//           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Content */}
//             <div className="space-y-6">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 text-blue-400 border border-blue-500/30 text-sm">
//                 <Sparkles size={16} />
//                 <span>Let's Create Together</span>
//               </div>

//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Syne'] leading-tight text-white">
//                 How about we capture something{" "}
//                 <span className="text-blue-400">amazing</span> together
//               </h2>

//               <p className="text-gray-300 text-lg leading-relaxed">
//                 Photography is more than just taking pictures. It's about
//                 capturing feelings, stories, and the little details that make
//                 every moment unique. Whether you're looking for fresh branding
//                 shots, timeless portraits, or creative lifestyle photography,
//                 I'd love to team up and bring your vision to life.
//               </p>

//               <div className="flex flex-wrap gap-4 pt-4">
//                 {/* Primary Button */}
//                 <button className="group flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-500 rounded-full px-8 py-3 text-lg transition">
//                   Let's make it happen
//                   <ArrowRight
//                     size={18}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
//                 </button>

//                 {/* Secondary Button */}
//                 <button className="rounded-full px-8 py-3 text-lg border border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition">
//                   View Portfolio
//                 </button>
//               </div>
//             </div>

//             {/* Image */}
//             <div className="relative">
//               <div className="relative rounded-2xl overflow-hidden group">
//                 <img
//                   src={teamImage}
//                   alt="Photographer"
//                   className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

//                 {/* Floating badge */}
//                 <div className="float-element absolute bottom-6 left-6 bg-gray-800/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-600">
//                   <p className="text-sm font-medium text-white">
//                     Ready to turn ideas into visuals?
//                   </p>
//                 </div>
//               </div>

//               {/* Decorative elements */}
//               <div
//                 className="float-element absolute -top-4 -right-4 w-20 h-20 border border-blue-500/30 rounded-full"
//                 style={{ animationDelay: "0.5s" }}
//               />
//               <div
//                 className="float-element absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-lg rotate-12"
//                 style={{ animationDelay: "1s" }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CollaborationSection;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles } from "lucide-react";
import teamImage from "@/assets/Team.jpg";

gsap.registerPlugin(ScrollTrigger);

const CollaborationSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 90, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.to(".float-element", {
        y: -18,
        duration: 2.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden bg-black"
    >
      {/* HEROPORT BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[220px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[420px] h-[420px] bg-accent/20 blur-[200px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div
          ref={cardRef}
          className="
            relative overflow-hidden rounded-3xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            p-8 md:p-12 lg:p-16
            shadow-[0_0_80px_rgba(0,160,255,0.12)]
          "
        >
          {/* SHINING CARD EDGES */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* CONTENT */}
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm">
                <Sparkles size={16} />
                <span>Let's Create Together</span>
              </div>

              <h2 className="font-['Syne'] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-white">
                  How about we capture something{" "}
                </span>
                <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                  amazing
                </span>{" "}
                <span className="text-white">together</span>
              </h2>

              <p className="text-white/75 text-lg leading-relaxed">
                Photography is more than just taking pictures. It's about
                capturing feelings, stories, and the little details that make
                every moment unique. Whether you're looking for fresh branding
                shots, timeless portraits, or creative lifestyle photography,
                I'd love to team up and bring your vision to life.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-5 pt-4">
                {/* PRIMARY */}
                <button className="group relative overflow-hidden rounded-full px-10 py-4 text-lg font-semibold text-white">
                  <span className="relative z-10 flex items-center gap-3">
                    Let's make it happen
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-90 group-hover:opacity-100 transition-opacity" />
                </button>

                {/* SECONDARY */}
                <button className="rounded-full px-10 py-4 text-lg border border-white/20 text-white/80 hover:text-primary hover:border-primary transition">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="group relative rounded-2xl overflow-hidden">
                <img
                  src={teamImage}
                  alt="Photographer"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* CINEMATIC OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* FLOATING BADGE */}
                <div className="float-element absolute bottom-6 left-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-5 py-3">
                  <p className="text-sm font-medium text-white">
                    Ready to turn ideas into visuals?
                  </p>
                </div>
              </div>

              {/* DECORATIVE FLOATS */}
              <div
                className="float-element absolute -top-5 -right-5 w-24 h-24 rounded-full border border-primary/30"
                style={{ animationDelay: "0.6s" }}
              />
              <div
                className="float-element absolute -bottom-5 -left-5 w-20 h-20 bg-accent/20 rounded-lg rotate-12"
                style={{ animationDelay: "1.2s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;

