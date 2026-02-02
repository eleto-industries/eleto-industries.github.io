import { motion } from "framer-motion";

const services = [
  {
    title: "IoT Solutions",
    desc: "End-to-end IoT systems including hardware, firmware, cloud dashboards, real-time monitoring, and scalable deployments.",
    icon: "📡",
  },
  {
    title: "Embedded Systems",
    desc: "Custom embedded hardware & firmware using microcontrollers, RTOS, communication protocols, and production-ready designs.",
    icon: "🧠",
  },
  {
    title: "Edge AI",
    desc: "AI models deployed directly on edge devices for computer vision, anomaly detection, automation, and real-time intelligence.",
    icon: "👁️",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-28 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-20"
        >
          What We Do
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition bg-white"
            >
              <div className="text-5xl mb-6">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
