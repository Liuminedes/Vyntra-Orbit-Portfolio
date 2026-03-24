"use client";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useLang } from "@/lib/LangContext";

const VyntraLogo = () => (
  <svg
    width="148"
    height="36"
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
        gap: 10,
        background: "none",
        border: "none",
        cursor: "none",
        padding: "4px 0",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Mono',monospace",
          fontSize: "clamp(11px, 0.75vw, 14px)",
          letterSpacing: "0.2em",
          color: lang === "en" ? "#8B5CF6" : "rgba(255,255,255,0.25)",
          transition: "color .2s",
        }}
      >
        EN
      </span>
      <span
        style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)" }}
      />
      <span
        style={{
          fontFamily: "'DM Mono',monospace",
          fontSize: "clamp(11px, 0.75vw, 14px)",
          letterSpacing: "0.2em",
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
        padding: "clamp(16px, 1.6vw, 28px) 0",
        background: "rgba(8,8,16,0.9)",
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
            "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "min(1800px, 94vw)",
          margin: "0 auto",
          padding: "0 clamp(20px, 3vw, 60px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <VyntraLogo />
        </Link>

        {/* Desktop nav */}
        <style>{`
          .hd { display: none !important; }
          .hm { display: flex !important; }
          @media(min-width:1024px){
            .hd { display: flex !important; align-items: center; gap: clamp(24px,2.5vw,48px); }
            .hm { display: none !important; }
          }
        `}</style>

        <div className="hd">
          <Nav />
          <div
            style={{
              width: 1,
              height: 18,
              background: "rgba(255,255,255,0.12)",
            }}
          />
          <LangToggle />
          <Link
            href="/contact"
            style={{
              textDecoration: "none",
              background: "linear-gradient(135deg,#8B5CF6,#6C63FF)",
              color: "white",
              padding: "clamp(10px,0.9vw,14px) clamp(20px,1.8vw,32px)",
              fontFamily: "'DM Mono',monospace",
              fontSize: "clamp(11px,0.75vw,13px)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              boxShadow: "0 0 28px rgba(139,92,246,0.35)",
              transition: "opacity .2s, transform .2s",
              whiteSpace: "nowrap",
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

        <div className="hm" style={{ alignItems: "center", gap: 16 }}>
          <LangToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
