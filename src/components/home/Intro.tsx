"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative h-112.5 md:h-137.5 rounded-4xl overflow-hidden bg-slate-50"
        >
          <Image 
            src="/furniture/home furniture/Picture109.png" 
            alt="Premium Interior Layout" 
            fill 
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-bold mb-8"
          >
            Crafting beautiful spaces
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-slate-900 leading-normal tracking-tight"
          >
            <span className="uppercase">
              That is why after 10 plus years of experience in the export market, we decided to become your
            </span>
            {" "}
            <span className="text-slate-400 italic font-normal lowercase">
              trusted sourcing partner
            </span>
            {" "}
            <span className="uppercase">
              in China. We are determined to give you the best hardware, furniture and service possible.
            </span>
          </motion.h2>
        </div>
      </div>
    </section>
  );
}