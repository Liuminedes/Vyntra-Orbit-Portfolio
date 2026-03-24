"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiLoader, FiPhone, FiMail, FiCheck } from "react-icons/fi";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useLang } from "@/lib/LangContext";

const isEmail = (s = "") => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim());

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
        <p style={{ fontSize:13,fontWeight:600,color:"#6C63FF",margin:0 }}>{title}</p>
        {detail && <p style={{ fontSize:11,color:"rgba(255,255,255,0.4)",marginTop:3 }}>{detail}</p>}
      </div>
      <button onClick={() => toast.dismiss(t.id)} style={{ background:"none",border:"none",color:"rgba(255,255,255,0.3)",cursor:"pointer",fontSize:14,padding:0,lineHeight:1 }}>✕</button>
    </div>
  ), { position:"top-right", duration:4500, id:kind });
}

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

  const infoItems = [
    { icon: FiPhone,    color:"#8B5CF6" },
    { icon: FiMail,     color:"#00D4FF" },
    { icon: FaInstagram,color:"#ff6090" },
  ];

  /* Input style base */
  const inp = {
    width:"100%", background:"transparent",
    borderTop:"none", borderLeft:"none", borderRight:"none",
    borderBottom:"1px solid rgba(255,255,255,0.1)",
    outline:"none", fontSize:"clamp(12px,0.85vw,14px)",
    color:"rgba(255,255,255,0.8)", padding:"clamp(9px,1vw,13px) 0",
    fontFamily:"'DM Mono',monospace", transition:"border-color .2s",
  };

  return (
    <>
      <Toaster position="top-right" containerStyle={{ zIndex:80 }} />
      <style>{`
        /* ── Contact responsive ── */
        .ct-grid { display:grid; grid-template-columns:1fr clamp(320px,35vw,480px); gap:clamp(32px,6vw,80px); align-items:start; }
        .ct-info { display:flex; flex-direction:column; gap:32px; }
        .ct-form-names { display:grid; grid-template-columns:1fr 1fr; gap:clamp(12px,1.5vw,24px); }
        input:focus, select:focus, textarea:focus { border-bottom-color:rgba(108,99,255,0.6) !important; }
        select option { background:#080810; color:#e8e8f0; }

        @media (max-width: 767px) {
          .ct-grid       { grid-template-columns:1fr !important; gap:32px !important; }
          .ct-info       { display:none !important; }
          .ct-form-names { grid-template-columns:1fr !important; gap:16px !important; }
        }
      `}</style>

      <section style={{ minHeight:"80vh", padding:"clamp(40px,5vw,72px) 0 clamp(60px,6vw,90px)", position:"relative", display:"flex", alignItems:"center" }}>

        <div style={{ position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)", width:600, height:300, pointerEvents:"none", background:"radial-gradient(ellipse,rgba(108,99,255,0.05) 0%,transparent 70%)" }} />

        <div className="vo-container" style={{ position:"relative", zIndex:2, width:"100%" }}>

          {/* Page header — visible siempre incluyendo móvil */}
          <div className="opacity-0 animate-fade-up" style={{ animationFillMode:"forwards", marginBottom:"clamp(28px,3vw,44px)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
              <span className="line-accent" />
              <span className="vo-label">{t.nav.contact}</span>
            </div>
            <h2 className="vo-heading" style={{ color:"rgba(232,232,240,0.95)", marginBottom:10 }}>{c.heading}</h2>
            <p style={{ fontSize:"clamp(13px,0.9vw,16px)", color:"rgba(232,232,240,0.45)", maxWidth:480, margin:0, lineHeight:1.7 }}>{c.subheading}</p>
          </div>

          <div className="ct-grid">

            {/* Info lateral — oculta en móvil */}
            <div className="ct-info">
              <ul style={{ display:"flex", flexDirection:"column", gap:"clamp(20px,2.5vw,32px)", listStyle:"none", padding:0, margin:0 }}>
                {c.info.map((item, i) => {
                  const Icon = infoItems[i]?.icon || FiPhone;
                  const color = infoItems[i]?.color || "#6C63FF";
                  return (
                    <li key={i} style={{ display:"flex", alignItems:"center", gap:"clamp(14px,1.5vw,20px)" }}>
                      <div style={{ width:"clamp(40px,4vw,48px)", height:"clamp(40px,4vw,48px)", border:`1px solid ${color}30`, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", color, flexShrink:0, background:`${color}08` }}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.6vw,11px)", color:"rgba(255,255,255,0.3)", textTransform:"uppercase", letterSpacing:"0.15em", margin:"0 0 3px" }}>{item.title}</p>
                        <p style={{ fontSize:"clamp(12px,0.85vw,15px)", color:"rgba(255,255,255,0.75)", margin:0 }}>{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Social */}
              <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)", paddingTop:"clamp(20px,2vw,28px)" }}>
                <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.6vw,10px)", color:"rgba(255,255,255,0.2)", letterSpacing:"0.15em", marginBottom:12 }}>SOCIAL</p>
                <div style={{ display:"flex", gap:12, alignItems:"center" }}>
                  {[
                    { icon:<FaInstagram size={16}/>, label:"@vyntra_orbit", href:"https://www.instagram.com/vyntra_orbit/" },
                    { icon:<FiMail size={16}/>,      label:"Email",          href:"mailto:liu.galax.dev.ops@gmail.com" },
                  ].map((s,i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                      style={{ display:"flex",alignItems:"center",gap:6,fontSize:"clamp(11px,0.72vw,13px)",color:"rgba(255,255,255,0.4)",textDecoration:"none",fontFamily:"'DM Mono',monospace",transition:"color .2s" }}
                      onMouseEnter={e=>e.currentTarget.style.color="#8B5CF6"}
                      onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.4)"}>
                      {s.icon}{s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Available badge */}
              <div style={{ display:"flex",alignItems:"center",gap:8,padding:"12px 16px",background:"rgba(0,255,136,0.05)",border:"1px solid rgba(0,255,136,0.15)",borderRadius:8 }}>
                <div style={{ width:8,height:8,borderRadius:"50%",background:"#00ff88",animation:"pulse-wip 2s infinite",flexShrink:0 }} />
                <span style={{ fontSize:"clamp(11px,0.72vw,13px)",color:"rgba(255,255,255,0.6)",fontFamily:"'DM Mono',monospace" }}>
                  {isEn?"Available for new projects — responds within 24h":"Disponible para nuevos proyectos — responde en 24h"}
                </span>
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity:0, y:24 }}
              animate={{ opacity:1, y:0, transition:{ delay:0.15, duration:0.5, ease:[0.22,1,0.36,1] } }}>

              <form onSubmit={onSubmit} style={{ display:"flex", flexDirection:"column", gap:"clamp(16px,1.8vw,24px)", padding:"clamp(20px,2.5vw,36px)", background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:10 }}>

                {/* Nombre + Apellido */}
                <div className="ct-form-names">
                  <div style={{ display:"flex",flexDirection:"column",gap:4 }}>
                    <label style={{ fontSize:9,color:"rgba(255,255,255,0.25)",textTransform:"uppercase",letterSpacing:"0.12em",fontFamily:"'DM Mono',monospace" }}>{c.fields.firstname}</label>
                    <input placeholder={isEn?"Mauricio":"Mauricio"} value={form.firstname} onChange={set("firstname")} style={inp} />
                  </div>
                  <div style={{ display:"flex",flexDirection:"column",gap:4 }}>
                    <label style={{ fontSize:9,color:"rgba(255,255,255,0.25)",textTransform:"uppercase",letterSpacing:"0.12em",fontFamily:"'DM Mono',monospace" }}>{c.fields.lastname}</label>
                    <input placeholder={isEn?"Rodriguez":"Rodriguez"} value={form.lastname} onChange={set("lastname")} style={inp} />
                  </div>
                </div>

                {/* Email */}
                <div style={{ display:"flex",flexDirection:"column",gap:4 }}>
                  <label style={{ fontSize:9,color:"rgba(255,255,255,0.25)",textTransform:"uppercase",letterSpacing:"0.12em",fontFamily:"'DM Mono',monospace" }}>{c.fields.email}</label>
                  <input type="email" placeholder="hello@company.com" value={form.email} onChange={set("email")} style={inp} />
                </div>

                {/* Teléfono */}
                <div style={{ display:"flex",flexDirection:"column",gap:4 }}>
                  <label style={{ fontSize:9,color:"rgba(255,255,255,0.25)",textTransform:"uppercase",letterSpacing:"0.12em",fontFamily:"'DM Mono',monospace" }}>{c.fields.phone}</label>
                  <input type="tel" inputMode="numeric" placeholder="+57 300 000 0000" value={form.phone} onChange={e=>setForm(s=>({...s,phone:e.target.value.replace(/\D/g,"")}))} style={inp} />
                </div>

                {/* Servicio */}
                <div style={{ display:"flex",flexDirection:"column",gap:4 }}>
                  <label style={{ fontSize:9,color:"rgba(255,255,255,0.25)",textTransform:"uppercase",letterSpacing:"0.12em",fontFamily:"'DM Mono',monospace" }}>{isEn?"Service":"Servicio"}</label>
                  <select value={form.service} onChange={set("service")} style={{ ...inp, background:"#080810", paddingLeft:0 }}>
                    <option value="" disabled>{c.fields.selectService}</option>
                    {c.services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Mensaje */}
                <div style={{ display:"flex",flexDirection:"column",gap:4 }}>
                  <label style={{ fontSize:9,color:"rgba(255,255,255,0.25)",textTransform:"uppercase",letterSpacing:"0.12em",fontFamily:"'DM Mono',monospace" }}>{c.fields.message}</label>
                  <textarea rows={5} placeholder={isEn?"Tell me about your project...":"Cuéntame sobre tu proyecto..."} value={form.message} onChange={set("message")} style={{ ...inp, resize:"none" }} />
                </div>

                {/* Submit */}
                <button type="submit" disabled={loading || sent}
                  style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:sent?"rgba(0,255,136,0.12)":"linear-gradient(135deg,#6C63FF,#5a52e0)",border:sent?"1px solid rgba(0,255,136,0.3)":"none",color:sent?"#00ff88":"white",padding:"clamp(12px,1.1vw,16px) 24px",fontFamily:"'DM Mono',monospace",fontSize:"clamp(11px,0.75vw,13px)",letterSpacing:"0.15em",textTransform:"uppercase",cursor:loading||sent?"default":"pointer",boxShadow:sent?"none":"0 0 24px rgba(108,99,255,0.3)",transition:"all .3s",borderRadius:4,opacity:loading?0.7:1 }}>
                  {sent
                    ? <><FiCheck size={13} />{isEn?"Message sent!":"¡Mensaje enviado!"}</>
                    : loading
                    ? <><FiLoader style={{ animation:"spin .8s linear infinite" }} size={13} />{c.fields.sending}</>
                    : <><FiSend size={13} />{c.fields.send}</>
                  }
                </button>
                <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>

                {/* Footer del form */}
                <p style={{ fontSize:"clamp(9px,0.6vw,11px)",color:"rgba(255,255,255,0.2)",textAlign:"center",margin:0,fontFamily:"'DM Mono',monospace",letterSpacing:"0.08em" }}>
                  {isEn?"We respond within 24 hours":"Respondemos en menos de 24 horas"}
                </p>
              </form>

              {/* Info visible solo en móvil — debajo del form */}
              <style>{`@media(min-width:768px){ .ct-mob-info { display:none !important; } }`}</style>
              <div className="ct-mob-info" style={{ marginTop:24,display:"flex",flexDirection:"column",gap:16 }}>
                {c.info.map((item,i) => {
                  const Icon = infoItems[i]?.icon || FiPhone;
                  const color = infoItems[i]?.color || "#6C63FF";
                  return (
                    <div key={i} style={{ display:"flex",alignItems:"center",gap:14 }}>
                      <div style={{ width:36,height:36,border:`1px solid ${color}30`,borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",color,flexShrink:0,background:`${color}08` }}>
                        <Icon size={14} />
                      </div>
                      <div>
                        <p style={{ fontFamily:"'DM Mono',monospace",fontSize:9,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:"0.12em",margin:"0 0 2px" }}>{item.title}</p>
                        <p style={{ fontSize:13,color:"rgba(255,255,255,0.65)",margin:0 }}>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
                <p style={{ fontFamily:"'DM Mono',monospace",fontSize:9,color:"rgba(255,255,255,0.2)",letterSpacing:"0.1em",marginTop:4 }}>@vyntra_orbit · Instagram · Facebook</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}