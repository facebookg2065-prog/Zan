
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-24 pb-12 text-right relative overflow-hidden" role="contentinfo">
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-30" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & Social */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-white">PAWER PLUS</h2>
            <p className="text-stone-400 leading-relaxed text-lg">
              نحن الرواد في تصدير الزنجبيل اليمني عالي الجودة إلى الأسواق العالمية، نلتزم بالتميز والموثوقية المطلقة.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/pawerplus" target="_blank" rel="noopener noreferrer" aria-label="فيسبوك باوره بلس" className="w-12 h-12 bg-stone-800 rounded-2xl flex items-center justify-center hover:bg-brand-primary transition-all shadow-lg hover:-translate-y-1">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="https://instagram.com/pawerplus" target="_blank" rel="noopener noreferrer" aria-label="انستجرام باوره بلس" className="w-12 h-12 bg-stone-800 rounded-2xl flex items-center justify-center hover:bg-pink-600 transition-all shadow-lg hover:-translate-y-1">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://t.me/PARONPRO" target="_blank" rel="noopener noreferrer" aria-label="تليجرام باوره بلس" className="w-12 h-12 bg-stone-800 rounded-2xl flex items-center justify-center hover:bg-sky-500 transition-all shadow-lg hover:-translate-y-1">
                <i className="fab fa-telegram-plane" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <nav aria-label="روابط سريعة في التذييل">
            <h4 className="text-xl font-bold mb-8 text-brand-primary border-r-4 border-brand-primary pr-4">روابط سريعة</h4>
            <ul className="space-y-4 text-stone-400 font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">منتجاتنا</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">اطلب الآن</a></li>
            </ul>
          </nav>

          {/* Detailed Contact */}
          <address className="not-italic">
            <h4 className="text-xl font-bold mb-8 text-brand-primary border-r-4 border-brand-primary pr-4">تواصل مباشر</h4>
            <ul className="space-y-5 text-stone-300">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                </div>
                <span>الجمهورية اليمنية، صنعاء</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </div>
                <a href="mailto:appssaits@gmail.com" className="hover:text-brand-primary transition-colors">appssaits@gmail.com</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
                  <i className="fab fa-whatsapp" aria-hidden="true"></i>
                </div>
                <a href="https://wa.me/qr/UTNZFL6QLTIJG1" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors font-bold">+967 778 301 265</a>
              </li>
            </ul>
          </address>

          {/* Trust Seal */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center w-full">
              <i className="fas fa-certificate text-4xl text-brand-primary mb-4" aria-hidden="true"></i>
              <h5 className="font-bold mb-2">تصدير معتمد</h5>
              <p className="text-sm text-stone-500 leading-tight">جميع الشحنات تخضع لفحص مخبري دقيق لضمان مطابقة المواصفات العالمية.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-10 text-center text-stone-500 text-sm">
          <p>© 2026 باوره بلس (PAWER PLUS) | جميع الحقوق محفوظة.</p>
          <p className="mt-2 text-stone-700">صنع بشغف في قلب اليمن</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
