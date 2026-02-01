import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 text-white px-10 py-4 flex justify-between items-center">
      
      {/* Logo + Brand */}
      <div className="flex items-center gap-3">
        <img 
          src={logo} 
          alt="Eleto Industries Logo" 
          className="h-8 w-auto hover:scale-105 transition duration-300"
        />
        <span className="text-lg font-semibold tracking-wide">
          Eleto Industries
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-cyan-300 transition">Home</Link>
        <Link to="/services" className="hover:text-cyan-300 transition">Services</Link>
        <Link to="/projects" className="hover:text-cyan-300 transition">Projects</Link>
        <Link to="/contact" className="hover:text-cyan-300 transition">Contact</Link>
      </div>
    </nav>
  );
}
