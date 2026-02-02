import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    leads: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      const projectsSnap = await getDocs(collection(db, "projects"));
      const leadsSnap = await getDocs(collection(db, "leads"));

      setStats({
        projects: projectsSnap.size,
        leads: leadsSnap.size,
      });
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen flex text-white bg-gradient-to-br from-black via-[#081a2b] to-black">
      {/* Sidebar */}
      <aside className="w-64 bg-black/60 backdrop-blur-xl border-r border-white/10 p-6">
        <h2 className="text-2xl font-bold mb-10">Eleto Admin</h2>

        <nav className="space-y-4">
          <button
            onClick={() => navigate("/admin")}
            className="block w-full text-left px-4 py-2 rounded-lg bg-blue-600/30"
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/admin/projects")}
            className="block w-full text-left px-4 py-2 rounded-lg hover:bg-white/10"
          >
            Projects
          </button>

          <button
            onClick={() => navigate("/admin/leads")}
            className="block w-full text-left px-4 py-2 rounded-lg hover:bg-white/10"
          >
            Leads
          </button>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-10">Dashboard</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <StatCard title="Total Projects" value={stats.projects} />
          <StatCard title="Client Leads" value={stats.leads} />
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
      <h3 className="text-gray-300 mb-2">{title}</h3>
      <p className="text-5xl font-bold">{value}</p>
    </div>
  );
}
