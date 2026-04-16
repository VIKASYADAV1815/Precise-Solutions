"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, MessageSquare, Ruler, Layers, PaintBucket, Briefcase, ChevronRight, ChevronLeft } from "lucide-react";

export default function ErgonomicOfficeChair() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    { name: "Hanger", desc: "Nylon reinforced plastic frame, suitable for hanging clothes." },
    { name: "Headrest", desc: "Nylon reinforced plastic frame, adjustable in height and angle." },
    { name: "Backrest", desc: "Nylon reinforced plastic, waist-back separation design, adjustable height." },
    { name: "Back Bracket", desc: "Aluminum alloy with fine polishing process." },
    { name: "Lumbar Support", desc: "Nylon and fiber-reinforced plastic frame, automatic elastic adjustment." },
    { name: "Seat Cushion", desc: "Nylon reinforced plastic frame, wire control operation function." },
    { name: "Armrest", desc: "3D PU armrest, adjustable in height, angle, and fore-and-aft." },
    { name: "Chassis", desc: "Multi-functional wire-controlled explosion-proof chassis, lifting and tilt locking." },
    { name: "Sliding", desc: "Wire-controlled sliding function, adjustable seat depth forward/backward." },
    { name: "Gas Rod", desc: "Imported four-level explosion-proof pneumatic rod." },
    { name: "Chair Legs", desc: "350mm aluminum alloy legs, passing BIFMA stamping/static pressure test." },
    { name: "Chair Wheels", desc: "60mm PU silent shockproof chair wheels." },
  ];

  const colors = [
    { name: "TM-20 (Grey)", hex: "#8A8D91" },
    { name: "TM-21 (Black)", hex: "#2C2D31" },
    { name: "TM-22-3 (Red)", hex: "#8A2A3B" },
    { name: "TM-25-7 (Blue)", hex: "#5C7A92" },
    { name: "TM-26 (Green)", hex: "#6B8E4E" },
    { name: "YM90-11 (Black)", hex: "#1A1A1A" },
  ];

  const dimensions = [
    { label: "Overall Length", value: "60cm" },
    { label: "Backrest Width", value: "50cm" },
    { label: "Seat Depth", value: "46cm" },
    { label: "Armrest Width", value: "66cm" },
    { label: "Seat Width", value: "50cm" },
    { label: "Base/Leg Diameter", value: "70cm" },
  ];

  const legOptions = [
    { name: "350MM Aluminum alloy feet", icon: Layers },
    { name: "350MM Octopus nylon feet (Black)", icon: Layers },
    { name: "350MM Nylon feet (Grey)", icon: Layers },
    { name: "340MM Nylon feet", icon: Layers },
  ];

  const sliderImages = [70, 71, 72, 73, 74];
  const labeledFeatureImages = [78, 79]; 
  const blueprintImages = [83, 84, 85, 86, 87];
  const lifestyleImages = [100, 101, 102, 103, 104, 105, 106, 107];
  const galleryImages = [75, 76, 77, 80, 81, 82, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

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
        <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-slate-200 mb-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Image Slider */}
          <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[550px] bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 overflow-hidden">
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm text-xs font-bold text-slate-600 flex items-center gap-1.5 z-10">
              <Briefcase className="w-3.5 h-3.5" /> Ergonomic Series
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
                src={`/furniture/Ergonomic office chair/Picture${sliderImages[currentSlide]}.png`}
                alt={`Premium Ergonomic Office Chair - View ${currentSlide + 1}`}
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
              <ShieldCheck className="w-3.5 h-3.5" /> BIFMA Certified
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Premium Ergonomic <br/> Office Chair
            </h1>
            
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Extracting the curves of the human back as elements, using bionic design techniques to make the chair backrest adhere to and support the human back over a larger area, with dynamic and smooth lines that are extremely simple, achieving a sitting posture where the person and the chair are one.
            </p>

            <div className="flex gap-4 mb-8">
              <Link href="/contact" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <MessageSquare className="w-5 h-5" /> Request a Quote
              </Link>
            </div>
            
            <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Multi-functional Chassis</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 3D PU Armrests</div>
            </div>
          </div>
        </div>

        {/* Product Anatomy / Features - Minimal Theme */}
        <div className="mb-16 bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Core Anatomy & Functions</h2>
              <p className="text-slate-500 mb-8 text-sm">Engineered for all-day comfort with highly adjustable components.</p>
              
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
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
            
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {labeledFeatureImages.map((num) => (
                  <div key={num} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="relative w-full h-64 sm:h-80">
                      <Image 
                        src={`/furniture/Ergonomic office chair/Picture${num}.png`}
                        alt={`Feature Diagram ${num}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dimensions & Blueprints */}
        <div className="mb-16 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-6">
              <Ruler className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Technical Specifications</h3>
            <p className="text-slate-500 text-sm mb-6">Detailed dimensions extracted directly from our manufacturing blueprints.</p>
            
            <div className="space-y-3">
              {dimensions.map((dim, idx) => (
                <div key={idx} className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
                  <span className="text-slate-600 text-sm font-medium">{dim.label}</span>
                  <span className="text-slate-900 text-sm font-semibold">{dim.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Dimensional Blueprints</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {blueprintImages.map((num) => (
                <div key={num} className="relative w-full h-40 bg-slate-50 rounded-lg border border-slate-100">
                  <Image 
                    src={`/furniture/Ergonomic office chair/Picture${num}.png`}
                    alt={`Blueprint ${num}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customization Options */}
        <div className="mb-16 grid lg:grid-cols-2 gap-6">
          {/* Colors */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <PaintBucket className="w-5 h-5 text-slate-700" />
              <h3 className="text-xl font-bold text-slate-900">Color Variations</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {colors.map((color, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2.5 p-4 rounded-xl border border-slate-100 bg-slate-50">
                  <div className="w-10 h-10 rounded-full shadow-sm border border-slate-200" style={{ backgroundColor: color.hex }}></div>
                  <span className="text-xs font-semibold text-slate-600 text-center">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bases / Legs */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-5 h-5 text-slate-700" />
              <h3 className="text-xl font-bold text-slate-900">Base Options</h3>
            </div>
            <ul className="space-y-3">
              {legOptions.map((leg, idx) => (
                <li key={idx} className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <leg.icon className="w-4 h-4 text-slate-400" /> {leg.name}
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Product Gallery</h2>
            <div className="h-px bg-slate-200 flex-1 ml-6"></div>
          </div>
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((num) => (
              <div key={num} className="break-inside-avoid relative rounded-xl overflow-hidden bg-white border border-slate-100 shadow-sm">
                <div className="relative w-full" style={{ paddingBottom: "100%" }}>
                  <Image 
                    src={`/furniture/Ergonomic office chair/Picture${num}.png`}
                    alt={`Chair Angle ${num}`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lifestyle / Environment Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Lifestyle View</h2>
            <div className="h-px bg-slate-200 flex-1 ml-6"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifestyleImages.map((num) => (
              <div key={num} className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-200">
                <Image 
                  src={`/furniture/Ergonomic office chair/Picture${num}.png`}
                  alt={`Office Setup ${num}`}
                  fill
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
