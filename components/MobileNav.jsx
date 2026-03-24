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
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="Open menu" className="flex flex-col gap-1.5 p-1">
        <span className="block w-6 h-px bg-white/70" />
        <span className="block w-4 h-px bg-accent" />
        <span className="block w-6 h-px bg-white/70" />
      </button>
      {open && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={() => setOpen(false)} />}
      <div className={`fixed top-0 right-0 h-full w-[75vw] max-w-[320px] bg-[#0c0c18] border-l border-white/05 z-50
        flex flex-col justify-center px-10 gap-2 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setOpen(false)} className="absolute top-8 right-8 text-white/40 hover:text-white text-2xl">✕</button>
        <p className="label-sm mb-8">Vyntra Orbit</p>
        {links.map((link) => (
          <Link key={link.path} href={link.path} onClick={() => setOpen(false)}
            className={`text-2xl font-semibold py-3 border-b border-white/05 transition-colors
              ${pathname === link.path ? "text-accent" : "text-white/60 hover:text-white"}`}
            style={{ fontFamily: "'Syne', sans-serif" }}>
            {link.name}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setOpen(false)}
          className="btn-glow-solid mt-8 text-center text-[11px] tracking-[0.15em] px-5 py-3">
          {t.nav.hire}
        </Link>
      </div>
    </>
  );
}