export default function Services() {
  return (
    <section className="min-h-screen text-white px-10 py-32">
      <h1 className="text-5xl font-bold mb-10">Services</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">IoT Solutions</h3>
          <p>Smart devices, cloud dashboards, MQTT, AWS IoT.</p>
        </div>

        <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Embedded Systems</h3>
          <p>Firmware, PCB testing, power electronics.</p>
        </div>

        <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Edge AI</h3>
          <p>Computer vision, defect detection, real-time AI.</p>
        </div>
      </div>
    </section>
  );
}
