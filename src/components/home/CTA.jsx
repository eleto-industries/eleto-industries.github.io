export default function CTA() {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Build Something Powerful?
        </h2>

        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Let’s turn your idea into a production-ready solution using IoT,
          Embedded Systems, and Edge AI.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Start a Project
          </a>

          <a
            href="/projects"
            className="border border-white/40 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
