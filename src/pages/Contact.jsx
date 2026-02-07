import { useState } from "react";
import { addLead } from "../services/leadsService";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await addLead(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="max-w-xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl"
      >
        <input
          name="name"
          placeholder="Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-black/60"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-black/60"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded bg-black/60"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 py-3 rounded font-semibold"
        >
          Send Message
        </button>

        {status === "success" && (
          <p className="text-green-400 mt-4">
            Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 mt-4">
            Failed to send message. Try again.
          </p>
        )}
      </form>
    </section>
  );
}
