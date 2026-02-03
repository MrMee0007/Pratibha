// 

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// const OverlappingCTA = () => {
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const section = sectionRef.current;
//     const image = imageRef.current;
//     const content = contentRef.current;

//     if (!section || !image || !content) return;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "+=120%",
//         scrub: true,
//         pin: true, // ⬅️ locks scroll until animation completes
//       },
//     });

//     // IMAGE TAKEOVER
//     tl.to(image, {
//       width: "100vw",
//       height: "100vh",
//       x: 0,
//       y: 0,
//       borderRadius: 0,
//       ease: "power2.out",
//     });

//     // TEXT EXIT ANIMATION
//     tl.to(
//       content,
//       {
//         opacity: 0,
//         y: -80,
//         ease: "power2.out",
//       },
//       0
//     );

//   }, []);

//   return (
//     <section ref={sectionRef} className="relative h-screen overflow-hidden bg-black">
//       <div className="container mx-auto h-full px-6 lg:px-10">
//         <div className="relative grid lg:grid-cols-2 items-center h-full">

//           {/* LEFT TEXT */}
//           <div
//             ref={contentRef}
//             className="relative z-10 max-w-xl text-white"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//               Experience the Pulse of Your Event
//             </h2>

//             <p className="text-lg text-white/80 leading-relaxed mb-8">
//               I capture fleeting moments and turn them into timeless stories.
//               Every frame holds emotion, energy, and memory.
//             </p>

//             <button className="px-8 py-4 rounded-full bg-white text-black font-medium">
//               Get in touch
//             </button>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div
//             ref={imageRef}
//             className="absolute right-0 top-1/2 -translate-y-1/2 
//                        w-[45%] h-[70%] rounded-2xl overflow-hidden z-20"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600"
//               alt="Event"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/20" />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default OverlappingCTA;


// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// const OverlappingCTA = () => {
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const section = sectionRef.current;
//     const image = imageRef.current;
//     const content = contentRef.current;

//     if (!section || !image || !content) return;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "+=120%",
//         scrub: true,
//         pin: true, // 🔒 lock scroll
//       },
//     });

//     // IMAGE → FULLSCREEN BACKGROUND
//     tl.to(image, {
//       top: 0,
//       left: 0,
//       width: "100vw",
//       height: "100vh",
//       borderRadius: 0,
//       ease: "power2.inOut",
//     });

//     // TEXT SCROLL ANIMATION (covered by image)
//     tl.to(
//       content,
//       {
//         opacity: 0,
//         y: -120,
//         ease: "power2.out",
//       },
//       0
//     );

//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-screen overflow-hidden bg-black"
//     >
//       <div className="container mx-auto h-full px-6 lg:px-10">
//         <div className="grid lg:grid-cols-2 items-center h-full">

//           {/* TEXT */}
//           <div
//             ref={contentRef}
//             className="relative z-10 max-w-xl text-white"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Experience the Pulse of Your Event
//             </h2>

//             <p className="text-lg text-white/80 leading-relaxed mb-8">
//               Every moment is captured with emotion and intention,
//               turning energy into unforgettable stories.
//             </p>

//             <button className="px-8 py-4 rounded-full bg-white text-black font-medium">
//               Get in touch
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* IMAGE (DETACHED FROM LAYOUT) */}
//       <div
//         ref={imageRef}
//         className="
//           fixed 
//           top-1/2 right-0 
//           -translate-y-1/2
//           w-[45vw] h-[70vh]
//           rounded-2xl overflow-hidden
//           z-20
//         "
//       >
//         <img
//           src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600"
//           alt="Event"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </section>
//   );
// };

// export default OverlappingCTA;


// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// const OverlappingCTA = () => {
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "+=120%",
//         scrub: true,
//         pin: true,
//       },
//     });

//     // IMAGE → FULLSCREEN BACKGROUND
//     tl.to(imageRef.current, {
//       top: 0,
//       left: 0,
//       right: "auto",
//       bottom: "auto",
//       width: "100vw",
//       height: "100vh",
//       borderRadius: 0,
//       transform: "none", // ❗ removes translateY(-50%)
//       ease: "power2.inOut",
//     });

//     // TEXT SCROLL ANIMATION
//     tl.to(
//       contentRef.current,
//       {
//         opacity: 0,
//         y: -120,
//         ease: "power2.out",
//       },
//       0
//     );
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-screen overflow-hidden"
//     >
//       <div className="container mx-auto h-full px-6 lg:px-10">
//         <div className="grid lg:grid-cols-2 items-center h-full">

//           {/* TEXT */}
//           <div
//             ref={contentRef}
//             className="relative z-10 max-w-xl text-white"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Experience the Pulse of Your Event
//             </h2>

//             <p className="text-lg text-white/80 leading-relaxed mb-8">
//               I capture fleeting moments and turn them into timeless stories.
//               Energy, emotion, and atmosphere in every frame.
//             </p>

//             <button className="px-8 py-4 rounded-full bg-white text-black font-medium">
//               Get in touch
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* IMAGE (SIDE → FULLSCREEN BACKGROUND) */}
//       <div
//         ref={imageRef}
//         className="
//           fixed
//           top-1/2 right-0
//           w-[45vw] h-[70vh]
//           rounded-2xl overflow-hidden
//           z-20
//         "
//         style={{ transform: "translateY(-50%)" }}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1800"
//           alt="Event"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </section>
//   );
// };

// export default OverlappingCTA;


// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// const OverlappingCTA = () => {
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "+=120%",
//         scrub: true,
//         pin: true,
//       },
//     });

//     // IMAGE → FULLSCREEN BACKGROUND
//     tl.to(imageRef.current, {
//       top: 0,
//       left: 0,
//       right: "auto",
//       bottom: "auto",
//       width: "100vw",
//       height: "100vh",
//       borderRadius: 0,
//       transform: "none",
//       ease: "power2.inOut",
//     });

//     // TEXT EXIT
//     tl.to(
//       contentRef.current,
//       {
//         opacity: 0,
//         y: -120,
//         ease: "power2.out",
//       },
//       0
//     );
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-screen overflow-hidden bg-black"
//     >
//       <div className="container mx-auto h-full px-6 lg:px-10">
//         <div className="grid lg:grid-cols-2 items-center h-full">

//           {/* TEXT */}
//           <div
//             ref={contentRef}
//             className="relative z-10 max-w-xl"
//           >
//             <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
//               <span className="block text-white">Turning Moments Into</span>
//               <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Cinematic Memories
//               </span>
//             </h2>

//             <p className="text-lg leading-relaxed mb-8 text-white/80">
//               Every frame carries emotion, rhythm, and story.
//               We don’t just record events — we preserve the
//               atmosphere, the energy, and the feeling that
//               makes them unforgettable.
//             </p>

//             <button className="
//               px-8 py-4 rounded-full font-semibold
//               bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
//               text-black
//               hover:scale-105 transition-transform
//             ">
//               Let’s Create Something Iconic
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* IMAGE (SIDE → FULLSCREEN BACKGROUND) */}
//       <div
//         ref={imageRef}
//         className="
//           fixed
//           top-1/2 right-0
//           w-[45vw] h-[70vh]
//           rounded-2xl overflow-hidden
//           z-20
//         "
//         style={{ transform: "translateY(-50%)" }}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1800"
//           alt="Event"
//           className="w-full h-full object-cover"
//         />

//         {/* DARK CINEMATIC OVERLAY */}
//         <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent" />
//       </div>
//     </section>
//   );
// };

// export default OverlappingCTA;


import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Image16 } from "@/assets/assets";


const OverlappingCTA = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Disable heavy pin animation on small screens
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // IMAGE → FULLSCREEN
      tl.to(imageRef.current, {
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        transform: "none",
        ease: "power2.inOut",
      });

      // TEXT EXIT
      tl.to(
        contentRef.current,
        {
          opacity: 0,
          y: -120,
          ease: "power2.out",
        },
        0
      );
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <div className="container mx-auto px-6 lg:px-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* IMAGE — MOBILE FIRST */}
          <div className="relative lg:hidden w-full h-[45vh] rounded-2xl overflow-hidden">
            <img
              src={ Image16 }
              alt="Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* TEXT */}
          <div
            ref={contentRef}
            className="relative z-10 max-w-xl text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              <span className="block text-white">Turning Moments Into</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cinematic Memories
              </span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed mb-8 text-white/80">
              Every frame carries emotion, rhythm, and story.
              We don’t just record events — we preserve the
              atmosphere, the energy, and the feeling that
              makes them unforgettable.
            </p>

            <button
              className="
                px-7 py-3 sm:px-8 sm:py-4
                rounded-full font-semibold
                bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
                text-black
                hover:scale-105 transition-transform
              "
            >
              Let’s Create Something Iconic
            </button>
          </div>

        </div>
      </div>

      {/* DESKTOP FLOATING IMAGE */}
      <div
        ref={imageRef}
        className="
          hidden lg:block
          fixed
          top-1/2 right-0
          w-[42vw] h-[65vh]
          rounded-2xl overflow-hidden
          z-20
        "
        style={{ transform: "translateY(-50%)" }}
      >
        <img
          src={Image16}
          alt="Event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent" />
      </div>
    </section>
  );
};

export default OverlappingCTA;
