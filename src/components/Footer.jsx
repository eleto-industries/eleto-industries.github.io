import {
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* LEFT */}
        <div style={styles.brand}>
          <h3 style={styles.logo}>Eleto Industries</h3>
          <p style={styles.tagline}>
            IoT • Embedded Systems • Edge AI
          </p>
        </div>

        {/* CENTER */}
        <div style={styles.links}>
          <a
            href="https://www.instagram.com/eleto_industries"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <FaInstagram /> Instagram
          </a>

          <a
            href="https://www.linkedin.com/company/saurabhkrkeshri"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {/* RIGHT */}
        <div style={styles.contact}>
          <a href="tel:+919108682156" style={styles.link}>
            <FaPhoneAlt /> +91 9108682156
          </a>

          <a href="mailto:eletoindustries@gmail.com" style={styles.link}>
            <FaEnvelope /> eletoindustries@gmail.com
          </a>
        </div>
      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} Eleto Industries. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: 120,
    background: "rgba(2,6,23,0.9)",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    color: "#e5e7eb",
  },

  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "48px 24px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 32,
  },

  brand: {},

  logo: {
    marginBottom: 8,
    fontSize: 20,
  },

  tagline: {
    color: "#94a3b8",
    fontSize: 14,
  },

  links: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  contact: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  link: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: "#e5e7eb",
    textDecoration: "none",
    fontSize: 15,
  },

  bottom: {
    textAlign: "center",
    padding: "18px 12px",
    fontSize: 13,
    color: "#94a3b8",
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },
};
