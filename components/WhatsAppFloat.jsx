"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useLang } from "@/lib/LangContext";

export default function WhatsAppFloat() {
  const { lang } = useLang();
  const label = lang === "es" ? "Escríbenos por WhatsApp" : "Message us on WhatsApp";

  return (
    <a
      href="https://wa.me/573177686358"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      style={{
        position: "fixed",
        bottom: "clamp(16px,3vw,28px)",
        right: "clamp(16px,3vw,28px)",
        zIndex: 90,
        width: 56,
        height: 56,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#25D366",
        color: "#08070C",
        boxShadow: "0 4px 24px rgba(37,211,102,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
        transition: "transform .2s, box-shadow .2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.boxShadow = "0 6px 32px rgba(37,211,102,0.55), 0 0 0 1px rgba(255,255,255,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(37,211,102,0.4), 0 0 0 1px rgba(255,255,255,0.1)";
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "#25D366",
          opacity: 0.5,
          animation: "pulse-wip 2.2s ease-in-out infinite",
        }}
      />
      <FaWhatsapp size={26} style={{ position: "relative" }} />
    </a>
  );
}
