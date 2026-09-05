"use client";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useLang } from "@/lib/LangContext";

const VyntraLogo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
    <div style={{ position: "relative", width: 34, height: 34, flexShrink: 0 }}>
      <div
        style={{
          position: "absolute",
          inset: -6,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Image
        src="/assets/vyntra-icon.png"
        alt="Vyntra Orbit"
        fill
        priority
        sizes="34px"
        style={{ objectFit: "contain" }}
      />
    </div>
    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, gap: 2 }}>
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 15,
          letterSpacing: "0.03em",
          color: "#F4F4F8",
        }}
      >
        VYNTRA
      </span>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontWeight: 400,
          fontSize: 9,
          letterSpacing: "0.32em",
          color: "#8B5CF6",
        }}
      >
        ORBIT
      </span>
    </div>
  </div>
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
        background: "rgba(8,7,12,0.92)",
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
