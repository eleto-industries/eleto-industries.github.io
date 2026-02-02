import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-6">
          Eleto Industries
        </h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          IoT • Embedded Systems • Edge AI Solutions
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;
