// import React from 'react'
// import { Image1 } from '@/assets/assets'

// const Layout1 = () => {
//   return (
//     <div>
//       <section className="bg-black text-white">
//   <div className="mx-auto max-w-7xl px-6 py-24">
//     <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

//       {/* LEFT – Text */}
//       <div className="space-y-8">
//         <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight">
//           Experience the <br />
//           Pulse of Your <br />
//           Event
//         </h2>

//         <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
//           We try to capture the essence of every moment, <br /> transforming fleeting
//           experiences into lasting memories <br />filled with nostalgia. Through our
//           perspective, we try to bring <br />the vibrant energy of festivals and events
//           to life. In a way that lets people relive those special moments again
//           and again.
//         </p>
//       </div>

//       {/* RIGHT – Image */}
//       <div className="relative">
//         <img
//           src={Image1}
//           alt="Event"
//           className="w-full h-full object-cover rounded-3xl"
//         />

//         {/* Optional overlay for contrast */}
//         <div className="absolute inset-0 bg-black/10 rounded-lg" />
//       </div>

//     </div>
//   </div>
// </section>

//     </div>
//   )
// }

// export default Layout1;

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Image1 } from "@/assets/assets";

// gsap.registerPlugin(ScrollTrigger);

// const Layout1 = () => {
//   const sectionRef = useRef(null);
//   const textRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // TEXT ANIMATION
//       gsap.fromTo(
//         textRef.current.querySelectorAll(".animate-text"),
//         { y: 60, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//           stagger: 0.2,
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 75%",
//           },
//         }
//       );

//       // IMAGE ANIMATION
//       gsap.fromTo(
//         imageRef.current,
//         { scale: 0.9, y: 40, opacity: 0 },
//         {
//           scale: 1,
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 75%",
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-black text-white py-28 overflow-hidden"
//     >
//       {/* SOFT GLOW BACKGROUND */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-blue-500/20 blur-[200px]" />
//         <div className="absolute bottom-1/3 right-1/4 w-[360px] h-[360px] bg-purple-500/20 blur-[180px]" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6">
//         {/* SHINING BORDER WRAPPER */}
//         <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16 overflow-hidden">

//           {/* SHINING EDGES */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
//           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

//           <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

//             {/* LEFT – TEXT */}
//             <div ref={textRef} className="space-y-10">
//               <h2 className="animate-text text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight">
//                 <span className="block">Experience the</span>
//                 <span className="block bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   Pulse of Your
//                 </span>
//                 <span className="block">Event</span>
//               </h2>

//               <p className="animate-text text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
//                 We try to capture the essence of every moment, <br />
//                 transforming fleeting experiences into lasting memories <br />
//                 filled with nostalgia. Through our perspective, we try to bring <br />
//                 the vibrant energy of festivals and events to life. In a way that
//                 lets people relive those special moments again and again.
//               </p>
//             </div>

//             {/* RIGHT – IMAGE */}
//             <div ref={imageRef} className="relative group">
//               <div className="relative overflow-hidden rounded-3xl">
//                 <img
//                   src={Image1}
//                   alt="Event"
//                   className="
//                     w-full h-full object-cover
//                     transition-transform duration-700
//                     group-hover:scale-110
//                   "
//                 />

//                 {/* CINEMATIC OVERLAY */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
//               </div>

//               {/* IMAGE SHINE */}
//               <div className="absolute inset-0 rounded-3xl ring-1 ring-blue-400/30 pointer-events-none" />
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // export default Layout1;

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Image1 } from "@/assets/assets";

// gsap.registerPlugin(ScrollTrigger);

// const Layout1 = () => {
//   const sectionRef = useRef(null);
//   const textRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       /* ================= TEXT SCROLL PARALLAX ================= */
//       gsap.fromTo(
//         textRef.current,
//         { y: 80, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 85%",
//             end: "top 30%",
//             scrub: true,
//           },
//         }
//       );

//       /* ================= IMAGE SCROLL PARALLAX ================= */
//       gsap.fromTo(
//         imageRef.current,
//         { y: 120, scale: 0.92 },
//         {
//           y: 0,
//           scale: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 90%",
//             end: "top 25%",
//             scrub: true,
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-black text-white py-28 overflow-hidden"
//     >
//       {/* BACKGROUND GLOW */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-blue-500/20 blur-[200px]" />
//         <div className="absolute bottom-1/3 right-1/4 w-[360px] h-[360px] bg-purple-500/20 blur-[180px]" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6">

//         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

//           {/* LEFT – TEXT */}
//           <div ref={textRef} className="space-y-10">
//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight">
//               <span className="block">Experience the</span>
//               <span className="block bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Pulse of Your
//               </span>
//               <span className="block">Event</span>
//             </h2>

//             <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
//               We try to capture the essence of every moment, <br />
//               transforming fleeting experiences into lasting memories <br />
//               filled with nostalgia. Through our perspective, we try to bring <br />
//               the vibrant energy of festivals and events to life. In a way that
//               lets people relive those special moments again and again.
//             </p>
//           </div>

//           {/* RIGHT – IMAGE */}
//           <div ref={imageRef} className="relative group">
//             <div className="relative overflow-hidden rounded-3xl">
//               <img
//                 src={Image1}
//                 alt="Event"
//                 className="
//                   w-full h-full object-cover
//                   transition-transform duration-700
//                   group-hover:scale-110
//                 "
//               />

//               {/* CINEMATIC OVERLAY */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
//             </div>

//             {/* IMAGE BLUE SHINE */}
//             <div className="absolute inset-0 rounded-3xl ring-1 ring-blue-400/30 pointer-events-none" />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Layout1;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Image1 } from "@/assets/assets";

gsap.registerPlugin(ScrollTrigger);

const Layout1 = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ================= MASTER TIMELINE ================= */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });

      /* ================= TEXT STAGGER ================= */
      tl.from(
        textRef.current.children,
        {
          y: 80,
          opacity: 0,
          stagger: 0.15,
          ease: "power4.out",
        },
        0
      );

      /* ================= IMAGE FLOAT + SCALE ================= */
      tl.fromTo(
        imageRef.current,
        { y: 140, scale: 0.9 },
        {
          y: 0,
          scale: 1,
          ease: "power3.out",
        },
        0
      );

      /* ================= BACKGROUND GLOW PULSE ================= */
      gsap.to(glowRef.current.children, {
        opacity: 0.7,
        scale: 1.2,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* ================= IMAGE FLOAT LOOP ================= */
      gsap.to(imageRef.current, {
        y: "-=20",
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ================= 3D TILT EFFECT ================= */
  const handleMouseMove = (e) => {
    const { width, height, left, top } =
      imageRef.current.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = gsap.utils.mapRange(0, height, 8, -8, y);
    const rotateY = gsap.utils.mapRange(0, width, -8, 8, x);

    gsap.to(imageRef.current, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.4,
    });
  };

  const resetTilt = () => {
    gsap.to(imageRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-28 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-blue-500/30 blur-[220px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[360px] h-[360px] bg-purple-500/30 blur-[200px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* LEFT – TEXT */}
          <div ref={textRef} className="space-y-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight">
              <span className="block">Experience the</span>
              <span className="block bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pulse of Your
              </span>
              <span className="block">Event</span>
            </h2>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
              We try to capture the essence of every moment,
              transforming fleeting experiences into lasting memories
              filled with nostalgia. Through our perspective, we bring
              the vibrant energy of festivals and events to life.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            className="relative group will-change-transform"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={Image1}
                alt="Event"
                className="
                  w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            <div className="absolute inset-0 rounded-3xl ring-1 ring-blue-400/40 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Layout1;
