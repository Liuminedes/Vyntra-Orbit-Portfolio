"use client";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiCheck,
  FiZap,
  FiShield,
  FiClock,
  FiLayers,
  FiCode,
  FiLayout,
} from "react-icons/fi";
import { useLang } from "@/lib/LangContext";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsContent,
} from "@/components/animate-ui/components/radix/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/components/radix/accordion";

const SERVICE_ICONS = [FiLayers, FiCode, FiZap, FiLayout];

/* ── Contenido bilingüe ── */
const CONTENT = {
  en: {
    navLabel: "Services",
    heading: "What we build for you",
    subheading:
      "We turn your ideas into digital products that actually work — fast, solid and built to grow with your business.",
    highlights: [
      { icon: <FiZap size={13} />, text: "Fast delivery" },
      { icon: <FiShield size={13} />, text: "Clean, quality code" },
      { icon: <FiClock size={13} />, text: "Available now" },
      { icon: <FiCheck size={13} />, text: "Support after delivery" },
    ],
    sectionServices: "What we offer",
    servicesSubtitle: "Four areas where we help businesses grow digitally.",
    services: [
      {
        icon: 0,
        title: "Platform Development",
        desc: "We build custom web platforms from scratch — tailored to how your business works. Includes admin panels, data management, payment integrations and everything you need to operate online.",
        tags: ["React", "Angular", "Node.js", "Laravel", "MySQL / PostgreSQL", "REST API"],
      },
      {
        icon: 3,
        title: "UI/UX Design",
        desc: "We design interfaces that are easy to understand and enjoyable to use. Clean, modern and ready for your developers — no guesswork needed.",
        tags: ["Figma", "Tailwind", "Framer Motion"],
      },
      {
        icon: 2,
        title: "AI & WhatsApp Automation",
        desc: "We connect your tools and eliminate manual, repetitive work — including conversational AI agents on WhatsApp that qualify leads and answer 24/7.",
        tags: ["n8n", "Baileys", "OpenAI", "Zapier", "Webhooks", "Cron"],
      },
      {
        icon: 1,
        title: "Cloud & DevOps",
        desc: "We take care of your platform so you don't have to worry. Fast response, continuous monitoring and constant improvements — your product always running at its best.",
        tags: ["CI/CD", "Monitoring", "Security", "Edge Deploy"],
      },
    ],
    sectionFaq: "FAQ",
    faqSubtitle: "Straight answers before you reach out.",
    faq: [
      { q: "How long does a typical project take?", a: "Landing pages and digital menus: 1-2 weeks. Custom platforms and SaaS: 4-10 weeks depending on scope. You get a clear timeline before we start, not after." },
      { q: "Do you work with businesses outside Cali?", a: "Yes — Vyntra Orbit operates 100% remote with national reach across Colombia. All communication, delivery, and support happen online." },
      { q: "How does payment work?", a: "Custom builds: a deposit to start, the rest on delivery. Our own SaaS products (IvyOS, Clinova, DriveSync): a monthly subscription instead of a large upfront cost." },
      { q: "Who exactly will I be talking to?", a: "Me — Mauricio Rodriguez, founder and the person who actually writes the code. No account managers, no handoffs between departments." },
      { q: "Can you take over a project someone else started?", a: "Yes. We review what exists, tell you honestly what's worth keeping, and move it forward without starting from zero." },
    ],
    ctaTitle: "Ready to get started?",
    ctaDesc:
      "Tell us what you need. We respond within 24 hours with a clear proposal.",
    ctaBtn: "Get a free quote",
    available: "Available for projects",
    info: [
      { label: "Studio", value: "Vyntra Orbit" },
      { label: "Based in", value: "Cali, Colombia 🇨🇴" },
      { label: "Reach", value: "National" },
      { label: "Lead dev", value: "Mauricio Rodriguez" },
      { label: "Status", value: "✓ Open for projects" },
      { label: "Languages", value: "Spanish & English" },
    ],
    saasBanner: {
      headline: "Stop Losing Leads After Hours",
      subtitle: "Automate responses, follow-ups, and appointments with AI and WhatsApp for dealerships and growing businesses.",
      btnPrimary: "Book Free Demo",
      btnSecondary: "Watch Live Demo"
    },
  },
  es: {
    navLabel: "Servicios",
    heading: "Lo que construimos para ti",
    subheading:
      "Convertimos tus ideas en productos digitales que realmente funcionan — rápido, sólido y listo para crecer con tu negocio.",
    highlights: [
      { icon: <FiZap size={13} />, text: "Entrega rápida" },
      { icon: <FiShield size={13} />, text: "Código limpio y de calidad" },
      { icon: <FiClock size={13} />, text: "Disponible ahora" },
      { icon: <FiCheck size={13} />, text: "Soporte después de la entrega" },
    ],
    sectionServices: "Lo que ofrecemos",
    servicesSubtitle:
      "Cuatro áreas donde ayudamos a los negocios a crecer digitalmente.",
    services: [
      {
        icon: 0,
        title: "Desarrollo de Plataformas",
        desc: "Construimos plataformas web personalizadas desde cero — adaptadas a cómo funciona tu negocio. Incluye paneles de control, gestión de datos, integraciones de pago y todo lo que necesitas para operar en línea.",
        tags: ["React", "Angular", "Node.js", "Laravel", "MySQL / PostgreSQL", "REST API"],
      },
      {
        icon: 3,
        title: "Diseño UI/UX",
        desc: "Diseñamos interfaces fáciles de entender y agradables de usar. Modernas, limpias y listas para tus desarrolladores — sin adivinar nada.",
        tags: ["Figma", "Tailwind", "Framer Motion"],
      },
      {
        icon: 2,
        title: "Automatización IA & WhatsApp",
        desc: "Conectamos tus herramientas y eliminamos el trabajo manual — incluyendo agentes de IA conversacional en WhatsApp que califican leads y responden 24/7.",
        tags: ["n8n", "Baileys", "OpenAI", "Zapier", "Webhooks", "Cron"],
      },
      {
        icon: 1,
        title: "Cloud & DevOps",
        desc: "Nos encargamos de tu plataforma para que tú no tengas que preocuparte. Respuesta rápida, monitoreo continuo y mejoras constantes — tu producto siempre funcionando al máximo.",
        tags: ["CI/CD", "Monitoreo", "Seguridad", "Edge Deploy"],
      },
    ],
    sectionFaq: "Preguntas Frecuentes",
    faqSubtitle: "Respuestas directas antes de escribirnos.",
    faq: [
      { q: "¿Cuánto tarda un proyecto típico?", a: "Landing pages y menús digitales: 1-2 semanas. Plataformas a medida y SaaS: 4-10 semanas según el alcance. Recibes un cronograma claro antes de empezar, no después." },
      { q: "¿Trabajan con negocios fuera de Cali?", a: "Sí — Vyntra Orbit opera 100% remoto con atención a nivel nacional en Colombia. Toda la comunicación, entrega y soporte son en línea." },
      { q: "¿Cómo funciona el pago?", a: "Desarrollos a medida: un anticipo para empezar, el resto contra entrega. Nuestros productos SaaS propios (IvyOS, Clinova, DriveSync): mensualidad en vez de un pago inicial grande." },
      { q: "¿Con quién voy a hablar exactamente?", a: "Conmigo — Mauricio Rodríguez, fundador y quien realmente escribe el código. Sin gestores de cuenta, sin traspasos entre departamentos." },
      { q: "¿Pueden retomar un proyecto que alguien más empezó?", a: "Sí. Revisamos lo que ya existe, te decimos honestamente qué vale la pena conservar, y lo llevamos adelante sin empezar desde cero." },
    ],
    ctaTitle: "¿Listo para empezar?",
    ctaDesc:
      "Cuéntanos qué necesitas. Respondemos en menos de 24 horas con una propuesta clara.",
    ctaBtn: "Cotización gratis",
    available: "Disponible para proyectos",
    info: [
      { label: "Studio", value: "Vyntra Orbit" },
      { label: "Sede", value: "Cali, Colombia 🇨🇴" },
      { label: "Cobertura", value: "Nacional" },
      { label: "Dev líder", value: "Mauricio Rodriguez" },
      { label: "Estado", value: "✓ Abierto a proyectos" },
      { label: "Idiomas", value: "Español e Inglés" },
    ],
    saasBanner: {
      headline: "Deja de Perder Leads Fuera de Horario",
      subtitle: "Automatiza respuestas, seguimiento y citas con IA y WhatsApp para concesionarios y empresas en expansión.",
      btnPrimary: "Agendar Demo Gratis",
      btnSecondary: "Ver Demo en Vivo"
    },
  },
};

const SectionLabel = ({ label }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "clamp(10px,1vw,16px)" }}>
    <span style={{ display: "block", width: "clamp(28px,2.5vw,44px)", height: 1, background: "linear-gradient(90deg,#8B5CF6,transparent)", flexShrink: 0 }} />
    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "clamp(10px,0.7vw,12px)", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,232,240,0.4)" }}>
      {label}
    </span>
  </div>
);

const Divider = () => (
  <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(139,92,246,0.2),transparent)", margin: "clamp(56px,6vw,96px) 0" }} />
);

export default function Services() {
  const { lang } = useLang();
  const C = CONTENT[lang] || CONTENT.es;

  return (
    <div style={{ padding: "clamp(48px,5vw,80px) 0 clamp(60px,6vw,100px)", position: "relative" }}>
      <div
        style={{
          position: "fixed",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 400,
          pointerEvents: "none",
          background: "radial-gradient(ellipse,rgba(139,92,246,0.04) 0%,transparent 70%)",
          zIndex: 0,
        }}
      />

      <div style={{ width: "100%", maxWidth: "min(1800px,94vw)", margin: "0 auto", padding: "0 clamp(20px,3vw,60px)", position: "relative", zIndex: 1 }}>
        {/* 1 — ENCABEZADO + HIGHLIGHTS */}
        <div>
          <div style={{ marginBottom: "clamp(36px,4vw,56px)" }}>
            <SectionLabel label={C.navLabel} />
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,4vw,68px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.02em", color: "rgba(232,232,240,0.95)", margin: 0 }}>
              {C.heading}
            </h2>
          </div>

          <style>{`@media(min-width:900px){ .svc-top-grid { grid-template-columns: 1fr clamp(260px,26vw,400px) !important; } }`}</style>
          <div className="svc-top-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(32px,4vw,64px)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px,1.4vw,22px)" }}>
              <p style={{ fontSize: "clamp(14px,1vw,18px)", lineHeight: 1.85, color: "rgba(232,232,240,0.6)", margin: 0, maxWidth: 640 }}>
                {C.subheading}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(6px,0.7vw,10px)", paddingTop: "clamp(4px,0.5vw,8px)" }}>
                {C.highlights.map((h, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "var(--vo-radius-sm)", padding: "clamp(6px,0.65vw,10px) clamp(10px,1vw,16px)" }}>
                    <span style={{ color: "rgba(139,92,246,0.7)", flexShrink: 0 }}>{h.icon}</span>
                    <span style={{ width: 1, height: 10, background: "rgba(255,255,255,0.1)" }} />
                    <span style={{ fontSize: "clamp(11px,0.72vw,13px)", color: "rgba(232,232,240,0.75)", fontWeight: 500 }}>{h.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(6px,0.7vw,10px)" }}>
              {C.info.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "var(--vo-radius-sm)", padding: "clamp(6px,0.65vw,10px) clamp(10px,1vw,16px)" }}>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "clamp(9px,0.58vw,11px)", color: "rgba(139,92,246,0.7)", textTransform: "uppercase", letterSpacing: "0.12em", flexShrink: 0 }}>
                    {item.label}
                  </span>
                  <span style={{ width: 1, height: 10, background: "rgba(255,255,255,0.1)", flexShrink: 0 }} />
                  <span style={{ fontSize: "clamp(11px,0.72vw,13px)", color: "rgba(232,232,240,0.75)", fontWeight: 500 }}>{item.value}</span>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(8,7,12,0.92)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: 100, padding: "8px 16px", marginTop: 6, backdropFilter: "blur(12px)", alignSelf: "flex-start" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00ff88", animation: "pulse-wip 2s infinite" }} />
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "clamp(8px,0.56vw,10px)", letterSpacing: "0.14em", color: "rgba(232,232,240,0.55)", textTransform: "uppercase" }}>
                  {C.available}
                </span>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* 2 — SERVICIOS (tabs funcionales por categoría) */}
        <div>
          <div style={{ marginBottom: "clamp(32px,3.5vw,52px)" }}>
            <SectionLabel label={C.sectionServices} />
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(28px,3.5vw,58px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.02em", color: "rgba(232,232,240,0.95)", margin: 0 }}>
                {C.sectionServices}
              </h2>
              <p style={{ fontSize: "clamp(13px,0.88vw,15px)", color: "rgba(232,232,240,0.4)", maxWidth: 380, margin: 0, lineHeight: 1.65 }}>
                {C.servicesSubtitle}
              </p>
            </div>
          </div>

          <Tabs defaultValue="0">
            <TabsList style={{ height: "auto", flexWrap: "wrap", gap: 4, padding: 6 }}>
              {C.services.map((s, i) => {
                const Icon = SERVICE_ICONS[s.icon];
                return (
                  <TabsTrigger key={i} value={String(i)} style={{ padding: "10px 16px", gap: 8 }}>
                    <Icon size={15} />
                    {s.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <TabsContents style={{ marginTop: 24 }}>
              {C.services.map((s, i) => {
                const Icon = SERVICE_ICONS[s.icon];
                return (
                  <TabsContent key={i} value={String(i)}>
                    <div
                      className="vo-card"
                      style={{ padding: "clamp(28px,3vw,48px)", display: "flex", flexDirection: "column", gap: "clamp(14px,1.4vw,20px)" }}
                    >
                      <div style={{ width: "clamp(48px,4.5vw,64px)", height: "clamp(48px,4.5vw,64px)", borderRadius: "50%", border: "1px solid rgba(139,92,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD" }}>
                        <Icon size={22} />
                      </div>
                      <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(20px,2vw,30px)", fontWeight: 700, color: "white", margin: 0 }}>
                        {s.title}
                      </h3>
                      <p style={{ fontSize: "clamp(14px,0.95vw,17px)", lineHeight: 1.75, color: "rgba(232,232,240,0.6)", margin: 0, maxWidth: 680 }}>
                        {s.desc}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
                        {s.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: "'DM Mono',monospace",
                              fontSize: "clamp(9px,0.6vw,11px)",
                              padding: "5px 12px",
                              borderRadius: 100,
                              background: "rgba(139,92,246,0.08)",
                              border: "1px solid rgba(139,92,246,0.2)",
                              color: "#C4B5FD",
                              letterSpacing: "0.06em",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </TabsContents>
          </Tabs>
        </div>

        {/* 2.5 — SAAS BANNER */}
        <div
          style={{
            marginTop: "clamp(32px, 4vw, 56px)",
            padding: "clamp(32px, 4vw, 56px)",
            borderRadius: "var(--vo-radius-lg)",
            background: "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(8,7,12,0.8) 100%)",
            border: "1px solid rgba(139,92,246,0.2)",
            boxShadow: "0 0 40px rgba(139,92,246,0.05), inset 0 0 20px rgba(139,92,246,0.05)",
            backdropFilter: "blur(12px)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "clamp(16px, 2vw, 24px)"
          }}
        >
          <div style={{ position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)", width: "60%", height: "100%", background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(24px, 3.5vw, 48px)", fontWeight: 800, lineHeight: 1.1, color: "white", margin: 0, zIndex: 1 }}>
            {C.saasBanner.headline}
          </h3>
          <p style={{ fontSize: "clamp(14px, 1vw, 18px)", color: "rgba(232,232,240,0.6)", maxWidth: 680, margin: 0, lineHeight: 1.6, zIndex: 1 }}>
            {C.saasBanner.subtitle}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginTop: 8, zIndex: 1 }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#00ff88,#00cc6a)", color: "#08070C", padding: "clamp(12px,1vw,16px) clamp(24px,2vw,32px)", fontFamily: "'DM Mono',monospace", fontSize: "clamp(11px,0.75vw,13px)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none", borderRadius: 100, transition: "transform .2s, box-shadow .2s", boxShadow: "0 0 20px rgba(0,255,136,0.2)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 30px rgba(0,255,136,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,136,0.2)"; }}>
              <FiCheck size={16} />
              {C.saasBanner.btnPrimary}
            </Link>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", padding: "clamp(12px,1vw,16px) clamp(24px,2vw,32px)", fontFamily: "'DM Mono',monospace", fontSize: "clamp(11px,0.75vw,13px)", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none", borderRadius: 100, transition: "background .2s, border-color .2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
              {C.saasBanner.btnSecondary}
            </Link>
          </div>
        </div>

        <Divider />

        {/* FAQ */}
        <div>
          <div style={{ marginBottom: "clamp(28px,3vw,44px)" }}>
            <SectionLabel label={C.sectionFaq} />
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(28px,3.5vw,58px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.02em", color: "rgba(232,232,240,0.95)", margin: 0 }}>
                {C.sectionFaq}
              </h2>
              <p style={{ fontSize: "clamp(13px,0.88vw,15px)", color: "rgba(232,232,240,0.4)", maxWidth: 380, margin: 0, lineHeight: 1.65 }}>
                {C.faqSubtitle}
              </p>
            </div>
          </div>

          <Accordion type="single" collapsible className="vo-card" style={{ padding: "clamp(8px,1vw,16px) clamp(20px,2.5vw,36px)" }}>
            {C.faq.map((item, i) => (
              <AccordionItem key={i} value={String(i)} style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <AccordionTrigger style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(15px,1.1vw,19px)", color: "white" }}>
                  {item.q}
                </AccordionTrigger>
                <AccordionContent style={{ fontSize: "clamp(13px,0.9vw,15px)", lineHeight: 1.7, color: "rgba(232,232,240,0.55)" }}>
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Divider />

        {/* CTA FINAL */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "clamp(20px,2.5vw,40px)", padding: "clamp(28px,3vw,48px)", background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.15)", borderRadius: "var(--vo-radius-lg)" }}>
          <div>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(20px,2vw,34px)", fontWeight: 700, color: "white", margin: "0 0 clamp(8px,0.8vw,12px) 0" }}>
              {C.ctaTitle}
            </h3>
            <p style={{ fontSize: "clamp(13px,0.88vw,15px)", color: "rgba(232,232,240,0.45)", margin: 0, maxWidth: 460, lineHeight: 1.65 }}>
              {C.ctaDesc}
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-glow-solid"
            style={{ textDecoration: "none", flexShrink: 0 }}
          >
            {C.ctaBtn}
            <FiArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
