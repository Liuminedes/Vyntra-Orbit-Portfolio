"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight, FiCheck, FiZap, FiShield, FiClock, FiLayers,
  FiCode, FiLayout,
} from "react-icons/fi";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs,
  FaDatabase, FaWordpress,
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiPhp, SiSequelize, SiExpress,
} from "react-icons/si";
import { useLang } from "@/lib/LangContext";

/* ── Tech stack (igual que resume) ── */
const skillIcons = [
  { icon: <FaHtml5 />,       name: "HTML 5",       color: "#e34f26" },
  { icon: <FaCss3 />,        name: "CSS 3",        color: "#1572b6" },
  { icon: <FaJs />,          name: "JavaScript",   color: "#f7df1e" },
  { icon: <FaReact />,       name: "React.JS",     color: "#61dafb" },
  { icon: <SiNextdotjs />,   name: "Next.JS",      color: "#ffffff" },
  { icon: <FaNodeJs />,      name: "Node.JS",      color: "#68a063" },
  { icon: <SiExpress />,     name: "Express",      color: "#cccccc" },
  { icon: <SiSequelize />,   name: "Sequelize",    color: "#52b0e7" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38bdf8" },
  { icon: <FaDatabase />,    name: "MySQL",        color: "#4479a1" },
  { icon: <FaWordpress />,   name: "WordPress",    color: "#21759b" },
  { icon: <SiPhp />,         name: "PHP",          color: "#8892be" },
];

const SERVICE_ICONS = [FiLayers, FiCode, FiZap, FiLayout];

/* ── Contenido bilingüe ── */
const CONTENT = {
  en: {
    navLabel:   "Services",
    heading:    "What I build for you",
    subheading: "End-to-end digital development at startup speed with enterprise-level quality.",
    highlights: [
      { icon: <FiZap size={13} />,    text: "2–4 week delivery"       },
      { icon: <FiShield size={13} />, text: "Clean, documented code"  },
      { icon: <FiClock size={13} />,  text: "Available for freelance" },
      { icon: <FiCheck size={13} />,  text: "Post-delivery support"   },
    ],
    sectionServices: "What we offer",
    servicesSubtitle: "Four core areas where we deliver the most value.",
    services: [
      {
        icon: 0, num: "01",
        title: "Platform Development",
        desc:  "Custom web platforms focused on performance and security. API integrations, admin dashboards, and CI/CD pipelines ready to scale.",
        tags:  ["React","Node.js","MySQL","REST API"],
      },
      {
        icon: 3, num: "02",
        title: "UI/UX Design",
        desc:  "User-centered UI/UX: research, information architecture, and prototypes. Accessible, developer-ready handoff.",
        tags:  ["Figma","Tailwind","Framer Motion"],
      },
      {
        icon: 2, num: "03",
        title: "Automation & Integrations",
        desc:  "End-to-end automations via APIs, webhooks, and orchestrators (Zapier/Make) or Node.js cron jobs. Sync data, trigger alerts, generate reports.",
        tags:  ["Zapier","Make","Webhooks","Cron"],
      },
      {
        icon: 1, num: "04",
        title: "Technical Support",
        desc:  "Ongoing support: performance, security, backups, and monitoring. Fast incident response and continuous improvements.",
        tags:  ["Monitoring","Security","DevOps"],
      },
    ],
    sectionStack:   "Our tech stack",
    stackSubtitle:  "Technologies we master to deliver robust, maintainable products.",
    ctaTitle:  "Have a project in mind?",
    ctaDesc:   "Tell us what you need. We'll get back to you within 24 hours with a proposal and timeline.",
    ctaBtn:    "Get a free quote",
    available: "Available for projects",
    info: [
      { label: "Studio",     value: "Vyntra Orbit"        },
      { label: "Based in",   value: "Colombia 🇨🇴"         },
      { label: "Lead dev",   value: "Mauricio Rodriguez"  },
      { label: "Delivery",   value: "2–4 weeks avg"       },
      { label: "Available",  value: "✓ Open for projects" },
      { label: "Languages",  value: "Spanish & English"   },
    ],
  },
  es: {
    navLabel:   "Servicios",
    heading:    "Lo que construyo para ti",
    subheading: "Desarrollo digital end-to-end a velocidad de startup con calidad de nivel empresarial.",
    highlights: [
      { icon: <FiZap size={13} />,    text: "Entrega en 2–4 semanas"        },
      { icon: <FiShield size={13} />, text: "Código limpio y documentado"   },
      { icon: <FiClock size={13} />,  text: "Disponible para freelance"     },
      { icon: <FiCheck size={13} />,  text: "Soporte post-entrega incluido" },
    ],
    sectionServices: "Lo que ofrecemos",
    servicesSubtitle: "Cuatro áreas principales donde entregamos el mayor valor.",
    services: [
      {
        icon: 0, num: "01",
        title: "Desarrollo de Plataformas",
        desc:  "Desarrollo a medida con foco en rendimiento y seguridad. Integraciones (APIs, pagos), panel de control y CI/CD listos para crecer.",
        tags:  ["React","Node.js","MySQL","REST API"],
      },
      {
        icon: 3, num: "02",
        title: "Diseño UI/UX",
        desc:  "UI/UX centrado en el usuario: investigación, arquitectura de información y prototipos. Accesibilidad y handoff impecable para dev.",
        tags:  ["Figma","Tailwind","Framer Motion"],
      },
      {
        icon: 2, num: "03",
        title: "Automatizaciones e Integraciones",
        desc:  "Automatizaciones end-to-end con APIs, webhooks y orquestadores (Zapier/Make) o Node/cron jobs: sincroniza datos, envía alertas, genera reportes.",
        tags:  ["Zapier","Make","Webhooks","Cron"],
      },
      {
        icon: 1, num: "04",
        title: "Soporte Técnico",
        desc:  "Soporte continuo: rendimiento, seguridad, backups y monitoreo. Respuesta rápida ante incidentes y mejoras continuas.",
        tags:  ["Monitoreo","Seguridad","DevOps"],
      },
    ],
    sectionStack:   "Nuestro stack tecnológico",
    stackSubtitle:  "Tecnologías que dominamos para entregar productos robustos y mantenibles.",
    ctaTitle:  "¿Tienes un proyecto en mente?",
    ctaDesc:   "Cuéntanos qué necesitas. Te respondemos en menos de 24 horas con una propuesta y cronograma.",
    ctaBtn:    "Cotización gratis",
    available: "Disponible para proyectos",
    info: [
      { label: "Studio",      value: "Vyntra Orbit"              },
      { label: "Ubicación",   value: "Colombia 🇨🇴"               },
      { label: "Dev líder",   value: "Mauricio Rodriguez"        },
      { label: "Entrega",     value: "Promedio 2–4 semanas"      },
      { label: "Disponible",  value: "✓ Abierto a proyectos"     },
      { label: "Idiomas",     value: "Español e Inglés"          },
    ],
  },
};

/* ── Variantes — idénticas a resume ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

/* ── Componentes idénticos a resume ── */
const SectionLabel = ({ label }) => (
  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:"clamp(10px,1vw,16px)" }}>
    <span style={{ display:"block", width:"clamp(28px,2.5vw,44px)", height:1, background:"linear-gradient(90deg,#8B5CF6,transparent)", flexShrink:0 }} />
    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(10px,0.7vw,12px)", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(232,232,240,0.4)" }}>
      {label}
    </span>
  </div>
);

const Divider = () => (
  <div style={{ height:1, background:"linear-gradient(90deg,transparent,rgba(139,92,246,0.2),transparent)", margin:"clamp(56px,6vw,96px) 0" }} />
);

export default function Services() {
  const { lang } = useLang();
  const C = CONTENT[lang] || CONTENT.es;

  return (
    <div style={{ padding:"clamp(48px,5vw,80px) 0 clamp(60px,6vw,100px)", position:"relative" }}>

      {/* Ambient — idéntico a resume */}
      <div style={{ position:"fixed", top:"30%", left:"50%", transform:"translateX(-50%)", width:800, height:400, pointerEvents:"none", background:"radial-gradient(ellipse,rgba(139,92,246,0.04) 0%,transparent 70%)", zIndex:0 }} />

      <div style={{ width:"100%", maxWidth:"min(1800px,94vw)", margin:"0 auto", padding:"0 clamp(20px,3vw,60px)", position:"relative", zIndex:1 }}>

        {/* ══════════════════════════
            1 — ENCABEZADO + HIGHLIGHTS
        ══════════════════════════ */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>

          <motion.div variants={fadeUp} style={{ marginBottom:"clamp(36px,4vw,56px)" }}>
            <SectionLabel label={C.navLabel} />
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(32px,4vw,68px)", fontWeight:800, lineHeight:1.0, letterSpacing:"-0.02em", color:"rgba(232,232,240,0.95)", margin:0 }}>
              {C.heading}
            </h2>
          </motion.div>

          {/* Subheading + highlights + info pills — igual que el grid texto de resume */}
          <style>{`@media(min-width:900px){ .svc-top-grid { grid-template-columns: 1fr clamp(260px,26vw,400px) !important; } }`}</style>
          <div className="svc-top-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"clamp(32px,4vw,64px)", alignItems:"center" }}>

            <motion.div variants={fadeUp} style={{ display:"flex", flexDirection:"column", gap:"clamp(14px,1.4vw,22px)" }}>
              <p style={{ fontSize:"clamp(14px,1vw,18px)", lineHeight:1.85, color:"rgba(232,232,240,0.6)", margin:0, maxWidth:640 }}>
                {C.subheading}
              </p>
              {/* Highlights — misma estructura que info pills de resume */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:"clamp(6px,0.7vw,10px)", paddingTop:"clamp(4px,0.5vw,8px)" }}>
                {C.highlights.map((h, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:6, padding:"clamp(6px,0.65vw,10px) clamp(10px,1vw,16px)" }}>
                    <span style={{ color:"rgba(139,92,246,0.7)", flexShrink:0 }}>{h.icon}</span>
                    <span style={{ width:1, height:10, background:"rgba(255,255,255,0.1)" }} />
                    <span style={{ fontSize:"clamp(11px,0.72vw,13px)", color:"rgba(232,232,240,0.75)", fontWeight:500 }}>{h.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Info pills — columna derecha, igual a resume */}
            <motion.div variants={fadeUp} style={{ display:"flex", flexDirection:"column", gap:"clamp(6px,0.7vw,10px)" }}>
              {C.info.map((item, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:6, padding:"clamp(6px,0.65vw,10px) clamp(10px,1vw,16px)" }}>
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.58vw,11px)", color:"rgba(139,92,246,0.7)", textTransform:"uppercase", letterSpacing:"0.12em", flexShrink:0 }}>{item.label}</span>
                  <span style={{ width:1, height:10, background:"rgba(255,255,255,0.1)", flexShrink:0 }} />
                  <span style={{ fontSize:"clamp(11px,0.72vw,13px)", color:"rgba(232,232,240,0.75)", fontWeight:500 }}>{item.value}</span>
                </div>
              ))}
              {/* Badge disponible — igual a resume */}
              <div style={{ display:"flex", alignItems:"center", gap:8, background:"rgba(8,8,16,0.92)", border:"1px solid rgba(139,92,246,0.3)", borderRadius:100, padding:"8px 16px", marginTop:6, backdropFilter:"blur(12px)", alignSelf:"flex-start" }}>
                <div style={{ width:6, height:6, borderRadius:"50%", background:"#00ff88", animation:"pulse-wip 2s infinite" }} />
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(8px,0.56vw,10px)", letterSpacing:"0.14em", color:"rgba(232,232,240,0.55)", textTransform:"uppercase" }}>{C.available}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <Divider />

        {/* ══════════════════════════
            2 — SERVICIOS (grid 2×2 igual a resume "Qué hacemos")
        ══════════════════════════ */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>

          <motion.div variants={fadeUp} style={{ marginBottom:"clamp(32px,3.5vw,52px)" }}>
            <SectionLabel label={C.sectionServices} />
            <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:16 }}>
              <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(28px,3.5vw,58px)", fontWeight:800, lineHeight:1.0, letterSpacing:"-0.02em", color:"rgba(232,232,240,0.95)", margin:0 }}>
                {C.sectionServices}
              </h2>
              <p style={{ fontSize:"clamp(13px,0.88vw,15px)", color:"rgba(232,232,240,0.4)", maxWidth:380, margin:0, lineHeight:1.65 }}>
                {C.servicesSubtitle}
              </p>
            </div>
          </motion.div>

          {/* Grid 2×2 — exactamente igual que "svc-grid" de resume */}
          <style>{`@media(min-width:700px){ .svc-cards-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
          <motion.div className="svc-cards-grid" variants={stagger}
            style={{ display:"grid", gridTemplateColumns:"1fr", gap:1, background:"rgba(255,255,255,0.04)" }}>
            {C.services.map((s, i) => {
              const Icon = SERVICE_ICONS[s.icon];
              return (
                <motion.div key={i} variants={fadeUp}
                  style={{ background:"#080810", padding:"clamp(26px,2.8vw,44px)", display:"flex", flexDirection:"column", gap:"clamp(12px,1.2vw,18px)", position:"relative", transition:"background .35s", cursor:"default" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(139,92,246,0.03)"}
                  onMouseLeave={e => e.currentTarget.style.background = "#080810"}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                    <span style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(48px,5.5vw,76px)", fontWeight:800, lineHeight:1, color:"rgba(139,92,246,0.3)", userSelect:"none" }}>
                      {s.num}
                    </span>
                    <div style={{ width:"clamp(40px,4vw,56px)", height:"clamp(40px,4vw,56px)", borderRadius:"50%", border:"1px solid rgba(139,92,246,0.25)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(139,92,246,0.7)" }}>
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(17px,1.7vw,26px)", fontWeight:700, color:"white", margin:0, lineHeight:1.2 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize:"clamp(13px,0.86vw,15px)", lineHeight:1.75, color:"rgba(232,232,240,0.55)", margin:0 }}>
                    {s.desc}
                  </p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginTop:2 }}>
                    {s.tags.map(tag => (
                      <span key={tag} style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(8px,0.58vw,10px)", padding:"3px 9px", borderRadius:4, background:"rgba(139,92,246,0.08)", border:"1px solid rgba(139,92,246,0.18)", color:"rgba(139,92,246,0.7)", letterSpacing:"0.08em" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <Divider />

        {/* ══════════════════════════
            3 — TECH STACK (igual que habilidades de resume)
        ══════════════════════════ */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>

          <motion.div variants={fadeUp} style={{ marginBottom:"clamp(28px,3vw,44px)" }}>
            <SectionLabel label={C.sectionStack} />
            <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:16 }}>
              <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(28px,3.5vw,58px)", fontWeight:800, lineHeight:1.0, letterSpacing:"-0.02em", color:"rgba(232,232,240,0.95)", margin:0 }}>
                {C.sectionStack}
              </h2>
              <p style={{ fontSize:"clamp(13px,0.88vw,15px)", color:"rgba(232,232,240,0.4)", maxWidth:380, margin:0, lineHeight:1.65 }}>
                {C.stackSubtitle}
              </p>
            </div>
          </motion.div>

          {/* Skill grid — 100% idéntico a resume */}
          <motion.div variants={stagger}
            style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(clamp(78px,7.5vw,124px),1fr))", gap:"clamp(8px,0.85vw,13px)" }}>
            {skillIcons.map((skill, i) => (
              <motion.div key={i} variants={fadeUp} className="skill-item">
                <div style={{ fontSize:"clamp(26px,2.8vw,44px)", color:skill.color }}>{skill.icon}</div>
                <span style={{ fontSize:"clamp(9px,0.6vw,11px)", color:"rgba(232,232,240,0.4)", textAlign:"center", letterSpacing:"0.05em", fontFamily:"'DM Mono',monospace" }}>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <Divider />

        {/* ══════════════════════════
            CTA FINAL — idéntico a resume
        ══════════════════════════ */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once:true, margin:"-40px" }}
          style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"clamp(20px,2.5vw,40px)", padding:"clamp(28px,3vw,48px)", background:"rgba(139,92,246,0.05)", border:"1px solid rgba(139,92,246,0.15)", borderRadius:8 }}>
          <div>
            <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(20px,2vw,34px)", fontWeight:700, color:"white", margin:"0 0 clamp(8px,0.8vw,12px) 0" }}>
              {C.ctaTitle}
            </h3>
            <p style={{ fontSize:"clamp(13px,0.88vw,15px)", color:"rgba(232,232,240,0.45)", margin:0, maxWidth:460, lineHeight:1.65 }}>
              {C.ctaDesc}
            </p>
          </div>
          <Link href="/contact"
            style={{ display:"inline-flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#8B5CF6,#6C63FF)", color:"white", padding:"clamp(12px,1.1vw,18px) clamp(22px,2vw,34px)", fontFamily:"'DM Mono',monospace", fontSize:"clamp(11px,0.72vw,13px)", letterSpacing:"0.14em", textTransform:"uppercase", textDecoration:"none", boxShadow:"0 0 32px rgba(139,92,246,0.3)", transition:"opacity .2s,transform .2s", flexShrink:0 }}
            onMouseEnter={e => { e.currentTarget.style.opacity="0.88"; e.currentTarget.style.transform="translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="translateY(0)"; }}>
            {C.ctaBtn}
            <FiArrowUpRight size={14} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}