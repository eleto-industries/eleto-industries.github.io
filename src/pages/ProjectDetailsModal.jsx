import "./ProjectDetails.css";

export default function ProjectDetailsModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-sheet"
        onClick={e => e.stopPropagation()}
      >
        <h2>{project.title}</h2>
        <p>{project.summary}</p>

        <p><strong>Significance:</strong> {project.significance}</p>
        <p><strong>Domain:</strong> {project.domain}</p>

        <div className="skills">
          {project.skills?.map(skill => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
