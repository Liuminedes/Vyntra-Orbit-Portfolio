"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs,
  FaDatabase, FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPhp, SiSequelize, SiExpress } from "react-icons/si";
import { FiArrowUpRight, FiCode, FiLayers, FiZap, FiLayout } from "react-icons/fi";
import { useLang } from "@/lib/LangContext";

/* ── Skills ── */
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
    navLabel:      "About us",
    sectionWho:    "Who we are",
    bioPara1:      "Vyntra Orbit is a digital development studio based in Colombia, specialized in building scalable web platforms, SaaS products, and intelligent automation systems. We combine technical precision with a results-driven mindset to deliver software that doesn't just work — it stands out.",
    bioPara2:      "Led by Mauricio Rodriguez, a full-stack developer with 3+ years of hands-on experience across automotive management systems, e-commerce platforms, corporate tools, and trading dashboards — we offer end-to-end development at startup speed with enterprise-level quality.",
    sectionDo:     "What we do",
    doSubtitle:    "We design, build and launch digital products that solve real problems.",
    services: [
      { icon: 0, title: "Custom Platforms",           desc: "Web apps, internal tools, and management systems built from scratch. We handle architecture, backend, frontend and deploy — fully tailored to your workflow.",               tags: ["React","Node.js","MySQL","REST API"]     },
      { icon: 1, title: "SaaS Products",              desc: "Full-cycle SaaS development: multi-tenant architecture, authentication, role management, billing, admin panels and cloud deployment.",                                          tags: ["Next.js","Stripe","Auth","Cloud"]        },
      { icon: 2, title: "Automation & Integrations",  desc: "End-to-end workflow automation via APIs, webhooks, cron jobs, and orchestrators. Connect your tools, eliminate repetitive work, and scale operations.",                          tags: ["Zapier","Make","Webhooks","Cron"]        },
      { icon: 3, title: "UI/UX Design",               desc: "User-centered interfaces designed for clarity and conversion. From wireframes to production-ready components — clean, accessible, and memorable.",                              tags: ["Figma","Tailwind","Framer Motion"]       },
    ],
    sectionSkills:  "Our tech stack",
    skillsSubtitle: "Technologies we master to deliver robust, maintainable products.",
    ctaTitle:  "Ready to build something?",
    ctaDesc:   "Tell us about your project. We respond within 24 hours with a proposal and timeline.",
    ctaBtn:    "Start a project",
    available: "Available for projects",
    info: [
      { label: "Studio",     value: "Vyntra Orbit"        },
      { label: "Based in",   value: "Colombia 🇨🇴"         },
      { label: "Lead dev",   value: "Mauricio Rodriguez"  },
      { label: "Experience", value: "3+ years"            },
      { label: "Available",  value: "✓ Open for projects" },
      { label: "Languages",  value: "Spanish & English"   },
    ],
  },
  es: {
    navLabel:      "Sobre nosotros",
    sectionWho:    "Quiénes somos",
    bioPara1:      "Vyntra Orbit es un estudio de desarrollo digital con base en Colombia, especializado en construir plataformas web escalables, productos SaaS y sistemas de automatización inteligente. Combinamos precisión técnica con una mentalidad orientada a resultados para entregar software que no solo funciona — sino que destaca.",
    bioPara2:      "Liderado por Mauricio Rodriguez, desarrollador full-stack con más de 3 años de experiencia en sistemas de gestión automotriz, plataformas de e-commerce, herramientas corporativas y dashboards de trading — ofrecemos desarrollo end-to-end a velocidad de startup con calidad de nivel empresarial.",
    sectionDo:     "Qué hacemos",
    doSubtitle:    "Diseñamos, construimos y lanzamos productos digitales que resuelven problemas reales.",
    services: [
      { icon: 0, title: "Plataformas a medida",            desc: "Aplicaciones web, herramientas internas y sistemas de gestión construidos desde cero. Arquitectura, backend, frontend y despliegue — totalmente adaptados a tu flujo de trabajo.",         tags: ["React","Node.js","MySQL","REST API"]     },
      { icon: 1, title: "Productos SaaS",                  desc: "Desarrollo SaaS completo: arquitectura multi-tenant, autenticación, gestión de roles, facturación, paneles de administración y despliegue en la nube.",                                        tags: ["Next.js","Stripe","Auth","Cloud"]        },
      { icon: 2, title: "Automatizaciones e Integraciones", desc: "Automatización de flujos end-to-end via APIs, webhooks, cron jobs y orquestadores. Conecta tus herramientas, elimina trabajo repetitivo y escala operaciones.",                               tags: ["Zapier","Make","Webhooks","Cron"]        },
      { icon: 3, title: "Diseño UI/UX",                    desc: "Interfaces centradas en el usuario, diseñadas para claridad y conversión. Desde wireframes hasta componentes listos para producción — limpias, accesibles y memorables.",                       tags: ["Figma","Tailwind","Framer Motion"]       },
    ],
    sectionSkills:  "Nuestro stack tecnológico",
    skillsSubtitle: "Tecnologías que dominamos para entregar productos robustos y mantenibles.",
    ctaTitle:  "¿Listo para construir algo?",
    ctaDesc:   "Cuéntanos sobre tu proyecto. Respondemos en menos de 24 horas con una propuesta y cronograma.",
    ctaBtn:    "Iniciar proyecto",
    available: "Disponible para proyectos",
    info: [
      { label: "Studio",      value: "Vyntra Orbit"              },
      { label: "Ubicación",   value: "Colombia 🇨🇴"               },
      { label: "Dev líder",   value: "Mauricio Rodriguez"        },
      { label: "Experiencia", value: "3+ años"                   },
      { label: "Disponible",  value: "✓ Abierto a proyectos"     },
      { label: "Idiomas",     value: "Español e Inglés"          },
    ],
  },
};

/* ── Variantes ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

/* ── Separador de sección ── */
const SectionLabel = ({ label }) => (
  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:"clamp(10px,1vw,16px)" }}>
    <span style={{ display:"block", width:"clamp(28px,2.5vw,44px)", height:1, background:"linear-gradient(90deg,#8B5CF6,transparent)", flexShrink:0 }} />
    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(10px,0.7vw,12px)", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(232,232,240,0.4)" }}>
      {label}
    </span>
  </div>
);

/* ── Divisor ── */
const Divider = () => (
  <div style={{ height:1, background:"linear-gradient(90deg,transparent,rgba(139,92,246,0.2),transparent)", margin:"clamp(56px,6vw,96px) 0" }} />
);

export default function Resume() {
  const { lang } = useLang();
  const C = CONTENT[lang] || CONTENT.es;

  return (
    <div style={{ padding:"clamp(48px,5vw,80px) 0 clamp(60px,6vw,100px)", position:"relative" }}>

      {/* Ambient fijo */}
      <div style={{ position:"fixed", top:"30%", left:"50%", transform:"translateX(-50%)", width:800, height:400, pointerEvents:"none", background:"radial-gradient(ellipse,rgba(139,92,246,0.04) 0%,transparent 70%)", zIndex:0 }} />

      <div style={{ width:"100%", maxWidth:"min(1800px,94vw)", margin:"0 auto", padding:"0 clamp(20px,3vw,60px)", position:"relative", zIndex:1 }}>

        {/* ══════════════════════════
            1 — QUIÉNES SOMOS
        ══════════════════════════ */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>

          {/* Título sección */}
          <motion.div variants={fadeUp} style={{ marginBottom:"clamp(36px,4vw,56px)" }}>
            <SectionLabel label={C.navLabel} />
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(32px,4vw,68px)", fontWeight:800, lineHeight:1.0, letterSpacing:"-0.02em", color:"rgba(232,232,240,0.95)", margin:0 }}>
              {C.sectionWho}
            </h2>
          </motion.div>

          {/* Grid: texto + logo */}
          <style>{`@media(min-width:900px){ .who-grid { grid-template-columns: 1fr clamp(260px,26vw,400px) !important; } }`}</style>
          <div className="who-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"clamp(32px,4vw,64px)", alignItems:"center" }}>

            {/* Texto + info pills */}
            <motion.div variants={fadeUp} style={{ display:"flex", flexDirection:"column", gap:"clamp(14px,1.4vw,22px)" }}>
              <p style={{ fontSize:"clamp(14px,1vw,18px)", lineHeight:1.85, color:"rgba(232,232,240,0.6)", margin:0, maxWidth:640 }}>
                {C.bioPara1}
              </p>
              <p style={{ fontSize:"clamp(13px,0.9vw,16px)", lineHeight:1.85, color:"rgba(232,232,240,0.45)", margin:0, maxWidth:600 }}>
                {C.bioPara2}
              </p>
              {/* Info pills */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:"clamp(6px,0.7vw,10px)", paddingTop:"clamp(4px,0.5vw,8px)" }}>
                {C.info.map((item, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:6, padding:"clamp(6px,0.65vw,10px) clamp(10px,1vw,16px)" }}>
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.58vw,11px)", color:"rgba(139,92,246,0.7)", textTransform:"uppercase", letterSpacing:"0.12em" }}>{item.label}</span>
                    <span style={{ width:1, height:10, background:"rgba(255,255,255,0.1)" }} />
                    <span style={{ fontSize:"clamp(11px,0.72vw,13px)", color:"rgba(232,232,240,0.75)", fontWeight:500 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Logo card */}
            <motion.div variants={fadeUp} style={{ display:"flex", justifyContent:"center" }}>
              <div style={{ position:"relative" }}>
                <div style={{ position:"absolute", inset:-24, borderRadius:"50%", background:"radial-gradient(circle,rgba(139,92,246,0.15) 0%,transparent 70%)", pointerEvents:"none" }} />
                <div style={{ position:"relative", width:"clamp(200px,20vw,340px)", height:"clamp(200px,20vw,340px)", borderRadius:"clamp(14px,1.4vw,22px)", overflow:"hidden", boxShadow:"0 0 0 1px rgba(139,92,246,0.25),0 0 50px rgba(139,92,246,0.1)", background:"linear-gradient(145deg,rgba(139,92,246,0.08) 0%,rgba(8,8,16,0.95) 50%,rgba(0,212,255,0.04) 100%)" }}>
                  <Image src="/assets/VYNTRA_ORBIT.png" fill priority quality={100} alt="Vyntra Orbit" style={{ objectFit:"contain", padding:"clamp(18px,2.2vw,36px)" }} />
                  {[
                    { top:0,    left:0,  borderTop:"2px solid rgba(139,92,246,0.6)",    borderLeft:"2px solid rgba(139,92,246,0.6)"    },
                    { top:0,    right:0, borderTop:"2px solid rgba(139,92,246,0.6)",    borderRight:"2px solid rgba(139,92,246,0.6)"   },
                    { bottom:0, left:0,  borderBottom:"2px solid rgba(0,212,255,0.45)", borderLeft:"2px solid rgba(0,212,255,0.45)"   },
                    { bottom:0, right:0, borderBottom:"2px solid rgba(0,212,255,0.45)", borderRight:"2px solid rgba(0,212,255,0.45)"  },
                  ].map((s,i) => <div key={i} style={{ position:"absolute", width:"clamp(14px,1.6vw,24px)", height:"clamp(14px,1.6vw,24px)", ...s }} />)}
                  <div style={{ position:"absolute", inset:0, backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(139,92,246,0.012) 3px,rgba(139,92,246,0.012) 4px)", pointerEvents:"none" }} />
                </div>
                {/* Badge */}
                <div style={{ position:"absolute", bottom:"-14px", left:"50%", transform:"translateX(-50%)", background:"rgba(8,8,16,0.92)", border:"1px solid rgba(139,92,246,0.3)", borderRadius:100, padding:"5px 14px", display:"flex", alignItems:"center", gap:6, whiteSpace:"nowrap", backdropFilter:"blur(12px)" }}>
                  <div style={{ width:6, height:6, borderRadius:"50%", background:"#00ff88", animation:"pulse-wip 2s infinite" }} />
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(8px,0.56vw,10px)", letterSpacing:"0.14em", color:"rgba(232,232,240,0.55)", textTransform:"uppercase" }}>{C.available}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <Divider />

        {/* ══════════════════════════
            2 — QUÉ HACEMOS
        ══════════════════════════ */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>

          <motion.div variants={fadeUp} style={{ marginBottom:"clamp(32px,3.5vw,52px)" }}>
            <SectionLabel label={C.sectionDo} />
            <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:16 }}>
              <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(28px,3.5vw,58px)", fontWeight:800, lineHeight:1.0, letterSpacing:"-0.02em", color:"rgba(232,232,240,0.95)", margin:0 }}>
                {C.sectionDo}
              </h2>
              <p style={{ fontSize:"clamp(13px,0.88vw,15px)", color:"rgba(232,232,240,0.4)", maxWidth:380, margin:0, lineHeight:1.65 }}>
                {C.doSubtitle}
              </p>
            </div>
          </motion.div>

          {/* Grid 2×2 servicios */}
          <style>{`@media(min-width:700px){ .svc-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
          <motion.div className="svc-grid" variants={stagger} style={{ display:"grid", gridTemplateColumns:"1fr", gap:1, background:"rgba(255,255,255,0.04)" }}>
            {C.services.map((s, i) => {
              const Icon = SERVICE_ICONS[s.icon];
              return (
                <motion.div key={i} variants={fadeUp}
                  style={{ background:"#080810", padding:"clamp(26px,2.8vw,44px)", display:"flex", flexDirection:"column", gap:"clamp(12px,1.2vw,18px)", position:"relative", transition:"background .35s", cursor:"default" }}
                  onMouseEnter={e => e.currentTarget.style.background="rgba(139,92,246,0.03)"}
                  onMouseLeave={e => e.currentTarget.style.background="#080810"}
                >
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                    <span style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(48px,5.5vw,76px)", fontWeight:800, lineHeight:1, WebkitTextStroke:"1px rgba(139,92,246,0.2)", color:"transparent", userSelect:"none" }}>
                      0{i + 1}
                    </span>
                    <div style={{ width:"clamp(40px,4vw,56px)", height:"clamp(40px,4vw,56px)", borderRadius:"50%", border:"1px solid rgba(139,92,246,0.25)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(139,92,246,0.7)" }}>
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(17px,1.7vw,26px)", fontWeight:700, color:"white", margin:0, lineHeight:1.2 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize:"clamp(13px,0.86vw,15px)", lineHeight:1.75, color:"rgba(232,232,240,0.45)", margin:0 }}>
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
            3 — HABILIDADES
        ══════════════════════════ */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>

          <motion.div variants={fadeUp} style={{ marginBottom:"clamp(28px,3vw,44px)" }}>
            <SectionLabel label={C.sectionSkills} />
            <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:16 }}>
              <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(28px,3.5vw,58px)", fontWeight:800, lineHeight:1.0, letterSpacing:"-0.02em", color:"rgba(232,232,240,0.95)", margin:0 }}>
                {C.sectionSkills}
              </h2>
              <p style={{ fontSize:"clamp(13px,0.88vw,15px)", color:"rgba(232,232,240,0.4)", maxWidth:380, margin:0, lineHeight:1.65 }}>
                {C.skillsSubtitle}
              </p>
            </div>
          </motion.div>

          <motion.div variants={stagger} style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(clamp(78px,7.5vw,124px),1fr))", gap:"clamp(8px,0.85vw,13px)" }}>
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
            CTA FINAL
        ══════════════════════════ */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once:true, margin:"-40px" }}
          style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"clamp(20px,2.5vw,40px)", padding:"clamp(28px,3vw,48px)", background:"rgba(139,92,246,0.05)", border:"1px solid rgba(139,92,246,0.15)", borderRadius:8 }}
        >
          <div>
            <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(20px,2vw,34px)", fontWeight:700, color:"white", margin:"0 0 clamp(8px,0.8vw,12px) 0" }}>
              {C.ctaTitle}
            </h3>
            <p style={{ fontSize:"clamp(13px,0.88vw,15px)", color:"rgba(232,232,240,0.45)", margin:0, maxWidth:460, lineHeight:1.65 }}>
              {C.ctaDesc}
            </p>
          </div>
          <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#8B5CF6,#6C63FF)", color:"white", padding:"clamp(12px,1.1vw,18px) clamp(22px,2vw,34px)", fontFamily:"'DM Mono',monospace", fontSize:"clamp(11px,0.72vw,13px)", letterSpacing:"0.14em", textTransform:"uppercase", textDecoration:"none", boxShadow:"0 0 32px rgba(139,92,246,0.3)", transition:"opacity .2s,transform .2s", flexShrink:0 }}>
            {C.ctaBtn}
            <FiArrowUpRight size={14} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}