import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* BACKGROUND */}
      <AnimatedBackground />

      {/* CONTENT WRAPPER */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />

        {/* PAGE CONTENT */}
        <main style={{ flex: 1 }}>
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
