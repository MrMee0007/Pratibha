// import { Link } from "react-router-dom";
// import { Instagram, Linkedin } from "lucide-react";
// import logo from "@/assets/logo.png";

// const Footer = () => {
//   const quickLinks = [
//     { name: "Home", path: "/" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <footer className="bg-background border-t border-border/30">
//       <div className="container mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
//           {/* Logo */}
//           <div className="flex justify-center md:justify-start">
//             <img 
//               src={logo} 
//               alt="Pratibha Cinemakers" 
//               className="h-70 w-auto opacity-90"
//             />
//           </div>

//           {/* Quick Links */}
//           <div className="text-center md:text-left">
//             <h3 className="font-display text-3xl font-semibold mb-7 text-foreground">
//               Quick Links
//             </h3>
//             <nav className="flex flex-col gap-3">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className="text-muted-foreground hover:text-foreground transition-colors text-xl"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Stay Updated */}
//           <div className="text-center md:text-left">
//             <h3 className="font-display text-3xl font-semibold mb-6 text-foreground">
//               Stay Updated
//             </h3>
//             <div className="flex flex-col gap-4">
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors justify-center md:justify-start"
//               >
//                 <Instagram className="w-6 h-6" />
//                 <span className="text-xl">Instagram</span>
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors justify-center md:justify-start"
//               >
//                 <Linkedin className="w-6 h-" />
//                 <span className="text-xl">LinkedIn</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-border/30">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
//             <p>@2025 Pratibha TheCinemakers. All rights reserved</p>
//             <p>Website by Meezan</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import { Link } from "react-router-dom";
// import { Instagram, Linkedin } from "lucide-react";
// import logo from "@/assets/logo.png";

// const Footer = () => {
//   const quickLinks = [
//     { name: "Home", path: "/" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <footer className="bg-background border-t border-border/30">
//       <div className="container mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-7 gap-5 items-start">
          
//           {/* Logo (Left) */}
//           <div className="flex justify-center md:justify-start md:col-span-3">
//             <img
//               src={logo}
//               alt="Pratibha Cinemakers"
//               className="h-80 w-90 opacity-90"
//             />
//           </div>

//           {/* Quick Links (Shifted Right) */}
//           <div className="text-center md:text-left md:col-span-4 md:col-start-6">
//             <h3 className="font-display text-3xl font-semibold mb-7 text-foreground">
//               Quick Links
//             </h3>
//             <nav className="flex flex-col gap-3">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className="text-muted-foreground hover:text-foreground transition-colors text-xl"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Stay Updated (Far Right) */}
//           <div className="text-center md:text-left md:col-span-3 md:col-start-10">
//             <h3 className="font-display text-3xl font-semibold mb-6 text-foreground">
//               Stay Updated
//             </h3>
//             <div className="flex flex-col gap-4">
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors justify-center md:justify-start"
//               >
//                 <Instagram className="w-6 h-6" />
//                 <span className="text-xl">Instagram</span>
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors justify-center md:justify-start"
//               >
//                 <Linkedin className="w-6 h-6" />
//                 <span className="text-xl">LinkedIn</span>
//               </a>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-border/30">
//         <div className="container mx-auto px-6 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
//             <p>© 2025 Pratibha TheCinemakers. All rights reserved</p>
//             <p>Website by Meezan</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Link } from "react-router-dom";
import { Instagram,Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-background border-t border-border/30 overflow-hidden py-10">
      
     

      <div className="relative container mx- px-6">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-start">

          {/* LOGO */}
          <div className="relative flex justify-center md:justify-center md:col-span-3">
            <img
              src={logo}
              alt="Pratibha Cinemakers"
              className="relative h-40 md:h-60 w-auto opacity-95"
            />
            <p className="absolute bottom-0 text-xl text-muted-foreground mt-2">
              Pratibha TheCinemakers
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center md:text-left md:col-span-4 md:col-start-6">
            <h3 className="text-3xl font-semibold mb-7 text-foreground">
              Quick Links
            </h3>

            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xl text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* SOCIAL */}
          <div className="text-center md:text-left md:col-span-3 md:col-start-10 mt-10 md:mt-0">
            <h3 className="text-3xl font-semibold mb-6 text-foreground">
              Stay Updated
            </h3>

            <div className="flex flex-col gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xl text-muted-foreground hover:text-foreground transition-colors justify-center md:justify-start"
              >
                <Instagram className="w-6 h-6" />
                Instagram
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xl text-muted-foreground hover:text-foreground transition-colors justify-center md:justify-start"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-border/30 mt-16">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Pratibha TheCinemakers. All rights reserved</p>
            <p>Website by Meezan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
