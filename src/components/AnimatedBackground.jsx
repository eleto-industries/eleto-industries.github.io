export default function AnimatedBackground() {
  return (
    <div
      className="animate-gradient"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        background:
          "linear-gradient(120deg, #0ea5e9, #2563eb, #1e40af)",
        backgroundSize: "300% 300%",
        animation: "gradient 12s ease infinite",
        pointerEvents: "none",
      }}
    />
  );
}
