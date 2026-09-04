"use client";

import { Code2, PenTool, Bot, HeartHandshake, Zap, Shield, Server, ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Helper map to render lucide icons based on string keys
const iconMap = {
  code: Code2,
  design: PenTool,
  bot: Bot,
  support: HeartHandshake,
  zap: Zap,
  shield: Shield,
  server: Server,
};

const BentoGrid = ({ items = [], title, subtitle, columns = 2 }) => {
  return (
    <section className="py-20 lg:py-32 relative z-10">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            {subtitle && (
              <h3 className="text-accent font-mono text-sm tracking-widest uppercase">
                {subtitle}
              </h3>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold font-syne text-white">
                {title}
              </h2>
            )}
          </div>
        )}

        {/* The Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6`}>
          {items.map((item, idx) => {
            const Icon = item.icon ? iconMap[item.icon] : null;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm rounded-3xl z-0"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    {Icon ? (
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                        <Icon strokeWidth={1.5} className="w-7 h-7" />
                      </div>
                    ) : (
                      <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white/20 to-white/5 group-hover:from-accent group-hover:to-accent/50 transition-colors duration-300 font-syne">
                        {item.num}
                      </div>
                    )}
                    
                    <Link href="/contact" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-primary hover:border-accent">
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <h3 className="text-2xl font-bold font-syne text-white mb-4 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mt-auto group-hover:text-white/80 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  {item.features && item.features.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                      {item.features.map((feature, fIdx) => (
                        <span key={fIdx} className="px-3 py-1.5 text-[11px] font-mono rounded bg-white/5 text-white/60 border border-white/10 flex items-center gap-2 group-hover:border-accent/30 group-hover:text-accent/80 transition-colors">
                          <span className="w-1 h-1 rounded-full bg-accent/50"></span>
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
