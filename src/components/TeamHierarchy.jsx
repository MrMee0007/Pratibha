import { motion } from "framer-motion";
import { teamMembers } from "../components/Team/TeamData";

const TeamHierarchy = () => {
  const level1 = teamMembers.filter(m => m.level === 1);
  const level2 = teamMembers.filter(m => m.level === 2);
  const level3 = teamMembers.filter(m => m.level === 3);
  const level4 = teamMembers.filter(m => m.level === 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const TeamCard = ({ member, size = "normal" }) => {
    const sizeClasses = {
      large: "p-8",
      normal: "p-6",
      small: "p-5",
    };

    const imageSizes = {
      large: "h-36 w-36",
      normal: "h-32 w-32",
      small: "h-28 w-28",
    };

    return (
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -12, scale: 1.03 }}
        className="group relative"
      >
        <div
          className={`relative flex flex-col items-center rounded-2xl border-2 border-border bg-card ${sizeClasses[size]} shadow-elevated`}
        >
          <motion.div
            className={`mb-4 ${imageSizes[size]} overflow-hidden rounded-full border-2 border-border`}
            whileHover={{ rotate: [0, -3, 3, 0] }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {member.coRole && (
            <span className="mb-2 rounded-full border px-3 py-0.5 text-xs text-muted-foreground">
              {member.coRole}
            </span>
          )}

          <h3 className="text-lg font-semibold">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      id="team"
      className="min-h-screen bg-background px-6 py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="mx-auto max-w-7xl" variants={containerVariants}>
        <h2 className="mb-20 text-center text-5xl font-semibold">
          Meet the <span className="text-muted-foreground">Visionaries</span>
        </h2>

        <div className="mb-16 flex justify-center gap-8">
          {level1.map(m => (
            <TeamCard key={m.id} member={m} size="large" />
          ))}
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {level2.map(m => (
            <TeamCard key={m.id} member={m} />
          ))}
        </div>

        <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {level3.map(m => (
            <TeamCard key={m.id} member={m} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {level4.map(m => (
            <TeamCard key={m.id} member={m} size="small" />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default TeamHierarchy;
