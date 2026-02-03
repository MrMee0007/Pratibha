import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExpertiseCard from "./ExpertiseCard";

gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
  {
    title: "Festivals / Events",
    description:
      "Whether it's a large-scale festival or an intimate event, I'm here to capture every moment with energy and authenticity. From the vibrant crowds to the unforgettable performances, my goal is to bring the spirit of your event to life through powerful and dynamic photography.",
    tags: ["Live Events", "Music Festivals", "Corporate Events"],
    videoUrl:
      "https://cdn.coverr.co/videos/coverr-a-crowd-at-a-concert-6053/1080p.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000",
  },
  {
    title: "Weddings",
    description:
      "Weddings are moments full of love, emotion, and celebration. Where your day is unforgettable, I aim to capture it just as memorably. I want to create timeless images that reflect the genuine connections and heartfelt memories of your special day.",
    tags: ["Wedding Photography", "Ceremonies", "Receptions"],
    videoUrl:
      "https://cdn.coverr.co/videos/coverr-wedding-couple-dancing-9295/1080p.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
  },
  {
    title: "Company Shoots",
    description:
      "Professional company shoots are more than just photos. They tell your brand's story. I work closely with you to capture your team, workspace, and events in a way that reflects your company's values and personality. Together, we create images that build trust.",
    tags: ["Corporate", "Branding", "Team Photos"],
    videoUrl:
      "https://cdn.coverr.co/videos/coverr-a-business-meeting-in-an-office-8808/1080p.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000",
  },
  {
    title: "Culture Events",
    description:
      "Cultural events celebrate heritage, creativity, and community. I collaborate with you to capture the spirit and stories behind these moments, preserving the emotions and atmosphere that make each event unique. Together, we create images that honor the richness of culture.",
    tags: ["Cultural Events", "Exhibitions", "Performances"],
    videoUrl:
      "https://cdn.coverr.co/videos/coverr-crowd-enjoying-a-concert-7458/1080p.mp4",
    posterUrl:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000",
  },
];

const ExpertiseSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current.children,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-36 overflow-hidden bg-black"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[520px] h-[520px] bg-primary/15 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 -right-40 w-[620px] h-[620px] bg-accent/15 blur-[180px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div ref={titleRef} className="text-center mb-32">
          <span
            className="
              inline-block px-6 py-2 mb-6 rounded-full
              bg-white/5 backdrop-blur-md
              border border-white/10
              text-white/80
            "
          >
            What I Do
          </span>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-['Syne'] mb-6">
            <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
              MY EXPERTISES
            </span>
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Specialized in capturing moments that matter. From high-energy
            festivals to intimate corporate events, every story deserves to be
            told beautifully.
          </p>
        </div>

        {/* CARDS */}
        <div className="space-y-40">
          {expertiseData.map((item, index) => (
            <ExpertiseCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;


// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ExpertiseCard from "./ExpertiseCard";

// gsap.registerPlugin(ScrollTrigger);

// const expertiseData = [
//   {
//     title: "Festivals / Events",
//     description:
//       "Whether it's a large-scale festival or an intimate event, I'm here to capture every moment with energy and authenticity. From the vibrant crowds to the unforgettable performances, my goal is to bring the spirit of your event to life through powerful and dynamic photography.",
//     tags: ["Live Events", "Music Festivals", "Corporate Events"],
//     videoUrl:
//       "https://cdn.coverr.co/videos/coverr-a-crowd-at-a-concert-6053/1080p.mp4",
//     posterUrl:
//       "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000",
//   },
//   {
//     title: "Weddings",
//     description:
//       "Weddings are moments full of love, emotion, and celebration. Where your day is unforgettable, I aim to capture it just as memorably. I want to create timeless images that reflect the genuine connections and heartfelt memories of your special day.",
//     tags: ["Wedding Photography", "Ceremonies", "Receptions"],
//     videoUrl:
//       "https://cdn.coverr.co/videos/coverr-wedding-couple-dancing-9295/1080p.mp4",
//     posterUrl:
//       "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
//   },
//   {
//     title: "Company Shoots",
//     description:
//       "Professional company shoots are more than just photos. They tell your brand's story. I work closely with you to capture your team, workspace, and events in a way that reflects your company's values and personality. Together, we create images that build trust.",
//     tags: ["Corporate", "Branding", "Team Photos"],
//     videoUrl:
//       "https://cdn.coverr.co/videos/coverr-a-business-meeting-in-an-office-8808/1080p.mp4",
//     posterUrl:
//       "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000",
//   },
//   {
//     title: "Culture Events",
//     description:
//       "Cultural events celebrate heritage, creativity, and community. I collaborate with you to capture the spirit and stories behind these moments, preserving the emotions and atmosphere that make each event unique. Together, we create images that honor the richness of culture.",
//     tags: ["Cultural Events", "Exhibitions", "Performances"],
//     videoUrl:
//       "https://cdn.coverr.co/videos/coverr-crowd-enjoying-a-concert-7458/1080p.mp4",
//     posterUrl:
//       "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000",
//   },
// ];

// const ExpertiseSection = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         titleRef.current.children,
//         { y: 60, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.2,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="services"
//       className="relative py-32 overflow-hidden"
//     >
//       {/* Background glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
//         <div className="absolute bottom-1/3 -right-40 w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Header */}
//         <div ref={titleRef} className="text-center mb-28">
//           <span className="inline-block px-6 py-2 rounded-full bg-white/5 backdrop-blur border border-white/10 text-cyan-400 mb-6 shadow-[0_0_20px_rgba(56,189,248,0.35)]">
//             What I Do
//           </span>

//           <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Syne'] mb-6">
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(56,189,248,0.45)]">
//               MY EXPERTISES
//             </span>
//           </h2>

//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Specialized in capturing moments that matter. From high-energy
//             festivals to intimate corporate events, every story deserves to be
//             told beautifully.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="space-y-32">
//           {expertiseData.map((item, index) => (
//             <ExpertiseCard key={index} {...item} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExpertiseSection;


