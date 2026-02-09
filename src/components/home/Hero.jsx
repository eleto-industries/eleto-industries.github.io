import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center text-white py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center px-6"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Eleto Industries
        </h1>

        <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto leading-relaxed">
          IoT • Embedded Systems • Edge AI Solutions
        </p>
      </motion.div>
    </section>
  );
}
