import { useState } from "react";
import { motion } from "framer-motion";
import ServiceModal from "../components/services/ServiceModal";

const services = [
  {
    title: "IoT Solutions",
    short: "Smart devices, cloud dashboards, and scalable IoT systems.",
    description:
      "We design and deploy end-to-end IoT solutions, from hardware and firmware to cloud integration and real-time dashboards.",
    deliverables: [
      "Sensor & hardware integration",
      "Firmware architecture",
      "Cloud dashboards & analytics",
      "MQTT / AWS IoT pipelines",
      "Deployment & documentation",
    ],
    tech: ["ESP32", "STM32", "MQTT", "AWS IoT", "Node.js"],
    bg: "bg-iot",
    image: "/iot.svg",
  },
  {
    title: "Embedded Systems",
    short: "Production-grade embedded hardware & firmware.",
    description:
      "We build robust embedded systems optimized for performance, power efficiency, and real-world constraints.",
    deliverables: [
      "Firmware & driver development",
      "RTOS-based architectures",
      "Hardware bring-up & debugging",
      "Communication protocols",
      "Reliability testing",
    ],
    tech: ["Embedded C", "C++", "RTOS", "SPI", "I2C"],
    bg: "bg-embedded",
    image: "/embedded.svg",
  },
  {
    title: "Edge AI",
    short: "AI-powered intelligence directly on devices.",
    description:
      "We deploy optimized AI models on edge devices for real-time vision, analytics, and automation without cloud latency.",
    deliverables: [
      "Computer vision pipelines",
      "Model optimization",
      "Real-time inference",
      "Camera integration",
      "On-device deployment",
    ],
    tech: ["Python", "OpenCV", "TensorFlow Lite", "Edge AI"],
    bg: "bg-edgeai",
    image: "/ai.svg",
  },
];


export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="min-h-screen py-32 px-6  text-white">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-16 text-center">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur cursor-pointer"
              onClick={() => setActiveService(service)}
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.short}
              </p>
            </motion.div>
          ))}
        </div>

        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      </div>
    </section>
  );
}
