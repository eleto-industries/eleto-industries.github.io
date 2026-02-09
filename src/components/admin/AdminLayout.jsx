import { NavLink } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div style={styles.wrapper}>
      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>Eleto Admin</h2>

        <nav style={styles.nav}>
          <NavLink to="/admin/projects" style={styles.link}>
            Projects
          </NavLink>

          <NavLink to="/" style={styles.link}>
            Back to Website
          </NavLink>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main style={styles.content}>{children}</main>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #020617, #020617)",
    color: "#fff",
  },

  sidebar: {
    width: 240,
    padding: "32px 20px",
    background: "rgba(15,23,42,0.95)",
    borderRight: "1px solid rgba(255,255,255,0.08)",
  },

  logo: {
    marginBottom: 32,
    fontSize: 20,
    fontWeight: 700,
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  link: {
    padding: "10px 14px",
    borderRadius: 10,
    textDecoration: "none",
    color: "#e5e7eb",
    background: "rgba(255,255,255,0.05)",
    fontWeight: 500,
  },

  content: {
    flex: 1,
    padding: "32px",
  },
};
