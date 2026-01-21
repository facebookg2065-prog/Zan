
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-black mb-6">PAWER PLUS</h2>
            <p className="text-stone-400 leading-relaxed mb-6">
              نحن الرواد في تصدير الزنجبيل اليمني عالي الجودة إلى الأسواق العالمية، نلتزم بالتميز والاستدامة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://t.me/PARONPRO" target="_blank" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors">
                <i className="fab fa-telegram-plane"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">روابط سريعة</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#home" className="hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">منتجاتنا</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">تواصل معنا</h4>
            <ul className="space-y-4 text-stone-400">
              <li className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-emerald-500"></i>
                الجمهورية اليمنية، صنعاء
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-emerald-500"></i>
                appssaits@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-emerald-500"></i>
                <a href="https://wa.me/qr/UTNZFL6QLTIJG1" target="_blank" className="hover:text-white">+967 778 301 265</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fab fa-telegram-plane text-emerald-500"></i>
                t.me/PARONPRO
              </li>
            </ul>
          </div>

          {/* Newsletter (Simplified) */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">اشترك في النشرة</h4>
            <p className="text-stone-400 text-sm mb-4">احصل على آخر أسعار السوق وتحديثات التصدير.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-stone-800 border-none p-3 rounded-lg flex-1 text-sm focus:ring-1 focus:ring-emerald-500"
              />
              <button className="bg-emerald-700 px-4 py-2 rounded-lg text-sm font-bold">ارسال</button>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-10 text-center text-stone-500 text-sm">
          <p>© 2026 باوره بلس (PAWER PLUS) | جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
