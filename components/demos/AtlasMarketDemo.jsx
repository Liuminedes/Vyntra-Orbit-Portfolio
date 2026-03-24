"use client";
import { useState, useEffect } from "react";

const CandleChart = () => {
  const candles = [
    { o: 60, h: 75, l: 55, c: 70, up: true },
    { o: 70, h: 82, l: 65, c: 78, up: true },
    { o: 78, h: 85, l: 70, c: 72, up: false },
    { o: 72, h: 76, l: 62, c: 65, up: false },
    { o: 65, h: 74, l: 60, c: 71, up: true },
    { o: 71, h: 88, l: 68, c: 85, up: true },
    { o: 85, h: 90, l: 78, c: 82, up: false },
    { o: 82, h: 86, l: 75, c: 79, up: false },
    { o: 79, h: 92, l: 76, c: 90, up: true },
    { o: 90, h: 98, l: 84, c: 88, up: false },
    { o: 88, h: 94, l: 82, c: 93, up: true },
    { o: 93, h: 102, l: 88, c: 99, up: true },
  ];
  const scale = (v) => 100 - ((v - 50) / 58) * 82;
  const W = 18;
  return (
    <svg viewBox="0 0 260 100" style={{ width: "100%", height: 90 }}>
      {[0, 25, 50, 75, 100].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y * 0.88 + 5}
          x2="260"
          y2={y * 0.88 + 5}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />
      ))}
      {candles.map((c, i) => {
        const x = i * 21 + 2,
          top = scale(c.h),
          bot = scale(c.l),
          op = scale(c.o),
          cl = scale(c.c);
        const bTop = Math.min(op, cl),
          bH = Math.max(Math.abs(op - cl), 2);
        const col = c.up ? "rgba(72,187,120,0.8)" : "rgba(245,101,101,0.8)";
        return (
          <g key={i}>
            <line
              x1={x + W / 2}
              y1={top}
              x2={x + W / 2}
              y2={bot}
              stroke={col}
              strokeWidth="1.5"
            />
            <rect
              x={x + 2}
              y={bTop}
              width={W - 4}
              height={bH}
              fill={col}
              rx="1"
            />
          </g>
        );
      })}
      <polyline
        points="10,80 31,73 52,76 73,64 94,70 115,55 136,58 157,48 178,42 199,46 220,38 241,32"
        fill="none"
        stroke="rgba(200,150,62,0.6)"
        strokeWidth="1.5"
        strokeDasharray="4,2"
      />
    </svg>
  );
};

export default function AtlasMarketDemo({ lang = "es" }) {
  const isEn = lang === "en";
  const [tab, setTab] = useState("chart");
  const [signalVisible, setSignalVisible] = useState(true);
  const [ticker, setTicker] = useState(67420);

  useEffect(() => {
    const iv = setInterval(
      () => setTicker((t) => t + Math.round((Math.random() - 0.45) * 50)),
      1800,
    );
    return () => clearInterval(iv);
  }, []);

  const signals = [
    {
      pair: "BTC/USDT",
      dir: "CALL",
      conf: 94,
      entry: "$67,420",
      result: "+12.4%",
      win: true,
      time: "5m",
    },
    {
      pair: "ETH/USDT",
      dir: "PUT",
      conf: 87,
      entry: "$3,512",
      result: "+8.1%",
      win: true,
      time: "5m",
    },
    {
      pair: "EUR/USD",
      dir: "CALL",
      conf: 79,
      entry: "1.0842",
      result: "-3.2%",
      win: false,
      time: "1m",
    },
    {
      pair: "GBP/USD",
      dir: "PUT",
      conf: 91,
      entry: "1.2634",
      result: "+10.8%",
      win: true,
      time: "5m",
    },
  ];

  return (
    <>
      <style>{`
    .am-tabs button { font-size:10px; padding:4px 9px; }
    .am-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; }
    .am-chart-dates { display:flex; justify-content:space-between; }
    @media(max-width:700px){
      .am-tabs button { font-size:8px !important; padding:3px 6px !important; }
      .am-stats { grid-template-columns:1fr 1fr !important; }
      .am-chart-dates span { font-size:6px !important; }
    }
  `}</style>
      <div
        style={{
          background: "#050510",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid rgba(108,99,255,0.2)",
          fontFamily: "'DM Mono',monospace",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            background: "#080818",
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            borderBottom: "1px solid rgba(108,99,255,0.1)",
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 6,
              background: "linear-gradient(135deg,#6C63FF,#00D4FF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 700,
              color: "white",
              flexShrink: 0,
            }}
          >
            AM
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "white" }}>
              Atlas Market
            </div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>
              Suite · v2.1
            </div>
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              gap: 6,
              alignItems: "center",
            }}
          >
            {[
              ["chart", isEn ? "Chart" : "Gráfico"],
              ["signals", isEn ? "AI Signals" : "Señales IA"],
              ["portfolio", "Portfolio"],
            ].map(([k, l]) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                style={{
                  padding: "4px 10px",
                  borderRadius: 6,
                  border: "none",
                  background:
                    tab === k ? "rgba(108,99,255,0.15)" : "transparent",
                  color: tab === k ? "#8B5CF6" : "rgba(255,255,255,0.3)",
                  fontSize: 10,
                  cursor: "pointer",
                  fontFamily: "'DM Mono',monospace",
                  transition: "all .15s",
                }}
              >
                {l}
              </button>
            ))}
            <div
              style={{
                background: "rgba(0,255,136,0.08)",
                color: "#00ff88",
                padding: "3px 8px",
                borderRadius: 100,
                fontSize: 8,
                border: "1px solid rgba(0,255,136,0.2)",
              }}
            >
              ● {isEn ? "Live" : "En vivo"}
            </div>
          </div>
        </div>

        <div style={{ padding: 14, minHeight: 380 }}>
          {tab === "chart" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: 16,
                      fontWeight: 800,
                      color: "white",
                    }}
                  >
                    BTC/USDT
                  </div>
                  <div
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#00ff88",
                    }}
                  >
                    ${ticker.toLocaleString()}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      background: "rgba(0,255,136,0.1)",
                      color: "#00ff88",
                      padding: "2px 8px",
                      borderRadius: 4,
                    }}
                  >
                    ▲ +2.34%
                  </div>
                </div>
                <div style={{ display: "flex", gap: 4 }}>
                  {["1m", "5m", "15m", "1h"].map((t) => (
                    <button
                      key={t}
                      style={{
                        padding: "3px 8px",
                        borderRadius: 4,
                        border: "1px solid rgba(255,255,255,0.08)",
                        background:
                          t === "5m" ? "rgba(108,99,255,0.2)" : "transparent",
                        color:
                          t === "5m" ? "#8B5CF6" : "rgba(255,255,255,0.25)",
                        fontSize: 9,
                        cursor: "pointer",
                        fontFamily: "'DM Mono',monospace",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 8,
                  padding: "10px 12px",
                }}
              >
                <CandleChart />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 4,
                  }}
                >
                  {[
                    "Feb 20",
                    "Feb 25",
                    "Mar 1",
                    "Mar 5",
                    "Mar 10",
                    "Mar 15",
                  ].map((d) => (
                    <span
                      key={d}
                      style={{ fontSize: 7, color: "rgba(255,255,255,0.2)" }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              {signalVisible && (
                <div
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(108,99,255,0.12),rgba(0,212,255,0.06))",
                    border: "1px solid rgba(108,99,255,0.3)",
                    borderRadius: 8,
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#8B5CF6",
                        animation: "pulse-wip 1.5s infinite",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: 10,
                          color: "#8B5CF6",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                        }}
                      >
                        {isEn ? "AI SIGNAL DETECTED" : "SEÑAL IA DETECTADA"}
                      </div>
                      <div
                        style={{
                          fontSize: 9,
                          color: "rgba(255,255,255,0.4)",
                          marginTop: 1,
                        }}
                      >
                        {isEn
                          ? "Bullish pattern · 94% confidence · 5min window"
                          : "Patrón alcista · Confianza 94% · Ventana 5 min"}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      style={{
                        background: "rgba(0,255,136,0.15)",
                        border: "1px solid rgba(0,255,136,0.3)",
                        color: "#00ff88",
                        padding: "6px 14px",
                        borderRadius: 6,
                        fontSize: 10,
                        fontWeight: 700,
                        cursor: "pointer",
                        fontFamily: "'DM Mono',monospace",
                      }}
                    >
                      CALL ↑
                    </button>
                    <button
                      onClick={() => setSignalVisible(false)}
                      style={{
                        background: "none",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.3)",
                        padding: "6px 10px",
                        borderRadius: 6,
                        fontSize: 10,
                        cursor: "pointer",
                      }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: 8,
                }}
              >
                {[
                  {
                    l: isEn ? "Open" : "Apertura",
                    v: "$65,890",
                    c: "rgba(255,255,255,0.5)",
                  },
                  { l: isEn ? "High" : "Máx", v: "$68,240", c: "#00ff88" },
                  { l: isEn ? "Low" : "Mín", v: "$64,120", c: "#ff6060" },
                  { l: "Vol 24h", v: "$12.4B", c: "#00D4FF" },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: 6,
                      padding: "8px 10px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 8,
                        color: "rgba(255,255,255,0.25)",
                        marginBottom: 3,
                      }}
                    >
                      {s.l}
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: s.c }}>
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "signals" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "white",
                }}
              >
                {isEn ? "AI Signal Engine" : "Motor de Señales IA"}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: 8,
                }}
              >
                {[
                  { l: "Win Rate", v: "78.4%", c: "#00ff88" },
                  {
                    l: isEn ? "Today's signals" : "Señales hoy",
                    v: "24",
                    c: "#00D4FF",
                  },
                  { l: "ROI Mensual", v: "+34.2%", c: "#8B5CF6" },
                ].map((k, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 8,
                      padding: "12px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontSize: 20,
                        fontWeight: 800,
                        color: k.c,
                      }}
                    >
                      {k.v}
                    </div>
                    <div
                      style={{
                        fontSize: 8,
                        color: "rgba(255,255,255,0.3)",
                        marginTop: 3,
                      }}
                    >
                      {k.l}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div
                  style={{
                    fontSize: 8,
                    color: "rgba(255,255,255,0.25)",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: 2,
                  }}
                >
                  {isEn ? "Recent signals" : "Señales recientes"}
                </div>
                {signals.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      background: s.win
                        ? "rgba(0,255,136,0.04)"
                        : "rgba(255,96,96,0.04)",
                      border: `1px solid ${s.win ? "rgba(0,255,136,0.12)" : "rgba(255,96,96,0.12)"}`,
                      borderRadius: 8,
                      padding: "9px 12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <div
                        style={{
                          fontFamily: "'Syne',sans-serif",
                          fontSize: 11,
                          fontWeight: 700,
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        {s.pair}
                      </div>
                      <span
                        style={{
                          fontSize: 9,
                          padding: "1px 7px",
                          borderRadius: 3,
                          background:
                            s.dir === "CALL"
                              ? "rgba(0,255,136,0.12)"
                              : "rgba(255,96,96,0.12)",
                          color: s.dir === "CALL" ? "#00ff88" : "#ff6060",
                          fontWeight: 700,
                        }}
                      >
                        {s.dir}
                      </span>
                      <span
                        style={{ fontSize: 8, color: "rgba(255,255,255,0.25)" }}
                      >
                        {s.time} · {s.conf}%
                      </span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: s.win ? "#00ff88" : "#ff6060",
                        }}
                      >
                        {s.result}
                      </div>
                      <div
                        style={{ fontSize: 8, color: "rgba(255,255,255,0.25)" }}
                      >
                        {s.entry}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "portfolio" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Portfolio
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 8,
                    padding: "12px 14px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 9,
                      color: "rgba(255,255,255,0.3)",
                      marginBottom: 4,
                    }}
                  >
                    {isEn ? "Total balance" : "Balance total"}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#00D4FF",
                    }}
                  >
                    $12,840
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 8,
                    padding: "12px 14px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 9,
                      color: "rgba(255,255,255,0.3)",
                      marginBottom: 4,
                    }}
                  >
                    {isEn ? "Day P&L" : "P&L del día"}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#00ff88",
                    }}
                  >
                    +$342
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 8,
                  padding: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <svg
                  viewBox="0 0 80 80"
                  style={{ width: 70, height: 70, flexShrink: 0 }}
                >
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="10"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#6C63FF"
                    strokeWidth="10"
                    strokeDasharray="63 113"
                    strokeDashoffset="-28"
                    transform="rotate(-90 40 40)"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#00D4FF"
                    strokeWidth="10"
                    strokeDasharray="40 136"
                    strokeDashoffset="-91"
                    transform="rotate(-90 40 40)"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#F6AD55"
                    strokeWidth="10"
                    strokeDasharray="27 149"
                    strokeDashoffset="-131"
                    transform="rotate(-90 40 40)"
                  />
                </svg>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {[
                    { dot: "#6C63FF", label: "Bitcoin BTC", val: "$8,090" },
                    { dot: "#00D4FF", label: "Ethereum ETH", val: "$5,092" },
                    { dot: "#F6AD55", label: "EUR/USD", val: "$1,936" },
                  ].map((a, i) => (
                    <div
                      key={i}
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <div
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: a.dot,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 9,
                          color: "rgba(255,255,255,0.55)",
                          flex: 1,
                        }}
                      >
                        {a.label}
                      </span>
                      <span
                        style={{ fontSize: 9, color: "rgba(255,255,255,0.4)" }}
                      >
                        {a.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {[
                {
                  asset: "Bitcoin",
                  sym: "BTC",
                  amount: "0.12",
                  value: "$8,090",
                  pct: "+4.2%",
                  up: true,
                },
                {
                  asset: "Ethereum",
                  sym: "ETH",
                  amount: "1.45",
                  value: "$5,092",
                  pct: "+1.8%",
                  up: true,
                },
                {
                  asset: "EUR/USD",
                  sym: "FX",
                  amount: "$2,000",
                  value: "$1,936",
                  pct: "-3.2%",
                  up: false,
                },
              ].map((a, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: 8,
                    padding: "10px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: a.up
                          ? "rgba(0,255,136,0.1)"
                          : "rgba(255,96,96,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 10,
                        fontWeight: 700,
                        color: a.up ? "#00ff88" : "#ff6060",
                      }}
                    >
                      {a.sym.slice(0, 2)}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "rgba(255,255,255,0.75)",
                          fontWeight: 600,
                        }}
                      >
                        {a.asset}
                      </div>
                      <div
                        style={{ fontSize: 9, color: "rgba(255,255,255,0.28)" }}
                      >
                        {a.amount}
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      {a.value}
                    </div>
                    <div
                      style={{
                        fontSize: 9,
                        color: a.up ? "#00ff88" : "#ff6060",
                        marginTop: 1,
                      }}
                    >
                      {a.pct}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
