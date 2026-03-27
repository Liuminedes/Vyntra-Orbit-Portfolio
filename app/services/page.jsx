"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiCheck,
  FiZap,
  FiShield,
  FiClock,
} from "react-icons/fi";
import { useLang } from "@/lib/LangContext";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const deliverables = {
  en: {
    0: [
      "Custom web app or dashboard",
      "Documented REST API",
      "Admin panel included",
      "Production deploy",
      "30 days post-delivery support",
    ],
    1: [
      "Wireframes + Figma prototype",
      "Reusable design system",
      "Complete dev handoff",
      "Responsive mobile-first",
      "2 revision rounds",
    ],
    2: [
      "End-to-end automated flow",
      "Integration with current tools",
      "Monitoring dashboard",
      "Automatic alerts & reports",
      "Technical documentation",
    ],
    3: [
      "Free initial audit",
      "Prioritized improvement plan",
      "24/7 monitoring",
      "Response in under 4 hours",
      "Monthly reports",
    ],
  },
  es: {
    0: [
      "Plataforma web a medida",
      "API REST documentada",
      "Panel de administrador",
      "Despliegue en producción",
      "30 días de soporte post-entrega",
    ],
    1: [
      "Wireframes + prototipo Figma",
      "Sistema de diseño reutilizable",
      "Handoff completo para dev",
      "Responsive mobile-first",
      "2 rondas de revisión",
    ],
    2: [
      "Flujo automatizado end-to-end",
      "Integración con tus herramientas actuales",
      "Dashboard de monitoreo",
      "Alertas y reportes automáticos",
      "Documentación técnica",
    ],
    3: [
      "Auditoría inicial gratuita",
      "Plan de mejoras priorizado",
      "Monitoreo 24/7",
      "Respuesta en menos de 4 horas",
      "Reportes mensuales",
    ],
  },
};

export default function Services() {
  const { t, lang } = useLang();
  const isEn = lang === "en";
  const del = deliverables[isEn ? "en" : "es"];

  const highlights = [
    {
      icon: <FiZap size={13} />,
      text: isEn ? "2–4 week delivery" : "Entrega en 2–4 semanas",
    },
    {
      icon: <FiShield size={13} />,
      text: isEn ? "Clean, documented code" : "Código limpio y documentado",
    },
    {
      icon: <FiClock size={13} />,
      text: isEn ? "Available for freelance" : "Disponible para freelance",
    },
    {
      icon: <FiCheck size={13} />,
      text: isEn ? "Post-delivery support" : "Soporte post-entrega incluido",
    },
  ];

  return (
    <section className="relative min-h-[80vh] py-10 md:py-16 lg:py-20">
      {/* Ambient */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse,rgba(108,99,255,0.04) 0%,transparent 70%)",
        }}
      />

      <div className="vo-container relative z-10">
        {/* ── Header ── */}
        <div
          className="opacity-0 animate-fade-up delay-100 mb-6"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="line-accent" />
            <span className="vo-label">{t.nav.services}</span>
          </div>
          {/* Título + CTA — fila en desktop, columna en móvil */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-0">
            <h2 className="vo-heading text-white/95 m-0">
              {isEn ? "What I build for you" : "Lo que construyo para ti"}
            </h2>
            <Link
              href="/contact"
              className="btn-glow-solid sm:whitespace-nowrap"
              style={{
                textDecoration: "none",
                fontSize: "clamp(11px,0.75vw,13px)",
                padding: "11px 22px",
              }}
            >
              {isEn ? "Get a free quote →" : "Cotización gratis →"}
            </Link>
          </div>
        </div>

        {/* ── Highlights strip ── */}
        <div
          className="opacity-0 animate-fade-up delay-200 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mb-8 p-3 sm:p-4 rounded-lg"
          style={{
            animationFillMode: "forwards",
            background: "rgba(108,99,255,0.04)",
            border: "1px solid rgba(108,99,255,0.12)",
          }}
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-white/70 text-sm sm:text-[13px] sm:pr-4"
            >
              <span style={{ color: "#6C63FF", flexShrink: 0 }}>{h.icon}</span>
              {h.text}
            </div>
          ))}
        </div>

        {/* ── Services grid ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "1px", background: "rgba(255,255,255,0.04)" }}
        >
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              className="flex flex-col p-5 sm:p-8 md:p-10 relative transition-colors duration-300"
              style={{ background: "#080810" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(108,99,255,0.025)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#080810")
              }
            >
              {/* Número + botón flecha */}
              <div className="flex items-start justify-between mb-4">
                {/* NÚMERO — visible con color sólido morado semitransparente */}
                <span
                  className="font-syne font-black leading-none select-none text-[52px] sm:text-[64px] md:text-[72px]"
                  style={{
                    color: "rgba(139,92,246,0.35)",
                    fontFamily: "'Syne',sans-serif",
                  }}
                >
                  {service.num}
                </span>
                <Link
                  href="/contact"
                  className="mt-2 w-9 h-9 rounded-full flex items-center justify-center text-white/30 transition-all duration-300 flex-shrink-0"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(108,99,255,0.5)";
                    e.currentTarget.style.color = "#6C63FF";
                    e.currentTarget.style.transform = "rotate(45deg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.3)";
                    e.currentTarget.style.transform = "rotate(0deg)";
                  }}
                >
                  <FiArrowUpRight size={14} />
                </Link>
              </div>

              {/* Título */}
              <h3 className="vo-subheading text-white mb-3">{service.title}</h3>

              {/* Descripción — color blanco legible */}
              <p className="text-white/65 leading-relaxed mb-6 text-sm sm:text-[14px]">
                {service.description}
              </p>

              {/* Deliverables */}
              <div className="mt-auto">
                <div
                  className="text-[9px] uppercase tracking-[0.15em] mb-2"
                  style={{ color: "rgba(108,99,255,0.7)" }}
                >
                  {isEn ? "Included" : "Incluye"}
                </div>
                <ul className="flex flex-col gap-1.5">
                  {del[index]?.map((d, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-white/70 text-[12px] sm:text-[13px] leading-relaxed"
                    >
                      <FiCheck
                        size={11}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "#6C63FF" }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 0.5 },
          }}
          className="mt-8 sm:mt-10 p-5 sm:p-8 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
          style={{
            background: "rgba(108,99,255,0.06)",
            border: "1px solid rgba(108,99,255,0.15)",
          }}
        >
          <div>
            <div
              className="text-white font-bold mb-2 text-lg sm:text-xl md:text-2xl"
              style={{ fontFamily: "'Syne',sans-serif" }}
            >
              {isEn
                ? "Have a project in mind?"
                : "¿Tienes un proyecto en mente?"}
            </div>
            <p className="text-white/60 text-sm max-w-md m-0">
              {isEn
                ? "Tell me what you need. I'll get back to you within 24 hours."
                : "Cuéntame qué necesitas. Te respondo en menos de 24 horas."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:flex-shrink-0">
            <Link
              href="/contact"
              className="btn-glow-solid text-center"
              style={{ textDecoration: "none" }}
            >
              {isEn ? "Start a project" : "Iniciar proyecto"}
            </Link>
            <Link
              href="/work"
              className="btn-glow text-center"
              style={{ textDecoration: "none" }}
            >
              {isEn ? "See my work" : "Ver trabajos"}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
