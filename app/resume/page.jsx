"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPhp,
  SiSequelize,
  SiExpress,
} from "react-icons/si";
import { useLang } from "@/lib/LangContext";

const skillIcons = [
  { icon: <FaHtml5 />, name: "HTML 5", color: "#e34f26" },
  { icon: <FaCss3 />, name: "CSS 3", color: "#1572b6" },
  { icon: <FaJs />, name: "JavaScript", color: "#f7df1e" },
  { icon: <FaReact />, name: "React.JS", color: "#61dafb" },
  { icon: <SiNextdotjs />, name: "Next.JS", color: "#fff" },
  { icon: <FaNodeJs />, name: "Node.JS", color: "#68a063" },
  { icon: <SiExpress />, name: "Express", color: "#fff" },
  { icon: <SiSequelize />, name: "Sequelize", color: "#52b0e7" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38bdf8" },
  { icon: <FaDatabase />, name: "MySQL", color: "#4479a1" },
  { icon: <FaWordpress />, name: "WordPress", color: "#21759b" },
  { icon: <SiPhp />, name: "PHP", color: "#8892be" },
];

const pane = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

export default function Resume() {
  const { t } = useLang();
  const r = t.resume;
  const [tab, setTab] = useState("experience");

  const tabs = [
    { key: "experience", label: r.tabs.experience },
    { key: "education", label: r.tabs.education },
    { key: "skills", label: r.tabs.skills },
    { key: "about", label: r.tabs.about },
  ];

  return (
    <section className="min-h-[80vh] flex items-center py-16 xl:py-0 relative">
      <div className="vo-container" style={{ position: "relative", zIndex: 2 }}>
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20">
          <aside className="xl:w-[220px] flex-shrink-0">
            <div className="flex items-center gap-3 mb-6">
              <span className="line-accent" />
              <span className="label-sm">{t.nav.resume}</span>
            </div>
            <nav className="flex xl:flex-col gap-1">
              {tabs.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`text-left text-[12px] tracking-[0.12em] uppercase py-2.5 px-3 rounded-sm transition-all duration-200 font-medium
                    ${tab === key ? "text-accent bg-accent/08 border-l-2 border-accent pl-4" : "text-white/35 hover:text-white/70 border-l-2 border-transparent pl-4"}`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </aside>

          <div className="flex-1 min-h-[420px]">
            <AnimatePresence mode="wait">
              {tab === "experience" && (
                <motion.div
                  key="exp"
                  variants={pane}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <h3 className="display-md text-white mb-2">
                    {r.experience.title}
                  </h3>
                  <p className="text-muted text-[13px] mb-8 max-w-[560px]">
                    {r.experience.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {r.experience.items.map((item, i) => (
                      <div key={i} className="vo-card p-6 flex flex-col gap-2">
                        <span className="label-sm text-accent/80">
                          {item.duration}
                        </span>
                        <h4
                          className="text-white font-semibold text-[15px]"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {item.position}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-cyan/60" />
                          <p className="text-muted text-[12px]">
                            {item.company}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {tab === "education" && (
                <motion.div
                  key="edu"
                  variants={pane}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <h3 className="display-md text-white mb-2">
                    {r.education.title}
                  </h3>
                  <p className="text-muted text-[13px] mb-8 max-w-[560px]">
                    {r.education.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {r.education.items.map((item, i) => (
                      <div key={i} className="vo-card p-6 flex flex-col gap-2">
                        <span className="label-sm text-accent/80">
                          {item.duration}
                        </span>
                        <h4
                          className="text-white font-semibold text-[15px]"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {item.degree}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-cyan/60" />
                          <p className="text-muted text-[12px]">
                            {item.institution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {tab === "skills" && (
                <motion.div
                  key="skills"
                  variants={pane}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <h3 className="display-md text-white mb-2">
                    {r.skills.title}
                  </h3>
                  <p className="text-muted text-[13px] mb-8">
                    {r.skills.description}
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {skillIcons.map((skill, i) => (
                      <div key={i} className="skill-item">
                        <div
                          className="text-4xl"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </div>
                        <span className="text-[10px] text-muted tracking-wide text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {tab === "about" && (
                <motion.div
                  key="about"
                  variants={pane}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <h3 className="display-md text-white mb-2">
                    {r.about.title}
                  </h3>
                  <p className="text-muted text-[14px] leading-relaxed mb-8 max-w-[560px]">
                    {r.about.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[560px]">
                    {r.about.info.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-baseline gap-3 py-3 border-b border-white/04"
                      >
                        <span className="label-sm min-w-[80px]">
                          {item.fieldName}
                        </span>
                        <span className="text-[13px] text-white/80">
                          {item.fieldValue}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
