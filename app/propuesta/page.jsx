"use client";
import Reveal from "@/components/Reveal";
import { PROJECT_TYPES, DEFAULT_TRM } from "@/lib/quoterConfig";
import {
  FiCheckCircle,
  FiTrendingUp,
  FiUsers,
  FiCalendar,
  FiBarChart2,
  FiDollarSign,
  FiShield,
} from "react-icons/fi";

const SectionLabel = ({ label }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "clamp(10px,1vw,16px)" }}>
    <span style={{ display: "block", width: "clamp(28px,2.5vw,44px)", height: 1, background: "linear-gradient(90deg,#8B5CF6,transparent)", flexShrink: 0 }} />
    <span className="vo-label" style={{ letterSpacing: "0.2em" }}>{label}</span>
  </div>
);

const Divider = () => (
  <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(139,92,246,0.2),transparent)", margin: "clamp(56px,6vw,96px) 0" }} />
);

const SectionHead = ({ icon: Icon, label, title }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "clamp(20px,2.2vw,32px)" }}>
    <div
      style={{
        width: 46, height: 46, borderRadius: 14, flexShrink: 0,
        background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.25)",
        display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD",
      }}
    >
      <Icon size={20} />
    </div>
    <div>
      <SectionLabel label={label} />
      <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(22px,2.6vw,32px)", fontWeight: 800, color: "white", margin: 0 }}>{title}</h2>
    </div>
  </div>
);

const proofItems = [
  "Sitio web profesional en producción",
  "Facebook + Instagram conectados en un solo Business Manager",
  "Método de pago configurado en la cuenta publicitaria",
  "6 piezas creativas listas — 3 publicadas, 3 para pauta paga",
  "Formulario de contacto capturando leads directo al correo",
  "Política de privacidad publicada — requisito de Meta",
];

const budgetRows = [
  { concept: "Dominio (.com)", cost: "~$15 USD/año", note: "Ya pagado, activo" },
  { concept: "Hosting (Vercel)", cost: "$0", note: "Plan gratuito, cubre el tráfico actual" },
  { concept: "Correo profesional", cost: "~$7 USD/mes", note: "Opcional, no urgente" },
];

const flagship = PROJECT_TYPES.find((p) => p.id === "bot");
const pricingSample = PROJECT_TYPES.filter((p) => ["bot", "landing", "automation", "saas"].includes(p.id));

const timeline = [
  { when: "SEMANA 1", title: "Píxel activo + campaña de prueba", body: "Se conecta el seguimiento de conversiones y corren los primeros $250.000–400.000 COP en los 3 anuncios." },
  { when: "SEMANA 2", title: "Evaluación y ajuste", body: "Revisamos costo por lead. Si va bien, escalamos presupuesto 20-30% — nunca de golpe." },
  { when: "MES 1", title: "Primeros clientes cerrados", body: "Ajustamos mensaje y segmentación según qué anuncio convirtió mejor." },
  { when: "MES 2+", title: "Presupuesto sostenido", body: "Si el modelo funciona, definimos un presupuesto mensual fijo entre los dos." },
];

export default function Propuesta() {
  return (
    <div style={{ padding: "clamp(48px,5vw,80px) 0 clamp(60px,6vw,100px)", position: "relative" }}>
      <div
        style={{
          position: "fixed", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: 900, height: 500, pointerEvents: "none",
          background: "radial-gradient(ellipse,rgba(139,92,246,0.06) 0%,transparent 70%)", zIndex: 0,
        }}
      />

      <div className="vo-container" style={{ maxWidth: "min(900px,94vw)", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px,5vw,64px)" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SectionLabel label="Plan de Lanzamiento · Uso Interno" />
            </div>
            <h1
              style={{
                fontFamily: "'Syne',sans-serif", fontWeight: 800,
                fontSize: "clamp(30px,4.6vw,52px)", lineHeight: 1.08, letterSpacing: "-0.01em",
                color: "white", margin: "0 auto", maxWidth: 680,
              }}
            >
              Lo que necesitamos para encender la agencia
            </h1>
            <p style={{ color: "rgba(232,232,240,0.6)", fontSize: "clamp(14px,1vw,17px)", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7 }}>
              Un resumen claro de en qué se invierte, cómo se recupera, y quién hace qué — para que arranquemos con la misma información.
            </p>

            <div
              className="vo-surface"
              style={{ maxWidth: 480, margin: "clamp(28px,3vw,40px) auto 0", padding: "clamp(24px,2.6vw,32px)" }}
            >
              <span className="vo-label">Inversión para arrancar hoy</span>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "clamp(28px,4.2vw,40px)", color: "#C4B5FD", margin: "10px 0 8px", fontWeight: 500 }}>
                $250.000 – $400.000 COP
              </div>
              <p style={{ fontSize: "clamp(12px,0.85vw,14px)", color: "rgba(232,232,240,0.55)", margin: 0 }}>
                ≈ $60–95 USD · pauta publicitaria de prueba, 5-7 días. Es prácticamente todo lo que se necesita — el resto de la infraestructura ya está cubierta.
              </p>
            </div>
          </div>
        </Reveal>

        <Divider />

        <Reveal>
          <SectionHead icon={FiCheckCircle} label="Punto de partida" title="Dónde estamos parados hoy" />
          <p style={{ color: "rgba(232,232,240,0.6)", fontSize: "clamp(13px,0.92vw,15px)", maxWidth: 600, marginBottom: 20 }}>
            Esto no arranca desde cero — ya está construido y listo para recibir tráfico pagado:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="propuesta-2col">
            {proofItems.map((item, i) => (
              <div key={i} className="vo-card" style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 16px" }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(0,255,136,0.12)", border: "1px solid rgba(0,255,136,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <FiCheckCircle size={11} color="#00ff88" />
                </div>
                <span style={{ fontSize: 13.5, color: "white" }}>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Divider />

        <Reveal>
          <SectionHead icon={FiDollarSign} label="Presupuesto" title="En qué se invierte el dinero" />
          <p style={{ color: "rgba(232,232,240,0.6)", fontSize: "clamp(13px,0.92vw,15px)", maxWidth: 600, marginBottom: 20 }}>
            La mayoría de la infraestructura ya está paga o corre en un plan gratuito — el dinero nuevo va casi todo directo a pauta.
          </p>
          <div className="vo-card" style={{ overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr>
                  {["Concepto", "Costo", "Estado"].map((h) => (
                    <th key={h} style={{ textAlign: "left", fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "0.1em", color: "rgba(232,232,240,0.4)", padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {budgetRows.map((r, i) => (
                  <tr key={i}>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "white", fontWeight: 500 }}>{r.concept}</td>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "'DM Mono',monospace", color: "white" }}>{r.cost}</td>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(232,232,240,0.55)" }}>{r.note}</td>
                  </tr>
                ))}
                <tr style={{ background: "rgba(139,92,246,0.08)" }}>
                  <td style={{ padding: "12px 16px", color: "#C4B5FD", fontWeight: 600 }}>Pauta publicitaria (prueba)</td>
                  <td style={{ padding: "12px 16px", fontFamily: "'DM Mono',monospace", color: "#C4B5FD", fontWeight: 600 }}>$250.000–400.000 COP</td>
                  <td style={{ padding: "12px 16px", color: "#C4B5FD", fontWeight: 600 }}>← Esto es lo que se pide ahora</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ display: "flex", gap: 12, padding: "16px 18px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(139,92,246,0.06)", fontSize: 13, marginTop: 18, color: "rgba(232,232,240,0.7)" }}>
            <strong style={{ color: "white", flexShrink: 0 }}>En corto:</strong>
            <span>no se necesita plata para hosting ni dominio — eso ya corre. Todo lo que se invierta ahora es directamente para conseguir clientes.</span>
          </div>
        </Reveal>

        <Divider />

        <Reveal>
          <SectionHead icon={FiTrendingUp} label="Retorno" title="Cómo se recupera" />
          <p style={{ color: "rgba(232,232,240,0.6)", fontSize: "clamp(13px,0.92vw,15px)", maxWidth: 600, marginBottom: 20 }}>
            El producto que más estamos empujando en la pauta es el {flagship.label} — con cerrar un solo cliente, la inversión de la prueba se cubre varias veces:
          </p>
          <div className="vo-card" style={{ overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr>
                  {["Servicio", "Precio base", "≈ COP"].map((h) => (
                    <th key={h} style={{ textAlign: "left", fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "0.1em", color: "rgba(232,232,240,0.4)", padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingSample.map((p) => (
                  <tr key={p.id} style={p.id === "bot" ? { background: "rgba(139,92,246,0.08)" } : undefined}>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", color: p.id === "bot" ? "#C4B5FD" : "white", fontWeight: p.id === "bot" ? 600 : 500 }}>
                      {p.icon} {p.label}
                    </td>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "'DM Mono',monospace", color: p.id === "bot" ? "#C4B5FD" : "white" }}>${p.price} USD</td>
                    <td style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "'DM Mono',monospace", color: "rgba(232,232,240,0.6)" }}>${(p.price * DEFAULT_TRM).toLocaleString("es-CO")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 14, fontSize: 12.5, color: "rgba(232,232,240,0.45)" }}>
            Un solo {flagship.label} cerrado (${(flagship.price * DEFAULT_TRM).toLocaleString("es-CO")} COP) cubre entre 5 y 8 veces el presupuesto completo de la prueba publicitaria.
          </p>
        </Reveal>

        <Divider />

        <Reveal>
          <SectionHead icon={FiUsers} label="Equipo" title="Quién hace qué" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="propuesta-2col">
            <div className="vo-card" style={{ padding: "22px 24px" }}>
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: "white", display: "block", marginBottom: 4 }}>Mauricio</span>
              <span className="vo-label" style={{ color: "#C4B5FD", display: "block", marginBottom: 14 }}>Ejecución</span>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {["Desarrollo y mantenimiento del sitio", "Diseño de piezas y contenido", "Gestión de campañas en Meta Ads", "Atención directa a clientes y leads", "Entrega de los proyectos vendidos"].map((t) => (
                  <li key={t} style={{ fontSize: 13, color: "rgba(232,232,240,0.6)", lineHeight: 1.75, marginBottom: 3 }}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="vo-card" style={{ padding: "22px 24px" }}>
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: "white", display: "block", marginBottom: 4 }}>Socio</span>
              <span className="vo-label" style={{ color: "#C4B5FD", display: "block", marginBottom: 14 }}>Capital &amp; Facturación</span>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {["Aporta el presupuesto inicial de pauta", "RUT para facturación formal a clientes", "Seguimiento del gasto publicitario", "Reparto de ingresos — a definir juntos"].map((t) => (
                  <li key={t} style={{ fontSize: 13, color: "rgba(232,232,240,0.6)", lineHeight: 1.75, marginBottom: 3 }}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Divider />

        <Reveal>
          <SectionHead icon={FiCalendar} label="Fases" title="Cronograma" />
          <div className="vo-card" style={{ padding: "8px clamp(20px,2.5vw,28px)" }}>
            {timeline.map((t, i) => (
              <div key={t.when} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 18, padding: "18px 0", borderBottom: i < timeline.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11.5, color: "#C4B5FD", letterSpacing: "0.04em", paddingTop: 2 }}>{t.when}</span>
                <div>
                  <h4 style={{ fontSize: 14.5, fontWeight: 600, color: "white", margin: "0 0 4px" }}>{t.title}</h4>
                  <p style={{ fontSize: 13, color: "rgba(232,232,240,0.55)", margin: 0, lineHeight: 1.7 }}>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Divider />

        <Reveal>
          <SectionHead icon={FiBarChart2} label="Confianza" title="Cómo se reporta" />
          <p style={{ color: "rgba(232,232,240,0.6)", fontSize: "clamp(13px,0.92vw,15px)", maxWidth: 600 }}>
            Transparencia total mientras corre la prueba: acceso compartido a Ads Manager, y reporte de gasto + leads + costo por lead cada 3-4 días — nadie invierte a ciegas.
          </p>
          <div style={{ display: "flex", gap: 12, padding: "16px 18px", borderRadius: 12, border: "1px solid rgba(245,166,35,0.3)", background: "rgba(245,166,35,0.06)", fontSize: 13, marginTop: 18, color: "rgba(232,232,240,0.7)" }}>
            <FiShield size={16} color="#F5A623" style={{ flexShrink: 0, marginTop: 1 }} />
            <span><strong style={{ color: "white" }}>Nota:</strong> todos los montos aquí son estimados/referenciales según el mercado colombiano en Meta Ads — el gasto real se ajusta con los primeros resultados, no es una promesa cerrada.</span>
          </div>
        </Reveal>
      </div>

      <style>{`@media(max-width:640px){ .propuesta-2col { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
