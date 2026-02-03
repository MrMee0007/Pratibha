// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Camera, Clapperboard, Image, Sparkles } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const services = [
//   {
//     icon: Camera,
//     title: "Behind the Scenes",
//     description:
//       "We go beyond the main event and discover the moments that make it all happen. I capture the candid, unscripted scenes backstage and behind the curtain.",
//   },
//   {
//     icon: Clapperboard,
//     title: "Event Highlights",
//     description:
//       "Showcasing the best moments from your event, I capture the energy, excitement, and key highlights that tell the full story.",
//   },
//   {
//     icon: Image,
//     title: "Portrait Sessions",
//     description:
//       "Professional portrait photography that captures personality, confidence, and the essence of who you are in every frame.",
//   },
//   {
//     icon: Sparkles,
//     title: "Creative Direction",
//     description:
//       "From concept to execution, I help bring your creative vision to life with strategic planning and artistic direction.",
//   },
// ];

// const ServicesOverview = () => {
//   const sectionRef = useRef(null);
//   const cardsRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".service-card",
//         { y: 60, opacity: 0, rotateY: -15 },
//         {
//           y: 0,
//           opacity: 1,
//           rotateY: 0,
//           duration: 0.8,
//           ease: "power3.out",
//           stagger: 0.15,
//           scrollTrigger: {
//             trigger: cardsRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-24 md:py-32 relative">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Syne'] mb-6">
//             Everything is open for discussion.
//             <br />
//             <span className="text-gradient">Your event, my camera</span>
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             No matter the size or type of your event, I'm here to capture it
//             exactly how you envision. Every detail is flexible because your
//             vision comes first.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div
//           ref={cardsRef}
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
//           style={{ perspective: "1000px" }}
//         >
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="service-card group relative p-8 rounded-2xl border-gradient glass-effect overflow-hidden cursor-pointer"
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Glow effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               {/* Icon */}
//               <div className="relative mb-6">
//                 <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
//                   <service.icon className="w-7 h-7 text-primary" />
//                 </div>
//                 <div className="absolute inset-0 w-14 h-14 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </div>

//               {/* Content */}
//               <h3 className="text-xl font-bold font-['Syne'] text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
//                 {service.title}
//               </h3>
//               <p className="text-muted-foreground text-sm leading-relaxed">
//                 {service.description}
//               </p>

//               {/* Decorative corner */}
//               <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Featured Image */}
//         <div className="mt-20 relative rounded-3xl overflow-hidden group">
//           <img
//             src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600"
//             alt="Behind the scenes"
//             className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

//           <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
//             <div className="max-w-2xl">
//               <span className="inline-block px-4 py-1 rounded-full glass-effect text-sm text-primary mb-4">
//                 Featured Work
//               </span>
//               <h3 className="text-2xl md:text-3xl font-bold font-['Syne'] text-foreground mb-2">
//                 A Moment That Captured the Energy
//               </h3>
//               <p className="text-muted-foreground">
//                 This photo encapsulates the vibrant atmosphere of the event.
//                 It's a testament to the energy and emotion felt by everyone present.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesOverview;


// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Camera, Clapperboard, Image, Sparkles } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const services = [
//   {
//     icon: Camera,
//     title: "Behind the Scenes",
//     description:
//       "We go beyond the main event and discover the moments that make it all happen. I capture the candid, unscripted scenes backstage and behind the curtain.",
//   },
//   {
//     icon: Clapperboard,
//     title: "Event Highlights",
//     description:
//       "Showcasing the best moments from your event, I capture the energy, excitement, and key highlights that tell the full story.",
//   },
//   {
//     icon: Image,
//     title: "Portrait Sessions",
//     description:
//       "Professional portrait photography that captures personality, confidence, and the essence of who you are in every frame.",
//   },
//   {
//     icon: Sparkles,
//     title: "Creative Direction",
//     description:
//       "From concept to execution, I help bring your creative vision to life with strategic planning and artistic direction.",
//   },
// ];

// const ServicesOverview = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const cardsRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       /* Header animation */
//       gsap.fromTo(
//         titleRef.current.children,
//         { y: 80, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.2,
//           duration: 1,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//           },
//         }
//       );

//       /* Cards animation */
//       gsap.fromTo(
//         ".service-card",
//         {
//           y: 100,
//           opacity: 0,
//           rotateX: 15,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           rotateX: 0,
//           duration: 1,
//           stagger: 0.15,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: cardsRef.current,
//             start: "top 80%",
//           },
//         }
//       );

//       /* Featured image reveal */
//       gsap.fromTo(
//         imageRef.current,
//         {
//           scale: 1.15,
//           clipPath: "inset(100% 0% 0% 0%)",
//         },
//         {
//           scale: 1,
//           clipPath: "inset(0% 0% 0% 0%)",
//           duration: 1.4,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: imageRef.current,
//             start: "top 85%",
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-36 overflow-hidden bg-black"
//     >
//       {/* Ambient glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 -left-40 w-[520px] h-[520px] bg-primary/15 blur-[160px] rounded-full" />
//         <div className="absolute bottom-1/4 -right-40 w-[620px] h-[620px] bg-accent/15 blur-[180px] rounded-full" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* HEADER */}
//         <div ref={titleRef} className="text-center mb-28">
//           <span className="inline-block px-6 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80">
//             Services Overview
//           </span>

//           <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-['Syne'] mb-6">
//             <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
//               YOUR EVENT, MY VISION
//             </span>
//           </h2>

//           <p className="text-white/80 text-lg max-w-2xl mx-auto">
//             Every project is flexible, collaborative, and built around your
//             story. Nothing is fixed — everything is crafted.
//           </p>
//         </div>

//         {/* SERVICES GRID */}
//         <div
//           ref={cardsRef}
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
//           style={{ perspective: "1200px" }}
//         >
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="service-card relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group"
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Glow */}
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               {/* Icon */}
//               <div className="relative mb-6">
//                 <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <service.icon className="w-7 h-7 text-primary" />
//                 </div>
//                 <div className="absolute inset-0 w-14 h-14 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </div>

//               {/* Content */}
//               <h3 className="text-xl font-bold font-['Syne'] text-white mb-3">
//                 {service.title}
//               </h3>
//               <p className="text-white/70 text-sm leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* FEATURED IMAGE */}
//         <div
//           ref={imageRef}
//           className="relative rounded-3xl overflow-hidden group"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600"
//             alt="Behind the scenes"
//             className="w-full h-[420px] md:h-[520px] object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

//           <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14">
//             <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur text-sm text-white mb-4">
//               Featured Moment
//             </span>
//             <h3 className="text-3xl md:text-4xl font-bold font-['Syne'] text-white mb-2">
//               Energy You Can Feel
//             </h3>
//             <p className="text-white/70 max-w-xl">
//               A single frame that captures motion, emotion, and atmosphere —
//               exactly how it felt in that moment.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesOverview;


import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera, Clapperboard, Image, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Camera,
    title: "Behind the Scenes",
    description:
      "We go beyond the main event and discover the moments that make it all happen.",
  },
  {
    icon: Clapperboard,
    title: "Event Highlights",
    description:
      "Showcasing the best moments from your event with energy and emotion.",
  },
  {
    icon: Image,
    title: "Portrait Sessions",
    description:
      "Professional portraits that capture confidence and personality.",
  },
  {
    icon: Sparkles,
    title: "Creative Direction",
    description:
      "From concept to execution, shaping your creative vision.",
  },
];

const ServicesOverview = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const featuredRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HEADER */
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
            toggleActions: "play reverse play reverse",
          },
        }
      );

      /* SERVICE CARDS */
      cardsRef.current.forEach((card) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });

        tl.fromTo(
          card,
          { y: 80, opacity: 0, rotateX: 12 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.9,
            ease: "power4.out",
          }
        );

        /* HOVER replay */
        card.addEventListener("mouseenter", () => {
          gsap.fromTo(
            card,
            { y: 20, opacity: 0.9 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
            }
          );
        });
      });

      /* FEATURED MEDIA */
      gsap.fromTo(
        featuredRef.current,
        {
          scale: 1.15,
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-36 overflow-hidden bg-black"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[520px] h-[520px] bg-primary/15 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 -right-40 w-[620px] h-[620px] bg-accent/15 blur-[180px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div ref={titleRef} className="text-center mb-28">
          <span className="inline-block px-6 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-white/80">
            Services Overview
          </span>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-['Syne'] mb-6">
            <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
              YOUR EVENT, MY VISION
            </span>
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Flexible, collaborative, and crafted around your story.
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-card p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-bold font-['Syne'] text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* FEATURED WORK (IMAGE OR VIDEO) */}
        <div
          ref={featuredRef}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* 🔁 Replace img with video anytime */}
          {/* IMAGE */}
          
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600"
            className="w-full h-[420px] md:h-[520px] object-cover"
          /> 
          

          {/* VIDEO */}
          {/*<video
            src="https://cdn.coverr.co/videos/coverr-filming-on-set-3830/1080p.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[420px] md:h-[520px] object-cover"
          />*/}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white mb-4">
              Featured Work
            </span>
            <h3 className="text-3xl md:text-4xl font-bold font-['Syne'] text-white mb-2">
              Energy You Can Feel
            </h3>
            <p className="text-white/70 max-w-xl">
              A moment that captures motion, emotion, and atmosphere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
