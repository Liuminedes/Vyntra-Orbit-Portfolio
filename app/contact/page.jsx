"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiSend, FiLoader, FiCheck, FiPhone, FiMail,
  FiArrowUpRight, FiMessageSquare, FiClock, FiZap,
} from "react-icons/fi";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useLang } from "@/lib/LangContext";

/* ── Validación ── */
const isEmail = (s = "") => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim());

/* ── Toast idéntico al resto del proyecto ── */
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

/* ── Íconos de info ── */
const INFO_ICONS = [FiPhone, FiMail, FaDiscord];

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

  const [form, setForm] = useState({ firstname:"", lastname:"", email:"", phone:"", service:"", message:"" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm(s => ({ ...s, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = [];
    if (!form.firstname.trim()) errs.push(c.fields.firstname);
    if (!form.lastname.trim())  errs.push(c.fields.lastname);
    if (!isEmail(form.email))   errs.push(c.fields.email);
    if (!/^\d{7,15}$/.test(form.phone.replace(/\D/g,""))) errs.push(c.fields.phone);
    if (!form.service)          errs.push(c.fields.selectService);
    if (form.message.trim().length < 10) errs.push(c.fields.message);
    if (errs.length) { showToast("error", c.toast.missingFields, errs.join(", ")); return; }
    setLoading(true);
    try {
      const res  = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      const json = await res.json();
      if (res.ok && json.ok) {
        setSent(true);
        showToast("success", c.toast.successTitle, c.toast.successDetail);
        setForm({ firstname:"", lastname:"", email:"", phone:"", service:"", message:"" });
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

  /* Estilo base inputs — línea inferior únicamente */
  const inp = {
    width:"100%", background:"transparent",
    border:"none", borderBottom:"1px solid rgba(255,255,255,0.1)",
    outline:"none", fontSize:"clamp(13px,0.88vw,15px)",
    color:"rgba(232,232,240,0.8)", padding:"clamp(10px,1vw,14px) 0",
    fontFamily:"'DM Mono',monospace", transition:"border-color .2s",
  };

  /* Razones para contactar — igual que info pills de resume */
  const reasons = isEn ? [
    { icon: <FiZap size={14}/>,           text:"Fast responses in under 24h"    },
    { icon: <FiMessageSquare size={14}/>, text:"Free initial consultation"       },
    { icon: <FiClock size={14}/>,         text:"Project delivery in 2–4 weeks"  },
    { icon: <FiCheck size={14}/>,         text:"Post-delivery support included"  },
  ] : [
    { icon: <FiZap size={14}/>,           text:"Respuesta rápida en menos de 24h"   },
    { icon: <FiMessageSquare size={14}/>, text:"Consulta inicial gratuita"           },
    { icon: <FiClock size={14}/>,         text:"Entrega del proyecto en 2–4 semanas" },
    { icon: <FiCheck size={14}/>,         text:"Soporte post-entrega incluido"       },
  ];

  return (
    <>
      <Toaster position="top-right" containerStyle={{ zIndex:80 }} />
      <style>{`
        .ct-input:focus { border-bottom-color: rgba(139,92,246,0.6) !important; }
        select.ct-input option { background:#080810; color:#e8e8f0; }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>

      <div style={{ padding:"clamp(48px,5vw,80px) 0 clamp(60px,6vw,100px)", position:"relative" }}>

        {/* Ambient — idéntico a resume */}
        <div style={{ position:"fixed", top:"30%", left:"50%", transform:"translateX(-50%)", width:800, height:400, pointerEvents:"none", background:"radial-gradient(ellipse,rgba(139,92,246,0.04) 0%,transparent 70%)", zIndex:0 }} />

        <div style={{ width:"100%", maxWidth:"min(1800px,94vw)", margin:"0 auto", padding:"0 clamp(20px,3vw,60px)", position:"relative", zIndex:1 }}>

          {/* ══════════════════════════
              1 — ENCABEZADO
          ══════════════════════════ */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>

            <motion.div variants={fadeUp} style={{ marginBottom:"clamp(36px,4vw,56px)" }}>
              <SectionLabel label={isEn?"Contact":"Contacto"} />
              <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(32px,4vw,68px)", fontWeight:800, lineHeight:1.0, letterSpacing:"-0.02em", color:"rgba(232,232,240,0.95)", margin:0 }}>
                {c.heading}
              </h2>
            </motion.div>

            {/* Grid: texto/razones (izq) + info de contacto (der) — igual que "who-grid" de resume */}
            <style>{`@media(min-width:900px){ .ct-top-grid { grid-template-columns: 1fr clamp(260px,26vw,400px) !important; } }`}</style>
            <div className="ct-top-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"clamp(32px,4vw,64px)", alignItems:"center" }}>

              {/* Texto + razones */}
              <motion.div variants={fadeUp} style={{ display:"flex", flexDirection:"column", gap:"clamp(14px,1.4vw,22px)" }}>
                <p style={{ fontSize:"clamp(14px,1vw,18px)", lineHeight:1.85, color:"rgba(232,232,240,0.6)", margin:0, maxWidth:640 }}>
                  {c.subheading}
                </p>
                {/* Razones — misma estructura que info pills de resume */}
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

              {/* Info de contacto — columna derecha, igual que logo card de resume */}
              <motion.div variants={fadeUp} style={{ display:"flex", flexDirection:"column", gap:"clamp(10px,1vw,14px)" }}>
                {c.info.map((item, i) => {
                  const Icon = INFO_ICONS[i] || FiPhone;
                  return (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap:14, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:8, padding:"clamp(10px,1vw,16px) clamp(12px,1.2vw,18px)" }}>
                      <div style={{ width:"clamp(36px,3.5vw,44px)", height:"clamp(36px,3.5vw,44px)", borderRadius:"50%", border:"1px solid rgba(139,92,246,0.25)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(139,92,246,0.7)", flexShrink:0 }}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.58vw,11px)", color:"rgba(139,92,246,0.6)", textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:3 }}>{item.title}</div>
                        <div style={{ fontSize:"clamp(12px,0.82vw,14px)", color:"rgba(232,232,240,0.8)", fontWeight:500 }}>{item.description}</div>
                      </div>
                    </div>
                  );
                })}
                {/* Social + badge disponible */}
                <div style={{ display:"flex", alignItems:"center", gap:12, paddingTop:4, flexWrap:"wrap" }}>
                  {[
                    { icon:<FaInstagram size={14}/>, label:"@vyntra_orbit", href:"https://www.instagram.com/vyntra_orbit/" },
                    { icon:<FiMail size={14}/>,      label:"Email",         href:"mailto:liu.galax.dev.ops@gmail.com" },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                      style={{ display:"flex",alignItems:"center",gap:5,fontSize:"clamp(10px,0.7vw,12px)",color:"rgba(232,232,240,0.35)",textDecoration:"none",fontFamily:"'DM Mono',monospace",transition:"color .2s",letterSpacing:"0.08em" }}
                      onMouseEnter={e=>e.currentTarget.style.color="#8B5CF6"}
                      onMouseLeave={e=>e.currentTarget.style.color="rgba(232,232,240,0.35)"}>
                      {s.icon}{s.label}
                    </a>
                  ))}
                </div>
                {/* Badge disponible — idéntico a resume */}
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
              2 — FORMULARIO
              Ocupa el ancho completo igual que el grid de skills en resume
          ══════════════════════════ */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>

            <motion.div variants={fadeUp} style={{ marginBottom:"clamp(28px,3vw,44px)" }}>
              <SectionLabel label={isEn?"Send a message":"Enviar mensaje"} />
              <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:16 }}>
                <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(28px,3.5vw,58px)", fontWeight:800, lineHeight:1.0, letterSpacing:"-0.02em", color:"rgba(232,232,240,0.95)", margin:0 }}>
                  {isEn?"Let's work together":"Trabajemos juntos"}
                </h2>
                <p style={{ fontSize:"clamp(13px,0.88vw,15px)", color:"rgba(232,232,240,0.4)", maxWidth:380, margin:0, lineHeight:1.65 }}>
                  {isEn?"Fill in the form and we'll get back to you in under 24h.":"Completa el formulario y te respondemos en menos de 24h."}
                </p>
              </div>
            </motion.div>

            {/* Formulario — grid 2 columnas en desktop, igual que svc-grid de resume */}
            <motion.div variants={fadeUp}>
              <form onSubmit={onSubmit}
                style={{ background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:8, padding:"clamp(24px,3vw,48px)", display:"flex", flexDirection:"column", gap:"clamp(18px,2vw,28px)" }}>

                {/* Nombre + Apellido — grid 2 col igual que svc-grid */}
                <style>{`@media(min-width:600px){ .ct-names { grid-template-columns: 1fr 1fr !important; } }`}</style>
                <div className="ct-names" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"clamp(18px,2vw,28px)" }}>
                  <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
                    <label style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.6vw,11px)", color:"rgba(139,92,246,0.6)", textTransform:"uppercase", letterSpacing:"0.15em" }}>{c.fields.firstname}</label>
                    <input className="ct-input" value={form.firstname} onChange={set("firstname")} placeholder="Mauricio" style={inp} />
                  </div>
                  <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
                    <label style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.6vw,11px)", color:"rgba(139,92,246,0.6)", textTransform:"uppercase", letterSpacing:"0.15em" }}>{c.fields.lastname}</label>
                    <input className="ct-input" value={form.lastname} onChange={set("lastname")} placeholder="Rodriguez" style={inp} />
                  </div>
                </div>

                {/* Email + Teléfono — grid 2 col */}
                <div className="ct-names" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"clamp(18px,2vw,28px)" }}>
                  <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
                    <label style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.6vw,11px)", color:"rgba(139,92,246,0.6)", textTransform:"uppercase", letterSpacing:"0.15em" }}>{c.fields.email}</label>
                    <input className="ct-input" type="email" value={form.email} onChange={set("email")} placeholder="hello@company.com" style={inp} />
                  </div>
                  <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
                    <label style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.6vw,11px)", color:"rgba(139,92,246,0.6)", textTransform:"uppercase", letterSpacing:"0.15em" }}>{c.fields.phone}</label>
                    <input className="ct-input" type="tel" inputMode="numeric" value={form.phone}
                      onChange={e=>setForm(s=>({...s,phone:e.target.value.replace(/\D/g,"")}))}
                      placeholder="+57 300 000 0000" style={inp} />
                  </div>
                </div>

                {/* Servicio */}
                <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
                  <label style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.6vw,11px)", color:"rgba(139,92,246,0.6)", textTransform:"uppercase", letterSpacing:"0.15em" }}>
                    {isEn?"Service":"Servicio"}
                  </label>
                  <select className="ct-input" value={form.service} onChange={set("service")}
                    style={{ ...inp, background:"transparent", paddingLeft:0 }}>
                    <option value="" disabled>{c.fields.selectService}</option>
                    {c.services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Mensaje */}
                <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
                  <label style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.6vw,11px)", color:"rgba(139,92,246,0.6)", textTransform:"uppercase", letterSpacing:"0.15em" }}>{c.fields.message}</label>
                  <textarea className="ct-input" rows={6} value={form.message} onChange={set("message")}
                    placeholder={isEn?"Tell me about your project...":"Cuéntame sobre tu proyecto..."}
                    style={{ ...inp, resize:"none" }} />
                </div>

                {/* Botón enviar — estilo idéntico al CTA de resume */}
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

          {/* ══════════════════════════
              CTA FINAL — idéntico a resume
          ══════════════════════════ */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once:true, margin:"-40px" }}
            style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"clamp(20px,2.5vw,40px)", padding:"clamp(28px,3vw,48px)", background:"rgba(139,92,246,0.05)", border:"1px solid rgba(139,92,246,0.15)", borderRadius:8 }}>
            <div>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(20px,2vw,34px)", fontWeight:700, color:"white", margin:"0 0 clamp(8px,0.8vw,12px) 0" }}>
                {isEn?"Prefer to see our work first?":"¿Prefieres ver nuestros trabajos primero?"}
              </h3>
              <p style={{ fontSize:"clamp(13px,0.88vw,15px)", color:"rgba(232,232,240,0.45)", margin:0, maxWidth:460, lineHeight:1.65 }}>
                {isEn?"Check out what we've built for our clients before reaching out.":"Revisa lo que hemos construido para nuestros clientes antes de escribirnos."}
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