import { motion } from "framer-motion";
import { useState } from "react";

const TeamCategoryGrid = ({ title, members = [], categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.key);

  const filteredMembers = members.filter(
    (m) => m.category === activeCategory
  );

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {title}
          </h2>
          <div className="w-14 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* 🔴 Category Badges (Founder / Advisor etc.) */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`
                px-5 py-1.5 rounded-full text-sm font-semibold
                transition-all duration-300
                ${
                  activeCategory === cat.key
                    ? "bg-red-600 text-white shadow-md"
                    : "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
            gap-4 md:gap-6
            justify-items-center
          "
        >
          {filteredMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="w-full max-w-[200px] text-center"
            >
              {/* Image */}
              <div className="aspect-square rounded-xl overflow-hidden bg-muted mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full h-full object-cover
                    grayscale hover:grayscale-0
                    transition-all duration-500
                    hover:scale-105
                  "
                />
              </div>

              {/* Name */}
              <h3 className="font-semibold text-base">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-muted-foreground">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TeamCategoryGrid;
