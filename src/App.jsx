import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Global layout */
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";

/* Public pages */
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";

/* Admin */
import AdminLogin from "./pages/AdminLogin";

/**
 * GitHub Pages requires basename in production.
 * Local dev must NOT use basename.
 */
const basename =
  import.meta.env.MODE === "production"
    ? "/eleto-industries"
    : "/";

function App() {
  return (
    <BrowserRouter basename={basename}>
      {/* Global animated background */}
      <AnimatedBackground />

      {/* Global navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />

        {/* Projects (Option B) */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />

        <Route path="/contact" element={<Contact />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div style={styles.notFound}>
              <h1>404</h1>
              <p>Page not found</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  notFound: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#020617",
    color: "#fff",
  },
};

export default App;
