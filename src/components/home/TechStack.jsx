import { motion } from "framer-motion";

const tech = [
  "Embedded C / C++",
  "ESP32 / STM32",
  "RTOS",
  "Python",
  "Edge AI",
  "Computer Vision",
  "TensorFlow Lite",
  "AWS IoT",
];

export default function TechStack() {
  return (
    <section className="py-28 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Technology Stack
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {tech.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-5 text-center rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition"
            >
              <span className="font-medium">{item}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
