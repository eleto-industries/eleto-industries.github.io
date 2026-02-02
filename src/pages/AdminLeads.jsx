import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function AdminLeads() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setLeads(
        snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    };

    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen p-10 text-white bg-gradient-to-br from-black via-[#081a2b] to-black">
      <h1 className="text-4xl font-bold mb-10">Client Leads</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-1">
              {lead.name}
            </h3>
            <p className="text-gray-300 text-sm">{lead.email}</p>
            <p className="text-gray-400 text-sm">{lead.phone}</p>

            <p className="mt-4 text-gray-300">
              {lead.message}
            </p>

            {lead.callback && (
              <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full bg-green-600/20 text-green-300">
                Callback Requested
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
