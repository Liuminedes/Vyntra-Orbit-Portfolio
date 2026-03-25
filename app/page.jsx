"use client";
import Link from "next/link";
import Image from "next/image";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useLang } from "@/lib/LangContext";

const C = {
  accent: "#8B5CF6",
  muted: "rgba(232,232,240,0.3)",
  mutedMid: "rgba(232,232,240,0.4)",
  mutedText: "rgba(232,232,240,0.5)",
  divider: "rgba(255,255,255,0.1)",
};

const socials = [
  {
    icon: <FaGithub size={16} />,
    href: "https://github.com/Liuminedes",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={16} />,
    href: "https://www.linkedin.com/in/mauricio-rodriguez-lemos-78a33b268/",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram size={16} />,
    href: "https://www.instagram.com/vyntra_orbit/",
    label: "Instagram",
  },
];

/* ── Logo card — identidad Vyntra Orbit ── */
const LogoCard = () => (
  <div
    style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {/* Glow exterior difuso */}
    <div
      style={{
        position: "absolute",
        inset: "-32px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 68%)",
        pointerEvents: "none",
        animation: "floatDot 6s ease-in-out infinite",
      }}
    />

    {/* Anillo orbital decorativo SVG giratorio */}
    <svg
      style={{
        position: "absolute",
        width: "110%",
        height: "110%",
        pointerEvents: "none",
        animation: "spin-slow 18s linear infinite",
        opacity: 0.35,
      }}
      viewBox="0 0 400 400"
      fill="none"
    >
      <ellipse
        cx="200"
        cy="200"
        rx="190"
        ry="70"
        stroke="url(#orbitGrad)"
        strokeWidth="1.5"
        strokeDasharray="8 14"
      />
      <defs>
        <linearGradient id="orbitGrad" x1="0" y1="0" x2="400" y2="0">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
          <stop offset="40%" stopColor="#8B5CF6" stopOpacity="1" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>

    {/* Card principal */}
    <div
      style={{
        position: "relative",
        width: "clamp(220px, 23vw, 400px)",
        height: "clamp(220px, 23vw, 400px)",
        borderRadius: "clamp(16px, 1.5vw, 28px)",
        overflow: "hidden",
        /* Borde con gradiente — se simula con outline + pseudo */
        boxShadow:
          "0 0 0 1px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.12), inset 0 0 40px rgba(139,92,246,0.04)",
        background:
          "linear-gradient(145deg, rgba(139,92,246,0.08) 0%, rgba(8,8,16,0.95) 50%, rgba(0,212,255,0.04) 100%)",
      }}
    >
      {/* Logo — contain para no recortar el texto */}
      <Image
        src="/assets/VYNTRA_ORBIT.png"
        fill
        priority
        quality={100}
        alt="Vyntra Orbit"
        style={{ objectFit: "contain", padding: "clamp(16px,2vw,32px)" }}
      />

      {/* Scanline sutil — efecto tech */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(139,92,246,0.015) 3px, rgba(139,92,246,0.015) 4px)",
          pointerEvents: "none",
          borderRadius: "inherit",
        }}
      />

      {/* Corner accents */}
      {[
        {
          top: 0,
          left: 0,
          borderTop: "2px solid rgba(139,92,246,0.7)",
          borderLeft: "2px solid rgba(139,92,246,0.7)",
        },
        {
          top: 0,
          right: 0,
          borderTop: "2px solid rgba(139,92,246,0.7)",
          borderRight: "2px solid rgba(139,92,246,0.7)",
        },
        {
          bottom: 0,
          left: 0,
          borderBottom: "2px solid rgba(0,212,255,0.5)",
          borderLeft: "2px solid rgba(0,212,255,0.5)",
        },
        {
          bottom: 0,
          right: 0,
          borderBottom: "2px solid rgba(0,212,255,0.5)",
          borderRight: "2px solid rgba(0,212,255,0.5)",
        },
      ].map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "clamp(14px,1.8vw,24px)",
            height: "clamp(14px,1.8vw,24px)",
            ...s,
          }}
        />
      ))}
    </div>

    {/* Badge "Studio" flotante */}
    <div
      style={{
        position: "absolute",
        bottom: "-12px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(8,8,16,0.9)",
        border: "1px solid rgba(139,92,246,0.35)",
        borderRadius: 100,
        padding: "5px 14px",
        display: "flex",
        alignItems: "center",
        gap: 6,
        whiteSpace: "nowrap",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#00ff88",
          animation: "pulse-wip 2s infinite",
        }}
      />
      <span
        style={{
          fontFamily: "'DM Mono',monospace",
          fontSize: "clamp(8px,0.6vw,10px)",
          letterSpacing: "0.15em",
          color: "rgba(232,232,240,0.6)",
          textTransform: "uppercase",
        }}
      >
        Available for projects
      </span>
    </div>

    {/* Floating dot cyan */}
    <div
      style={{
        position: "absolute",
        top: "6%",
        right: "-4%",
        width: "clamp(7px,0.7vw,11px)",
        height: "clamp(7px,0.7vw,11px)",
        borderRadius: "50%",
        background: "rgba(0,212,255,0.8)",
        animation: "floatDot 3.5s ease-in-out infinite",
      }}
    />
  </div>
);

export default function Home() {
  const { t, lang } = useLang();

  return (
    <section
      style={{
        minHeight: "calc(100vh - clamp(72px,6vw,96px))",
        maxHeight: "calc(100vh - clamp(72px,6vw,96px))",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* CSS extra para animación orbital */}
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media(min-width:1024px){
          .home-grid  { grid-template-columns: 1fr clamp(240px,24vw,420px) !important; gap: clamp(40px,4vw,80px) !important; }
          .text-col   { order: 1 !important; }
          .logo-col   { order: 2 !important; }
        }
      `}</style>

      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          top: "-5%",
          left: "25%",
          width: "50vw",
          height: "50vw",
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle,rgba(139,92,246,0.07) 0%,transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "5%",
          width: "35vw",
          height: "35vw",
          maxWidth: 500,
          maxHeight: 500,
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle,rgba(0,212,255,0.04) 0%,transparent 70%)",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "min(1800px,94vw)",
          margin: "0 auto",
          padding: "0 clamp(20px,3vw,60px)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="home-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(28px,3vw,48px)",
            alignItems: "center",
          }}
        >
          {/* ── Texto ── */}
          <div
            className="text-col"
            style={{
              order: 2,
              display: "flex",
              flexDirection: "column",
              gap: "clamp(12px,1.2vw,20px)",
            }}
          >
            <div
              className="opacity-0 animate-fade-up delay-100"
              style={{
                animationFillMode: "forwards",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span className="line-accent" />
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "clamp(10px,0.7vw,13px)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: C.mutedMid,
                }}
              >
                {t.home.role}
              </span>
            </div>

            <h1
              className="opacity-0 animate-fade-up delay-200"
              style={{
                animationFillMode: "forwards",
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(34px,4.6vw,80px)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              <span
                style={{ color: "rgba(232,232,240,0.22)", display: "block" }}
              >
                {t.home.greeting}
              </span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg,#fff 20%,#8B5CF6 60%,#00D4FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "block",
                }}
              >
                {t.home.name}
              </span>
            </h1>

            <p
              className="opacity-0 animate-fade-up delay-300"
              style={{
                animationFillMode: "forwards",
                fontSize: "clamp(13px,0.95vw,17px)",
                lineHeight: 1.75,
                color: C.mutedText,
                maxWidth: "clamp(300px,36vw,520px)",
                margin: 0,
              }}
            >
              {t.home.bio}
            </p>

            <div
              className="opacity-0 animate-fade-up delay-400"
              style={{
                animationFillMode: "forwards",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "clamp(10px,1vw,16px)",
              }}
            >
              <Link
                href="/work"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: "clamp(10px,0.72vw,13px)",
                  color: C.accent,
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "'DM Mono',monospace",
                  transition: "color .2s",
                }}
              >
                {lang === "en" ? "View work" : "Ver trabajos"}
                <FiArrowRight size={12} />
              </Link>
            </div>

            <div
              className="opacity-0 animate-fade-up delay-500"
              style={{
                animationFillMode: "forwards",
                display: "flex",
                alignItems: "center",
                gap: "clamp(14px,1.4vw,22px)",
              }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{ color: C.muted, transition: "color .2s" }}
                >
                  {s.icon}
                </a>
              ))}
              <div style={{ width: 1, height: 14, background: C.divider }} />
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "clamp(9px,0.65vw,11px)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: C.muted,
                }}
              >
                {t.home.poweredBy} Vyntra Orbit
              </span>
            </div>
          </div>

          {/* ── Logo card ── */}
          <div
            className="logo-col opacity-0 animate-fade-up delay-200"
            style={{
              animationFillMode: "forwards",
              order: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "clamp(14px,1.5vw,24px)",
            }}
          >
            <LogoCard />
          </div>
        </div>

        {/* ── Stats ── */}
        <div
          className="opacity-0 animate-fade-up delay-600"
          style={{
            animationFillMode: "forwards",
            marginTop: "clamp(20px,2.5vw,40px)",
            paddingTop: "clamp(14px,1.6vw,24px)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "clamp(14px,1.8vw,28px)",
            maxWidth: "clamp(280px,34vw,520px)",
          }}
        >
          {t.stats.map((s, i) => (
            <div
              key={i}
              style={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <span
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(26px,3vw,52px)",
                  fontWeight: 800,
                  lineHeight: 1,
                  background:
                    "linear-gradient(135deg,#fff 20%,#8B5CF6 60%,#00D4FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.num}+
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "clamp(9px,0.62vw,11px)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(232,232,240,0.35)",
                }}
              >
                {s.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
