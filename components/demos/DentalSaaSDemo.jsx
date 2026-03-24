"use client";
import { useState } from "react";

const screens = {
  dashboard: {
    label: "Dashboard",
    icon: "🦷",
    content: () => (
      <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
          {[
            { label: "Pacientes activos", value: "124", sub: "12 nuevos este mes", color: "#3B9EDB" },
            { label: "Citas hoy", value: "9", sub: "2 pendientes confirmación", color: "#5EC4B0" },
            { label: "Facturación mes", value: "$8.4M", sub: "COP — en curso", color: "#7C6FFF" },
          ].map((k, i) => (
            <div key={i} style={{ background: `${k.color}0D`, border: `1px solid ${k.color}22`, borderRadius: 8, padding: "12px 14px" }}>
              <div style={{ fontSize: 9, color: "rgba(20,30,48,0.45)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>{k.label}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.5rem", fontWeight: 800, color: k.color, lineHeight: 1 }}>{k.value}</div>
              <div style={{ fontSize: 9, color: "rgba(20,30,48,0.4)", marginTop: 4 }}>{k.sub}</div>
            </div>
          ))}
        </div>
        {/* Today's agenda */}
        <div style={{ background: "rgba(59,158,219,0.04)", border: "1px solid rgba(59,158,219,0.12)", borderRadius: 8, overflow: "hidden" }}>
          <div style={{ padding: "10px 14px", borderBottom: "1px solid rgba(59,158,219,0.1)", fontSize: 9, color: "rgba(20,30,48,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Agenda de hoy</div>
          {[
            { name: "Juan Hernández", procedure: "Ortodoncia — revisión brackets", time: "8:30 am", dr: "Dr. Vásquez", ok: true },
            { name: "María López", procedure: "Blanqueamiento dental", time: "9:30 am", dr: "Dra. Morales", ok: true },
            { name: "Roberto Silva", procedure: "Extracción molar", time: "11:00 am", dr: "Dr. Vásquez", ok: false },
            { name: "Claudia Mesa", procedure: "Limpieza + fluorización", time: "2:00 pm", dr: "Dra. Morales", ok: true },
          ].map((a, i) => (
            <div key={i} style={{ padding: "10px 14px", borderBottom: "1px solid rgba(59,158,219,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(59,158,219,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>🦷</div>
                <div>
                  <div style={{ fontSize: 11, color: "#141E30", fontWeight: 600 }}>{a.name}</div>
                  <div style={{ fontSize: 9, color: "rgba(20,30,48,0.45)", marginTop: 2 }}>{a.procedure} · {a.dr}</div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#3B9EDB" }}>{a.time}</div>
                <div style={{ fontSize: 9, marginTop: 3, padding: "2px 8px", borderRadius: 100, background: a.ok ? "rgba(94,196,176,0.12)" : "rgba(255,160,60,0.12)", color: a.ok ? "#5EC4B0" : "#FFA03C" }}>{a.ok ? "Confirmado" : "Pendiente"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  pacientes: {
    label: "Pacientes",
    icon: "👤",
    content: () => (
      <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, color: "#141E30" }}>Historia Clínica</div>
          <button style={{ background: "#3B9EDB", color: "white", border: "none", padding: "6px 14px", borderRadius: 100, fontSize: 9, cursor: "pointer", letterSpacing: "0.08em" }}>+ Nuevo paciente</button>
        </div>
        {[
          { name: "Juan Hernández", age: 34, id: "PAC-001", treatment: "Ortodoncia", stage: "Fase 2", sessions: 8, color: "#7C6FFF" },
          { name: "María López", age: 28, id: "PAC-002", treatment: "Blanqueamiento", stage: "Activo", sessions: 2, color: "#5EC4B0" },
          { name: "Roberto Silva", age: 52, id: "PAC-003", treatment: "Cirugía oral", stage: "Preoperatorio", sessions: 3, color: "#FFA03C" },
          { name: "Claudia Mesa", age: 41, id: "PAC-004", treatment: "Mantenimiento", stage: "Control", sessions: 12, color: "#3B9EDB" },
        ].map((p, i) => (
          <div key={i} style={{ background: `${p.color}08`, border: `1px solid ${p.color}1A`, borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: `${p.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: p.color, fontFamily: "'Syne',sans-serif" }}>
                {p.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#141E30", fontWeight: 700 }}>{p.name} <span style={{ fontSize: 9, color: "rgba(20,30,48,0.4)", fontWeight: 400 }}>{p.age} años · {p.id}</span></div>
                <div style={{ fontSize: 9, color: "rgba(20,30,48,0.45)", marginTop: 2 }}>{p.treatment} · {p.sessions} sesiones</div>
              </div>
            </div>
            <div style={{ fontSize: 9, padding: "3px 10px", borderRadius: 100, background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}>{p.stage}</div>
          </div>
        ))}
      </div>
    )
  },
  facturacion: {
    label: "Facturación",
    icon: "📋",
    content: () => (
      <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, color: "#141E30" }}>Facturación — Junio 2025</div>
          <button style={{ background: "#3B9EDB", color: "white", border: "none", padding: "6px 14px", borderRadius: 6, fontSize: 9, cursor: "pointer" }}>↓ Exportar PDF</button>
        </div>
        {/* Resumen */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={{ background: "rgba(59,158,219,0.06)", border: "1px solid rgba(59,158,219,0.15)", borderRadius: 8, padding: "12px" }}>
            <div style={{ fontSize: 9, color: "rgba(20,30,48,0.4)", marginBottom: 4 }}>Total facturado</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "#3B9EDB" }}>$8.400.000</div>
          </div>
          <div style={{ background: "rgba(94,196,176,0.06)", border: "1px solid rgba(94,196,176,0.15)", borderRadius: 8, padding: "12px" }}>
            <div style={{ fontSize: 9, color: "rgba(20,30,48,0.4)", marginBottom: 4 }}>Pendiente cobro</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "#5EC4B0" }}>$1.200.000</div>
          </div>
        </div>
        {/* Facturas */}
        {[
          { num: "FAC-0041", patient: "Juan Hernández", procedure: "Ortodoncia mensual", value: "$380.000", status: "Pagado", ok: true },
          { num: "FAC-0042", patient: "María López", procedure: "Blanqueamiento", value: "$850.000", status: "Pagado", ok: true },
          { num: "FAC-0043", patient: "Roberto Silva", procedure: "Consulta + Rx", value: "$180.000", status: "Pendiente", ok: false },
          { num: "FAC-0044", patient: "Claudia Mesa", procedure: "Limpieza profesional", value: "$120.000", status: "Pagado", ok: true },
        ].map((f, i) => (
          <div key={i} style={{ background: f.ok ? "rgba(94,196,176,0.03)" : "rgba(255,160,60,0.04)", border: `1px solid ${f.ok ? "rgba(94,196,176,0.12)" : "rgba(255,160,60,0.15)"}`, borderRadius: 8, padding: "9px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11, color: "#141E30", fontWeight: 600 }}>{f.patient} <span style={{ fontWeight: 400, color: "rgba(20,30,48,0.4)", fontSize: 9 }}>{f.num}</span></div>
              <div style={{ fontSize: 9, color: "rgba(20,30,48,0.4)", marginTop: 2 }}>{f.procedure}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: f.ok ? "#3B9EDB" : "#FFA03C" }}>{f.value}</div>
              <div style={{ fontSize: 9, marginTop: 2, color: f.ok ? "#5EC4B0" : "#FFA03C" }}>{f.status}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
};

export default function DentalSaaSDemo() {
  const [active, setActive] = useState("dashboard");
  const Screen = screens[active].content;

  return (
    <div style={{ background: "#F0F6FC", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(59,158,219,0.2)", fontFamily: "'DM Mono',monospace" }}>
      {/* Browser chrome */}
      <div style={{ background: "#E8F2FA", padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(59,158,219,0.15)" }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        <div style={{ flex: 1, background: "rgba(59,158,219,0.08)", borderRadius: 6, padding: "4px 10px", fontSize: 9, color: "rgba(20,30,48,0.4)", marginLeft: 8 }}>app.dentalsaas.cloud</div>
        <div style={{ fontSize: 9, color: "#3B9EDB", letterSpacing: "0.1em" }}>🦷 DentalSaaS</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "168px 1fr", minHeight: 380 }}>
        {/* Sidebar */}
        <div style={{ background: "#141E30", padding: "16px 10px" }}>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12, paddingLeft: 6 }}>Clínica Dental</div>
          {Object.entries(screens).map(([key, s]) => (
            <button key={key} onClick={() => setActive(key)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "9px 10px", borderRadius: 7, border: "none", background: active === key ? "rgba(59,158,219,0.15)" : "transparent", color: active === key ? "#3B9EDB" : "rgba(255,255,255,0.35)", fontSize: 11, cursor: "pointer", marginBottom: 2, textAlign: "left", fontFamily: "'DM Mono',monospace", transition: "all 0.15s", borderLeft: active === key ? "2px solid #3B9EDB" : "2px solid transparent" }}>
              <span>{s.icon}</span>{s.label}
            </button>
          ))}
          <div style={{ marginTop: 16, padding: "0 6px" }}>
            <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 12 }} />
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", marginBottom: 8 }}>Doctores</div>
            {["Dr. Vásquez","Dra. Morales","Dr. Pineda"].map(d => (
              <div key={d} style={{ fontSize: 9, color: "rgba(255,255,255,0.28)", padding: "4px 0", display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(59,158,219,0.5)" }} />{d}
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div style={{ overflow: "auto", maxHeight: 420 }}>
          <div style={{ padding: "12px 18px", borderBottom: "1px solid rgba(59,158,219,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, color: "#141E30" }}>{screens[active].label}</div>
            <div style={{ fontSize: 9, color: "#5EC4B0", background: "rgba(94,196,176,0.1)", padding: "3px 10px", borderRadius: 100, border: "1px solid rgba(94,196,176,0.2)" }}>● Consultorio abierto</div>
          </div>
          <Screen />
        </div>
      </div>
    </div>
  );
}