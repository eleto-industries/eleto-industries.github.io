import { useState } from "react";
import { addLead } from "../services/leadsService";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    callback: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    await addLead(form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-black text-white">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-slate-400">
            We’ve received your request. Our team will contact you shortly.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex justify-center items-center">
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/5 border border-white/10 rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Contact Eleto Industries
        </h1>

        <input
          className="input"
          placeholder="Your Name"
          required
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="input"
          type="email"
          placeholder="Email Address"
          required
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="input"
          placeholder="Phone Number"
          onChange={e => setForm({ ...form, phone: e.target.value })}
        />

        <input
          className="input"
          placeholder="Company / Organization"
          onChange={e => setForm({ ...form, company: e.target.value })}
        />

        <textarea
          className="input h-28"
          placeholder="Tell us about your requirement"
          required
          onChange={e => setForm({ ...form, message: e.target.value })}
        />

        <label className="flex items-center gap-2 text-sm text-slate-300 mb-4">
          <input
            type="checkbox"
            onChange={e => setForm({ ...form, callback: e.target.checked })}
          />
          Request a call back
        </label>

        <button
          type="submit"
          className="w-full bg-cyan-600 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
}
