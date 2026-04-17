"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, MessageSquare, Briefcase, ChevronRight, ChevronLeft } from "lucide-react";

export default function HomeFurniture() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    { name: "Premium Upholstery", desc: "Crafted with high-grade, wear-resistant fabrics that offer a luxurious feel and exceptional durability." },
    { name: "High-Density Foam", desc: "Engineered for lasting comfort, the cushions retain their shape and provide optimal support." },
    { name: "Solid Wood Frame", desc: "Built on a foundation of kiln-dried solid wood to ensure structural integrity and longevity." },
    { name: "Modern Aesthetics", desc: "Sleek lines and contemporary silhouettes that effortlessly elevate any living space." },
    { name: "Scratch-Resistant Finish", desc: "Treated surfaces that protect against daily wear and tear, maintaining a pristine look." },
    { name: "Ergonomic Proportions", desc: "Designed with human-centric dimensions for the perfect balance of lounging and seating comfort." },
  ];

  const sliderImages = [108, 109, 110];
  const galleryImages = [111, 112, 113, 114];

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
          <div className="w-full lg:w-1/2 relative h-112.5 lg:h-137.5 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 overflow-hidden">
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm text-xs font-bold text-slate-600 flex items-center gap-1.5 z-10">
              <Briefcase className="w-3.5 h-3.5" /> Luxury Living
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
                src={`/furniture/home furniture/Picture${sliderImages[currentSlide]}.png`}
                alt={`Premium Home Furniture - View ${currentSlide + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
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
              <ShieldCheck className="w-3.5 h-3.5" /> Quality Assured
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Luxury Home <br/> Furniture Collection
            </h1>
            
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Transform your living spaces with our curated collection of modern home furniture. Combining luxurious comfort with contemporary aesthetics, each piece is crafted to elevate your daily living experience while standing the test of time.
            </p>

            <div className="flex gap-4 mb-8">
              <Link href="/contact" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <MessageSquare className="w-5 h-5" /> Request a Quote
              </Link>
            </div>
            
            <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Premium Materials</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Modern Aesthetics</div>
            </div>
          </div>
        </div>

        {/* Product Anatomy / Features */}
        <div className="mb-16 bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Exquisite Craftsmanship</h2>
              <p className="text-slate-500 mb-8 text-sm">Discover the details that make our home collection truly exceptional.</p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs mt-0.5">
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
            <h2 className="text-2xl font-bold text-slate-900">Collection Gallery</h2>
            <div className="h-px bg-slate-200 flex-1 ml-6"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {galleryImages.map((num) => (
              <div key={num} className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <Image 
                  src={`/furniture/home furniture/Picture${num}.png`}
                  alt={`Home Furniture Setup ${num}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
