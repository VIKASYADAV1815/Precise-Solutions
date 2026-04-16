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
    <header className="sticky top-0 z-100 w-full border-b border-slate-100 bg-white/80 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 z-110">
          <div className="relative w-40 h-12 md:w-56 md:h-16">
            <Image 
              src="/logo.jpeg" 
              alt="Precise Solutions Logo" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Nav - Editorial Style */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-900 transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        
        {/* CTA Button */}
        <Link 
          href="/contact" 
          className="hidden md:inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-8 text-[10px] font-bold text-white uppercase tracking-[0.2em] transition-all duration-300 hover:bg-black hover:shadow-2xl hover:shadow-slate-200 active:scale-95"
        >
          Get a Quote
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-110 p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay - Clean Slide Down */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="absolute top-0 left-0 w-full h-screen bg-white md:hidden z-105 flex flex-col pt-32 px-8"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif text-slate-900 uppercase tracking-tighter hover:text-slate-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8 border-t border-slate-100"
              >
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-14 items-center justify-center rounded-full bg-slate-900 text-white text-[12px] font-bold uppercase tracking-[0.2em]"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}