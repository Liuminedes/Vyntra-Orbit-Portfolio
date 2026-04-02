"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FiSend, FiLoader, FiCheck, FiPhone, FiMail,
  FiArrowUpRight, FiMessageSquare, FiClock, FiZap,
  FiX, FiShare2,
} from "react-icons/fi";
import { FaDiscord, FaInstagram, FaWhatsapp } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useLang } from "@/lib/LangContext";

/* ── Validación básica ── */
const isEmail = (s = "") => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim());

/* ── Toast ── */
function showToast(kind, title, detail = "") {
  toast.custom((t) => (
    <div style={{
      display:"flex", alignItems:"flex-start", gap:10,
      padding:"12px 16px", borderRadius:8,
      border:`1px solid ${kind==="success"?"rgba(0,255,136,0.2)":"rgba(255,80,80,0.2)"}`,
      background:"rgba(10,10,20,0.97)", backdropFilter:"blur(16px)",
      boxShadow:"0 8px 32px rgba(0,0,0,0.5)",
      width:"min(92vw,400px)",
      opacity:t.visible?1:0, transition:"opacity .2s",
    }}>
      <div style={{ width:8,height:8,borderRadius:"50%",flexShrink:0,marginTop:4,background:kind==="success"?"#00ff88":"#ff6060" }} />
      <div style={{ flex:1 }}>
        <p style={{ fontSize:13,fontWeight:600,color:"#8B5CF6",margin:0 }}>{title}</p>
        {detail && <p style={{ fontSize:11,color:"rgba(255,255,255,0.4)",marginTop:3 }}>{detail}</p>}
      </div>
      <button onClick={() => toast.dismiss(t.id)} style={{ background:"none",border:"none",color:"rgba(255,255,255,0.3)",cursor:"pointer",fontSize:14,padding:0,lineHeight:1 }}>✕</button>
    </div>
  ), { position:"top-right", duration:4500, id:kind });
}

/* ══════════════════════════════════════════
   MODAL DE CONTACTO Y REDES SOCIALES
══════════════════════════════════════════ */
const SOCIAL_LINKS = [
  {
    name: "WhatsApp",
    handle: "+57 317 768 6358",
    href: "https://wa.me/573177686358?text=Hola%20Vyntra%20Orbit%2C%20me%20interesa%20hablar%20sobre%20un%20proyecto",
    icon: <FaWhatsapp size={22} />,
    color: "#25D366",
    bg: "rgba(37,211,102,0.1)",
    border: "rgba(37,211,102,0.25)",
    desc: { es:"Escríbenos directo", en:"Message us directly" },
  },
  {
    name: "Instagram",
    handle: "@vyntra_orbit",
    href: "https://www.instagram.com/vyntra_orbit/",
    icon: <FaInstagram size={22} />,
    color: "#E1306C",
    bg: "rgba(225,48,108,0.1)",
    border: "rgba(225,48,108,0.25)",
    desc: { es:"Síguenos en Instagram", en:"Follow us on Instagram" },
  },
  {
    name: "Discord",
    handle: "liu_galax_dev_ops",
    href: "https://discord.com/users/liu_galax_dev_ops",
    icon: <FaDiscord size={22} />,
    color: "#5865F2",
    bg: "rgba(88,101,242,0.1)",
    border: "rgba(88,101,242,0.25)",
    desc: { es:"Chatea en Discord", en:"Chat on Discord" },
  },
  {
    name: "Email",
    handle: "vyntraorbit@gmail.com",
    href: "mailto:vyntraorbit@gmail.com",
    icon: <FiMail size={22} />,
    color: "#00D4FF",
    bg: "rgba(0,212,255,0.1)",
    border: "rgba(0,212,255,0.25)",
    desc: { es:"Envíanos un correo", en:"Send us an email" },
  },
  {
    name: "Teléfono",
    handle: "(+57) 317 768 6358",
    href: "tel:+573177686358",
    icon: <FiPhone size={22} />,
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.25)",
    desc: { es:"Llámanos directamente", en:"Call us directly" },
  },
];

function ContactModal({ open, onClose, lang }) {
  const isEn = lang === "en";
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            onClick={onClose}
            style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.75)", backdropFilter:"blur(8px)", zIndex:200 }}
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity:0, scale:0.92, y:20 }}
            animate={{ opacity:1, scale:1, y:0, transition:{ duration:0.3, ease:[0.22,1,0.36,1] } }}
            exit={{ opacity:0, scale:0.95, y:10, transition:{ duration:0.2 } }}
            style={{
              position:"fixed", top:"50%", left:"50%",
              transform:"translate(-50%,-50%)",
              zIndex:201, width:"min(90vw, 480px)",
              background:"#0c0c18",
              border:"1px solid rgba(139,92,246,0.2)",
              borderRadius:12,
              overflow:"hidden",
              boxShadow:"0 0 80px rgba(139,92,246,0.15), 0 24px 64px rgba(0,0,0,0.6)",
            }}>
            {/* Header del modal */}
            <div style={{ padding:"20px 24px 16px", borderBottom:"1px solid rgba(255,255,255,0.06)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:700, color:"white" }}>
                  {isEn?"Contact & Social":"Contacto y Redes"}
                </div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"rgba(255,255,255,0.3)", marginTop:3, letterSpacing:"0.1em" }}>
                  {isEn?"Choose how to reach us":"Elige cómo contactarnos"}
                </div>
              </div>
              <button onClick={onClose}
                style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"50%", width:32, height:32, display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.5)", cursor:"pointer", transition:"all .15s" }}
                onMouseEnter={e => { e.currentTarget.style.background="rgba(255,255,255,0.1)"; e.currentTarget.style.color="white"; }}
                onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.06)"; e.currentTarget.style.color="rgba(255,255,255,0.5)"; }}>
                <FiX size={14} />
              </button>
            </div>

            {/* Lista de redes */}
            <div style={{ padding:"12px 16px 20px", display:"flex", flexDirection:"column", gap:8 }}>
              {SOCIAL_LINKS.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity:0, x:-12 }}
                  animate={{ opacity:1, x:0, transition:{ delay: i * 0.06, duration:0.3, ease:[0.22,1,0.36,1] } }}
                  style={{
                    display:"flex", alignItems:"center", gap:14,
                    padding:"14px 16px", borderRadius:9,
                    background:s.bg, border:`1px solid ${s.border}`,
                    textDecoration:"none", transition:"all .2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform="translateX(4px)"; e.currentTarget.style.boxShadow=`0 0 20px ${s.color}20`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform="translateX(0)"; e.currentTarget.style.boxShadow="none"; }}>
                  {/* Ícono */}
                  <div style={{ width:44, height:44, borderRadius:10, background:`${s.color}18`, border:`1px solid ${s.color}30`, display:"flex", alignItems:"center", justifyContent:"center", color:s.color, flexShrink:0 }}>
                    {s.icon}
                  </div>
                  {/* Info */}
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontSize:14, fontWeight:600, color:"white" }}>{s.name}</div>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"rgba(255,255,255,0.45)", marginTop:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{s.handle}</div>
                  </div>
                  {/* Descripción + flecha */}
                  <div style={{ textAlign:"right", flexShrink:0 }}>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:s.color, letterSpacing:"0.06em", opacity:0.8 }}>{s.desc[lang] || s.desc.es}</div>
                    <FiArrowUpRight size={14} style={{ color:"rgba(255,255,255,0.2)", marginTop:4 }} />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <div style={{ padding:"12px 24px 18px", borderTop:"1px solid rgba(255,255,255,0.05)", display:"flex", alignItems:"center", gap:7 }}>
              <div style={{ width:5, height:5, borderRadius:"50%", background:"#00ff88", animation:"pulse-wip 2s infinite" }} />
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(255,255,255,0.3)", letterSpacing:"0.1em", textTransform:"uppercase" }}>
                {isEn?"Typically responds in under 24 hours":"Respondemos en menos de 24 horas"}
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

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

export default function Contact() {
  const { t, lang } = useLang();
  const c = t.contact;
  const isEn = lang === "en";

  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ firstname:"", lastname:"", email:"", phone:"", service:"", budget:"", message:"", timeline:"" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm(s => ({ ...s, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = [];
    if (!form.firstname.trim()) errs.push(c.fields.firstname);
    if (!form.lastname.trim())  errs.push(c.fields.lastname);
    if (!isEmail(form.email))   errs.push(c.fields.email);
    if (form.phone && !/^\d{7,15}$/.test(form.phone.replace(/\D/g,""))) errs.push(c.fields.phone);
    if (form.message.trim().length < 5) errs.push(c.fields.message);
    if (errs.length) { showToast("error", c.toast.missingFields, errs.join(", ")); return; }
    setLoading(true);
    try {
      const res  = await fetch("/api/contact", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ ...form, service: form.service || (isEn?"Not specified":"No especificado") }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setSent(true);
        showToast("success", c.toast.successTitle, c.toast.successDetail);
        setForm({ firstname:"", lastname:"", email:"", phone:"", service:"", budget:"", message:"", timeline:"" });
        setTimeout(() => setSent(false), 5000);
      } else {
        showToast("error", c.toast.errorTitle, json?.error || c.toast.errorRetry);
      }
    } catch {
      showToast("error", c.toast.errorTitle, c.toast.errorRetry);
    } finally {
      setLoading(false);
    }
  };

  /* Estilo base inputs */
  const inp = {
    width:"100%", background:"transparent",
    border:"none", borderBottom:"1px solid rgba(255,255,255,0.1)",
    outline:"none", fontSize:"clamp(13px,0.88vw,15px)",
    color:"rgba(232,232,240,0.85)", padding:"clamp(10px,1vw,14px) 0",
    fontFamily:"'DM Mono',monospace", transition:"border-color .2s",
  };

  const label = (text) => (
    <label style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.6vw,11px)", color:"rgba(139,92,246,0.7)", textTransform:"uppercase", letterSpacing:"0.15em" }}>
      {text}
    </label>
  );

  /* Razones para contactar */
  const reasons = isEn ? [
    { icon: <FiZap size={14}/>,           text:"Response in under 24 hours"   },
    { icon: <FiMessageSquare size={14}/>, text:"Free initial consultation"     },
    { icon: <FiClock size={14}/>,         text:"Fast project delivery"         },
    { icon: <FiCheck size={14}/>,         text:"Support after delivery"        },
  ] : [
    { icon: <FiZap size={14}/>,           text:"Respuesta en menos de 24h"     },
    { icon: <FiMessageSquare size={14}/>, text:"Consulta inicial gratuita"     },
    { icon: <FiClock size={14}/>,         text:"Entrega rápida del proyecto"   },
    { icon: <FiCheck size={14}/>,         text:"Soporte después de la entrega" },
  ];

  const budgets = isEn
    ? ["Less than $500 USD","$500 – $1,500 USD","$1,500 – $5,000 USD","More than $5,000 USD","I don't know yet"]
    : ["Menos de $500 USD","$500 – $1,500 USD","$1,500 – $5,000 USD","Más de $5,000 USD","Aún no lo sé"];

  const timelines = isEn
    ? ["As soon as possible","In 1–2 months","In 3–6 months","No fixed deadline"]
    : ["Lo antes posible","En 1–2 meses","En 3–6 meses","Sin fecha límite"];

  return (
    <>
      <Toaster position="top-right" containerStyle={{ zIndex:80 }} />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} lang={lang} />

      <style>{`
        .ct-input:focus { border-bottom-color: rgba(139,92,246,0.6) !important; }
        select.ct-input option { background:#080810; color:#e8e8f0; }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>

      <div style={{ padding:"clamp(48px,5vw,80px) 0 clamp(60px,6vw,100px)", position:"relative" }}>

        <div style={{ position:"fixed", top:"30%", left:"50%", transform:"translateX(-50%)", width:800, height:400, pointerEvents:"none", background:"radial-gradient(ellipse,rgba(139,92,246,0.04) 0%,transparent 70%)", zIndex:0 }} />

        <div style={{ width:"100%", maxWidth:"min(1800px,94vw)", margin:"0 auto", padding:"0 clamp(20px,3vw,60px)", position:"relative", zIndex:1 }}>

          {/* ══════════════════════════
              1 — ENCABEZADO
          ══════════════════════════ */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>

            <motion.div variants={fadeUp} style={{ marginBottom:"clamp(36px,4vw,56px)" }}>
              <SectionLabel label={isEn?"Contact":"Contacto"} />
              <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(32px,4vw,68px)", fontWeight:800, lineHeight:1.0, letterSpacing:"-0.02em", color:"rgba(232,232,240,0.95)", margin:"0 0 clamp(16px,2vw,28px)" }}>
                {c.heading}
              </h2>
              {/* Botón modal — CTA principal */}
              <motion.button
                variants={fadeUp}
                onClick={() => setModalOpen(true)}
                style={{
                  display:"inline-flex", alignItems:"center", gap:10,
                  background:"linear-gradient(135deg,#8B5CF6,#6C63FF)",
                  border:"none", color:"white",
                  padding:"clamp(12px,1.2vw,18px) clamp(20px,2vw,32px)",
                  fontFamily:"'DM Mono',monospace",
                  fontSize:"clamp(11px,0.78vw,14px)",
                  letterSpacing:"0.12em", textTransform:"uppercase",
                  cursor:"pointer",
                  boxShadow:"0 0 32px rgba(139,92,246,0.35)",
                  transition:"all .2s", borderRadius:6,
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity="0.88"; e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 0 48px rgba(139,92,246,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 0 32px rgba(139,92,246,0.35)"; }}>
                <FiShare2 size={15} />
                {isEn?"Contact & Social Networks":"Contacto y Redes Sociales"}
              </motion.button>
            </motion.div>

            {/* Grid encabezado — igual que who-grid de resume */}
            <style>{`@media(min-width:900px){ .ct-top-grid { grid-template-columns: 1fr clamp(260px,26vw,400px) !important; } }`}</style>
            <div className="ct-top-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"clamp(32px,4vw,64px)", alignItems:"center" }}>

              <motion.div variants={fadeUp} style={{ display:"flex", flexDirection:"column", gap:"clamp(14px,1.4vw,22px)" }}>
                <p style={{ fontSize:"clamp(14px,1vw,18px)", lineHeight:1.85, color:"rgba(232,232,240,0.6)", margin:0, maxWidth:640 }}>
                  {c.subheading}
                </p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"clamp(6px,0.7vw,10px)", paddingTop:"clamp(4px,0.5vw,8px)" }}>
                  {reasons.map((r, i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:6, padding:"clamp(6px,0.65vw,10px) clamp(10px,1vw,16px)" }}>
                      <span style={{ color:"rgba(139,92,246,0.7)", flexShrink:0 }}>{r.icon}</span>
                      <span style={{ width:1, height:10, background:"rgba(255,255,255,0.1)" }} />
                      <span style={{ fontSize:"clamp(11px,0.72vw,13px)", color:"rgba(232,232,240,0.75)", fontWeight:500 }}>{r.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Info de contacto rápida */}
              <motion.div variants={fadeUp} style={{ display:"flex", flexDirection:"column", gap:"clamp(10px,1vw,14px)" }}>
                {c.info.map((item, i) => {
                  const icons = [FiPhone, FiMail, FaDiscord];
                  const Icon = icons[i] || FiPhone;
                  return (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap:14, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:8, padding:"clamp(10px,1vw,16px) clamp(12px,1.2vw,18px)" }}>
                      <div style={{ width:"clamp(36px,3.5vw,44px)", height:"clamp(36px,3.5vw,44px)", borderRadius:"50%", border:"1px solid rgba(139,92,246,0.25)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(139,92,246,0.7)", flexShrink:0 }}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.58vw,11px)", color:"rgba(139,92,246,0.6)", textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:3 }}>{item.title}</div>
                        <div style={{ fontSize:"clamp(12px,0.82vw,14px)", color:"rgba(232,232,240,0.85)", fontWeight:500 }}>{item.description}</div>
                      </div>
                    </div>
                  );
                })}
                <div style={{ display:"flex", alignItems:"center", gap:8, background:"rgba(8,8,16,0.92)", border:"1px solid rgba(139,92,246,0.3)", borderRadius:100, padding:"8px 16px", backdropFilter:"blur(12px)", alignSelf:"flex-start" }}>
                  <div style={{ width:6, height:6, borderRadius:"50%", background:"#00ff88", animation:"pulse-wip 2s infinite" }} />
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(8px,0.56vw,10px)", letterSpacing:"0.14em", color:"rgba(232,232,240,0.55)", textTransform:"uppercase" }}>
                    {isEn?"Available for projects":"Disponible para proyectos"}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <Divider />

          {/* ══════════════════════════
              2 — FORMULARIO MEJORADO
          ══════════════════════════ */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>

            <motion.div variants={fadeUp} style={{ marginBottom:"clamp(28px,3vw,44px)" }}>
              <SectionLabel label={isEn?"Project form":"Formulario de proyecto"} />
              <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:16 }}>
                <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(28px,3.5vw,58px)", fontWeight:800, lineHeight:1.0, letterSpacing:"-0.02em", color:"rgba(232,232,240,0.95)", margin:0 }}>
                  {isEn?"Tell us about your project":"Cuéntanos tu proyecto"}
                </h2>
                <p style={{ fontSize:"clamp(13px,0.88vw,15px)", color:"rgba(232,232,240,0.4)", maxWidth:380, margin:0, lineHeight:1.65 }}>
                  {isEn?"Fill in what you can — no technical knowledge required.":"Llena lo que puedas — no se necesita conocimiento técnico."}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <form onSubmit={onSubmit}
                style={{ background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:8, padding:"clamp(24px,3vw,48px)", display:"flex", flexDirection:"column", gap:"clamp(20px,2.2vw,32px)" }}>

                {/* Nombre + Apellido */}
                <style>{`@media(min-width:600px){ .ct-2col { grid-template-columns: 1fr 1fr !important; } }`}</style>
                <div className="ct-2col" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"clamp(20px,2vw,32px)" }}>
                  <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
                    {label(c.fields.firstname + " *")}
                    <input className="ct-input" value={form.firstname} onChange={set("firstname")} placeholder="Mauricio" style={inp} />
                  </div>
                  <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
                    {label(c.fields.lastname + " *")}
                    <input className="ct-input" value={form.lastname} onChange={set("lastname")} placeholder="Rodriguez" style={inp} />
                  </div>
                </div>

                {/* Email + Teléfono */}
                <div className="ct-2col" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"clamp(20px,2vw,32px)" }}>
                  <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
                    {label(c.fields.email + " *")}
                    <input className="ct-input" type="email" value={form.email} onChange={set("email")} placeholder="tucorreo@empresa.com" style={inp} />
                  </div>
                  <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
                    {label(isEn?"Phone (optional)":"Celular (opcional)")}
                    <input className="ct-input" type="tel" inputMode="numeric" value={form.phone}
                      onChange={e=>setForm(s=>({...s,phone:e.target.value.replace(/\D/g,"")}))}
                      placeholder="+57 300 000 0000" style={inp} />
                  </div>
                </div>

                {/* Servicio — ahora opcional y flexible */}
                <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
                  {label(isEn?"What do you need? (optional)":"¿Qué necesitas? (opcional)")}
                  <select className="ct-input" value={form.service} onChange={set("service")}
                    style={{ ...inp, background:"transparent", paddingLeft:0 }}>
                    <option value="">{isEn?"I'm not sure yet / Other":"Aún no lo sé / Otro"}</option>
                    {c.services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Presupuesto + Timeline */}
                <div className="ct-2col" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"clamp(20px,2vw,32px)" }}>
                  <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
                    {label(isEn?"Budget range (optional)":"Rango de presupuesto (opcional)")}
                    <select className="ct-input" value={form.budget} onChange={set("budget")}
                      style={{ ...inp, background:"transparent", paddingLeft:0 }}>
                      <option value="">{isEn?"Select a range":"Selecciona un rango"}</option>
                      {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
                    {label(isEn?"When do you need it? (optional)":"¿Cuándo lo necesitas? (opcional)")}
                    <select className="ct-input" value={form.timeline} onChange={set("timeline")}
                      style={{ ...inp, background:"transparent", paddingLeft:0 }}>
                      <option value="">{isEn?"Select a timeframe":"Selecciona un plazo"}</option>
                      {timelines.map(tl => <option key={tl} value={tl}>{tl}</option>)}
                    </select>
                  </div>
                </div>

                {/* Mensaje — más espacio y placeholder amigable */}
                <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
                  {label(c.fields.message + " *")}
                  <textarea className="ct-input" rows={7} value={form.message} onChange={set("message")}
                    placeholder={isEn
                      ? "Tell us what you have in mind — even if it's just a rough idea. We'll figure out the rest together."
                      : "Cuéntanos qué tienes en mente — aunque sea una idea general. Lo demás lo resolvemos juntos."}
                    style={{ ...inp, resize:"vertical", minHeight:"120px" }} />
                </div>

                {/* Nota aclaratoria */}
                <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.62vw,11px)", color:"rgba(232,232,240,0.22)", margin:0, lineHeight:1.7 }}>
                  {isEn
                    ? "* Required fields. The rest is optional — fill in what you can and we'll work out the details together."
                    : "* Campos obligatorios. Lo demás es opcional — llena lo que puedas y resolvemos los detalles juntos."}
                </p>

                {/* Botón enviar */}
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16, paddingTop:4 }}>
                  <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.6vw,11px)", color:"rgba(232,232,240,0.25)", margin:0, letterSpacing:"0.1em" }}>
                    {isEn?"We respond within 24 hours":"Respondemos en menos de 24 horas"}
                  </p>
                  <button type="submit" disabled={loading||sent}
                    style={{ display:"inline-flex", alignItems:"center", gap:8, background:sent?"rgba(0,255,136,0.12)":"linear-gradient(135deg,#8B5CF6,#6C63FF)", border:sent?"1px solid rgba(0,255,136,0.3)":"none", color:sent?"#00ff88":"white", padding:"clamp(12px,1.1vw,18px) clamp(22px,2vw,34px)", fontFamily:"'DM Mono',monospace", fontSize:"clamp(11px,0.72vw,13px)", letterSpacing:"0.14em", textTransform:"uppercase", cursor:loading||sent?"default":"pointer", boxShadow:sent?"none":"0 0 32px rgba(139,92,246,0.3)", transition:"opacity .2s, transform .2s", borderRadius:0, opacity:loading?0.7:1, flexShrink:0 }}
                    onMouseEnter={e => { if (!loading&&!sent) { e.currentTarget.style.opacity="0.88"; e.currentTarget.style.transform="translateY(-1px)"; } }}
                    onMouseLeave={e => { e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="translateY(0)"; }}>
                    {sent
                      ? <><FiCheck size={13}/>{isEn?"Message sent!":"¡Mensaje enviado!"}</>
                      : loading
                      ? <><FiLoader style={{ animation:"spin .8s linear infinite" }} size={13}/>{c.fields.sending}</>
                      : <><FiSend size={13}/>{c.fields.send}</>
                    }
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>

          <Divider />

          {/* CTA FINAL — idéntico a resume */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once:true, margin:"-40px" }}
            style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"clamp(20px,2.5vw,40px)", padding:"clamp(28px,3vw,48px)", background:"rgba(139,92,246,0.05)", border:"1px solid rgba(139,92,246,0.15)", borderRadius:8 }}>
            <div>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(20px,2vw,34px)", fontWeight:700, color:"white", margin:"0 0 clamp(8px,0.8vw,12px) 0" }}>
                {isEn?"Want to see our work first?":"¿Quieres ver nuestros trabajos primero?"}
              </h3>
              <p style={{ fontSize:"clamp(13px,0.88vw,15px)", color:"rgba(232,232,240,0.45)", margin:0, maxWidth:460, lineHeight:1.65 }}>
                {isEn?"Check out what we've built for other clients — real projects, real results.":"Revisa lo que hemos construido para otros clientes — proyectos reales, resultados reales."}
              </p>
            </div>
            <Link href="/work"
              style={{ display:"inline-flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#8B5CF6,#6C63FF)", color:"white", padding:"clamp(12px,1.1vw,18px) clamp(22px,2vw,34px)", fontFamily:"'DM Mono',monospace", fontSize:"clamp(11px,0.72vw,13px)", letterSpacing:"0.14em", textTransform:"uppercase", textDecoration:"none", boxShadow:"0 0 32px rgba(139,92,246,0.3)", transition:"opacity .2s,transform .2s", flexShrink:0 }}
              onMouseEnter={e => { e.currentTarget.style.opacity="0.88"; e.currentTarget.style.transform="translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="translateY(0)"; }}>
              {isEn?"See our work":"Ver trabajos"}
              <FiArrowUpRight size={14} />
            </Link>
          </motion.div>

        </div>
      </div>
    </>
  );
}