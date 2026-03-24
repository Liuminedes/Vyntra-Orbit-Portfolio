"use client";

/* ══════════════════════════════════════════════════════
   MobileProjectCard — Vista móvil única por proyecto
   Se muestra solo en ≤1023px como reemplazo del demo
══════════════════════════════════════════════════════ */

/* ── 01 SyncDealer — Dashboard automotriz ── */
const SyncDealerMobile = ({ lang }) => {
  const isEn = lang === "en";
  const rows = [
    { name: "Carlos M.", brand: "KIA",     sales: 8,  comm: "$2.4M", bonus: true },
    { name: "Andrés R.", brand: "VW",      sales: 11, comm: "$3.3M", bonus: true },
    { name: "Laura T.",  brand: "Renault", sales: 6,  comm: "$1.8M", bonus: false },
  ];
  return (
    <div style={{ background:"#0a0a14", borderRadius:12, overflow:"hidden", border:"1px solid rgba(108,99,255,0.2)", fontFamily:"'DM Mono',monospace" }}>
      {/* Chrome */}
      <div style={{ background:"#111120", padding:"10px 14px", display:"flex", alignItems:"center", gap:8 }}>
        {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width:9,height:9,borderRadius:"50%",background:c }} />)}
        <div style={{ flex:1, background:"rgba(255,255,255,0.05)", borderRadius:5, padding:"3px 10px", fontSize:9, color:"rgba(255,255,255,0.3)", marginLeft:8 }}>syncdealear.almotores.com</div>
      </div>
      {/* KPIs */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, padding:"14px 14px 10px" }}>
        {[
          { l: isEn?"Sales":"Ventas",      v:"47",    c:"#6C63FF" },
          { l: isEn?"Commissions":"Comis", v:"$18.4M",c:"#00D4FF" },
          { l: isEn?"Bonuses":"Bonos",     v:"9",     c:"#00ff88" },
        ].map((k,i) => (
          <div key={i} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:7, padding:"10px 10px 8px" }}>
            <div style={{ fontSize:8, color:"rgba(255,255,255,0.3)", letterSpacing:"0.08em", marginBottom:4 }}>{k.l}</div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:800, color:k.c, lineHeight:1 }}>{k.v}</div>
          </div>
        ))}
      </div>
      {/* Tabla advisors */}
      <div style={{ margin:"0 14px 14px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:8, overflow:"hidden" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 48px 56px 64px", gap:6, padding:"8px 12px", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
          {[isEn?"Advisor":"Asesor","Brand","Sales","Comm."].map(h => (
            <div key={h} style={{ fontSize:8, color:"rgba(255,255,255,0.25)", textTransform:"uppercase", letterSpacing:"0.06em" }}>{h}</div>
          ))}
        </div>
        {rows.map((r,i) => (
          <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 48px 56px 64px", gap:6, padding:"9px 12px", borderBottom:"1px solid rgba(255,255,255,0.04)", alignItems:"center" }}>
            <div style={{ fontSize:11, color:"rgba(255,255,255,0.8)", fontWeight:500 }}>{r.name}</div>
            <div style={{ fontSize:9, color:"rgba(255,255,255,0.35)" }}>{r.brand}</div>
            <div style={{ fontSize:11, color:"#00D4FF", fontWeight:600 }}>{r.sales}</div>
            <div style={{ fontSize:9, padding:"2px 6px", borderRadius:100, background:r.bonus?"rgba(0,255,136,0.1)":"rgba(108,99,255,0.1)", color:r.bonus?"#00ff88":"#6C63FF", border:`1px solid ${r.bonus?"#00ff8830":"#6C63FF30"}`, textAlign:"center" }}>
              {r.bonus ? (isEn?"Bonus":"Bono") : "Base"}
            </div>
          </div>
        ))}
      </div>
      {/* Label */}
      <div style={{ padding:"0 14px 12px", display:"flex", alignItems:"center", gap:6 }}>
        <div style={{ width:5,height:5,borderRadius:"50%",background:"#00ff88",animation:"pulse-wip 2s infinite" }} />
        <span style={{ fontSize:9, color:"rgba(255,255,255,0.25)", letterSpacing:"0.12em", textTransform:"uppercase" }}>SyncDealer v2 · Almotores</span>
      </div>
    </div>
  );
};

/* ── 02 Shaddai Canino — Spa veterinario ── */
const ShaddaiMobile = ({ lang }) => {
  const isEn = lang === "en";
  const appointments = [
    { pet:"🐕 Max",   breed:"Golden",        owner:"Carlos R.", service: isEn?"Bath + trim":"Baño + corte",  time:"9:00 am",  ok:true  },
    { pet:"🐈 Luna",  breed:"Siamese",        owner:"Ana G.",    service: isEn?"Vet consult":"Veterinaria",   time:"10:30 am", ok:false },
    { pet:"🐩 Coco",  breed:"Poodle",         owner:"Pedro S.",  service: isEn?"Aesthetic cut":"Corte estét", time:"11:00 am", ok:true  },
    { pet:"🐕 Rocky", breed:"French Bulldog", owner:"María T.",  service: isEn?"Boarding":"Guardería",        time:"2:00 pm",  ok:true  },
  ];
  return (
    <div style={{ background:"#FDFAF6", borderRadius:12, overflow:"hidden", border:"1px solid rgba(212,137,42,0.2)", fontFamily:"'DM Sans',sans-serif" }}>
      {/* Chrome */}
      <div style={{ background:"#F5EFE6", padding:"10px 14px", display:"flex", alignItems:"center", gap:8 }}>
        {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width:9,height:9,borderRadius:"50%",background:c }} />)}
        <div style={{ flex:1, background:"rgba(44,26,14,0.06)", borderRadius:5, padding:"3px 10px", fontSize:9, color:"rgba(44,26,14,0.35)", marginLeft:8 }}>app.shaddaicanino.com</div>
        <span style={{ fontSize:10 }}>🐾</span>
      </div>
      {/* Header */}
      <div style={{ padding:"12px 14px 8px", display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px solid rgba(212,137,42,0.1)" }}>
        <div>
          <div style={{ fontFamily:"'Playfair Display',serif", fontSize:14, fontWeight:700, color:"#2C1A0E" }}>Shaddai Canino</div>
          <div style={{ fontSize:9, color:"rgba(44,26,14,0.45)", marginTop:1 }}>{isEn?"Canine Spa & Vet":"Spa Canino & Veterinaria"}</div>
        </div>
        <div style={{ background:"rgba(74,103,65,0.1)", color:"#4A6741", padding:"3px 10px", borderRadius:100, fontSize:9, border:"1px solid rgba(74,103,65,0.2)" }}>
          {isEn?"● Open":"● Abierto"}
        </div>
      </div>
      {/* KPIs */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, padding:"12px 14px 8px" }}>
        {[
          { l: isEn?"Pets":"Mascotas", v:"84", c:"#D4892A" },
          { l: isEn?"Today":"Hoy",     v:"12", c:"#4A6741" },
          { l: isEn?"Revenue":"Caja",  v:"$840k",c:"#A0673A" },
        ].map((k,i) => (
          <div key={i} style={{ background:"rgba(212,137,42,0.06)", border:"1px solid rgba(212,137,42,0.12)", borderRadius:7, padding:"10px" }}>
            <div style={{ fontSize:8, color:"rgba(44,26,14,0.4)", marginBottom:3 }}>{k.l}</div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:900, color:k.c, lineHeight:1 }}>{k.v}</div>
          </div>
        ))}
      </div>
      {/* Citas */}
      <div style={{ padding:"0 14px 14px", display:"flex", flexDirection:"column", gap:6 }}>
        <div style={{ fontSize:8, color:"rgba(44,26,14,0.35)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:2 }}>
          {isEn?"Today's agenda":"Agenda de hoy"}
        </div>
        {appointments.map((a,i) => (
          <div key={i} style={{ background:"rgba(212,137,42,0.04)", border:"1px solid rgba(212,137,42,0.1)", borderRadius:7, padding:"8px 10px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div style={{ display:"flex", alignItems:"center", gap:7 }}>
              <span style={{ fontSize:16 }}>{a.pet.split(" ")[0]}</span>
              <div>
                <div style={{ fontSize:11, color:"#2C1A0E", fontWeight:600 }}>{a.pet.split(" ").slice(1).join(" ")} · {a.breed}</div>
                <div style={{ fontSize:9, color:"rgba(44,26,14,0.4)" }}>{a.service}</div>
              </div>
            </div>
            <div style={{ textAlign:"right" }}>
              <div style={{ fontSize:10, fontWeight:700, color:"#D4892A" }}>{a.time}</div>
              <div style={{ fontSize:8, padding:"1px 6px", borderRadius:100, background:a.ok?"rgba(74,103,65,0.1)":"rgba(212,137,42,0.15)", color:a.ok?"#4A6741":"#A0673A", marginTop:2 }}>
                {a.ok ? (isEn?"Confirmed":"Confirmado") : (isEn?"Pending":"Pendiente")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── 03 Atlas Market Suite — Trading SaaS ── */
const AtlasMobile = ({ lang }) => {
  const isEn = lang === "en";
  const signals = [
    { pair:"BTC/USDT", dir:"CALL", conf:94, result:"+12.4%", win:true  },
    { pair:"ETH/USDT", dir:"PUT",  conf:87, result:"+8.1%",  win:true  },
    { pair:"EUR/USD",  dir:"CALL", conf:79, result:"-3.2%",  win:false },
    { pair:"GBP/USD",  dir:"PUT",  conf:91, result:"+10.8%", win:true  },
  ];
  return (
    <div style={{ background:"#060610", borderRadius:12, overflow:"hidden", border:"1px solid rgba(108,99,255,0.2)", fontFamily:"'DM Mono',monospace" }}>
      {/* Chrome */}
      <div style={{ background:"#0a0a1a", padding:"10px 14px", display:"flex", alignItems:"center", gap:8 }}>
        {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width:9,height:9,borderRadius:"50%",background:c }} />)}
        <div style={{ flex:1, background:"rgba(108,99,255,0.06)", borderRadius:5, padding:"3px 10px", fontSize:9, color:"rgba(108,99,255,0.4)", marginLeft:8 }}>app.atlasmarket.io</div>
      </div>
      {/* Balance */}
      <div style={{ padding:"14px 14px 10px" }}>
        <div style={{ fontSize:9, color:"rgba(255,255,255,0.3)", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:4 }}>
          {isEn?"Total balance":"Balance total"}
        </div>
        <div style={{ display:"flex", alignItems:"baseline", gap:12 }}>
          <span style={{ fontFamily:"'Syne',sans-serif", fontSize:28, fontWeight:800, color:"#00D4FF" }}>$12,840</span>
          <span style={{ fontSize:11, color:"#00ff88", background:"rgba(0,255,136,0.1)", padding:"2px 8px", borderRadius:4 }}>▲ +2.34%</span>
        </div>
        {/* Mini sparkline SVG */}
        <svg viewBox="0 0 300 48" style={{ width:"100%", height:40, marginTop:8 }}>
          <polyline points="0,38 30,32 60,35 90,22 120,28 150,14 180,18 210,10 240,6 270,12 300,4"
            fill="none" stroke="rgba(0,212,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,212,255,0.15)" />
            <stop offset="100%" stopColor="rgba(0,212,255,0)" />
          </linearGradient>
          <polygon points="0,38 30,32 60,35 90,22 120,28 150,14 180,18 210,10 240,6 270,12 300,4 300,48 0,48" fill="url(#ag)" />
        </svg>
      </div>
      {/* Stats row */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:"rgba(255,255,255,0.04)", margin:"0 14px 12px" }}>
        {[
          { l:"Win Rate", v:"78.4%", c:"#00ff88" },
          { l: isEn?"Signals":"Señales", v:"24", c:"#00D4FF" },
          { l:"ROI", v:"+34.2%", c:"#8B5CF6" },
        ].map((k,i) => (
          <div key={i} style={{ background:"#060610", padding:"10px", textAlign:"center" }}>
            <div style={{ fontFamily:"'Syne',sans-serif", fontSize:16, fontWeight:800, color:k.c }}>{k.v}</div>
            <div style={{ fontSize:8, color:"rgba(255,255,255,0.25)", marginTop:2 }}>{k.l}</div>
          </div>
        ))}
      </div>
      {/* Señales */}
      <div style={{ padding:"0 14px 14px", display:"flex", flexDirection:"column", gap:5 }}>
        <div style={{ fontSize:8, color:"rgba(255,255,255,0.25)", textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:2 }}>
          {isEn?"AI signals — last 4":"Señales IA — últimas 4"}
        </div>
        {signals.map((s,i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", background:s.win?"rgba(0,255,136,0.04)":"rgba(255,96,96,0.04)", border:`1px solid ${s.win?"rgba(0,255,136,0.12)":"rgba(255,96,96,0.12)"}`, borderRadius:7, padding:"7px 10px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ fontFamily:"'Syne',sans-serif", fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.7)" }}>{s.pair}</span>
              <span style={{ fontSize:9, padding:"1px 7px", borderRadius:3, background:s.dir==="CALL"?"rgba(0,255,136,0.12)":"rgba(255,96,96,0.12)", color:s.dir==="CALL"?"#00ff88":"#ff6060", fontWeight:700 }}>{s.dir}</span>
              <span style={{ fontSize:8, color:"rgba(255,255,255,0.25)" }}>{s.conf}%</span>
            </div>
            <span style={{ fontSize:11, fontWeight:700, color:s.win?"#00ff88":"#ff6060" }}>{s.result}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── 04 Fitness Store — E-commerce ── */
const FitnessMobile = ({ lang }) => {
  const isEn = lang === "en";
  const products = [
    { name:"Whey Protein",   weight:"2kg",  price:"$89.900", cat: isEn?"Protein":"Proteína",  hot:true  },
    { name:"Creatine Mono",  weight:"500g", price:"$54.900", cat: isEn?"Strength":"Fuerza",   hot:false },
    { name:"Pre-Workout",    weight:"300g", price:"$64.900", cat: isEn?"Energy":"Energía",    hot:true  },
    { name:"BCAA Complex",   weight:"400g", price:"$49.900", cat: isEn?"Recovery":"Recup.",   hot:false },
  ];
  return (
    <div style={{ background:"#0d0d0d", borderRadius:12, overflow:"hidden", border:"1px solid rgba(255,80,0,0.2)", fontFamily:"'DM Mono',monospace" }}>
      {/* Chrome */}
      <div style={{ background:"#1a1a1a", padding:"10px 14px", display:"flex", alignItems:"center", gap:8 }}>
        {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width:9,height:9,borderRadius:"50%",background:c }} />)}
        <div style={{ flex:1, background:"rgba(255,80,0,0.06)", borderRadius:5, padding:"3px 10px", fontSize:9, color:"rgba(255,120,50,0.5)", marginLeft:8 }}>tiendafitness.com.co</div>
      </div>
      {/* Banner */}
      <div style={{ background:"linear-gradient(135deg,#1a0a00,#2a1000)", padding:"14px 16px", borderBottom:"1px solid rgba(255,80,0,0.1)" }}>
        <div style={{ fontFamily:"'Syne',sans-serif", fontSize:16, fontWeight:800, color:"white" }}>
          {isEn?"Fuel Your Performance 💪":"Potencia Tu Rendimiento 💪"}
        </div>
        <div style={{ fontSize:9, color:"rgba(255,120,50,0.6)", marginTop:3, letterSpacing:"0.1em" }}>
          {isEn?"Premium Supplements · Fast delivery":"Suplementos Premium · Entrega rápida"}
        </div>
      </div>
      {/* Stats */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:"rgba(255,255,255,0.04)", margin:"12px 14px 10px" }}>
        {[
          { l: isEn?"Products":"Productos", v:"48+", c:"#FF5000" },
          { l: isEn?"Orders":"Pedidos",     v:"120", c:"#FF8C00" },
          { l: isEn?"Rating":"Calific.",    v:"4.9★", c:"#FFD700" },
        ].map((k,i) => (
          <div key={i} style={{ background:"#0d0d0d", padding:"9px", textAlign:"center" }}>
            <div style={{ fontFamily:"'Syne',sans-serif", fontSize:16, fontWeight:800, color:k.c }}>{k.v}</div>
            <div style={{ fontSize:8, color:"rgba(255,255,255,0.3)", marginTop:1 }}>{k.l}</div>
          </div>
        ))}
      </div>
      {/* Productos */}
      <div style={{ padding:"0 14px 14px", display:"flex", flexDirection:"column", gap:6 }}>
        {products.map((p,i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(255,80,0,0.04)", border:"1px solid rgba(255,80,0,0.1)", borderRadius:7, padding:"8px 12px" }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                <span style={{ fontSize:11, color:"rgba(255,255,255,0.85)", fontWeight:500 }}>{p.name}</span>
                {p.hot && <span style={{ fontSize:7, background:"rgba(255,80,0,0.2)", color:"#FF5000", padding:"1px 5px", borderRadius:3, border:"1px solid rgba(255,80,0,0.3)" }}>HOT</span>}
              </div>
              <div style={{ fontSize:9, color:"rgba(255,255,255,0.3)", marginTop:2 }}>{p.cat} · {p.weight}</div>
            </div>
            <div style={{ textAlign:"right" }}>
              <div style={{ fontSize:12, fontWeight:700, color:"#FF8C00" }}>{p.price}</div>
              <div style={{ fontSize:8, color:"rgba(255,255,255,0.2)", marginTop:1 }}>COP</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── 05 DentalSaaS — Clínica dental ── */
const DentalMobile = ({ lang }) => {
  const isEn = lang === "en";
  const patients = [
    { name:"Juan H.",   age:"34", treatment:isEn?"Orthodontics":"Ortodoncia",   stage:isEn?"Phase 2":"Fase 2",   color:"#7C6FFF", sessions:8  },
    { name:"María L.",  age:"28", treatment:isEn?"Whitening":"Blanqueamiento",  stage:isEn?"Active":"Activo",    color:"#5EC4B0", sessions:2  },
    { name:"Roberto S.",age:"52", treatment:isEn?"Oral surgery":"Cir. oral",    stage:isEn?"Pre-op":"Preop.",    color:"#FFA03C", sessions:3  },
    { name:"Claudia M.",age:"41", treatment:isEn?"Maintenance":"Mantenimiento", stage:isEn?"Control":"Control",  color:"#3B9EDB", sessions:12 },
  ];
  return (
    <div style={{ background:"#F0F6FC", borderRadius:12, overflow:"hidden", border:"1px solid rgba(59,158,219,0.2)", fontFamily:"'DM Mono',monospace" }}>
      {/* Chrome */}
      <div style={{ background:"#E8F2FA", padding:"10px 14px", display:"flex", alignItems:"center", gap:8 }}>
        {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width:9,height:9,borderRadius:"50%",background:c }} />)}
        <div style={{ flex:1, background:"rgba(59,158,219,0.08)", borderRadius:5, padding:"3px 10px", fontSize:9, color:"rgba(20,30,48,0.4)", marginLeft:8 }}>app.dentalsaas.cloud</div>
        <span style={{ fontSize:10 }}>🦷</span>
      </div>
      {/* Header */}
      <div style={{ padding:"12px 14px 8px", display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px solid rgba(59,158,219,0.1)" }}>
        <div>
          <div style={{ fontFamily:"'Syne',sans-serif", fontSize:14, fontWeight:700, color:"#141E30" }}>DentalSaaS</div>
          <div style={{ fontSize:9, color:"rgba(20,30,48,0.4)", marginTop:1 }}>{isEn?"Clinic Dashboard":"Dashboard Clínica"}</div>
        </div>
        <div style={{ background:"rgba(94,196,176,0.12)", color:"#5EC4B0", padding:"3px 10px", borderRadius:100, fontSize:9, border:"1px solid rgba(94,196,176,0.2)" }}>
          {isEn?"● Open":"● Abierto"}
        </div>
      </div>
      {/* KPIs */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, padding:"12px 14px 8px" }}>
        {[
          { l: isEn?"Patients":"Pacientes", v:"124", c:"#3B9EDB" },
          { l: isEn?"Today":"Hoy",          v:"9",   c:"#5EC4B0" },
          { l: isEn?"Billing":"Factur.",    v:"$8.4M",c:"#7C6FFF" },
        ].map((k,i) => (
          <div key={i} style={{ background:`${k.c}0D`, border:`1px solid ${k.c}22`, borderRadius:7, padding:"10px" }}>
            <div style={{ fontSize:8, color:"rgba(20,30,48,0.4)", marginBottom:3 }}>{k.l}</div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:800, color:k.c, lineHeight:1 }}>{k.v}</div>
          </div>
        ))}
      </div>
      {/* Pacientes */}
      <div style={{ padding:"0 14px 14px", display:"flex", flexDirection:"column", gap:6 }}>
        <div style={{ fontSize:8, color:"rgba(20,30,48,0.35)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:2 }}>
          {isEn?"Clinical records":"Historial clínico"}
        </div>
        {patients.map((p,i) => (
          <div key={i} style={{ background:`${p.color}08`, border:`1px solid ${p.color}1A`, borderRadius:7, padding:"8px 10px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <div style={{ width:28,height:28,borderRadius:"50%",background:`${p.color}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:p.color }}>
                {p.name.split(" ").map(n=>n[0]).join("")}
              </div>
              <div>
                <div style={{ fontSize:11, color:"#141E30", fontWeight:600 }}>{p.name} <span style={{ fontSize:9, color:"rgba(20,30,48,0.4)", fontWeight:400 }}>{p.age}{isEn?"yrs":"a"}</span></div>
                <div style={{ fontSize:9, color:"rgba(20,30,48,0.4)", marginTop:1 }}>{p.treatment} · {p.sessions} {isEn?"sess.":"ses."}</div>
              </div>
            </div>
            <div style={{ fontSize:8, padding:"2px 8px", borderRadius:100, background:`${p.color}15`, color:p.color, border:`1px solid ${p.color}30` }}>{p.stage}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── 06 IntraCom — Chat corporativo ── */
const IntraComMobile = ({ lang }) => {
  const isEn = lang === "en";
  const messages = [
    { user:"Laura T.",  avatar:"LT", color:"#6C63FF", time:"09:01", text: isEn?"Good morning team 👋":"Buenos días equipo 👋",                          self:false },
    { user:"Andrés R.", avatar:"AR", color:"#00D4FF", time:"09:03", text: isEn?"Reminder: meeting at 11am":"Reunión a las 11am ⏰",                      self:false },
    { user:"Tú",        avatar:"TÚ", color:"#00ff88", time:"09:05", text: isEn?"Meet link is ready ✅":"El meet ya está listo ✅",                        self:true  },
    { user:"Carlos M.", avatar:"CM", color:"#ffb400", time:"09:10", text: isEn?"I'll share the report before":"Comparto el informe antes 📊",            self:false },
    { user:"Tú",        avatar:"TÚ", color:"#00ff88", time:"09:12", text: isEn?"Thanks! See you all 🙌":"Gracias! Nos vemos 🙌",                         self:true  },
  ];
  const channels = [
    { name:"general",                               unread:0, active:true  },
    { name: isEn?"development":"desarrollo",         unread:3, active:false },
    { name: isEn?"sales":"ventas",                   unread:1, active:false },
  ];
  return (
    <div style={{ background:"#0d0d18", borderRadius:12, overflow:"hidden", border:"1px solid rgba(255,255,255,0.08)", fontFamily:"'DM Mono',monospace" }}>
      {/* Chrome */}
      <div style={{ background:"#111122", padding:"10px 14px", display:"flex", alignItems:"center", gap:8 }}>
        {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width:9,height:9,borderRadius:"50%",background:c }} />)}
        <div style={{ flex:1, background:"rgba(255,255,255,0.04)", borderRadius:5, padding:"3px 10px", fontSize:9, color:"rgba(255,255,255,0.25)", marginLeft:8 }}>intracom.almotores.internal</div>
      </div>
      {/* Channels strip */}
      <div style={{ display:"flex", gap:4, padding:"8px 12px", background:"rgba(255,255,255,0.02)", borderBottom:"1px solid rgba(255,255,255,0.05)", overflowX:"auto" }}>
        {channels.map((ch,i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:5, padding:"4px 10px", borderRadius:6, background:ch.active?"rgba(108,99,255,0.15)":"transparent", border:`1px solid ${ch.active?"rgba(108,99,255,0.3)":"rgba(255,255,255,0.06)"}`, flexShrink:0 }}>
            <span style={{ fontSize:9, color:ch.active?"#8B5CF6":"rgba(255,255,255,0.3)" }}># {ch.name}</span>
            {ch.unread > 0 && <span style={{ background:"#8B5CF6", color:"white", borderRadius:"50%", width:14, height:14, display:"flex", alignItems:"center", justifyContent:"center", fontSize:7, fontWeight:700 }}>{ch.unread}</span>}
          </div>
        ))}
      </div>
      {/* Messages */}
      <div style={{ padding:"10px 12px", display:"flex", flexDirection:"column", gap:8 }}>
        {messages.map((m,i) => (
          <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:7, flexDirection:m.self?"row-reverse":"row" }}>
            <div style={{ width:24,height:24,borderRadius:"50%",background:m.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,fontWeight:700,color:"#080810",flexShrink:0 }}>{m.avatar}</div>
            <div style={{ maxWidth:"72%", display:"flex", flexDirection:"column", alignItems:m.self?"flex-end":"flex-start" }}>
              <div style={{ fontSize:8, color:"rgba(255,255,255,0.25)", marginBottom:2 }}>{m.self?"":m.user+" · "}{m.time}</div>
              <div style={{ background:m.self?"rgba(108,99,255,0.18)":"rgba(255,255,255,0.05)", border:`1px solid ${m.self?"rgba(108,99,255,0.3)":"rgba(255,255,255,0.07)"}`, borderRadius:m.self?"10px 10px 2px 10px":"10px 10px 10px 2px", padding:"6px 10px", fontSize:11, color:"rgba(255,255,255,0.8)", lineHeight:1.5 }}>
                {m.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Input */}
      <div style={{ padding:"8px 12px 12px", display:"flex", gap:6, alignItems:"center" }}>
        <div style={{ flex:1, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:8, padding:"8px 12px", fontSize:11, color:"rgba(255,255,255,0.2)" }}>
          {isEn?"Message #general...":"Mensaje en #general..."}
        </div>
        <div style={{ width:32,height:32,borderRadius:8,background:"rgba(108,99,255,0.25)",border:"1px solid rgba(108,99,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",color:"#8B5CF6",fontSize:14 }}>↑</div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   EXPORT — mapa por category del proyecto
══════════════════════════════════════════════════════ */
export default function MobileProjectCard({ category, lang }) {
  const map = {
    "SyncDealer":         <SyncDealerMobile lang={lang} />,
    "Shaddai Canino":     <ShaddaiMobile    lang={lang} />,
    "Atlas Market Suite": <AtlasMobile      lang={lang} />,
    "Fitness Store":      <FitnessMobile    lang={lang} />,
    "Tienda Fitness":     <FitnessMobile    lang={lang} />,
    "DentalSaaS":         <DentalMobile     lang={lang} />,
    "IntraCom":           <IntraComMobile   lang={lang} />,
  };

  const card = map[category];
  if (!card) return null;

  return (
    <div>
      {/* Indicador de vista previa */}
      <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:10, fontFamily:"'DM Mono',monospace" }}>
        <div style={{ width:5,height:5,borderRadius:"50%",background:"#00ff88",animation:"pulse-wip 2s infinite" }} />
        <span style={{ fontSize:9, color:"rgba(255,255,255,0.25)", letterSpacing:"0.12em", textTransform:"uppercase" }}>
          {lang === "en" ? "Project preview" : "Vista previa del proyecto"}
        </span>
      </div>
      {card}
    </div>
  );
}