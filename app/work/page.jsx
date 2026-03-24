"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { useLang } from "@/lib/LangContext";
import dynamic from "next/dynamic";

const SyncDealerDemo  = dynamic(() => import("@/components/demos/SyncDealerDemo"),  { ssr: false, loading: () => <DemoSkeleton /> });
const ShaddaiDemo     = dynamic(() => import("@/components/demos/ShaddaiDemo"),     { ssr: false, loading: () => <DemoSkeleton /> });
const AtlasMarketDemo = dynamic(() => import("@/components/demos/AtlasMarketDemo"), { ssr: false, loading: () => <DemoSkeleton /> });
const IntraComDemo    = dynamic(() => import("@/components/demos/IntraComDemo"),    { ssr: false, loading: () => <DemoSkeleton /> });
const DentalSaaSDemo  = dynamic(() => import("@/components/demos/DentalSaaSDemo"),  { ssr: false, loading: () => <DemoSkeleton /> });

const DemoSkeleton = () => (
  <div style={{ height: 420, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>Cargando demo...</span>
  </div>
);

const DEMOS = {
  "SyncDealer":          <SyncDealerDemo />,
  "Shaddai Canino":      <ShaddaiDemo />,
  "Atlas Market Suite":  <AtlasMarketDemo />,
  "IntraCom":            <IntraComDemo />,
  "DentalSaaS":          <DentalSaaSDemo />,
};

const Badge = ({ badge, inDevLabel, completedLabel }) =>
  badge === "in-dev"
    ? <span className="badge-wip"><span className="badge-dot-wip" />{inDevLabel}</span>
    : <span className="badge-done"><span className="badge-dot-done" />{completedLabel}</span>;

const infoPane = {
  hidden: { opacity: 0, x: -12 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, x: 8,  transition: { duration: 0.15 } },
};
const demoPane = {
  hidden: { opacity: 0, y: 10 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -6, transition: { duration: 0.15 } },
};

export default function Work() {
  const { t } = useLang();
  const projects = t.work.projects;
  const [active, setActive] = useState(0);
  const project = projects[active];
  const demo = DEMOS[project.category];

  return (
    <section style={{ minHeight: "80vh", padding: "64px 0 80px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 500, height: 500, pointerEvents: "none", background: "radial-gradient(circle at 80% 20%, rgba(108,99,255,0.05) 0%, transparent 70%)" }} />

      <div className="vo-container" style={{ position: "relative", zIndex: 2 }}>

        {/* Section header */}
        <div className="opacity-0 animate-fade-up" style={{ animationFillMode: "forwards", marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span className="line-accent" />
            <span className="vo-label">{t.nav.work}</span>
          </div>
          <h2 className="vo-heading" style={{ color: "rgba(232,232,240,0.9)" }}>
            {t.work.heading || "Selected work"}
          </h2>
        </div>

        {/* Tab selector */}
        <div style={{ display: "flex", gap: 6, marginBottom: 36, flexWrap: "wrap" }}>
          {projects.map((p, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: "6px 14px", borderRadius: 100,
              border: `1px solid ${active === i ? "rgba(108,99,255,0.5)" : "rgba(255,255,255,0.08)"}`,
              background: active === i ? "rgba(108,99,255,0.12)" : "transparent",
              color: active === i ? "#6C63FF" : "rgba(255,255,255,0.35)",
              fontSize: 11, cursor: "pointer", fontFamily: "'DM Mono',monospace",
              letterSpacing: "0.05em", transition: "all 0.2s",
            }}>
              {p.category}
            </button>
          ))}
        </div>

        {/* Two-column layout */}
        <style>{`
          @media(min-width:1024px){
            .work-layout { grid-template-columns: 300px 1fr !important; }
          }
        `}</style>
        <div className="work-layout" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 36, alignItems: "start" }}>

          {/* Info panel */}
          <AnimatePresence mode="wait">
            <motion.div key={`info-${active}`} variants={infoPane} initial="hidden" animate="show" exit="exit"
              style={{ display: "flex", flexDirection: "column", gap: 18 }}>

              <span className="num-badge">{project.num}</span>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
                <h3 className="vo-subheading" style={{ color: "white" }}>{project.category}</h3>
                <Badge badge={project.badge} inDevLabel={t.work.inDev} completedLabel={t.work.completed} />
              </div>

              <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(232,232,240,0.45)", maxWidth: 320 }}>
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {project.stack.map((s, i) => (
                  <span key={i} style={{ fontSize: 9, padding: "3px 10px", borderRadius: 4, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>{s}</span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 16, paddingTop: 4 }}>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, color: "#6C63FF", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    <FiArrowUpRight size={13} />{t.work.live}
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    <FiGithub size={13} />{t.work.github}
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Demo panel */}
          <AnimatePresence mode="wait">
            <motion.div key={`demo-${active}`} variants={demoPane} initial="hidden" animate="show" exit="exit">
              {demo ? (
                <>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00ff88", display: "inline-block", animation: "pulse-wip 2s infinite" }} />
                    Demo interactiva — explora la plataforma
                  </div>
                  {demo}
                </>
              ) : (
                <DemoSkeleton />
              )}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}