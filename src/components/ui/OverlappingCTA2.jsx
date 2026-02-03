// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// const OverlappingCTA2 = () => {
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);
//   const headingRef = useRef(null);
//   const paraRef = useRef(null);
//   const buttonRef = useRef(null);

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

//     // IMAGE → FULLSCREEN
//     tl.to(imageRef.current, {
//       top: 0,
//       left: 0,
//       width: "100vw",
//       height: "100vh",
//       borderRadius: 0,
//       transform: "none",
//       ease: "power3.inOut",
//     });

//     // HEADING GRADIENT SLIDE
//     tl.fromTo(
//       headingRef.current,
//       { y: 80, opacity: 0 },
//       { y: 0, opacity: 1, ease: "power3.out" },
//       0
//     );

//     // PARAGRAPH FADE + BLUR
//     tl.fromTo(
//       paraRef.current,
//       { y: 40, opacity: 0, filter: "blur(6px)" },
//       { y: 0, opacity: 1, filter: "blur(0px)", ease: "power3.out" },
//       0.1
//     );

//     // BUTTON POP
//     tl.fromTo(
//       buttonRef.current,
//       { scale: 0.8, opacity: 0 },
//       { scale: 1, opacity: 1, ease: "back.out(1.7)" },
//       0.2
//     );

//     // TEXT FADE OUT WHEN IMAGE TAKES OVER
//     tl.to(
//       contentRef.current,
//       {
//         opacity: 0,
//         y: -120,
//         ease: "power2.out",
//       },
//       0.5
//     );
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-screen overflow-hidden bg-[#0b0b0f]"
//     >
//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0f1a] to-black z-0" />

//       <div className="relative container mx-auto h-full px-6 lg:px-10 z-10">
//         <div className="grid lg:grid-cols-2 items-center h-full">

//           {/* TEXT */}
//           <div
//             ref={contentRef}
//             className="relative max-w-xl"
//           >
//             <h2
//               ref={headingRef}
//               className="
//                 text-4xl md:text-5xl font-bold mb-6
//                 bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-emerald-400
//                 bg-clip-text text-transparent
//                 drop-shadow-[0_0_20px_rgba(56,189,248,0.25)]
//               "
//             >
//               Experience the Pulse of Your Event
//             </h2>

//             <p
//               ref={paraRef}
//               className="text-lg text-white/70 leading-relaxed mb-8"
//             >
//               I capture fleeting moments and turn them into timeless stories.
//               Energy, emotion, and atmosphere in every frame.
//             </p>

//             <button
//               ref={buttonRef}
//               className="
//                 px-8 py-4 rounded-full font-medium
//                 bg-gradient-to-r from-cyan-400 to-fuchsia-500
//                 text-black
//                 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
//                 transition-all duration-300
//               "
//             >
//               Get in touch
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* IMAGE */}
//       <div
//         ref={imageRef}
//         className="
//           fixed top-1/2 right-0
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

// export default OverlappingCTA2;
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const OverlappingCTA = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=180%",
        scrub: true,
        pin: true,
      },
    });

    /* =========================
       TEXT APPEARS FIRST
    ========================== */

    tl.fromTo(
      headingRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    tl.fromTo(
      paraRef.current,
      { y: 40, opacity: 0, filter: "blur(6px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
      }
    );

    tl.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );

    /* small cinematic pause */
    tl.to({}, { duration: 0.5 });

    /* =========================
       IMAGE APPEARS (FADE + SCALE)
    ========================== */

    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.85,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    /* small pause before expansion */
    tl.to({}, { duration: 0.3 });

    /* =========================
       IMAGE EXPANDS FULLSCREEN
    ========================== */

    tl.to(imageRef.current, {
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      transform: "none",
      duration: 1.6,
      ease: "power3.inOut",
    });

    /* =========================
       TEXT EXITS
    ========================== */

    tl.to(contentRef.current, {
      opacity: 0,
      y: -120,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#0b0b0f]"
    >
      {/* DARK BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0f1a] to-black" />

      <div className="relative container mx-auto h-full px-6 lg:px-10 z-10">
        <div className="grid lg:grid-cols-2 items-center h-full">

          {/* TEXT CONTENT */}
          <div ref={contentRef} className="relative max-w-xl">
            <h2
              ref={headingRef}
              className="
                text-4xl md:text-5xl font-bold mb-6
                bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-emerald-400
                bg-clip-text text-transparent
              "
            >
              Experience the Pulse of Your Event
            </h2>

            <p
              ref={paraRef}
              className="text-lg text-white/70 leading-relaxed mb-8"
            >
              I capture fleeting moments and turn them into timeless stories.
              Energy, emotion, and atmosphere in every frame.
            </p>

            <button
              ref={buttonRef}
              className="
                px-8 py-4 rounded-full font-medium
                bg-gradient-to-r from-cyan-400 to-fuchsia-500
                text-black
                hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                transition-all duration-300
              "
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div
        ref={imageRef}
        className="
          fixed top-1/2 right-0
          w-[45vw] h-[70vh]
          rounded-2xl overflow-hidden
          z-20
          opacity-0
        "
        style={{ transform: "translateY(-50%) scale(1)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1800"
          alt="Event"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default OverlappingCTA;
