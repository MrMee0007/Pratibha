// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowUpRight, ChevronDown } from "lucide-react";


// import heroImage from "@/assets/Bg5.jpeg";
// import gallery1 from "@/assets/Photo1.jpeg";
// import gallery2 from "@/assets/Photo2.jpeg";
// import gallery3 from "@/assets/Photo3.jpeg";
// import gallery4 from "@/assets/Photo4.jpeg";
// import gallery5 from "@/assets/Photo5.jpeg";
// import gallery6 from "@/assets/Photo6.jpeg";
// import gallery7 from "@/assets/Photo7.jpeg";
// import gallery8 from "@/assets/Photo8.jpeg";

// gsap.registerPlugin(ScrollTrigger);

// // Scatter positions
// const scatterImages = [
//   { src: gallery1, start: { x: -80, y: -60, rotate: -8 }, end: { x: -350, y: -250, rotate: -35 } },
//   { src: gallery2, start: { x: 100, y: -80, rotate: 5 }, end: { x: 400, y: -200, rotate: 25 } },
//   { src: gallery3, start: { x: -120, y: 40, rotate: -5 }, end: { x: -380, y: 150, rotate: -20 } },
//   { src: gallery4, start: { x: 140, y: 60, rotate: 10 }, end: { x: 420, y: 180, rotate: 40 } },
//   { src: gallery5, start: { x: -40, y: -100, rotate: 3 }, end: { x: -200, y: -320, rotate: -45 } },
//   { src: gallery6, start: { x: 60, y: 100, rotate: -6 }, end: { x: 280, y: 300, rotate: 30 } },
//   { src: gallery7, start: { x: -160, y: 10, rotate: 8 }, end: { x: -480, y: 40, rotate: -25 } },
//   { src: gallery8, start: { x: 180, y: -20, rotate: -4 }, end: { x: 500, y: -80, rotate: 35 } },
// ];

// const HeroTeam = () => {
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const ctaRef = useRef(null);
//   const scrollIndicatorRef = useRef(null);
//   const imageRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       imageRefs.current.forEach((img, index) => {
//         if (!img) return;
//         const start = scatterImages[index].start;
//         gsap.set(img, {
//           x: start.x,
//           y: start.y,
//           rotation: start.rotate,
//           scale: 1,
//         });
//       });

//       gsap.timeline({ delay: 0.3 })
//         .fromTo(
//           titleRef.current,
//           { y: 100, opacity: 0 },
//           { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
//         )
//         .fromTo(
//           subtitleRef.current,
//           { y: 50, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
//           "-=0.6"
//         )
//         .fromTo(
//           ctaRef.current,
//           { y: 30, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
//           "-=0.4"
//         )
//         .fromTo(
//           scrollIndicatorRef.current,
//           { opacity: 0 },
//           { opacity: 1, duration: 0.6 },
//           "-=0.2"
//         )
//         .fromTo(
//           imageRefs.current.filter(Boolean),
//           { opacity: 0, scale: 0.8 },
//           { opacity: 1, scale: 1, stagger: 0.08, duration: 0.6 }
//         );

//       imageRefs.current.forEach((img, i) => {
//         if (!img) return;
//         const { start, end } = scatterImages[i];

//         gsap.fromTo(
//           img,
//           start,
//           {
//             ...end,
//             scale: 1.15,
//             ease: "none",
//             scrollTrigger: {
//               trigger: heroRef.current,
//               start: "top top",
//               end: "bottom top",
//               scrub: 1.5,
//             },
//           }
//         );

//         gsap.to(img, {
//           opacity: 0,
//           scrollTrigger: {
//             trigger: heroRef.current,
//             start: "50% top",
//             end: "100% top",
//             scrub: 1,
//           },
//         });
//       });

//       gsap.to(scrollIndicatorRef.current, {
//         y: 10,
//         repeat: -1,
//         yoyo: true,
//         duration: 1.5,
//         ease: "power1.inOut",
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0">
//         <img src={heroImage} alt="Festival vibes" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 fence-pattern opacity-40" />
//         <div className="absolute inset-0 hero-gradient" />
//       </div>

//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
//         {scatterImages.map((image, index) => (
//           <div
//             key={index}
//             ref={(el) => (imageRefs.current[index] = el)}
//             className="absolute w-32 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl opacity-0"
//           >
//             <img src={image.src} alt="" className="w-full h-full object-cover" />
//           </div>
//         ))}
//       </div>

//       <div className="relative z-20 text-center">
//         <h1 ref={titleRef} className="text-6xl font-bold mb-6">
//           FESTIVAL VIBES
//           <span className="block text-gradient">CAPTURED</span>
//         </h1>

//         <p ref={subtitleRef} className="mb-8">
//           Experience the energy and emotion of festivals through my lens
//         </p>

//         <div ref={ctaRef} className="flex justify-center gap-6">
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition"
//           >
//             Get in touch <ArrowUpRight size={18} />
//           </a>

//           <a
//             href="#portfolio"
//             className="inline-flex items-center px-8 py-4 rounded-full border border-white/40 text-white hover:bg-white/10 transition"
//           >
//             View Portfolio
//           </a>
//         </div>
//       </div>

//       <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2">
//         <ChevronDown />
//       </div>
//     </section>
//   );
// };

// export default HeroTeam;


import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import heroImage from "@/assets/Bg0.jpeg";
import gallery1 from "@/assets/Photo1.jpeg";
import gallery2 from "@/assets/Photo2.jpeg";
import gallery3 from "@/assets/Photo3.jpeg";
import gallery4 from "@/assets/Photo4.jpeg";
import gallery5 from "@/assets/Photo5.jpeg";
import gallery6 from "@/assets/Photo6.jpeg";
import gallery7 from "@/assets/Photo7.jpeg";
import gallery8 from "@/assets/Photo8.jpeg";

gsap.registerPlugin(ScrollTrigger);

// Scatter positions

// const scatterImages = [
//   { src: gallery1, start: { x: -80, y: -60, r: -8 }, end: { x: -350, y: -250, r: -35 } },
//   { src: gallery2, start: { x: 100, y: -80, r: 5 }, end: { x: 400, y: -200, r: 25 } },
//   { src: gallery3, start: { x: -120, y: 40, r: -5 }, end: { x: -380, y: 150, r: -20 } },
//   { src: gallery4, start: { x: 140, y: 60, r: 10 }, end: { x: 420, y: 180, r: 40 } },
//   { src: gallery5, start: { x: -40, y: -100, r: 3 }, end: { x: -200, y: -320, r: -45 } },
//   { src: gallery6, start: { x: 60, y: 100, r: -6 }, end: { x: 280, y: 300, r: 30 } },
//   { src: gallery7, start: { x: -160, y: 10, r: 8 }, end: { x: -480, y: 40, r: -25 } },
//   { src: gallery8, start: { x: 180, y: -20, r: -4 }, end: { x: 500, y: -80, r: 35 } },
// ];

// const HeroTeam = () => {
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const ctaRef = useRef(null);
//   const scrollIndicatorRef = useRef(null);
//   const imageRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       imageRefs.current.forEach((img, i) => {
//         if (!img) return;
//         const { start } = scatterImages[i];

//         gsap.set(img, {
//           x: start.x,
//           y: start.y,
//           rotate: start.r,
//           opacity: 1,
//           willChange: "transform, opacity",
//         });
//       });

//       // Intro
//       gsap.timeline({ delay: 0.3 })
//         .from(titleRef.current, { y: 100, opacity: 0, duration: 1.2 })
//         .from(subtitleRef.current, { y: 50, opacity: 0, duration: 0.8 }, "-=0.6")
//         .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
//         .from(scrollIndicatorRef.current, { opacity: 0, duration: 0.6 }, "-=0.2");

//       // Scroll animations (REPEATABLE)
//       imageRefs.current.forEach((img, i) => {
//         if (!img) return;
//         const { start, end } = scatterImages[i];

//         // Position + rotation
//         gsap.fromTo(
//           img,
//           { x: start.x, y: start.y, rotate: start.r },
//           {
//             x: end.x,
//             y: end.y,
//             rotate: end.r,
//             scale: 1.15,
//             ease: "none",
//             scrollTrigger: {
//               trigger: heroRef.current,
//               start: "top top",
//               end: "bottom top",
//               scrub: 1.5,
//             },
//           }
//         );

//         // Opacity (reversible)
//         gsap.fromTo(
//           img,
//           { opacity: 1 },
//           {
//             opacity: 0,
//             scrollTrigger: {
//               trigger: heroRef.current,
//               start: "55% top",
//               end: "100% top",
//               scrub: true,
//             },
//           }
//         );
//       });

//       // Scroll indicator float
//       gsap.to(scrollIndicatorRef.current, {
//         y: 10,
//         repeat: -1,
//         yoyo: true,
//         duration: 1.5,
//         ease: "power1.inOut",
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={heroRef} className="relative h-screen overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img src={heroImage} className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* Images */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
//         {scatterImages.map((img, i) => (
//           <div
//             key={i}
//             ref={(el) => (imageRefs.current[i] = el)}
//             className="absolute w-40 sm:w-48 md:w-56 lg:w-64 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
//           >
//             <img src={img.src} className="w-full h-full object-cover" />
//           </div>
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
//         <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-6">
//           FESTIVAL VIBES
//           <span className="block text-gradient">CAPTURED</span>
//         </h1>
//         <p ref={subtitleRef} className="mb-8 text-white/80">
//           Experience the energy and emotion of festivals through my lens
//         </p>
//         <div ref={ctaRef} className="flex gap-6">
//           <a className="px-8 py-4 bg-white text-black rounded-full">Get in touch</a>
//           <a className="px-8 py-4 border border-white/40 rounded-full">View Portfolio</a>
//         </div>
//       </div>

//       <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70">
//         <ChevronDown />
//       </div>
//     </section>
//   );
// };

// const scatterImages = [
//   { src: gallery1, end: { x: -420, y: -260, r: -30 } },
//   { src: gallery2, end: { x: 420, y: -240, r: 25 } },
//   { src: gallery3, end: { x: -380, y: 160, r: -20 } },
//   { src: gallery4, end: { x: 420, y: 200, r: 35 } },
//   { src: gallery5, end: { x: -220, y: -340, r: -40 } },
//   { src: gallery6, end: { x: 260, y: 340, r: 30 } },
//   { src: gallery7, end: { x: -520, y: 60, r: -25 } },
//   { src: gallery8, end: { x: 520, y: -80, r: 40 } },
// ];

// const HeroTeam = () => {
//   const heroRef = useRef(null);
//   const imageRefs = useRef([]);
//   const scrollIndicatorRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 🔹 STACK SETUP
//       imageRefs.current.forEach((img, i) => {
//         if (!img) return;

//         gsap.set(img, {
//           x: 0,
//           y: 0,
//           rotate: (i - 4) * 2,          // subtle angle difference
//           scale: 1 + i * 0.04,          // stacked depth
//           zIndex: scatterImages.length - i,
//           opacity: 1,
//           willChange: "transform, opacity",
//         });
//       });

//       // 🔹 SCROLL: STACK ➜ SCATTER
//       imageRefs.current.forEach((img, i) => {
//         if (!img) return;
//         const { end } = scatterImages[i];

//         // Position + rotation
//         gsap.to(img, {
//           x: end.x,
//           y: end.y,
//           rotate: end.r,
//           scale: 1.15,
//           ease: "none",
//           scrollTrigger: {
//             trigger: heroRef.current,
//             start: "top top",
//             end: "bottom top",
//             scrub: 1.5,
//           },
//         });

//         // Opacity (reversible)
//         gsap.fromTo(
//           img,
//           { opacity: 1 },
//           {
//             opacity: 0,
//             scrollTrigger: {
//               trigger: heroRef.current,
//               start: "55% top",
//               end: "100% top",
//               scrub: true,
//             },
//           }
//         );
//       });

//       // Scroll indicator float
//       gsap.to(scrollIndicatorRef.current, {
//         y: 12,
//         repeat: -1,
//         yoyo: true,
//         duration: 1.6,
//         ease: "power1.inOut",
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={heroRef} className="relative h-screen overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img src={heroImage} className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-black/65" />
//       </div>

//       {/* STACKED IMAGES */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
//         {scatterImages.map((img, i) => (
//           <div
//             key={i}
//             ref={(el) => (imageRefs.current[i] = el)}
//             className="
//               absolute
//               w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96
//               aspect-[4/3]
//               rounded-2xl
//               overflow-hidden
//               shadow-2xl
//             "
//           >
//             <img
//               src={img.src}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* TEXT CONTENT */}
//       <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
//         <h1 className="text-6xl md:text-8xl font-bold mb-6">
//           FESTIVAL VIBES
//           <span className="block text-white/70">CAPTURED</span>
//         </h1>
//         <p className="mb-8 text-white/80 max-w-xl">
//           Experience the raw energy and emotion of festivals through my lens
//         </p>
//       </div>

//       {/* Scroll Indicator */}
//       <div
//         ref={scrollIndicatorRef}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 z-20"
//       >
//         <ChevronDown size={28} />
//       </div>
//     </section>
//   );
// };

const images = [
  { src: gallery1, end: { x: -420, y: -260, r: -30 } },
  { src: gallery2, end: { x: 420, y: -240, r: 25 } },
  { src: gallery3, end: { x: -380, y: 160, r: -20 } },
  { src: gallery4, end: { x: 420, y: 200, r: 35 } },
//   { src: gallery5, end: { x: -220, y: -340, r: -40 } },
//   { src: gallery6, end: { x: 260, y: 340, r: 30 } },
//   { src: gallery7, end: { x: -520, y: 60, r: -25 } },
//   { src: gallery8, end: { x: 520, y: -80, r: 40 } },
];

const HeroTeam = () => {
//   const heroRef = useRef(null);
//   const imageRefs = useRef([]);
//   const indicatorRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 🔹 INITIAL STACK
//       imageRefs.current.forEach((img, i) => {
//         gsap.set(img, {
//           x: 0,
//           y: 0,
//           rotate: (i - 4) * 2,
//           scale: 1 + i * 0.04,
//           zIndex: images.length - i,
//         //   opacity: 1,
//         });
//       });

//       // 🔹 MAIN TIMELINE (PINNED)
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: "top top",
//           end: "+=700",          // ⏳ controls delay before next section
//           scrub: 0.8,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       // 🔹 STACK ➜ SCATTER
//       imageRefs.current.forEach((img, i) => {
//         const { end } = images[i];

//         tl.to(
//           img,
//           {
//             x: end.x,
//             y: end.y,
//             rotate: end.r,
//             scale: 1.15,
//             opacity:0,
//             ease: "none",
//           },
//           0
//         );

//         tl.to(
//           img,
//           { opacity: 0 },
//           0.6
//         );
//       });

//       // 🔹 SCROLL INDICATOR FLOAT
//       gsap.to(indicatorRef.current, {
//         y: 12,
//         repeat: -1,
//         yoyo: true,
//         duration: 0.8,
//         ease: "power1.inOut",
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={heroRef} className="relative h-screen overflow-hidden">
//       {/* BACKGROUND */}
//       <div className="absolute inset-0">
//         <img src={heroImage} className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-black/70" />
//       </div>

//       {/* STACKED IMAGES */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
//         {images.map((img, i) => (
//           <div
//             key={i}
//             ref={(el) => (imageRefs.current[i] = el)}
//             className="
//               absolute
//               w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96
//               aspect-[4/3]
//               rounded-2xl
//               overflow-hidden
//               shadow-2xl
//             "
//           >
//             <img src={img.src} className="w-full h-full object-cover" />
//           </div>
//         ))}
//       </div>

//       {/* TEXT */}
//       <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
//         <h1 className="text-6xl md:text-8xl font-bold mb-6">
//           FESTIVAL VIBES
//           <span className="block text-white/70">CAPTURED</span>
//         </h1>
//         <p className="text-white/80 max-w-xl">
//           Experience the raw energy and emotion of festivals through my lens
//         </p>
//       </div>

//       {/* SCROLL INDICATOR */}
//       <div
//         ref={indicatorRef}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 z-20"
//       >
//         <ChevronDown size={28} />
//       </div>
//     </section>
//   );
// };

  const heroRef = useRef(null);
  const imageRefs = useRef([]);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // INITIAL STACK
      imageRefs.current.forEach((img, i) => {
        gsap.set(img, {
          x: 0,
          y: 0,
          rotate: (i - 4) * 2,
          scale: 1 + i * 0.04,
          zIndex: images.length - i,
        });
      });

      // PIN + SCATTER
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=900", // short scroll, releases fast
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      imageRefs.current.forEach((img, i) => {
        const { end } = images[i];

        tl.to(
          img,
          {
            x: end.x,
            y: end.y,
            rotate: end.r,
            scale: 1.15,
            ease: "none",
          },
          0
        );
      });

      // FLOATING SCROLL INDICATOR
      gsap.to(indicatorRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[100svh] md:min-h-screen overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img src={heroImage} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* SCATTER IMAGES */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        {images.map((img, i) => (
          <div
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
            className="
              absolute
              w-64 sm:w-72 md:w-80 lg:w-96
              aspect-[4/3]
              rounded-2xl
              overflow-hidden
              shadow-2xl
            "
          >
            <img src={img.src} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* TEXT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
          FESTIVAL VIBES
          <span className="block text-white/70">CAPTURED</span>
        </h1>
        <p className="text-white/80 max-w-xl">
          Experience the raw energy and emotion of festivals through my lens
        </p>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        ref={indicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 z-20"
      >
        <ChevronDown size={28} />
      </div>
    </section>
  );
};

export default HeroTeam;

