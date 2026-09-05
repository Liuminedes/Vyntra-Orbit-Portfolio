"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiPhone, FiRefreshCw } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { GiMapleLeaf } from "react-icons/gi";
import { FaTooth, FaCar, FaHandHoldingDollar } from "react-icons/fa6";
import { useLang } from "@/lib/LangContext";
import BentoGrid from "@/components/BentoGrid";
import SplitSection from "@/components/SplitSection";
import Reveal from "@/components/Reveal";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import {
  FlipButton,
  FlipButtonFront,
  FlipButtonBack,
} from "@/components/animate-ui/components/buttons/flip";

const techStack = [
  "Next.js", "React", "Angular", "Laravel", "Node.js", "TypeScript", "PostgreSQL",
  "Tailwind CSS", "n8n", "Baileys", "OpenAI", "WhatsApp API", "Vercel", "Firebase",
];

/* ── Logo card ── */
const LogoCard = () => (
  <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div style={{ position: "absolute", inset: "-32px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 68%)", pointerEvents: "none", animation: "floatDot 6s ease-in-out infinite" }} />
    <svg style={{ position: "absolute", width: "110%", height: "110%", pointerEvents: "none", animation: "spin-slow 18s linear infinite", opacity: 0.35 }} viewBox="0 0 400 400" fill="none">
      <ellipse cx="200" cy="200" rx="190" ry="70" stroke="url(#orbitGrad)" strokeWidth="1.5" strokeDasharray="8 14" />
      <defs><linearGradient id="orbitGrad" x1="0" y1="0" x2="400" y2="0"><stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" /><stop offset="40%" stopColor="#8B5CF6" stopOpacity="1" /><stop offset="100%" stopColor="#00D4FF" stopOpacity="0.4" /></linearGradient></defs>
    </svg>
    <div style={{ position: "relative", width: "clamp(220px, 23vw, 400px)", height: "clamp(220px, 23vw, 400px)", borderRadius: "clamp(16px, 1.5vw, 28px)", overflow: "hidden", boxShadow: "0 0 0 1px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.12), inset 0 0 40px rgba(139,92,246,0.04)", background: "linear-gradient(145deg, rgba(139,92,246,0.08) 0%, rgba(8,7,12,0.95) 50%, rgba(0,212,255,0.04) 100%)" }}>
      <Image src="/assets/VYNTRA_ORBIT.png" fill priority sizes="(max-width: 768px) 220px, 400px" alt="Vyntra Orbit" style={{ objectFit: "contain", padding: "clamp(16px,2vw,32px)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(139,92,246,0.015) 3px, rgba(139,92,246,0.015) 4px)", pointerEvents: "none", borderRadius: "inherit" }} />
      {[
        { top: 0, left: 0, borderTop: "2px solid rgba(139,92,246,0.7)", borderLeft: "2px solid rgba(139,92,246,0.7)" },
        { top: 0, right: 0, borderTop: "2px solid rgba(139,92,246,0.7)", borderRight: "2px solid rgba(139,92,246,0.7)" },
        { bottom: 0, left: 0, borderBottom: "2px solid rgba(0,212,255,0.5)", borderLeft: "2px solid rgba(0,212,255,0.5)" },
        { bottom: 0, right: 0, borderBottom: "2px solid rgba(0,212,255,0.5)", borderRight: "2px solid rgba(0,212,255,0.5)" },
      ].map((s, i) => (
        <div key={i} style={{ position: "absolute", width: "clamp(14px,1.8vw,24px)", height: "clamp(14px,1.8vw,24px)", ...s }} />
      ))}
    </div>
    <div style={{ position: "absolute", bottom: "-12px", left: "50%", transform: "translateX(-50%)", background: "rgba(8,7,12,0.9)", border: "1px solid rgba(139,92,246,0.35)", borderRadius: 100, padding: "5px 14px", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap", backdropFilter: "blur(12px)" }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00ff88", animation: "pulse-wip 2s infinite" }} />
      <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "clamp(8px,0.6vw,10px)", letterSpacing: "0.15em", color: "rgba(232,232,240,0.6)", textTransform: "uppercase" }}>
        Enterprise Architecture
      </span>
    </div>
  </div>
);

/* ── Tech Marquee ── */
const TechMarquee = () => (
  <div className="relative py-12 overflow-hidden border-y border-white/5 bg-black/30">
    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#08070C] to-transparent z-10" />
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#08070C] to-transparent z-10" />
    <div className="flex animate-marquee whitespace-nowrap">
      {[...techStack, ...techStack].map((tech, i) => (
        <span key={i} className="mx-6 text-sm font-mono text-white/30 uppercase tracking-widest flex items-center gap-3 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
          {tech}
        </span>
      ))}
    </div>
  </div>
);

/* ── How We Work ── */
const HowWeWork = ({ lang }) => {
  const steps = [
    {
      num: "01",
      title: lang === "es" ? "Discovery & Arquitectura" : "Discovery & Architecture",
      desc: lang === "es" ? "Analizamos tu negocio, definimos la arquitectura técnica y creamos el roadmap de tu producto." : "We analyze your business, define the technical architecture, and create your product roadmap.",
    },
    {
      num: "02",
      title: lang === "es" ? "Desarrollo Ágil" : "Agile Development",
      desc: lang === "es" ? "Sprints semanales con entregas visibles. Tu proyecto avanza cada semana con revisiones en tiempo real." : "Weekly sprints with visible deliverables. Your project advances every week with real-time reviews.",
    },
    {
      num: "03",
      title: lang === "es" ? "Lanzamiento & Escala" : "Launch & Scale",
      desc: lang === "es" ? "Desplegamos a producción con monitoreo activo. Iteramos basándonos en datos y métricas reales." : "We deploy to production with active monitoring. We iterate based on real data and metrics.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-accent font-mono text-sm tracking-widest uppercase">
            {lang === "es" ? "Proceso" : "Process"}
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold font-syne text-white">
            {lang === "es" ? "Cómo Trabajamos" : "How We Work"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center px-8 py-8">
              <div className="w-24 h-24 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-8 relative z-10">
                <span className="font-syne text-3xl font-bold text-accent">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold font-syne text-white mb-3">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Cases / Trust cards (real products, review slot ready) ── */
const CasesSection = ({ lang }) => {
  const cases = [
    {
      name: "IvyOS",
      icon: GiMapleLeaf,
      color: "#4ADE80",
      line: lang === "es"
        ? "En uso diario para inventario y caja de negocios físicos — control de stock, turnos y proveedores sin hojas de cálculo."
        : "In daily use for physical-business inventory and register — stock, shifts, and suppliers with no spreadsheets.",
      focus: lang === "es" ? "Inventario & Punto de Venta" : "Inventory & Point of Sale",
      stack: "Next.js · PostgreSQL · Node.js",
    },
    {
      name: "Clinova",
      icon: FaTooth,
      color: "#38BDF8",
      line: lang === "es"
        ? "SaaS de gestión clínica operando con citas, historia clínica y facturación para consultorios reales."
        : "Clinical management SaaS running appointments, medical history, and billing for real practices.",
      focus: lang === "es" ? "Historia Clínica & Citas" : "Medical Records & Scheduling",
      stack: "React · Node.js · PostgreSQL",
    },
    {
      name: "DriveSync",
      icon: FaCar,
      color: "#FB923C",
      line: lang === "es"
        ? "Catálogo público y CRM de leads para inventario vehicular, integrado con WhatsApp para respuesta inmediata."
        : "Public catalog and lead CRM for vehicle inventory, integrated with WhatsApp for instant response.",
      focus: lang === "es" ? "Catálogo & CRM de Leads" : "Catalog & Lead CRM",
      stack: "Next.js · WhatsApp API · Firebase",
    },
    {
      name: "SyncDealer",
      icon: FaHandHoldingDollar,
      color: "#C4B5FD",
      line: lang === "es"
        ? "Gestión de comisiones y nómina para concesionarios multimarca, con ranking de asesores y recibos en PDF."
        : "Commission and payroll management for multi-brand dealerships, with advisor rankings and PDF payslips.",
      focus: lang === "es" ? "Comisiones & Nómina" : "Commissions & Payroll",
      stack: "Node.js · PostgreSQL · PDF Engine",
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h3 className="text-accent font-mono text-sm tracking-widest uppercase">
            {lang === "es" ? "Casos Reales" : "Real Cases"}
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold font-syne text-white">
            {lang === "es" ? "Productos en Uso, No Promesas" : "Products in Use, Not Promises"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                className="vo-card"
                whileHover={{ scale: 1.035, y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ padding: "clamp(24px,2.2vw,32px)", display: "flex", flexDirection: "column", gap: 18 }}
              >
                <div style={{ position: "relative", width: 52, height: 52 }}>
                  <div
                    style={{
                      position: "absolute",
                      inset: -10,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${c.color}55 0%, transparent 70%)`,
                      animation: "glow-pulse 3s ease-in-out infinite",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: `${c.color}14`,
                      border: `1px solid ${c.color}55`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: c.color,
                      filter: `drop-shadow(0 0 8px ${c.color}88)`,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                </div>
                <span className="font-syne text-2xl font-bold text-white">{c.name}</span>
                <p className="text-white/60 text-sm leading-relaxed flex-1">{c.line}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="vo-label" style={{ textTransform: "none", letterSpacing: "0.03em", color: c.color }}>
                    {c.focus}
                  </span>
                  <span className="text-white/40 text-xs font-mono">{c.stack}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ── Direct contact — solo operator as advantage ── */
const DirectContactSection = ({ lang, t }) => (
  <section className="py-20 lg:py-28 relative z-10">
    <div className="container mx-auto px-4">
      <div className="vo-surface grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center" style={{ padding: "clamp(32px,4vw,56px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span className="vo-label">{t.directContact.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold font-syne text-white leading-tight">
            {t.directContact.title}
          </h2>
          <p className="text-white/60 leading-relaxed max-w-2xl">{t.directContact.body}</p>
        </div>
        <div
          style={{
            background: "rgba(0,0,0,0.25)",
            border: "1px solid rgba(139,92,246,0.25)",
            borderRadius: "var(--vo-radius-md)",
            padding: 24,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00ff88", animation: "pulse-wip 2s infinite", flexShrink: 0 }} />
            <span className="vo-label" style={{ color: "#00ff88" }}>
              {lang === "es" ? "Disponible ahora" : "Available now"}
            </span>
          </div>
          <span className="font-syne text-xl font-bold text-white">Mauricio Rodríguez</span>
          <span className="text-white/50 text-sm">
            {lang === "es" ? "Fundador & Desarrollador Full-Stack" : "Founder & Full-Stack Developer"}
          </span>
          <span className="text-white/40 text-sm">Cali, Colombia — {lang === "es" ? "atención nacional" : "national reach"}</span>
        </div>
      </div>
    </div>
  </section>
);

/* ── Switch providers CTA ── */
const SwitchCtaSection = ({ t }) => (
  <section className="py-14 lg:py-16 relative z-10">
    <div className="container mx-auto px-4">
      <div
        className="vo-card"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          padding: "clamp(24px,2.5vw,36px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 18, maxWidth: 640 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#C4B5FD" }}>
            <FiRefreshCw size={18} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="vo-label">{t.switchCta.label}</span>
            <span className="font-syne text-xl font-bold text-white">{t.switchCta.title}</span>
            <p className="text-white/55 text-sm leading-relaxed">{t.switchCta.body}</p>
          </div>
        </div>
        <Link href="/contact" className="btn-glow" style={{ flexShrink: 0 }}>
          {t.switchCta.cta}
          <FiArrowRight />
        </Link>
      </div>
    </div>
  </section>
);

/* ── Final CTA ── */
const FinalCTA = ({ lang }) => (
  <section className="relative py-24 lg:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold font-syne text-white leading-tight">
          {lang === "es"
            ? "¿Listo para transformar tu operación digital?"
            : "Ready to transform your digital operation?"}
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
          {lang === "es"
            ? "Hablemos de tu próximo gran proyecto. Te mostraremos cómo nuestra tecnología puede escalar tu negocio en semanas, no meses."
            : "Let's talk about your next big project. We'll show you how our technology can scale your business in weeks, not months."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <FlipButton asChild>
            <Link
              href="/contact"
              className="rounded-full font-semibold text-lg shadow-lg shadow-accent/20"
              style={{ padding: "20px 40px" }}
            >
              <FlipButtonFront className="bg-accent text-white gap-3">
                <FiPhone className="w-5 h-5" />
                {lang === "es" ? "Agendar Llamada Gratis" : "Schedule Free Call"}
                <FiArrowRight />
              </FlipButtonFront>
              <FlipButtonBack className="bg-white text-[#08070C] gap-3">
                {lang === "es" ? "¡Hablemos ahora!" : "Let's talk now!"}
                <FiArrowRight />
              </FlipButtonBack>
            </Link>
          </FlipButton>
          <a
            href="https://wa.me/573177686358"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] rounded-full font-semibold text-lg transition-all flex items-center gap-3"
          >
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  const { t, lang } = useLang();

  const splitFeaturesSaaS = [
    lang === "es" ? "Dashboards personalizados en tiempo real" : "Custom real-time dashboards",
    lang === "es" ? "Gestión de inventarios y catálogos" : "Inventory & catalog management",
    lang === "es" ? "Integración con WhatsApp y CRM" : "WhatsApp & CRM integration",
    lang === "es" ? "Reportes y métricas automatizadas" : "Automated reports & metrics",
  ];

  const splitFeaturesAI = [
    lang === "es" ? "Atención al cliente 24/7 sin humanos" : "24/7 customer support without humans",
    lang === "es" ? "Calificación automática de leads" : "Automatic lead qualification",
    lang === "es" ? "Presentación de catálogos por chat" : "Catalog presentation via chat",
    lang === "es" ? "Agendamiento inteligente de citas" : "Smart appointment scheduling",
  ];

  const infraItems = [
    {
      title: lang === "es" ? "Arquitectura Serverless" : "Serverless Architecture",
      description: lang === "es" ? "Escalabilidad elástica sin administrar servidores. Edge Computing y funciones Lambda." : "Elastic scalability without managing servers. Edge Computing and Lambda functions.",
      icon: "server",
      features: ["Next.js Edge", "Vercel", "Auto-Scaling"]
    },
    {
      title: lang === "es" ? "Bases de Datos Robustas" : "Robust Databases",
      description: lang === "es" ? "Datos estructurados, seguros y con respaldos automatizados. PostgreSQL con tipado estricto." : "Structured, secure data with automated backups. PostgreSQL with strict typing.",
      icon: "code",
      features: ["Supabase", "Prisma ORM", "RLS Security"]
    },
    {
      title: lang === "es" ? "Despliegue Ultrarrápido" : "Ultra-Fast Deployment",
      description: lang === "es" ? "CI/CD automatizado. Tu código va de desarrollo a producción sin caídas." : "Automated CI/CD. Your code goes from development to production with zero downtime.",
      icon: "zap",
      features: ["GitHub Actions", "Zero-Downtime", "Turbopack"]
    },
    {
      title: lang === "es" ? "Soporte & SLA Crítico" : "Critical SLA & Support",
      description: lang === "es" ? "Monitoreo 24/7 con alertas automáticas. Resolución de incidentes garantizada." : "24/7 monitoring with automated alerts. Guaranteed incident resolution.",
      icon: "shield",
      features: ["Sentry", "24/7 Uptime", "Priority Dev"]
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
        @media(min-width:1024px){
          .home-grid  { grid-template-columns: 1fr clamp(240px,24vw,420px) !important; gap: clamp(40px,4vw,80px) !important; }
          .text-col   { order: 1 !important; }
          .logo-col   { order: 2 !important; }
        }
      `}</style>

      {/* ── HERO SECTION — the one orchestrated motion moment ── */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-20 overflow-hidden">
        <StarsBackground
          starColor="#C4B5FD"
          factor={0.02}
          speed={70}
          pointerEvents={false}
          className="absolute inset-0 z-0"
          style={{ background: "transparent" }}
        />
        <div style={{ position: "absolute", top: "-5%", left: "25%", width: "50vw", height: "50vw", maxWidth: 700, maxHeight: 700, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(139,92,246,0.07) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "5%", right: "5%", width: "35vw", height: "35vw", maxWidth: 500, maxHeight: 500, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle,rgba(0,212,255,0.04) 0%,transparent 70%)" }} />

        <div className="container mx-auto px-4 z-10 relative max-w-7xl">
          <div className="home-grid grid gap-12 items-center">
            <div className="text-col flex flex-col gap-6 order-2">
              <div className="flex items-center gap-3 animate-fade-up">
                <span className="w-8 h-px bg-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                  {t.home.role}
                </span>
              </div>

              <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight animate-fade-up">
                <span className="block text-white/70 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">{t.home.greeting}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-cyan-400">
                  {t.home.name}
                </span>
                {t.home.nameSub && (
                  <span className="block text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-1">{t.home.nameSub}</span>
                )}
              </h1>

              <p className="text-lg text-white/60 max-w-xl leading-relaxed animate-fade-up">
                {t.home.bio}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4 animate-fade-up">
                <Link href="/services" className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-medium transition-all group flex items-center gap-2">
                  {t.home.heroCtaPrimary}
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all">
                  {t.home.heroCtaSecondary}
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-8 mt-4 border-t border-white/5 animate-fade-up">
                {t.stats.map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-syne text-3xl font-bold text-white">{s.num}+</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="logo-col order-1 flex justify-center pb-8 lg:pb-0 animate-fade-up">
              <LogoCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH MARQUEE ── */}
      <Reveal><TechMarquee /></Reveal>

      {/* ── SOLUTIONS ECOSYSTEM ── */}
      <Reveal>
        <BentoGrid
          items={t.services.items}
          title={lang === "es" ? "Nuestras Soluciones" : "Our Solutions"}
          subtitle={lang === "es" ? "Lo Que Construimos Para Ti" : "What We Build For You"}
        />
      </Reveal>

      {/* ── SPLIT: ENTERPRISE MANAGEMENT SYSTEMS ── */}
      <Reveal>
        <SplitSection
          title={lang === "es" ? "Sistemas de Gestión Empresarial" : "Enterprise Management Systems"}
          subtitle={lang === "es" ? "Software a Medida" : "Custom Software"}
          description={lang === "es"
            ? "Centraliza toda tu operación en un solo ecosistema digital. Construimos plataformas que gestionan inventarios, ventas, comisiones y relaciones con clientes — adaptadas exactamente a cómo funciona tu negocio."
            : "Centralize your entire operation into a single digital ecosystem. We build platforms that manage inventory, sales, commissions, and client relationships — tailored exactly to how your business works."}
          features={splitFeaturesSaaS}
          imagePath="/assets/work/drivesync.png"
          ctaText={lang === "es" ? "Solicitar Demo" : "Request Demo"}
          ctaLink="/contact"
        />
      </Reveal>

      {/* ── SPLIT: AI AUTOMATION ── */}
      <Reveal>
        <SplitSection
          title={lang === "es" ? "Automatización Inteligente" : "Intelligent Automation"}
          subtitle={lang === "es" ? "IA & WhatsApp" : "AI & WhatsApp"}
          description={lang === "es"
            ? "Deja que la inteligencia artificial trabaje por ti las 24 horas. Creamos agentes virtuales que entienden el contexto de tu negocio, presentan tus productos y capturan leads calificados sin que muevas un dedo."
            : "Let artificial intelligence work for you around the clock. We create virtual agents that understand your business context, present your products, and capture qualified leads without lifting a finger."}
          features={splitFeaturesAI}
          imagePath="/assets/work/emissary.png"
          reverse={true}
          ctaText={lang === "es" ? "Automatizar Ahora" : "Automate Now"}
          ctaLink="/contact"
        />
      </Reveal>

      {/* ── HOW WE WORK ── */}
      <div className="relative border-y border-white/5 bg-black/30">
        <Reveal><HowWeWork lang={lang} /></Reveal>
      </div>

      {/* ── CASES / TRUST ── */}
      <Reveal><CasesSection lang={lang} /></Reveal>

      {/* ── DIRECT CONTACT ── */}
      <Reveal><DirectContactSection lang={lang} t={t} /></Reveal>

      {/* ── SWITCH PROVIDERS CTA ── */}
      <Reveal><SwitchCtaSection t={t} /></Reveal>

      {/* ── INFRASTRUCTURE GRID ── */}
      <Reveal>
        <BentoGrid
          items={infraItems}
          title={t.home.featuresTitle}
          subtitle={t.home.featuresSubtitle}
        />
      </Reveal>

      {/* ── FINAL CTA ── */}
      <Reveal><FinalCTA lang={lang} /></Reveal>
    </div>
  );
}
