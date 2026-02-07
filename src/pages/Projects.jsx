import { useEffect, useState } from "react";
import { fetchProjects } from "../services/projectsService";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (e) {
        console.error("Failed to load projects", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section className="projects-page">
      <h1 className="projects-title">Our Projects</h1>

      {loading && <p style={{ textAlign: "center" }}>Loading projects…</p>}

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setActiveProject(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <span className="view-more">View Details →</span>
          </div>
        ))}
      </div>

      {/* SLIDE-UP MODAL */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{activeProject.title}</h2>

            <p className="modal-summary">{activeProject.summary}</p>

            <p className="modal-significance">
              <strong>Significance:</strong> {activeProject.significance}
            </p>

            <div className="tech-stack">
              {(activeProject.tech || []).map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <button
              className="close-btn"
              onClick={() => setActiveProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
