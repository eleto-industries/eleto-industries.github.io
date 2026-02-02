import { motion } from "framer-motion";

export default function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="group bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-sm text-blue-300 mt-1">
          {project.significance}
        </p>

        <p className="text-gray-300 text-sm mt-3 leading-relaxed">
          {project.summary}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => onSelect(project)}
          className="mt-6 w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition text-white text-sm font-medium"
        >
          View Case Study
        </button>
      </div>
    </motion.div>
  );
}
