"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SplitSection = ({ 
  title, 
  subtitle, 
  description, 
  features = [], 
  imagePath, 
  imageAlt, 
  reverse = false,
  ctaText = "Ver más",
  ctaLink = "/contact"
}) => {
  return (
    <section className="py-20 lg:py-32 overflow-hidden relative">
      {/* Background glow specific to this section */}
      <div className={`absolute top-1/2 -translate-y-1/2 ${reverse ? '-left-20' : '-right-20'} w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none`}></div>

      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-accent font-mono text-sm tracking-widest uppercase mb-4">{subtitle}</h3>
              <h2 className="text-4xl md:text-5xl font-bold font-syne text-white leading-tight mb-6">
                {title}
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                {description}
              </p>
            </div>

            {features.length > 0 && (
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium transition-all group"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image/Mockup Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group aspect-[4/3] md:aspect-auto md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              {imagePath ? (
                 <Image 
                   src={imagePath}
                   alt={imageAlt || title}
                   fill
                   sizes="(max-width: 768px) 100vw, 50vw"
                   priority={true}
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/20">
                  <span className="font-mono">Mockup Area</span>
                </div>
              )}
              
              {/* Glass UI Element decoration */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                     <span className="text-sm font-mono text-white/80">System Online</span>
                   </div>
                   <span className="text-xs text-white/50">Performance: 99.9%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SplitSection;
