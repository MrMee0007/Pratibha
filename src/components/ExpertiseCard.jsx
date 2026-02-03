// // import { useRef, useState } from "react";
// // import { gsap } from "gsap";
// // import { ArrowRight } from "lucide-react";

// // const ExpertiseCard = ({
// //   title,
// //   description,
// //   tags,
// //   videoUrl,
// //   posterUrl,
// //   index,
// // }) => {
// //   const cardRef = useRef(null);
// //   const videoRef = useRef(null);
// //   const contentRef = useRef(null);
// //   const [isHovered, setIsHovered] = useState(false);

// //   const handleMouseEnter = () => {
// //     setIsHovered(true);

// //     if (videoRef.current) {
// //       videoRef.current.play();
// //     }

// //     gsap.to(cardRef.current, {
// //       scale: 1.02,
// //       duration: 0.4,
// //       ease: "power2.out",
// //     });

// //     gsap.to(contentRef.current, {
// //       y: -10,
// //       duration: 0.4,
// //       ease: "power2.out",
// //     });
// //   };

// //   const handleMouseLeave = () => {
// //     setIsHovered(false);

// //     if (videoRef.current) {
// //       videoRef.current.pause();
// //       videoRef.current.currentTime = 0;
// //     }

// //     gsap.to(cardRef.current, {
// //       scale: 1,
// //       duration: 0.4,
// //       ease: "power2.out",
// //     });

// //     gsap.to(contentRef.current, {
// //       y: 0,
// //       duration: 0.4,
// //       ease: "power2.out",
// //     });
// //   };

// //   const isReversed = index % 2 === 1;

// //   return (
// //     <div
// //       ref={cardRef}
// //       className={`group grid lg:grid-cols-2 gap-8 items-center`}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //     >
// //       {/* Media Section */}
// //       <div
// //         className={`relative overflow-hidden rounded-2xl ${
// //           isReversed ? "lg:order-2" : ""
// //         }`}
// //       >
// //         <div className="aspect-[4/3] relative">
// //           {/* Poster */}
// //           <img
// //             src={posterUrl}
// //             alt={title}
// //             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
// //               isHovered ? "opacity-0" : "opacity-100"
// //             }`}
// //           />

// //           {/* Video */}
// //           <video
// //             ref={videoRef}
// //             src={videoUrl}
// //             poster={posterUrl}
// //             muted
// //             loop
// //             playsInline
// //             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
// //               isHovered ? "opacity-100" : "opacity-0"
// //             }`}
// //           />

// //           {/* Overlay */}
// //           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

// //           {/* Play Icon */}
// //           <div
// //             className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
// //               isHovered ? "opacity-0" : "opacity-100"
// //             }`}
// //           >
// //             <div className="w-16 h-16 rounded-full glass-effect flex items-center justify-center border border-primary/30">
// //               <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-primary ml-1" />
// //             </div>
// //           </div>

// //           {/* Corner accents */}
// //           <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// //           <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// //         </div>
// //       </div>

// //       {/* Content Section */}
// //       <div
// //         ref={contentRef}
// //         className={`space-y-6 ${isReversed ? "lg:order-1" : ""}`}
// //       >
// //         {/* Tags */}
// //         <div className="flex flex-wrap gap-2">
// //           {tags.map((tag, i) => (
// //             <span
// //               key={i}
// //               className="px-3 py-1 rounded-full text-xs font-medium glass-effect text-muted-foreground border border-border/50"
// //             >
// //               {tag}
// //             </span>
// //           ))}
// //         </div>

// //         {/* Title */}
// //         <h3 className="text-3xl md:text-4xl font-bold font-['Syne'] group-hover:text-gradient transition-all duration-300">
// //           {title}
// //         </h3>

// //         {/* Description */}
// //         <p className="text-muted-foreground text-lg leading-relaxed">
// //           {description}
// //         </p>

// //         {/* CTA */}
// //         <Button
// //           variant="outline"
// //           className="rounded-full px-6 border-muted-foreground/30 hover:border-primary hover:text-primary group/btn"
// //         >
// //           Get in touch
// //           <ArrowRight
// //             size={16}
// //             className="ml-2 group-hover/btn:translate-x-1 transition-transform"
// //           />
// //         </Button>

// //         {/* Decorative line */}
// //         <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ExpertiseCard;


// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ArrowUpRight } from "lucide-react";

// const ExpertiseCard = ({
//   title,
//   description,
//   tags,
//   videoUrl,
//   posterUrl,
//   index,
// }) => {
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const el = cardRef.current;

//     gsap.fromTo(
//       el.querySelector(".media"),
//       { scale: 1.1 },
//       {
//         scale: 1,
//         duration: 1.4,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: el,
//           start: "top 85%",
//         },
//       }
//     );
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className={`grid lg:grid-cols-2 gap-12 items-center ${
//         index % 2 !== 0 ? "lg:flex-row-reverse" : ""
//       }`}
//     >
//       {/* Media */}
//       <div className="media relative rounded-3xl overflow-hidden h-[420px]">
//         <video
//           src={videoUrl}
//           poster={posterUrl}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* Content */}
//       <div className="space-y-6">
//         <h3 className="text-3xl md:text-4xl font-bold font-['Syne']">
//           {title}
//         </h3>

//         <p className="text-muted-foreground text-lg leading-relaxed">
//           {description}
//         </p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-3">
//           {tags.map((tag, i) => (
//             <span
//               key={i}
//               className="px-4 py-2 rounded-full text-sm bg-foreground/5 text-foreground"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* CTA (NO ui/button) */}
//         <div className="pt-4">
//           <a
//             href="#contact"
//             className="group inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-primary/80 transition"
//           >
//             View Project
//             <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-primary group-hover:rotate-45 transition-transform duration-300">
//               <ArrowUpRight size={18} />
//             </span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ExpertiseCard;

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ArrowUpRight } from "lucide-react";

// const ExpertiseCard = ({
//   title,
//   description,
//   tags,
//   videoUrl,
//   posterUrl,
//   index,
// }) => {
//   const cardRef = useRef(null);
//   const mediaRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         mediaRef.current,
//         { scale: 1.15, filter: "brightness(0.6)" },
//         {
//           scale: 1,
//           filter: "brightness(1)",
//           duration: 1.4,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 80%",
//           },
//         }
//       );

//       gsap.fromTo(
//         textRef.current.children,
//         { y: 40, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.15,
//           duration: 0.9,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 75%",
//           },
//         }
//       );
//     }, cardRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className={`grid lg:grid-cols-2 gap-16 items-center ${
//         index % 2 !== 0 ? "lg:flex-row-reverse" : ""
//       }`}
//     >
//       {/* MEDIA */}
//       <div
//         ref={mediaRef}
//         className="relative h-[460px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
//       >
//         <video
//           src={videoUrl}
//           poster={posterUrl}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/40" />

//         {/* Blue glow */}
//         <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10" />
//       </div>

//       {/* CONTENT */}
//       <div ref={textRef} className="space-y-6">
//         {/* Title */}
//         <h3 className="text-4xl md:text-5xl font-bold font-['Syne'] leading-tight">
//           <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
//             {title}
//           </span>
//         </h3>

//         {/* Description */}
//         <p className="text-muted-foreground text-lg leading-relaxed">
//           {description}
//         </p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-3 pt-2">
//           {tags.map((tag, i) => (
//             <span
//               key={i}
//               className="px-4 py-2 rounded-full text-sm bg-white/5 backdrop-blur border border-white/10 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* CTA */}
//         <a
//           href="#contact"
//           className="group inline-flex items-center gap-3 pt-4 text-lg font-medium text-cyan-400 hover:text-cyan-300 transition"
//         >
//           Explore Work
//           <span className="w-10 h-10 rounded-full border border-cyan-400/40 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
//             <ArrowUpRight size={18} />
//           </span>
//         </a>
//       </div>
//     </div>
//   );
// };

// // export default ExpertiseCard;
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ArrowUpRight } from "lucide-react";

// const ExpertiseCard = ({
//   title,
//   description,
//   tags,
//   videoUrl,
//   posterUrl,
//   index,
// }) => {
//   const cardRef = useRef(null);
//   const mediaRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         cardRef.current,
//         { opacity: 0, y: 100 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.1,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 80%",
//           },
//         }
//       );

//       gsap.fromTo(
//         mediaRef.current,
//         { scale: 1.2, filter: "brightness(0.6)" },
//         {
//           scale: 1,
//           filter: "brightness(1)",
//           duration: 1.5,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 75%",
//           },
//         }
//       );

//       gsap.fromTo(
//         contentRef.current.children,
//         { y: 40, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.15,
//           duration: 0.9,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 70%",
//           },
//         }
//       );
//     }, cardRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className={`grid lg:grid-cols-2 gap-20 items-center ${
//         index % 2 !== 0 ? "lg:flex-row-reverse" : ""
//       }`}
//     >
//       {/* MEDIA */}
//       <div
//         ref={mediaRef}
//         className="relative h-[480px] rounded-3xl overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.8)]"
//       >
//         <video
//           src={videoUrl}
//           poster={posterUrl}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Dark cinematic overlay */}
//         <div className="absolute inset-0 bg-black/60" />

//         {/* Accent glow */}
//         <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
//       </div>

//       {/* CONTENT */}
//       <div ref={contentRef} className="space-y-6">
//         {/* Title */}
//         <h3 className="text-4xl md:text-5xl font-extrabold font-['Syne'] leading-tight">
//           <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
//             {title}
//           </span>
//         </h3>

//         {/* Description */}
//         <p className="text-white/85 text-lg leading-relaxed">
//           {description}
//         </p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-3 pt-2">
//           {tags.map((tag, i) => (
//             <span
//               key={i}
//               className="
//                 px-4 py-2 rounded-full text-sm
//                 bg-white/5 backdrop-blur-md
//                 border border-white/10
//                 text-white/80
//                 shadow-lg
//               "
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* CTA */}
//         <a
//           href="#contact"
//           className="group inline-flex items-center gap-3 pt-6 text-lg font-semibold text-white"
//         >
//           Get in touch
//           <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
//             <ArrowUpRight size={18} />
//           </span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ExpertiseCard;


// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ArrowUpRight } from "lucide-react";

// const ExpertiseCard = ({
//   title,
//   description,
//   tags,
//   videoUrl,
//   posterUrl,
//   index,
// }) => {
//   const cardRef = useRef(null);
//   const mediaRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         cardRef.current,
//         { opacity: 0, y: 100 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.1,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 80%",
//           },
//         }
//       );

//       gsap.fromTo(
//         mediaRef.current,
//         { scale: 1.2, filter: "brightness(0.6)" },
//         {
//           scale: 1,
//           filter: "brightness(1)",
//           duration: 1.5,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 75%",
//           },
//         }
//       );

//       gsap.fromTo(
//         contentRef.current.children,
//         { y: 40, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.15,
//           duration: 0.9,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 70%",
//           },
//         }
//       );
//     }, cardRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={cardRef} className="shine-border">
//       {/* INNER CARD */}
//       <div
//         className={`relative rounded-[2rem] p-12 bg-white/5 backdrop-blur-xl border border-white/10
//         grid lg:grid-cols-2 gap-20 items-center ${
//           index % 2 !== 0 ? "lg:flex-row-reverse" : ""
//         }`}
//       >
//         {/* MEDIA */}
//         <div
//           ref={mediaRef}
//           className="relative h-[480px] rounded-3xl overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.8)]"
//         >
//           <video
//             src={videoUrl}
//             poster={posterUrl}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           {/* Dark cinematic overlay */}
//           <div className="absolute inset-0 bg-black/60" />

//           {/* Accent glow */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
//         </div>

//         {/* CONTENT */}
//         <div ref={contentRef} className="space-y-6">
//           <h3 className="text-4xl md:text-5xl font-extrabold font-['Syne'] leading-tight">
//             <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
//               {title}
//             </span>
//           </h3>

//           <p className="text-white/85 text-lg leading-relaxed">
//             {description}
//           </p>

//           <div className="flex flex-wrap gap-3 pt-2">
//             {tags.map((tag, i) => (
//               <span
//                 key={i}
//                 className="px-4 py-2 rounded-full text-sm bg-white/5 backdrop-blur-md border border-white/10 text-white/80"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           <a
//             href="#contact"
//             className="group inline-flex items-center gap-3 pt-6 text-lg font-semibold text-white"
//           >
//             Get in touch
//             <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
//               <ArrowUpRight size={18} />
//             </span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpertiseCard;

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ArrowUpRight } from "lucide-react";

// const ExpertiseCard = ({
//   title,
//   description,
//   tags,
//   videoUrl,
//   posterUrl,
//   index,
// }) => {
//   const cardRef = useRef(null);
//   const mediaRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       /* Card entrance */
//       gsap.fromTo(
//         cardRef.current,
//         { opacity: 0, y: 100 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.1,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 80%",
//           },
//         }
//       );

//       /* Cinematic zoom-in on scroll */
//       gsap.fromTo(
//         mediaRef.current,
//         { scale: 1.15 },
//         {
//           scale: 1,
//           duration: 1.6,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 75%",
//           },
//         }
//       );

//       /* Content stagger */
//       gsap.fromTo(
//         contentRef.current.children,
//         { y: 40, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.15,
//           duration: 0.9,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 70%",
//           },
//         }
//       );
//     }, cardRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={cardRef} className="expertise-shine">
//       {/* INNER CARD */}
//       <div
//         className={`relative rounded-[2rem] p-12 bg-white/5 backdrop-blur-xl border border-white/10
//         grid lg:grid-cols-2 gap-20 items-center ${
//           index % 2 !== 0 ? "lg:flex-row-reverse" : ""
//         }`}
//       >
//         {/* MEDIA */}
//         <div
//           ref={mediaRef}
//           className="relative h-[480px] rounded-3xl overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.8)]"
//         >
//           <video
//             src={videoUrl}
//             poster={posterUrl}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover media-zoom"
//           />

//           {/* Cinematic overlays */}
//           <div className="absolute inset-0 bg-black/60" />
//           <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
//         </div>

//         {/* CONTENT */}
//         <div ref={contentRef} className="space-y-6">
//           <h3 className="text-4xl md:text-5xl font-extrabold font-['Syne'] leading-tight">
//             <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
//               {title}
//             </span>
//           </h3>

//           <p className="text-white/85 text-lg leading-relaxed">
//             {description}
//           </p>

//           <div className="flex flex-wrap gap-3 pt-2">
//             {tags.map((tag, i) => (
//               <span
//                 key={i}
//                 className="px-4 py-2 rounded-full text-sm bg-white/5 backdrop-blur-md border border-white/10 text-white/80"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           <a
//             href="#contact"
//             className="group inline-flex items-center gap-3 pt-6 text-lg font-semibold text-white"
//           >
//             Get in touch
//             <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
//               <ArrowUpRight size={18} />
//             </span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpertiseCard;

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ArrowUpRight } from "lucide-react";

// const ExpertiseCard = ({
//   title,
//   description,
//   tags,
//   videoUrl,
//   posterUrl,
//   index,
// }) => {
//   const cardRef = useRef(null);
//   const mediaRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         cardRef.current,
//         { opacity: 0, y: 100 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.1,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 80%",
//           },
//         }
//       );

//       gsap.fromTo(
//         contentRef.current.children,
//         { y: 40, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.15,
//           duration: 0.9,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: cardRef.current,
//             start: "top 70%",
//           },
//         }
//       );
//     }, cardRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={cardRef} className="expertise-card">
//       <div
//         className={`relative rounded-[2rem] p-12 bg-white/5 backdrop-blur-xl border border-white/10
//         grid lg:grid-cols-2 gap-20 items-center ${
//           index % 2 !== 0 ? "lg:flex-row-reverse" : ""
//         }`}
//       >
//         {/* MEDIA */}
//         <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.8)]">
//           <video
//             src={videoUrl}
//             poster={posterUrl}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover media-hover-zoom"
//           />

//           {/* Cinematic overlays */}
//           <div className="absolute inset-0 bg-black/60" />
//           <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
//         </div>

//         {/* CONTENT */}
//         <div ref={contentRef} className="space-y-6 relative z-10">
//           <h3 className="text-4xl md:text-5xl font-extrabold font-['Syne'] leading-tight">
//             <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
//               {title}
//             </span>
//           </h3>

//           <p className="text-white/85 text-lg leading-relaxed">
//             {description}
//           </p>

//           <div className="flex flex-wrap gap-3 pt-2">
//             {tags.map((tag, i) => (
//               <span
//                 key={i}
//                 className="px-4 py-2 rounded-full text-sm bg-white/5 backdrop-blur-md border border-white/10 text-white/80"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           <a
//             href="#contact"
//             className="group inline-flex items-center gap-3 pt-6 text-lg font-semibold text-white"
//           >
//             Get in touch
//             <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
//               <ArrowUpRight size={18} />
//             </span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpertiseCard;
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ExpertiseCard = ({
  title,
  description,
  tags,
  videoUrl,
  posterUrl,
  index,
}) => {
  const cardRef = useRef(null);
  const mediaRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CARD ENTER / EXIT (DOWN + UP)
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // MEDIA REVEAL
      gsap.fromTo(
        mediaRef.current,
        { scale: 1.15, filter: "brightness(0.6)" },
        {
          scale: 1,
          filter: "brightness(1)",
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // CONTENT STAGGER
      gsap.fromTo(
        contentRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`expertise-card grid lg:grid-cols-2 gap-20 items-center ${
        index % 2 !== 0 ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* MEDIA */}
      <div
        ref={mediaRef}
        className="relative h-[480px] rounded-3xl overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.8)]"
      >
        <video
          src={videoUrl}
          poster={posterUrl}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover media-hover-zoom"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Soft accent overlay (same tone family as heading) */}
        <div className="absolute inset-0 bg-white/5" />
      </div>

      {/* CONTENT */}
      <div ref={contentRef} className="space-y-6">
        {/* TITLE */}
        <h3 className="text-4xl md:text-5xl font-extrabold font-['Syne'] leading-tight">
          <span className="bg-gradient-to-r from-white via-primary to-primary bg-clip-text text-transparent">
            {title}
          </span>
        </h3>

        {/* DESCRIPTION */}
        <p className="text-white/85 text-lg leading-relaxed">
          {description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 pt-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-sm bg-white/5 backdrop-blur-md border border-white/10 text-white/80 shadow-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 pt-6 text-lg font-semibold text-white"
        >
          Get in touch
          <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRight size={18} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ExpertiseCard;
