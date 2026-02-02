import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { label: "Projects Delivered", value: "25+" },
    { label: "Industries Served", value: "8+" },
    { label: "Embedded Systems Built", value: "15+" },
    { label: "Edge AI Models Deployed", value: "10+" },
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/5 backdrop-blur"
          >
            <h3 className="text-4xl font-bold text-blue-400">
              {item.value}
            </h3>
            <p className="mt-2 text-sm opacity-80">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
