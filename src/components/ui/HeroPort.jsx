// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ArrowDownRight } from "lucide-react";

// const HeroPort = () => {
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const ctaRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ delay: 0.5 });

//       tl.fromTo(
//         titleRef.current?.querySelectorAll(".word"),
//         { y: 120, opacity: 0, rotateX: -80 },
//         {
//           y: 0,
//           opacity: 1,
//           rotateX: 0,
//           duration: 1.2,
//           ease: "power4.out",
//           stagger: 0.1,
//         }
//       )
//         .fromTo(
//           subtitleRef.current,
//           { y: 30, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
//           "-=0.5"
//         )
//         .fromTo(
//           ctaRef.current,
//           { y: 30, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
//           "-=0.4"
//         );

//       // Parallax background
//       gsap.to(".hero-bg", {
//         yPercent: 30,
//         ease: "none",
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   const titleWords = ["WHAT", "I", "CAN", "DO", "FOR", "YOU"];

//   return (
//     <section
//       ref={heroRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Background */}
//       <div className="hero-bg absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background z-10" />
//         <img
//           src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070"
//           alt="Concert"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/10 mix-blend-overlay" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 text-center">
//         <h1
//           ref={titleRef}
//           className="text-5xl md:text-7xl lg:text-8xl font-bold font-['Syne'] leading-tight mb-6"
//           style={{ perspective: "1000px" }}
//         >
//           <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6">
//             {titleWords.map((word, index) => (
//               <span
//                 key={index}
//                 className="word inline-block text-foreground"
//                 style={{ transformStyle: "preserve-3d" }}
//               >
//                 {word}
//               </span>
//             ))}
//           </div>
//         </h1>

//         <p
//           ref={subtitleRef}
//           className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
//         >
//           I capture your unforgettable moments and bring the energy of your
//           event to life through my photography
//         </p>

//         {/* CTA */}
//         <div ref={ctaRef} className="flex justify-center">
//           <button className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg transition">
//             <span className="relative z-10 flex items-center gap-2">
//               Contact
//               <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-foreground/20 group-hover:rotate-45 transition-transform duration-300">
//                 <ArrowDownRight size={18} />
//               </span>
//             </span>
//             <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </button>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
//         <span className="text-sm text-muted-foreground">Scroll</span>
//         <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
//           <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroPort;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDownRight } from "lucide-react";
import { BackgroundImage3 } from "@/assets/assets";
import { Link } from "react-router-dom";


const HeroPort = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      tl.fromTo(
        titleRef.current?.querySelectorAll(".word"),
        { y: 140, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.3,
          ease: "power4.out",
          stagger: 0.12,
        }
      )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        );

      gsap.to(".hero-bg", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const titleWords = ["WHAT", "WE", "CAN", "DO", "FOR", "YOU"];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="hero-bg absolute inset-0 z-0">
        <img
          src={BackgroundImage3}
          alt="Concert"
          className="w-full h-full object-cover"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Spotlight behind text */}
        <div className="absolute inset-0 bg-radial-gradient from-black/10 via-black/60 to-black/90" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1
          ref={titleRef}
          className="mb-8 font-['Syne'] leading-tight"
          style={{ perspective: "1200px" }}
        >
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6">
            {titleWords.map((word, index) => (
              <span
                key={index}
                className="
                  word inline-block
                  text-5xl md:text-7xl lg:text-8xl
                  font-extrabold
                  bg-gradient-to-r from-white via-primary to-accent
                  bg-clip-text text-transparent
                "
                style={{
                  transformStyle: "preserve-3d",
                  textShadow: "0 20px 60px rgba(0,0,0,0.6)",
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </h1>

        {/* SUBTITLE */}
        <p
          ref={subtitleRef}
          className="
            mx-auto mb-12 max-w-2xl
            text-lg md:text-xl
            text-white/90
            backdrop-blur-md
            bg-white/5
            px-6 py-4
            rounded-2xl
            shadow-lg
          "
        >
          We capture your unforgettable moments and bring the energy of your
          event to life through our cinematic videography.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex justify-center">
          <Link to="/contact">
          <button className="group relative overflow-hidden rounded-full px-10 py-3 text-lg font-semibold text-white">
            <span className="relative z-10 flex items-center gap-3">
              Contact
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/20 group-hover:rotate-45 transition-transform duration-300">
                <ArrowDownRight size={18} />
              </span>
            </span>

            {/* Button glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-90 group-hover:opacity-100 transition-opacity" />
          </button>
          </Link>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
 
    </section>
  );
};

export default HeroPort;

