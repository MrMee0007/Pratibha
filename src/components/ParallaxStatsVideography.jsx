import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Film, Users, Award } from "lucide-react";

// Animated counter
const AnimatedCounter = ({ value, suffix = "", duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(value * easeOut));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    } else {
      setDisplayValue(0); // reverse animation
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

// Tilted & transparent stat card
const StatCard = ({ icon: Icon, value, suffix, label, delay, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  
  // Alternate tilt: even = left, odd = right
  const tilt = index % 2 === 0 ? -5 : 5;

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50, rotate: tilt, scale: 0.95 }}
      animate={isInView ? { opacity: 0.85, y: 0, rotate: tilt, scale: 1 } : { opacity: 0, y: 50, rotate: tilt, scale: 0.95 }}
      transition={{ duration: 0.7, delay, type: "spring", stiffness: 100 }}
    >
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-purple-800/20 backdrop-blur-md overflow-hidden shadow-elevated">
        {/* Sparkles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 80}%`, background: "linear-gradient(45deg, #ff6ec7, #9d00ff)" }}
            animate={{
              x: [0, Math.random() * 20 - 10, 0],
              y: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ repeat: Infinity, duration: 2 + Math.random() * 2, ease: "easeInOut", repeatType: "loop", delay: Math.random() * 2 }}
          />
        ))}

        <div className="relative z-10">
          <div className="w-16 h-16 mb-6 rounded-2xl bg-indigo-800/20 flex items-center justify-center">
            <Icon className="w-8 h-8 text-purple-400" />
          </div>
          
          <div className="font-display text-5xl md:text-6xl font-bold text-foreground mb-2">
            <AnimatedCounter value={value} suffix={suffix} />
          </div>
          
          <div className="text-muted-foreground font-body text-sm uppercase tracking-widest">{label}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Parallax stats section for Videography Club
const ParallaxStatsVideography = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const stats = [
    { icon: Camera, value: 120, suffix: "+", label: "Projects Filmed" },
    { icon: Film, value: 45, suffix: "+", label: "Editing Sessions" },
    { icon: Users, value: 50, suffix: "+", label: "Active Members" },
    { icon: Award, value: 15, suffix: "", label: "Awards Won" },
  ];

  return (
    <section ref={containerRef} className="relative py-32 bg-background overflow-hidden">
      {/* Sparkles in background */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: "linear-gradient(45deg, #ff6ec7, #9d00ff, #ff00ff)"
          }}
          animate={{
            x: [0, Math.random() * 30 - 15, 0],
            y: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 1, 0],
            scale: [0.3, 1, 0.3]
          }}
          transition={{ repeat: Infinity, duration: 3 + Math.random() * 3, ease: "easeInOut", repeatType: "loop", delay: Math.random() * 2 }}
        />
      ))}

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            className="inline-block px-4 py-2 mb-4 text-xs font-medium tracking-widest uppercase bg-purple-800/10 text-purple-500 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Club Achievements
          </motion.span>

          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Videography <span className="text-gradient-purple">Club Stats</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-muted-foreground font-body text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Numbers that highlight the creativity, dedication, and growth of our club members.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} delay={i * 0.15} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxStatsVideography;
