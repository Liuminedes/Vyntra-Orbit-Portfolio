"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiLoader, FiPhone, FiMail, FiCheck } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
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

const INFO_ICONS = [
  { Icon: FiPhone,    color:"#8B5CF6" },
  { Icon: FiMail,     color:"#00D4FF" },
  { Icon: FaInstagram,color:"#ff6090" },
];

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

  /* Estilo base de inputs */
  const inp = {
    width:"100%",
    background:"transparent",
    border:"none",
    borderBottom:"1px solid rgba(255,255,255,0.12)",
    outline:"none",
    fontSize:"14px",
    color:"rgba(255,255,255,0.85)",
    padding:"10px 0",
    fontFamily:"'DM Mono',monospace",
    transition:"border-color .2s",
  };

  return (
    <>
      <Toaster position="top-right" containerStyle={{ zIndex:80 }} />

      {/* Focus styles via style tag — Tailwind no cubre pseudo-clases en inline */}
      <style>{`
        .ct-input:focus { border-bottom-color: rgba(108,99,255,0.7) !important; }
        select.ct-input option { background:#080810; color:#e8e8f0; }
      `}</style>

      <section className="relative min-h-[80vh] py-10 md:py-16 lg:py-20 flex items-start md:items-center">

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] pointer-events-none"
          style={{ background:"radial-gradient(ellipse,rgba(108,99,255,0.05) 0%,transparent 70%)" }} />

        <div className="vo-container relative z-10 w-full">

          {/* ── Header — siempre visible ── */}
          <div className="opacity-0 animate-fade-up mb-8 md:mb-10" style={{ animationFillMode:"forwards" }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="line-accent" />
              <span className="vo-label">{t.nav.contact}</span>
            </div>
            <h2 className="vo-heading text-white/95 mb-2">{c.heading}</h2>
            <p className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed m-0">{c.subheading}</p>
          </div>

          {/* ── Grid: info (desktop) + form ── */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_480px] gap-8 xl:gap-20">

            {/* Info lateral — solo desktop */}
            <div className="hidden xl:flex flex-col justify-center gap-8">
              <ul className="flex flex-col gap-7 list-none p-0 m-0">
                {c.info.map((item, i) => {
                  const { Icon, color } = INFO_ICONS[i] || { Icon: FiPhone, color:"#6C63FF" };
                  return (
                    <li key={i} className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ border:`1px solid ${color}30`, background:`${color}08`, color }}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] m-0 mb-1 font-mono">{item.title}</p>
                        <p className="text-sm text-white/75 m-0">{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Social */}
              <div className="border-t border-white/5 pt-6">
                <p className="text-[10px] text-white/20 tracking-[0.15em] uppercase font-mono mb-3">Social</p>
                <div className="flex gap-4 items-center flex-wrap">
                  {[
                    { Icon: FaInstagram, label:"@vyntra_orbit", href:"https://www.instagram.com/vyntra_orbit/", color:"#ff6090" },
                    { Icon: FiMail,      label:"Email",         href:"mailto:liu.galax.dev.ops@gmail.com",       color:"#00D4FF" },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[13px] text-white/40 no-underline font-mono transition-colors duration-200 hover:text-[#8B5CF6]">
                      <s.Icon size={14} style={{ color: s.color }} />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Disponible badge */}
              <div className="flex items-center gap-3 p-3 rounded-lg"
                style={{ background:"rgba(0,255,136,0.05)", border:"1px solid rgba(0,255,136,0.15)" }}>
                <div className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background:"#00ff88", animation:"pulse-wip 2s infinite" }} />
                <span className="text-white/60 text-[13px] font-mono">
                  {isEn ? "Available for new projects — responds within 24h" : "Disponible para nuevos proyectos — responde en 24h"}
                </span>
              </div>
            </div>

            {/* ── FORM ── */}
            <motion.div
              initial={{ opacity:0, y:24 }}
              animate={{ opacity:1, y:0, transition:{ delay:0.15, duration:0.5, ease:[0.22,1,0.36,1] } }}>

              <form onSubmit={onSubmit}
                className="flex flex-col gap-5 p-5 sm:p-8 rounded-xl"
                style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)" }}>

                {/* Nombre + Apellido */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] text-white/30 uppercase tracking-[0.12em] font-mono">{c.fields.firstname}</label>
                    <input className="ct-input" placeholder="Mauricio" value={form.firstname} onChange={set("firstname")} style={inp} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] text-white/30 uppercase tracking-[0.12em] font-mono">{c.fields.lastname}</label>
                    <input className="ct-input" placeholder="Rodriguez" value={form.lastname} onChange={set("lastname")} style={inp} />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] text-white/30 uppercase tracking-[0.12em] font-mono">{c.fields.email}</label>
                  <input className="ct-input" type="email" placeholder="hello@company.com" value={form.email} onChange={set("email")} style={inp} />
                </div>

                {/* Teléfono */}
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] text-white/30 uppercase tracking-[0.12em] font-mono">{c.fields.phone}</label>
                  <input className="ct-input" type="tel" inputMode="numeric" placeholder="+57 300 000 0000"
                    value={form.phone} onChange={e => setForm(s => ({ ...s, phone: e.target.value.replace(/\D/g,"") }))} style={inp} />
                </div>

                {/* Servicio */}
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] text-white/30 uppercase tracking-[0.12em] font-mono">{isEn ? "Service" : "Servicio"}</label>
                  <select className="ct-input" value={form.service} onChange={set("service")}
                    style={{ ...inp, background:"#080810", paddingLeft:0 }}>
                    <option value="" disabled>{c.fields.selectService}</option>
                    {c.services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] text-white/30 uppercase tracking-[0.12em] font-mono">{c.fields.message}</label>
                  <textarea className="ct-input" rows={5} value={form.message} onChange={set("message")}
                    placeholder={isEn ? "Tell me about your project..." : "Cuéntame sobre tu proyecto..."}
                    style={{ ...inp, resize:"none" }} />
                </div>

                {/* Submit */}
                <button type="submit" disabled={loading || sent}
                  className="w-full flex items-center justify-content-center gap-2 py-3 font-mono text-[12px] tracking-[0.15em] uppercase rounded transition-all duration-300"
                  style={{
                    display:"flex", justifyContent:"center",
                    background: sent ? "rgba(0,255,136,0.12)" : "linear-gradient(135deg,#6C63FF,#5a52e0)",
                    border: sent ? "1px solid rgba(0,255,136,0.3)" : "none",
                    color: sent ? "#00ff88" : "white",
                    boxShadow: sent ? "none" : "0 0 24px rgba(108,99,255,0.3)",
                    opacity: loading ? 0.7 : 1,
                    cursor: loading || sent ? "default" : "pointer",
                  }}>
                  {sent
                    ? <><FiCheck size={13} />{isEn ? "Message sent!" : "¡Mensaje enviado!"}</>
                    : loading
                    ? <><FiLoader style={{ animation:"spin .8s linear infinite" }} size={13} />{c.fields.sending}</>
                    : <><FiSend size={13} />{c.fields.send}</>
                  }
                </button>
                <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>

                <p className="text-[10px] text-white/25 text-center m-0 font-mono tracking-wide">
                  {isEn ? "We respond within 24 hours" : "Respondemos en menos de 24 horas"}
                </p>
              </form>

              {/* Info de contacto — solo móvil, debajo del form */}
              <div className="xl:hidden mt-6 flex flex-col gap-4">
                {c.info.map((item, i) => {
                  const { Icon, color } = INFO_ICONS[i] || { Icon: FiPhone, color:"#6C63FF" };
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ border:`1px solid ${color}30`, background:`${color}08`, color }}>
                        <Icon size={14} />
                      </div>
                      <div>
                        <p className="text-[9px] text-white/30 uppercase tracking-[0.12em] font-mono m-0 mb-0.5">{item.title}</p>
                        <p className="text-[13px] text-white/70 m-0">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
                <p className="text-[9px] text-white/20 font-mono tracking-wider mt-1">
                  @vyntra_orbit · Instagram · Facebook
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}