"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FeatureSplit() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        {/* Left Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative h-100 sm:h-125 lg:h-150 rounded-4xl overflow-hidden"
        >
          <Image 
            src="/furniture/Ergonomic office chair/Picture70.png"
            alt="Create & Customize Your Furniture"
            fill
            className="object-cover bg-slate-100"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        
        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col items-start"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight tracking-tight">
            CREATE & CUSTOMIZE <br /> YOUR FURNITURE & HARDWARE
          </h2>
          <p className="text-slate-500 mb-10 leading-relaxed font-light max-w-lg">
            We connect you with reliable manufacturers in China who can handle custom specifications and negotiate the best deals on your behalf. From ergonomic chairs to premium architectural hardware, we ensure every detail meets your exact standards.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full text-sm font-medium uppercase tracking-widest hover:bg-slate-800 transition-colors duration-300"
          >
            Get A Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
