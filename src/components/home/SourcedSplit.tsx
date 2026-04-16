"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SourcedSplit() {
  return (
    <section className="py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-20">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 flex flex-col items-start text-left"
        >
          {/* Font size optimized for mobile (2xl) vs Desktop (4xl) */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-slate-900 mb-6 leading-tight tracking-[0.08em] uppercase">
            Sourced from <br /> sustainable forests.
          </h2>
          
          <p className="text-slate-500 text-sm md:text-base mb-10 leading-relaxed font-medium max-w-sm">
            We care about the origin of our wood. Committed to responsibly sourcing hardware and furniture through strict local and international certifications.
          </p>

          <Link 
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-900 text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-all duration-300 active:scale-95 shadow-lg shadow-slate-200"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-7/12 relative aspect-4/3 sm:aspect-video md:aspect-4/3 rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-slate-50"
        >
          <Image 
            src="/furniture/home%20furniture/Picture112.png"
            alt="Sustainable Furniture"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>

      </div>
    </section>
  );
}