import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return null; // wait for Firebase
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
