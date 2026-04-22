
import { useRef } from 'react';

export default function Footer() {
  const footerRef = useRef(null);


  const currentYear = new Date().getFullYear();

  return (
    <footer ref={footerRef} className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">A</span>
              </div>
              <span className="text-lg font-bold">Agency</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Digital solutions that elevate your brand and drive results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">📧</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
