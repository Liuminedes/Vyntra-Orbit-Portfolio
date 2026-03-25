"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiCheck, FiZap, FiShield, FiClock } from "react-icons/fi";
import { useLang } from "@/lib/LangContext";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } };

const deliverables = {
  en: {
    0: ["Custom web app or dashboard","Documented REST API","Admin panel included","Production deploy","30 days post-delivery support"],
    1: ["Wireframes + Figma prototype","Reusable design system","Complete dev handoff","Responsive mobile-first","2 revision rounds"],
    2: ["End-to-end automated flow","Integration with current tools","Monitoring dashboard","Automatic alerts & reports","Technical documentation"],
    3: ["Free initial audit","Prioritized improvement plan","24/7 monitoring","Response in under 4 hours","Monthly reports"],
  },
  es: {
    0: ["Plataforma web a medida","Automatizaciones de procesos documentada","Panel de administrador","Despliegue en producción","30 días de soporte post-entrega"],
    1: ["Prototipos de plataformas flexibles y a tu gusto","Sistema de diseño reutilizable","Handoff completo para tu facil actualización","Diseño responsivo multi-plataforma","Validación acompañada del diseño general"],
    2: ["Flujo automatizado end-to-end","Integración con tus herramientas actuales","Dashboard de monitoreo","Alertas y reportes automáticos","Documentación técnica"],
    3: ["Auditoría inicial gratuita","Plan de mejoras priorizado","Monitoreo 24/7","Respuesta en menos de 4 horas","Reportes mensuales"],
  },
};

export default function Services() {
  const { t, lang } = useLang();
  const isEn = lang === "en";
  const del = deliverables[isEn ? "en" : "es"];

  const highlights = [
    { icon: <FiZap size={13} />,    text: isEn ? "2–4 week delivery"       : "Velocidad de desarrollo que marca la diferencia"      },
    { icon: <FiShield size={13} />, text: isEn ? "Clean, documented code"  : "Código limpio y documentado" },
    { icon: <FiClock size={13} />,  text: isEn ? "Available for freelance" : "Disponible para freelance"   },
    { icon: <FiCheck size={13} />,  text: isEn ? "Post-delivery support"   : "Soporte post-entrega incluido"},
  ];

  return (
    <>
      <style>{`
        /* ── Services responsive ── */
        .svc-header-row { display:flex; flex-wrap:wrap; align-items:flex-end; justify-content:space-between; gap:16px; margin-bottom:24px; }
        .svc-highlights  { display:flex; flex-wrap:wrap; gap:10px; margin-bottom:40px; padding:14px 18px; background:rgba(108,99,255,0.04); border:1px solid rgba(108,99,255,0.12); border-radius:8px; }
        .svc-grid        { display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,480px),1fr)); gap:1px; background:rgba(255,255,255,0.04); }
        .svc-card        { background:#080810; padding:clamp(22px,3vw,40px) clamp(18px,2.5vw,36px); display:flex; flex-direction:column; gap:0; position:relative; transition:background .4s; }
        .svc-num         { font-family:'Syne',sans-serif; font-size:clamp(44px,6vw,76px); font-weight:800; line-height:1; -webkit-text-stroke:1px rgba(108,99,255,0.2); color:transparent; user-select:none; }
        .svc-cta-strip   { margin-top:36px; padding:clamp(20px,3vw,36px); background:rgba(108,99,255,0.06); border:1px solid rgba(108,99,255,0.15); border-radius:8px; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:20px; }
        .svc-cta-btns    { display:flex; gap:10px; flex-shrink:0; flex-wrap:wrap; }

        @media (max-width: 767px) {
          .svc-header-row  { flex-direction:column; align-items:flex-start; gap:12px; }
          .svc-header-row a.btn-glow-solid { width:100%; text-align:center; justify-content:center; }
          .svc-highlights  { flex-direction:column; gap:8px; padding:12px 14px; margin-bottom:24px; }
          .svc-highlights > div { padding-right:0 !important; font-size:12px; }
          .svc-grid        { grid-template-columns:1fr !important; }
          .svc-card        { padding:22px 18px !important; }
          .svc-cta-strip   { flex-direction:column; text-align:left; gap:16px; }
          .svc-cta-btns    { flex-direction:column; width:100%; }
          .svc-cta-btns a  { width:100% !important; justify-content:center !important; text-align:center; }
        }
      `}</style>

      <section style={{ minHeight:"80vh", padding:"clamp(40px,5vw,72px) 0 clamp(60px,6vw,90px)", position:"relative" }}>

        <div style={{ position:"absolute", top:"20%", left:"50%", transform:"translateX(-50%)", width:800, height:400, pointerEvents:"none", background:"radial-gradient(ellipse,rgba(108,99,255,0.04) 0%,transparent 70%)" }} />

        <div className="vo-container" style={{ position:"relative", zIndex:2 }}>

          {/* Header */}
          <div className="opacity-0 animate-fade-up delay-100" style={{ animationFillMode:"forwards", marginBottom:0 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
              <span className="line-accent" />
              <span className="vo-label">{t.nav.services}</span>
            </div>
            <div className="svc-header-row">
              <h2 className="vo-heading" style={{ color:"rgba(232,232,240,0.95)", margin:0 }}>
                {isEn ? "What I build for you" : "Lo que construyo para ti"}
              </h2>
              <Link href="/contact" className="btn-glow-solid" style={{ textDecoration:"none", fontSize:"clamp(11px,0.75vw,13px)", padding:"11px 22px", whiteSpace:"nowrap" }}>
                {isEn ? "Get a free quote →" : "Cotización gratis →"}
              </Link>
            </div>
          </div>

          {/* Highlights */}
          <div className="opacity-0 animate-fade-up delay-200 svc-highlights" style={{ animationFillMode:"forwards" }}>
            {highlights.map((h,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:8, color:"rgba(232,232,240,0.5)", fontSize:"clamp(11px,0.75vw,13px)", paddingRight:16 }}>
                <span style={{ color:"#6C63FF", flexShrink:0 }}>{h.icon}</span>
                {h.text}
              </div>
            ))}
          </div>

          {/* Services grid */}
          <motion.div className="svc-grid" variants={container} initial="hidden" animate="show">
            {t.services.items.map((service, index) => (
              <motion.div key={index} variants={item} className="svc-card"
                onMouseEnter={e => e.currentTarget.style.background="rgba(108,99,255,0.025)"}
                onMouseLeave={e => e.currentTarget.style.background="#080810"}>

                {/* Num + arrow */}
                <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"clamp(14px,1.5vw,20px)" }}>
                  <span className="svc-num">{service.num}</span>
                  <Link href="/contact"
                    style={{ marginTop:6, width:36, height:36, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.1)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.3)", textDecoration:"none", transition:"all .3s", flexShrink:0 }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(108,99,255,0.5)"; e.currentTarget.style.color="#6C63FF"; e.currentTarget.style.transform="rotate(45deg)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"; e.currentTarget.style.color="rgba(255,255,255,0.3)"; e.currentTarget.style.transform="rotate(0deg)"; }}>
                    <FiArrowUpRight size={14} />
                  </Link>
                </div>

                {/* Title */}
                <h3 className="vo-subheading" style={{ color:"white", marginBottom:"clamp(8px,0.8vw,12px)" }}>{service.title}</h3>

                {/* Description */}
                <p style={{ fontSize:"clamp(12px,0.85vw,14px)", lineHeight:1.75, color:"rgba(232,232,240,0.45)", marginBottom:"clamp(16px,1.8vw,24px)" }}>
                  {service.description}
                </p>

                {/* Deliverables */}
                <div style={{ marginTop:"auto" }}>
                  <div style={{ fontSize:9, color:"rgba(108,99,255,0.6)", textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:8 }}>
                    {isEn ? "Included" : "Incluye"}
                  </div>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:6 }}>
                    {del[index]?.map((d,i) => (
                      <li key={i} style={{ display:"flex", alignItems:"flex-start", gap:7, fontSize:"clamp(11px,0.72vw,13px)", color:"rgba(232,232,240,0.5)" }}>
                        <FiCheck size={11} style={{ color:"#6C63FF", flexShrink:0, marginTop:2 }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA strip */}
          <motion.div
            className="svc-cta-strip"
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0, transition:{ delay:0.6, duration:0.5 } }}>
            <div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(16px,2.2vw,24px)", fontWeight:700, color:"white", marginBottom:6 }}>
                {isEn ? "Have a project in mind?" : "¿Tienes un proyecto en mente?"}
              </div>
              <p style={{ fontSize:"clamp(12px,0.85vw,14px)", color:"rgba(232,232,240,0.45)", maxWidth:460, margin:0 }}>
                {isEn
                  ? "Tell me what you need. I'll get back to you within 24 hours."
                  : "Cuéntame qué necesitas. Te respondo en menos de 24 horas."}
              </p>
            </div>
            <div className="svc-cta-btns">
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
    </>
  );
}