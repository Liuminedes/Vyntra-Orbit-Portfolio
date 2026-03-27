"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/LangContext";

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  const links = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.resume, path: "/resume" },
    { name: t.nav.work, path: "/work" },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          background: "none",
          border: "none",
          padding: "6px 4px",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            display: "block",
            width: 22,
            height: 1.5,
            background: "rgba(255,255,255,0.7)",
            borderRadius: 2,
          }}
        />
        <span
          style={{
            display: "block",
            width: 14,
            height: 1.5,
            background: "#8B5CF6",
            borderRadius: 2,
          }}
        />
        <span
          style={{
            display: "block",
            width: 22,
            height: 1.5,
            background: "rgba(255,255,255,0.7)",
            borderRadius: 2,
          }}
        />
      </button>

      {/* ── El drawer solo existe en el DOM cuando está montado ── */}
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(4px)",
          zIndex: 998,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease",
        }}
      />

      {/* Drawer — visibility:hidden cuando cerrado, evita que afecte scrollWidth */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          /* Ancho fijo que NO desborde — usa vw para que nunca sea > viewport */
          width: "min(280px, 80vw)",
          height: "100dvh",
          background: "#0c0c18",
          borderLeft: "1px solid rgba(139,92,246,0.15)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          padding: 0,
          /* KEY FIX: translate fuera de pantalla sin generar scrollWidth */
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.28s cubic-bezier(0.22,1,0.36,1)",
          /* visibility:hidden cuando cerrado — el browser no lo incluye en scroll layout */
          visibility: open ? "visible" : "hidden",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {/* Header del drawer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 22px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}
          >
            <span
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: 9,
                letterSpacing: "0.25em",
                color: "rgba(139,92,246,0.6)",
                textTransform: "uppercase",
              }}
            >
              Vyntra
            </span>
            <span
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: "white",
              }}
            >
              Orbit
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "50%",
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.5)",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "16px 14px",
            flex: 1,
            gap: 4,
          }}
        >
          {links.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  borderRadius: 8,
                  background: active ? "rgba(139,92,246,0.12)" : "transparent",
                  borderLeft: active
                    ? "2px solid #8B5CF6"
                    : "2px solid transparent",
                  transition: "all 0.15s",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 17,
                    fontWeight: active ? 700 : 500,
                    color: active ? "#8B5CF6" : "rgba(255,255,255,0.65)",
                  }}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* CTA al fondo */}
        <div
          style={{
            padding: "16px 22px 36px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg,#8B5CF6,#6C63FF)",
              color: "white",
              textDecoration: "none",
              padding: "14px 24px",
              borderRadius: 8,
              fontFamily: "'DM Mono',monospace",
              fontSize: 12,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              boxShadow: "0 0 24px rgba(139,92,246,0.3)",
            }}
          >
            {t.nav.hire}
          </Link>
          <p
            style={{
              textAlign: "center",
              marginTop: 12,
              fontFamily: "'DM Mono',monospace",
              fontSize: 9,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.1em",
            }}
          >
            liu.galax.dev.ops@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
