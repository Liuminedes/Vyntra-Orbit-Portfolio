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
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.2em", color: lang === "en" ? "#6C63FF" : "rgba(255,255,255,0.25)" }}>EN</span>
      <span style={{ width: 1, height: 12, background: "rgba(255,255,255,0.12)" }} />
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.2em", color: lang === "es" ? "#6C63FF" : "rgba(255,255,255,0.25)" }}>ES</span>
    </button>
  );
};

export default function Header() {
  const { t } = useLang();
  return (
    <header style={{ padding: "24px 0", position: "relative", zIndex: 10 }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(108,99,255,0.2), transparent)" }} />
      <div className="vo-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ textDecoration: "none" }}><VyntraLogo /></Link>

        {/* Desktop */}
        <div style={{ display: "none" }} className="desktop-nav">
          <style>{`.desktop-nav { display: none !important; } @media(min-width:1024px){ .desktop-nav { display: flex !important; align-items: center; gap: 40px; } }`}</style>
          <Nav />
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.1)" }} />
          <LangToggle />
          <Link href="/contact" className="btn-glow-solid" style={{ fontSize: 10, padding: "10px 20px", textDecoration: "none" }}>{t.nav.hire}</Link>
        </div>

        {/* Mobile */}
        <div className="mobile-nav" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <style>{`.mobile-nav { display: flex !important; } @media(min-width:1024px){ .mobile-nav { display: none !important; } }`}</style>
          <LangToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}