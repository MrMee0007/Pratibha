import { video1 } from "@/assets/assets";
import heroImage from "@/assets/Bg5.jpeg";
import { useRef, useState } from "react";

const HeroSectionPortfolio = () => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={heroImage}
          onLoadedData={() => setIsLoaded(true)}
          className="w-full h-full object-cover"
        >
          <source
            src={video1}
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="relative h-full flex items-end px-6 pb-20 md:px-12 md:pb-32 pt-24">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground mb-6 leading-none">
            REDEFINING
            <br />
            Emotions
          </h2>
         
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPortfolio;
