"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-sm transition-all duration-300">
      {/* Reduced height from h-20 to h-16 (or h-14) to tighten top/bottom padding */}
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group z-50">
          {/* Increased height (h-12 to h-14) and width to make the logo physically larger */}
          <div className="relative w-44 h-12 md:w-60 md:h-16">
            <Image 
              src="/logo.jpeg" 
              alt="Precise Solutions Logo" 
              fill
              className="object-contain object-left group-hover:opacity-80 transition-opacity duration-300"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-[15px] font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="relative text-slate-600 hover:text-slate-900 transition-colors group">
              {link.name}
              <span className="absolute inset-x-0 -bottom-1.5 h-0.5 bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}
        </nav>
        
        <Link 
          href="/contact" 
          className="hidden md:inline-flex h-10 items-center justify-center rounded-full bg-slate-900 px-7 text-[14px] font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-slate-900/30"
        >
          Get a Quote
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-50 p-2 -mr-2 text-slate-600 hover:text-slate-900 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl md:hidden z-40"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-slate-700 hover:text-blue-600 transition-colors py-2 border-b border-slate-50 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex h-12 items-center justify-center rounded-xl bg-blue-600 px-6 text-base font-bold text-white shadow-lg shadow-blue-600/30 transition-all active:scale-95"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}