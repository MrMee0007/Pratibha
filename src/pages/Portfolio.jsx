import React from 'react'
import Navbar from '@/components/Navbar.jsx'
import HeroSectionPortfolio from '@/components/ui/HeroSectionPortfolio';
import VideoCard from "@/components/VideoCard.jsx";

import figuresImage from "@/assets/Photo1.jpeg";
import residencyImage from "@/assets/Photo2.jpeg";
import digitalImage from "@/assets/Photo3.jpeg";
import resourcesImage from "@/assets/Photo7.jpeg";
import canILiveImage from "@/assets/Photo6.jpeg";
import { video2, video4 } from '@/assets/assets';

const Portfolio = () => {
  const videos = {
    figures:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    residency:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    digital:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    resources:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    canILive:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  };

   return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSectionPortfolio />
        
        {/* Section Title */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="flex items-center gap-6 mb-4">
            <div className="h-px bg-primary/30 flex-1" />
            <span className="text-primary text-sm tracking-[0.4em] uppercase">Now Showing</span>
            <div className="h-px bg-primary/30 flex-1" />
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[120px] font-black text-center text-foreground leading-none tracking-tighter">
            PRODUCTIONS
          </h2>
        </section>

        <section className="px-6 md:px-12 pb-20" id="productions">
          {/* Featured Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            <VideoCard
              videoSrc={video2}
              posterImage={video2}
              title="FIGURES IN EXTINCTION"
              subtitle="Theatre Work"
              size="featured"
            />
            
            <div className="grid grid-rows-2 gap-4 md:gap-6">
              <VideoCard
                videoSrc={video4}
                posterImage={residencyImage}
                title="2025 MUDLARKS RESIDENCY"
                subtitle="Until 21.12.2023"
                size="small"
              />
              <VideoCard
                videoSrc={videos.digital}
                posterImage={digitalImage}
                title="DIGITAL OFFER"
                subtitle="Explore Live"
                size="small"
              />
            </div>
          </div>

          {/* Big Text Divider */}
          <div className="py-16 md:py-24 overflow-hidden">
            <div className="flex items-center whitespace-nowrap animate-marquee">
              <span className="text-[80px] md:text-[150px] lg:text-[200px] font-black text-foreground/5 tracking-tighter mx-8">
                Pratibha
              </span>
              <span className="text-[80px] md:text-[150px] lg:text-[200px] font-black text-primary/20 tracking-tighter mx-8">
                ★
              </span>
              <span className="text-[80px] md:text-[150px] lg:text-[200px] font-black text-foreground/5 tracking-tighter mx-8">
                Collection
              </span>
              <span className="text-[80px] md:text-[150px] lg:text-[200px] font-black text-primary/20 tracking-tighter mx-8">
                ★
              </span>
              <span className="text-[80px] md:text-[150px] lg:text-[200px] font-black text-foreground/5 tracking-tighter mx-8">
                DISCOVER
              </span>
            </div>
          </div>

          {/* Wide Banner */}
          <div className="mb-6">
            <VideoCard
              videoSrc={videos.resources}
              posterImage={resourcesImage}
              title="RESOURCES & ARCHIVE"
              subtitle="Discover our complete collection"
              size="wide"
            />
          </div>

          {/* Quote Section */}
          <div className="py-20 md:py-32 text-center max-w-5xl mx-auto">
            <div className="text-primary text-6xl md:text-8xl font-serif mb-6">"</div>
            <blockquote className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-8">
              Where imagination meets <span className="font-black text-primary">reality</span>, 
              and every performance tells a <span className="font-black">story</span>.
            </blockquote>
            <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm">— The Pratibha Collective</p>
          </div>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            <VideoCard
              videoSrc={videos.canILive}
              posterImage={canILiveImage}
              title="CAN I LIVE?"
              subtitle="Theatre Work"
              size="medium"
            />
            <VideoCard
              videoSrc={videos.figures}
              posterImage={figuresImage}
              title="THE SPACE BETWEEN"
              subtitle="Dance Performance"
              size="medium"
            />
            <VideoCard
              videoSrc={videos.residency}
              posterImage={residencyImage}
              title="ECHOES"
              subtitle="Sound Installation"
              size="medium"
            />
          </div>

          {/* Large Text Section */}
          <div className="py-16 md:py-24 text-center">
            <p className="text-muted-foreground text-sm tracking-[0.4em] uppercase mb-4">Coming Soon</p>
            <h3 className="text-6xl md:text-8xl lg:text-[140px] font-black text-foreground leading-none tracking-tighter mb-4">
              SEASON
            </h3>
            <h3 className="text-6xl md:text-8xl lg:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50 leading-none tracking-tighter">
              2025—26
            </h3>
          </div>

          {/* Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-20">
            <VideoCard
              videoSrc={videos.digital}
              posterImage={digitalImage}
              title="WORKSHOP SERIES"
              subtitle="Learn & Create"
              size="tall"
            />
            <div className="md:col-span-2">
              <VideoCard
                videoSrc={videos.canILive}
                posterImage={canILiveImage}
                title="UPCOMING SEASON"
                subtitle="2025-2026 Programme"
                size="large"
              />
            </div>
            <VideoCard
              videoSrc={videos.resources}
              posterImage={resourcesImage}
              title="COMMUNITY"
              subtitle="Get Involved"
              size="tall"
            />
          </div>
        </section>

        {/* Footer CTA */}
        <section className="px-6 md:px-12 py-24 md:py-40 border-t border-foreground/10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-primary text-sm tracking-[0.4em] uppercase mb-6">Join Us</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-none tracking-tighter mb-8">
              BE PART OF THE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/50">
                EXPERIENCE
              </span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Subscribe to our newsletter and never miss a show, workshop, or exclusive behind-the-scenes content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-6 py-4 bg-foreground/5 border border-foreground/10 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Bottom Footer */}
        <footer className="px-6 md:px-12 py-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2025 Pratibha@GLAU. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">YouTube</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;
// const Portfolio = () => {
//   return (
//     <div>
//      <Navbar />
//     </div>
//   )
// }

// export default Portfolio

// import { useEffect, useRef } from "react";
// import Navbar from "@/components/Navbar.jsx";
// import HeroSectionPortfolio from "@/components/ui/HeroSectionPortfolio";
// import VideoCard from "@/components/VideoCard.jsx";

// import {
//   video1,
//   video2,
//   video3,
//   video4,
// } from "@/assets/assets";

// import frame1 from "@/assets/Photo1.jpeg";
// import frame2 from "@/assets/Photo2.jpeg";
// import frame3 from "@/assets/Photo3.jpeg";
// import frame4 from "@/assets/Photo6.jpeg";

// const Portfolio = () => {
//   const pageRef = useRef(null);
//   const audioRef = useRef(null);

//   /* 🎵 SCROLL MUSIC */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!audioRef.current) return;

//         if (entry.isIntersecting) {
//           audioRef.current.volume = 0.35;
//           audioRef.current.play().catch(() => {});
//         } else {
//           audioRef.current.pause();
//         }
//       },
//       { threshold: 0.4 }
//     );

//     if (pageRef.current) observer.observe(pageRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={pageRef} className="min-h-screen bg-background">
//       <Navbar />

//       {/* 🎧 SCROLL MUSIC */}
//       {/* <audio ref={audioRef} loop preload="auto">
//         <source src={} type="audio/mp3" />
//       </audio> */}

//       <main>
//         {/* HERO */}
//         <HeroSectionPortfolio />

//         {/* SECTION TITLE */}
//         <section className="px-6 md:px-12 py-20 md:py-32">
//           <div className="flex items-center gap-6 mb-6">
//             <div className="h-px bg-primary/30 flex-1" />
//             <span className="text-primary text-sm tracking-[0.4em] uppercase">
//               Selected Works
//             </span>
//             <div className="h-px bg-primary/30 flex-1" />
//           </div>

//           <h2 className="text-5xl md:text-7xl lg:text-[120px] font-black text-center tracking-tighter">
//             FILMS & VISUAL STORIES
//           </h2>
//         </section>

//         {/* FEATURED FILMS */}
//         <section className="px-6 md:px-12 pb-24">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
//             <VideoCard
//               videoSrc={video}
//               posterImage={frame1}
//               title="THE SILENCE BETWEEN FRAMES"
//               subtitle="Short Film"
//               size="featured"
//             />

//             <div className="grid grid-rows-2 gap-4 md:gap-6">
//               <VideoCard
//                 videoSrc={reel2}
//                 posterImage={frame2}
//                 title="SHADOWS OF LIGHT"
//                 subtitle="Cinematic Reel"
//                 size="small"
//               />
//               <VideoCard
//                 videoSrc={reel3}
//                 posterImage={frame3}
//                 title="MOTION & MEMORY"
//                 subtitle="Commercial Film"
//                 size="small"
//               />
//             </div>
//           </div>

//           {/* MARQUEE */}
//           <div className="py-20 overflow-hidden">
//             <div className="flex whitespace-nowrap animate-marquee">
//               {["CINEMATOGRAPHY", "LIGHT", "STORY", "FRAME"].map((text, i) => (
//                 <span
//                   key={i}
//                   className="text-[100px] md:text-[180px] font-black text-foreground/5 mx-12"
//                 >
//                   {text}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* WIDE FILM */}
//           <VideoCard
//             videoSrc={reel4}
//             posterImage={frame4}
//             title="BEHIND THE LENS"
//             subtitle="Documentary Visual"
//             size="wide"
//           />

//           {/* DIRECTOR STATEMENT */}
//           <div className="py-24 md:py-32 text-center max-w-5xl mx-auto">
//             <div className="text-primary text-7xl font-serif mb-6">“</div>
//             <blockquote className="text-3xl md:text-5xl font-light leading-tight mb-10">
//               Cinematography is not about the camera —
//               <br />
//               it’s about <span className="font-black">emotion in motion</span>,
//               light in silence, and stories that breathe.
//             </blockquote>
//             <p className="tracking-[0.3em] uppercase text-muted-foreground text-sm">
//               — Director of Photography
//             </p>
//           </div>

//           {/* FINAL GRID */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24">
//             <VideoCard
//               videoSrc={reel2}
//               posterImage={frame2}
//               title="NIGHT STUDIES"
//               subtitle="Low Light Experiment"
//               size="medium"
//             />
//             <VideoCard
//               videoSrc={reel3}
//               posterImage={frame3}
//               title="URBAN FRAMES"
//               subtitle="City Visuals"
//               size="medium"
//             />
//             <VideoCard
//               videoSrc={reel1}
//               posterImage={frame1}
//               title="HUMAN STORIES"
//               subtitle="Narrative Film"
//               size="medium"
//             />
//           </div>
//         </section>

//         {/* FOOTER CTA */}
//         <section className="px-6 md:px-12 py-32 border-t border-foreground/10 text-center">
//           <p className="text-primary text-sm tracking-[0.4em] uppercase mb-6">
//             Collaborate
//           </p>
//           <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
//             LET’S CREATE<br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
//               CINEMA
//             </span>
//           </h2>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Portfolio;
