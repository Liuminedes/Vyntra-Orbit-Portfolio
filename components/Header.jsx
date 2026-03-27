"use client";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useLang } from "@/lib/LangContext";

const VyntraLogo = () => (
  <svg
    width="140"
    height="34"
    viewBox="0 0 148 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="14" cy="14" r="4.5" fill="#8B5CF6" opacity="0.9" />
    <ellipse
      cx="14"
      cy="14"
      rx="11.5"
      ry="5.5"
      stroke="#8B5CF6"
      strokeWidth="1.1"
      opacity="0.45"
      fill="none"
    />
    <circle cx="25.5" cy="14" r="1.8" fill="#00D4FF" />
    <text
      x="34"
      y="18"
      fontFamily="'Syne', sans-serif"
      fontSize="12"
      fontWeight="700"
      letterSpacing="0.08em"
      fill="#e8e8f0"
    >
      VYNTRA
    </text>
    <text
      x="34"
      y="26"
      fontFamily="'DM Mono', monospace"
      fontSize="7.5"
      fontWeight="400"
      letterSpacing="0.22em"
      fill="rgba(139,92,246,0.65)"
    >
      ORBIT
    </text>
  </svg>
);

const LangToggle = () => {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px 0",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "'DM Mono',monospace",
          fontSize: "clamp(11px,0.75vw,14px)",
          letterSpacing: "0.18em",
          color: lang === "en" ? "#8B5CF6" : "rgba(255,255,255,0.25)",
          transition: "color .2s",
        }}
      >
        EN
      </span>
      <span
        style={{ width: 1, height: 12, background: "rgba(255,255,255,0.15)" }}
      />
      <span
        style={{
          fontFamily: "'DM Mono',monospace",
          fontSize: "clamp(11px,0.75vw,14px)",
          letterSpacing: "0.18em",
          color: lang === "es" ? "#8B5CF6" : "rgba(255,255,255,0.25)",
          transition: "color .2s",
        }}
      >
        ES
      </span>
    </button>
  );
};

export default function Header() {
  const { t } = useLang();
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "clamp(12px,1.4vw,24px) 0",
        background: "rgba(8,8,16,0.92)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg,transparent,rgba(139,92,246,0.3),transparent)",
        }}
      />

      {/* Contenedor inner — respeta el viewport */}
      <div
        style={{
          width: "100%",
          maxWidth: "min(1800px, 100vw)",
          margin: "0 auto",
          padding: "0 clamp(16px,3vw,60px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          /* No desborde nunca */
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <VyntraLogo />
        </Link>

        {/* ── Desktop nav (≥1024px) ── */}
        <style>{`
          .hd { display:none !important; }
          .hm { display:flex !important; }
          @media(min-width:1024px){
            .hd { display:flex !important; align-items:center; gap:clamp(20px,2vw,44px); }
            .hm { display:none !important; }
          }
        `}</style>

        <div
          className="hd"
          style={{ alignItems: "center", gap: "clamp(20px,2vw,44px)" }}
        >
          <Nav />
          <div
            style={{
              width: 1,
              height: 16,
              background: "rgba(255,255,255,0.12)",
              flexShrink: 0,
            }}
          />
          <LangToggle />
          <Link
            href="/contact"
            style={{
              textDecoration: "none",
              background: "linear-gradient(135deg,#8B5CF6,#6C63FF)",
              color: "white",
              padding: "clamp(9px,0.8vw,13px) clamp(18px,1.6vw,30px)",
              fontFamily: "'DM Mono',monospace",
              fontSize: "clamp(11px,0.72vw,13px)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              boxShadow: "0 0 24px rgba(139,92,246,0.3)",
              transition: "opacity .2s, transform .2s",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.88";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {t.nav.hire}
          </Link>
        </div>

        {/* ── Mobile nav (≤1023px) ── */}
        <div className="hm" style={{ alignItems: "center", gap: 14 }}>
          <LangToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
