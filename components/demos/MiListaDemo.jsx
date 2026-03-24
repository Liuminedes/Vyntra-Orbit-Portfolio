"use client";
import { useState } from "react";

const TabBar = ({ active, onChange, isEn }) => {
  const tabs = [
    { id:"home",   icon:"🏠", label:isEn?"Home":"Inicio"   },
    { id:"list",   icon:"📋", label:isEn?"List":"Lista"     },
    { id:"stores", icon:"🏪", label:isEn?"Stores":"Tiendas" },
    { id:"scan",   icon:"📷", label:isEn?"Scan":"Escanear"  },
  ];
  return (
    <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",borderTop:"1px solid #eee",background:"white",padding:"6px 0 8px" }}>
      {tabs.map(t => (
        <button key={t.id} onClick={() => onChange(t.id)}
          style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:2,border:"none",background:"none",cursor:"pointer",padding:"2px 0" }}>
          <span style={{ fontSize:18 }}>{t.icon}</span>
          <span style={{ fontSize:8,fontWeight:600,color:active===t.id?"#22C55E":"#9CA3AF",fontFamily:"'DM Mono',monospace" }}>{t.label}</span>
          {active===t.id && <div style={{ width:16,height:2,background:"#22C55E",borderRadius:2 }} />}
        </button>
      ))}
    </div>
  );
};

export default function MiListaDemo({ lang = "es" }) {
  const isEn = lang === "en";
  const [screen, setScreen] = useState("home");
  const [checked, setChecked] = useState(new Set([0,1]));
  const toggle = i => setChecked(p => { const n=new Set(p); n.has(i)?n.delete(i):n.add(i); return n; });

  const items = {
    [isEn?"FRUITS & VEGETABLES":"FRUTAS Y VERDURAS"]: [
      { id:0,name:isEn?"Carrots x500g":"Zanahorias x500g",qty:"1 und",  store:"Cañaveral",price:"$2.500",emoji:"🥕" },
      { id:1,name:isEn?"Ripe bananas":"Bananos maduros",  qty:"1 racimo",store:"Cañaveral",price:"$3.800",emoji:"🍌" },
      { id:2,name:isEn?"Tomatoes":"Tomates chonto",       qty:"2 und",  store:"Cañaveral",price:"$4.200",emoji:"🍅" },
    ],
    [isEn?"CLEANING":"ASEO Y LIMPIEZA"]: [
      { id:3,name:isEn?"Bar soap x3":"Jabón de baño x3",  qty:"1 paq", store:"D1",price:"$7.900",emoji:"🧼" },
      { id:4,name:isEn?"Toothbrush":"Cepillo de dientes", qty:"2 und", store:"D1",price:"$5.600",emoji:"🪥" },
    ],
  };

  const stores = [
    { id:"D1",name:"Tienda D1",    addr:"Cra 15 #42-10 · 1.2 km",offer:isEn?"2x1 on frozen meat today":"2x1 en carnes frías hoy",tag:"HOY",color:"#DC2626" },
    { id:"C", name:"Cañaveral",    addr:"Av. 68 #15-20 · 2.8 km", offer:isEn?"Tuesdays 20% off vegetables":"Martes de verduras con 20% off",tag:"MAR",color:"#16A34A" },
    { id:"É", name:"Éxito Express",addr:"Cl. 80 #10-45 · 3.5 km", offer:null,color:"#CA8A04" },
  ];

  const detected = [
    { name:"Leche Alpina entera", qty:"1 und",price:"$3.200" },
    { name:"Pan tajado Bimbo",    qty:"1 und",price:"$5.900" },
    { name:"Huevos AA x12",       qty:"1 paq",price:"$11.500"},
  ];

  /* Frame de teléfono */
  const Phone = ({ children, dark }) => (
    <div style={{ maxWidth:300,margin:"0 auto",background:"#111",borderRadius:30,padding:3,boxShadow:"0 20px 60px rgba(0,0,0,0.5),inset 0 0 0 1px rgba(255,255,255,0.08)" }}>
      <div style={{ background:"#111",borderRadius:"28px 28px 0 0",padding:"7px 16px 3px",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
        <span style={{ fontSize:10,fontWeight:700,color:dark?"#fff":"#1a1a1a" }}>9:41</span>
        <div style={{ width:70,height:7,background:"rgba(0,0,0,0.7)",borderRadius:8 }} />
        <div style={{ display:"flex",gap:2 }}>
          {[5,7,9,11].map(h=><div key={h} style={{ width:3,height:h,background:dark?"#fff":"#1a1a1a",borderRadius:1,opacity:.8 }} />)}
        </div>
      </div>
      <div style={{ borderRadius:"0 0 27px 27px",overflow:"hidden",background:"white" }}>{children}</div>
    </div>
  );

  return (
    <div style={{ background:"linear-gradient(135deg,#0a1628,#0d2010)",padding:"16px",borderRadius:12,border:"1px solid rgba(34,197,94,0.2)",fontFamily:"'DM Mono',monospace" }}>
      {/* Header */}
      <div style={{ textAlign:"center",marginBottom:12 }}>
        <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(34,197,94,0.08)",border:"1px solid rgba(34,197,94,0.2)",borderRadius:100,padding:"4px 14px",marginBottom:6 }}>
          <span style={{ fontSize:13 }}>🛒</span>
          <span style={{ fontSize:12,fontWeight:700,color:"white",fontFamily:"'Syne',sans-serif" }}>MercadoApp</span>
        </div>
        <div style={{ fontSize:8,color:"rgba(255,255,255,0.35)",letterSpacing:"0.1em",display:"block" }}>{isEn?"Interactive prototype — Android":"Prototipo interactivo — Android"}</div>
        <div style={{ display:"flex",justifyContent:"center",gap:5,marginTop:8 }}>
          {[["home",isEn?"Home":"Inicio"],["list",isEn?"List":"Lista"],["stores",isEn?"Stores":"Tiendas"],["scan",isEn?"Scan":"Escanear"]].map(([id,l]) => (
            <button key={id} onClick={() => setScreen(id)} style={{ padding:"3px 9px",borderRadius:100,border:"none",background:screen===id?"#22C55E":"rgba(255,255,255,0.06)",color:screen===id?"#0d2010":"rgba(255,255,255,0.45)",fontSize:9,cursor:"pointer",fontFamily:"'DM Mono',monospace",fontWeight:screen===id?700:400,transition:"all .15s" }}>{l}</button>
          ))}
        </div>
      </div>

      {/* HOME */}
      {screen === "home" && (
        <Phone>
          <div style={{ background:"#14532D",padding:"14px 14px 18px",borderRadius:"0 0 18px 18px" }}>
            <div style={{ fontSize:9,color:"rgba(255,255,255,0.6)" }}>{isEn?"Good morning 👋":"Buenos días 👋"}</div>
            <div style={{ fontFamily:"'Syne',sans-serif",fontSize:17,fontWeight:700,color:"white" }}>{isEn?"Hello, ":"Hola, "}<span style={{ color:"#86EFAC" }}>Camila</span></div>
            <div style={{ background:"rgba(255,255,255,0.15)",borderRadius:10,padding:"10px 12px",marginTop:8 }}>
              <div style={{ fontSize:7,color:"rgba(255,255,255,0.6)",textTransform:"uppercase",letterSpacing:"0.1em" }}>{isEn?"BUDGET THIS MONTH":"PRESUPUESTO ESTE MES"}</div>
              <div style={{ fontFamily:"'Syne',sans-serif",fontSize:20,fontWeight:800,color:"white",lineHeight:1.1 }}>$248.500</div>
              <div style={{ fontSize:8,color:"rgba(255,255,255,0.6)",marginTop:1 }}>{isEn?"Spent of $400.000":"Gastado de $400.000"}</div>
            </div>
          </div>
          <div style={{ padding:"10px 12px",display:"flex",flexDirection:"column",gap:8 }}>
            <div style={{ fontFamily:"'Syne',sans-serif",fontSize:11,fontWeight:700,color:"#111" }}>{isEn?"QUICK ACTIONS":"ACCIONES RÁPIDAS"}</div>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:7 }}>
              {[
                {icon:"📷",title:isEn?"Scan invoice":"Escanear factura",    sub:isEn?"Load products":"Cargar productos"  },
                {icon:"📋",title:isEn?"My list":"Mi lista",                 sub:isEn?"8 pending":"8 ítems pendientes"    },
                {icon:"🏪",title:isEn?"My stores":"Mis tiendas",            sub:isEn?"3 favorites":"3 favoritas"         },
                {icon:"📊",title:isEn?"History":"Historial",                sub:isEn?"View expenses":"Ver gastos"        },
              ].map((a,i) => (
                <div key={i} style={{ background:"white",borderRadius:10,padding:"9px",border:"1px solid #E5E7EB",display:"flex",alignItems:"center",gap:7 }}>
                  <span style={{ fontSize:16 }}>{a.icon}</span>
                  <div>
                    <div style={{ fontSize:10,fontWeight:600,color:"#111",lineHeight:1.2 }}>{a.title}</div>
                    <div style={{ fontSize:8,color:"#9CA3AF",marginTop:1 }}>{a.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
              <span style={{ fontFamily:"'Syne',sans-serif",fontSize:10,fontWeight:700,color:"#111" }}>{isEn?"TODAY'S OFFERS":"OFERTAS DE HOY"}</span>
              <span style={{ fontSize:9,color:"#22C55E",fontWeight:600 }}>{isEn?"See all":"Ver todas"}</span>
            </div>
            <div style={{ background:"white",borderRadius:10,padding:"9px",border:"1px solid #E5E7EB",display:"flex",alignItems:"center",gap:8 }}>
              <div style={{ width:34,height:34,borderRadius:8,background:"#FEF3C7",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0 }}>🛒</div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:10,fontWeight:600,color:"#111" }}>Cañaveral</div>
                <div style={{ fontSize:8,color:"#9CA3AF" }}>{isEn?"Tuesdays 20% off fruits":"Martes de verduras con 20% off"}</div>
              </div>
              <span style={{ background:"#FEF3C7",color:"#D97706",fontSize:7,fontWeight:700,padding:"2px 5px",borderRadius:4 }}>HOY</span>
            </div>
          </div>
          <TabBar active="home" onChange={setScreen} isEn={isEn} />
        </Phone>
      )}

      {/* LIST */}
      {screen === "list" && (
        <Phone>
          <div style={{ padding:"12px 12px 8px" }}>
            <div style={{ fontFamily:"'Syne',sans-serif",fontSize:17,fontWeight:700,color:"#111" }}>{isEn?"Shopping list":"Lista de compras"}</div>
            <div style={{ fontSize:8,color:"#9CA3AF",marginTop:1 }}>{isEn?"Monday · 3 stores":"Mercado del lunes · 3 tiendas"}</div>
            <div style={{ marginTop:8,background:"#F3F4F6",borderRadius:8,padding:"7px 10px" }}>
              <div style={{ display:"flex",justifyContent:"space-between",marginBottom:3 }}>
                <span style={{ fontSize:7,color:"#9CA3AF",textTransform:"uppercase" }}>{isEn?"EST. BUDGET":"PRESUPUESTO EST."}</span>
                <span style={{ fontSize:9,fontWeight:700,color:"#111" }}>$62.300 / $100.000</span>
              </div>
              <div style={{ height:5,background:"#E5E7EB",borderRadius:3,overflow:"hidden" }}>
                <div style={{ height:"100%",width:"62%",background:"linear-gradient(90deg,#22C55E,#16A34A)",borderRadius:3 }} />
              </div>
            </div>
            <div style={{ marginTop:7,display:"flex",gap:6 }}>
              <div style={{ flex:1,background:"#F9FAFB",border:"1px solid #E5E7EB",borderRadius:7,padding:"6px 9px",fontSize:10,color:"#9CA3AF" }}>{isEn?"Add item...":"Agregar ítem..."}</div>
              <div style={{ width:30,height:30,borderRadius:7,background:"#22C55E",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:"white",flexShrink:0 }}>+</div>
            </div>
          </div>
          <div style={{ padding:"0 12px",maxHeight:200,overflowY:"auto" }}>
            {Object.entries(items).map(([cat,its]) => (
              <div key={cat} style={{ marginBottom:10 }}>
                <div style={{ display:"flex",alignItems:"center",gap:5,marginBottom:5 }}>
                  <span style={{ fontSize:9 }}>{cat.includes(isEn?"FRUIT":"FRUTA")?"🥬":"🧴"}</span>
                  <span style={{ fontSize:8,color:"#9CA3AF",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:600 }}>{cat}</span>
                </div>
                {its.map(item => (
                  <div key={item.id} onClick={() => toggle(item.id)}
                    style={{ display:"flex",alignItems:"center",gap:7,padding:"7px 0",borderBottom:"1px solid #F3F4F6",cursor:"pointer" }}>
                    <div style={{ width:18,height:18,borderRadius:"50%",border:`2px solid ${checked.has(item.id)?"#22C55E":"#D1D5DB"}`,background:checked.has(item.id)?"#22C55E":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all .15s" }}>
                      {checked.has(item.id) && <span style={{ fontSize:9,color:"white" }}>✓</span>}
                    </div>
                    <span style={{ fontSize:13 }}>{item.emoji}</span>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:11,color:checked.has(item.id)?"#9CA3AF":"#111",textDecoration:checked.has(item.id)?"line-through":"none",fontWeight:500 }}>{item.name}</div>
                      <div style={{ fontSize:8,color:"#9CA3AF" }}>{item.qty} · {item.store}</div>
                    </div>
                    <span style={{ fontSize:11,fontWeight:700,color:"#22C55E" }}>{item.price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <TabBar active="list" onChange={setScreen} isEn={isEn} />
        </Phone>
      )}

      {/* STORES */}
      {screen === "stores" && (
        <Phone dark>
          <div style={{ background:"#111827",padding:"12px 12px 8px" }}>
            <div style={{ fontFamily:"'Syne',sans-serif",fontSize:17,fontWeight:700,color:"white" }}>{isEn?"My Stores":"Mis Tiendas"}</div>
            <div style={{ fontSize:8,color:"rgba(255,255,255,0.4)",marginTop:1 }}>{isEn?"3 saved stores":"3 tiendas guardadas"}</div>
            <div style={{ marginTop:7,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:7,padding:"6px 9px",display:"flex",alignItems:"center",gap:5 }}>
              <span style={{ fontSize:10 }}>🔍</span>
              <span style={{ fontSize:10,color:"rgba(255,255,255,0.3)" }}>{isEn?"Search stores...":"Buscar tienda..."}</span>
            </div>
          </div>
          <div style={{ background:"#111827",padding:"0 12px",display:"flex",flexDirection:"column",gap:7,maxHeight:220,overflowY:"auto" }}>
            {stores.map((s,i) => (
              <div key={i} style={{ background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:10,padding:"9px 10px" }}>
                {s.offer && (
                  <div style={{ display:"flex",alignItems:"center",gap:5,marginBottom:5 }}>
                    <span style={{ fontSize:9 }}>🔥</span>
                    <span style={{ fontSize:8,color:"#F59E0B",flex:1 }}>{s.offer}</span>
                    <span style={{ background:"#F59E0B",color:"#111",fontSize:7,fontWeight:700,padding:"1px 5px",borderRadius:3 }}>{s.tag}</span>
                  </div>
                )}
                <div style={{ display:"flex",alignItems:"center",gap:9 }}>
                  <div style={{ width:34,height:34,borderRadius:7,background:s.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,color:"white",flexShrink:0 }}>{s.id}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:11,fontWeight:600,color:"white" }}>{s.name}</div>
                    <div style={{ fontSize:8,color:"rgba(255,255,255,0.35)",marginTop:1 }}>📍 {s.addr}</div>
                    {!s.offer && <div style={{ fontSize:8,color:"rgba(255,255,255,0.2)",marginTop:1 }}>{isEn?"No offers this week":"Sin ofertas esta semana"}</div>}
                  </div>
                  <span style={{ color:"rgba(255,255,255,0.2)",fontSize:12 }}>›</span>
                </div>
              </div>
            ))}
            <div style={{ background:"rgba(34,197,94,0.08)",border:"1px dashed rgba(34,197,94,0.3)",borderRadius:10,padding:"11px",display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8 }}>
              <span style={{ color:"#22C55E",fontSize:13 }}>+</span>
              <span style={{ fontSize:10,color:"#22C55E",fontWeight:600 }}>{isEn?"Add new store":"Agregar nueva tienda"}</span>
            </div>
          </div>
          <div style={{ background:"#111827" }}>
            <TabBar active="stores" onChange={setScreen} isEn={isEn} />
          </div>
        </Phone>
      )}

      {/* SCAN */}
      {screen === "scan" && (
        <Phone dark>
          <div style={{ background:"#0a0a0a",padding:"12px 12px 8px" }}>
            <div style={{ fontFamily:"'Syne',sans-serif",fontSize:16,fontWeight:700,color:"white" }}>{isEn?"Scan invoice":"Escanear factura"}</div>
            <div style={{ fontSize:8,color:"rgba(255,255,255,0.4)",marginTop:1 }}>{isEn?"Products detected automatically":"Detectamos los productos automáticamente"}</div>
          </div>
          <div style={{ background:"#0a0a0a",padding:"0 12px",display:"flex",flexDirection:"column",gap:8 }}>
            <div style={{ background:"#1a1a1a",borderRadius:10,overflow:"hidden",aspectRatio:"16/9",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:5,position:"relative" }}>
              {/* Corner brackets */}
              {[[{top:8,left:8},{borderTop:"2px solid #22C55E",borderLeft:"2px solid #22C55E"}],[{top:8,right:8},{borderTop:"2px solid #22C55E",borderRight:"2px solid #22C55E"}],[{bottom:8,left:8},{borderBottom:"2px solid #22C55E",borderLeft:"2px solid #22C55E"}],[{bottom:8,right:8},{borderBottom:"2px solid #22C55E",borderRight:"2px solid #22C55E"}]].map(([pos,border],i) => (
                <div key={i} style={{ position:"absolute",width:18,height:18,...pos,...border }} />
              ))}
              <div style={{ width:30,height:30,background:"rgba(34,197,94,0.15)",border:"1px solid rgba(34,197,94,0.3)",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16 }}>🧾</div>
              <div style={{ fontSize:10,color:"rgba(255,255,255,0.6)",fontWeight:600 }}>{isEn?"Aim at the invoice":"Apunta hacia la factura"}</div>
              <div style={{ fontSize:8,color:"rgba(255,255,255,0.35)" }}>{isEn?"Keep the camera stable":"Mantén estable la cámara"}</div>
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:6 }}>
              <div style={{ background:"#22C55E",borderRadius:8,padding:"8px",display:"flex",alignItems:"center",justifyContent:"center",gap:5 }}>
                <span style={{ fontSize:11 }}>📷</span>
                <span style={{ fontSize:9,fontWeight:700,color:"white" }}>{isEn?"Take photo":"Tomar foto"}</span>
              </div>
              <div style={{ background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,padding:"8px",display:"flex",alignItems:"center",justifyContent:"center",gap:5 }}>
                <span style={{ fontSize:11 }}>🖼</span>
                <span style={{ fontSize:9,color:"rgba(255,255,255,0.6)" }}>{isEn?"Gallery":"Galería"}</span>
              </div>
            </div>
            <div>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5 }}>
                <span style={{ fontSize:8,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.08em" }}>{isEn?"DETECTED PRODUCTS":"PRODUCTOS DETECTADOS"}</span>
                <span style={{ background:"rgba(34,197,94,0.15)",color:"#22C55E",fontSize:8,padding:"2px 7px",borderRadius:100,border:"1px solid rgba(34,197,94,0.2)" }}>4 items</span>
              </div>
              {detected.map((p,i) => (
                <div key={i} style={{ display:"flex",alignItems:"center",gap:7,padding:"6px 0",borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ width:26,height:26,borderRadius:6,background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,flexShrink:0 }}>🥛</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:11,color:"rgba(255,255,255,0.8)",fontWeight:500 }}>{p.name}</div>
                    <div style={{ fontSize:8,color:"rgba(255,255,255,0.3)" }}>{p.qty}</div>
                  </div>
                  <div style={{ display:"flex",alignItems:"center",gap:4 }}>
                    <span style={{ fontSize:11,fontWeight:700,color:"#22C55E" }}>{p.price}</span>
                    <span style={{ fontSize:11 }}>✏️</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background:"#0a0a0a",paddingBottom:4 }}>
            <TabBar active="scan" onChange={setScreen} isEn={isEn} />
          </div>
        </Phone>
      )}

      {/* Stack */}
      <div style={{ display:"flex",justifyContent:"center",flexWrap:"wrap",gap:5,marginTop:12 }}>
        {[["⚡","Flutter"],["🔥","Firebase"],["🔍","ML Kit"],["🔔","FCM"]].map(([icon,label]) => (
          <div key={label} style={{ background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:100,padding:"3px 9px",fontSize:9,color:"rgba(255,255,255,0.45)",display:"flex",alignItems:"center",gap:4 }}>
            <span>{icon}</span>{label}
          </div>
        ))}
      </div>
    </div>
  );
}