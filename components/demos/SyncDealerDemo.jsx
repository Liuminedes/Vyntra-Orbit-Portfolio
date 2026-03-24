"use client";
import { useState } from "react";

const BAR_DATA = [
  { name:"Sebastian E.", val:"$6.0M", color:"#61DAFB", pct:100 },
  { name:"Juan Perez",   val:"$1.7M", color:"#68D391", pct:28  },
  { name:"David Soto",   val:"$1.5M", color:"#F6AD55", pct:25  },
  { name:"Leon S.",      val:"$546K", color:"#FC8181", pct:9   },
  { name:"Jane Doe",     val:"$410K", color:"#B794F4", pct:7   },
];

export default function SyncDealerDemo({ lang = "es" }) {
  const isEn = lang === "en";
  const [tab, setTab] = useState("dashboard");
  const T = {
    topAdv:  isEn ? "TOP ADVISORS — MAR 2026"    : "TOP ASESORES — MAR 2026",
    noComm:  isEn ? "NO COMMISSION PENDING"       : "SIN COMISIÓN PENDIENTE",
    allOk:   isEn ? "All advisors calculated ✓"  : "Todos los asesores calculados ✓",
    topVeh:  isEn ? "TOP VEHICLES"                : "TOP VEHÍCULOS",
    calcBtn: isEn ? "+ Calculate"                 : "+ Calcular",
    advisor: isEn ? "ADVISOR"  : "ASESOR",
    period:  isEn ? "PERIOD"   : "PERÍODO",
    units:   isEn ? "UNITS"    : "UNID.",
    calc:    isEn ? "Calc."    : "Calc.",
    byAdv:   isEn ? "SALES BY ADVISOR" : "VENTAS POR ASESOR",
  };

  const runs = [
    { advisor:"Sebastian E.", period:"Mar 2026", units:6, total:"$6.0M" },
    { advisor:"Leon S.",      period:"Mar 2026", units:1, total:"$546K" },
    { advisor:"Jane Doe",     period:"Mar 2026", units:1, total:"$410K" },
    { advisor:"Juan Perez",   period:"Mar 2026", units:2, total:"$1.7M" },
    { advisor:"David Soto",   period:"Mar 2026", units:1, total:"$1.5M" },
  ];

  const vehicles = [
    { rank:1, name:"TASMAN DESIRE",     detail:"2 · $3.5M", trophy:true  },
    { rank:2, name:"TASMAN VIBRANT",    detail:"3 · $3.3M", trophy:false },
    { rank:3, name:"STONIC VIBRANT MT", detail:"4 · $1.9M", trophy:false },
    { rank:4, name:"SONET (QY) VIBRANT",detail:"2 · $870K", trophy:false },
  ];

  const navSections = [
    { title:"INICIO", items:[{ icon:"⬡", label:"Dashboard", key:"dashboard" }] },
    { title:isEn?"OPERATION":"OPERACIÓN", items:[
      { icon:"◈", label:isEn?"Sales":"Ventas",       key:"commissions" },
      { icon:"🚗",label:isEn?"Vehicles":"Vehículos", key:"vehicles"    },
    ]},
    { title:isEn?"COMMISSIONS":"COMISIONES", items:[
      { icon:"◉", label:isEn?"Calculate":"Calcular",    key:"" },
      { icon:"⚙", label:isEn?"Parameters":"Parámetros", key:"" },
    ]},
    { title:isEn?"ADMIN":"ADMINISTRACIÓN", items:[
      { icon:"👤",label:isEn?"Users":"Usuarios",key:"" },
      { icon:"🏷",label:isEn?"Brands":"Marcas", key:"" },
    ]},
  ];

  return (
    <>
      <style>{`
        .sd-wrap { display:grid; grid-template-columns:170px 1fr; min-height:400px; }
        .sd-sb   { display:flex; flex-direction:column; }
        @media(max-width:700px){
          .sd-wrap { grid-template-columns:1fr !important; }
          .sd-sb   { display:none !important; }
          .sd-topbar-tabs button { font-size:9px !important; padding:3px 7px !important; }
        }
      `}</style>
      <div style={{ background:"#13131f",borderRadius:12,overflow:"hidden",border:"1px solid rgba(255,255,255,0.07)",fontFamily:"'DM Mono',monospace" }}>
        {/* Top bar */}
        <div style={{ background:"#0c0c18",padding:"10px 14px",display:"flex",alignItems:"center",gap:10,borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ width:28,height:28,borderRadius:"50%",background:"linear-gradient(135deg,#61DAFB,#68D391)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"#0c0c18",flexShrink:0 }}>SD</div>
          <div style={{ flex:1 }}><div style={{ fontSize:12,fontWeight:700,color:"white" }}>Sync Dealer</div><div style={{ fontSize:8,color:"rgba(255,255,255,0.3)" }}>Almotores</div></div>
          <div className="sd-topbar-tabs" style={{ display:"flex",gap:4 }}>
            {[["dashboard","Dashboard"],["commissions",isEn?"Comisiones":"Comisiones"],["vehicles",isEn?"Vehículos":"Vehículos"]].map(([k,l]) => (
              <button key={k} onClick={() => setTab(k)} style={{ padding:"4px 9px",borderRadius:5,border:"none",background:tab===k?"rgba(104,211,145,0.15)":"transparent",color:tab===k?"#68D391":"rgba(255,255,255,0.3)",fontSize:10,cursor:"pointer",fontFamily:"'DM Mono',monospace",transition:"all .15s",whiteSpace:"nowrap" }}>{l}</button>
            ))}
          </div>
        </div>

        <div className="sd-wrap">
          {/* Sidebar */}
          <div className="sd-sb" style={{ background:"#0c0c18",borderRight:"1px solid rgba(255,255,255,0.04)",padding:"12px 8px",overflowY:"auto" }}>
            {navSections.map(section => (
              <div key={section.title}>
                <div style={{ fontSize:7,color:"rgba(255,255,255,0.2)",textTransform:"uppercase",letterSpacing:"0.12em",margin:"8px 0 3px 8px" }}>{section.title}</div>
                {section.items.map((item,i) => (
                  <div key={i} onClick={() => item.key && setTab(item.key)}
                    style={{ padding:"7px 10px",borderRadius:6,background:tab===item.key&&item.key?"rgba(104,211,145,0.1)":"transparent",border:tab===item.key&&item.key?"1px solid rgba(104,211,145,0.15)":"1px solid transparent",color:tab===item.key&&item.key?"#68D391":"rgba(255,255,255,0.35)",fontSize:11,marginBottom:1,display:"flex",alignItems:"center",gap:6,cursor:"pointer",transition:"all .15s" }}>
                    <span style={{ fontSize:11 }}>{item.icon}</span>{item.label}
                  </div>
                ))}
              </div>
            ))}
            <div style={{ marginTop:"auto",padding:"6px 8px",background:"rgba(255,255,255,0.03)",borderRadius:5,marginTop:12 }}>
              <div style={{ fontSize:7,color:"rgba(255,255,255,0.2)" }}>Beta v1.0</div>
            </div>
          </div>

          {/* Content */}
          <div style={{ overflowY:"auto",maxHeight:400,padding:14 }}>
            {tab === "dashboard" && (
              <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                <div style={{ fontFamily:"'Syne',sans-serif",fontSize:15,fontWeight:700,color:"white" }}>Dashboard</div>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:8 }}>
                  <div style={{ background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:7,padding:"10px 12px" }}>
                    <div style={{ fontSize:7,color:"rgba(255,255,255,0.3)",letterSpacing:"0.1em",marginBottom:8 }}>{T.topAdv}</div>
                    {BAR_DATA.map((d,i) => (
                      <div key={i} style={{ marginBottom:6 }}>
                        <div style={{ display:"flex",justifyContent:"space-between",marginBottom:2 }}>
                          <span style={{ fontSize:8,color:"rgba(255,255,255,0.5)" }}>{d.name}</span>
                          <span style={{ fontSize:8,color:d.color,fontWeight:600 }}>{d.val}</span>
                        </div>
                        <div style={{ height:3,background:"rgba(255,255,255,0.06)",borderRadius:2,overflow:"hidden" }}>
                          <div style={{ height:"100%",width:`${d.pct}%`,background:d.color,borderRadius:2 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:7,padding:"10px 12px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6 }}>
                    <div style={{ fontSize:7,color:"rgba(255,255,255,0.3)",textAlign:"center",letterSpacing:"0.08em" }}>▲ {T.noComm}</div>
                    <div style={{ width:30,height:30,borderRadius:"50%",border:"2px solid #68D391",display:"flex",alignItems:"center",justifyContent:"center" }}>
                      <span style={{ fontSize:14,color:"#68D391" }}>✓</span>
                    </div>
                    <div style={{ fontSize:8,color:"#68D391",textAlign:"center",lineHeight:1.4 }}>{T.allOk}</div>
                  </div>
                </div>
                <div style={{ background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:7,padding:"10px 12px" }}>
                  <div style={{ fontSize:7,color:"rgba(255,255,255,0.3)",letterSpacing:"0.1em",marginBottom:7 }}>🏆 {T.topVeh}</div>
                  {vehicles.map((v,i) => (
                    <div key={i} style={{ display:"flex",alignItems:"center",gap:8,padding:"6px 8px",background:"rgba(255,255,255,0.02)",borderRadius:5,marginBottom:3 }}>
                      <div style={{ width:20,height:20,borderRadius:4,background:v.trophy?"rgba(246,173,85,0.15)":"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:v.trophy?"#F6AD55":"rgba(255,255,255,0.25)",fontWeight:700,flexShrink:0 }}>{v.rank}</div>
                      <div style={{ flex:1 }}>
                        <div style={{ fontSize:10,color:"rgba(255,255,255,0.75)",fontWeight:600 }}>{v.name}</div>
                        <div style={{ fontSize:8,color:"rgba(255,255,255,0.28)" }}>{v.detail}</div>
                      </div>
                      {v.trophy && <span style={{ fontSize:12 }}>🏆</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "commissions" && (
              <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                  <div style={{ fontFamily:"'Syne',sans-serif",fontSize:14,fontWeight:700,color:"white" }}>{isEn?"Commissions":"Comisiones"}</div>
                  <button style={{ padding:"5px 10px",background:"linear-gradient(135deg,#68D391,#48BB78)",border:"none",borderRadius:5,color:"#0c0c18",fontSize:9,fontWeight:700,cursor:"pointer",fontFamily:"'DM Mono',monospace" }}>{T.calcBtn}</button>
                </div>
                <div style={{ background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:7,overflow:"hidden" }}>
                  <div style={{ display:"grid",gridTemplateColumns:"1.8fr 1.2fr 45px 55px 70px",gap:4,padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.05)",background:"rgba(255,255,255,0.02)" }}>
                    {[T.advisor,T.period,T.units,"TOTAL","STATUS"].map(h => (
                      <div key={h} style={{ fontSize:7,color:"rgba(255,255,255,0.22)",textTransform:"uppercase",letterSpacing:"0.06em" }}>{h}</div>
                    ))}
                  </div>
                  {runs.map((r,i) => (
                    <div key={i} style={{ display:"grid",gridTemplateColumns:"1.8fr 1.2fr 45px 55px 70px",gap:4,padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.03)",alignItems:"center" }}>
                      <div style={{ fontSize:10,color:"rgba(255,255,255,0.8)",fontWeight:500 }}>{r.advisor}</div>
                      <div style={{ fontSize:8,color:"rgba(255,255,255,0.4)" }}>{r.period}</div>
                      <div style={{ fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.7)",textAlign:"center" }}>{r.units}</div>
                      <div style={{ fontSize:10,fontWeight:700,color:"#68D391" }}>{r.total}</div>
                      <div style={{ fontSize:7,background:"rgba(104,211,145,0.1)",color:"#68D391",border:"1px solid rgba(104,211,145,0.2)",padding:"2px 5px",borderRadius:100,textAlign:"center" }}>{T.calc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "vehicles" && (
              <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                <div style={{ fontFamily:"'Syne',sans-serif",fontSize:14,fontWeight:700,color:"white" }}>{isEn?"Vehicles":"Vehículos"}</div>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:7 }}>
                  {[
                    { l:isEn?"Units sold":"Vendidas", v:"11",    c:"#61DAFB" },
                    { l:isEn?"Advisors":"Asesores",   v:"5",     c:"#68D391" },
                    { l:isEn?"Models":"Modelos",       v:"4",     c:"#F6AD55" },
                    { l:isEn?"Est. value":"Valor est.",v:"$1.6M", c:"#FC8181" },
                  ].map((k,i) => (
                    <div key={i} style={{ background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:7,padding:"9px 10px" }}>
                      <div style={{ fontSize:8,color:"rgba(255,255,255,0.3)",marginBottom:2 }}>{k.l}</div>
                      <div style={{ fontFamily:"'Syne',sans-serif",fontSize:18,fontWeight:800,color:k.c }}>{k.v}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:7,padding:"10px 12px" }}>
                  <div style={{ fontSize:7,color:"rgba(255,255,255,0.3)",letterSpacing:"0.1em",marginBottom:8 }}>{T.byAdv}</div>
                  {[
                    { name:"Sebastian E.",u:6,val:"$942M",color:"#61DAFB",pct:100 },
                    { name:"Juan Perez",  u:2,val:"$328M",color:"#68D391",pct:33  },
                    { name:"Jane Doe",    u:1,val:"$92M", color:"#F6AD55",pct:17  },
                    { name:"Leon S.",     u:1,val:"$92M", color:"#FC8181",pct:17  },
                    { name:"David Soto",  u:1,val:"$192M",color:"#B794F4",pct:17  },
                  ].map((d,i) => (
                    <div key={i} style={{ marginBottom:6 }}>
                      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2 }}>
                        <div style={{ fontSize:8,color:"rgba(255,255,255,0.5)" }}>{d.name} <span style={{ color:"rgba(255,255,255,0.25)" }}>{d.u}u</span></div>
                        <span style={{ fontSize:8,color:d.color,fontWeight:600 }}>{d.val}</span>
                      </div>
                      <div style={{ height:3,background:"rgba(255,255,255,0.06)",borderRadius:2,overflow:"hidden" }}>
                        <div style={{ height:"100%",width:`${d.pct}%`,background:d.color,borderRadius:2 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}