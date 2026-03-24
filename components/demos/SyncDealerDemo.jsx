"use client";
import { useState } from "react";

const screens = {
  dashboard: {
    label: "Dashboard",
    icon: "◈",
    content: () => (
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: 16 }}>
        {/* KPI row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
          {[
            { label: "Ventas del mes", value: "47", sub: "+12% vs mes anterior", color: "#6C63FF" },
            { label: "Comisiones totales", value: "$18.4M", sub: "COP — nómina actual", color: "#00D4FF" },
            { label: "Bonos generados", value: "9", sub: "asesores con bono activo", color: "#00ff88" },
          ].map((k, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "14px 16px" }}>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>{k.label}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.6rem", fontWeight: 800, color: k.color, lineHeight: 1 }}>{k.value}</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>{k.sub}</div>
            </div>
          ))}
        </div>
        {/* Table */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, overflow: "hidden" }}>
          <div style={{ padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 80px", gap: 8 }}>
            {["Asesor","Marca","Ventas","Comisión","Estado"].map(h => (
              <div key={h} style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{h}</div>
            ))}
          </div>
          {[
            { name: "Carlos Mendez", marca: "KIA", ventas: 8, comision: "$2.4M", estado: "bono", color: "#00ff88" },
            { name: "Laura Torres", marca: "Renault", ventas: 6, comision: "$1.8M", estado: "base", color: "#6C63FF" },
            { name: "Andrés Ríos", marca: "VW", ventas: 11, comision: "$3.3M", estado: "bono", color: "#00ff88" },
            { name: "Milena Vargas", marca: "JAC", ventas: 4, comision: "$1.2M", estado: "base", color: "#6C63FF" },
            { name: "Felipe Castro", marca: "KIA", ventas: 9, comision: "$2.7M", estado: "bono", color: "#00ff88" },
          ].map((r, i) => (
            <div key={i} style={{ padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.04)", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 80px", gap: 8, alignItems: "center" }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{r.name}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{r.marca}</div>
              <div style={{ fontSize: 11, color: "#00D4FF", fontWeight: 600 }}>{r.ventas}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{r.comision}</div>
              <div style={{ fontSize: 9, padding: "2px 8px", borderRadius: 100, background: r.estado === "bono" ? "rgba(0,255,136,0.1)" : "rgba(108,99,255,0.1)", color: r.color, border: `1px solid ${r.color}30`, textAlign: "center" }}>{r.estado === "bono" ? "✓ Bono" : "Base"}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  nomina: {
    label: "Nómina PDF",
    icon: "◉",
    content: () => (
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Generador de nómina</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "white" }}>Mayo 2025</div>
          </div>
          <button style={{ background: "linear-gradient(135deg,#6C63FF,#5a52e0)", border: "none", color: "white", padding: "8px 14px", borderRadius: 6, fontSize: 10, cursor: "pointer", letterSpacing: "0.08em" }}>
            ↓ Exportar PDF
          </button>
        </div>
        {/* PDF preview mock */}
        <div style={{ background: "white", borderRadius: 8, padding: "16px", color: "#111" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, paddingBottom: 12, borderBottom: "2px solid #6C63FF" }}>
            <div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 800, color: "#080810" }}>ALMOTORES S.A.</div>
              <div style={{ fontSize: 9, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" }}>Liquidación de comisiones — Mayo 2025</div>
            </div>
            <div style={{ fontSize: 9, color: "#aaa" }}>Generado por SyncDealer</div>
          </div>
          {[
            { name: "Carlos Mendez", ventas: 8, base: "$800.000", comision: "$2.400.000", bono: "$400.000", total: "$3.600.000" },
            { name: "Andrés Ríos", ventas: 11, base: "$800.000", comision: "$3.300.000", bono: "$600.000", total: "$4.700.000" },
            { name: "Felipe Castro", ventas: 9, base: "$800.000", comision: "$2.700.000", bono: "$400.000", total: "$3.900.000" },
          ].map((r, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 6, padding: "8px 0", borderBottom: "1px solid #f0f0f0", fontSize: 9, color: "#333" }}>
              <div style={{ fontWeight: 600 }}>{r.name}</div>
              <div style={{ textAlign: "center" }}>{r.ventas} vtas</div>
              <div style={{ textAlign: "right" }}>{r.comision}</div>
              <div style={{ textAlign: "right", color: "#6C63FF" }}>{r.bono}</div>
              <div style={{ textAlign: "right", fontWeight: 700 }}>{r.total}</div>
            </div>
          ))}
          <div style={{ marginTop: 10, display: "flex", justifyContent: "flex-end", gap: 16 }}>
            <div style={{ fontSize: 9, color: "#888" }}>Total comisiones</div>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#6C63FF" }}>$18.400.000 COP</div>
          </div>
        </div>
      </div>
    )
  },
  entregas: {
    label: "Entregas",
    icon: "◷",
    content: () => (
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Trazabilidad de vehículos</div>
        {[
          { placa: "ABC-123", modelo: "KIA Sportage 2024", cliente: "Juan Hernández", asesor: "Carlos M.", estado: "Entregado", color: "#00ff88", fecha: "02 May" },
          { placa: "XYZ-456", modelo: "Renault Duster 2025", cliente: "María López", asesor: "Laura T.", estado: "En trámite", color: "#ffb400", fecha: "05 May" },
          { placa: "QRS-789", modelo: "VW Tiguan 2024", cliente: "Roberto Silva", asesor: "Andrés R.", estado: "Matriculado", color: "#00D4FF", fecha: "08 May" },
          { placa: "DEF-321", modelo: "JAC JS4 2025", cliente: "Claudia Mesa", asesor: "Milena V.", estado: "Pendiente", color: "#ff6060", fecha: "10 May" },
          { placa: "GHI-654", modelo: "KIA Stonic 2024", cliente: "Pedro Arango", asesor: "Felipe C.", estado: "Entregado", color: "#00ff88", fecha: "11 May" },
        ].map((v, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: v.color, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>{v.modelo}</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{v.placa} · {v.cliente} · {v.asesor}</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 9, padding: "2px 8px", borderRadius: 100, background: `${v.color}15`, color: v.color, border: `1px solid ${v.color}30` }}>{v.estado}</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", marginTop: 3 }}>{v.fecha}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
};

export default function SyncDealerDemo() {
  const [active, setActive] = useState("dashboard");
  const Screen = screens[active].content;

  return (
    <div style={{ background: "#0a0a14", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "'DM Mono',monospace" }}>
      {/* Browser chrome */}
      <div style={{ background: "#111120", padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: 6, padding: "4px 10px", fontSize: 9, color: "rgba(255,255,255,0.3)", marginLeft: 8 }}>syncdealear.almotores.com</div>
        <div style={{ fontSize: 9, color: "rgba(108,99,255,0.6)", letterSpacing: "0.1em" }}>SyncDealer v2</div>
      </div>

      {/* App layout */}
      <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", minHeight: 380 }}>
        {/* Sidebar */}
        <div style={{ background: "#080812", borderRight: "1px solid rgba(255,255,255,0.05)", padding: "16px 10px" }}>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12, paddingLeft: 6 }}>Almotores</div>
          {Object.entries(screens).map(([key, s]) => (
            <button key={key} onClick={() => setActive(key)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "9px 10px", borderRadius: 7, border: "none", background: active === key ? "rgba(108,99,255,0.15)" : "transparent", color: active === key ? "#6C63FF" : "rgba(255,255,255,0.35)", fontSize: 11, cursor: "pointer", marginBottom: 2, textAlign: "left", fontFamily: "'DM Mono',monospace", transition: "all 0.15s", borderLeft: active === key ? "2px solid #6C63FF" : "2px solid transparent" }}>
              <span style={{ fontSize: 13 }}>{s.icon}</span>{s.label}
            </button>
          ))}
          <div style={{ marginTop: 16, padding: "0 6px" }}>
            <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: 12 }} />
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", marginBottom: 8 }}>Marcas activas</div>
            {["KIA","Renault","VW","JAC"].map(m => (
              <div key={m} style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", padding: "4px 0", display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(108,99,255,0.5)" }} />{m}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div style={{ overflow: "auto", maxHeight: 420 }}>
          {/* Top bar */}
          <div style={{ padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, color: "white" }}>{screens[active].label}</div>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", padding: "3px 10px", borderRadius: 100, fontSize: 9, border: "1px solid rgba(0,212,255,0.2)" }}>Mayo 2025</div>
              <div style={{ background: "rgba(0,255,136,0.1)", color: "#00ff88", padding: "3px 10px", borderRadius: 100, fontSize: 9, border: "1px solid rgba(0,255,136,0.2)" }}>● En vivo</div>
            </div>
          </div>
          <Screen />
        </div>
      </div>
    </div>
  );
}