"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/LangContext";

export default function Nav() {
  const pathname = usePathname();
  const { t } = useLang();
  const links = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.resume, path: "/resume" },
    { name: t.nav.work, path: "/work" },
  ];
  return (
    <nav className="flex gap-8">
      {links.map((link, i) => (
        <Link key={i} href={link.path}
          className={`relative text-[12px] tracking-[0.15em] uppercase font-medium transition-colors duration-200
            ${link.path === pathname ? "text-white" : "text-white/40 hover:text-white/80"}`}>
          {link.name}
          {link.path === pathname && <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent" />}
        </Link>
      ))}
    </nav>
  );
}