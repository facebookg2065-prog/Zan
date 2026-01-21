
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'منتجاتنا', href: '#products' },
    { name: 'الخصوصية', href: '#privacy' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header className="gradient-green text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-brand-primary font-bold text-2xl shadow-lg transform rotate-3">P</div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-extrabold tracking-tighter leading-none">PAWER PLUS</h1>
              <span className="text-[10px] uppercase tracking-widest text-brand-earth opacity-80">Yemeni Ginger Export</span>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white relative group font-bold transition-colors text-lg"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white/40 transition-all group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-primary/95 backdrop-blur-lg border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-5 text-xl font-bold hover:bg-white/10 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
