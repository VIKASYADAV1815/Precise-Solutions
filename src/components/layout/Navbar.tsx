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
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-100 pointer-events-none">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          
          {/* 1. Logo - Made Slightly Larger */}
          <Link href="/" className="relative z-110 flex items-center shrink-0 pointer-events-auto">
            <div className="relative w-44 h-12 md:w-64 md:h-16">
              <Image 
                src="/logo.jpeg" 
                alt="Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* 2. Floating Menu - Glassmorphic capsule style */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 bg-white/70 backdrop-blur-md px-12 h-16 items-center rounded-b-[1.8rem] shadow-sm border-x border-b border-white/50 z-110 pointer-events-auto">
            <div className="flex gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-[13px] font-bold text-slate-800 hover:text-slate-500 transition-colors tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* 3. Contact Us Button - Instead of Icons */}
          <div className="hidden md:flex items-center z-110 pointer-events-auto">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md active:scale-95"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            className="lg:hidden z-110 p-2 text-slate-900 bg-white/80 rounded-full backdrop-blur-sm pointer-events-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white md:hidden z-105 flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif text-slate-900 uppercase tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}