"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/LangContext";

export default function Nav() {
  const pathname = usePathname();
  const { t } = useLang();

  const links = [
    { name: t.nav.home,     path: "/" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.resume,   path: "/resume" },
    { name: t.nav.work,     path: "/work" },
  ];

  return (
    <nav style={{ display: "flex", gap: "clamp(20px, 2.5vw, 44px)" }}>
      {links.map((link, i) => {
        const active = link.path === pathname;
        return (
          <Link
            key={i}
            href={link.path}
            style={{
              position: "relative",
              textDecoration: "none",
              fontFamily: "'DM Mono',monospace",
              fontSize: "clamp(11px, 0.8vw, 14px)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: active ? 600 : 400,
              color: active ? "white" : "rgba(255,255,255,0.4)",
              transition: "color .2s",
              paddingBottom: 4,
            }}
            onMouseEnter={e => { if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
            onMouseLeave={e => { if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
          >
            {link.name}
            {active && (
              <span style={{
                position: "absolute", bottom: -2, left: 0, right: 0,
                height: 1.5,
                background: "linear-gradient(90deg, #8B5CF6, #6C63FF)",
                borderRadius: 2,
              }} />
            )}
          </Link>
        );
      })}
    </nav>
  );
}