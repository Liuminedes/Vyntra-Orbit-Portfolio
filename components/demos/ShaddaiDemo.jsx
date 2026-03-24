"use client";
import { useState } from "react";

const DAYS = ["L","M","X","J","V","S","D"];
const CAL = [
  [null,null,null,null,null,1,2],
  [3,4,5,6,7,8,9],
  [10,11,12,13,14,15,16],
  [17,18,19,20,21,22,23],
  [24,25,26,27,28,29,30],
];
const TODAY = 5;

export default function ShaddaiDemo({ lang = "es" }) {
  const isEn = lang === "en";
  const [activeModule, setActiveModule] = useState("dashboard");
  const [selectedDay, setSelectedDay] = useState(TODAY);

  const modules = [
    { id:"dashboard", icon:"⬡", label:"Dashboard"                          },
    { id:"mascotas",  icon:"🐾", label:isEn?"Pets":"Mascotas"              },
    { id:"calendar",  icon:"📅", label:isEn?"Calendar":"Calendario"        },
    { id:"grooming",  icon:"✂️", label:isEn?"Grooming":"Peluquería"        },
    { id:"hotel",     icon:"🏠", label:"Hotel"                              },
    { id:"inventory", icon:"📦", label:isEn?"Inventory":"Inventario"       },
    { id:"billing",   icon:"💰", label:isEn?"Billing":"Facturación"        },
  ];

  const dogs = [
    { name:"Max",   breed:"Golden",    avatar:"🐕", status:isEn?"Bathing":"En baño",   color:"#C8963E" },
    { name:"Luna",  breed:"Poodle",    avatar:"🐩", status:isEn?"Waiting":"En espera", color:"#8B7355" },
    { name:"Rocky", breed:"Bulldog",   avatar:"🐕", status:isEn?"Done":"Listo",        color:"#4A6741" },
    { name:"Coco",  breed:"Chihuahua", avatar:"🐶", status:isEn?"Boarding":"Guardería",color:"#6B5B95" },
  ];

  return (
    <>
      <style>{`
        .sh-wrap { display:grid; grid-template-columns:170px 1fr; min-height:420px; }
        .sh-sb   { display:flex; flex-direction:column; }
        .sh-cal-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
        @media(max-width:700px){
          .sh-wrap     { grid-template-columns:1fr !important; }
          .sh-sb       { display:none !important; }
          .sh-cal-grid { grid-template-columns:1fr !important; }
        }
      `}</style>
      <div style={{ background:"#F5F0E8",borderRadius:12,overflow:"hidden",border:"1px solid rgba(139,107,64,0.2)",fontFamily:"'DM Mono',monospace" }}>
        <div style={{ background:"#EDE8DE",padding:"9px 14px",display:"flex",alignItems:"center",gap:8,borderBottom:"1px solid rgba(139,107,64,0.15)" }}>
          {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width:9,height:9,borderRadius:"50%",background:c }} />)}
          <div style={{ flex:1,background:"rgba(44,26,14,0.06)",borderRadius:5,padding:"3px 10px",fontSize:9,color:"rgba(44,26,14,0.4)",marginLeft:8 }}>app.shaddaicanino.com</div>
        </div>

        <div className="sh-wrap">
          <div className="sh-sb" style={{ background:"#1C1208",borderRight:"1px solid rgba(139,107,64,0.15)",padding:"12px 8px",gap:2 }}>
            <div style={{ display:"flex",alignItems:"center",gap:7,padding:"4px 8px",marginBottom:8 }}>
              <div style={{ width:26,height:26,borderRadius:"50%",background:"rgba(200,150,62,0.2)",border:"1px solid rgba(200,150,62,0.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13 }}>🐾</div>
              <div>
                <div style={{ fontSize:11,fontWeight:700,color:"#F5F0E8" }}>Shaddai</div>
                <div style={{ fontSize:7,color:"rgba(245,240,232,0.3)",letterSpacing:"0.1em" }}>SPA CANINO</div>
              </div>
            </div>
            {modules.map(m => (
              <button key={m.id} onClick={() => setActiveModule(m.id)}
                style={{ display:"flex",alignItems:"center",gap:7,padding:"7px 10px",borderRadius:6,border:"none",background:activeModule===m.id?"rgba(200,150,62,0.18)":"transparent",color:activeModule===m.id?"#C8963E":"rgba(245,240,232,0.35)",fontSize:11,cursor:"pointer",textAlign:"left",fontFamily:"'DM Mono',monospace",transition:"all .15s",borderLeft:activeModule===m.id?"2px solid #C8963E":"2px solid transparent" }}>
                <span style={{ fontSize:12 }}>{m.icon}</span>{m.label}
              </button>
            ))}
          </div>

          <div style={{ overflowY:"auto",maxHeight:420 }}>
            <div style={{ padding:"11px 14px",borderBottom:"1px solid rgba(139,107,64,0.1)",display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(255,255,255,0.4)" }}>
              <div>
                <div style={{ fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700,color:"#2C1A0E" }}>{modules.find(m=>m.id===activeModule)?.label}</div>
                <div style={{ fontSize:8,color:"rgba(44,26,14,0.4)",marginTop:1 }}>MARZO 2025</div>
              </div>
              <div style={{ background:"rgba(74,103,65,0.12)",color:"#4A6741",padding:"3px 9px",borderRadius:100,fontSize:8,border:"1px solid rgba(74,103,65,0.2)",display:"flex",alignItems:"center",gap:3 }}>
                <div style={{ width:4,height:4,borderRadius:"50%",background:"#4A6741" }} />
                {isEn?"Open":"Abierto"}
              </div>
            </div>

            <div style={{ padding:"12px 14px",display:"flex",flexDirection:"column",gap:12 }}>
              {/* KPIs */}
              <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8 }}>
                {[
                  { l:isEn?"Dogs":"Canes",   v:"12",    sub:"+3 vs ayer", c:"#C8963E" },
                  { l:isEn?"In bath":"Baño", v:"3",     sub:isEn?"active":"activos", c:"#6B5B95" },
                  { l:isEn?"Revenue":"Caja", v:"$840k", sub:"COP", c:"#4A6741" },
                ].map((k,i) => (
                  <div key={i} style={{ background:`${k.c}10`,border:`1px solid ${k.c}25`,borderRadius:7,padding:"9px 10px" }}>
                    <div style={{ fontSize:7,color:"rgba(44,26,14,0.4)",marginBottom:3,textTransform:"uppercase",letterSpacing:"0.07em" }}>{k.l}</div>
                    <div style={{ fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:900,color:k.c,lineHeight:1 }}>{k.v}</div>
                    <div style={{ fontSize:7,color:"rgba(44,26,14,0.35)",marginTop:2 }}>{k.sub}</div>
                  </div>
                ))}
              </div>

              {/* Calendar + dogs */}
              <div className="sh-cal-grid">
                <div style={{ background:"rgba(255,255,255,0.5)",border:"1px solid rgba(139,107,64,0.12)",borderRadius:7,padding:"10px" }}>
                  <div style={{ fontSize:8,color:"rgba(44,26,14,0.35)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:7 }}>MARZO 2025</div>
                  <div style={{ display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:1,marginBottom:4 }}>
                    {DAYS.map(d => <div key={d} style={{ textAlign:"center",fontSize:7,color:"rgba(44,26,14,0.3)",fontWeight:600 }}>{d}</div>)}
                  </div>
                  {CAL.map((week,wi) => (
                    <div key={wi} style={{ display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:1,marginBottom:1 }}>
                      {week.map((day,di) => (
                        <div key={di} onClick={() => day && setSelectedDay(day)}
                          style={{ textAlign:"center",fontSize:8,padding:"3px 1px",borderRadius:4,cursor:day?"pointer":"default",background:day===selectedDay?"#C8963E":day===TODAY?"rgba(200,150,62,0.15)":"transparent",color:day===selectedDay?"white":day===TODAY?"#C8963E":"rgba(44,26,14,0.5)",fontWeight:day===selectedDay||day===TODAY?700:400 }}>
                          {day||""}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div style={{ display:"flex",flexDirection:"column",gap:5 }}>
                  <div style={{ fontSize:7,color:"rgba(44,26,14,0.35)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:2 }}>{isEn?"Today's dogs":"Canes de hoy"}</div>
                  {dogs.map((d,i) => (
                    <div key={i} style={{ background:"rgba(255,255,255,0.5)",border:"1px solid rgba(139,107,64,0.1)",borderRadius:7,padding:"7px 9px",display:"flex",alignItems:"center",gap:7 }}>
                      <div style={{ width:24,height:24,borderRadius:"50%",background:`${d.color}15`,border:`1px solid ${d.color}25`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,flexShrink:0 }}>{d.avatar}</div>
                      <div style={{ flex:1,minWidth:0 }}>
                        <div style={{ fontSize:10,color:"#2C1A0E",fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>{d.name} <span style={{ fontSize:8,fontWeight:400,color:"rgba(44,26,14,0.4)" }}>{d.breed}</span></div>
                      </div>
                      <div style={{ fontSize:7,padding:"2px 6px",borderRadius:100,background:`${d.color}12`,color:d.color,border:`1px solid ${d.color}25`,whiteSpace:"nowrap",flexShrink:0 }}>{d.status}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Check-in */}
              <div style={{ background:"rgba(255,255,255,0.7)",border:"1px solid rgba(139,107,64,0.15)",borderRadius:7,padding:"9px 12px",display:"flex",alignItems:"center",gap:9 }}>
                <div style={{ width:26,height:26,borderRadius:"50%",background:"rgba(74,103,65,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                  <span style={{ fontSize:12,color:"#4A6741" }}>✓</span>
                </div>
                <div>
                  <div style={{ fontSize:10,color:"#2C1A0E",fontWeight:600 }}>{isEn?"Rocky arrived at the spa":"Rocky llegó al spa"}</div>
                  <div style={{ fontSize:8,color:"rgba(44,26,14,0.4)" }}>Check-in · {isEn?"2 min ago":"hace 2 min"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}