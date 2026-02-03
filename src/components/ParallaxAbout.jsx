import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Camera,
  Film,
  Video,
  Sparkles,
} from "lucide-react";
import { Image12 } from "@/assets/assets";

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="group p-6 rounded-2xl bg-card/80 backdrop-blur border border-border
      hover:border-primary/50 shadow-soft hover:shadow-elevated transition-all duration-500"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20
        flex items-center justify-center group-hover:scale-110 transition">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const ParallaxAbout = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-gradient-to-br from-background via-muted/40 to-background overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div style={{ y: imageY }}>
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-elevated"
              style={{ rotate: imageRotate, scale: imageScale }}
            >
              <img
                src={Image12}
                alt="Creative videography team"
                className="w-full h-[500px] object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/30" />

              {/* Frame */}
              <div className="absolute inset-4 border border-white/20 rounded-2xl pointer-events-none" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-8 -right-8 p-6 bg-card border border-border rounded-2xl shadow-elevated"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
            >
              <div className="text-4xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Projects Shot</div>
            </motion.div>

            {/* Floating icon */}
            <motion.div
              className="absolute -top-6 -left-6 w-20 h-20 rounded-full
              bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-glow"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-9 h-9 text-white" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <div ref={textRef}>
            <motion.span
              className="inline-block px-4 py-2 mb-4 text-xs uppercase tracking-widest
              bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-primary rounded-full"
              initial={{ opacity: 0, x: -20 }}
              animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            >
              Who We Are
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            >
              Storytelling Through{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Motion & Vision
              </span>
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            >
              Our Videography Club is a collective of creators who turn ideas
              into cinematic experiences — from concept to final cut.
            </motion.p>

            <motion.div
              className="flex gap-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            >
              {["15+", "50+", "200+"].map((val, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-primary">{val}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Years • Members • Videos
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          <FeatureCard
            icon={Camera}
            title="Cinematic Shooting"
            description="Professional camera techniques and creative framing."
            delay={0}
          />
          <FeatureCard
            icon={Film}
            title="Creative Direction"
            description="Storyboarding, lighting, and artistic vision."
            delay={0.1}
          />
          <FeatureCard
            icon={Video}
            title="Post Production"
            description="Editing, color grading, and sound design."
            delay={0.2}
          />
          <FeatureCard
            icon={Sparkles}
            title="Visual Identity"
            description="Brand films, reels, and digital storytelling."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default ParallaxAbout;
