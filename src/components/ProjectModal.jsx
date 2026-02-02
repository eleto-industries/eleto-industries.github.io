import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-6"
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
  initial={{ opacity: 0, scale: 0.95, y: 20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.95, y: 20 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
  className="relative z-10 bg-gray-900 text-white max-w-4xl w-full rounded-2xl overflow-hidden"
>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl"
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="h-64 w-full object-cover"
          />

          {/* Content */}
          <div className="p-8 space-y-6">
            <h2 className="text-3xl font-bold">
              {project.title}
            </h2>

            <p className="text-blue-400 font-medium">
              {project.significance}
            </p>

            <div>
              <h4 className="font-semibold mb-2">Project Overview</h4>
              <p className="text-gray-300 leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-sm text-gray-400">
              Domain: <span className="text-gray-200">{project.domain}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
