"use client";
import { useState } from "react";

export default function ShaddaiDemo({ lang = "es" }) {
  const isEn = lang === "en";
  const [active, setActive] = useState("dashboard");

  const T = {
    spaLabel:    isEn ? "Canine Spa"          : "Spa Canino",
    open:        isEn ? "● Open"              : "● Abierto",
    tabDash:     isEn ? "Dashboard"           : "Dashboard",
    tabPets:     isEn ? "Pets"                : "Mascotas",
    tabCash:     isEn ? "Cash"                : "Caja",
    kpi1l:       isEn ? "Active pets"         : "Mascotas activas",
    kpi1s:       isEn ? "registered this month" : "registradas este mes",
    kpi2l:       isEn ? "Appointments today"  : "Citas hoy",
    kpi2s:       isEn ? "3 pending confirmation" : "3 pendientes confirmación",
    kpi3l:       isEn ? "Daily revenue"       : "Ingreso del día",
    kpi3s:       isEn ? "COP — open register" : "COP — caja abierta",
    upcoming:    isEn ? "Upcoming appointments" : "Próximas citas",
    confirmed:   isEn ? "Confirmed"           : "Confirmado",
    pending:     isEn ? "Pending"             : "Pendiente",
    records:     isEn ? "Records"             : "Expedientes",
    newPet:      isEn ? "+ New pet"           : "+ Nueva mascota",
    monthly:     isEn ? "Monthly"             : "Mensual",
    perService:  isEn ? "Per service"         : "Por servicio",
    vip:         isEn ? "VIP"                 : "VIP",
    movements:   isEn ? "Daily movements"     : "Movimientos del día",
    cashSummary: isEn ? "Cash summary"        : "Resumen caja",
    totalIn:     isEn ? "Total received"      : "Total ingresado",
    cash:        isEn ? "💵 Cash"             : "💵 Efectivo",
    transfer:    isEn ? "📲 Transfer"         : "📲 Transferencia",
    card:        isEn ? "💳 Card"             : "💳 Datáfono",
    fullReport:  isEn ? "📊 View full report" : "📊 Ver reporte completo",
    paid:        isEn ? "✓ Paid"              : "✓ Pagado",
    stPending:   isEn ? "⚠ Pending"          : "⚠ Pendiente",
    services: {
      bath:  isEn ? "Bath + trim"         : "Baño + corte",
      vet:   isEn ? "Vet consultation"    : "Consulta veterinaria",
      groom: isEn ? "Aesthetic cut"       : "Corte estético",
      hotel: isEn ? "Boarding"            : "Guardería",
    },
    activeServices: isEn
      ? ["Grooming","Boarding","Veterinary","Hotel"]
      : ["Peluquería","Guardería","Veterinaria","Hotel"],
    visits:      isEn ? "visits"           : "visitas",
    yrs:         isEn ? "yrs"              : "años",
    expiredPlan: isEn ? "Expired plan"     : "Plan vencido",
  };

  const screens = {
    dashboard: {
      label: T.tabDash, icon: "🐾",
      content: () => (
        <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
            {[
              { label: T.kpi1l, value: "84",   sub: T.kpi1s, color: "#D4892A" },
              { label: T.kpi2l, value: "12",   sub: T.kpi2s, color: "#7A9E6E" },
              { label: T.kpi3l, value: "$840k", sub: T.kpi3s, color: "#F0B050" },
            ].map((k, i) => (
              <div key={i} style={{ background: "rgba(212,137,42,0.07)", border: "1px solid rgba(212,137,42,0.15)", borderRadius: 8, padding: "12px 14px" }}>
                <div style={{ fontSize: 9, color: "rgba(44,26,14,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>{k.label}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 900, color: k.color, lineHeight: 1 }}>{k.value}</div>
                <div style={{ fontSize: 9, color: "rgba(44,26,14,0.4)", marginTop: 4 }}>{k.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(212,137,42,0.04)", border: "1px solid rgba(212,137,42,0.12)", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ padding: "10px 14px", borderBottom: "1px solid rgba(212,137,42,0.1)", fontSize: 9, color: "rgba(44,26,14,0.45)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{T.upcoming}</div>
            {[
              { pet: "🐕 Max",  breed: "Golden Retriever", owner: "Carlos Ríos",  service: T.services.bath,  time: "9:00 am",  ok: true },
              { pet: "🐈 Luna", breed: "Siamese",          owner: "Ana Gómez",    service: T.services.vet,   time: "10:30 am", ok: false },
              { pet: "🐩 Coco", breed: "Poodle",           owner: "Pedro Silva",  service: T.services.groom, time: "11:00 am", ok: true },
              { pet: "🐕 Rocky",breed: "French Bulldog",   owner: "María Torres", service: T.services.hotel, time: "12:00 pm", ok: true },
            ].map((a, i) => (
              <div key={i} style={{ padding: "10px 14px", borderBottom: "1px solid rgba(212,137,42,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ fontSize: 18 }}>{a.pet.split(" ")[0]}</div>
                  <div>
                    <div style={{ fontSize: 11, color: "#2C1A0E", fontWeight: 600 }}>{a.pet.split(" ").slice(1).join(" ")} — {a.breed}</div>
                    <div style={{ fontSize: 9, color: "rgba(44,26,14,0.45)", marginTop: 2 }}>{a.owner} · {a.service}</div>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#D4892A" }}>{a.time}</div>
                  <div style={{ fontSize: 9, marginTop: 3, padding: "2px 8px", borderRadius: 100, background: a.ok ? "rgba(74,103,65,0.12)" : "rgba(212,137,42,0.15)", color: a.ok ? "#4A6741" : "#A0673A" }}>
                    {a.ok ? T.confirmed : T.pending}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    mascotas: {
      label: T.tabPets, icon: "🦮",
      content: () => (
        <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 14, fontWeight: 700, color: "#2C1A0E" }}>{T.records}</div>
            <button style={{ background: "#2C1A0E", color: "#F5EFE6", border: "none", padding: "6px 14px", borderRadius: 100, fontSize: 9, cursor: "pointer", letterSpacing: "0.08em" }}>{T.newPet}</button>
          </div>
          {[
            { emoji: "🐕", name: "Max",   breed: "Golden Retriever", age: `3 ${T.yrs}`, owner: "Carlos Ríos",  visits: 12, plan: T.monthly,    planColor: "#4A6741" },
            { emoji: "🐈", name: "Luna",  breed: "Siamese",          age: `2 ${T.yrs}`, owner: "Ana Gómez",    visits: 5,  plan: T.perService, planColor: "#D4892A" },
            { emoji: "🐩", name: "Coco",  breed: "Poodle Toy",       age: `5 ${T.yrs}`, owner: "Pedro Silva",  visits: 28, plan: T.vip,        planColor: "#A0673A" },
            { emoji: "🐕", name: "Rocky", breed: "French Bulldog",   age: `1 ${T.yrs}`, owner: "Juan Pérez",   visits: 3,  plan: T.perService, planColor: "#D4892A" },
          ].map((p, i) => (
            <div key={i} style={{ background: "rgba(212,137,42,0.04)", border: "1px solid rgba(212,137,42,0.12)", borderRadius: 8, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, background: "rgba(212,137,42,0.1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{p.emoji}</div>
                <div>
                  <div style={{ fontSize: 12, color: "#2C1A0E", fontWeight: 700 }}>{p.name} <span style={{ fontWeight: 400, color: "rgba(44,26,14,0.5)", fontSize: 10 }}>{p.breed}</span></div>
                  <div style={{ fontSize: 9, color: "rgba(44,26,14,0.4)", marginTop: 2 }}>{p.age} · {p.owner} · {p.visits} {T.visits}</div>
                </div>
              </div>
              <div style={{ fontSize: 9, padding: "3px 10px", borderRadius: 100, background: `${p.planColor}15`, color: p.planColor, border: `1px solid ${p.planColor}30` }}>{p.plan}</div>
            </div>
          ))}
        </div>
      ),
    },
    caja: {
      label: T.tabCash, icon: "💰",
      content: () => (
        <div style={{ padding: "18px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div>
            <div style={{ fontSize: 9, color: "rgba(44,26,14,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{T.movements}</div>
            {[
              { pet: `🐕 Max — ${T.services.bath}`,  owner: `Carlos Ríos · 9:00 am`,       amount: "$120.000", ok: true },
              { pet: `🐩 Luna — ${T.services.groom}`, owner: `Ana Gómez · 10:30 am`,        amount: "$80.000",  ok: true },
              { pet: `🦮 Rocky — ${T.services.hotel}`,owner: `Juan Pérez · ${T.expiredPlan}`, amount: "$320.000", ok: false },
            ].map((m, i) => (
              <div key={i} style={{ background: m.ok ? "rgba(212,137,42,0.05)" : "rgba(255,100,80,0.05)", border: `1px solid ${m.ok ? "rgba(212,137,42,0.15)" : "rgba(255,100,80,0.15)"}`, borderRadius: 8, padding: "10px 12px", marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 11, color: "#2C1A0E", fontWeight: 600 }}>{m.pet}</div>
                  <div style={{ fontSize: 9, color: "rgba(44,26,14,0.4)", marginTop: 2 }}>{m.owner}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 12, color: m.ok ? "#D4892A" : "#ff8080", fontWeight: 700 }}>{m.amount}</div>
                  <div style={{ fontSize: 8, marginTop: 2, color: m.ok ? "#4A6741" : "#ff8080" }}>{m.ok ? T.paid : T.stPending}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 9, color: "rgba(44,26,14,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{T.cashSummary}</div>
            <div style={{ background: "rgba(212,137,42,0.06)", border: "1px solid rgba(212,137,42,0.15)", borderRadius: 8, padding: "14px" }}>
              <div style={{ fontSize: 9, color: "rgba(44,26,14,0.4)", marginBottom: 4 }}>{T.totalIn}</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", fontWeight: 900, color: "#D4892A", lineHeight: 1 }}>$840.000</div>
              <div style={{ height: 1, background: "rgba(44,26,14,0.08)", margin: "12px 0" }} />
              {[[T.cash,"$320.000"],[T.transfer,"$345.000"],[T.card,"$175.000"]].map(([l,v]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 9, color: "rgba(44,26,14,0.45)" }}>{l}</span>
                  <span style={{ fontSize: 9, fontWeight: 600, color: "#2C1A0E" }}>{v}</span>
                </div>
              ))}
            </div>
            <button style={{ width: "100%", marginTop: 10, background: "rgba(44,26,14,0.06)", border: "1px solid rgba(44,26,14,0.1)", color: "rgba(44,26,14,0.5)", padding: 10, borderRadius: 7, fontSize: 9, cursor: "pointer" }}>{T.fullReport}</button>
          </div>
        </div>
      ),
    },
  };

  const Screen = screens[active].content;

  return (
    <div style={{ background: "#FDFAF6", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(212,137,42,0.2)", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ background: "#F5EFE6", padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(160,103,58,0.15)" }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        <div style={{ flex: 1, background: "rgba(44,26,14,0.06)", borderRadius: 6, padding: "4px 10px", fontSize: 9, color: "rgba(44,26,14,0.35)", marginLeft: 8 }}>app.shaddaicanino.com</div>
        <div style={{ fontSize: 9, color: "#D4892A", letterSpacing: "0.1em" }}>🐾 Shaddai Canino</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "168px 1fr", minHeight: 380 }}>
        <div style={{ background: "#2C1A0E", padding: "16px 10px" }}>
          <div style={{ fontSize: 8, color: "rgba(245,239,230,0.3)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12, paddingLeft: 6 }}>{T.spaLabel}</div>
          {Object.entries(screens).map(([key, s]) => (
            <button key={key} onClick={() => setActive(key)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "9px 10px", borderRadius: 7, border: "none", background: active === key ? "rgba(212,137,42,0.2)" : "transparent", color: active === key ? "#F0B050" : "rgba(245,239,230,0.35)", fontSize: 11, cursor: "pointer", marginBottom: 2, textAlign: "left", fontFamily: "'DM Sans',sans-serif", transition: "all 0.15s", borderLeft: active === key ? "2px solid #D4892A" : "2px solid transparent" }}>
              <span>{s.icon}</span>{s.label}
            </button>
          ))}
          <div style={{ marginTop: 16, padding: "0 6px" }}>
            <div style={{ height: 1, background: "rgba(245,239,230,0.08)", marginBottom: 12 }} />
            <div style={{ fontSize: 9, color: "rgba(245,239,230,0.2)", marginBottom: 8 }}>{isEn ? "Active services" : "Servicios activos"}</div>
            {T.activeServices.map(s => (
              <div key={s} style={{ fontSize: 9, color: "rgba(245,239,230,0.3)", padding: "4px 0", display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(212,137,42,0.5)" }} />{s}
              </div>
            ))}
          </div>
        </div>
        <div style={{ overflow: "auto", maxHeight: 420 }}>
          <div style={{ padding: "12px 18px", borderBottom: "1px solid rgba(212,137,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 13, fontWeight: 700, color: "#2C1A0E" }}>{screens[active].label}</div>
            <div style={{ fontSize: 9, color: "#D4892A", background: "rgba(212,137,42,0.1)", padding: "3px 10px", borderRadius: 100, border: "1px solid rgba(212,137,42,0.2)" }}>{T.open}</div>
          </div>
          <Screen />
        </div>
      </div>
    </div>
  );
}