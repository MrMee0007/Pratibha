import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gallery2 from "@/assets/Bg2.jpeg";
import gallery6 from "@/assets/Bg4.jpeg";
import { BackgroundImage3, BackgroundImage9 } from "@/assets/assets";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on images
      imageRefs.current.forEach((img, index) => {
        if (img) {
          gsap.fromTo(
            img,
            { y: index % 2 === 0 ? 100 : -100 },
            {
              y: index % 2 === 0 ? -50 : 50,
              scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
      });

      // Text reveal
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
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
      className="py-24 md:py-32 bg-black"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative h-[500px] lg:h-[600px]">
            <div
              ref={(el) => (imageRefs.current[0] = el)}
              className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20"
            >
              <img
                src={BackgroundImage9}
                alt="Featured project"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div
              ref={(el) => (imageRefs.current[1] = el)}
              className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border-4 border-gray-800"
            >
              <img
                src={BackgroundImage3}
                alt="Featured project"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <h2 className="font-display text-4xl md:text-6xl mb-6 text-white">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Explore the essence of my work through a selection of standout
              projects that capture the energy and atmosphere of live events.
              Each image tells a story, showcasing the vibrancy of festivals and
              the emotions of attendees.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              From intimate gatherings to major festivals like Sziget, AMF -
              Amsterdam Music Festival, Pinkpop, Defqon.1, and Bospop, I've had
              the opportunity to capture the raw moments that define each
              experience.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Festivals", "Concerts", "Events", "Portraits"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-blue-900/20 text-blue-400 border border-blue-500/30 text-sm font-medium hover:bg-blue-800/30 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
