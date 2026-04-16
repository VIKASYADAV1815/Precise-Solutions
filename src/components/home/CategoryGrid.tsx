"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CategoryGrid() {
  return (
    <section className="pt-6 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 h-auto md:h-120 lg:h-140">
        {/* Large Left Item */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-100 md:h-full rounded-4xl overflow-hidden group bg-slate-100"
        >
          <Image 
            src="/furniture/home%20furniture/Picture114.png"
            alt="Living Room"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end p-10 pb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6 tracking-wide">Living Room</h3>
            <Link 
              href="/products/home-furniture"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-slate-900 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors duration-300"
            >
              See Collection
            </Link>
          </div>
        </motion.div>

        {/* Right Stack */}
        <div className="grid grid-rows-2 gap-4 lg:gap-8 h-120 md:h-full">
          {/* Top Right Item */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full rounded-4xl overflow-hidden group bg-slate-100"
          >
            <Image 
              src="/furniture/home%20furniture/Picture113.png"
              alt="Dining Room"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-10 pb-16">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-wide">Dining Room</h3>
            </div>
          </motion.div>

          {/* Bottom Right Item */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-full rounded-4xl overflow-hidden group bg-slate-100"
          >
            <Image 
              src="/lock/glassdoor lock/Picture1.png"
              alt="Hardware & Entryway"
              fill
              className="object-contain object-center group-hover:scale-105 transition-transform duration-700 p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-10 pb-16">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-wide">Hardware</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
