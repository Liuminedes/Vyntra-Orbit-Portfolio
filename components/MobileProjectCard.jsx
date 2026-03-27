"use client";

/* ══════════════════════════════════════════════════════
   MobileProjectCard — Vista móvil única por proyecto
   Visible solo en ≤1023px — no genera overflow horizontal
══════════════════════════════════════════════════════ */

/* Wrapper base — siempre contiene el contenido */
const Card = ({
  children,
  bg = "#0a0a14",
  border = "rgba(108,99,255,0.2)",
}) => (
  <div
    style={{
      background: bg,
      borderRadius: 12,
      overflow: "hidden",
      border: `1px solid ${border}`,
      fontFamily: "'DM Mono',monospace",
      width: "100%",
      maxWidth: "100%",
      boxSizing: "border-box",
    }}
  >
    {children}
  </div>
);

/* Chrome bar fake */
const Chrome = ({ url, dark = true }) => (
  <div
    style={{
      background: dark ? "#0c0c18" : "#EDE8DE",
      padding: "9px 12px",
      display: "flex",
      alignItems: "center",
      gap: 7,
      borderBottom: `1px solid rgba(255,255,255,${dark ? 0.05 : 0.1})`,
    }}
  >
    {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
      <div
        key={c}
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: c,
          flexShrink: 0,
        }}
      />
    ))}
    <div
      style={{
        flex: 1,
        background: dark ? "rgba(255,255,255,0.04)" : "rgba(44,26,14,0.06)",
        borderRadius: 4,
        padding: "2px 8px",
        fontSize: 8,
        color: dark ? "rgba(255,255,255,0.25)" : "rgba(44,26,14,0.4)",
        marginLeft: 6,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {url}
    </div>
  </div>
);

/* KPI row genérico */
const KpiRow = ({ items }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${items.length},1fr)`,
      gap: 6,
    }}
  >
    {items.map((k, i) => (
      <div
        key={i}
        style={{
          background: `${k.c}0D`,
          border: `1px solid ${k.c}22`,
          borderRadius: 7,
          padding: "9px 10px",
        }}
      >
        <div
          style={{
            fontSize: 7,
            color: "rgba(255,255,255,0.35)",
            marginBottom: 3,
            textTransform: "uppercase",
            letterSpacing: "0.07em",
          }}
        >
          {k.l}
        </div>
        <div
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: 18,
            fontWeight: 800,
            color: k.c,
            lineHeight: 1,
          }}
        >
          {k.v}
        </div>
      </div>
    ))}
  </div>
);

/* Bar chart row */
const Bar = ({ name, val, color, pct }) => (
  <div style={{ marginBottom: 6 }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 2,
      }}
    >
      <span style={{ fontSize: 8, color: "rgba(255,255,255,0.5)" }}>
        {name}
      </span>
      <span style={{ fontSize: 8, color, fontWeight: 600 }}>{val}</span>
    </div>
    <div
      style={{
        height: 3,
        background: "rgba(255,255,255,0.06)",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          background: color,
          borderRadius: 2,
        }}
      />
    </div>
  </div>
);

/* ── 01 SyncDealer ── */
const SyncDealerCard = ({ lang }) => {
  const isEn = lang === "en";
  return (
    <Card>
      <Chrome url="syncdealear.almotores.com" />
      <div
        style={{
          padding: "12px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: "white",
          }}
        >
          Dashboard · Mar 2026
        </div>
        <KpiRow
          items={[
            { l: isEn ? "Sales" : "Ventas", v: "47", c: "#61DAFB" },
            { l: isEn ? "Revenue" : "Comis.", v: "$18.4M", c: "#68D391" },
            { l: isEn ? "Bonuses" : "Bonos", v: "9", c: "#F6AD55" },
          ]}
        />
        <div>
          <div
            style={{
              fontSize: 7,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.1em",
              marginBottom: 7,
            }}
          >
            {isEn ? "TOP ADVISORS — MAR 2026" : "TOP ASESORES — MAR 2026"}
          </div>
          {[
            { name: "Sebastian E.", val: "$6.0M", color: "#61DAFB", pct: 100 },
            { name: "Juan Perez", val: "$1.7M", color: "#68D391", pct: 28 },
            { name: "David Soto", val: "$1.5M", color: "#F6AD55", pct: 25 },
          ].map((d, i) => (
            <Bar key={i} {...d} />
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <div
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "#68D391",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 8,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.1em",
            }}
          >
            SyncDealer v2 · Almotores
          </span>
        </div>
      </div>
    </Card>
  );
};

/* ── 02 Shaddai Canino ── */
const ShaddaiCard = ({ lang }) => {
  const isEn = lang === "en";
  const dogs = [
    {
      name: "Max",
      breed: "Golden",
      emoji: "🐕",
      status: isEn ? "Bathing" : "En baño",
      color: "#C8963E",
    },
    {
      name: "Luna",
      breed: "Poodle",
      emoji: "🐩",
      status: isEn ? "Waiting" : "En espera",
      color: "#8B7355",
    },
    {
      name: "Rocky",
      breed: "Bulldog",
      emoji: "🐕",
      status: isEn ? "Done" : "Listo",
      color: "#4A6741",
    },
  ];
  return (
    <Card bg="#F5F0E8" border="rgba(139,107,64,0.2)">
      <Chrome url="app.shaddaicanino.com" dark={false} />
      <div
        style={{
          padding: "12px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#2C1A0E",
            }}
          >
            Shaddai Canino
          </div>
          <div
            style={{
              background: "rgba(74,103,65,0.12)",
              color: "#4A6741",
              padding: "2px 9px",
              borderRadius: 100,
              fontSize: 8,
              border: "1px solid rgba(74,103,65,0.2)",
            }}
          >
            ● {isEn ? "Open" : "Abierto"}
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 6,
          }}
        >
          {[
            { l: isEn ? "Dogs" : "Canes", v: "12", c: "#C8963E" },
            { l: isEn ? "In bath" : "Baño", v: "3", c: "#6B5B95" },
            { l: isEn ? "Revenue" : "Caja", v: "$840k", c: "#4A6741" },
          ].map((k, i) => (
            <div
              key={i}
              style={{
                background: `${k.c}10`,
                border: `1px solid ${k.c}25`,
                borderRadius: 7,
                padding: "8px 9px",
              }}
            >
              <div
                style={{
                  fontSize: 7,
                  color: "rgba(44,26,14,0.4)",
                  marginBottom: 2,
                }}
              >
                {k.l}
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 17,
                  fontWeight: 900,
                  color: k.c,
                }}
              >
                {k.v}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <div
            style={{
              fontSize: 7,
              color: "rgba(44,26,14,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {isEn ? "Today's dogs" : "Canes de hoy"}
          </div>
          {dogs.map((d, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(139,107,64,0.1)",
                borderRadius: 7,
                padding: "7px 9px",
                display: "flex",
                alignItems: "center",
                gap: 7,
              }}
            >
              <span style={{ fontSize: 14, flexShrink: 0 }}>{d.emoji}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{ fontSize: 10, color: "#2C1A0E", fontWeight: 600 }}
                >
                  {d.name}{" "}
                  <span
                    style={{
                      fontSize: 8,
                      color: "rgba(44,26,14,0.4)",
                      fontWeight: 400,
                    }}
                  >
                    {d.breed}
                  </span>
                </div>
              </div>
              <div
                style={{
                  fontSize: 7,
                  padding: "2px 6px",
                  borderRadius: 100,
                  background: `${d.color}12`,
                  color: d.color,
                  border: `1px solid ${d.color}25`,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {d.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

/* ── 03 Atlas Market Suite ── */
const AtlasCard = ({ lang }) => {
  const isEn = lang === "en";
  const signals = [
    { pair: "BTC/USDT", dir: "CALL", conf: 94, result: "+12.4%", win: true },
    { pair: "ETH/USDT", dir: "PUT", conf: 87, result: "+8.1%", win: true },
    { pair: "EUR/USD", dir: "CALL", conf: 79, result: "-3.2%", win: false },
    { pair: "GBP/USD", dir: "PUT", conf: 91, result: "+10.8%", win: true },
  ];
  return (
    <Card bg="#060610" border="rgba(108,99,255,0.2)">
      <Chrome url="app.atlasmarket.io" />
      <div
        style={{
          padding: "12px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {/* Balance */}
        <div>
          <div
            style={{
              fontSize: 8,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.12em",
              marginBottom: 3,
            }}
          >
            {isEn ? "TOTAL BALANCE" : "BALANCE TOTAL"}
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: 24,
                fontWeight: 800,
                color: "#00D4FF",
              }}
            >
              $12,840
            </span>
            <span
              style={{
                fontSize: 10,
                color: "#00ff88",
                background: "rgba(0,255,136,0.1)",
                padding: "2px 7px",
                borderRadius: 4,
              }}
            >
              ▲ +2.34%
            </span>
          </div>
          {/* Sparkline */}
          <svg
            viewBox="0 0 240 36"
            style={{ width: "100%", height: 28, marginTop: 6 }}
          >
            <polyline
              points="0,30 24,25 48,27 72,17 96,21 120,10 144,13 168,7 192,4 216,8 240,2"
              fill="none"
              stroke="rgba(0,212,255,0.5)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <polygon
              points="0,30 24,25 48,27 72,17 96,21 120,10 144,13 168,7 192,4 216,8 240,2 240,36 0,36"
              fill="rgba(0,212,255,0.06)"
            />
          </svg>
        </div>
        <KpiRow
          items={[
            { l: "Win Rate", v: "78.4%", c: "#00ff88" },
            { l: isEn ? "Signals" : "Señales", v: "24", c: "#00D4FF" },
            { l: "ROI", v: "+34.2%", c: "#8B5CF6" },
          ]}
        />
        {/* Signals */}
        <div>
          <div
            style={{
              fontSize: 7,
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 6,
            }}
          >
            {isEn ? "AI SIGNALS — LAST 4" : "SEÑALES IA — ÚLTIMAS 4"}
          </div>
          {signals.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: s.win
                  ? "rgba(0,255,136,0.04)"
                  : "rgba(255,96,96,0.04)",
                border: `1px solid ${s.win ? "rgba(0,255,136,0.1)" : "rgba(255,96,96,0.1)"}`,
                borderRadius: 6,
                padding: "6px 9px",
                marginBottom: 4,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <span
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {s.pair}
                </span>
                <span
                  style={{
                    fontSize: 8,
                    padding: "1px 5px",
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
              </div>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: s.win ? "#00ff88" : "#ff6060",
                }}
              >
                {s.result}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

/* ── 04 Mi Lista ── */
const MiListaCard = ({ lang }) => {
  const isEn = lang === "en";
  return (
    <Card bg="#0a1628" border="rgba(34,197,94,0.2)">
      <div style={{ background: "#14532D", padding: "14px 14px 16px" }}>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)" }}>
          {isEn ? "Good morning 👋" : "Buenos días 👋"}
        </div>
        <div
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: 18,
            fontWeight: 700,
            color: "white",
          }}
        >
          {isEn ? "Hello, " : "Hola, "}
          <span style={{ color: "#86EFAC" }}>Camila</span>
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.12)",
            borderRadius: 9,
            padding: "9px 11px",
            marginTop: 9,
          }}
        >
          <div
            style={{
              fontSize: 7,
              color: "rgba(255,255,255,0.6)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {isEn ? "BUDGET THIS MONTH" : "PRESUPUESTO DEL MES"}
          </div>
          <div
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 20,
              fontWeight: 800,
              color: "white",
            }}
          >
            $248.500
          </div>
          <div
            style={{
              fontSize: 7,
              color: "rgba(255,255,255,0.55)",
              marginTop: 1,
            }}
          >
            {isEn ? "Spent of $400.000" : "Gastado de $400.000"}
          </div>
          <div
            style={{
              marginTop: 7,
              height: 4,
              background: "rgba(255,255,255,0.15)",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "62%",
                background: "#22C55E",
                borderRadius: 2,
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#0a1628",
          padding: "12px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div
          style={{
            fontSize: 8,
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {isEn ? "SHOPPING LIST" : "LISTA DE COMPRAS"}
        </div>
        {[
          {
            name: isEn ? "Carrots x500g" : "Zanahorias x500g",
            price: "$2.500",
            done: true,
            emoji: "🥕",
          },
          {
            name: isEn ? "Ripe bananas" : "Bananos maduros",
            price: "$3.800",
            done: true,
            emoji: "🍌",
          },
          {
            name: isEn ? "Tomatoes" : "Tomates chonto",
            price: "$4.200",
            done: false,
            emoji: "🍅",
          },
          {
            name: isEn ? "Bar soap x3" : "Jabón de baño x3",
            price: "$7.900",
            done: false,
            emoji: "🧼",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div
              style={{
                width: 17,
                height: 17,
                borderRadius: "50%",
                border: `2px solid ${item.done ? "#22C55E" : "rgba(255,255,255,0.2)"}`,
                background: item.done ? "#22C55E" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {item.done && (
                <span style={{ fontSize: 8, color: "white" }}>✓</span>
              )}
            </div>
            <span style={{ fontSize: 13, flexShrink: 0 }}>{item.emoji}</span>
            <span
              style={{
                flex: 1,
                fontSize: 10,
                color: item.done
                  ? "rgba(255,255,255,0.35)"
                  : "rgba(255,255,255,0.8)",
                textDecoration: item.done ? "line-through" : "none",
              }}
            >
              {item.name}
            </span>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#22C55E",
                flexShrink: 0,
              }}
            >
              {item.price}
            </span>
          </div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 5,
            paddingTop: 4,
          }}
        >
          {[
            ["⚡", "Flutter"],
            ["🔥", "Firebase"],
            ["🔍", "ML Kit"],
          ].map(([icon, label]) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 100,
                padding: "2px 8px",
                fontSize: 8,
                color: "rgba(255,255,255,0.4)",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

/* ── 05 DentalSaaS ── */
const DentalCard = ({ lang }) => {
  const isEn = lang === "en";
  const agenda = [
    {
      name: "Juan H.",
      proc: isEn ? "Orthodontics" : "Ortodoncia",
      time: "8:30 am",
      ok: true,
      color: "#7C6FFF",
    },
    {
      name: "María L.",
      proc: isEn ? "Whitening" : "Blanqueamiento",
      time: "9:30 am",
      ok: true,
      color: "#5EC4B0",
    },
    {
      name: "Roberto S.",
      proc: isEn ? "Extraction" : "Extracción",
      time: "11:00 am",
      ok: false,
      color: "#FFA03C",
    },
    {
      name: "Claudia M.",
      proc: isEn ? "Cleaning" : "Limpieza",
      time: "2:00 pm",
      ok: true,
      color: "#3B9EDB",
    },
  ];
  return (
    <Card bg="#EEF4FB" border="rgba(59,158,219,0.2)">
      <Chrome url="app.dentalsaas.cloud" dark={false} />
      <div
        style={{
          padding: "12px 14px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#141E30",
            }}
          >
            DentalSaaS
          </div>
          <div
            style={{
              background: "rgba(94,196,176,0.12)",
              color: "#5EC4B0",
              padding: "2px 9px",
              borderRadius: 100,
              fontSize: 8,
              border: "1px solid rgba(94,196,176,0.2)",
            }}
          >
            ● {isEn ? "Open" : "Abierto"}
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 6,
          }}
        >
          {[
            { l: isEn ? "Patients" : "Pacientes", v: "124", c: "#3B9EDB" },
            { l: isEn ? "Today" : "Hoy", v: "9", c: "#5EC4B0" },
            { l: isEn ? "Billing" : "Factur.", v: "$8.4M", c: "#7C6FFF" },
          ].map((k, i) => (
            <div
              key={i}
              style={{
                background: `${k.c}0D`,
                border: `1px solid ${k.c}22`,
                borderRadius: 7,
                padding: "8px 9px",
              }}
            >
              <div
                style={{
                  fontSize: 7,
                  color: "rgba(20,30,48,0.4)",
                  marginBottom: 2,
                }}
              >
                {k.l}
              </div>
              <div
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: 17,
                  fontWeight: 800,
                  color: k.c,
                }}
              >
                {k.v}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div
            style={{
              fontSize: 7,
              color: "rgba(20,30,48,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 6,
            }}
          >
            {isEn ? "TODAY'S AGENDA" : "AGENDA DE HOY"}
          </div>
          {agenda.map((a, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "7px 0",
                borderBottom: "1px solid rgba(59,158,219,0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: a.color,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{ fontSize: 10, color: "#141E30", fontWeight: 600 }}
                  >
                    {a.name}
                  </div>
                  <div style={{ fontSize: 8, color: "rgba(20,30,48,0.45)" }}>
                    {a.proc}
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: "#3B9EDB" }}>
                  {a.time}
                </div>
                <div
                  style={{ fontSize: 7, color: a.ok ? "#5EC4B0" : "#FFA03C" }}
                >
                  {a.ok
                    ? isEn
                      ? "Confirmed"
                      : "Confirmado"
                    : isEn
                      ? "Pending"
                      : "Pendiente"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

/* ── 06 IntraCom ── */
const IntraComCard = ({ lang }) => {
  const isEn = lang === "en";
  const msgs = [
    {
      user: "Laura T.",
      av: "LT",
      color: "#8B5CF6",
      time: "09:01",
      text: isEn ? "Good morning team 👋" : "Buenos días equipo 👋",
      self: false,
    },
    {
      user: "Andrés R.",
      av: "AR",
      color: "#00D4FF",
      time: "09:03",
      text: isEn ? "Meeting at 11am ⏰" : "Reunión a las 11am ⏰",
      self: false,
    },
    {
      user: "MR",
      av: "MR",
      color: "#00ff88",
      time: "09:05",
      text: isEn ? "Meet link ready ✅" : "Meet ya está listo ✅",
      self: true,
    },
    {
      user: "Carlos M.",
      av: "CM",
      color: "#ffb400",
      time: "09:10",
      text: isEn ? "Sharing report 📊" : "Comparto el informe 📊",
      self: false,
    },
    {
      user: "MR",
      av: "MR",
      color: "#00ff88",
      time: "09:12",
      text: isEn ? "Thanks all 🙌" : "Gracias a todos 🙌",
      self: true,
    },
  ];
  return (
    <Card bg="#0d0d18" border="rgba(255,255,255,0.07)">
      <Chrome url="intracom.almotores.internal" />
      <div
        style={{
          padding: "8px 12px 4px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>#</span>
        <span
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.65)",
            fontWeight: 600,
          }}
        >
          general
        </span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
          {[
            ["LT", "#8B5CF6"],
            ["AR", "#00D4FF"],
            ["CM", "#ffb400"],
          ].map(([av, c], i) => (
            <div
              key={i}
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: c,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 6,
                fontWeight: 700,
                color: "#080810",
              }}
            >
              {av}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          padding: "10px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 7,
        }}
      >
        {msgs.map((m, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 6,
              flexDirection: m.self ? "row-reverse" : "row",
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: m.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 7,
                fontWeight: 700,
                color: "#080810",
                flexShrink: 0,
              }}
            >
              {m.av}
            </div>
            <div
              style={{
                maxWidth: "70%",
                display: "flex",
                flexDirection: "column",
                alignItems: m.self ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  fontSize: 7,
                  color: "rgba(255,255,255,0.2)",
                  marginBottom: 1,
                }}
              >
                {m.self ? "" : `${m.user} · `}
                {m.time}
              </div>
              <div
                style={{
                  background: m.self
                    ? "rgba(108,99,255,0.18)"
                    : "rgba(255,255,255,0.05)",
                  border: `1px solid ${m.self ? "rgba(108,99,255,0.3)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: m.self ? "9px 9px 2px 9px" : "9px 9px 9px 2px",
                  padding: "5px 9px",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.4,
                }}
              >
                {m.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "7px 10px 10px",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          display: "flex",
          gap: 5,
        }}
      >
        <div
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 6,
            padding: "6px 9px",
            fontSize: 10,
            color: "rgba(255,255,255,0.2)",
          }}
        >
          {isEn ? "Message #general..." : "Mensaje en #general..."}
        </div>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 6,
            background: "rgba(108,99,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#8B5CF6",
            fontSize: 13,
          }}
        >
          ↑
        </div>
      </div>
    </Card>
  );
};

/* ══════════════════════════════════════════════════════
   EXPORT
══════════════════════════════════════════════════════ */
export default function MobileProjectCard({ category, lang }) {
  const map = {
    SyncDealer: <SyncDealerCard lang={lang} />,
    "Shaddai Canino": <ShaddaiCard lang={lang} />,
    "Atlas Market Suite": <AtlasCard lang={lang} />,
    "Mi Lista": <MiListaCard lang={lang} />,
    MercadoApp: <MiListaCard lang={lang} />,
    DentalSaaS: <DentalCard lang={lang} />,
    IntraCom: <IntraComCard lang={lang} />,
  };

  const card = map[category];
  if (!card) return null;

  return (
    <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 10,
          fontFamily: "'DM Mono',monospace",
        }}
      >
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#00ff88",
            animation: "pulse-wip 2s infinite",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: 8,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {lang === "en" ? "Project preview" : "Vista previa del proyecto"}
        </span>
      </div>
      {card}
    </div>
  );
}
