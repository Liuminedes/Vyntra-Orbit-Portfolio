"use client";
import { useState } from "react";

const CandleChart = () => {
  const candles = [
    { o:60,h:75,l:55,c:70,up:true },{ o:70,h:82,l:65,c:78,up:true },
    { o:78,h:85,l:70,c:72,up:false },{ o:72,h:76,l:62,c:65,up:false },
    { o:65,h:74,l:60,c:71,up:true },{ o:71,h:88,l:68,c:85,up:true },
    { o:85,h:90,l:78,c:82,up:false },{ o:82,h:86,l:75,c:79,up:false },
    { o:79,h:92,l:76,c:90,up:true },{ o:90,h:96,l:84,c:88,up:false },
    { o:88,h:94,l:82,c:92,up:true },{ o:92,h:100,l:88,c:97,up:true },
  ];
  const scale = (v) => 100 - ((v - 50) / 55) * 80;
  const w = 20;
  return (
    <svg viewBox="0 0 280 110" style={{ width:"100%", height:"110px" }}>
      {[0,33,66,100].map(y=>(
        <line key={y} x1="0" y1={y*0.9+5} x2="280" y2={y*0.9+5} stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      ))}
      {candles.map((c,i)=>{
        const x=i*22+4, top=scale(c.h), bot=scale(c.l), open=scale(c.o), close=scale(c.c);
        const bTop=Math.min(open,close), bH=Math.abs(open-close);
        return(
          <g key={i}>
            <line x1={x+w/2} y1={top} x2={x+w/2} y2={bot} stroke={c.up?"#00ff88":"#ff6060"} strokeWidth="1.5"/>
            <rect x={x+2} y={bTop} width={w-4} height={Math.max(bH,2)} fill={c.up?"rgba(0,255,136,0.7)":"rgba(255,96,96,0.7)"} rx="1"/>
          </g>
        );
      })}
    </svg>
  );
};

export default function AtlasMarketDemo({ lang = "es" }) {
  const isEn = lang === "en";
  const [active, setActive] = useState("chart");

  const T = {
    brand:       isEn ? "Atlas Market"       : "Atlas Market",
    tabChart:    isEn ? "Chart"               : "Gráfico",
    tabSignals:  isEn ? "AI Signals"          : "Señales IA",
    tabPortfolio:isEn ? "Portfolio"           : "Portfolio",
    openMarket:  isEn ? "● Market open"       : "● Mercado abierto",
    markets:     isEn ? "Markets"             : "Mercados",
    mktList:     isEn ? ["Crypto","Forex","Indices"] : ["Cripto","Forex","Índices"],
    signalDetected: isEn ? "AI SIGNAL DETECTED"  : "SEÑAL IA DETECTADA",
    signalSub:   isEn ? "Bullish pattern · Confidence 94% · 5 min window" : "Patrón alcista · Confianza 94% · Ventana 5 min",
    recentSignals: isEn ? "Recent signals — Atlas AI engine" : "Señales recientes — Motor IA Atlas",
    entry:       isEn ? "Entry"               : "Entrada",
    conf:        isEn ? "Conf."               : "Conf.",
    winRate:     isEn ? "Win Rate"            : "Win Rate",
    signalsToday:isEn ? "Today's signals"     : "Señales hoy",
    monthlyROI:  isEn ? "Monthly ROI"         : "ROI mensual",
    totalBalance:isEn ? "Total balance"       : "Balance total",
    dayPnL:      isEn ? "Day P&L"             : "P&L del día",
  };

  const signals = [
    { pair:"BTC/USDT", dir:"CALL", conf:94, time:"5m", entry:"$67,420", result:"+12.4%", win:true },
    { pair:"ETH/USDT", dir:"PUT",  conf:87, time:"5m", entry:"$3,512",  result:"+8.1%",  win:true },
    { pair:"EUR/USD",  dir:"CALL", conf:79, time:"1m", entry:"1.0842",  result:"-3.2%",  win:false },
    { pair:"GBP/USD",  dir:"PUT",  conf:91, time:"5m", entry:"1.2634",  result:"+10.8%", win:true },
  ];

  const screens = {
    chart: {
      label: T.tabChart, icon: "◈",
      content: () => (
        <div style={{ padding:"16px" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:15, fontWeight:800, color:"white" }}>BTC/USDT</div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:800, color:"#00ff88" }}>$67,420</div>
              <div style={{ fontSize:10, background:"rgba(0,255,136,0.1)", color:"#00ff88", padding:"2px 8px", borderRadius:4 }}>▲ +2.34%</div>
            </div>
            <div style={{ display:"flex", gap:6 }}>
              {["1m","5m","15m","1h"].map(t=>(
                <button key={t} style={{ padding:"3px 8px", borderRadius:4, border:"1px solid rgba(255,255,255,0.1)", background: t==="5m"?"rgba(108,99,255,0.2)":"transparent", color: t==="5m"?"#6C63FF":"rgba(255,255,255,0.3)", fontSize:9, cursor:"pointer", fontFamily:"'DM Mono',monospace" }}>{t}</button>
              ))}
            </div>
          </div>
          <CandleChart />
          <div style={{ background:"linear-gradient(135deg,rgba(108,99,255,0.15),rgba(0,212,255,0.08))", border:"1px solid rgba(108,99,255,0.3)", borderRadius:8, padding:"10px 14px", marginTop:12, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <div style={{ width:6, height:6, borderRadius:"50%", background:"#6C63FF", animation:"pulse-wip 1.5s infinite" }} />
              <div>
                <div style={{ fontSize:10, color:"#6C63FF", fontWeight:600, letterSpacing:"0.08em" }}>{T.signalDetected}</div>
                <div style={{ fontSize:9, color:"rgba(255,255,255,0.4)", marginTop:2 }}>{T.signalSub}</div>
              </div>
            </div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontSize:14, fontWeight:800, color:"#00ff88", background:"rgba(0,255,136,0.1)", padding:"4px 12px", borderRadius:6, border:"1px solid rgba(0,255,136,0.2)" }}>CALL ↑</div>
          </div>
        </div>
      ),
    },
    signals: {
      label: T.tabSignals, icon: "◉",
      content: () => (
        <div style={{ padding:"16px" }}>
          <div style={{ fontSize:9, color:"rgba(255,255,255,0.3)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:12 }}>{T.recentSignals}</div>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {signals.map((s,i)=>(
              <div key={i} style={{ background: s.win?"rgba(0,255,136,0.04)":"rgba(255,96,96,0.04)", border:`1px solid ${s.win?"rgba(0,255,136,0.15)":"rgba(255,96,96,0.15)"}`, borderRadius:8, padding:"10px 14px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.8)" }}>{s.pair}</div>
                  <div style={{ fontSize:9, padding:"2px 8px", borderRadius:4, background: s.dir==="CALL"?"rgba(0,255,136,0.12)":"rgba(255,96,96,0.12)", color: s.dir==="CALL"?"#00ff88":"#ff6060", fontWeight:700 }}>{s.dir}</div>
                  <div style={{ fontSize:9, color:"rgba(255,255,255,0.3)" }}>{s.time} · {T.entry} {s.entry}</div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontSize:10, fontWeight:700, color: s.win?"#00ff88":"#ff6060" }}>{s.result}</div>
                  <div style={{ fontSize:8, color:"rgba(255,255,255,0.25)", marginTop:2 }}>{T.conf} {s.conf}%</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:12, background:"rgba(108,99,255,0.06)", border:"1px solid rgba(108,99,255,0.15)", borderRadius:8, padding:"12px 14px", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8 }}>
            {[[T.winRate,"78.4%","#00ff88"],[T.signalsToday,"24","#00D4FF"],[T.monthlyROI,"+34.2%","#6C63FF"]].map(([l,v,c])=>(
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:16, fontWeight:800, color:c }}>{v}</div>
                <div style={{ fontSize:8, color:"rgba(255,255,255,0.3)", marginTop:2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    portfolio: {
      label: T.tabPortfolio, icon: "◷",
      content: () => (
        <div style={{ padding:"16px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:14 }}>
            {[
              { label:T.totalBalance, value:"$12,840", color:"#00D4FF" },
              { label:T.dayPnL,       value:"+$342",   color:"#00ff88" },
            ].map((k,i)=>(
              <div key={i} style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:8, padding:"12px 14px" }}>
                <div style={{ fontSize:9, color:"rgba(255,255,255,0.3)", marginBottom:4 }}>{k.label}</div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:800, color:k.color }}>{k.value}</div>
              </div>
            ))}
          </div>
          {[
            { asset:"Bitcoin", symbol:"BTC",   amount:"0.12",  value:"$8,090", pct:"+4.2%", up:true },
            { asset:"Ethereum",symbol:"ETH",   amount:"1.45",  value:"$5,092", pct:"+1.8%", up:true },
            { asset:"EUR/USD", symbol:"FOREX", amount:"$2,000",value:"$1,936", pct:"-3.2%", up:false },
          ].map((a,i)=>(
            <div key={i} style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.05)", borderRadius:8, padding:"10px 14px", marginBottom:8, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:32, height:32, borderRadius:"50%", background: a.up?"rgba(0,255,136,0.1)":"rgba(255,96,96,0.1)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:700, color: a.up?"#00ff88":"#ff6060" }}>{a.symbol.slice(0,2)}</div>
                <div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,0.8)", fontWeight:600 }}>{a.asset}</div>
                  <div style={{ fontSize:9, color:"rgba(255,255,255,0.3)", marginTop:2 }}>{a.amount}</div>
                </div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:11, color:"rgba(255,255,255,0.7)", fontWeight:600 }}>{a.value}</div>
                <div style={{ fontSize:9, color: a.up?"#00ff88":"#ff6060", marginTop:2 }}>{a.pct}</div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  };

  const Screen = screens[active].content;

  return (
    <div style={{ background:"#060610", borderRadius:12, overflow:"hidden", border:"1px solid rgba(108,99,255,0.2)", fontFamily:"'DM Mono',monospace" }}>
      <div style={{ background:"#0a0a1a", padding:"10px 14px", display:"flex", alignItems:"center", gap:8, borderBottom:"1px solid rgba(108,99,255,0.12)" }}>
        <div style={{ width:10, height:10, borderRadius:"50%", background:"#ff5f57" }} />
        <div style={{ width:10, height:10, borderRadius:"50%", background:"#febc2e" }} />
        <div style={{ width:10, height:10, borderRadius:"50%", background:"#28c840" }} />
        <div style={{ flex:1, background:"rgba(108,99,255,0.06)", borderRadius:6, padding:"4px 10px", fontSize:9, color:"rgba(108,99,255,0.4)", marginLeft:8 }}>app.atlasmarket.io</div>
        <div style={{ fontSize:9, color:"#6C63FF", letterSpacing:"0.1em" }}>Atlas Market Suite</div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"168px 1fr", minHeight:380 }}>
        <div style={{ background:"#040410", borderRight:"1px solid rgba(108,99,255,0.1)", padding:"16px 10px" }}>
          <div style={{ fontSize:8, color:"rgba(108,99,255,0.4)", textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:12, paddingLeft:6 }}>{T.brand}</div>
          {Object.entries(screens).map(([key,s])=>(
            <button key={key} onClick={()=>setActive(key)} style={{ width:"100%", display:"flex", alignItems:"center", gap:8, padding:"9px 10px", borderRadius:7, border:"none", background: active===key?"rgba(108,99,255,0.12)":"transparent", color: active===key?"#6C63FF":"rgba(255,255,255,0.3)", fontSize:11, cursor:"pointer", marginBottom:2, textAlign:"left", fontFamily:"'DM Mono',monospace", transition:"all 0.15s", borderLeft: active===key?"2px solid #6C63FF":"2px solid transparent" }}>
              <span style={{ fontSize:13 }}>{s.icon}</span>{s.label}
            </button>
          ))}
          <div style={{ marginTop:16, padding:"0 6px" }}>
            <div style={{ height:1, background:"rgba(108,99,255,0.1)", marginBottom:10 }} />
            <div style={{ fontSize:9, color:"rgba(255,255,255,0.2)", marginBottom:8 }}>{T.markets}</div>
            {T.mktList.map(m=>(
              <div key={m} style={{ fontSize:9, color:"rgba(255,255,255,0.25)", padding:"4px 0", display:"flex", alignItems:"center", gap:6 }}>
                <div style={{ width:4, height:4, borderRadius:"50%", background:"rgba(108,99,255,0.4)" }} />{m}
              </div>
            ))}
          </div>
        </div>
        <div style={{ overflow:"auto", maxHeight:420 }}>
          <div style={{ padding:"12px 16px", borderBottom:"1px solid rgba(108,99,255,0.1)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div style={{ fontFamily:"'Syne',sans-serif", fontSize:12, fontWeight:700, color:"white" }}>{screens[active].label}</div>
            <div style={{ fontSize:9, color:"#00ff88", background:"rgba(0,255,136,0.08)", padding:"3px 10px", borderRadius:100, border:"1px solid rgba(0,255,136,0.2)" }}>{T.openMarket}</div>
          </div>
          <Screen />
        </div>
      </div>
    </div>
  );
}