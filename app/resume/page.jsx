"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs,
  FaDatabase, FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPhp, SiSequelize, SiExpress } from "react-icons/si";
import { FiExternalLink, FiCalendar, FiAward, FiCode, FiUser } from "react-icons/fi";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";

const skillIcons = [
  { icon: <FaHtml5 />,      name: "HTML 5",       color: "#e34f26" },
  { icon: <FaCss3 />,       name: "CSS 3",        color: "#1572b6" },
  { icon: <FaJs />,         name: "JavaScript",   color: "#f7df1e" },
  { icon: <FaReact />,      name: "React.JS",     color: "#61dafb" },
  { icon: <SiNextdotjs />,  name: "Next.JS",      color: "#fff" },
  { icon: <FaNodeJs />,     name: "Node.JS",      color: "#68a063" },
  { icon: <SiExpress />,    name: "Express",      color: "#ccc" },
  { icon: <SiSequelize />,  name: "Sequelize",    color: "#52b0e7" },
  { icon: <SiTailwindcss />,name: "Tailwind CSS", color: "#38bdf8" },
  { icon: <FaDatabase />,   name: "MySQL",        color: "#4479a1" },
  { icon: <FaWordpress />,  name: "WordPress",    color: "#21759b" },
  { icon: <SiPhp />,        name: "PHP",          color: "#8892be" },
];

const pane = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22,1,0.36,1] } },
  exit:   { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const TABS = [
  { key: "experience", icon: <FiCalendar size={13}/> },
  { key: "education",  icon: <FiAward size={13}/> },
  { key: "skills",     icon: <FiCode size={13}/> },
  { key: "about",      icon: <FiUser size={13}/> },
];

export default function Resume() {
  const { t } = useLang();
  const r = t.resume;
  const [tab, setTab] = useState("experience");
  const isEn = t.nav.home === "Home";

  return (
    <section style={{ minHeight: "80vh", padding: "64px 0 80px", position: "relative" }}>

      {/* Ambient */}
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, pointerEvents: "none", background: "radial-gradient(ellipse, rgba(108,99,255,0.04) 0%, transparent 70%)" }} />

      <div className="vo-container" style={{ position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div className="opacity-0 animate-fade-up delay-100" style={{ animationFillMode: "forwards", marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <span className="line-accent" />
            <span className="vo-label">{t.nav.resume}</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
            <h2 className="vo-heading" style={{ color: "rgba(232,232,240,0.95)" }}>
              {isEn ? "My profile" : "Mi perfil"}
            </h2>
            <Link href="/contact" className="btn-glow-solid" style={{ textDecoration: "none" }}>
              {isEn ? "Work with me →" : "Trabajar conmigo →"}
            </Link>
          </div>
        </div>

        {/* Tab pills */}
        <div style={{ display: "flex", gap: 6, marginBottom: 40, flexWrap: "wrap" }}>
          {TABS.map(({ key, icon }) => {
            const label = r.tabs[key];
            return (
              <button key={key} onClick={() => setTab(key)} style={{
                display: "flex", alignItems: "center", gap: 7,
                padding: "8px 18px", borderRadius: 100,
                border: `1px solid ${tab === key ? "rgba(108,99,255,0.5)" : "rgba(255,255,255,0.08)"}`,
                background: tab === key ? "rgba(108,99,255,0.12)" : "transparent",
                color: tab === key ? "#6C63FF" : "rgba(255,255,255,0.4)",
                fontSize: "clamp(11px,0.75vw,13px)", cursor: "pointer",
                fontFamily: "'DM Mono',monospace", letterSpacing: "0.08em",
                textTransform: "uppercase", transition: "all .2s",
              }}>
                {icon}{label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">

          {/* ── Experience ── */}
          {tab === "experience" && (
            <motion.div key="exp" variants={pane} initial="hidden" animate="show" exit="exit">
              <div style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.04)" }}>
                {r.experience.items.map((item, i) => (
                  <div key={i} style={{ background: "#080810", padding: "clamp(24px,2.5vw,40px) clamp(24px,2.5vw,40px)", display: "grid", gridTemplateColumns: "clamp(120px,14vw,200px) 1fr", gap: "clamp(16px,2vw,40px)", alignItems: "start", transition: "background .3s" }}
                    onMouseEnter={e => e.currentTarget.style.background="rgba(108,99,255,0.025)"}
                    onMouseLeave={e => e.currentTarget.style.background="#080810"}>
                    <div>
                      <div style={{ fontSize: "clamp(10px,0.7vw,12px)", color: "#6C63FF", fontFamily: "'DM Mono',monospace", letterSpacing: "0.12em", marginBottom: 8 }}>{item.duration}</div>
                      <div style={{ fontSize: "clamp(11px,0.75vw,13px)", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Mono',monospace" }}>{item.company}</div>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(18px,1.8vw,28px)", fontWeight: 700, color: "white", marginBottom: 8 }}>{item.position}</h3>
                      <div style={{ width: 32, height: 1, background: "rgba(108,99,255,0.3)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Education ── */}
          {tab === "education" && (
            <motion.div key="edu" variants={pane} initial="hidden" animate="show" exit="exit">
              <div style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.04)" }}>
                {r.education.items.map((item, i) => (
                  <div key={i} style={{ background: "#080810", padding: "clamp(24px,2.5vw,40px) clamp(24px,2.5vw,40px)", display: "grid", gridTemplateColumns: "clamp(120px,14vw,200px) 1fr", gap: "clamp(16px,2vw,40px)", alignItems: "start", transition: "background .3s" }}
                    onMouseEnter={e => e.currentTarget.style.background="rgba(108,99,255,0.025)"}
                    onMouseLeave={e => e.currentTarget.style.background="#080810"}>
                    <div>
                      <div style={{ fontSize: "clamp(10px,0.7vw,12px)", color: "#6C63FF", fontFamily: "'DM Mono',monospace", letterSpacing: "0.12em", marginBottom: 8 }}>{item.duration}</div>
                      <div style={{ fontSize: "clamp(11px,0.75vw,13px)", color: "rgba(255,255,255,0.3)", fontFamily: "'DM Mono',monospace" }}>{item.institution}</div>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(18px,1.8vw,28px)", fontWeight: 700, color: "white", marginBottom: 8 }}>{item.degree}</h3>
                      <div style={{ width: 32, height: 1, background: "rgba(108,99,255,0.3)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Skills ── */}
          {tab === "skills" && (
            <motion.div key="skills" variants={pane} initial="hidden" animate="show" exit="exit">
              <p style={{ fontSize: "clamp(13px,0.9vw,16px)", color: "rgba(232,232,240,0.45)", marginBottom: 32, maxWidth: 560 }}>{r.skills.description}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(clamp(80px,8vw,130px), 1fr))", gap: "clamp(8px,1vw,16px)" }}>
                {skillIcons.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div style={{ fontSize: "clamp(28px,3vw,46px)", color: skill.color }}>{skill.icon}</div>
                    <span style={{ fontSize: "clamp(9px,0.65vw,11px)", color: "rgba(232,232,240,0.4)", textAlign: "center", letterSpacing: "0.05em" }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── About ── */}
          {tab === "about" && (
            <motion.div key="about" variants={pane} initial="hidden" animate="show" exit="exit">
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40 }}>
                <style>{`@media(min-width:768px){ .about-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
                <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40 }}>
                  {/* Bio */}
                  <div>
                    <p style={{ fontSize: "clamp(14px,1vw,17px)", lineHeight: 1.85, color: "rgba(232,232,240,0.55)", marginBottom: 32 }}>
                      {r.about.description}
                    </p>
                    <Link href="/contact" className="btn-glow" style={{ textDecoration: "none" }}>
                      {isEn ? "Let's talk →" : "Hablemos →"}
                    </Link>
                  </div>

                  {/* Info table */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {r.about.info.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 16, padding: "clamp(12px,1.2vw,18px) 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "clamp(9px,0.65vw,11px)", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.15em", minWidth: "clamp(80px,8vw,110px)", flexShrink: 0 }}>{item.fieldName}</span>
                        <span style={{ fontSize: "clamp(13px,0.9vw,16px)", color: "rgba(232,232,240,0.8)", fontWeight: 500 }}>{item.fieldValue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}