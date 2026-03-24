"use client";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useLang } from "@/lib/LangContext";

const VyntraLogo = () => (
  <svg width="110" height="28" viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="4.5" fill="#6C63FF" opacity="0.9"/>
    <ellipse cx="14" cy="14" rx="11.5" ry="5.5" stroke="#6C63FF" strokeWidth="1.1" opacity="0.45" fill="none"/>
    <circle cx="25.5" cy="14" r="1.8" fill="#00D4FF"/>
    <text x="34" y="18" fontFamily="'Syne', sans-serif" fontSize="12" fontWeight="700" letterSpacing="0.08em" fill="#e8e8f0">VYNTRA</text>
    <text x="34" y="26" fontFamily="'DM Mono', monospace" fontSize="7.5" fontWeight="400" letterSpacing="0.22em" fill="rgba(108,99,255,0.65)">ORBIT</text>
  </svg>
);

const LangToggle = () => {
  const { lang, toggle } = useLang();
  return (
    <button onClick={toggle} aria-label="Toggle language"
      style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "none", padding: "4px 0" }}>
      <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "clamp(10px,0.7vw,12px)", letterSpacing: "0.2em", color: lang === "en" ? "#6C63FF" : "rgba(255,255,255,0.25)", transition: "color .2s" }}>EN</span>
      <span style={{ width: 1, height: 12, background: "rgba(255,255,255,0.12)" }} />
      <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "clamp(10px,0.7vw,12px)", letterSpacing: "0.2em", color: lang === "es" ? "#6C63FF" : "rgba(255,255,255,0.25)", transition: "color .2s" }}>ES</span>
    </button>
  );
};

export default function Header() {
  const { t } = useLang();
  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      padding: "18px 0",
      background: "rgba(8,8,16,0.88)",
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      borderBottom: "1px solid rgba(255,255,255,0.045)",
    }}>
      <div className="vo-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ textDecoration: "none" }}><VyntraLogo /></Link>

        {/* Desktop */}
        <style>{`
          .header-desktop { display: none !important; }
          .header-mobile  { display: flex !important; }
          @media(min-width:1024px){
            .header-desktop { display: flex !important; align-items: center; gap: 40px; }
            .header-mobile  { display: none !important; }
          }
        `}</style>

        <div className="header-desktop">
          <Nav />
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.1)" }} />
          <LangToggle />
          <Link href="/contact" className="btn-glow-solid" style={{ textDecoration: "none", fontSize: "clamp(10px,0.7vw,12px)", padding: "10px 22px" }}>
            {t.nav.hire}
          </Link>
        </div>

        <div className="header-mobile" style={{ alignItems: "center", gap: 16 }}>
          <LangToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}