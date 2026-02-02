import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const snap = await getDoc(doc(db, "projects", id));
        if (snap.exists()) {
          setProject(snap.data());
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading project...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#081a2b] to-black animate-gradient" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <Link
          to="/projects"
          className="text-blue-400 hover:text-blue-300 mb-6 inline-block"
        >
          ← Back to Projects
        </Link>

        {/* Hero Image */}
        {project.images?.[0] && (
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-80 object-cover rounded-2xl mb-10"
          />
        )}

        <h1 className="text-4xl font-bold mb-4">
          {project.title}
        </h1>

        <p className="text-gray-300 text-lg mb-6">
          {project.summary}
        </p>

        {project.significance && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Significance
            </h2>
            <p className="text-gray-300">
              {project.significance}
            </p>
          </div>
        )}

        {project.skills?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-3">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-1 rounded-full bg-blue-600/20 text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Gallery */}
        {project.images?.length > 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.slice(1).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="project"
                  className="rounded-xl object-cover"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradientMove 20s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
