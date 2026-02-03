import { motion } from "framer-motion";
import portrait from "@/assets/Photo3.jpeg";

const ProfileCard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative w-full overflow-hidden bg-background py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background decorations */}
      <motion.div
        className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-foreground/3 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="absolute -left-32 bottom-0 h-56 w-56 rounded-full bg-muted-foreground/5 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      />

      <div className="relative z-10 flex justify-center px-6 lg:px-12">
        <motion.div
          className="relative w-full max-w-4xl overflow-hidden rounded-3xl border-2 border-border bg-card p-8 shadow-elevated lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-4 rounded-2xl border border-border/50" />

          <div className="relative grid gap-8 lg:grid-cols-2">
            {/* Image */}
            <motion.div
              className="flex items-center justify-center"
              variants={imageVariants}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 rounded-full border border-border"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.div
                  className="absolute -inset-8 rounded-full border border-border/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />

                <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-border shadow-elevated lg:h-72 lg:w-72">
                  <motion.img
                    src={portrait}
                    alt="Professional portrait"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/20 to-transparent" />
                </div>

                <motion.div
                  className="absolute inset-0 -z-10 rounded-full bg-foreground/5 blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="flex flex-col justify-center space-y-5"
              variants={containerVariants}
            >
              {/* Tags */}
              <motion.div className="flex flex-wrap gap-2" variants={tagVariants}>
                {["Co-Founder", "Creative Director", "Lead Strategist"].map(
                  (tag, index) => (
                    <motion.span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  )
                )}
              </motion.div>

              {/* Name */}
              <motion.h1
                className="text-3xl font-semibold md:text-4xl lg:text-5xl"
                variants={textVariants}
              >
                <span className="block">Alexandra</span>
                <span className="block text-muted-foreground">Chen</span>
              </motion.h1>

              <motion.div
                className="h-0.5 w-20 origin-left bg-gradient-to-r from-foreground to-muted-foreground"
                variants={lineVariants}
              />

              <motion.p
                className="max-w-sm text-sm text-muted-foreground md:text-base"
                variants={textVariants}
              >
                Award-winning creative director with over a decade of experience
                crafting memorable brand experiences at the intersection of
                design, technology, and human connection.
              </motion.p>

              {/* CTA */}
              <motion.div className="flex gap-3 pt-1" variants={textVariants}>
                <motion.button
                  className="rounded-full border-2 border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                </motion.button>

                <motion.button
                  className="rounded-full border-2 border-border px-5 py-2.5 text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Portfolio
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProfileCard;
