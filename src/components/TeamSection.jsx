import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Twitter, TwitterIcon } from "lucide-react";
import Image1 from "@/assets/TeamPic/Ayush Chaubey.jpeg";
import Image2  from "@/assets/TeamPic/Ayush Sharma.JPG";
import Image4 from "@/assets/TeamPic/Aashish Goyal.jpg";
import Image5 from "@/assets/TeamPic/Aayush Agarwal.jpg";
import Image6 from "@/assets/TeamPic/Anurag Tomar.jpg";
import Image7 from "@/assets/TeamPic/Jay Sharma.webp";
import Image8 from "@/assets/TeamPic/Krishna Soni.jpg";
import Image9 from "@/assets/TeamPic/Parth Gupta.png";
import Image10 from "@/assets/TeamPic/Raghav Agarwal.jpg";
import Image11 from "@/assets/TeamPic/Juhi Bharti.jpg";
import Image12 from "@/assets/TeamPic/Manish Rajput.jpg";
import Image13 from "@/assets/TeamPic/Thakur Vivek Singh.jpg";
import Image14 from "@/assets/TeamPic/Sriyank Verma.jpg";
import Image15 from "@/assets/TeamPic/Ronak Porwal.jpg";
import Image16 from "@/assets/TeamPic/Uma Sharma.jpg";
import Image17 from "@/assets/TeamPic/Vaishnavi Parashar .jpg";
import Image18 from "@/assets/TeamPic/Vivek Prajapati.jpg";
import Image19 from "@/assets/TeamPic/Ayushka Shakya.jpeg";
import Image20 from "@/assets/TeamPic/Unnati Lakhwani.jpeg";

const categoryTitles = {
  founders: "Founders",
  leaders: "Leadership",
  mentors: "Advisors",
  team: "Core Team",
  members: "Members",
  alumni: "Alumni",
};

const categoryDescriptions = {
  founders: "Visionaries who laid the foundation",
  leaders: "People shaping the vision and direction",
  mentors: "Guiding experience & industry expertise",
  team: "The core force behind execution",
  members: "Active contributors and collaborators",
  alumni: "Those who helped build the journey",
};

const teamMembers = [
  // Founders
  {
    name: "Amit Kushwaha",
    role: "Founder",
    image: Image11,
    category: "founders",
  },
  {
    name: "Ashish Goyal",
    role: "Co-Founder",
    image: Image4,
    category: "founders",
  },
  {
    name: "Parth Agnihotri",
    role: "Founding Member",
    image: "",
    category: "founders",
  },
  {
    name: "Krishna Soni",
    role: "Founding Member",
    image: Image8,
    category: "founders",
  },
  {
    name: "Prabhat Uphadhyay",
    role: "Founding Member",
    image: "",
    category: "founders",
  },
  {
    name: "Adarsh Sikarwar",
    role: "Founding Member",
    image: "",
    category: "founders",
  },
  {
    name: "Anurag Tomar",
    role: "Founding Member",
    image: Image6,
    category: "founders",
  },
  {
    name: "Shalini",
    role: "Founding Member",
    image: "",
    category: "founders",
  },
  {
    name: "Devansh Sharma",
    role: "Founding Member",
    image: "",
    category: "founders",
  },
  {
    name: "Swasti Jain",
    role: "Founding Member",
    image: "",
    category: "founders",
  },
  {
    name: "Unnati Lakhwani",
    role: "Founding Member",
    image: Image20,
    category: "founders",
  },
  // Leadership
  {
    name: "Ayush Chaubey",
    role: "President",
    image: Image1,
    category: "founders",
    category: "leaders",
  },
  {
    name: "Parth Agnihotri",
    role: "Vice - President",
    image: "",
    category: "founders",
    category: "leaders",
  },
  {
    name: "Abhishek Yadav",
    role: "General Secretary",
    image: "",
    category: "leaders",
  },
  {
    name: "Krishna Soni",
    role: "Vice - President",
    image: "Image8",
    category: "leaders",
  },
  // Mentors
  {
    name: "Anurag Tomar",
    role: "Advisor",
    image: Image6,
    category: "mentors",
    highlight: true,
  },
  {
    name: "Adarsh Sikarwar",
    role: "Advisor",
    image: "",
    category: "mentors",
  },
  {
    name: "Ansh Garg",
    role: "Advisor",
    image: "",
    category: "mentors",
  },
  // Team
  {
    name: "Ronak Porwal",
    role: "Technical Head",
    image: Image15,
    category: "team",
  },
  {
    name: "Manish Rajput",
    role: "Dy. Technical Head",
    image: Image12,
    category: "team",
  },
  {
    name: "Bhavya Singh",
    role: "Creative Head",
    image: "",
    category: "team",
  },
  {
    name: "Sonal Raj",
    role: "Creative Co-Head",
    image: "",
    category: "team",
  },
  {
    name: "Shourya Porwal",
    role: "PR Head",
    image: "",
    category: "team",
  },
  {
    name: "Aayush Agarwal",
    role: "PR Co-Head",
    image: Image5,
    category: "team",
  },
  {
    name: "Yashika Soam",
    role: "Design Head",
    image: "",
    category: "team",
  },
  {
    name: "Mitali Singh",
    role: "Design Co-Head",
    image: "",
    category: "team",
  },
  {
    name: "Uma Sharma",
    role: "Design Co-Head",
    image: Image16,
    category: "team",
  },
  {
    name: "Yatin Rao",
    role: "Videography Head",
    image: "",
    category: "team",
  },
  {
    name: "Yug Gupta",
    role: "Treasurer",
    image: "",
    category: "team",
  },
  {
    name: "Deepali Jha",
    role: "Content Head",
    image: "",
    category: "team",
  },
  {
    name: "Anushika Khandelwal",
    role: "Content Co-Head",
    image: "",
    category: "team",
  },
  {
    name: "Ayush Sharma",
    role: "Event Head",
    image: Image2,
    category: "team",
  },
  {
    name: "Khushi Sharma",
    role: "Event Co-Head",
    image: "",
    category: "team",
  },
  {
    name: "Jay Sharma",
    role: "Alumni Co-ordinator",
    image: Image7,
    category: "team",
  },
  {
    name: "Raghav Agarwal",
    role: "Dy. Alumni Co-ordinator",
    image: Image10,
    category: "team",
  },

  // Members



  // Alumni
  {
    name: "Prabhat Uphadhyay",
    role: "Ex-President",
    image: "",
    category: "alumni",
    date: "2023-2024",
  },
  {
    name: "Shalini",
    role: "Ex-Vice President",
    image: "",
    category: "alumni",
    date: "2023-2024",
  },
  {
    name: "Devansh Sharma",
    role: "Ex-Advisor",
    image: "",
    category: "alumni",
    date: "2024-2025",
  },
  {
    name: "Swasti Jain",
    role: "Vice - President",
    image: "",
    category: "alumni",
    date: "2024-2025",
  },
  {
    name: "Unnati Lakhwani",
    role: "Ex-General Secretary",
    image: Image20,
    category: "alumni",
    date: "2024-2025",
  },
];

const categories = [
   { key: "founders", label: "Founders" },
  { key: "leaders", label: "Leaders" },
  { key: "mentors", label: "Advisors" },
  { key: "team", label: "Team" },
  { key: "members", label: "Members" },
  { key: "alumni", label: "Alumni" },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState("founders");

  const filteredMembers = teamMembers.filter(
    (member) => member.category === activeCategory
  );

  return (
    
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
<motion.div
  key={activeCategory + "-heading"}
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="mb-6 mt-2 text-center"
>
  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
    {categoryTitles[activeCategory]}
  </h2>
    {/* Decorative line */}
  <div className="w-14 h-1 bg-primary rounded-full mx-auto mt-2" />
  <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
    {categoryDescriptions[activeCategory]}
  </p>


</motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        
        {/* Team Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative rounded-2xl p-4 transition-all duration-300 ${
                member.highlight
                  ? "bg-accent text-accent-foreground"
                  : "bg-card hover:shadow-lg"
              }`}
            >
              {/* Social Links for highlighted */}
              {member.highlight && (
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href="#"
                    className="p-1.5 rounded-full bg-accent-foreground/20 hover:bg-accent-foreground/30 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#"
                    className="p-1.5 rounded-full bg-accent-foreground/20 hover:bg-accent-foreground/30 transition-colors"
                  >
                    <TwitterIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Image */}
              {/* <div className="relative mb-4">
                <div
                  className={`aspect-square rounded-xl overflow-hidden ${
                    member.highlight ? "bg-accent-foreground/10" : "bg-muted"
                  }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div> */}
              <div className="relative mb-4 overflow-hidden rounded-xl">
  <div
    className={`aspect-square rounded-xl overflow-hidden ${
      member.highlight ? "bg-accent-foreground/10" : "bg-muted"
    }`}
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-500 transform group-hover:scale-110"
    />
  </div>
</div>

{/* Name + Role */}
<div className="text-center">
  {/* Name */}
  <h3
    className={`text-base md:text-lg font-bold mb-1 ${
      member.highlight ? "text-white" : "text-foreground"
    }`}
  >
    {member.name}
  </h3>

  {/* Role */}
  <p
    className={`text-sm md:text-base mb-1"text-gray-400"
    }`}
  >
    {member.role}
  </p>
  <p
    className={`text-sm md:text-base mb-1"text-gray-400"
    }`}
  >
    {member.date}
  </p>
</div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
