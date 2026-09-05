"use client";
import { useLang } from "@/lib/LangContext";
import Reveal from "@/components/Reveal";

const CONTENT = {
  en: {
    navLabel: "Privacy",
    heading: "Privacy Policy",
    updated: "Last updated: September 2026",
    intro:
      "This policy explains what information Vyntra Orbit collects when you visit this site or reach out to us, and how we use it. We keep this simple and readable on purpose.",
    sections: [
      {
        title: "1. Who is responsible for your data",
        body: "Vyntra Orbit is a digital studio operated by Mauricio Rodríguez, based in Cali, Colombia. For any privacy-related question, contact vyntraorbit@gmail.com.",
      },
      {
        title: "2. What information we collect",
        body: "When you submit the contact form, we collect your name, email, phone (if provided), the type of project, estimated budget, timeline, and the details you write. When you browse the site, analytics and advertising tools (such as Meta Pixel and Google's tag) may automatically collect your IP address, device/browser type, and which pages you visit.",
      },
      {
        title: "3. How we use it",
        body: "To respond to your inquiry and put together a proposal, to improve the site and our services, and to measure how well our Instagram/Facebook and Google ad campaigns perform — so we know which content actually helps people, not to build a profile on you.",
      },
      {
        title: "4. Who we share it with",
        body: "We don't sell or rent your data to anyone. We use Vercel to host this site, and WhatsApp Business to talk with you if you choose that channel. Meta and Google process anonymized analytics/ad data under their own privacy policies when their tracking tools are active on this site.",
      },
      {
        title: "5. Cookies and tracking",
        body: "This site may use cookies from Meta Pixel and Google's tag to measure ad performance. You can block or delete cookies at any time from your browser settings — the site works fine without them, you'll just stop being counted in our ad reporting.",
      },
      {
        title: "6. Your rights",
        body: "Under Colombian Law 1581 of 2012 (Habeas Data), you can ask us at any time to access, correct, or delete the personal data we hold about you. Just email vyntraorbit@gmail.com and we'll handle it directly — no forms, no waiting.",
      },
      {
        title: "7. Data security",
        body: "Contact form submissions are transmitted securely and stored only as long as needed to manage your project inquiry. We don't store payment or financial information on this site.",
      },
      {
        title: "8. Changes to this policy",
        body: "If this policy changes, we'll update the date at the top of this page. Continued use of the site after a change means you accept the updated version.",
      },
    ],
    contactCta: "Questions about your data? Write to vyntraorbit@gmail.com",
  },
  es: {
    navLabel: "Privacidad",
    heading: "Política de Privacidad",
    updated: "Última actualización: septiembre 2026",
    intro:
      "Esta política explica qué información recopila Vyntra Orbit cuando visitas este sitio o nos escribes, y cómo la usamos. La mantenemos simple y clara a propósito.",
    sections: [
      {
        title: "1. Quién es responsable de tus datos",
        body: "Vyntra Orbit es un estudio digital operado por Mauricio Rodríguez, con sede en Cali, Colombia. Para cualquier pregunta sobre privacidad, escribe a vyntraorbit@gmail.com.",
      },
      {
        title: "2. Qué información recopilamos",
        body: "Cuando envías el formulario de contacto, recopilamos tu nombre, correo, celular (si lo indicas), el tipo de proyecto, presupuesto estimado, plazo y los detalles que escribas. Cuando navegas el sitio, herramientas de analítica y publicidad (como Meta Pixel y la etiqueta de Google) pueden recopilar automáticamente tu dirección IP, tipo de dispositivo/navegador y qué páginas visitas.",
      },
      {
        title: "3. Para qué la usamos",
        body: "Para responder tu solicitud y armar una propuesta, para mejorar el sitio y nuestros servicios, y para medir qué tan bien funcionan nuestras campañas publicitarias en Instagram/Facebook y Google — para saber qué contenido realmente ayuda a la gente, no para construir un perfil sobre ti.",
      },
      {
        title: "4. Con quién la compartimos",
        body: "No vendemos ni alquilamos tus datos a nadie. Usamos Vercel para alojar este sitio, y WhatsApp Business para hablar contigo si eliges ese canal. Meta y Google procesan datos anonimizados de analítica/publicidad bajo sus propias políticas de privacidad cuando sus herramientas de seguimiento están activas en este sitio.",
      },
      {
        title: "5. Cookies y seguimiento",
        body: "Este sitio puede usar cookies de Meta Pixel y de la etiqueta de Google para medir el rendimiento de anuncios. Puedes bloquear o eliminar cookies en cualquier momento desde la configuración de tu navegador — el sitio funciona bien sin ellas, solo dejas de contarte en nuestros reportes publicitarios.",
      },
      {
        title: "6. Tus derechos",
        body: "Bajo la Ley 1581 de 2012 de Colombia (Habeas Data), puedes pedirnos en cualquier momento acceder, corregir o eliminar los datos personales que tenemos sobre ti. Solo escribe a vyntraorbit@gmail.com y lo resolvemos directamente — sin formularios, sin esperas.",
      },
      {
        title: "7. Seguridad de los datos",
        body: "Los envíos del formulario de contacto se transmiten de forma segura y se almacenan solo el tiempo necesario para gestionar tu solicitud de proyecto. No almacenamos información de pago o financiera en este sitio.",
      },
      {
        title: "8. Cambios a esta política",
        body: "Si esta política cambia, actualizaremos la fecha al inicio de esta página. Seguir usando el sitio después de un cambio significa que aceptas la versión actualizada.",
      },
    ],
    contactCta: "¿Preguntas sobre tus datos? Escribe a vyntraorbit@gmail.com",
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

export default function Privacy() {
  const { lang } = useLang();
  const C = CONTENT[lang] || CONTENT.es;

  return (
    <div style={{ padding: "clamp(48px,5vw,80px) 0 clamp(60px,6vw,100px)", position: "relative" }}>
      <div
        style={{
          position: "fixed",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 500,
          pointerEvents: "none",
          background: "radial-gradient(ellipse,rgba(139,92,246,0.05) 0%,transparent 70%)",
          zIndex: 0,
        }}
      />

      <div style={{ width: "100%", maxWidth: "min(900px,94vw)", margin: "0 auto", padding: "0 clamp(20px,3vw,60px)", position: "relative", zIndex: 1 }}>
        <Reveal>
          <SectionLabel label={C.navLabel} />
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,4vw,58px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", color: "rgba(232,232,240,0.95)", margin: "0 0 10px" }}>
            {C.heading}
          </h1>
          <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "clamp(11px,0.75vw,13px)", color: "rgba(139,92,246,0.7)", letterSpacing: "0.05em", margin: "0 0 clamp(24px,2.5vw,36px)" }}>
            {C.updated}
          </p>
          <p style={{ fontSize: "clamp(14px,1vw,17px)", lineHeight: 1.85, color: "rgba(232,232,240,0.6)", margin: "0 0 clamp(36px,4vw,56px)", maxWidth: 680 }}>
            {C.intro}
          </p>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px,2vw,28px)" }}>
          {C.sections.map((s, i) => (
            <Reveal key={i} delay={Math.min(i * 0.04, 0.2)}>
              <div className="vo-card" style={{ padding: "clamp(22px,2.4vw,32px)" }}>
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(17px,1.4vw,21px)", fontWeight: 700, color: "white", margin: "0 0 10px" }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: "clamp(13px,0.92vw,15px)", lineHeight: 1.8, color: "rgba(232,232,240,0.55)", margin: 0 }}>
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div
            style={{
              marginTop: "clamp(32px,4vw,48px)",
              padding: "clamp(20px,2.2vw,28px)",
              borderRadius: "var(--vo-radius-md)",
              background: "rgba(139,92,246,0.06)",
              border: "1px solid rgba(139,92,246,0.2)",
              textAlign: "center",
            }}
          >
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "clamp(12px,0.85vw,14px)", color: "#C4B5FD", letterSpacing: "0.02em" }}>
              {C.contactCta}
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
