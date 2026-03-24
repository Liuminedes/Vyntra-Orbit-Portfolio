"use client";
import { useState } from "react";

export default function DentalSaaSDemo({ lang = "es" }) {
  const isEn = lang === "en";
  const [tab, setTab] = useState("dashboard");

  const agenda = [
    { name:"Juan H.",   proc:isEn?"Orthodontics — review":"Ortodoncia — revisión", time:"8:30 am",  dr:"Dr. Vásquez",  ok:true  },
    { name:"María L.",  proc:isEn?"Teeth whitening":"Blanqueamiento",               time:"9:30 am",  dr:"Dra. Morales", ok:true  },
    { name:"Roberto S.",proc:isEn?"Molar extraction":"Extracción molar",            time:"11:00 am", dr:"Dr. Vásquez",  ok:false },
    { name:"Claudia M.",proc:isEn?"Cleaning + fluoride":"Limpieza + fluorización",  time:"2:00 pm",  dr:"Dra. Morales", ok:true  },
  ];

  const patients = [
    { name:"Juan Hernández", age:`34 ${isEn?"yrs":"a"}`,id:"PAC-001",treat:isEn?"Orthodontics":"Ortodoncia",  stage:isEn?"Phase 2":"Fase 2",  color:"#7C6FFF",sess:8  },
    { name:"María López",    age:`28 ${isEn?"yrs":"a"}`,id:"PAC-002",treat:isEn?"Whitening":"Blanqueamiento", stage:isEn?"Active":"Activo",   color:"#5EC4B0",sess:2  },
    { name:"Roberto Silva",  age:`52 ${isEn?"yrs":"a"}`,id:"PAC-003",treat:isEn?"Oral surgery":"Cir. oral",   stage:isEn?"Pre-op":"Preop.",   color:"#FFA03C",sess:3  },
    { name:"Claudia Mesa",   age:`41 ${isEn?"yrs":"a"}`,id:"PAC-004",treat:isEn?"Maintenance":"Mantenim.",    stage:isEn?"Control":"Control", color:"#3B9EDB",sess:12 },
  ];

  const invoices = [
    { num:"FAC-0041",patient:"Juan H.",   proc:isEn?"Monthly ortho":"Ortodoncia mensual",  val:"$380.000",ok:true  },
    { num:"FAC-0042",patient:"María L.",  proc:isEn?"Whitening":"Blanqueamiento",           val:"$850.000",ok:true  },
    { num:"FAC-0043",patient:"Roberto S.",proc:isEn?"Consult + X-Ray":"Consulta + Rx",      val:"$180.000",ok:false },
    { num:"FAC-0044",patient:"Claudia M.",proc:isEn?"Prof. cleaning":"Limpieza prof.",       val:"$120.000",ok:true  },
  ];

  return (
    <div style={{ background:"#EEF4FB",borderRadius:12,overflow:"hidden",border:"1px solid rgba(59,158,219,0.2)",fontFamily:"'DM Mono',monospace" }}>
      <div style={{ background:"#E2EEF8",padding:"9px 14px",display:"flex",alignItems:"center",gap:8,borderBottom:"1px solid rgba(59,158,219,0.15)" }}>
        {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width:9,height:9,borderRadius:"50%",background:c }} />)}
        <div style={{ flex:1,background:"rgba(59,158,219,0.08)",borderRadius:5,padding:"3px 10px",fontSize:9,color:"rgba(20,30,48,0.4)",marginLeft:8 }}>app.dentalsaas.cloud</div>
        <span style={{ fontSize:11 }}>🦷</span>
      </div>

      <div style={{ display:"grid",gridTemplateColumns:"168px 1fr",minHeight:400 }}>
        <div style={{ background:"#141E30",padding:"14px 10px" }}>
          <div style={{ display:"flex",alignItems:"center",gap:8,padding:"4px 8px",marginBottom:12 }}>
            <span style={{ fontSize:18 }}>🦷</span>
            <div>
              <div style={{ fontSize:11,fontWeight:700,color:"#EEF4FB" }}>DentalSaaS</div>
              <div style={{ fontSize:8,color:"rgba(238,244,251,0.3)" }}>Cloud Platform</div>
            </div>
          </div>
          {[
            { id:"dashboard",icon:"⬡",label:"Dashboard"                  },
            { id:"patients", icon:"👤",label:isEn?"Patients":"Pacientes"  },
            { id:"billing",  icon:"📋",label:isEn?"Billing":"Facturación" },
          ].map(item => (
            <button key={item.id} onClick={() => setTab(item.id)}
              style={{ width:"100%",display:"flex",alignItems:"center",gap:8,padding:"9px 10px",borderRadius:7,border:"none",background:tab===item.id?"rgba(59,158,219,0.15)":"transparent",color:tab===item.id?"#3B9EDB":"rgba(238,244,251,0.35)",fontSize:11,cursor:"pointer",marginBottom:2,textAlign:"left",fontFamily:"'DM Mono',monospace",transition:"all .15s",borderLeft:tab===item.id?"2px solid #3B9EDB":"2px solid transparent" }}>
              <span style={{ fontSize:12 }}>{item.icon}</span>{item.label}
            </button>
          ))}
          <div style={{ marginTop:14,paddingTop:10,borderTop:"1px solid rgba(238,244,251,0.06)" }}>
            <div style={{ fontSize:8,color:"rgba(238,244,251,0.2)",marginBottom:6 }}>{isEn?"Doctors":"Doctores"}</div>
            {["Dr. Vásquez","Dra. Morales","Dr. Pineda"].map(d => (
              <div key={d} style={{ fontSize:9,color:"rgba(238,244,251,0.3)",padding:"4px 0",display:"flex",alignItems:"center",gap:6 }}>
                <div style={{ width:4,height:4,borderRadius:"50%",background:"rgba(59,158,219,0.5)" }} />{d}
              </div>
            ))}
          </div>
        </div>

        <div style={{ overflowY:"auto",maxHeight:400 }}>
          <div style={{ padding:"12px 16px",borderBottom:"1px solid rgba(59,158,219,0.1)",display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(255,255,255,0.4)" }}>
            <div style={{ fontFamily:"'Syne',sans-serif",fontSize:15,fontWeight:700,color:"#141E30" }}>
              {tab==="dashboard"?"Dashboard":tab==="patients"?(isEn?"Patients":"Pacientes"):(isEn?"Billing":"Facturación")}
            </div>
            <div style={{ background:"rgba(94,196,176,0.12)",color:"#5EC4B0",padding:"3px 10px",borderRadius:100,fontSize:9,border:"1px solid rgba(94,196,176,0.2)" }}>
              {isEn?"● Clinic open":"● Consultorio abierto"}
            </div>
          </div>

          <div style={{ padding:"14px 16px",display:"flex",flexDirection:"column",gap:12 }}>
            {tab === "dashboard" && (
              <>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10 }}>
                  {[
                    { l:isEn?"Patients":"Pacientes",v:"124",c:"#3B9EDB" },
                    { l:isEn?"Today":"Hoy",         v:"9",   c:"#5EC4B0" },
                    { l:isEn?"Billing":"Factur.",    v:"$8.4M",c:"#7C6FFF" },
                  ].map((k,i) => (
                    <div key={i} style={{ background:`${k.c}0D`,border:`1px solid ${k.c}22`,borderRadius:8,padding:"10px 12px" }}>
                      <div style={{ fontSize:8,color:"rgba(20,30,48,0.4)",marginBottom:3 }}>{k.l}</div>
                      <div style={{ fontFamily:"'Syne',sans-serif",fontSize:20,fontWeight:800,color:k.c }}>{k.v}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background:"rgba(59,158,219,0.04)",border:"1px solid rgba(59,158,219,0.12)",borderRadius:8,overflow:"hidden" }}>
                  <div style={{ padding:"9px 12px",borderBottom:"1px solid rgba(59,158,219,0.08)",fontSize:8,color:"rgba(20,30,48,0.4)",textTransform:"uppercase",letterSpacing:"0.1em" }}>{isEn?"Today's agenda":"Agenda de hoy"}</div>
                  {agenda.map((a,i) => (
                    <div key={i} style={{ padding:"9px 12px",borderBottom:"1px solid rgba(59,158,219,0.06)",display:"flex",alignItems:"center",justifyContent:"space-between" }}>
                      <div style={{ display:"flex",alignItems:"center",gap:8 }}>
                        <div style={{ width:26,height:26,borderRadius:"50%",background:"rgba(59,158,219,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11 }}>🦷</div>
                        <div>
                          <div style={{ fontSize:11,color:"#141E30",fontWeight:600 }}>{a.name}</div>
                          <div style={{ fontSize:9,color:"rgba(20,30,48,0.4)",marginTop:1 }}>{a.proc} · {a.dr}</div>
                        </div>
                      </div>
                      <div style={{ textAlign:"right" }}>
                        <div style={{ fontSize:10,fontWeight:700,color:"#3B9EDB" }}>{a.time}</div>
                        <div style={{ fontSize:8,marginTop:2,padding:"1px 7px",borderRadius:100,background:a.ok?"rgba(94,196,176,0.12)":"rgba(255,160,60,0.12)",color:a.ok?"#5EC4B0":"#FFA03C" }}>
                          {a.ok?(isEn?"Confirmed":"Confirmado"):(isEn?"Pending":"Pendiente")}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {tab === "patients" && (
              <>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                  <div style={{ fontFamily:"'Syne',sans-serif",fontSize:13,fontWeight:700,color:"#141E30" }}>{isEn?"Clinical records":"Historial clínico"}</div>
                  <button style={{ background:"#3B9EDB",color:"white",border:"none",padding:"6px 12px",borderRadius:100,fontSize:9,cursor:"pointer",fontFamily:"'DM Mono',monospace" }}>+ {isEn?"New":"Nuevo"}</button>
                </div>
                {patients.map((p,i) => (
                  <div key={i} style={{ background:`${p.color}08`,border:`1px solid ${p.color}1A`,borderRadius:8,padding:"10px 12px",display:"flex",alignItems:"center",justifyContent:"space-between" }}>
                    <div style={{ display:"flex",alignItems:"center",gap:10 }}>
                      <div style={{ width:32,height:32,borderRadius:"50%",background:`${p.color}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:p.color }}>
                        {p.name.split(" ").map(n=>n[0]).join("")}
                      </div>
                      <div>
                        <div style={{ fontSize:11,color:"#141E30",fontWeight:700 }}>{p.name} <span style={{ fontSize:9,color:"rgba(20,30,48,0.4)",fontWeight:400 }}>{p.age} · {p.id}</span></div>
                        <div style={{ fontSize:9,color:"rgba(20,30,48,0.45)",marginTop:1 }}>{p.treat} · {p.sess} {isEn?"sess.":"ses."}</div>
                      </div>
                    </div>
                    <div style={{ fontSize:8,padding:"2px 9px",borderRadius:100,background:`${p.color}15`,color:p.color,border:`1px solid ${p.color}30` }}>{p.stage}</div>
                  </div>
                ))}
              </>
            )}
            {tab === "billing" && (
              <>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10 }}>
                  <div style={{ background:"rgba(59,158,219,0.06)",border:"1px solid rgba(59,158,219,0.15)",borderRadius:8,padding:"12px" }}>
                    <div style={{ fontSize:9,color:"rgba(20,30,48,0.4)",marginBottom:3 }}>{isEn?"Total billed":"Total facturado"}</div>
                    <div style={{ fontFamily:"'Syne',sans-serif",fontSize:20,fontWeight:800,color:"#3B9EDB" }}>$8.400.000</div>
                  </div>
                  <div style={{ background:"rgba(94,196,176,0.06)",border:"1px solid rgba(94,196,176,0.15)",borderRadius:8,padding:"12px" }}>
                    <div style={{ fontSize:9,color:"rgba(20,30,48,0.4)",marginBottom:3 }}>{isEn?"Pending":"Pendiente cobro"}</div>
                    <div style={{ fontFamily:"'Syne',sans-serif",fontSize:20,fontWeight:800,color:"#5EC4B0" }}>$1.200.000</div>
                  </div>
                </div>
                {invoices.map((f,i) => (
                  <div key={i} style={{ background:f.ok?"rgba(94,196,176,0.04)":"rgba(255,160,60,0.04)",border:`1px solid ${f.ok?"rgba(94,196,176,0.12)":"rgba(255,160,60,0.15)"}`,borderRadius:8,padding:"9px 12px",display:"flex",alignItems:"center",justifyContent:"space-between" }}>
                    <div>
                      <div style={{ fontSize:11,color:"#141E30",fontWeight:600 }}>{f.patient} <span style={{ fontWeight:400,color:"rgba(20,30,48,0.4)",fontSize:9 }}>{f.num}</span></div>
                      <div style={{ fontSize:9,color:"rgba(20,30,48,0.4)",marginTop:1 }}>{f.proc}</div>
                    </div>
                    <div style={{ textAlign:"right" }}>
                      <div style={{ fontSize:11,fontWeight:700,color:f.ok?"#3B9EDB":"#FFA03C" }}>{f.val}</div>
                      <div style={{ fontSize:8,marginTop:2,color:f.ok?"#5EC4B0":"#FFA03C" }}>{f.ok?(isEn?"Paid":"Pagado"):(isEn?"Pending":"Pendiente")}</div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}