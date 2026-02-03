// import { useRef, useState } from "react";

// const VideoCard = ({
//   videoSrc,
//   posterImage,
//   title,
//   subtitle,
//   size = "medium",
// }) => {
//   const videoRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);

//   const sizeClasses = {
//     small: "col-span-1",
//     medium: "col-span-1 md:col-span-1",
//     large: "col-span-1 md:col-span-2",
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     if (videoRef.current) {
//       videoRef.current.play().catch((err) =>
//         console.log("Video play failed:", err)
//       );
//     }
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//     }
//   };

//   return (
//     <div
//       className={`group relative overflow-hidden bg-card ${
//         sizeClasses[size]
//       } cursor-pointer`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden">
//         <video
//           ref={videoRef}
//           poster={posterImage}
//           loop
//           muted
//           playsInline
//           className={`w-full h-full object-cover transition-transform duration-700 ${
//             isHovered ? "scale-110" : "scale-100"
//           }`}
//         >
//           <source src={videoSrc} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       <div
//         className={`absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-500 ${
//           isHovered ? "opacity-70" : "opacity-80"
//         }`}
//       />

//       <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-transform duration-500">
//         {subtitle && (
//           <p className="text-xs md:text-sm text-muted-foreground mb-2 tracking-wider">
//             {subtitle}
//           </p>
//         )}
//         <h3 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight">
//           {title}
//         </h3>
//       </div>

//       {/* Play indicator */}
//       <div
//         className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
//           isHovered ? "opacity-0 scale-75" : "opacity-100 scale-100"
//         }`}
//       >
//         <div className="w-0 h-0 border-l-[12px] border-l-foreground border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
//       </div>
//     </div>
//   );
// };

// export default VideoCard;

import { useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
} from "lucide-react";

const VideoCard = ({
  videoSrc,
  posterImage,
  title,
  subtitle,
  size = "medium",
}) => {
  const videoRef = useRef(null);
  const fullscreenVideoRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const sizeClasses = {
    small: "col-span-1",
    medium: "col-span-1 md:col-span-1",
    large: "col-span-1 md:col-span-2",
    tall: "col-span-1 row-span-2",
    wide: "col-span-1 md:col-span-2 lg:col-span-3",
    featured: "col-span-1 md:col-span-2 row-span-2",
  };

  const heightClasses = {
    small: "aspect-[4/5] md:aspect-auto md:h-[400px]",
    medium: "aspect-[4/5] md:aspect-auto md:h-[500px]",
    large: "aspect-[4/5] md:aspect-auto md:h-[500px]",
    tall: "aspect-[3/5] md:aspect-auto md:h-full min-h-[500px]",
    wide: "aspect-[16/9] md:aspect-auto md:h-[400px]",
    featured: "aspect-square md:aspect-auto md:h-full min-h-[500px]",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch((err) =>
        console.log("Video play failed:", err)
      );
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && !isFullscreen) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e) => {
    e.stopPropagation();

    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const openFullscreen = (e) => {
    e.stopPropagation();
    setIsFullscreen(true);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div
        className={`group relative overflow-hidden bg-card ${sizeClasses[size]} cursor-pointer rounded-lg`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={openFullscreen}
      >
        <div className={`${heightClasses[size]} overflow-hidden`}>
          <video
            ref={videoRef}
            poster={posterImage}
            loop
            muted={isMuted}
            playsInline
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          className={`absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-60" : "opacity-80"
          }`}
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          {subtitle && (
            <p className="text-xs md:text-sm text-primary mb-2 tracking-[0.3em] uppercase font-medium">
              {subtitle}
            </p>
          )}
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight">
            {title}
          </h3>
        </div>

        {/* Hover Controls */}
        <div
          className={`absolute bottom-6 right-6 flex items-center gap-2 transition-all duration-300 ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-foreground/20 backdrop-blur-md flex items-center justify-center hover:bg-foreground/40 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-foreground" />
            ) : (
              <Play className="w-4 h-4 text-foreground ml-0.5" />
            )}
          </button>

          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-foreground/20 backdrop-blur-md flex items-center justify-center hover:bg-foreground/40 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-foreground" />
            ) : (
              <Volume2 className="w-4 h-4 text-foreground" />
            )}
          </button>

          <button
            onClick={openFullscreen}
            className="w-10 h-10 rounded-full bg-foreground/20 backdrop-blur-md flex items-center justify-center hover:bg-foreground/40 transition-colors"
          >
            <Maximize2 className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Play Indicator */}
        <div
          className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-0 scale-75" : "opacity-100 scale-100"
          }`}
        >
          <Play className="w-5 h-5 text-foreground ml-0.5" />
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>

          <div
            className="w-full max-w-6xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={fullscreenVideoRef}
              src={videoSrc}
              poster={posterImage}
              controls
              autoPlay
              muted={isMuted}
              className="w-full rounded-lg shadow-2xl"
            />

            <div className="mt-6 text-center">
              {subtitle && (
                <p className="text-sm text-primary tracking-[0.3em] uppercase mb-2">
                  {subtitle}
                </p>
              )}
              <h2 className="text-4xl md:text-6xl font-black text-foreground">
                {title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
