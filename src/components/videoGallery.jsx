import { useState } from "react";
import { Play } from "lucide-react";

const youtubeVideos = [
  { id: "dQw4w9WgXcQ", title: "Video 1" },
  { id: "jNQXAC9IVRw", title: "Video 2" },
  { id: "9bZkp7q19f0", title: "Video 3" },
  { id: "kJQP7kiw5Fk", title: "Video 4" },
  { id: "RgKAFK5djSk", title: "Video 5" },
];

const VideoGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeVideo = youtubeVideos[activeIndex];

  return (
    <section className="bg-black py-16 px-6 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">

          {/* Main Video */}
          <div className="relative flex-1 aspect-video rounded-lg overflow-hidden hover:">
            {isPlaying ? (
              <iframe
                key={activeVideo.id}
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={activeVideo.title}
                className="w-full h-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                aria-label="Play video"
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full group"
              >
                <img
                  src={`https://img.youtube.com/vi/${activeVideo.id}/hqdefault.jpg`}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
                  <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                  </div>
                </div>
              </button>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-3 lg:w-48 overflow-x-auto">
            {youtubeVideos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPlaying(false);
                }}
                className={`relative w-40 lg:w-full aspect-video rounded-lg overflow-hidden transition
                  ${index === activeIndex
                    ? "ring-2 ring-red-500"
                    : "opacity-70 hover:opacity-100"}`}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-white" />
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
