import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      {/* Global animated background */}
      <AnimatedBackground />

      {/* App content */}
      <div className="relative z-10 min-h-screen text-white">
        <Navbar />

        {/* Page content */}
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminLogin />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
