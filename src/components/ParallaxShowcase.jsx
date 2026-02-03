// import { useRef } from "react";
// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { BackgroundImage2, BackgroundImage5 } from "@/assets/assets";

// const ParallaxShowcase = () => {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   // Parallax transforms
//   const x1 = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
//   const x2 = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
//   const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);
//   const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
//   const rotate1 = useTransform(scrollYProgress, [0, 1], [-4, 4]);
//   const rotate2 = useTransform(scrollYProgress, [0, 1], [4, -4]);

//   // Reverse animation enabled
//   const titleRef = useRef(null);
//   const isTitleInView = useInView(titleRef, {
//     once: false,
//     margin: "-120px",
//   });

//   return (
//     <section
//       ref={containerRef}
//       className="relative py-32 overflow-hidden bg-gradient-to-b from-forest via-forest/95 to-soil"
//     >
//       {/* Glow blobs */}
//       <div className="absolute -top-20 -left-20 w-96 h-96 bg-wheat/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cream/5 rounded-full blur-3xl" />

//       <div className="container relative z-10">
//         {/* Header */}
//         <div ref={titleRef} className="text-center mb-20">
//           <motion.span
//             className="inline-block px-4 py-2 mb-4 text-xs tracking-widest uppercase rounded-full
//                        bg-gradient-to-r from-wheat/30 to-cream/20 text-cream"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5 }}
//           >
//             Our Landscape
//           </motion.span>

//           <motion.h2
//             className="font-display text-4xl md:text-6xl font-bold mb-6 text-cream"
//             initial={{ opacity: 0, y: 40 }}
//             animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             Where Nature{" "}
//             <span className="bg-gradient-to-red from-wheat to-cream bg-clip-text">
//               Thrives
//             </span>
//           </motion.h2>

//           <motion.p
//             className="max-w-2xl mx-auto text-cream/70 text-lg"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             A cinematic view of our land — shaped by light, motion, and sustainable
//             storytelling from above and beyond.
//           </motion.p>
//         </div>

//         {/* Parallax Images */}
//         <div className="relative h-[600px] md:h-[720px]">
//           {/* Image 1 */}
//           <motion.div
//             className="absolute top-0 left-0 w-[70%] md:w-[55%] h-[60%] z-10"
//             style={{ x: x1, scale: scale1, rotate: rotate1 }}
//           >
//             <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-elevated group">
//               <img
//                 src={BackgroundImage2}
//                 alt="Aerial farm"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-0 bg-gradient-to-tr from-forest/70 via-transparent to-wheat/20" />

//               <motion.div
//                 className="absolute bottom-0 p-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileHover={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <h3 className="text-2xl font-display font-bold text-cream">
//                   Aerial Perspectives
//                 </h3>
//                 <p className="text-cream/80 text-sm">
//                   Patterns of land shaped by purpose
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Image 2 */}
//           <motion.div
//             className="absolute bottom-0 right-0 w-[70%] md:w-[55%] h-[60%] z-20"
//             style={{ x: x2, scale: scale2, rotate: rotate2 }}
//           >
//             <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-elevated group">
//               <img
//                 src={BackgroundImage5}
//                 alt="Rolling hills"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-0 bg-gradient-to-tl from-forest/70 via-transparent to-wheat/20" />

//               <motion.div
//                 className="absolute bottom-0 p-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileHover={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <h3 className="text-2xl font-display font-bold text-cream">
//                   Rolling Landscapes
//                 </h3>
//                 <p className="text-cream/80 text-sm">
//                   Flowing horizons & timeless terrain
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Floating stat */}
//           <motion.div
//             className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
//             animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           >
//             <div className="w-36 h-36 rounded-full bg-gradient-to-br from-wheat to-cream shadow-glow flex items-center justify-center">
//               <div className="text-center text-soil">
//                 <div className="text-4xl font-bold font-display">2k+</div>
//                 <div className="text-xs uppercase tracking-wider">Hectares</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom wave */}
//       <svg
//         className="absolute bottom-0 left-0 w-full h-40 text-wheat/30"
//         viewBox="0 0 1440 160"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M0,160 C360,80 720,120 1080,60 C1260,30 1380,50 1440,40 L1440,160 Z"
//           fill="currentColor"
//         />
//       </svg>
//     </section>
//   );
// };

// export default ParallaxShowcase;

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { video1 } from "@/assets/assets";


const Sparkle = ({ className = "" }) => (
  <motion.div
    className={`absolute w-2 h-2 rounded-full bg-gradient-to-r from-wheat to-cream ${className}`}
    animate={{
      x: [0, Math.random() * 50 - 25, 0],
      y: [0, Math.random() * 50 - 25, 0],
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
    }}
    transition={{
      repeat: Infinity,
      duration: 2 + Math.random() * 2,
      ease: "easeInOut",
      repeatType: "loop",
      delay: Math.random() * 2,
    }}
  />
);

const ParallaxShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [4, -4]);

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, margin: "-120px" });

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-forest via-forest/95 to-soil"
    >
      {/* Sparkle particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <Sparkle key={i} className={`top-${Math.random() * 80} left-${Math.random() * 90}`} />
      ))}

      <div className="container relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.span
            className="inline-block px-4 py-2 mb-4 text-xs tracking-widest uppercase rounded-full
                       bg-gradient-to-r from-wheat/30 to-cream/20 text-cream"
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Videography Club
          </motion.span>

          <motion.h2
            className="font-display text-4xl md:text-6xl font-bold mb-6 text-cream"
            initial={{ opacity: 0, y: 40 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Capturing Moments{" "}
            <span className="bg-gradient-to-r from-wheat to-cream bg-clip-text">
              Cinematically
            </span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-cream/70 text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From aerial shots to studio productions, we craft stories frame by frame,
            blending creativity with cutting-edge technology.
          </motion.p>
        </div>

        {/* Parallax Videos */}
        <div className="relative h-[600px] md:h-[720px]">
          {/* Video 1 */}
          <motion.div
            className="absolute top-0 left-0 w-[70%] md:w-[55%] h-[60%] z-10 rounded-3xl overflow-hidden shadow-elevated"
            style={{ x: x1, scale: scale1, rotate: rotate1 }}
          >
            <video
              src={video1}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-forest/70 via-transparent to-wheat/20" />
            <motion.div
              className="absolute bottom-0 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-display font-bold text-cream">
                Drone Perspectives
              </h3>
              <p className="text-cream/80 text-sm">Cinematic aerial videography</p>
            </motion.div>
          </motion.div>

          {/* Video 2 */}
          <motion.div
            className="absolute bottom-0 right-0 w-[70%] md:w-[55%] h-[60%] z-20 rounded-3xl overflow-hidden shadow-elevated"
            style={{ x: x2, scale: scale2, rotate: rotate2 }}
          >
            <video
              src={video1}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-forest/70 via-transparent to-wheat/20" />
            <motion.div
              className="absolute bottom-0 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-display font-bold text-cream">
                Studio Productions
              </h3>
              <p className="text-cream/80 text-sm">Professional storytelling</p>
            </motion.div>
          </motion.div>

          {/* Floating stat */}
          <motion.div
            className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
            animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-wheat to-cream shadow-glow flex items-center justify-center">
              <div className="text-center text-soil">
                <div className="text-4xl font-bold font-display">50+</div>
                <div className="text-xs uppercase tracking-wider">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxShowcase;
