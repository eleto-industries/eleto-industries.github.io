import { motion } from "framer-motion";

export default function ProjectFilter({ active, setActive }) {
  const filters = ["All", "IoT", "Embedded", "Edge AI"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex gap-4 justify-center mb-12"
    >
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={`px-5 py-2 rounded-full text-sm transition-all duration-300
            ${
              active === item
                ? "bg-blue-600 text-white scale-105"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
        >
          {item}
        </button>
      ))}
    </motion.div>
  );
}
