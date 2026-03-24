"use client";
import { useState, useRef, useEffect } from "react";

export default function IntraComDemo({ lang = "es" }) {
  const isEn = lang === "en";
  const [activeChannel, setActiveChannel] = useState("general");
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const T = {
    urlBar:    isEn ? "intracom.almotores.internal"  : "intracom.almotores.internal",
    channels:  isEn ? "Channels"                     : "Canales",
    team:      isEn ? "Team"                         : "Equipo",
    online:    isEn ? "online"                       : "en línea",
    you:       isEn ? "You"                          : "Tú",
    youAvatar: "TÚ",
    youName:   isEn ? "Mauricio R."                  : "Mauricio R.",
    active:    isEn ? "● active"                     : "● activo",
    msgPlaceholder: (ch) => isEn ? `Message #${ch}...` : `Mensaje en #${ch}...`,
    channels_list: [
      { id:"general",  name:"general",   unread:0 },
      { id:"dev",      name: isEn?"development":"desarrollo", unread:3 },
      { id:"sales",    name: isEn?"sales":"ventas",           unread:1 },
      { id:"hr",       name: isEn?"hr":"rrhh",                unread:0 },
    ],
    users: [
      { name: isEn?"Laura T.":"Laura T.",   avatar:"LT", color:"#6C63FF", role: isEn?"Admin":"Admin",   online:true },
      { name: isEn?"Andrés R.":"Andrés R.", avatar:"AR", color:"#00D4FF", role: isEn?"Dev":"Dev",       online:true },
      { name: isEn?"Carlos M.":"Carlos M.", avatar:"CM", color:"#ffb400", role: isEn?"Sales":"Ventas",  online:true },
      { name: isEn?"Milena V.":"Milena V.", avatar:"MV", color:"#ff6090", role: isEn?"HR":"RRHH",       online:false },
      { name: isEn?"Felipe C.":"Felipe C.", avatar:"FC", color:"#a0a0ff", role: isEn?"Sales":"Ventas",  online:false },
    ],
  };

  const initMessages = {
    general: [
      { user: isEn?"Laura T.":"Laura T.",   avatar:"LT", color:"#6C63FF", time:"09:01", text: isEn?"Good morning team 👋":"Buenos días equipo 👋",                                  self:false },
      { user: isEn?"Andrés R.":"Andrés R.", avatar:"AR", color:"#00D4FF", time:"09:03", text: isEn?"Good morning! Reminder: meeting at 11am":"Buenos días! Recordar la reunión a las 11am", self:false },
      { user: T.youName, avatar:T.youAvatar, color:"#00ff88", time:"09:05", text: isEn?"Confirmed, meet link is ready":"Confirmado, ya tengo el meet listo",                        self:true  },
      { user: isEn?"Carlos M.":"Carlos M.", avatar:"CM", color:"#ffb400", time:"09:10", text: isEn?"Perfect. I'll share the report before the meeting":"Perfecto. Compartiré el informe antes de la reunión", self:false },
      { user: T.youName, avatar:T.youAvatar, color:"#00ff88", time:"09:12", text: isEn?"Thanks Carlos 🙌":"Gracias Carlos 🙌",                                                     self:true  },
    ],
    dev: [
      { user: isEn?"Andrés R.":"Andrés R.", avatar:"AR", color:"#00D4FF", time:"08:45", text: isEn?"Push to staging done. Check the reports module":"Push al staging hecho. Revisen el módulo de reportes", self:false },
      { user: T.youName, avatar:T.youAvatar, color:"#00ff88", time:"08:48", text: isEn?"Checking... there's a bug in the date filter":"Revisando... hay un bug en el filtro de fechas", self:true },
      { user: isEn?"Andrés R.":"Andrés R.", avatar:"AR", color:"#00D4FF", time:"08:50", text: isEn?"Seen, opening a PR to fix it now":"Visto, abro el PR para arreglarlo ahora",     self:false },
    ],
    sales: [
      { user: isEn?"Carlos M.":"Carlos M.", avatar:"CM", color:"#ffb400", time:"10:15", text: isEn?"We closed 3 sales this morning 🚗🚗🚗":"Cerramos 3 ventas esta mañana 🚗🚗🚗", self:false },
      { user: isEn?"Laura T.":"Laura T.",   avatar:"LT", color:"#6C63FF", time:"10:17", text: isEn?"Excellent! I'll update the dashboard":"Excelente! Lo reflejo en el dashboard",   self:false },
    ],
    hr: [
      { user: isEn?"Laura T.":"Laura T.",   avatar:"LT", color:"#6C63FF", time:"07:30", text: isEn?"Remember to send this month's timesheet":"Recuerden enviar el reporte de horas del mes", self:false },
    ],
  };

  const [messages, setMessages] = useState(initMessages);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior:"smooth" });
  }, [activeChannel, messages]);

  const send = () => {
    if (!input.trim()) return;
    setMessages(prev => ({
      ...prev,
      [activeChannel]: [...(prev[activeChannel] || []), {
        user: T.youName,
        avatar: T.youAvatar,
        color: "#00ff88",
        time: new Date().toLocaleTimeString(isEn ? "en" : "es", { hour:"2-digit", minute:"2-digit" }),
        text: input.trim(),
        self: true,
      }],
    }));
    setInput("");
  };

  const msgs = messages[activeChannel] || [];
  const currentChannelName = T.channels_list.find(c => c.id === activeChannel)?.name || activeChannel;

  return (
    <div style={{ background:"#0d0d18", borderRadius:12, overflow:"hidden", border:"1px solid rgba(255,255,255,0.08)", fontFamily:"'DM Mono',monospace" }}>
      {/* Browser chrome */}
      <div style={{ background:"#111122", padding:"10px 14px", display:"flex", alignItems:"center", gap:8, borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width:10, height:10, borderRadius:"50%", background:"#ff5f57" }} />
        <div style={{ width:10, height:10, borderRadius:"50%", background:"#febc2e" }} />
        <div style={{ width:10, height:10, borderRadius:"50%", background:"#28c840" }} />
        <div style={{ flex:1, background:"rgba(255,255,255,0.04)", borderRadius:6, padding:"4px 10px", fontSize:9, color:"rgba(255,255,255,0.25)", marginLeft:8 }}>{T.urlBar}</div>
        <div style={{ fontSize:9, color:"rgba(255,255,255,0.35)", letterSpacing:"0.1em" }}>IntraCom</div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"150px 1fr 140px", height:400 }}>

        {/* Channels sidebar */}
        <div style={{ background:"#080812", borderRight:"1px solid rgba(255,255,255,0.05)", padding:"12px 8px", display:"flex", flexDirection:"column", gap:2 }}>
          <div style={{ fontSize:8, color:"rgba(255,255,255,0.2)", textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:8, paddingLeft:6 }}>{T.channels}</div>
          {T.channels_list.map(ch => (
            <button key={ch.id} onClick={() => setActiveChannel(ch.id)}
              style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"7px 8px", borderRadius:6, border:"none", background: activeChannel===ch.id?"rgba(108,99,255,0.15)":"transparent", color: activeChannel===ch.id?"#6C63FF":"rgba(255,255,255,0.3)", fontSize:11, cursor:"pointer", textAlign:"left", fontFamily:"'DM Mono',monospace", transition:"all 0.15s" }}>
              <span># {ch.name}</span>
              {ch.unread > 0 && (
                <span style={{ background:"#6C63FF", color:"white", borderRadius:"50%", width:14, height:14, display:"flex", alignItems:"center", justifyContent:"center", fontSize:8, fontWeight:700 }}>{ch.unread}</span>
              )}
            </button>
          ))}
          <div style={{ marginTop:"auto", padding:"8px 6px 0", borderTop:"1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:6 }}>
              <div style={{ width:24, height:24, borderRadius:"50%", background:"#00ff88", display:"flex", alignItems:"center", justifyContent:"center", fontSize:8, fontWeight:700, color:"#080810" }}>{T.youAvatar}</div>
              <div>
                <div style={{ fontSize:9, color:"rgba(255,255,255,0.7)", lineHeight:1 }}>{T.youName}</div>
                <div style={{ fontSize:8, color:"#00ff88" }}>{T.active}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat area */}
        <div style={{ display:"flex", flexDirection:"column" }}>
          <div style={{ padding:"10px 14px", borderBottom:"1px solid rgba(255,255,255,0.05)", display:"flex", alignItems:"center", gap:6 }}>
            <span style={{ color:"rgba(255,255,255,0.3)", fontSize:11 }}>#</span>
            <span style={{ fontSize:11, color:"rgba(255,255,255,0.7)", fontWeight:600 }}>{currentChannelName}</span>
          </div>
          <div style={{ flex:1, overflowY:"auto", padding:"12px 14px", display:"flex", flexDirection:"column", gap:10, maxHeight:290 }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:8, flexDirection: m.self?"row-reverse":"row" }}>
                <div style={{ width:26, height:26, borderRadius:"50%", background:m.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:7, fontWeight:700, color:"#080810", flexShrink:0 }}>{m.avatar}</div>
                <div style={{ maxWidth:"65%", display:"flex", flexDirection:"column", alignItems: m.self?"flex-end":"flex-start" }}>
                  <div style={{ fontSize:8, color:"rgba(255,255,255,0.3)", marginBottom:3 }}>{m.self?"":m.user+" · "}{m.time}</div>
                  <div style={{ background: m.self?"rgba(108,99,255,0.2)":"rgba(255,255,255,0.05)", border:`1px solid ${m.self?"rgba(108,99,255,0.3)":"rgba(255,255,255,0.07)"}`, borderRadius: m.self?"12px 12px 2px 12px":"12px 12px 12px 2px", padding:"7px 10px", fontSize:11, color:"rgba(255,255,255,0.8)", lineHeight:1.5 }}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div style={{ padding:"10px 12px", borderTop:"1px solid rgba(255,255,255,0.05)", display:"flex", gap:6 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder={T.msgPlaceholder(currentChannelName)}
              style={{ flex:1, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:8, padding:"7px 10px", fontSize:10, color:"rgba(255,255,255,0.7)", outline:"none", fontFamily:"'DM Mono',monospace" }}
            />
            <button onClick={send} style={{ background:"rgba(108,99,255,0.3)", border:"1px solid rgba(108,99,255,0.4)", borderRadius:8, padding:"0 10px", color:"#6C63FF", cursor:"pointer", fontSize:12 }}>↑</button>
          </div>
        </div>

        {/* Users panel */}
        <div style={{ background:"#080812", borderLeft:"1px solid rgba(255,255,255,0.05)", padding:"12px 10px" }}>
          <div style={{ fontSize:8, color:"rgba(255,255,255,0.2)", textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:10 }}>
            {T.team} ({T.users.filter(u=>u.online).length} {T.online})
          </div>
          {T.users.map((u, i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:7, marginBottom:8 }}>
              <div style={{ position:"relative" }}>
                <div style={{ width:24, height:24, borderRadius:"50%", background:u.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:7, fontWeight:700, color:"#080810" }}>{u.avatar}</div>
                <div style={{ position:"absolute", bottom:0, right:0, width:7, height:7, borderRadius:"50%", background: u.online?"#00ff88":"#444", border:"1.5px solid #080812" }} />
              </div>
              <div>
                <div style={{ fontSize:9, color: u.online?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.25)", lineHeight:1 }}>{u.name}</div>
                <div style={{ fontSize:8, color:"rgba(255,255,255,0.2)" }}>{u.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}