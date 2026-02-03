// import { useRef } from "react";
// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import {
//   Camera,
//   Film,
//   Video,
//   Clapperboard,
//   MonitorPlay
// } from "lucide-react";

// const steps = [
//   {
//     icon: Camera,
//     title: "Concept & Storyboarding",
//     description:
//       "Every project begins with brainstorming ideas, scripting, and visual storyboarding.",
//     color: "bg-accent",
//   },
//   {
//     icon: Film,
//     title: "Pre-Production Planning",
//     description:
//       "Location scouting, equipment setup, crew assignments, and shoot scheduling.",
//     color: "bg-sky",
//   },
//   {
//     icon: Video,
//     title: "Filming & Direction",
//     description:
//       "Capturing cinematic shots with creative camera movements and lighting.",
//     color: "bg-wheat",
//   },
//   {
//     icon: Clapperboard,
//     title: "Editing & Post-Production",
//     description:
//       "Color grading, sound design, transitions, and storytelling refinement.",
//     color: "bg-forest",
//   },
//   {
//     icon: MonitorPlay,
//     title: "Screening & Publishing",
//     description:
//       "Final review, club screenings, social media releases, and festival submissions.",
//     color: "bg-soil",
//   },
// ];

// const TimelineStep = ({ step, index, totalSteps }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const isEven = index % 2 === 0;

//   return (
//     <motion.div
//       ref={ref}
//       className={`flex items-center gap-8 ${
//         isEven ? "flex-row" : "flex-row-reverse"
//       }`}
//       initial={{ opacity: 0, x: isEven ? -100 : 100 }}
//       animate={isInView ? { opacity: 1, x: 0 } : {}}
//       transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
//     >
//       {/* Content card */}
//       <motion.div
//         className={`flex-1 p-6 md:p-8 rounded-2xl bg-card shadow-soft border border-border ${
//           isEven ? "text-right" : "text-left"
//         }`}
//         whileHover={{ scale: 1.02, y: -5 }}
//         transition={{ type: "spring", stiffness: 300 }}
//       >
//         <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
//           {step.title}
//         </h3>
//         <p className="text-muted-foreground">{step.description}</p>
//       </motion.div>

//       {/* Center icon */}
//       <motion.div
//         className="relative z-10 flex-shrink-0"
//         whileHover={{ scale: 1.2, rotate: 360 }}
//         transition={{ type: "spring", stiffness: 200 }}
//       >
//         <div
//           className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${step.color} flex items-center justify-center shadow-elevated`}
//         >
//           <step.icon className="w-8 h-8 md:w-10 md:h-10 text-cream" />
//         </div>

//         {/* Connecting line */}
//         {index < totalSteps - 1 && (
//           <motion.div
//             className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-20 md:h-28 bg-gradient-to-b from-border to-transparent"
//             initial={{ scaleY: 0 }}
//             animate={isInView ? { scaleY: 1 } : {}}
//             transition={{ duration: 0.5, delay: 0.5 }}
//             style={{ transformOrigin: "top" }}
//           />
//         )}
//       </motion.div>

//       {/* Spacer */}
//       <div className="flex-1" />
//     </motion.div>
//   );
// };

// const ProcessTimeline = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: true, margin: "-100px" });

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative py-32 bg-muted/30 overflow-hidden"
//     >
//       {/* Background glow */}
//       <motion.div
//         className="absolute top-1/4 left-0 w-1/2 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2"
//         animate={{ x: ["-50%", "-40%", "-50%"], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />

//       <div className="container relative z-10">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <motion.span
//             className="inline-block px-4 py-2 mb-4 text-xs font-medium tracking-widest uppercase bg-forest/10 text-forest rounded-full"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//           >
//             Our Workflow
//           </motion.span>

//           <motion.h2
//             className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.1 }}
//           >
//             From Idea to <span className="text-gradient-forest">Screen</span>
//           </motion.h2>

//           <motion.p
//             className="max-w-2xl mx-auto text-muted-foreground text-lg"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.2 }}
//           >
//             The Videography Club follows a structured yet creative process to
//             bring stories to life.
//           </motion.p>
//         </div>

//         {/* Timeline */}
//         <div className="max-w-4xl mx-auto space-y-12 md:space-y-20">
//           {steps.map((step, index) => (
//             <TimelineStep
//               key={index}
//               step={step}
//               index={index}
//               totalSteps={steps.length}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessTimeline;


import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Camera,
  Film,
  Video,
  Clapperboard,
  MonitorPlay,
} from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Concept & Storyboarding",
    description:
      "Every project begins with brainstorming ideas, scripting, and visual storyboarding.",
    color: "from-pink-500 to-orange-400",
  },
  {
    icon: Film,
    title: "Pre-Production Planning",
    description:
      "Location scouting, equipment setup, crew assignments, and shoot scheduling.",
    color: "from-sky-500 to-cyan-400",
  },
  {
    icon: Video,
    title: "Filming & Direction",
    description:
      "Capturing cinematic shots with creative camera movements and lighting.",
    color: "from-emerald-500 to-lime-400",
  },
  {
    icon: Clapperboard,
    title: "Editing & Post-Production",
    description:
      "Color grading, sound design, transitions, and storytelling refinement.",
    color: "from-purple-500 to-indigo-400",
  },
  {
    icon: MonitorPlay,
    title: "Screening & Publishing",
    description:
      "Final review, club screenings, social media releases, and festival submissions.",
    color: "from-yellow-400 to-amber-500",
  },
];

const TimelineStep = ({ step, index, totalSteps }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-120px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-8 ${
        isEven ? "flex-row" : "flex-row-reverse"
      }`}
      initial={{ opacity: 0, x: isEven ? -120 : 120 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: isEven ? -120 : 120 }
      }
      transition={{ duration: 0.7, type: "spring" }}
    >
      {/* Content Card */}
      <motion.div
        className={`flex-1 p-6 md:p-8 rounded-2xl bg-card border border-border shadow-soft
        ${isEven ? "text-right" : "text-left"}
        hover:border-transparent hover:bg-gradient-to-br hover:from-white/5 hover:to-white/0`}
        whileHover={{ scale: 1.03, y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
        <p className="text-muted-foreground">{step.description}</p>
      </motion.div>

      {/* Icon with Glow */}
      <motion.div
        className="relative z-10 flex-shrink-0"
        animate={
          isInView
            ? { scale: 1, rotate: 0 }
            : { scale: 0.6, rotate: -180 }
        }
        transition={{ duration: 0.6 }}
      >
        {/* Glow */}
        <div
          className={`absolute inset-0 rounded-full blur-2xl opacity-40 bg-gradient-to-r ${step.color}`}
        />

        {/* Icon */}
        <div
          className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full 
          bg-gradient-to-r ${step.color}
          flex items-center justify-center shadow-elevated`}
        >
          <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>

        {/* Animated Line */}
        {index < totalSteps - 1 && (
          <motion.div
            className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-24
            bg-gradient-to-b from-primary/70 via-primary/40 to-transparent"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: "top" }}
          />
        )}
      </motion.div>

      <div className="flex-1" />
    </motion.div>
  );
};

const ProcessTimeline = () => {
  return (
    <section className="relative py-32 bg-muted/30 overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-xs uppercase tracking-widest
            bg-gradient-to-r from-emerald-400 to-cyan-400 text-black rounded-full">
            Our Workflow
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Screen
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            The Videography Club follows a creative yet professional workflow to
            produce cinematic stories.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-14 md:space-y-24">
          {steps.map((step, index) => (
            <TimelineStep
              key={index}
              step={step}
              index={index}
              totalSteps={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
