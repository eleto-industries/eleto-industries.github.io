import { motion, AnimatePresence } from "framer-motion";

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/70"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={`relative z-10 w-full max-w-5xl rounded-3xl overflow-hidden ${service.bg}`}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl"
          >
            ✕
          </button>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 p-14 text-white items-center">

            {/* LEFT */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-4xl font-bold">
                {service.title}
              </h2>

              <p className="text-white/90 leading-relaxed">
                {service.description}
              </p>

              <div>
                <h4 className="font-semibold mb-2">What We Deliver</h4>
                <ul className="space-y-1 text-white/80">
                  {service.deliverables.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {service.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 bg-white/20 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="max-h-64 object-contain drop-shadow-2xl"
              />
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
