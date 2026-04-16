"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LayoutGrid, Lock, Box, Columns, Hammer, DoorOpen, Settings, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

// Grouping products by category instead of individual images
const hardwareProducts = [
  {
    id: `glass-door-lock`,
    name: `Glass Door Lock Collection`,
    category: "Glass Door Lock",
    desc: "Security solutions with sleek modern aesthetics for frameless glass doors.",
    image: `/lock/glassdoor lock/Picture1.png`,
    link: `/products/glass-door-lock`
  },
  {
    id: `shower-hinge`,
    name: `Shower Hinge Series`,
    category: "Shower Hinge",
    desc: "Corrosion-resistant hinges ensuring smooth operation for modern shower enclosures.",
    image: `/lock/shower hing/Picture6.png`,
    link: `/products/shower-hinge`
  },
  {
    id: `floor-spring`,
    name: `Floor Spring Systems`,
    category: "Floor Spring",
    desc: "Heavy-duty systems for smooth, controlled, and reliable door movement in high-traffic areas.",
    image: `/lock/floor spring/Picture16.png`,
    link: `/products/floor-spring`
  },
  {
    id: `patch-fitting`,
    name: `Patch Fittings`,
    category: "Patch Fitting",
    desc: "Architectural fixtures providing robust structural support while maximizing glass transparency.",
    image: `/lock/patch fitting/Picture28.png`,
    link: `/products/patch-fitting`
  },
  {
    id: `door-handle`,
    name: `Door Handle Collection`,
    category: "Door Handle",
    desc: "Ergonomic handles that provide the perfect finishing touch for any door.",
    image: `/lock/door handle/Picture34.png`,
    link: `/products/door-handle`
  },
  {
    id: `sliding-fitting`,
    name: `Sliding Fitting Systems`,
    category: "Sliding Fitting",
    desc: "Advanced sliding systems engineered for effortless and silent operation of heavy panels.",
    image: `/lock/sliding fitting/Picture57.png`,
    link: `/products/sliding-fitting`
  },
  {
    id: `aluminium-door-fitting`,
    name: `Aluminium Door Fittings`,
    category: "Aluminium Door Fitting",
    desc: "Specialized, durable fittings designed to integrate perfectly with standard aluminium profiles.",
    image: `/lock/aluminium door fitting/Picture66.png`,
    link: `/products/aluminium-door-fitting`
  }
];

const hardwareCategories = [
  { name: "All Hardware", icon: LayoutGrid },
  { name: "Glass Door Lock", icon: Lock },
  { name: "Shower Hinge", icon: Columns },
  { name: "Floor Spring", icon: Settings },
  { name: "Patch Fitting", icon: Box },
  { name: "Door Handle", icon: DoorOpen },
  { name: "Sliding Fitting", icon: Hammer },
  { name: "Aluminium Door Fitting", icon: DoorOpen }
];

const furnitureProducts = [
  {
    id: `eoc-series`,
    name: `Ergonomic Office Chair Series`,
    category: "Ergonomic Office Chair",
    desc: "Bionic design techniques for ultimate back support, adjustability, and all-day comfort.",
    image: `/furniture/Ergonomic office chair/Picture70.png`,
    link: `/products/ergonomic-office-chair`
  },
  {
    id: `home-series`,
    name: `Home Furniture Collection`,
    category: "Home Furniture",
    desc: "Comfort combined with contemporary aesthetics to elevate your living space.",
    image: `/furniture/home furniture/Picture108.png`,
    link: `/products/home-furniture`
  },
  {
    id: `outdoor-series`,
    name: `Outdoor & Patio Collection`,
    category: "Outdoor Furniture",
    desc: "Weather-resistant, stylish pieces that bring living room comfort to your outdoor spaces.",
    image: `/furniture/outdoor furniture/Picture115.png`,
    link: `/products/outdoor-furniture`
  }
];

const furnitureCategories = [
  { name: "All Furniture", icon: LayoutGrid },
  { name: "Ergonomic Office Chair", icon: Box },
  { name: "Home Furniture", icon: Box },
  { name: "Outdoor Furniture", icon: Box }
];

export default function Products() {
  const [activeTab, setActiveTab] = useState("Hardware");
  const [activeHardwareCategory, setActiveHardwareCategory] = useState("All Hardware");
  const [activeFurnitureCategory, setActiveFurnitureCategory] = useState("All Furniture");

  const filteredHardwareProducts = activeHardwareCategory === "All Hardware" 
    ? hardwareProducts 
    : hardwareProducts.filter(p => p.category === activeHardwareCategory);

  const filteredFurnitureProducts = activeFurnitureCategory === "All Furniture" 
    ? furnitureProducts 
    : furnitureProducts.filter(p => p.category === activeFurnitureCategory);

  return (
    <div className="min-h-screen bg-slate-50 py-32 lg:py-40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 tracking-tight uppercase"
          >
            Our Product Catalog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto font-medium tracking-wide"
          >
            Explore our extensive range of premium hardware and furniture, carefully curated for maximum quality and durability.
          </motion.p>
        </div>

        {/* Main Tabs (Hardware vs Furniture) */}
        <div className="flex justify-center gap-4 mb-12 border-b border-slate-200 pb-4">
          <button 
            onClick={() => setActiveTab("Hardware")}
            className={`px-8 py-3 rounded-full text-base font-bold transition-all duration-300 ${activeTab === "Hardware" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
          >
            Hardware Collection
          </button>
          <button 
            onClick={() => setActiveTab("Furniture")}
            className={`px-8 py-3 rounded-full text-base font-bold transition-all duration-300 ${activeTab === "Furniture" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
          >
            Furniture Collection
          </button>
        </div>

        {activeTab === "Hardware" ? (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Categories */}
            <div className="lg:w-1/4 self-start lg:sticky lg:top-28 w-full z-10 mb-8 lg:mb-0">
              <div className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-sm border border-slate-200">
                <h3 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 lg:mb-6 lg:px-4">Filter by Category</h3>
                <ul className="flex flex-wrap lg:flex-col gap-2 lg:gap-0 lg:space-y-2">
                  {hardwareCategories.map((cat) => (
                    <li key={cat.name} className="flex-auto lg:flex-none">
                      <button
                        onClick={() => setActiveHardwareCategory(cat.name)}
                        className={`w-full flex items-center justify-center lg:justify-start gap-2 lg:gap-3 px-3 py-2.5 lg:px-4 lg:py-3 rounded-xl lg:text-left text-xs sm:text-sm lg:text-base font-semibold transition-all duration-200 ${
                          activeHardwareCategory === cat.name 
                            ? "bg-blue-600 text-white shadow-md lg:bg-blue-50 lg:text-blue-600 lg:shadow-none lg:border-transparent" 
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100 lg:bg-transparent lg:border-transparent lg:hover:bg-slate-50 lg:hover:text-slate-900"
                        }`}
                      >
                        <cat.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${activeHardwareCategory === cat.name ? "text-white lg:text-blue-600" : "text-slate-400"}`} />
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:w-3/4">
              <motion.div 
                layout
                className="grid md:grid-cols-2 gap-6 lg:gap-8"
              >
                {filteredHardwareProducts.map((product) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={product.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col relative"
                  >
                    <div className="absolute top-4 right-4 z-10 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold border border-emerald-100 shadow-sm backdrop-blur-sm">
                      <CheckCircle2 className="w-3.5 h-3.5" /> In Stock
                    </div>
                    
                    <div className="relative h-56 sm:h-64 w-full p-8 bg-white flex items-center justify-center group-hover:bg-slate-50 transition-colors duration-500 border-b border-slate-100">
                      <div className="relative w-full h-full">
                        <Image 
                          src={product.image} 
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-sm border border-slate-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Details
                      </div>
                    </div>
                    
                    <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between relative bg-white">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{product.category}</span>
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-3">
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-2">
                          {product.desc}
                        </p>
                      </div>
                      
                      <Link href={product.link || "/contact"} className="mt-auto flex items-center justify-center w-full py-3.5 px-4 rounded-xl bg-slate-50 text-sm font-bold text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 group/link border border-slate-100 hover:border-blue-600">
                        Explore Collection <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Categories */}
            <div className="lg:w-1/4 self-start lg:sticky lg:top-28 w-full z-10 mb-8 lg:mb-0">
              <div className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-sm border border-slate-200">
                <h3 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 lg:mb-6 lg:px-4">Filter by Category</h3>
                <ul className="flex flex-wrap lg:flex-col gap-2 lg:gap-0 lg:space-y-2">
                  {furnitureCategories.map((cat) => (
                    <li key={cat.name} className="flex-auto lg:flex-none">
                      <button
                        onClick={() => setActiveFurnitureCategory(cat.name)}
                        className={`w-full flex items-center justify-center lg:justify-start gap-2 lg:gap-3 px-3 py-2.5 lg:px-4 lg:py-3 rounded-xl lg:text-left text-xs sm:text-sm lg:text-base font-semibold transition-all duration-200 ${
                          activeFurnitureCategory === cat.name 
                            ? "bg-blue-600 text-white shadow-md lg:bg-blue-50 lg:text-blue-600 lg:shadow-none lg:border-transparent" 
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100 lg:bg-transparent lg:border-transparent lg:hover:bg-slate-50 lg:hover:text-slate-900"
                        }`}
                      >
                        <cat.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${activeFurnitureCategory === cat.name ? "text-white lg:text-blue-600" : "text-slate-400"}`} />
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:w-3/4">
              <motion.div 
                layout
                className="grid md:grid-cols-2 gap-6 lg:gap-8"
              >
                {filteredFurnitureProducts.map((product) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={product.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col relative"
                  >
                    <div className="absolute top-4 right-4 z-10 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold border border-emerald-100 shadow-sm backdrop-blur-sm">
                      <CheckCircle2 className="w-3.5 h-3.5" /> In Stock
                    </div>
                    
                    <div className="relative h-56 sm:h-64 w-full p-8 bg-white flex items-center justify-center group-hover:bg-slate-50 transition-colors duration-500 border-b border-slate-100">
                      <div className="relative w-full h-full">
                        <Image 
                          src={product.image} 
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-sm border border-slate-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Details
                      </div>
                    </div>
                    
                    <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between relative bg-white">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{product.category}</span>
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-3">
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-2">
                          {product.desc}
                        </p>
                      </div>
                      
                      <Link href={product.link || "/contact"} className="mt-auto flex items-center justify-center w-full py-3.5 px-4 rounded-xl bg-slate-50 text-sm font-bold text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 group/link border border-slate-100 hover:border-blue-600">
                        Explore Collection <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}