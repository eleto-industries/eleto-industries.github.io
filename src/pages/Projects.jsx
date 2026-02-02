import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const q = query(
        collection(db, "projects"),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#081a2b] to-black animate-gradient" />

      <div className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16">
          Our Projects
        </h1>

        {loading ? (
          <p className="text-center text-gray-400">
            Loading projects...
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
                className="cursor-pointer rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10
                           hover:border-blue-500/50 hover:scale-[1.02] transition-all"
              >
                {project.images?.[0] && (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="h-56 w-full object-cover"
                  />
                )}

                <div className="p-8">
                  <h2 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-300">
                    {project.summary}
                  </p>
                </div>
              </div>
            ))}
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
