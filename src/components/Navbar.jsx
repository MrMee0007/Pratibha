
//     <nav class="w-full bg-black">
//   <div class="mx-auto max-w-7xl px-6">
//     <div class="flex h-20 items-center justify-between">

//       <div class="flex items-center gap-2">
//         <img src="/logo.svg" class="h-8 w-8" alt="Logo" />
//         <span class="text-white font-semibold tracking-wide">
//           Pratibha
//         </span>
//       </div>

//       <ul class=" text-white hidden md:flex items-center gap-10">
//         <li><a class="nav-link active" href="#">Home</a></li>
//         <li><a class="nav-link" href="#">Portfolio</a></li>
//         <li><a class="nav-link" href="#">Services</a></li>
//         <li><a class="nav-link" href="#">About</a></li>
//       </ul>

//       <div class=" bg-blue-400 border-8 flex items-center gap-3">
//         <button class="contact-btn">Contact</button>
//         <button class="icon-btn">↘</button>
//       </div>

//     </div>
//   </div>
// </nav>

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, ArrowUpRight } from "lucide-react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "Services", path: "/services" },
//     { name: "About", path: "/about" },
//     { name: "Team", path: "/team" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-2xl">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="flex h-24 items-center justify-between">

//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-3">
//             <img src="/logo.svg" alt="Logo" className="h-10 w-10" />
//             <span className="font-display text-2xl font-semibold tracking-wide text-white">
//               Pratibha
//             </span>
//           </Link>

//           {/* DESKTOP NAV */}
//           <ul className="hidden items-center gap-14 md:flex">
//             {navLinks.map((link) => (
//               <li key={link.name} className="group relative">
//                 <Link
//                   to={link.path}
//                   className="text-xl font-medium tracking-wide text-white/80 transition-all duration-300 hover:text-white"
//                 >
//                   {link.name}
//                 </Link>

//                 {/* Animated underline */}
//                 <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full" />

//                 {/* Soft glow */}
//                 <span className="absolute -inset-4 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 bg-white/5" />
//               </li>
//             ))}
//           </ul>

//           {/* DESKTOP ACTIONS */}
//           <div className="hidden items-center gap-4 md:flex">
//             <Link
//               to="/contact"
//               className="rounded-full border border-white/20 px-7 py-3 text-base font-semibold tracking-wide text-white transition hover:bg-white/10"
//             >
//               Contact
//             </Link>

//             <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:scale-110">
//               <ArrowUpRight size={20} />
//             </button>
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <X size={32} /> : <Menu size={32} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-500 ${
//           open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="bg-black/95 px-6 py-10 backdrop-blur-xl">
//           <ul className="flex flex-col items-center gap-8">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   to={link.path}
//                   onClick={() => setOpen(false)}
//                   className="text-3xl font-semibold tracking-wide text-white/90 transition hover:text-white"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div className="mt-12 flex justify-center">
//             <Link
//               to="/contact"
//               className="rounded-full bg-white px-10 py-4 text-lg font-semibold text-black"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
  ];

  const handleNavClick = () => {
    setOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-24 items-center justify-between">

          {/* LOGO */}
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="h-20 md:h-28 w-auto" />
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.name} className="group relative">
                <Link
                  to={link.path}
                  onClick={handleNavClick}
                  className={`text-lg md:text-xl font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>

                {/* Animated underline */}
                <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full" />

                {/* Soft glow */}
                <span className="absolute -inset-2 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20 bg-gradient-to-r from-blue-500 to-purple-500/10" />
              </li>
            ))}
          </ul>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Contact
            </Link>

            <Link to="/contact" onClick={handleNavClick}>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-md transition transform hover:scale-110 hover:shadow-lg">
              <ArrowUpRight size={20} />
            </button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl transition-all duration-500 z-40 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={handleNavClick}
                  className="text-3xl font-semibold text-white/90 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            onClick={handleNavClick}
            className="rounded-full bg-white px-12 py-4 text-lg font-semibold text-black shadow-lg transition transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
