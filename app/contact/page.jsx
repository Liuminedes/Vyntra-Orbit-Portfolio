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
    <div className={`flex items-start gap-3 px-4 py-3 rounded-sm border bg-[#0c0c18]/95 backdrop-blur shadow-2xl w-[min(92vw,400px)]
      ${kind === "success" ? "border-green-500/20" : "border-red-500/20"}
      ${t.visible ? "animate-in fade-in-0" : "animate-out fade-out-0"}`}>
      <div className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${kind === "success" ? "bg-green-400" : "bg-red-400"}`} />
      <div>
        <p className="text-[13px] font-medium" style={{ color: ACCENT }}>{title}</p>
        {detail && <p className="text-[12px] text-white/50 mt-0.5">{detail}</p>}
      </div>
      <button onClick={() => toast.dismiss(t.id)} className="ml-auto text-white/30 hover:text-white/70 text-sm">✕</button>
    </div>
  ), { position: "top-right", duration: 4500, id: kind });
}

const INFO_ICONS = [FiPhone, FiMail, FaDiscord];

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = useState({ firstname: "", lastname: "", email: "", phone: "", service: "", message: "" });
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
      const res  = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const json = await res.json();
      if (res.ok && json.ok) { showToast("success", c.toast.successTitle, c.toast.successDetail); setForm({ firstname: "", lastname: "", email: "", phone: "", service: "", message: "" }); }
      else showToast("error", c.toast.errorTitle, json?.error || c.toast.errorRetry);
    } catch { showToast("error", c.toast.errorTitle, c.toast.errorRetry); }
    finally  { setLoading(false); }
  };

  const inputClass = `w-full bg-transparent border-b border-white/10 focus:border-accent/50 outline-none text-[13px] text-white/80 placeholder:text-white/25 py-3 transition-colors duration-200 font-mono`;

  return (
    <>
      <Toaster position="top-right" containerStyle={{ zIndex: 80 }} />
      <section className="min-h-[80vh] flex items-center py-16 xl:py-0 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(108,99,255,0.05) 0%, transparent 70%)" }} />
        <div className="vo-container" style={{ position: "relative", zIndex: 2 }}>
          <div className="grid xl:grid-cols-[1fr_480px] gap-16 xl:gap-24">
            <div className="order-2 xl:order-1 flex flex-col justify-between gap-12">
              <div>
                <div className="flex items-center gap-3 mb-4"><span className="line-accent" /><span className="label-sm">{t.nav.contact}</span></div>
                <h2 className="display-lg text-white/90 mb-4">{c.heading}</h2>
                <p className="text-muted text-[14px] leading-relaxed max-w-[360px]">{c.subheading}</p>
              </div>
              <ul className="flex flex-col gap-8">
                {c.info.map((item, i) => { const Icon = INFO_ICONS[i]; return (
                  <li key={i} className="flex items-center gap-5">
                    <div className="w-10 h-10 border border-white/07 rounded-sm flex items-center justify-center text-accent"><Icon size={16} /></div>
                    <div><p className="label-sm mb-0.5">{item.title}</p><p className="text-[13px] text-white/70">{item.description}</p></div>
                  </li>
                );})}
              </ul>
              <p className="label-sm">@vyntra_orbit · Instagram · Facebook</p>
            </div>
            <motion.div className="order-1 xl:order-2" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: [0.22,1,0.36,1] } }}>
              <form onSubmit={onSubmit} className="flex flex-col gap-6 p-8 xl:p-10 vo-card">
                <div className="grid grid-cols-2 gap-6">
                  <input placeholder={c.fields.firstname} value={form.firstname} onChange={set("firstname")} className={inputClass} />
                  <input placeholder={c.fields.lastname}  value={form.lastname}  onChange={set("lastname")}  className={inputClass} />
                </div>
                <input type="email" placeholder={c.fields.email} value={form.email} onChange={set("email")} className={inputClass} />
                <input type="tel" inputMode="numeric" placeholder={c.fields.phone} value={form.phone} onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value.replace(/\D/g,"") }))} className={inputClass} />
                <select value={form.service} onChange={set("service")} className={`${inputClass} bg-[#080810] cursor-none`}>
                  <option value="" disabled>{c.fields.selectService}</option>
                  {c.services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <textarea rows={5} placeholder={c.fields.message} value={form.message} onChange={set("message")} className={`${inputClass} resize-none`} />
                <button type="submit" disabled={loading} className="btn-glow-solid flex items-center justify-center gap-2 py-3 text-[12px] tracking-[0.15em]">
                  {loading ? <><FiLoader className="animate-spin" size={13} />{c.fields.sending}</> : <><FiSend size={13} />{c.fields.send}</>}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}