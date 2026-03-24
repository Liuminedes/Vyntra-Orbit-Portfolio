"use client";
import { useState, useRef, useEffect } from "react";

export default function IntraComDemo({ lang = "es" }) {
  const isEn = lang === "en";
  const [activeChannel, setActiveChannel] = useState("general");
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const youName = "Mauricio R.";
  const youAvatar = "MR";

  const channels = [
    { id:"general", name:"general",                       unread:0 },
    { id:"dev",     name:isEn?"development":"desarrollo", unread:3 },
    { id:"sales",   name:isEn?"sales":"ventas",           unread:1 },
    { id:"hr",      name:isEn?"hr":"rrhh",                unread:0 },
  ];

  const users = [
    { name:"Laura T.",  avatar:"LT", color:"#8B5CF6", role:isEn?"Admin":"Admin",  online:true  },
    { name:"Andrés R.", avatar:"AR", color:"#00D4FF", role:isEn?"Dev":"Dev",      online:true  },
    { name:"Carlos M.", avatar:"CM", color:"#ffb400", role:isEn?"Sales":"Ventas", online:true  },
    { name:"Milena V.", avatar:"MV", color:"#ff6090", role:isEn?"HR":"RRHH",      online:false },
    { name:"Felipe C.", avatar:"FC", color:"#a0a0ff", role:isEn?"Sales":"Ventas", online:false },
  ];

  const initMessages = {
    general: [
      { user:"Laura T.",  avatar:"LT", color:"#8B5CF6", time:"09:01", text:isEn?"Good morning team 👋":"Buenos días equipo 👋",                 self:false },
      { user:"Andrés R.", avatar:"AR", color:"#00D4FF", time:"09:03", text:isEn?"Meeting at 11am ⏰":"Reunión a las 11am ⏰",                     self:false },
      { user:youName,     avatar:youAvatar, color:"#00ff88", time:"09:05", text:isEn?"Meet link ready ✅":"Meet listo ✅",                        self:true  },
      { user:"Carlos M.", avatar:"CM", color:"#ffb400", time:"09:10", text:isEn?"Sharing report before 📊":"Comparto el informe 📊",              self:false },
    ],
    dev: [
      { user:"Andrés R.", avatar:"AR", color:"#00D4FF", time:"08:45", text:isEn?"Push to staging done":"Push al staging hecho", self:false },
      { user:youName,     avatar:youAvatar, color:"#00ff88", time:"08:48", text:isEn?"Bug in date filter, opening PR":"Bug en filtro, abro PR", self:true },
      { user:"Andrés R.", avatar:"AR", color:"#00D4FF", time:"08:50", text:isEn?"On it 🔧":"En eso 🔧", self:false },
    ],
    sales: [
      { user:"Carlos M.", avatar:"CM", color:"#ffb400", time:"10:15", text:isEn?"3 sales closed 🚗":"3 ventas cerradas 🚗", self:false },
      { user:"Laura T.",  avatar:"LT", color:"#8B5CF6", time:"10:17", text:isEn?"Updating dashboard ✓":"Actualizo dashboard ✓", self:false },
    ],
    hr: [
      { user:"Laura T.", avatar:"LT", color:"#8B5CF6", time:"07:30", text:isEn?"Send your timesheet":"Envíen el reporte de horas", self:false },
    ],
  };

  const [messages, setMessages] = useState(initMessages);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:"smooth" }); }, [activeChannel, messages]);

  const send = () => {
    if (!input.trim()) return;
    setMessages(prev => ({
      ...prev,
      [activeChannel]: [...(prev[activeChannel]||[]), {
        user:youName, avatar:youAvatar, color:"#00ff88",
        time:new Date().toLocaleTimeString(isEn?"en":"es",{hour:"2-digit",minute:"2-digit"}),
        text:input.trim(), self:true,
      }],
    }));
    setInput("");
  };

  const msgs = messages[activeChannel] || [];
  const chName = channels.find(c=>c.id===activeChannel)?.name || activeChannel;

  return (
    <>
      <style>{`
        .ic-grid  { display:grid; grid-template-columns:130px 1fr 120px; height:400px; }
        .ic-sb    { background:#080812; border-right:1px solid rgba(255,255,255,0.04); padding:10px 7px; display:flex; flex-direction:column; }
        .ic-users { background:#080812; border-left:1px solid rgba(255,255,255,0.04); padding:10px 8px; }
        @media(max-width:700px){
          .ic-grid  { grid-template-columns:1fr !important; height:auto !important; }
          .ic-sb    { display:none !important; }
          .ic-users { display:none !important; }
          .ic-chat  { height:350px !important; }
        }
      `}</style>
      <div style={{ background:"#0d0d18",borderRadius:12,overflow:"hidden",border:"1px solid rgba(255,255,255,0.07)",fontFamily:"'DM Mono',monospace" }}>
        {/* Chrome */}
        <div style={{ background:"#111122",padding:"10px 14px",display:"flex",alignItems:"center",gap:8,borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
          {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width:9,height:9,borderRadius:"50%",background:c }} />)}
          <div style={{ flex:1,background:"rgba(255,255,255,0.04)",borderRadius:5,padding:"3px 10px",fontSize:9,color:"rgba(255,255,255,0.25)",marginLeft:8 }}>intracom.almotores.internal</div>
          <div style={{ fontSize:9,color:"rgba(255,255,255,0.3)" }}>IntraCom</div>
        </div>

        <div className="ic-grid">
          {/* Sidebar canales */}
          <div className="ic-sb">
            <div style={{ padding:"5px 7px",marginBottom:7,borderBottom:"1px solid rgba(255,255,255,0.04)",paddingBottom:9 }}>
              <div style={{ fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.7)" }}>Almotores</div>
              <div style={{ fontSize:7,color:"rgba(255,255,255,0.25)",marginTop:1 }}>workspace</div>
            </div>
            <div style={{ fontSize:7,color:"rgba(255,255,255,0.2)",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:5,paddingLeft:5 }}>{isEn?"Channels":"Canales"}</div>
            {channels.map(ch => (
              <button key={ch.id} onClick={() => setActiveChannel(ch.id)}
                style={{ width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"5px 7px",borderRadius:5,border:"none",background:activeChannel===ch.id?"rgba(108,99,255,0.15)":"transparent",color:activeChannel===ch.id?"#8B5CF6":"rgba(255,255,255,0.3)",fontSize:10,cursor:"pointer",textAlign:"left",fontFamily:"'DM Mono',monospace",transition:"all .15s",marginBottom:1 }}>
                <span># {ch.name}</span>
                {ch.unread>0 && <span style={{ background:"#8B5CF6",color:"white",borderRadius:"50%",width:13,height:13,display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,fontWeight:700 }}>{ch.unread}</span>}
              </button>
            ))}
            <div style={{ marginTop:"auto",padding:"7px 5px 0",borderTop:"1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ display:"flex",alignItems:"center",gap:5 }}>
                <div style={{ width:20,height:20,borderRadius:"50%",background:"#00ff88",display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,fontWeight:700,color:"#080810",flexShrink:0 }}>{youAvatar}</div>
                <div>
                  <div style={{ fontSize:8,color:"rgba(255,255,255,0.65)",lineHeight:1 }}>{youName}</div>
                  <div style={{ fontSize:7,color:"#00ff88" }}>● {isEn?"active":"activo"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat */}
          <div className="ic-chat" style={{ display:"flex",flexDirection:"column",height:400 }}>
            <div style={{ padding:"9px 12px",borderBottom:"1px solid rgba(255,255,255,0.04)",display:"flex",alignItems:"center",gap:5 }}>
              <span style={{ color:"rgba(255,255,255,0.3)",fontSize:12 }}>#</span>
              <span style={{ fontSize:11,color:"rgba(255,255,255,0.7)",fontWeight:600 }}>{chName}</span>
            </div>
            <div style={{ flex:1,overflowY:"auto",padding:"10px 12px",display:"flex",flexDirection:"column",gap:7 }}>
              {msgs.map((m,i) => (
                <div key={i} style={{ display:"flex",alignItems:"flex-start",gap:6,flexDirection:m.self?"row-reverse":"row" }}>
                  <div style={{ width:22,height:22,borderRadius:"50%",background:m.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,fontWeight:700,color:"#080810",flexShrink:0 }}>{m.avatar}</div>
                  <div style={{ maxWidth:"72%",display:"flex",flexDirection:"column",alignItems:m.self?"flex-end":"flex-start" }}>
                    <div style={{ fontSize:7,color:"rgba(255,255,255,0.25)",marginBottom:1 }}>{m.self?"":`${m.user} · `}{m.time}</div>
                    <div style={{ background:m.self?"rgba(108,99,255,0.18)":"rgba(255,255,255,0.05)",border:`1px solid ${m.self?"rgba(108,99,255,0.3)":"rgba(255,255,255,0.06)"}`,borderRadius:m.self?"9px 9px 2px 9px":"9px 9px 9px 2px",padding:"6px 9px",fontSize:11,color:"rgba(255,255,255,0.8)",lineHeight:1.5 }}>
                      {m.text}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            <div style={{ padding:"8px 10px",borderTop:"1px solid rgba(255,255,255,0.04)",display:"flex",gap:5 }}>
              <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()}
                placeholder={isEn?`Message #${chName}...`:`Mensaje en #${chName}...`}
                style={{ flex:1,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:6,padding:"6px 9px",fontSize:10,color:"rgba(255,255,255,0.7)",outline:"none",fontFamily:"'DM Mono',monospace" }}
              />
              <button onClick={send} style={{ background:"rgba(108,99,255,0.25)",border:"1px solid rgba(108,99,255,0.35)",borderRadius:6,padding:"0 9px",color:"#8B5CF6",cursor:"pointer",fontSize:13 }}>↑</button>
            </div>
          </div>

          {/* Users panel */}
          <div className="ic-users">
            <div style={{ fontSize:7,color:"rgba(255,255,255,0.2)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:9 }}>
              {isEn?"Team":"Equipo"} ({users.filter(u=>u.online).length})
            </div>
            {users.map((u,i) => (
              <div key={i} style={{ display:"flex",alignItems:"center",gap:6,marginBottom:8 }}>
                <div style={{ position:"relative" }}>
                  <div style={{ width:22,height:22,borderRadius:"50%",background:u.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,fontWeight:700,color:"#080810" }}>{u.avatar}</div>
                  <div style={{ position:"absolute",bottom:0,right:0,width:6,height:6,borderRadius:"50%",background:u.online?"#00ff88":"#444",border:"1.5px solid #080812" }} />
                </div>
                <div>
                  <div style={{ fontSize:8,color:u.online?"rgba(255,255,255,0.65)":"rgba(255,255,255,0.25)",lineHeight:1 }}>{u.name}</div>
                  <div style={{ fontSize:7,color:"rgba(255,255,255,0.2)" }}>{u.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}