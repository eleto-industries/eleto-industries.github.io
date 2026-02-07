import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // TEMP static data (later you can load from Firebase)
    const projects = {
      "auto-id": {
        title: "Smart Energy Monitoring System",
        description: "Real-time power monitoring using IoT sensors",
        significance: "Reduced energy wastage by 25%",
        tech: ["ESP32", "AWS IoT", "MQTT", "React"],
      },
    };

    setProject(projects[id] || null);
  }, [id]);

  if (!project) {
    return (
      <div style={styles.center}>
        <h2>Project not found</h2>
        <button onClick={() => navigate("/projects")} style={styles.button}>
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <p>
          <strong>Significance:</strong> {project.significance}
        </p>

        <div style={styles.tags}>
          {project.tech.map((t) => (
            <span key={t} style={styles.tag}>{t}</span>
          ))}
        </div>

        <button onClick={() => navigate("/projects")} style={styles.button}>
          Close
        </button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #020617, #020617)",
  },
  card: {
    maxWidth: "700px",
    width: "90%",
    padding: "40px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.06)",
    color: "#fff",
    backdropFilter: "blur(12px)",
  },
  tags: {
    display: "flex",
    gap: "10px",
    marginTop: "16px",
    flexWrap: "wrap",
  },
  tag: {
    padding: "6px 12px",
    borderRadius: "20px",
    background: "#2563eb",
    fontSize: "14px",
  },
  button: {
    marginTop: "24px",
    padding: "10px 20px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  center: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    background: "#020617",
  },
};

export default ProjectDetails;
