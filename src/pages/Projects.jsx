import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(
          collection(db, "projects"),
          orderBy("createdAt", "desc")
        );
        const snapshot = await getDocs(q);
        setProjects(
          snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        );
      } catch (err) {
        console.error("Failed to load projects", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  /* ================= SEARCH FILTER ================= */
  const filteredProjects = useMemo(() => {
    if (!search.trim()) return projects;

    const term = search.toLowerCase();

    return projects.filter(p => {
      const skillsText = Array.isArray(p.skills)
        ? p.skills.join(" ").toLowerCase()
        : "";

      return (
        p.title?.toLowerCase().includes(term) ||
        p.summary?.toLowerCase().includes(term) ||
        p.domain?.toLowerCase().includes(term) ||
        p.significance?.toLowerCase().includes(term) ||
        skillsText.includes(term)
      );
    });
  }, [projects, search]);

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <section className="projects-loading">
        <div className="loader" />
        <p>Loading projects...</p>
      </section>
    );
  }

  return (
    <section className="projects-page">
      <h1 className="projects-title">Our Projects</h1>

      {/* ================= SEARCH ================= */}
      <div className="projects-search">
        <input
          type="text"
          placeholder="Search by title, domain, skills, impact..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* ================= GRID ================= */}
      {filteredProjects.length === 0 ? (
        <p className="no-results">No projects found.</p>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
          ))}
        </div>
      )}

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal slide-up"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <h2>{selectedProject.title}</h2>
            <p className="modal-summary">
              {selectedProject.summary}
            </p>

            <p><strong>Domain:</strong> {selectedProject.domain}</p>
            <p><strong>Impact:</strong> {selectedProject.significance}</p>

            <div className="skills">
              {selectedProject.skills?.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
