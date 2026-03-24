"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiCheck, FiZap, FiShield, FiClock } from "react-icons/fi";
import { useLang } from "@/lib/LangContext";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } };

const deliverables = {
  0: ["Web app o dashboard a medida","API REST documentada","Panel admin incluido","Deploy en producción","30 días de soporte"],
  1: ["Wireframes + prototipo Figma","Sistema de diseño reutilizable","Handoff completo para dev","Responsive mobile-first","2 rondas de revisión"],
  2: ["Flujo automatizado end-to-end","Integración con tus herramientas","Dashboard de monitoreo","Alertas y reportes automáticos","Documentación técnica"],
  3: ["Auditoría inicial gratuita","Plan de mejoras priorizado","Monitoreo 24/7","Respuesta en < 4 horas","Reportes mensuales"],
};

export default function Services() {
  const { t, lang } = useLang();
  const isEn = lang === "en";

  const highlights = [
    { icon: <FiZap size={13} />, text: isEn ? "2–4 week delivery" : "Entrega en 2–4 semanas" },
    { icon: <FiShield size={13} />, text: isEn ? "Clean, documented code" : "Código limpio y documentado" },
    { icon: <FiClock size={13} />, text: isEn ? "Available for freelance" : "Disponible para freelance" },
    { icon: <FiCheck size={13} />, text: isEn ? "Post-delivery support" : "Soporte post-entrega incluido" },
  ];

  return (
    <section style={{ minHeight: "80vh", padding: "clamp(40px,5vw,80px) 0 clamp(60px,6vw,100px)", position: "relative" }}>

      <div style={{ position:"absolute", top:"20%", left:"50%", transform:"translateX(-50%)", width:800, height:400, pointerEvents:"none", background:"radial-gradient(ellipse,rgba(108,99,255,0.04) 0%,transparent 70%)" }} />

      <div className="vo-container" style={{ position:"relative", zIndex:2 }}>

        {/* Header */}
        <div className="opacity-0 animate-fade-up delay-100" style={{ animationFillMode:"forwards", marginBottom:16 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
            <span className="line-accent" />
            <span className="vo-label">{t.nav.services}</span>
          </div>
          {/* Título + CTA en fila — en móvil se apilan */}
          <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:16, marginBottom:24 }}>
            <h2 className="vo-heading" style={{ color:"rgba(232,232,240,0.95)" }}>
              {isEn ? "What I build for you" : "Lo que construyo para ti"}
            </h2>
            <Link href="/contact" className="btn-glow-solid" style={{ textDecoration:"none", fontSize:11, padding:"11px 20px", flexShrink:0 }}>
              {isEn ? "Get a free quote →" : "Cotización gratis →"}
            </Link>
          </div>
        </div>

        {/* Highlights strip */}
        <div className="highlights-strip opacity-0 animate-fade-up delay-200"
          style={{ animationFillMode:"forwards", display:"flex", flexWrap:"wrap", gap:10, marginBottom:40, padding:"14px 18px", background:"rgba(108,99,255,0.04)", border:"1px solid rgba(108,99,255,0.12)", borderRadius:8 }}>
          {highlights.map((h, i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:7, color:"rgba(232,232,240,0.5)", fontSize:"clamp(11px,0.75vw,13px)", paddingRight:16 }}>
              <span style={{ color:"#6C63FF", flexShrink:0 }}>{h.icon}</span>
              {h.text}
            </div>
          ))}
        </div>

        {/* Services grid */}
        <motion.div variants={container} initial="hidden" animate="show"
          className="svc-grid"
          style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,480px),1fr))", gap:1, background:"rgba(255,255,255,0.04)" }}>
          {t.services.items.map((service, index) => (
            <motion.div key={index} variants={item}
              style={{ background:"#080810", padding:"clamp(24px,3vw,40px) clamp(20px,2.5vw,36px)", display:"flex", flexDirection:"column", gap:0, position:"relative", transition:"background 0.4s" }}
              onMouseEnter={e => e.currentTarget.style.background="rgba(108,99,255,0.025)"}
              onMouseLeave={e => e.currentTarget.style.background="#080810"}>

              <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:18 }}>
                <span style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(44px,6vw,76px)", fontWeight:800, lineHeight:1, WebkitTextStroke:"1px rgba(108,99,255,0.2)", color:"transparent", userSelect:"none" }}>
                  {service.num}
                </span>
                <Link href="/contact"
                  style={{ marginTop:6, width:38, height:38, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.1)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.3)", textDecoration:"none", transition:"all 0.3s", flexShrink:0 }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(108,99,255,0.5)"; e.currentTarget.style.color="#6C63FF"; e.currentTarget.style.transform="rotate(45deg)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"; e.currentTarget.style.color="rgba(255,255,255,0.3)"; e.currentTarget.style.transform="rotate(0deg)"; }}>
                  <FiArrowUpRight size={14} />
                </Link>
              </div>

              <h3 className="vo-subheading" style={{ color:"white", marginBottom:10 }}>{service.title}</h3>

              <p style={{ fontSize:"clamp(12px,0.85vw,14px)", lineHeight:1.75, color:"rgba(232,232,240,0.45)", marginBottom:20 }}>
                {service.description}
              </p>

              <div style={{ marginTop:"auto" }}>
                <div style={{ fontSize:9, color:"rgba(108,99,255,0.6)", textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:8 }}>
                  {isEn ? "Included" : "Incluye"}
                </div>
                <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:5 }}>
                  {deliverables[index].map((d, i) => (
                    <li key={i} style={{ display:"flex", alignItems:"center", gap:7, fontSize:"clamp(10px,0.7vw,12px)", color:"rgba(232,232,240,0.5)" }}>
                      <FiCheck size={10} style={{ color:"#6C63FF", flexShrink:0 }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA strip */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0, transition:{ delay:0.6, duration:0.5 } }}
          className="services-cta cta-strip"
          style={{ marginTop:40, padding:"clamp(20px,2.5vw,36px) clamp(20px,2.5vw,36px)", background:"rgba(108,99,255,0.06)", border:"1px solid rgba(108,99,255,0.15)", borderRadius:8, display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:20 }}>
          <div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(16px,2.5vw,26px)", fontWeight:700, color:"white", marginBottom:6 }}>
              {isEn ? "Have a project in mind?" : "¿Tienes un proyecto en mente?"}
            </div>
            <p style={{ fontSize:"clamp(12px,0.85vw,14px)", color:"rgba(232,232,240,0.45)", maxWidth:480 }}>
              {isEn ? "Tell me what you need. I'll get back to you within 24 hours." : "Cuéntame qué necesitas. Te respondo en menos de 24 horas."}
            </p>
          </div>
          <div style={{ display:"flex", gap:10, flexShrink:0, flexWrap:"wrap" }}>
            <Link href="/contact" className="btn-glow-solid" style={{ textDecoration:"none" }}>
              {isEn ? "Start a project" : "Iniciar proyecto"}
            </Link>
            <Link href="/work" className="btn-glow" style={{ textDecoration:"none" }}>
              {isEn ? "See my work" : "Ver trabajos"}
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}