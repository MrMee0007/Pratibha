import { Link } from "react-router-dom"; // adjust path if needed
import { BackgroundImage2 } from "@/assets/assets";

const HeroAbout = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundImage2})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-up">
          
          <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-6">
            Pratibha - The Cinemakers
          </p>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Crafting Stories
            <br />
            <span className="text-gradient-gold">That Inspire</span>
          </h1>

           <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We bring your vision to life through exceptional cinematography,
            creative direction, and world-class production.
          </p>
         

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-purple-500 text-background font-medium hover:bg-purple-600 transition-all duration-300"
            >
              View Our Work
            </Link>

           
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
     

    </section>
  );
};

export default HeroAbout;
