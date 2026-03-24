"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiCheck, FiZap, FiShield, FiClock } from "react-icons/fi";
import { useLang } from "@/lib/LangContext";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// Deliverables por servicio — lo que el cliente realmente recibe
const deliverables = {
  0: ["Web app o dashboard a medida", "API REST documentada", "Panel admin incluido", "Deploy en producción", "30 días de soporte post-entrega"],
  1: ["Wireframes + prototipo Figma", "Sistema de diseño reutilizable", "Handoff completo para dev", "Responsive mobile-first", "2 rondas de revisión"],
  2: ["Flujo automatizado end-to-end", "Integración con tus herramientas actuales", "Dashboard de monitoreo", "Alertas y reportes automáticos", "Documentación técnica"],
  3: ["Auditoría inicial gratuita", "Plan de mejoras priorizado", "Monitoreo 24/7", "Respuesta en menos de 4 horas", "Reportes mensuales"],
};

const highlights = [
  { icon: <FiZap size={14} />, text: "Entrega en 2–4 semanas" },
  { icon: <FiShield size={14} />, text: "Código limpio y documentado" },
  { icon: <FiClock size={14} />, text: "Disponible para freelance" },
  { icon: <FiCheck size={14} />, text: "Soporte post-entrega incluido" },
];

export default function Services() {
  const { t } = useLang();
  const isEn = t.nav.home === "Home";

  return (
    <section style={{ minHeight: "80vh", padding: "64px 0 80px", position: "relative" }}>

      {/* Ambient */}
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 800, height: 400, pointerEvents: "none", background: "radial-gradient(ellipse, rgba(108,99,255,0.04) 0%, transparent 70%)" }} />

      <div className="vo-container" style={{ position: "relative", zIndex: 2 }}>

        {/* Section header */}
        <div className="opacity-0 animate-fade-up delay-100" style={{ animationFillMode: "forwards", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <span className="line-accent" />
            <span className="vo-label">{t.nav.services}</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 28 }}>
            <h2 className="vo-heading" style={{ color: "rgba(232,232,240,0.95)", maxWidth: 600 }}>
              {isEn ? "What I build for you" : "Lo que construyo para ti"}
            </h2>
            <Link href="/contact" className="btn-glow-solid" style={{ textDecoration: "none", fontSize: 11, padding: "11px 24px" }}>
              {isEn ? "Get a free quote →" : "Cotización gratis →"}
            </Link>
          </div>
        </div>

        {/* Highlights strip */}
        <div className="opacity-0 animate-fade-up delay-200" style={{ animationFillMode: "forwards", display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48, padding: "14px 20px", background: "rgba(108,99,255,0.04)", border: "1px solid rgba(108,99,255,0.12)", borderRadius: 8 }}>
          {highlights.map((h, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, color: "rgba(232,232,240,0.5)", fontSize: 11, paddingRight: 20 }}>
              <span style={{ color: "#6C63FF" }}>{h.icon}</span>
              {h.text}
            </div>
          ))}
        </div>

        {/* Services grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: 1, background: "rgba(255,255,255,0.04)" }}
        >
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              style={{
                background: "#080810",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "relative",
                cursor: "none",
                transition: "background 0.4s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(108,99,255,0.025)"}
              onMouseLeave={e => e.currentTarget.style.background = "#080810"}
            >
              {/* Number + arrow row */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(56px,7vw,80px)", fontWeight: 800, lineHeight: 1, WebkitTextStroke: "1px rgba(108,99,255,0.2)", color: "transparent", userSelect: "none" }}>{service.num}</span>
                <Link href="/contact"
                  style={{ marginTop: 8, width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "all 0.3s", flexShrink: 0 }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(108,99,255,0.5)"; e.currentTarget.style.color = "#6C63FF"; e.currentTarget.style.transform = "rotate(45deg)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.3)"; e.currentTarget.style.transform = "rotate(0deg)"; }}>
                  <FiArrowUpRight size={15} />
                </Link>
              </div>

              {/* Title */}
              <h3 className="vo-subheading" style={{ color: "white", marginBottom: 12 }}>{service.title}</h3>

              {/* Description */}
              <p style={{ fontSize: 13, lineHeight: 1.75, color: "rgba(232,232,240,0.45)", marginBottom: 24, maxWidth: 400 }}>
                {service.description}
              </p>

              {/* Deliverables */}
              <div style={{ marginTop: "auto" }}>
                <div style={{ fontSize: 9, color: "rgba(108,99,255,0.6)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 10 }}>
                  {isEn ? "Included" : "Incluye"}
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {deliverables[index].map((d, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "rgba(232,232,240,0.5)" }}>
                      <FiCheck size={11} style={{ color: "#6C63FF", flexShrink: 0 }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom hover line */}
              <div style={{ position: "absolute", bottom: 0, left: 32, right: 32, height: 1, background: "rgba(108,99,255,0.15)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s ease" }}
                className="service-underline" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } }}
          style={{ marginTop: 48, padding: "32px 36px", background: "rgba(108,99,255,0.06)", border: "1px solid rgba(108,99,255,0.15)", borderRadius: 8, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}
        >
          <div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(18px,2.5vw,26px)", fontWeight: 700, color: "white", marginBottom: 6 }}>
              {isEn ? "Have a project in mind?" : "¿Tienes un proyecto en mente?"}
            </div>
            <p style={{ fontSize: 13, color: "rgba(232,232,240,0.45)", maxWidth: 480 }}>
              {isEn
                ? "Tell me what you need. I'll get back to you within 24 hours with a proposal and timeline."
                : "Cuéntame qué necesitas. Te respondo en menos de 24 horas con una propuesta y cronograma."}
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            <Link href="/contact" className="btn-glow-solid" style={{ textDecoration: "none" }}>
              {isEn ? "Start a project" : "Iniciar proyecto"}
            </Link>
            <Link href="/work" className="btn-glow" style={{ textDecoration: "none" }}>
              {isEn ? "See my work" : "Ver trabajos"}
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}