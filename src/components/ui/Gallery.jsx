// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { X } from "lucide-react";

// import gallery1 from "@/assets/Photo1.jpeg";
// import gallery2 from "@/assets/Photo2.jpeg";
// import gallery3 from "@/assets/Photo3.jpeg";
// import gallery4 from "@/assets/Photo4.jpeg";
// import gallery5 from "@/assets/Photo5.jpeg";
// import gallery6 from "@/assets/Photo6.jpeg";
// import gallery7 from "@/assets/Photo7.jpeg";
// import gallery8 from "@/assets/Photo8.jpeg";

// gsap.registerPlugin(ScrollTrigger);

// const images = [
//   { src: gallery1, alt: "Festival crowd", height: 400 },
//   { src: gallery2, alt: "DJ performance", height: 280 },
//   { src: gallery3, alt: "Golden hour crowd", height: 350 },
//   { src: gallery4, alt: "LED stage", height: 280 },
//   { src: gallery5, alt: "Festival portrait", height: 380 },
//   { src: gallery6, alt: "Fireworks show", height: 260 },
//   { src: gallery7, alt: "Festival sunset", height: 300 },
//   { src: gallery8, alt: "Band performance", height: 420 },
// ];

// const Gallery = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const galleryRef = useRef(null);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Title animation
//       gsap.fromTo(
//         titleRef.current,
//         { y: 60, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//           },
//         }
//       );

//       // Gallery items stagger animation
//       const items = galleryRef.current?.querySelectorAll(".gallery-item");
//       if (items) {
//         gsap.fromTo(
//           items,
//           { y: 80, opacity: 0, scale: 0.95 },
//           {
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             duration: 0.8,
//             stagger: 0.1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: galleryRef.current,
//               start: "top 75%",
//             },
//           }
//         );
//       }
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   // Lightbox close on escape
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") setSelectedImage(null);
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   return (
//     <section ref={sectionRef} id="portfolio" className="py-24 md:py-32 bg-black">
//       <div className="container mx-auto px-6">
//         {/* Section Title */}
//         <div ref={titleRef} className="text-center mb-16">
//           <h2 className="font-display text-5xl md:text-7xl mb-4 text-white">
//             CAPTURING <span className="text-blue-400">MOMENTS</span>
//           </h2>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Explore my favorite collection of festival photography
//           </p>
//         </div>

//         {/* Masonry Gallery */}
//         <div
//           ref={galleryRef}
//           className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
//         >
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="gallery-item gallery-image break-inside-avoid rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
//               onClick={() => setSelectedImage(image.src)}
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full object-cover hover:scale-105 transition-transform duration-500"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-scale-in"
//           onClick={() => setSelectedImage(null)}
//         >
//           <button
//             className="absolute top-6 right-6 p-2 text-gray-300 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 rounded-full"
//             onClick={() => setSelectedImage(null)}
//           >
//             <X size={32} />
//           </button>
//           <img
//             src={selectedImage}
//             alt="Selected"
//             className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </section>
//   );
// };

// export default Gallery;

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";

import gallery1 from "@/assets/Photo1.jpeg";
import gallery2 from "@/assets/Photo2.jpeg";
import gallery3 from "@/assets/Photo3.jpeg";
import gallery4 from "@/assets/Photo4.jpeg";
import gallery5 from "@/assets/Photo5.jpeg";
import gallery6 from "@/assets/Photo6.jpeg";
import gallery7 from "@/assets/Photo7.jpeg";
import gallery8 from "@/assets/Photo8.jpeg";
// import video1 from "@/assets/Video1.mp4";
// import video2 from "@/assets/Video2.mp4";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { type: "image", src: gallery1, alt: "Festival crowd" },
  { type: "image", src: gallery2, alt: "DJ performance" },
  // { type: "video", src: video1, alt: "Stage performance" },
  { type: "image", src: gallery3, alt: "Golden hour crowd" },
  // { type: "video", src: video2, alt: "Crowd dancing" },
  { type: "image", src: gallery4, alt: "LED stage" },
  { type: "image", src: gallery5, alt: "Festival portrait" },
  { type: "image", src: gallery6, alt: "Fireworks show" },
  { type: "image", src: gallery7, alt: "Festival sunset" },
  { type: "image", src: gallery8, alt: "Band performance" },
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const galleryRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 80%" },
        }
      );

      // Collage items animation
      const elems = galleryRef.current?.querySelectorAll(".gallery-item");
      elems?.forEach((item, i) => {
        gsap.fromTo(
          item,
          {
            y: 80,
            opacity: 0,
            scale: 0.9,
            rotate: (Math.random() - 0.5) * 6,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: item, start: "top 85%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Lightbox close on escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-24 md:py-32 bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl mb-4 text-white">
            CAPTURING <span className="text-blue-400">MOMENTS</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my favorite collection of festival photography & videos
          </p>
        </div>

        {/* Collage Gallery */}
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const height = 250 + Math.floor(Math.random() * 180);
            const rotation = (Math.random() - 0.5) * 8;
            const colSpan = Math.random() > 0.7 ? "lg:col-span-2" : "";

            return (
              <div
                key={index}
                className={`gallery-item rounded-2xl overflow-hidden relative cursor-pointer ${colSpan}`}
                style={{ height }}
                onClick={() => setSelectedItem(item)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ transform: `rotate(${rotation}deg)` }}
                  />
                ) : (
                  <video
                    src={item.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ transform: `rotate(${rotation}deg)` }}
                  />
                )}

                {/* Shining blue border */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-blue-400/30 animate-pulse" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-gray-300 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 rounded-full"
            onClick={() => setSelectedItem(null)}
          >
            <X size={32} />
          </button>

          {selectedItem.type === "image" ? (
            <img
              src={selectedItem.src}
              alt={selectedItem.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={selectedItem.src}
              controls
              autoPlay
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default Gallery;
