import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // adjust path if needed

export default function Navbar() {
  const linkClass =
    "relative px-3 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white";

  const activeClass =
    "text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:rounded-full";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Eleto Industries"
            className="h-9 w-9 rounded"
          />
          <span className="text-lg font-semibold tracking-wide">
            Eleto Industries
          </span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
