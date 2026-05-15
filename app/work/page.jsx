"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiMaximize2, FiX } from "react-icons/fi";
import { useLang } from "@/lib/LangContext";
import Image from "next/image";

export default function Work() {
  const { t, lang } = useLang();
  const projects = t.work.projects;
  
  const [activeDemo, setActiveDemo] = useState(null);

  return (
    <section className="min-h-screen py-32 relative z-10">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-mono text-sm tracking-widest uppercase mb-4"
          >
            {t.nav.work}
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne text-white"
          >
            {lang === "en" ? "Selected Projects" : "Proyectos Destacados"}
          </motion.h2>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group flex flex-col rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-accent/50 transition-colors duration-500 relative"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                {project.image ? (
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/20 font-mono">No Image</div>
                )}
                
                {/* Overlay with CTA */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-10 gap-4">
                  <button 
                    onClick={() => setActiveDemo(project)}
                    className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:scale-110 transition-transform"
                    title={lang === "es" ? "Ampliar Vista" : "Expand View"}
                  >
                    <FiMaximize2 size={20} />
                  </button>
                  {project.live && (
                    <a 
                      href={project.live} target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
                      title={t.work.live}
                    >
                      <FiArrowUpRight size={20} />
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#333] text-white flex items-center justify-center hover:scale-110 transition-transform"
                      title={t.work.github}
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <div>
                    <span className="text-accent font-mono text-xs tracking-widest uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold font-syne text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {project.badge === "in-dev" ? (
                    <span className="shrink-0 flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-mono uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                      {t.work.inDev}
                    </span>
                  ) : (
                    <span className="shrink-0 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-mono uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      {t.work.completed}
                    </span>
                  )}
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-[10px] font-mono rounded bg-white/5 text-white/50 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Modal */}
      <AnimatePresence>
        {activeDemo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-6xl max-h-full flex flex-col bg-[#0A0A0E] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                  <h3 className="font-syne font-bold text-white text-lg">{activeDemo.title}</h3>
                  <span className="hidden sm:block text-white/40 font-mono text-xs uppercase tracking-widest border-l border-white/10 pl-4">
                    {lang === "es" ? "Demo Interactiva" : "Interactive Demo"}
                  </span>
                </div>
                <button 
                  onClick={() => setActiveDemo(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Modal Body (High Res Image) */}
              <div className="flex-1 overflow-auto p-4 md:p-8 custom-scrollbar relative bg-black/20 flex items-center justify-center min-h-[60vh]">
                {activeDemo.image ? (
                  <div className="relative w-full h-full min-h-[60vh] rounded-xl overflow-hidden border border-white/5">
                    <Image 
                      src={activeDemo.image}
                      alt={activeDemo.title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      quality={100}
                    />
                  </div>
                ) : (
                  <div className="text-white/40 font-mono">No Image Available</div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
