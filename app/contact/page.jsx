"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiLoader, FiPhone, FiMail } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useLang } from "@/lib/LangContext";

const ACCENT = "#6C63FF";
const isEmail = (s = "") => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim());

function showToast(kind, title, detail = "") {
  toast.custom((t) => (
    <div style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"12px 16px", borderRadius:6, border:`1px solid ${kind==="success"?"rgba(0,255,136,0.2)":"rgba(255,80,80,0.2)"}`, background:"rgba(12,12,24,0.96)", backdropFilter:"blur(12px)", boxShadow:"0 8px 32px rgba(0,0,0,0.4)", width:"min(92vw,400px)", opacity:t.visible?1:0, transition:"opacity 0.2s" }}>
      <div style={{ width:8, height:8, borderRadius:"50%", flexShrink:0, marginTop:4, background:kind==="success"?"#00ff88":"#ff6060" }} />
      <div style={{ flex:1 }}>
        <p style={{ fontSize:13, fontWeight:600, color:ACCENT, margin:0 }}>{title}</p>
        {detail && <p style={{ fontSize:11, color:"rgba(255,255,255,0.45)", marginTop:3 }}>{detail}</p>}
      </div>
      <button onClick={() => toast.dismiss(t.id)} style={{ background:"none", border:"none", color:"rgba(255,255,255,0.3)", cursor:"pointer", fontSize:14, padding:0 }}>✕</button>
    </div>
  ), { position:"top-right", duration:4500, id:kind });
}

const INFO_ICONS = [FiPhone, FiMail, FaDiscord];

export default function Contact() {
  const { t, lang } = useLang();
  const c = t.contact;
  const [form, setForm] = useState({ firstname:"", lastname:"", email:"", phone:"", service:"", message:"" });
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

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
      if (res.ok && json.ok) { showToast("success", c.toast.successTitle, c.toast.successDetail); setForm({ firstname:"", lastname:"", email:"", phone:"", service:"", message:"" }); }
      else showToast("error", c.toast.errorTitle, json?.error || c.toast.errorRetry);
    } catch { showToast("error", c.toast.errorTitle, c.toast.errorRetry); }
    finally { setLoading(false); }
  };

  const inputCls = {
    width: "100%",
    background: "transparent",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    borderTop: "none", borderLeft: "none", borderRight: "none",
    outline: "none",
    fontSize: "clamp(12px,0.85vw,14px)",
    color: "rgba(255,255,255,0.8)",
    padding: "clamp(10px,1vw,14px) 0",
    fontFamily: "'DM Mono',monospace",
    transition: "border-color 0.2s",
  };

  return (
    <>
      <Toaster position="top-right" containerStyle={{ zIndex:80 }} />
      <section style={{ minHeight:"80vh", padding:"clamp(40px,5vw,80px) 0 clamp(60px,6vw,100px)", position:"relative" }}>

        <div style={{ position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)", width:600, height:300, pointerEvents:"none", background:"radial-gradient(ellipse,rgba(108,99,255,0.05) 0%,transparent 70%)" }} />

        <div className="vo-container" style={{ position:"relative", zIndex:2 }}>

          {/* Header — siempre visible */}
          <div className="opacity-0 animate-fade-up" style={{ animationFillMode:"forwards", marginBottom:"clamp(24px,3vw,40px)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
              <span className="line-accent" />
              <span className="vo-label">{t.nav.contact}</span>
            </div>
            <h2 className="vo-heading" style={{ color:"rgba(232,232,240,0.9)" }}>{c.heading}</h2>
            <p style={{ fontSize:"clamp(13px,0.9vw,16px)", color:"rgba(232,232,240,0.45)", marginTop:8, maxWidth:480 }}>{c.subheading}</p>
          </div>

          {/* Grid — en móvil solo el form */}
          <style>{`
            @media(min-width:768px){
              .contact-grid { grid-template-columns: 1fr 480px !important; gap: clamp(32px,5vw,80px) !important; }
            }
          `}</style>
          <div className="contact-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:24 }}>

            {/* Info — oculta en móvil via CSS */}
            <div className="contact-info" style={{ display:"flex", flexDirection:"column", justifyContent:"center", gap:40 }}>
              <ul style={{ display:"flex", flexDirection:"column", gap:28 }}>
                {c.info.map((item, i) => {
                  const Icon = INFO_ICONS[i];
                  return (
                    <li key={i} style={{ display:"flex", alignItems:"center", gap:16 }}>
                      <div style={{ width:44, height:44, border:"1px solid rgba(255,255,255,0.07)", borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", color:"#6C63FF", flexShrink:0 }}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.6vw,10px)", color:"rgba(255,255,255,0.3)", textTransform:"uppercase", letterSpacing:"0.15em", margin:0 }}>{item.title}</p>
                        <p style={{ fontSize:"clamp(12px,0.85vw,14px)", color:"rgba(255,255,255,0.7)", marginTop:3 }}>{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(9px,0.6vw,10px)", color:"rgba(255,255,255,0.2)", letterSpacing:"0.1em" }}>
                @vyntra_orbit · Instagram · Facebook
              </p>
            </div>

            {/* Form */}
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0, transition:{ delay:0.2, duration:0.5, ease:[0.22,1,0.36,1] } }}>
              <form onSubmit={onSubmit} style={{ display:"flex", flexDirection:"column", gap:"clamp(14px,1.5vw,22px)", padding:"clamp(20px,2.5vw,36px)", background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:8 }}>

                {/* Nombre + Apellido */}
                <style>{`
                  @media(min-width:480px){ .contact-form-grid { grid-template-columns: 1fr 1fr !important; } }
                `}</style>
                <div className="contact-form-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"clamp(12px,1.5vw,20px)" }}>
                  <input placeholder={c.fields.firstname} value={form.firstname} onChange={set("firstname")} style={inputCls} />
                  <input placeholder={c.fields.lastname}  value={form.lastname}  onChange={set("lastname")}  style={inputCls} />
                </div>

                <input type="email" placeholder={c.fields.email} value={form.email} onChange={set("email")} style={inputCls} />
                <input type="tel" inputMode="numeric" placeholder={c.fields.phone} value={form.phone}
                  onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value.replace(/\D/g,"") }))} style={inputCls} />

                <select value={form.service} onChange={set("service")}
                  style={{ ...inputCls, background:"#080810", paddingLeft:0 }}>
                  <option value="" disabled>{c.fields.selectService}</option>
                  {c.services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>

                <textarea rows={5} placeholder={c.fields.message} value={form.message} onChange={set("message")}
                  style={{ ...inputCls, resize:"none", borderBottom:"1px solid rgba(255,255,255,0.1)" }} />

                <button type="submit" disabled={loading}
                  style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, background:"linear-gradient(135deg,#6C63FF,#5a52e0)", border:"none", color:"white", padding:"clamp(12px,1vw,16px) 24px", fontFamily:"'DM Mono',monospace", fontSize:"clamp(11px,0.75vw,13px)", letterSpacing:"0.15em", textTransform:"uppercase", cursor:"pointer", boxShadow:"0 0 24px rgba(108,99,255,0.3)", transition:"opacity .2s", opacity:loading?0.7:1 }}>
                  {loading
                    ? <><FiLoader style={{ animation:"spin 1s linear infinite" }} size={13} />{c.fields.sending}</>
                    : <><FiSend size={13} />{c.fields.send}</>}
                </button>

                <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}