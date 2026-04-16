"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState("Best Sellers");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How do you ensure product quality?", a: "We have strict Quality Control (QC) protocols and conduct thorough pre-shipment inspections before any goods leave the factory floor." },
    { q: "What is the typical shipping time?", a: "Shipping times vary depending on the destination and method (air vs. sea). We handle end-to-end logistics to ensure the fastest and most cost-effective delivery possible." },
    { q: "Can you help with custom manufacturing?", a: "Yes! We connect you with reliable manufacturers in China who can handle custom specifications and negotiate the best deals on your behalf." },
    { q: "Why should I choose Precise Solutions?", a: "We offer transparent communication, cost-effective solutions, a reliable global network, and on-time delivery every time. We are your trusted partner on the ground in China." }
  ];

  const products = [
    {
      id: "glass-door-lock",
      name: "Glass Door Lock",
      category: "Hardware",
      image: "/lock/glassdoor lock/Picture1.png",
      rating: 5,
      reviews: 120
    },
    {
      id: "shower-hinge",
      name: "Luxury Shower Hinge",
      category: "Hardware",
      image: "/lock/shower hing/Picture6.png",
      rating: 4.8,
      reviews: 95
    },
    {
      id: "eoc-series",
      name: "Ergonomic Office Chair",
      category: "Furniture",
      image: "/furniture/Ergonomic office chair/Picture70.png",
      rating: 5,
      reviews: 210
    },
    {
      id: "home-series",
      name: "Luxury Home Furniture",
      category: "Furniture",
      image: "/furniture/home furniture/Picture108.png",
      rating: 4.9,
      reviews: 34
    }
  ];

  const filteredProducts = activeTab === "Best Sellers" 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight tracking-tight uppercase">
          THE MOST SOUGHT-AFTER & <br /> HIGHLY VALUED PRODUCT
        </h2>
        <p className="text-slate-500 mb-10 text-sm tracking-wide">
          Discover our most-in-demand products that everyone is talking about.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4">
          {["Best Sellers", "Hardware", "Furniture"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                activeTab === tab 
                  ? "bg-slate-900 text-white" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {filteredProducts.map((product, idx) => (
          <div key={idx} className="group flex flex-col text-left">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-50 mb-6 border border-slate-100">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                {product.name}
              </h3>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-slate-200 text-slate-200'}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-slate-400 font-medium">({product.reviews} Reviews)</span>
            </div>
          </div>
        ))}
      </motion.div>
      
      <div className="mt-12 mb-24">
        <Link 
          href="/products"
          className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full text-sm font-medium uppercase tracking-widest hover:bg-slate-800 transition-colors duration-300"
        >
          View All Products
        </Link>
      </div>

      {/* FAQs Section */}
      <div className="max-w-3xl mx-auto mt-24 text-left">
        <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-8 text-center tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between bg-transparent text-left focus:outline-none"
              >
                <span className="font-bold text-slate-900 text-sm sm:text-base">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="px-6 pb-6 text-sm text-slate-500 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
