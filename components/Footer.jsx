"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useLang } from "@/lib/LangContext";

const socials = [
  { icon: <FaGithub size={16} />, href: "https://github.com/Liuminedes", label: "GitHub" },
  { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/mauricio-rodriguez-lemos-78a33b268/", label: "LinkedIn" },
  { icon: <FaInstagram size={16} />, href: "https://www.instagram.com/vyntra_orbit/", label: "Instagram" },
  { icon: <FaWhatsapp size={16} />, href: "https://wa.me/573177686358", label: "WhatsApp" },
];

const FooterColumn = ({ heading, links }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 0 }}>
    <span className="vo-label">{heading}</span>
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {links.map((l, i) => (
        <Link
          key={i}
          href={l.href}
          style={{
            fontSize: 14,
            color: "rgba(232,232,240,0.6)",
            textDecoration: "none",
            transition: "color .2s",
            width: "fit-content",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C4B5FD")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232,232,240,0.6)")}
        >
          {l.label}
        </Link>
      ))}
    </div>
  </div>
);

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer
      className="vo-surface"
      style={{
        marginTop: "clamp(40px,6vw,96px)",
        borderRadius: 0,
        borderLeft: "none",
        borderRight: "none",
        borderBottom: "none",
      }}
    >
      <div className="vo-container" style={{ paddingTop: "clamp(48px,6vw,88px)", paddingBottom: "clamp(24px,3vw,40px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: "clamp(24px,4vw,48px)",
          }}
          className="footer-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingRight: 24 }}>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 20,
                color: "#E8E8F0",
                letterSpacing: "-0.01em",
              }}
            >
              VYNTRA ORBIT
            </span>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(232,232,240,0.5)", maxWidth: 320 }}>
              {f.blurb}
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(232,232,240,0.6)",
                    transition: "border-color .2s, color .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
                    e.currentTarget.style.color = "#C4B5FD";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(232,232,240,0.6)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn heading={f.columns.company} links={f.companyLinks} />
          <FooterColumn heading={f.columns.services} links={f.servicesLinks} />
          <FooterColumn heading={f.columns.products} links={f.productsLinks} />
        </div>

        <div
          style={{
            marginTop: "clamp(32px,4vw,56px)",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span className="vo-label" style={{ textTransform: "none", letterSpacing: "0.05em" }}>
            © {year} Vyntra Orbit — {f.rights}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link
              href="/privacy"
              className="vo-label"
              style={{ textTransform: "none", letterSpacing: "0.05em", textDecoration: "none", color: "rgba(232,232,240,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C4B5FD")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232,232,240,0.4)")}
            >
              {f.privacyLabel}
            </Link>
            <span className="vo-label" style={{ textTransform: "none", letterSpacing: "0.05em" }}>
              {f.madeBy}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
