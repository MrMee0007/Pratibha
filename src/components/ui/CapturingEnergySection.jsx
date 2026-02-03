// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CapturingEnergySection = () => {
//   const sectionRef = useRef(null);
//   const textRef = useRef(null);
//   const imagesRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Text animation
//       gsap.fromTo(
//         textRef.current?.querySelectorAll(".animate-text"),
//         { y: 60, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//           stagger: 0.2,
//           scrollTrigger: {
//             trigger: textRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );

//       // Images parallax
//       const images = imagesRef.current?.querySelectorAll(".parallax-img");
//       images?.forEach((img, i) => {
//         gsap.fromTo(
//           img,
//           { y: 100, opacity: 0, scale: 0.9 },
//           {
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             duration: 1.2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: img,
//               start: "top 85%",
//               toggleActions: "play none none reverse",
//             },
//             delay: i * 0.2,
//           }
//         );
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const images = [
//     "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000",
//     "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000",
//     "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000",
//   ];

//   return (
//     <section ref={sectionRef} className="py-24 md:py-32 relative bg-black">
//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Text Content */}
//           <div ref={textRef} className="space-y-8">
//             <h2 className="animate-text text-4xl md:text-5xl lg:text-6xl font-bold font-['Syne'] leading-tight">
//               <span className="text-white">CAPTURING</span>
//               <br />
//               <span className="text-blue-400">ENERGY</span>
//             </h2>

//             <div className="space-y-6 text-gray-300">
//               <p className="animate-text text-lg leading-relaxed">
//                 Together we start a project. A collaborative effort to capture
//                 the vibrant atmosphere of any event, big or small, where every
//                 moment is filled with energy, creativity, and emotion.
//               </p>
//               <p className="animate-text text-lg leading-relaxed">
//                 Through a series of dynamic shots, we work closely to portray
//                 the unique ambiance from electrifying performances to intimate
//                 moments shared among attendees.
//               </p>
//               <p className="animate-text text-lg leading-relaxed">
//                 By focusing on contrast and texture, we aim to emphasize the raw
//                 energy and genuine emotion of the event, creating a cohesive
//                 visual narrative that resonates with viewers.
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="animate-text grid grid-cols-3 gap-6 pt-6">
//               {[
//                 { number: "150+", label: "Events" },
//                 { number: "10K+", label: "Photos" },
//                 { number: "98%", label: "Happy Clients" },
//               ].map((stat, i) => (
//                 <div key={i} className="text-center bg-gray-900/50 border border-gray-700 rounded-xl p-4">
//                   <span className="text-3xl font-bold text-blue-400">{stat.number}</span>
//                   <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Images Grid */}
//           <div ref={imagesRef} className="relative">
//             <div className="grid grid-cols-2 gap-4">
//               {images.map((img, i) => (
//                 <div
//                   key={i}
//                   className={`parallax-img overflow-hidden rounded-2xl ${
//                     i === 0 ? "col-span-2" : ""
//                   }`}
//                 >
//                   <div className="group relative overflow-hidden">
//                     <img
//                       src={img}
//                       alt={`Event ${i + 1}`}
//                       className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Floating elements */}
//             <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
//             <div
//               className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
//               style={{ animationDelay: "1s" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CapturingEnergySection;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CapturingEnergySection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(
        textRef.current?.querySelectorAll(".animate-text"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );

      // Images animation
      const images = imagesRef.current?.querySelectorAll(".parallax-img");
      images?.forEach((img, i) => {
        gsap.fromTo(
          img,
          { y: 120, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-black overflow-hidden"
    >
      {/* BACKGROUND SPOTLIGHT */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/20 blur-[220px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/20 blur-[200px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* TEXT */}
          <div ref={textRef} className="space-y-10">
            <h2 className="animate-text font-['Syne'] text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-white">CAPTURING</span>
              <br />
              <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                ENERGY
              </span>
            </h2>

            <div className="space-y-6 text-white/80">
              <p className="animate-text text-lg leading-relaxed">
                Together we start a project. A collaborative effort to capture
                the vibrant atmosphere of any event, big or small, where every
                moment is filled with energy, creativity, and emotion.
              </p>
              <p className="animate-text text-lg leading-relaxed">
                Through a series of dynamic shots, we work closely to portray
                the unique ambiance from electrifying performances to intimate
                moments shared among attendees.
              </p>
              <p className="animate-text text-lg leading-relaxed">
                By focusing on contrast and texture, we aim to emphasize the raw
                energy and genuine emotion of the event, creating a cohesive
                visual narrative that resonates with viewers.
              </p>
            </div>

            {/* STATS */}
            <div className="animate-text grid grid-cols-3 gap-6 pt-6">
              {[
                { number: "150+", label: "Events" },
                { number: "10K+", label: "Photos" },
                { number: "98%", label: "Happy Clients" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="
                    rounded-2xl p-5 text-center
                    bg-white/5 backdrop-blur-lg
                    border border-white/10
                    shadow-[0_0_30px_rgba(0,180,255,0.15)]
                  "
                >
                  <span className="text-3xl font-bold bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                  <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGES */}
          <div ref={imagesRef} className="relative">
            <div className="grid grid-cols-2 gap-6">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`parallax-img relative rounded-3xl overflow-hidden ${
                    i === 0 ? "col-span-2 h-[340px]" : "h-[260px]"
                  }`}
                >
                  {/* SHINING BORDER */}
                  <span className="absolute inset-0 rounded-3xl border border-white/10" />
                  <span className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 animate-border-shine" />

                  {/* IMAGE */}
                  <div className="group relative h-full overflow-hidden">
                    <img
                      src={img}
                      alt={`Event ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* FLOATING GLOWS */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/30 blur-3xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/30 blur-3xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>

      {/* BORDER SHINE KEYFRAMES */}
      <style jsx>{`
        @keyframes border-shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-border-shine {
          animation: border-shine 2.5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CapturingEnergySection;
