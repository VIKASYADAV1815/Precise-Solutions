"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Search, Box, Truck, ArrowRight } from "lucide-react";

export default function BannerImage() {
  const features = [
    { title: "Sourcing", icon: Search },
    { title: "Quality Control", icon: CheckCircle2 },
    { title: "Pre-Inspection", icon: Box },
    { title: "Logistics", icon: Truck },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      {/* Container max-w-7xl kiya hai taaki thoda space mile size badhne ke liye */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Enhanced Image Section (Occupying 7/12 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative rounded-2xl md:rounded-4xl overflow-hidden bg-slate-50 p-2.5 border border-slate-100 shadow-sm"
          >
            {/* aspect-video with a slightly taller ratio (16/10) for a bigger look */}
            <div className="relative w-full aspect-16/10 rounded-xl md:rounded-3xl overflow-hidden">
              <Image
                src="/banner.jpeg"
                alt="Source Smarter from China"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Content Section (Occupying 5/12 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-5">
              Supply Chain Excellence
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 leading-[1.1] mb-8 tracking-tight uppercase">
              Source Smarter <br className="hidden md:block"/> from China <br/>
              <span className="text-slate-400 italic font-normal lowercase">without the risks.</span>
            </h2>
            
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 max-w-md font-medium">
              We manage the complexities of on-ground operations—from factory audits to final delivery—ensuring your furniture and hardware meet the highest standards.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-12">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-800 text-[10px] md:text-xs uppercase tracking-wider">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-4 px-10 py-4 bg-slate-900 text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl active:scale-95"
              >
                Message Us Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}