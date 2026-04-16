"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, MessageSquare, Briefcase, ChevronRight, ChevronLeft, Sun, Droplets, Wind } from "lucide-react";

export default function OutdoorFurniture() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    { name: "UV-Resistant Wicker", desc: "Hand-woven synthetic rattan that withstands intense sunlight without fading or cracking." },
    { name: "Rust-Proof Aluminum Frame", desc: "Lightweight yet incredibly sturdy frames coated to prevent corrosion in humid environments." },
    { name: "Water-Repellent Cushions", desc: "Quick-drying fabric covers that resist moisture and are easy to clean." },
    { name: "Tempered Glass Tops", desc: "Shatter-resistant glass surfaces that provide an elegant and easy-to-maintain dining area." },
    { name: "Modular Configurations", desc: "Flexible pieces that can be rearranged to suit any patio, deck, or poolside layout." },
    { name: "Fade-Resistant Fabrics", desc: "High-performance upholstery designed to maintain vibrant colors season after season." },
  ];

  const sliderImages = [115, 116, 117, 118, 119];
  const galleryImages = [120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <div className="min-h-screen bg-slate-50 pb-24 pt-12 lg:pt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Breadcrumb */}
        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Product Catalog
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-slate-200 mb-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Image Slider */}
          <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[550px] bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 overflow-hidden">
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm text-xs font-bold text-slate-600 flex items-center gap-1.5 z-10">
              <Sun className="w-3.5 h-3.5" /> Outdoor Series
            </div>

            {/* Slider Controls */}
            <button 
              onClick={prevSlide} 
              className="absolute left-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-white text-slate-600 border border-slate-200 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextSlide} 
              className="absolute right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-white text-slate-600 border border-slate-200 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full p-8">
              <Image 
                src={`/furniture/outdoor furniture/Picture${sliderImages[currentSlide]}.png`}
                alt={`Premium Outdoor Furniture - View ${currentSlide + 1}`}
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-6 flex gap-2 z-10">
              {sliderImages.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentSlide(idx)} 
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentSlide ? 'bg-slate-800' : 'bg-slate-300 hover:bg-slate-400'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-6 border border-emerald-100">
              <ShieldCheck className="w-3.5 h-3.5" /> All-Weather Protection
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Premium Outdoor <br/> & Patio Collection
            </h1>
            
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Redefine alfresco living with our weather-resistant outdoor furniture. Designed to withstand the elements without compromising on style, our collection brings the luxury and comfort of your living room to your garden, patio, or poolside.
            </p>

            <div className="flex gap-4 mb-8">
              <Link href="/contact" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <MessageSquare className="w-5 h-5" /> Request a Quote
              </Link>
            </div>
            
            <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2"><Sun className="w-4 h-4 text-orange-500" /> UV Resistant</div>
              <div className="flex items-center gap-2"><Droplets className="w-4 h-4 text-blue-500" /> Water Repellent</div>
              <div className="flex items-center gap-2"><Wind className="w-4 h-4 text-slate-500" /> All-Weather</div>
            </div>
          </div>
        </div>

        {/* Product Anatomy / Features */}
        <div className="mb-16 bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Built for the Outdoors</h2>
              <p className="text-slate-500 mb-8 text-sm">Discover the engineering that makes our outdoor collection durable and stylish.</p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-sm mb-1">{feature.name}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Outdoor Gallery</h2>
            <div className="h-px bg-slate-200 flex-1 ml-6"></div>
          </div>
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((num) => (
              <div key={num} className="break-inside-avoid relative rounded-xl overflow-hidden bg-white border border-slate-100 shadow-sm">
                <div className="relative w-full" style={{ paddingBottom: "100%" }}>
                  <Image 
                    src={`/furniture/outdoor furniture/Picture${num}.png`}
                    alt={`Outdoor Setup ${num}`}
                    fill
                    className="object-cover lg:object-contain p-2"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
