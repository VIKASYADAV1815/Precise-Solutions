"use client";
import { motion } from "framer-motion";
import { Target, CheckCircle, Zap } from "lucide-react";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="py-24 bg-slate-50 min-h-[70vh] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-ocean rounded-bl-full opacity-5 blur-3xl"></div>
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16 lg:mb-24">
          <p className="text-xs tracking-[0.2em] text-slate-400 uppercase font-medium mb-4">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 tracking-tight uppercase">About Us</h1>
          <div className="w-24 h-1 bg-slate-900 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 mb-6 uppercase tracking-tight leading-tight">Your Bridge to Global Sourcing</h2>
            <div className="prose prose-lg text-slate-500 font-medium leading-relaxed tracking-wide text-sm md:text-base">
              <p className="mb-4">
                <strong className="text-slate-900">PRECISE SOLUTIONS (HK) LTD.</strong> is your trusted partner for seamless global sourcing. 
                We specialize in connecting businesses with reliable manufacturers in China, ensuring 
                quality, cost-effectiveness, and on-time delivery.
              </p>
              <p>
                With years of experience in the industry, we have built a reliable global network 
                that allows us to simplify your supply chain. From the initial negotiation to 
                end-to-end logistics, we handle every step of the way with utmost transparency.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-2xl font-serif text-slate-900 mb-8 border-b border-slate-100 pb-6 uppercase tracking-wide">Our Core Values</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl"><Target className="w-6 h-6 text-blue-600" /></div>
                <div>
                  <strong className="text-lg text-slate-800 block mb-1">Precision</strong>
                  <span className="text-slate-500">We verify every detail to ensure there are no surprises in your supply chain.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl"><CheckCircle className="w-6 h-6 text-blue-600" /></div>
                <div>
                  <strong className="text-lg text-slate-800 block mb-1">Reliability</strong>
                  <span className="text-slate-500">You can count on us for consistent quality, transparent communication, and timely deliveries.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl"><Zap className="w-6 h-6 text-blue-600" /></div>
                <div>
                  <strong className="text-lg text-slate-800 block mb-1">Results</strong>
                  <span className="text-slate-500">We focus on delivering cost-effective solutions that drive your business forward.</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}