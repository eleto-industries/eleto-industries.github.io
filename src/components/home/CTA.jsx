import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let’s Build Your Product
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg opacity-90 max-w-2xl mx-auto mb-12"
        >
          Whether you’re building a smart IoT system, an embedded product,
          or an AI-powered solution — we help you go from idea to deployment
          with engineering precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            to="/contact"
            className="px-10 py-4 rounded-xl bg-white text-blue-700 font-semibold hover:bg-gray-100 transition"
          >
            Start a Project
          </Link>

          <Link
            to="/projects"
            className="px-10 py-4 rounded-xl border border-white/40 hover:bg-white/10 transition"
          >
            See Our Work
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
