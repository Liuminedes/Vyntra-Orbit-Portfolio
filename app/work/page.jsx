"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { useLang } from "@/lib/LangContext";
import dynamic from "next/dynamic";

const DemoSkeleton = () => (
  <div
    style={{
      height: 420,
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <span
      style={{
        fontSize: 11,
        color: "rgba(255,255,255,0.2)",
        letterSpacing: "0.1em",
        fontFamily: "'DM Mono',monospace",
      }}
    >
      Cargando demo...
    </span>
  </div>
);

const SyncDealerDemo = dynamic(
  () => import("@/components/demos/SyncDealerDemo"),
  { ssr: false, loading: () => <DemoSkeleton /> },
);
const ShaddaiDemo = dynamic(() => import("@/components/demos/ShaddaiDemo"), {
  ssr: false,
  loading: () => <DemoSkeleton />,
});
const AtlasMarketDemo = dynamic(
  () => import("@/components/demos/AtlasMarketDemo"),
  { ssr: false, loading: () => <DemoSkeleton /> },
);
const IntraComDemo = dynamic(() => import("@/components/demos/IntraComDemo"), {
  ssr: false,
  loading: () => <DemoSkeleton />,
});
const DentalSaaSDemo = dynamic(
  () => import("@/components/demos/DentalSaaSDemo"),
  { ssr: false, loading: () => <DemoSkeleton /> },
);
const MiListaDemo = dynamic(() => import("@/components/demos/MiListaDemo"), {
  ssr: false,
  loading: () => <DemoSkeleton />,
});

const getDemos = (lang) => ({
  SyncDealer: <SyncDealerDemo lang={lang} />,
  "Shaddai Canino": <ShaddaiDemo lang={lang} />,
  "Atlas Market Suite": <AtlasMarketDemo lang={lang} />,
  IntraCom: <IntraComDemo lang={lang} />,
  DentalSaaS: <DentalSaaSDemo lang={lang} />,
  "Mi Lista": <MiListaDemo lang={lang} />,
  MercadoApp: <MiListaDemo lang={lang} />,
});

const Badge = ({ badge, inDevLabel, completedLabel }) =>
  badge === "in-dev" ? (
    <span className="badge-wip">
      <span className="badge-dot-wip" />
      {inDevLabel}
    </span>
  ) : (
    <span className="badge-done">
      <span className="badge-dot-done" />
      {completedLabel}
    </span>
  );

const infoPane = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, x: 8, transition: { duration: 0.15 } },
};
const demoPane = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
};

export default function Work() {
  const { t, lang } = useLang();
  const projects = t.work.projects;
  const [active, setActive] = useState(0);
  const project = projects[active];
  const demos = getDemos(lang);
  const demo = demos[project.category];

  return (
    <section
      style={{
        minHeight: "80vh",
        padding: "clamp(40px,5vw,80px) 0 clamp(60px,6vw,100px)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "min(500px,40vw)",
          height: "min(500px,40vw)",
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 80% 20%,rgba(108,99,255,0.05) 0%,transparent 70%)",
        }}
      />
      <div className="vo-container" style={{ position: "relative", zIndex: 2 }}>
        <div
          className="opacity-0 animate-fade-up"
          style={{
            animationFillMode: "forwards",
            marginBottom: "clamp(20px,3vw,36px)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 10,
            }}
          >
            <span className="line-accent" />
            <span className="vo-label">{t.nav.work}</span>
          </div>
          <h2 className="vo-heading" style={{ color: "rgba(232,232,240,0.9)" }}>
            {lang === "en" ? "Selected work" : "Trabajos"}
          </h2>
        </div>

        <div
          className="tab-scroll"
          style={{
            display: "flex",
            gap: 6,
            marginBottom: "clamp(20px,3vw,36px)",
            flexWrap: "wrap",
          }}
        >
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: "clamp(6px,0.5vw,8px) clamp(12px,1.2vw,18px)",
                borderRadius: 100,
                border: `1px solid ${active === i ? "rgba(108,99,255,0.5)" : "rgba(255,255,255,0.08)"}`,
                background:
                  active === i ? "rgba(108,99,255,0.12)" : "transparent",
                color: active === i ? "#6C63FF" : "rgba(255,255,255,0.35)",
                fontSize: "clamp(10px,0.7vw,12px)",
                cursor: "pointer",
                fontFamily: "'DM Mono',monospace",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {p.category}
            </button>
          ))}
        </div>

        <style>{`@media(min-width:1024px){.work-layout{grid-template-columns:clamp(260px,22vw,340px) 1fr !important;}}`}</style>
        <div
          className="work-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(24px,3.5vw,48px)",
            alignItems: "start",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${active}`}
              variants={infoPane}
              initial="hidden"
              animate="show"
              exit="exit"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(12px,1.5vw,20px)",
              }}
            >
              <span className="num-badge">{project.num}</span>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <h3 className="vo-subheading" style={{ color: "white" }}>
                  {project.category}
                </h3>
                <Badge
                  badge={project.badge}
                  inDevLabel={t.work.inDev}
                  completedLabel={t.work.completed}
                />
              </div>
              <p
                className="vo-body"
                style={{ maxWidth: "clamp(280px,36vw,480px)", lineHeight: 1.8 }}
              >
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {project.stack.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "clamp(9px,0.6vw,11px)",
                      padding: "3px clamp(8px,0.8vw,12px)",
                      borderRadius: 4,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.05em",
                      fontFamily: "'DM Mono',monospace",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 20, paddingTop: 4 }}>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: "clamp(10px,0.7vw,12px)",
                      color: "#6C63FF",
                      textDecoration: "none",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontFamily: "'DM Mono',monospace",
                    }}
                  >
                    <FiArrowUpRight size={13} />
                    {t.work.live}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: "clamp(10px,0.7vw,12px)",
                      color: "rgba(255,255,255,0.35)",
                      textDecoration: "none",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontFamily: "'DM Mono',monospace",
                    }}
                  >
                    <FiGithub size={13} />
                    {t.work.github}
                  </a>
                )}
              </div>
              {/* Mobile view ≤1023px */}
              <style>{`.mob-demo{display:none}@media(max-width:1023px){.mob-demo{display:block;margin-top:4px}}`}</style>
              <div className="mob-demo">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`mob-${active}-${lang}`}
                    variants={demoPane}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <div
                      style={{
                        marginBottom: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontFamily: "'DM Mono',monospace",
                      }}
                    >
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "#00ff88",
                          animation: "pulse-wip 2s infinite",
                        }}
                      />
                      <span
                        style={{
                          fontSize: 9,
                          color: "rgba(255,255,255,0.25)",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                        }}
                      >
                        {lang === "en"
                          ? "Project preview"
                          : "Vista previa del proyecto"}
                      </span>
                    </div>
                    {demo || <DemoSkeleton />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              className="demo-panel"
              key={`demo-${active}-${lang}`}
              variants={demoPane}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <div
                style={{
                  fontSize: "clamp(9px,0.6vw,11px)",
                  color: "rgba(255,255,255,0.25)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "'DM Mono',monospace",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#00ff88",
                    display: "inline-block",
                    animation: "pulse-wip 2s infinite",
                    flexShrink: 0,
                  }}
                />
                {lang === "en"
                  ? "Interactive demo — explore the platform"
                  : "Demo interactiva — explora la plataforma"}
              </div>
              {demo || <DemoSkeleton />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
