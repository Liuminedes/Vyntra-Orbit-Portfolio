"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiCheck,
  FiZap,
  FiShield,
  FiClock,
  FiLayers,
  FiCode,
  FiLayout,
} from "react-icons/fi";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPhp,
  SiSequelize,
  SiExpress,
} from "react-icons/si";
import { useLang } from "@/lib/LangContext";

/* ── Tech stack (igual que resume) ── */
const skillIcons = [
  { icon: <FaHtml5 />, name: "HTML 5", color: "#e34f26" },
  { icon: <FaCss3 />, name: "CSS 3", color: "#1572b6" },
  { icon: <FaJs />, name: "JavaScript", color: "#f7df1e" },
  { icon: <FaReact />, name: "React.JS", color: "#61dafb" },
  { icon: <SiNextdotjs />, name: "Next.JS", color: "#ffffff" },
  { icon: <FaNodeJs />, name: "Node.JS", color: "#68a063" },
  { icon: <SiExpress />, name: "Express", color: "#cccccc" },
  { icon: <SiSequelize />, name: "Sequelize", color: "#52b0e7" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38bdf8" },
  { icon: <FaDatabase />, name: "MySQL", color: "#4479a1" },
  { icon: <FaWordpress />, name: "WordPress", color: "#21759b" },
  { icon: <SiPhp />, name: "PHP", color: "#8892be" },
];

const SERVICE_ICONS = [FiLayers, FiCode, FiZap, FiLayout];

/* ── Contenido bilingüe ── */
const CONTENT = {
  en: {
    navLabel: "Services",
    heading: "What we build for you",
    subheading:
      "We turn your ideas into digital products that actually work — fast, solid and built to grow with your business.",
    highlights: [
      { icon: <FiZap size={13} />, text: "Fast delivery" },
      { icon: <FiShield size={13} />, text: "Clean, quality code" },
      { icon: <FiClock size={13} />, text: "Available now" },
      { icon: <FiCheck size={13} />, text: "Support after delivery" },
    ],
    sectionServices: "What we offer",
    servicesSubtitle: "Four areas where we help businesses grow digitally.",
    services: [
      {
        icon: 0,
        num: "01",
        title: "Platform Development",
        desc: "We build custom web platforms from scratch — tailored to how your business works. Includes admin panels, data management, payment integrations and everything you need to operate online.",
        tags: ["React", "Node.js", "MySQL", "REST API"],
      },
      {
        icon: 3,
        num: "02",
        title: "UI/UX Design",
        desc: "We design interfaces that are easy to understand and enjoyable to use. Clean, modern and ready for your developers — no guesswork needed.",
        tags: ["Figma", "Tailwind", "Framer Motion"],
      },
      {
        icon: 2,
        num: "03",
        title: "Automation",
        desc: "We connect your tools and eliminate manual, repetitive work. Your systems talk to each other automatically — saving you time and reducing errors every day.",
        tags: ["Zapier", "Make", "Webhooks", "Cron"],
      },
      {
        icon: 1,
        num: "04",
        title: "Technical Support",
        desc: "We take care of your platform so you don't have to worry. Fast response, continuous monitoring and constant improvements — your product always running at its best.",
        tags: ["Monitoring", "Security", "DevOps"],
      },
    ],
    sectionStack: "Our tech stack",
    stackSubtitle: "The tools we use to build reliable, scalable products.",
    ctaTitle: "Ready to get started?",
    ctaDesc:
      "Tell us what you need. We respond within 24 hours with a clear proposal.",
    ctaBtn: "Get a free quote",
    available: "Available for projects",
    info: [
      { label: "Studio", value: "Vyntra Orbit" },
      { label: "Based in", value: "Colombia 🇨🇴" },
      { label: "Lead dev", value: "Mauricio Rodriguez" },
      { label: "Delivery", value: "Fast turnaround" },
      { label: "Status", value: "✓ Open for projects" },
      { label: "Languages", value: "Spanish & English" },
    ],
    saasBanner: {
      headline: "Stop Losing Leads After Hours",
      subtitle: "Automate responses, follow-ups, and appointments with AI and WhatsApp for dealerships and growing businesses.",
      btnPrimary: "Book Free Demo",
      btnSecondary: "Watch Live Demo"
    },
  },
  es: {
    navLabel: "Servicios",
    heading: "Lo que construimos para ti",
    subheading:
      "Convertimos tus ideas en productos digitales que realmente funcionan — rápido, sólido y listo para crecer con tu negocio.",
    highlights: [
      { icon: <FiZap size={13} />, text: "Entrega rápida" },
      { icon: <FiShield size={13} />, text: "Código limpio y de calidad" },
      { icon: <FiClock size={13} />, text: "Disponible ahora" },
      { icon: <FiCheck size={13} />, text: "Soporte después de la entrega" },
    ],
    sectionServices: "Lo que ofrecemos",
    servicesSubtitle:
      "Cuatro áreas donde ayudamos a los negocios a crecer digitalmente.",
    services: [
      {
        icon: 0,
        num: "01",
        title: "Desarrollo de Plataformas",
        desc: "Construimos plataformas web personalizadas desde cero — adaptadas a cómo funciona tu negocio. Incluye paneles de control, gestión de datos, integraciones de pago y todo lo que necesitas para operar en línea.",
        tags: ["React", "Node.js", "MySQL", "REST API"],
      },
      {
        icon: 3,
        num: "02",
        title: "Diseño UI/UX",
        desc: "Diseñamos interfaces fáciles de entender y agradables de usar. Modernas, limpias y listas para tus desarrolladores — sin adivinar nada.",
        tags: ["Figma", "Tailwind", "Framer Motion"],
      },
      {
        icon: 2,
        num: "03",
        title: "Automatizaciones",
        desc: "Conectamos tus herramientas y eliminamos el trabajo manual y repetitivo. Tus sistemas se comunican solos — ahorrándote tiempo y reduciendo errores todos los días.",
        tags: ["Zapier", "Make", "Webhooks", "Cron"],
      },
      {
        icon: 1,
        num: "04",
        title: "Soporte Técnico",
        desc: "Nos encargamos de tu plataforma para que tú no tengas que preocuparte. Respuesta rápida, monitoreo continuo y mejoras constantes — tu producto siempre funcionando al máximo.",
        tags: ["Monitoreo", "Seguridad", "DevOps"],
      },
    ],
    sectionStack: "Nuestro stack tecnológico",
    stackSubtitle:
      "Las herramientas que usamos para construir productos confiables y escalables.",
    ctaTitle: "¿Listo para empezar?",
    ctaDesc:
      "Cuéntanos qué necesitas. Respondemos en menos de 24 horas con una propuesta clara.",
    ctaBtn: "Cotización gratis",
    available: "Disponible para proyectos",
    info: [
      { label: "Studio", value: "Vyntra Orbit" },
      { label: "Ubicación", value: "Colombia 🇨🇴" },
      { label: "Dev líder", value: "Mauricio Rodriguez" },
      { label: "Entrega", value: "Entrega rápida" },
      { label: "Estado", value: "✓ Abierto a proyectos" },
      { label: "Idiomas", value: "Español e Inglés" },
    ],
    saasBanner: {
      headline: "Deja de Perder Leads Fuera de Horario",
      subtitle: "Automatiza respuestas, seguimiento y citas con IA y WhatsApp para concesionarios y empresas en expansión.",
      btnPrimary: "Agendar Demo Gratis",
      btnSecondary: "Ver Demo en Vivo"
    },
  },
};

/* ── Variantes — idénticas a resume ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

/* ── Componentes idénticos a resume ── */
const SectionLabel = ({ label }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: "clamp(10px,1vw,16px)",
    }}
  >
    <span
      style={{
        display: "block",
        width: "clamp(28px,2.5vw,44px)",
        height: 1,
        background: "linear-gradient(90deg,#8B5CF6,transparent)",
        flexShrink: 0,
      }}
    />
    <span
      style={{
        fontFamily: "'DM Mono',monospace",
        fontSize: "clamp(10px,0.7vw,12px)",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "rgba(232,232,240,0.4)",
      }}
    >
      {label}
    </span>
  </div>
);

const Divider = () => (
  <div
    style={{
      height: 1,
      background:
        "linear-gradient(90deg,transparent,rgba(139,92,246,0.2),transparent)",
      margin: "clamp(56px,6vw,96px) 0",
    }}
  />
);

export default function Services() {
  const { lang } = useLang();
  const C = CONTENT[lang] || CONTENT.es;

  return (
    <div
      style={{
        padding: "clamp(48px,5vw,80px) 0 clamp(60px,6vw,100px)",
        position: "relative",
      }}
    >
      {/* Ambient — idéntico a resume */}
      <div
        style={{
          position: "fixed",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 400,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse,rgba(139,92,246,0.04) 0%,transparent 70%)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "min(1800px,94vw)",
          margin: "0 auto",
          padding: "0 clamp(20px,3vw,60px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ══════════════════════════
            1 — ENCABEZADO + HIGHLIGHTS
        ══════════════════════════ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            variants={fadeUp}
            style={{ marginBottom: "clamp(36px,4vw,56px)" }}
          >
            <SectionLabel label={C.navLabel} />
            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(32px,4vw,68px)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                color: "rgba(232,232,240,0.95)",
                margin: 0,
              }}
            >
              {C.heading}
            </h2>
          </motion.div>

          {/* Subheading + highlights + info pills — igual que el grid texto de resume */}
          <style>{`@media(min-width:900px){ .svc-top-grid { grid-template-columns: 1fr clamp(260px,26vw,400px) !important; } }`}</style>
          <div
            className="svc-top-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "clamp(32px,4vw,64px)",
              alignItems: "center",
            }}
          >
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(14px,1.4vw,22px)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(14px,1vw,18px)",
                  lineHeight: 1.85,
                  color: "rgba(232,232,240,0.6)",
                  margin: 0,
                  maxWidth: 640,
                }}
              >
                {C.subheading}
              </p>
              {/* Highlights — misma estructura que info pills de resume */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "clamp(6px,0.7vw,10px)",
                  paddingTop: "clamp(4px,0.5vw,8px)",
                }}
              >
                {C.highlights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 6,
                      padding: "clamp(6px,0.65vw,10px) clamp(10px,1vw,16px)",
                    }}
                  >
                    <span
                      style={{ color: "rgba(139,92,246,0.7)", flexShrink: 0 }}
                    >
                      {h.icon}
                    </span>
                    <span
                      style={{
                        width: 1,
                        height: 10,
                        background: "rgba(255,255,255,0.1)",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "clamp(11px,0.72vw,13px)",
                        color: "rgba(232,232,240,0.75)",
                        fontWeight: 500,
                      }}
                    >
                      {h.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Info pills — columna derecha, igual a resume */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(6px,0.7vw,10px)",
              }}
            >
              {C.info.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 6,
                    padding: "clamp(6px,0.65vw,10px) clamp(10px,1vw,16px)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "clamp(9px,0.58vw,11px)",
                      color: "rgba(139,92,246,0.7)",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      flexShrink: 0,
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      width: 1,
                      height: 10,
                      background: "rgba(255,255,255,0.1)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "clamp(11px,0.72vw,13px)",
                      color: "rgba(232,232,240,0.75)",
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
              {/* Badge disponible — igual a resume */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(8,8,16,0.92)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  borderRadius: 100,
                  padding: "8px 16px",
                  marginTop: 6,
                  backdropFilter: "blur(12px)",
                  alignSelf: "flex-start",
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
                    fontSize: "clamp(8px,0.56vw,10px)",
                    letterSpacing: "0.14em",
                    color: "rgba(232,232,240,0.55)",
                    textTransform: "uppercase",
                  }}
                >
                  {C.available}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <Divider />

        {/* ══════════════════════════
            2 — SERVICIOS (grid 2×2 igual a resume "Qué hacemos")
        ══════════════════════════ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            variants={fadeUp}
            style={{ marginBottom: "clamp(32px,3.5vw,52px)" }}
          >
            <SectionLabel label={C.sectionServices} />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(28px,3.5vw,58px)",
                  fontWeight: 800,
                  lineHeight: 1.0,
                  letterSpacing: "-0.02em",
                  color: "rgba(232,232,240,0.95)",
                  margin: 0,
                }}
              >
                {C.sectionServices}
              </h2>
              <p
                style={{
                  fontSize: "clamp(13px,0.88vw,15px)",
                  color: "rgba(232,232,240,0.4)",
                  maxWidth: 380,
                  margin: 0,
                  lineHeight: 1.65,
                }}
              >
                {C.servicesSubtitle}
              </p>
            </div>
          </motion.div>

          {/* Grid 2×2 — exactamente igual que "svc-grid" de resume */}
          <style>{`@media(min-width:700px){ .svc-cards-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
          <motion.div
            className="svc-cards-grid"
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 1,
              background: "rgba(255,255,255,0.04)",
            }}
          >
            {C.services.map((s, i) => {
              const Icon = SERVICE_ICONS[s.icon];
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    background: "#080810",
                    padding: "clamp(26px,2.8vw,44px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "clamp(12px,1.2vw,18px)",
                    position: "relative",
                    transition: "background .35s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(139,92,246,0.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#080810")
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontSize: "clamp(48px,5.5vw,76px)",
                        fontWeight: 800,
                        lineHeight: 1,
                        color: "rgba(139,92,246,0.3)",
                        userSelect: "none",
                      }}
                    >
                      {s.num}
                    </span>
                    <div
                      style={{
                        width: "clamp(40px,4vw,56px)",
                        height: "clamp(40px,4vw,56px)",
                        borderRadius: "50%",
                        border: "1px solid rgba(139,92,246,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(139,92,246,0.7)",
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: "clamp(17px,1.7vw,26px)",
                      fontWeight: 700,
                      color: "white",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(13px,0.86vw,15px)",
                      lineHeight: 1.75,
                      color: "rgba(232,232,240,0.55)",
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 5,
                      marginTop: 2,
                    }}
                  >
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'DM Mono',monospace",
                          fontSize: "clamp(8px,0.58vw,10px)",
                          padding: "3px 9px",
                          borderRadius: 4,
                          background: "rgba(139,92,246,0.08)",
                          border: "1px solid rgba(139,92,246,0.18)",
                          color: "rgba(139,92,246,0.7)",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* ══════════════════════════
            2.5 — SAAS BANNER (DRIVESYNC / EXPANSION)
        ══════════════════════════ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          style={{
            marginTop: "clamp(32px, 4vw, 56px)",
            padding: "clamp(32px, 4vw, 56px)",
            borderRadius: 16,
            background: "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(8,8,16,0.8) 100%)",
            border: "1px solid rgba(139,92,246,0.2)",
            boxShadow: "0 0 40px rgba(139,92,246,0.05), inset 0 0 20px rgba(139,92,246,0.05)",
            backdropFilter: "blur(12px)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "clamp(16px, 2vw, 24px)"
          }}
        >
          {/* Decorative glow */}
          <div style={{
            position: "absolute",
            top: "-50%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: "100%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          
          <h3 style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(24px, 3.5vw, 48px)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "white",
            margin: 0,
            zIndex: 1
          }}>
            {C.saasBanner.headline}
          </h3>
          <p style={{
            fontSize: "clamp(14px, 1vw, 18px)",
            color: "rgba(232,232,240,0.6)",
            maxWidth: 680,
            margin: 0,
            lineHeight: 1.6,
            zIndex: 1
          }}>
            {C.saasBanner.subtitle}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginTop: 8, zIndex: 1 }}>
            <Link href="/contact" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "linear-gradient(135deg,#00ff88,#00cc6a)",
              color: "#080810",
              padding: "clamp(12px,1vw,16px) clamp(24px,2vw,32px)",
              fontFamily: "'DM Mono',monospace",
              fontSize: "clamp(11px,0.75vw,13px)",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 4,
              transition: "transform .2s, box-shadow .2s",
              boxShadow: "0 0 20px rgba(0,255,136,0.2)"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 30px rgba(0,255,136,0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,136,0.2)"; }}>
              <FiCheck size={16} />
              {C.saasBanner.btnPrimary}
            </Link>
            <Link href="/contact" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "white",
              padding: "clamp(12px,1vw,16px) clamp(24px,2vw,32px)",
              fontFamily: "'DM Mono',monospace",
              fontSize: "clamp(11px,0.75vw,13px)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 4,
              transition: "background .2s, border-color .2s"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
              {C.saasBanner.btnSecondary}
            </Link>
          </div>
        </motion.div>

        <Divider />

        {/* ══════════════════════════
            3 — TECH STACK (igual que habilidades de resume)
        ══════════════════════════ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            variants={fadeUp}
            style={{ marginBottom: "clamp(28px,3vw,44px)" }}
          >
            <SectionLabel label={C.sectionStack} />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(28px,3.5vw,58px)",
                  fontWeight: 800,
                  lineHeight: 1.0,
                  letterSpacing: "-0.02em",
                  color: "rgba(232,232,240,0.95)",
                  margin: 0,
                }}
              >
                {C.sectionStack}
              </h2>
              <p
                style={{
                  fontSize: "clamp(13px,0.88vw,15px)",
                  color: "rgba(232,232,240,0.4)",
                  maxWidth: 380,
                  margin: 0,
                  lineHeight: 1.65,
                }}
              >
                {C.stackSubtitle}
              </p>
            </div>
          </motion.div>

          {/* Skill grid — 100% idéntico a resume */}
          <motion.div
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(clamp(78px,7.5vw,124px),1fr))",
              gap: "clamp(8px,0.85vw,13px)",
            }}
          >
            {skillIcons.map((skill, i) => (
              <motion.div key={i} variants={fadeUp} className="skill-item">
                <div
                  style={{
                    fontSize: "clamp(26px,2.8vw,44px)",
                    color: skill.color,
                  }}
                >
                  {skill.icon}
                </div>
                <span
                  style={{
                    fontSize: "clamp(9px,0.6vw,11px)",
                    color: "rgba(232,232,240,0.4)",
                    textAlign: "center",
                    letterSpacing: "0.05em",
                    fontFamily: "'DM Mono',monospace",
                  }}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <Divider />

        {/* ══════════════════════════
            CTA FINAL — idéntico a resume
        ══════════════════════════ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "clamp(20px,2.5vw,40px)",
            padding: "clamp(28px,3vw,48px)",
            background: "rgba(139,92,246,0.05)",
            border: "1px solid rgba(139,92,246,0.15)",
            borderRadius: 8,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(20px,2vw,34px)",
                fontWeight: 700,
                color: "white",
                margin: "0 0 clamp(8px,0.8vw,12px) 0",
              }}
            >
              {C.ctaTitle}
            </h3>
            <p
              style={{
                fontSize: "clamp(13px,0.88vw,15px)",
                color: "rgba(232,232,240,0.45)",
                margin: 0,
                maxWidth: 460,
                lineHeight: 1.65,
              }}
            >
              {C.ctaDesc}
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "linear-gradient(135deg,#8B5CF6,#6C63FF)",
              color: "white",
              padding: "clamp(12px,1.1vw,18px) clamp(22px,2vw,34px)",
              fontFamily: "'DM Mono',monospace",
              fontSize: "clamp(11px,0.72vw,13px)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 0 32px rgba(139,92,246,0.3)",
              transition: "opacity .2s,transform .2s",
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
            {C.ctaBtn}
            <FiArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
