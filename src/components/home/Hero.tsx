"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BG_IMAGES = [
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1092&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1169&auto=format&fit=crop",
] as const;

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % BG_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [BG_IMAGES.length]);

  return (
    <section className="relative w-full px-3 py-3 sm:px-6 lg:px-8 bg-white">
      <div className="relative w-full h-[75vh] min-h-125 md:h-[85vh] md:min-h-162.5 rounded-3xl md:rounded-[3rem] overflow-hidden bg-slate-50">
        
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          <Image
            src={BG_IMAGES[currentBg]}
            alt="Premium Hardware and Furniture"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Light Overlay for Dark Text Visibility */}
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="absolute inset-0 bg-linear-to-r from-white/60 via-white/30 to-transparent"></div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-16 lg:p-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto w-full"
          >
            <div className="max-w-4xl">
              <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] text-slate-500 uppercase mb-4">
                Global Sourcing & QC
              </span>

              {/* Text is now Dark Slate for visibility on light images */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-slate-900 leading-[1.1] mb-6 tracking-tight">
                ARCHITECTURAL <br className="hidden sm:block" /> 
                HARDWARE & <br className="hidden sm:block" /> 
                BESPOKE FURNITURE
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base text-slate-700 max-w-md font-medium tracking-wide leading-relaxed mb-10">
                Direct sourcing from China for your high-end projects. 
                Premium quality, strict inspection, and end-to-end logistics.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 bg-slate-900 text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-all duration-300 shadow-lg active:scale-95"
                >
                  Explore Catalog
                </Link>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 bg-white/60 backdrop-blur-md border border-slate-200 text-slate-900 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 active:scale-95"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Indicators in Dark Gray */}
        <div className="absolute bottom-8 right-8 flex gap-2">
          {BG_IMAGES.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1 transition-all duration-500 rounded-full ${idx === currentBg ? 'w-8 bg-slate-800' : 'w-2 bg-slate-800/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}