"use client";
import Link from "next/link";
import Image from "next/image";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useLang } from "@/lib/LangContext";

const socials = [
  { icon: <FaGithub size={16} />, href: "https://github.com/Liuminedes", label: "GitHub" },
  { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/mauricio-rodriguez-lemos-78a33b268/", label: "LinkedIn" },
  { icon: <FaInstagram size={16} />, href: "https://www.instagram.com/vyntra_orbit/", label: "Instagram" },
];

export default function Home() {
  const { t } = useLang();
  return (
    <section className="relative min-h-[calc(100vh-100px)] flex flex-col justify-center overflow-hidden">
      <div className="absolute top-0 left-[20%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)" }} />

      <div className="container mx-auto relative z-10">
        <div className="grid xl:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-center">

          {/* Text */}
          <div className="order-2 xl:order-1">
            <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-up delay-100" style={{ animationFillMode: "forwards" }}>
              <span className="line-accent" />
              <span className="label-sm">{t.home.role}</span>
            </div>
            <h1 className="h1 mb-6 opacity-0 animate-fade-up delay-200" style={{ animationFillMode: "forwards" }}>
              <span className="text-white/20">{t.home.greeting}</span>
              <br />
              <span className="gradient-text">{t.home.name}</span>
            </h1>
            <p className="text-muted leading-relaxed max-w-[480px] mb-10 text-[14px] opacity-0 animate-fade-up delay-300" style={{ animationFillMode: "forwards" }}>
              {t.home.bio}
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-12 opacity-0 animate-fade-up delay-400" style={{ animationFillMode: "forwards" }}>
              <a href="/assets/CV%20Mauricio%20Rodriguez.pdf" download="Mauricio_Rodriguez_CV.pdf" className="btn-glow flex items-center gap-2 text-[11px]">
                <FiDownload size={13} />{t.home.downloadCV}
              </a>
              <Link href="/work" className="flex items-center gap-2 text-[12px] text-accent hover:text-white transition-colors tracking-[0.1em] uppercase">
                {t.home.viewWork || "View work"}<FiArrowRight size={13} />
              </Link>
            </div>
            <div className="flex items-center gap-5 opacity-0 animate-fade-up delay-500" style={{ animationFillMode: "forwards" }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-white/30 hover:text-accent transition-colors duration-200">{s.icon}</a>
              ))}
              <div className="w-px h-4 bg-white/10 mx-1" />
              <span className="label-sm">{t.home.poweredBy} Vyntra Orbit</span>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-2 flex justify-center xl:justify-end opacity-0 animate-fade-up delay-200" style={{ animationFillMode: "forwards" }}>
            <div className="relative">
              <div className="absolute inset-[-20px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)" }} />
              <div className="relative w-[280px] h-[280px] xl:w-[360px] xl:h-[360px] rounded-2xl overflow-hidden border border-white/06"
                style={{ background: "linear-gradient(135deg, rgba(108,99,255,0.08), rgba(0,212,255,0.04))" }}>
                <Image src="/assets/profile-pic.png" fill priority quality={100} alt="Mauricio Rodriguez"
                  className="object-cover object-top mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent/50" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-accent/50" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-cyan/50" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-cyan/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 xl:mt-24 pt-8 border-t border-white/05 grid grid-cols-3 gap-8 max-w-[480px] opacity-0 animate-fade-up delay-600" style={{ animationFillMode: "forwards" }}>
          {t.stats.map((s, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-5xl xl:text-6xl font-extrabold gradient-text" style={{ fontFamily: "'Syne', sans-serif" }}>{s.num}+</span>
              <span className="label-sm">{s.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}