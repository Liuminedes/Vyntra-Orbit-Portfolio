"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PROJECT_TYPES,
  MODULES,
  COMPLEXITY_LEVELS,
  DELIVERY_OPTIONS,
  DEFAULT_TRM,
  QUOTER_PIN,
} from "@/lib/quoterConfig";

// ─── PIN Gate ────────────────────────────────
function PinGate({ onUnlock }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleKey = (digit) => {
    if (pin.length >= 6) return;
    const next = pin + digit;
    setPin(next);
    if (next.length === QUOTER_PIN.length) {
      if (next === QUOTER_PIN) {
        sessionStorage.setItem("quoter_unlocked", "1");
        onUnlock();
      } else {
        setError(true);
        setShake(true);
        setTimeout(() => { setPin(""); setError(false); setShake(false); }, 900);
      }
    }
  };

  const handleDelete = () => setPin((p) => p.slice(0, -1));
  const keys = ["1","2","3","4","5","6","7","8","9","","0","⌫"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#08070C]">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cyan-500/5 pointer-events-none" />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        className="relative flex flex-col items-center gap-8 w-full max-w-sm px-6">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center">
            <span className="text-2xl">🔐</span>
          </div>
          <h1 className="font-syne text-2xl font-bold text-white">Acceso Privado</h1>
          <p className="text-white/40 text-sm font-mono text-center">Vyntra Orbit · Cotizador Interno</p>
        </div>

        <motion.div animate={shake ? { x: [-10, 10, -8, 8, -4, 4, 0] } : {}} transition={{ duration: 0.5 }} className="flex gap-3">
          {Array.from({ length: QUOTER_PIN.length }).map((_, i) => (
            <div key={i} className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
              i < pin.length ? error ? "bg-red-400 border-red-400" : "bg-accent border-accent" : "bg-transparent border-white/20"
            }`} />
          ))}
        </motion.div>

        {error && <p className="text-red-400 text-xs font-mono -mt-4">PIN incorrecto. Intenta de nuevo.</p>}

        <div className="grid grid-cols-3 gap-3 w-full">
          {keys.map((k, i) => (
            <button key={i} type="button"
              onClick={() => k === "⌫" ? handleDelete() : k !== "" ? handleKey(k) : null}
              disabled={k === ""}
              className={`h-16 rounded-2xl font-syne text-xl font-bold transition-all duration-150 ${
                k === "" ? "bg-transparent cursor-default" :
                k === "⌫" ? "bg-white/5 hover:bg-white/10 text-white/50 border border-white/10" :
                "bg-white/5 hover:bg-accent/20 hover:border-accent/40 active:scale-95 text-white border border-white/10"
              }`}>{k}</button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Info Modal ───────────────────────────────
function InfoModal({ item, onClose }) {
  if (!item) return null;
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}>
        <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0e0e1a] border border-white/10 rounded-2xl p-6 max-w-md w-full shadow-2xl">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="font-syne font-bold text-white text-lg leading-tight">{item.label}</h3>
            </div>
            <button type="button" onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors text-lg flex-shrink-0">✕</button>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-4">{item.description}</p>
          {item.idealFor && (
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-3">
              <p className="text-accent text-xs font-mono uppercase tracking-wider mb-1">Ideal para</p>
              <p className="text-white/70 text-sm">{item.idealFor}</p>
            </div>
          )}
          {item.price !== undefined && (
            <div className="mt-4 flex items-center justify-between">
              <span className="text-white/40 text-xs font-mono">Precio base / modulo</span>
              <span className="text-accent font-syne font-bold text-lg">
                {item.price > 0 ? `+$${item.price} USD` : "Incluido"}
              </span>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Step Bar ────────────────────────────────
function StepBar({ step }) {
  const steps = ["Tipo", "Modulos", "Complejidad", "Entrega"];
  return (
    <div className="flex items-center gap-0 mb-10 w-full max-w-2xl mx-auto">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center flex-1">
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono border-2 transition-all duration-300 ${
              i < step ? "bg-accent border-accent text-white" :
              i === step ? "bg-accent/20 border-accent text-accent" :
              "bg-white/5 border-white/20 text-white/30"
            }`}>{i < step ? "✓" : i + 1}</div>
            <span className={`text-[10px] font-mono tracking-wide hidden sm:block whitespace-nowrap ${
              i === step ? "text-accent" : i < step ? "text-white/50" : "text-white/20"
            }`}>{s}</span>
          </div>
          {i < steps.length - 1 && (
            <div className={`flex-1 h-px mx-1 transition-all duration-500 ${i < step ? "bg-accent/60" : "bg-white/10"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Selectable Card (no nested buttons) ──────
function SelectCard({ selected, onClick, children, className = "" }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className={`relative rounded-2xl border text-left transition-all duration-200 cursor-pointer select-none ${
        selected ? "bg-accent/15 border-accent/60 shadow-lg shadow-accent/10" : "bg-white/3 border-white/10 hover:bg-white/8 hover:border-white/20"
      } ${className}`}>
      {children}
    </div>
  );
}

// ─── Info Button ─────────────────────────────
function InfoBtn({ onClick }) {
  return (
    <button type="button" onClick={(e) => { e.stopPropagation(); onClick(); }}
      className="w-7 h-7 rounded-full bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/40 flex items-center justify-center text-white/30 hover:text-accent text-xs font-bold transition-all flex-shrink-0">
      !
    </button>
  );
}

// ─── Main Quoter ──────────────────────────────
function QuoterApp() {
  const [step, setStep] = useState(0);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedModules, setSelectedModules] = useState([]);
  const [complexity, setComplexity] = useState("standard");
  const [delivery, setDelivery] = useState("normal");
  const [trm, setTrm] = useState(DEFAULT_TRM);
  const [clientName, setClientName] = useState("");
  const [infoItem, setInfoItem] = useState(null);
  const [showSummary, setShowSummary] = useState(false);

  const projectType = PROJECT_TYPES.find((p) => p.id === selectedType);
  const complexityLevel = COMPLEXITY_LEVELS.find((c) => c.id === complexity);
  const deliveryOption = DELIVERY_OPTIONS.find((d) => d.id === delivery);
  const modulesTotal = selectedModules.reduce((acc, id) => {
    const m = MODULES.find((m) => m.id === id);
    return acc + (m?.price || 0);
  }, 0);
  const base = projectType?.price || 0;
  const afterModules = base + modulesTotal;
  const afterComplexity = afterModules * (complexityLevel?.multiplier || 1);
  const totalUSD = Math.round(afterComplexity * (1 + (deliveryOption?.surcharge || 0)));
  const totalCOP = Math.round(totalUSD * trm);

  const toggleModule = (id) =>
    setSelectedModules((prev) => prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]);

  const resetAll = () => {
    setShowSummary(false); setStep(0); setSelectedType(null);
    setSelectedModules([]); setComplexity("standard"); setDelivery("normal"); setClientName("");
  };

  // ── PDF Generation (emoji-free for jsPDF compat) ──
  const generatePDF = async () => {
    const { default: jsPDF } = await import("jspdf");
    const { default: autoTable } = await import("jspdf-autotable");

    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const W = doc.internal.pageSize.getWidth();
    const H = doc.internal.pageSize.getHeight();

    // ── HEADER BACKGROUND ──
    doc.setFillColor(8, 7, 12);
    doc.rect(0, 0, W, 52, "F");

    // Accent top bar
    doc.setFillColor(139, 92, 246);
    doc.rect(0, 0, W, 3, "F");

    // ── LOGO ──
    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    doc.setTextColor(232, 232, 240);
    doc.text("VYNTRA", 14, 24);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(13);
    doc.setTextColor(139, 92, 246);
    doc.text("ORBIT", 14, 33);

    doc.setFontSize(8);
    doc.setTextColor(90, 90, 110);
    doc.text("Enterprise Software & Automation", 14, 41);
    doc.text("vyntraorbit@gmail.com", 14, 47);

    // ── QUOTE HEADER (right side) ──
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(139, 92, 246);
    doc.text("COTIZACION DE PROYECTO", W - 14, 20, { align: "right" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(160, 160, 185);
    doc.text(`Fecha: ${new Date().toLocaleDateString("es-CO")}`, W - 14, 28, { align: "right" });
    if (clientName) {
      doc.text(`Cliente: ${clientName}`, W - 14, 36, { align: "right" });
    }

    // ── DIVIDER ──
    doc.setDrawColor(139, 92, 246);
    doc.setLineWidth(0.8);
    doc.line(14, 52, W - 14, 52);

    // ── BODY BACKGROUND ──
    doc.setFillColor(12, 12, 22);
    doc.rect(0, 52, W, H - 52, "F");

    // ── SECTION TITLE ──
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(220, 220, 235);
    doc.text("Resumen de la Cotizacion", 14, 66);

    // ── TABLE ──
    const tableBody = [
      [projectType?.label || "", "Precio Base", `$${base.toLocaleString()} USD`],
      ...selectedModules.map((id) => {
        const m = MODULES.find((m) => m.id === id);
        return [m?.label || "", "Modulo adicional", `+$${m?.price?.toLocaleString()} USD`];
      }),
      [`Nivel: ${complexityLevel?.label}`, `x${complexityLevel?.multiplier}`, `$${Math.round(afterModules * (complexityLevel?.multiplier || 1)).toLocaleString()} USD`],
    ];

    if (delivery !== "normal") {
      tableBody.push([
        `Entrega ${deliveryOption?.label}`,
        `+${(deliveryOption?.surcharge || 0) * 100}%`,
        `+$${Math.round(afterComplexity * (deliveryOption?.surcharge || 0)).toLocaleString()} USD`,
      ]);
    }

    autoTable(doc, {
      startY: 72,
      head: [["Concepto", "Detalle", "Valor"]],
      body: tableBody,
      theme: "grid",
      headStyles: {
        fillColor: [25, 15, 50],
        textColor: [180, 140, 255],
        fontStyle: "bold",
        fontSize: 9,
        cellPadding: 4,
      },
      bodyStyles: {
        fillColor: [16, 16, 28],
        textColor: [210, 210, 230],
        fontSize: 9,
        cellPadding: 4,
      },
      alternateRowStyles: { fillColor: [22, 20, 38] },
      columnStyles: {
        0: { cellWidth: 95 },
        1: { cellWidth: 48 },
        2: { cellWidth: 40, halign: "right", fontStyle: "bold" },
      },
      margin: { left: 14, right: 14 },
    });

    const finalY = doc.lastAutoTable.finalY + 12;

    // ── TOTAL BOX ──
    const boxH = 44;
    doc.setFillColor(28, 12, 58);
    doc.setDrawColor(139, 92, 246);
    doc.setLineWidth(0.8);
    doc.roundedRect(14, finalY, W - 28, boxH, 5, 5, "FD");

    // Accent left bar on box
    doc.setFillColor(139, 92, 246);
    doc.roundedRect(14, finalY, 4, boxH, 2, 2, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(139, 92, 246);
    doc.text("TOTAL ESTIMADO", 24, finalY + 10);

    doc.setFontSize(24);
    doc.setTextColor(235, 235, 245);
    doc.text(`$${totalUSD.toLocaleString()} USD`, 24, finalY + 28);

    doc.setFontSize(13);
    doc.setTextColor(100, 200, 255);
    doc.text(`aprox. $${totalCOP.toLocaleString()} COP`, W - 22, finalY + 28, { align: "right" });

    doc.setFontSize(7.5);
    doc.setTextColor(80, 80, 105);
    doc.text(
      `TRM: $${trm.toLocaleString()} COP/USD  |  Este presupuesto es una estimacion referencial.`,
      24,
      finalY + 38
    );

    // ── FOOTER ──
    doc.setFillColor(6, 6, 14);
    doc.rect(0, H - 16, W, 16, "F");
    doc.setDrawColor(60, 40, 100);
    doc.setLineWidth(0.4);
    doc.line(14, H - 16, W - 14, H - 16);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(70, 70, 95);
    doc.text("Vyntra Orbit  |  Colombia  |  vyntraorbit@gmail.com", W / 2, H - 7, { align: "center" });

    const filename = clientName
      ? `Cotizacion_VyntraOrbit_${clientName.replace(/\s+/g, "_")}.pdf`
      : "Cotizacion_VyntraOrbit.pdf";
    doc.save(filename);
  };

  // ── SUMMARY VIEW ──
  if (showSummary) {
    return (
      <div className="min-h-screen bg-[#08070C] flex flex-col items-center justify-start pt-12 px-4 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cyan-500/5 pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-2xl relative">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-syne text-3xl font-bold text-white">Cotizacion Final</h1>
              <p className="text-white/40 font-mono text-sm mt-1">Resumen del proyecto estimado</p>
            </div>
            <button type="button" onClick={resetAll}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white text-sm font-mono transition-colors">
              Nueva Cotizacion
            </button>
          </div>

          <div className="mb-6">
            <label className="text-white/40 text-xs font-mono uppercase tracking-wider mb-2 block">Nombre del Cliente (opcional)</label>
            <input value={clientName} onChange={(e) => setClientName(e.target.value)}
              placeholder="Ej: Carlos Perez / Empresa XYZ"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent/50 font-mono text-sm" />
          </div>

          <div className="mb-6 flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
            <span className="text-white/50 text-sm font-mono flex-shrink-0">TRM (COP/USD):</span>
            <input type="number" value={trm} onChange={(e) => setTrm(Number(e.target.value))}
              className="bg-transparent text-accent font-mono font-bold text-lg focus:outline-none w-32" />
            <span className="text-white/30 text-xs font-mono">Ajusta segun la tasa actual</span>
          </div>

          <div className="bg-white/3 border border-white/10 rounded-2xl overflow-hidden mb-6">
            <div className="p-4 border-b border-white/5 bg-white/5">
              <h3 className="font-syne font-bold text-white text-sm">Desglose</h3>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-white/70 text-sm">{projectType?.icon} {projectType?.label}</span>
                <span className="text-white font-mono text-sm">${base.toLocaleString()} USD</span>
              </div>
              {selectedModules.map((id) => {
                const m = MODULES.find((m) => m.id === id);
                return (
                  <div key={id} className="flex items-center justify-between py-1">
                    <span className="text-white/50 text-sm">{m?.icon} {m?.label}</span>
                    <span className="text-white/70 font-mono text-sm">+${m?.price?.toLocaleString()} USD</span>
                  </div>
                );
              })}
              <div className="flex items-center justify-between py-2 border-t border-white/5">
                <span className="text-white/50 text-sm">Nivel {complexityLevel?.label} (x{complexityLevel?.multiplier})</span>
                <span className="text-white/70 font-mono text-sm">${Math.round(afterComplexity).toLocaleString()} USD</span>
              </div>
              {delivery !== "normal" && (
                <div className="flex items-center justify-between py-1">
                  <span className="text-white/50 text-sm">Urgencia {deliveryOption?.label} (+{(deliveryOption?.surcharge || 0) * 100}%)</span>
                  <span className="text-amber-400 font-mono text-sm">+${Math.round(afterComplexity * (deliveryOption?.surcharge || 0)).toLocaleString()} USD</span>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent/20 to-cyan-500/10 border border-accent/30 rounded-2xl p-6 mb-8">
            <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">Total Estimado</p>
            <div className="flex items-end justify-between">
              <div>
                <p className="font-syne text-4xl font-bold text-white">${totalUSD.toLocaleString()}<span className="text-xl text-white/50 ml-1">USD</span></p>
                <p className="text-cyan-400 font-mono text-lg mt-1">aprox. ${totalCOP.toLocaleString()} COP</p>
              </div>
              <div className="text-right">
                <p className="text-white/30 text-xs font-mono">Entrega: {deliveryOption?.sublabel}</p>
                <p className="text-white/30 text-xs font-mono mt-1">Nivel: {complexityLevel?.label}</p>
              </div>
            </div>
            <p className="text-white/20 text-xs font-mono mt-4">* Estimacion referencial. Los precios pueden variar segun requerimientos especificos.</p>
          </div>

          <button type="button" onClick={generatePDF}
            className="w-full py-4 bg-accent hover:bg-accent/90 text-white rounded-2xl font-syne font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg shadow-accent/20">
            📄 Descargar Cotizacion en PDF
          </button>
        </motion.div>
      </div>
    );
  }

  // ── QUOTER FORM ──
  return (
    <div className="min-h-screen bg-[#08070C] flex flex-col items-center justify-start pt-12 px-4 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cyan-500/5 pointer-events-none" />
      <InfoModal item={infoItem} onClose={() => setInfoItem(null)} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl relative">
        <div className="text-center mb-10">
          <h1 className="font-syne text-3xl md:text-4xl font-bold text-white mb-2">Cotizador de Proyectos</h1>
          <p className="text-white/40 font-mono text-sm">Vyntra Orbit · Uso interno</p>
        </div>

        <StepBar step={step} />

        {/* ── STEP 0: Project Type ── */}
        {step === 0 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="font-syne text-xl font-bold text-white mb-2">¿Que tipo de proyecto necesita el cliente?</h2>
            <p className="text-white/40 text-sm font-mono mb-6">Selecciona una opcion. Usa <span className="text-accent font-bold">!</span> para ver detalles.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECT_TYPES.map((pt) => (
                <SelectCard key={pt.id} selected={selectedType === pt.id} onClick={() => setSelectedType(pt.id)} className="flex items-start gap-4 p-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{pt.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-syne font-semibold text-sm ${selectedType === pt.id ? "text-white" : "text-white/80"}`}>{pt.label}</p>
                    <p className="text-accent font-mono text-xs mt-1">${pt.price.toLocaleString()} USD</p>
                  </div>
                  <InfoBtn onClick={() => setInfoItem(pt)} />
                  {selectedType === pt.id && <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-accent" />}
                </SelectCard>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <button type="button" onClick={() => setStep(1)} disabled={!selectedType}
                className="px-8 py-3 bg-accent hover:bg-accent/90 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full font-syne font-bold transition-all">
                Siguiente →
              </button>
            </div>
          </motion.div>
        )}

        {/* ── STEP 1: Modules ── */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="font-syne text-xl font-bold text-white mb-2">¿Que modulos adicionales necesita?</h2>
            <p className="text-white/40 text-sm font-mono mb-6">Selecciona todos los que apliquen. Puedes omitir si no necesita ninguno.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MODULES.map((m) => {
                const active = selectedModules.includes(m.id);
                return (
                  <SelectCard key={m.id} selected={active} onClick={() => toggleModule(m.id)} className="flex items-start gap-4 p-4">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${active ? "bg-accent border-accent" : "border-white/20"}`}>
                      {active && <span className="text-white text-xs">✓</span>}
                    </div>
                    <span className="text-xl flex-shrink-0">{m.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`font-syne font-semibold text-sm ${active ? "text-white" : "text-white/80"}`}>{m.label}</p>
                      <p className="text-accent font-mono text-xs mt-1">+${m.price.toLocaleString()} USD</p>
                    </div>
                    <InfoBtn onClick={() => setInfoItem(m)} />
                  </SelectCard>
                );
              })}
            </div>
            <div className="flex justify-between mt-8">
              <button type="button" onClick={() => setStep(0)} className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-syne font-bold transition-all">← Atras</button>
              <button type="button" onClick={() => setStep(2)} className="px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-syne font-bold transition-all">Siguiente →</button>
            </div>
          </motion.div>
        )}

        {/* ── STEP 2: Complexity ── */}
        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="font-syne text-xl font-bold text-white mb-2">Escala y complejidad del proyecto</h2>
            <p className="text-white/40 text-sm font-mono mb-6">Afecta el precio base x modulos.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {COMPLEXITY_LEVELS.map((c) => (
                <SelectCard key={c.id} selected={complexity === c.id} onClick={() => setComplexity(c.id)} className="flex flex-col gap-3 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className={`font-syne font-bold text-lg ${complexity === c.id ? "text-white" : "text-white/80"}`}>{c.label}</p>
                      <p className="text-white/40 text-xs font-mono">{c.sublabel}</p>
                    </div>
                    <InfoBtn onClick={() => setInfoItem({ ...c, icon: "📐", price: undefined })} />
                  </div>
                  <div className={`font-syne text-3xl font-black ${complexity === c.id ? "text-accent" : "text-white/20"}`}>×{c.multiplier}</div>
                  <p className="text-white/40 text-xs leading-relaxed line-clamp-3">{c.description}</p>
                </SelectCard>
              ))}
            </div>
            <div className="flex justify-between mt-8">
              <button type="button" onClick={() => setStep(1)} className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-syne font-bold transition-all">← Atras</button>
              <button type="button" onClick={() => setStep(3)} className="px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-syne font-bold transition-all">Siguiente →</button>
            </div>
          </motion.div>
        )}

        {/* ── STEP 3: Delivery ── */}
        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="font-syne text-xl font-bold text-white mb-2">Tiempo de entrega requerido</h2>
            <p className="text-white/40 text-sm font-mono mb-6">Los tiempos urgentes aplican recargo.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {DELIVERY_OPTIONS.map((d) => (
                <SelectCard key={d.id} selected={delivery === d.id} onClick={() => setDelivery(d.id)} className="flex flex-col gap-3 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className={`font-syne font-bold text-lg ${delivery === d.id ? "text-white" : "text-white/80"}`}>{d.label}</p>
                      <p className="text-white/40 text-xs font-mono">{d.sublabel}</p>
                    </div>
                    <InfoBtn onClick={() => setInfoItem({ ...d, icon: "⏱", price: d.surcharge > 0 ? Math.round(afterComplexity * d.surcharge) : 0, label: `Entrega ${d.label}` })} />
                  </div>
                  <div className={`font-syne text-2xl font-black ${delivery === d.id ? "text-accent" : "text-white/20"}`}>
                    {d.surcharge === 0 ? "Sin recargo" : `+${d.surcharge * 100}%`}
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed line-clamp-3">{d.description}</p>
                </SelectCard>
              ))}
            </div>

            <div className="mt-8 p-5 bg-gradient-to-r from-accent/10 to-cyan-500/5 border border-accent/20 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Estimacion actual</p>
                <p className="font-syne text-3xl font-bold text-white">${totalUSD.toLocaleString()} <span className="text-lg text-white/40">USD</span></p>
                <p className="text-cyan-400 font-mono text-sm">aprox. ${totalCOP.toLocaleString()} COP</p>
              </div>
              <div className="text-right text-white/30 text-xs font-mono">
                <p>Base: ${base}</p>
                <p>Modulos: +${modulesTotal}</p>
                <p>x{complexityLevel?.multiplier}</p>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button type="button" onClick={() => setStep(2)} className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-syne font-bold transition-all">← Atras</button>
              <button type="button" onClick={() => setShowSummary(true)} className="px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-syne font-bold transition-all shadow-lg shadow-accent/20">
                Ver Cotizacion Final ✓
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

// ─── Page Entry ───────────────────────────────
export default function QuoterPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("quoter_unlocked") === "1") setUnlocked(true);
    setChecking(false);
  }, []);

  if (checking) return (
    <div className="min-h-screen bg-[#08070C] flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-accent/40 border-t-accent rounded-full animate-spin" />
    </div>
  );

  return unlocked ? <QuoterApp /> : <PinGate onUnlock={() => setUnlocked(true)} />;
}
