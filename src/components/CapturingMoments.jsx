import { Play } from "lucide-react";

const features = [
  {
    id: "dQw4w9WgXcQ",
    title: "AUTHENTIC STORYTELLING",
    description: "We focus on capturing genuine moments that tells the story behind every event, making each clip a meaningful memory.",
  },
  {
    id: "jNQXAC9IVRw",
    title: "PERSONALIZED APPROACH",
    description: "We start with a conversation to fully understand your vision, ensuring the photos truly reflect your style and the essence of your event.",
  },
  {
    id: "9bZkp7q19f0",
    title: "FLEXIBLE AND RELIABLE",
    description: "We focus on capturing genuine moments that tells the story behind every event, making each clip a meaningful memory.",
  },
];

const CapturingMoments = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white font-heading text-4xl md:text-4xl lg:text-5xl font-black text-foreground uppercase tracking-wide leading-tight mb-6">
          Capturing Moments,<br />
          Creating Lasting<br />
          Impressions
        </h2>
        
        {/* Subtitle */}
        <p className="text-white/70 text-xl md:text max-w-2xl mx-auto mb-16">
          Pratibha believes in the power of storytelling through Cinematography. 
          Each Clip is a reflection of the emotion and atmosphere of the event.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center">
              {/* Video Thumbnail */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 group cursor-pointer">
                <img
                  src={`https://img.youtube.com/vi/${feature.id}/maxresdefault.jpg`}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white font-heading text-3xl font-bold text-foreground uppercase tracking-wide mb-3 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-foreground/60 - text-sm leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapturingMoments;