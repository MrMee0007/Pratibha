import React from "react";
import { Play, ArrowRight } from "lucide-react";

const MediaContentSection = ({
  title = "Our Team",
  subtitle = "Meet the Team",
  description = "We are a team of cinematographers passionate about telling stories through every frame. With creativity and precision, we turn moments into visuals that move, inspire, and leave a lasting impact.",
  imageSrc,
  imageAlt = "Team Photo",
  reversed = false,
}) => {
  return (
    <section className="py-16 md:py-24 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reversed ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Content Side */}
          <div className={`space-y-6 ${reversed ? "lg:col-start-2" : ""}`}>
            {subtitle && (
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-blue-400 bg-blue-900/50 px-4 py-1.5 rounded-full">
                {subtitle}
              </span>
            )}

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-white">
              {title.split(" ").map((word, i, arr) => (
                <span key={i}>
                  {i === arr.length - 1 ? (
                    <span className="font-bold text-blue-400">{word}</span>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium transition hover:bg-blue-500">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="group inline-flex items-center px-6 py-3 rounded-lg border border-gray-600 text-white font-medium transition hover:bg-gray-800">
                <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6 border-t border-gray-700">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">50+</p>
                <p className="text-sm text-gray-400">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">95%</p>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">4+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className={`relative ${reversed ? "lg:col-start-1" : ""}`}>
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 rounded-3xl blur-2xl opacity-60" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />

            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-20 h-20 bg-blue-600/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-500 cursor-pointer hover:bg-blue-500">
                    <Play
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 md:right-auto md:-left-8 bg-gray-800 border border-gray-600 backdrop-blur-xl rounded-xl p-4 shadow-xl transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Trusted by</p>
                    <p className="text-2xs text-gray-400">
                      Everyone
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MediaContentSection;
