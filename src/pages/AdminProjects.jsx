import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminProjects() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    domain: "",
    summary: "",
    impact: "",
    skills: "",
  });

  /* ================= FETCH PROJECTS ================= */
  const fetchProjects = async () => {
    const snap = await getDocs(collection(db, "projects"));
    setProjects(
      snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }))
    );
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  /* ================= SAVE (ADD OR UPDATE) ================= */
  const saveProject = async () => {
    if (!form.title || !form.domain) {
      alert("Title and Domain are required");
      return;
    }

    const payload = {
      title: form.title,
      domain: form.domain,
      summary: form.summary,
      significance: form.impact,
      skills: form.skills.split(",").map((s) => s.trim()),
    };

    try {
      if (editingId) {
        // UPDATE
        await updateDoc(doc(db, "projects", editingId), payload);
      } else {
        // ADD NEW
        await addDoc(collection(db, "projects"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
      }

      setForm({
        title: "",
        domain: "",
        summary: "",
        impact: "",
        skills: "",
      });

      setEditingId(null);
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= DELETE ================= */
  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    await deleteDoc(doc(db, "projects", id));
    fetchProjects();
  };

  /* ================= EDIT ================= */
  const editProject = (p) => {
    setForm({
      title: p.title || "",
      domain: p.domain || "",
      summary: p.summary || "",
      impact: p.significance || "",
      skills: (p.skills || []).join(", "),
    });

    setEditingId(p.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={styles.page}>
      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>Eleto Admin</h2>

        <button style={styles.navActive}>Projects</button>

        <button style={styles.nav} onClick={() => navigate("/")}>
          ← Website
        </button>

        <button
          style={{ ...styles.nav, color: "#f87171" }}
          onClick={() => {
            logout();
            navigate("/admin/login");
          }}
        >
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main style={styles.main}>
        <h1 style={styles.heading}>Project Administration</h1>
        <p style={styles.subheading}>
          Manage portfolio projects displayed on the website
        </p>

        {/* FORM */}
        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>
            {editingId ? "Edit Project" : "Add New Project"}
          </h2>

          <input
            style={styles.input}
            placeholder="Project title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <select
            style={styles.input}
            value={form.domain}
            onChange={(e) => setForm({ ...form, domain: e.target.value })}
          >
            <option value="">Select domain</option>
            <option value="IoT">IoT</option>
            <option value="Embedded Systems">Embedded Systems</option>
            <option value="Artificial Intelligence">
              Artificial Intelligence
            </option>
          </select>

          <textarea
            style={styles.textarea}
            placeholder="Short summary"
            value={form.summary}
            onChange={(e) => setForm({ ...form, summary: e.target.value })}
          />

          <textarea
            style={styles.textarea}
            placeholder="Impact / significance"
            value={form.impact}
            onChange={(e) => setForm({ ...form, impact: e.target.value })}
          />

          <input
            style={styles.input}
            placeholder="Skills (comma separated)"
            value={form.skills}
            onChange={(e) => setForm({ ...form, skills: e.target.value })}
          />

          <button style={styles.primaryBtn} onClick={saveProject}>
            {editingId ? "Update Project" : "+ Add Project"}
          </button>
        </section>

        {/* PROJECT LIST */}
        <section>
          <h2 style={styles.sectionTitle}>Existing Projects</h2>

          <div style={styles.grid}>
            {projects.map((p) => (
              <div key={p.id} style={styles.projectCard}>
                <h3>{p.title}</h3>
                <p style={styles.muted}>{p.summary}</p>

                <div style={styles.actions}>
                  <button style={styles.editBtn} onClick={() => editProject(p)}>
                    Edit
                  </button>

                  <button
                    style={styles.deleteBtn}
                    onClick={() => deleteProject(p.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: { display: "flex", minHeight: "100vh", background: "#020617", color: "#e5e7eb" },
  sidebar: { width: 240, background: "#020617", borderRight: "1px solid #1e293b", padding: 24 },
  logo: { marginBottom: 24, fontSize: 22 },
  navActive: { width: "100%", padding: 12, marginBottom: 10, background: "#2563eb", borderRadius: 8, color: "#fff" },
  nav: { width: "100%", padding: 12, marginBottom: 10, border: "1px solid #1e293b", borderRadius: 8, color: "#cbd5f5" },
  main: { flex: 1, padding: 40 },
  heading: { fontSize: 28, marginBottom: 6 },
  subheading: { color: "#94a3b8", marginBottom: 30 },
  card: { background: "#020617", border: "1px solid #1e293b", borderRadius: 14, padding: 24, marginBottom: 40 },
  sectionTitle: { fontSize: 20, marginBottom: 16 },
  input: { width: "100%", marginBottom: 12, padding: 12, borderRadius: 8, background: "#020617", border: "1px solid #1e293b", color: "#e5e7eb" },
  textarea: { width: "100%", marginBottom: 12, padding: 12, borderRadius: 8, background: "#020617", border: "1px solid #1e293b", color: "#e5e7eb", minHeight: 80 },
  primaryBtn: { padding: "12px 18px", background: "#2563eb", borderRadius: 10, color: "#fff", cursor: "pointer" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 },
  projectCard: { background: "#020617", border: "1px solid #1e293b", borderRadius: 12, padding: 20 },
  muted: { color: "#94a3b8", fontSize: 14 },
  actions: { marginTop: 14, display: "flex", gap: 10 },
  editBtn: { padding: "8px 14px", background: "#334155", borderRadius: 8, color: "#fff", cursor: "pointer" },
  deleteBtn: { padding: "8px 14px", background: "#dc2626", borderRadius: 8, color: "#fff", cursor: "pointer" },
};
