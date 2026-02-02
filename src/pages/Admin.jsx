import { useState } from "react";
import { saveProject } from "../data/projects";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const [form, setForm] = useState({
    title: "",
    domain: "IoT",
    significance: "",
    summary: "",
    skills: "",
    image: "",
  });

  const ADMIN_PASSWORD = "eleto123"; // change later

  const login = () => {
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
    } else {
      alert("Wrong password");
    }
  };

  const submit = () => {
    const newProject = {
      ...form,
      id: Date.now(),
      skills: form.skills.split(",").map((s) => s.trim()),
    };

    saveProject(newProject);
    alert("Project added successfully!");

    setForm({
      title: "",
      domain: "IoT",
      significance: "",
      summary: "",
      skills: "",
      image: "",
    });
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-white/10 p-8 rounded-xl w-80">
          <h2 className="text-xl font-bold mb-4">Admin Login</h2>
          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 rounded bg-black border border-white/20"
          />
          <button
            onClick={login}
            className="w-full bg-blue-600 py-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-xl mx-auto bg-white/10 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Add New Project</h2>

        {["title", "significance", "summary", "image"].map((field) => (
          <input
            key={field}
            placeholder={field}
            value={form[field]}
            onChange={(e) =>
              setForm({ ...form, [field]: e.target.value })
            }
            className="w-full p-2 mb-4 rounded bg-black border border-white/20"
          />
        ))}

        <select
          value={form.domain}
          onChange={(e) => setForm({ ...form, domain: e.target.value })}
          className="w-full p-2 mb-4 rounded bg-black border border-white/20"
        >
          <option>IoT</option>
          <option>Embedded</option>
          <option>Edge AI</option>
        </select>

        <input
          placeholder="Skills (comma separated)"
          value={form.skills}
          onChange={(e) => setForm({ ...form, skills: e.target.value })}
          className="w-full p-2 mb-4 rounded bg-black border border-white/20"
        />

        <button
          onClick={submit}
          className="w-full bg-green-600 py-2 rounded"
        >
          Add Project
        </button>
      </div>
    </div>
  );
}
    