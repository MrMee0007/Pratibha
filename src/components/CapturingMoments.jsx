// import { Play } from "lucide-react";

// const features = [
//   {
//     id: "dQw4w9WgXcQ",
//     title: "AUTHENTIC STORYTELLING",
//     description: "We focus on capturing genuine moments that tells the story behind every event, making each clip a meaningful memory.",
//   },
//   {
//     id: "jNQXAC9IVRw",
//     title: "PERSONALIZED APPROACH",
//     description: "We start with a conversation to fully understand your vision, ensuring the photos truly reflect your style and the essence of your event.",
//   },
//   {
//     id: "9bZkp7q19f0",
//     title: "FLEXIBLE AND RELIABLE",
//     description: "We focus on capturing genuine moments that tells the story behind every event, making each clip a meaningful memory.",
//   },
// ];

// const CapturingMoments = () => {
//   return (
//     <section className="bg-black py-20 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Heading */}
//         <h2 className="text-white font-heading text-4xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-wide leading-tight mb-6">
//           Capturing Moments,<br />
//           Creating Lasting<br />
//           Impressions
//         </h2>
        
//         {/* Subtitle */}
//         <p className="text-white/70 text-xl md:text max-w-2xl mx-auto mb-16">
//           Pratibha believes in the power of storytelling through Cinematography. 
//           Each Clip is a reflection of the emotion and atmosphere of the event.
//         </p>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((feature) => (
//             <div key={feature.id} className="flex flex-col items-center">
//               {/* Video Thumbnail */}
//               <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 group cursor-pointer">
//                 <img
//                   src={`https://img.youtube.com/vi/${feature.id}/maxresdefault.jpg`}
//                   alt={feature.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                   <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
//                     <Play className="w-6 h-6 text-white ml-1" />
//                   </div>
//                 </div>
//               </div>

//               {/* Title */}
//               <h3 className="text-white font-heading text-3xl font-bold text-foreground uppercase tracking-wide mb-3 leading-tight">
//                 {feature.title}
//               </h3>

//               {/* Description */}
//               <p className="text-white/60 text-foreground/60 - text-sm leading-relaxed max-w-xs">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // export default CapturingMoments;
// import { ArrowRight } from "lucide-react";
// import { video7 } from "@/assets/assets";

// const CapturingMoments = () => {
//   return (
//     <section className="relative w-full h-[90vh] overflow-hidden rounded-b-[40px]">

//       {/* VIDEO BACKGROUND */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src={video7} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* DARK + GRADIENT OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

//       {/* SOFT GLOW */}
//       <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />

//       {/* CONTENT */}
//       <div className="relative z-10 flex h-full items-center justify-center px-6">
//         <div className="max-w-4xl text-center">

//           <span className="inline-block mb-4 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white backdrop-blur">
//             🚀 Creative • Cinematic • Powerful
//           </span>

//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
//             We Create
//             <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Experiences That Feel Alive
//             </span>
//           </h1>

//           <p className="mt-6 text-lg md:text-xl text-white/70">
//             Design, development & digital storytelling crafted for impact.
//           </p>

//           {/* CTA BUTTONS */}
//           <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

//             <button className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-black font-semibold shadow-lg transition hover:scale-105">
//               Get Started
//               <ArrowRight
//                 size={18}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </button>

//             <button className="rounded-full border border-white/30 px-8 py-4 text-white font-semibold backdrop-blur transition hover:bg-white/10">
//               Watch Reel
//             </button>

//           </div>
//         </div>
//       </div>

//       {/* BOTTOM FADE */}
//       <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
//     </section>
//   );
// };

// export default CapturingMoments;
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { video7 } from "@/assets/assets";

const CapturingMoments = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.6, // play when 60% visible
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[90vh] overflow-hidden rounded-b-[40px]"
    >
      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video7} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* DARK + GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

      {/* SOFT GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <span className="inline-block mb-4 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white backdrop-blur">
            🚀 Creative • Cinematic • Powerful
          </span>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            We Create
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experiences That Feel Alive
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/70">
            Design, development & digital storytelling crafted for impact.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-black font-semibold shadow-lg transition hover:scale-105">
              Get Started
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>

            <button className="rounded-full border border-white/30 px-8 py-4 text-white font-semibold backdrop-blur transition hover:bg-white/10">
              Watch Reel
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default CapturingMoments;
