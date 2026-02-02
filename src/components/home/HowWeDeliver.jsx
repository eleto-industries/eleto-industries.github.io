import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "We understand the problem deeply, analyze constraints, define system architecture, and align technical feasibility with business goals.",
  },
  {
    step: "02",
    title: "System Design",
    desc: "Hardware selection, firmware architecture, cloud strategy, AI pipeline design, and scalability planning.",
  },
  {
    step: "03",
    title: "Development & Integration",
    desc: "Embedded firmware, IoT backend, dashboards, AI model training, and full system integration.",
  },
  {
    step: "04",
    title: "Testing & Validation",
    desc: "Functional testing, edge-case handling, performance validation, and real-world simulations.",
  },
  {
    step: "05",
    title: "Deployment & Support",
    desc: "Production deployment, documentation, optimization, and long-term support if required.",
  },
];

export default function HowWeDeliver() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-20"
        >
          How We Deliver Projects
        </motion.h2>

        <div className="space-y-16">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-8 items-start"
            >
              <div className="text-blue-400 font-bold text-2xl w-12">
                {item.step}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
