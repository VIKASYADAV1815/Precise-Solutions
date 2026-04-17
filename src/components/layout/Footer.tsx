import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-ocean"></div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="md:col-span-2">
          <Link href="/" className="inline-block mb-6">
            <div className="relative w-64 h-16">
              <Image 
                src="/logo2.png" 
                alt="Precise Solutions Logo" 
                fill
                className="object-contain object-left"
                sizes="256px"
              />
            </div>
          </Link>
          <p className="text-slate-600 text-sm max-w-sm mb-8 leading-relaxed">
            Your Trusted Partner for Seamless Global Sourcing. <br/>
            <span className="font-semibold text-slate-800">Precision. Reliability. Results.</span>
          </p>
          <div className="text-sm text-slate-600 space-y-2">
            <p className="flex items-start gap-2">
              <span className="text-slate-400">📍</span>
              <span>Room 4709, 47th Floor, No. 372 Huanshi East Road<br/>Yuexiu District, Guangzhou, China</span>
            </p>
            <p className="flex items-center gap-2 mt-4">
        
        
            </p>
            <p className="flex items-center gap-2">
              <span className="text-slate-400">📞</span>
              <span>Mob: <strong>+86-136 1008 7785</strong></span>
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><Link href="/" className="hover:text-slate-900 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-slate-900 transition-colors">About Us</Link></li>
            <li><Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link></li>
            <li><Link href="/contact" className="hover:text-slate-900 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Our Services</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Sourcing from China</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Quality Control (QC)</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Pre-Shipment Inspection</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> End-to-End Logistics</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Precise Solutions (HK) Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}