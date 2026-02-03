// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// const images = [
//   "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
//   "https://images.unsplash.com/photo-1501281668745-f7f57925c138?w=800",
//   "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
//   "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800",
//   "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800",
//   "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",
//   "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
//   "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
//   "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800",
// ];

// const ParallaxHero = () => {
//   const containerRef = useRef(null);
//   const gridRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const container = containerRef.current;
//     const grid = gridRef.current;
//     const content = contentRef.current;

//     if (!container || !grid || !content) return;

//     // Initial zoomed-in state
//     gsap.set(grid, {
//       scale: 3,
//       transformOrigin: "center center",
//     });

//     gsap.set(content, {
//       opacity: 1,
//       y: 0,
//     });

//     // Scroll animation
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: "bottom top",
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     // Zoom out grid
//     tl.to(grid, {
//       scale: 1,
//       duration: 1,
//       ease: "power2.out",
//     });

//     // Fade out text
//     tl.to(
//       content,
//       {
//         opacity: 0,
//         y: -50,
//         duration: 0.5,
//       },
//       0
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen w-full overflow-hidden bg-black"
//     >
//       {/* Image Grid */}
//       <div
//         ref={gridRef}
//         className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-6"
//       >
//         {images.map((src, index) => (
//           <div key={index} className="relative overflow-hidden">
//             <img
//               src={src}
//               alt={`Gallery image ${index + 1}`}
//               className="h-full w-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/30" />
//           </div>
//         ))}
//       </div>
      
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Hero Content */}
//       <div
//         ref={contentRef}
//         className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
//       >
        
//         <h1 className="text-white font-black uppercase text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight md:leading-[1.1] tracking-tight">
//           Capturing The
//           <br />
//           Pulse of Every
//           <br />
//           Event
//         </h1>

//         <p className="text-white font-normal text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
//       Welcome to Pratibha, where every video tells a story of energy and emotion. <br />
//       Join our team as we explore the vibrant world of festivals, events, and life’s <br />
//       special moments through our lens. Scroll down to experience the moments <br />
//       we’ve captured—full of color, connection, emotion, and celebration.
//     </p>
//       </div>

//       {/* Bottom Gradient */}

//     </section>
//   );
// };

// export default ParallaxHero;


// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// const images = [
//   "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
//   "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",
//   "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
//   "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800",
//   "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800",
//   "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",
//   "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
//   "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
//   "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800",
// ];

// const ParallaxHero = () => {
//   const containerRef = useRef(null);
//   const gridRef = useRef(null);
//   const contentRef = useRef(null);
//   const overlayRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const container = containerRef.current;
//     const grid = gridRef.current;
//     const content = contentRef.current;
//     const overlay = overlayRef.current;

//     if (!container || !grid || !content || !overlay) return;

//     // Initial state
//     gsap.set(grid, {
//       scale: 3,
//       transformOrigin: "center center",
//     });

//     gsap.set(content, {
//       opacity: 1,
//       y: 0,
//     });

//     gsap.set(overlay, {
//       opacity: 0.7,
//     });

//     // Timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: "bottom top",
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     // Zoom out images
//     tl.to(grid, {
//       scale: 1,
//       duration: 1,
//       ease: "power2.out",
//     });

//     // Fade text
//     tl.to(
//       content,
//       {
//         opacity: 0,
//         y: -50,
//         duration: 0.5,
//         ease: "power2.out",
//       },
//       0
//     );

//     // Lighten overlay
//     tl.to(
//       overlay,
//       {
//         opacity: 0.15,
//         duration: 1,
//         ease: "power2.out",
//       },
//       0
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen w-full overflow-hidden bg-black"
//     >
//       {/* Image Grid */}
//       <div
//         ref={gridRef}
//         className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2"
//       >
//         {images.map((src, index) => (
//           <div key={index} className="relative overflow-hidden">
//             <img
//               src={src}
//               alt={`Gallery image ${index + 1}`}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Dark Overlay (animated) */}
//       <div
//         ref={overlayRef}
//         className="absolute inset-0 bg-black z-[5] pointer-events-none"
//       />

//       {/* Hero Content */}
//       <div
//         ref={contentRef}
//         className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
//       >
//         <h1 className="text-white font-black uppercase text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight tracking-tight">
//           Capturing The
//           <br />
//           Pulse of Every
//           <br />
//           Event
//         </h1>

//         <p className="mt-6 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
//           Welcome to Pratibha, where every video tells a story of energy and emotion.
//           <br />
//           Join our team as we explore the vibrant world of festivals, events, and life’s
//           <br />
//           special moments through our lens. Scroll down to experience the moments <br />
//       we’ve captured—full of color, connection, emotion, and celebration.
//         </p>
//       </div>

//       {/* Bottom Gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
//     </section>
//   );
// };

// export default ParallaxHero;


import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Bg1 from "@/assets/Bg1.jpeg";
import Bg2 from "@/assets/Bg2.jpeg";
import Bg3 from "@/assets/Bg3.jpeg";
import Bg4 from "@/assets/Bg4.jpeg";
import Bg5 from "@/assets/Bg5.jpeg";
import Bg6 from "@/assets/Bg6.jpeg";
import Bg7 from "@/assets/Bg7.jpeg";
import Bg8 from "@/assets/Bg8.jpeg";
import Bg9 from "@/assets/Bg9.jpeg";


const images = [
  Bg1,
  Bg2,
  Bg7,
  Bg4,
  Bg6,
  Bg9,
  Bg8,
  Bg5,
  Bg3,
];

const ParallaxHero = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const grid = gridRef.current;
    const content = contentRef.current;
    const overlay = overlayRef.current;
    const title = titleRef.current;

    if (!container || !grid || !content || !overlay || !title) return;

    /* ------------------ SCROLL PARALLAX ------------------ */
    gsap.set(grid, { scale: 3, transformOrigin: "center" });
    gsap.set(overlay, { opacity: 0.7 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(grid, { scale: 1, ease: "power2.out" }, 0)
      .to(content, { opacity: 0, y: -50, ease: "power2.out" }, 0)
      .to(overlay, { opacity: 0.15, ease: "power2.out" }, 0);

    /* ------------------ TEXT INTRO ANIMATION ------------------ */
    gsap.fromTo(
      title.children,
      { y: 120, opacity: 0, rotateX: 45 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.4,
        ease: "power4.out",
        stagger: 0.15,
      }
    );

    /* ------------------ FLOATING BREATH ANIMATION ------------------ */
    gsap.to(title, {
      y: -10,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    /* ------------------ HOVER TILT EFFECT ------------------ */
    const handleMouseMove = (e) => {
      const bounds = title.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      const rotateY = gsap.utils.mapRange(0, bounds.width, -12, 12, x);
      const rotateX = gsap.utils.mapRange(0, bounds.height, 12, -12, y);

      gsap.to(title, {
        rotateX,
        rotateY,
        scale: 1.05,
        transformPerspective: 1000,
        ease: "power3.out",
        duration: 0.4,
      });
    };

    const resetTilt = () => {
      gsap.to(title, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    title.addEventListener("mousemove", handleMouseMove);
    title.addEventListener("mouseleave", resetTilt);

    return () => {
      title.removeEventListener("mousemove", handleMouseMove);
      title.removeEventListener("mouseleave", resetTilt);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Image Grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2"
      >
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black z-[5]"
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
      >
        <h1
          ref={titleRef}
          className="cursor-pointer select-none font-black uppercase text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight tracking-tight"
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className="block">Capturing The</span>
          <span className="block">Pulse of Every</span>
          <span className="block">Moment</span>
        </h1>

        <p className="mt-6 text-white/90 text-base sm:text-lg md:text-xl max-w-3xl">
          Welcome to Pratibha, where every video tells a story of energy and emotion.
          Scroll to experience the moments we’ve captured — full of color,
          connection, and celebration.
        </p>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
};

export default ParallaxHero;
