
import React, { useState } from 'react';

const SideSocial: React.FC = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[80] flex flex-col gap-2 p-2" aria-label="روابط تواصل عائمة">
        {/* Telegram Icon Button */}
        <a 
          href="https://t.me/PARONPRO" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-sky-500 text-white rounded-r-2xl shadow-xl flex items-center justify-center hover:w-16 transition-all duration-300 group"
          aria-label="تواصل معنا عبر تليجرام"
          title="تواصل تليجرام"
        >
          <i className="fab fa-telegram-plane text-2xl group-hover:scale-125 transition-transform" aria-hidden="true"></i>
        </a>

        {/* QR Code Button */}
        <button 
          onClick={() => setShowQR(true)}
          className="w-14 h-14 bg-white text-brand-primary border-y border-r border-stone-200 rounded-r-2xl shadow-xl flex items-center justify-center hover:w-16 transition-all duration-300 group"
          aria-label="عرض باركود التواصل السريع"
          title="مسح الباركود"
        >
          <i className="fas fa-qrcode text-2xl group-hover:scale-125 transition-transform" aria-hidden="true"></i>
        </button>
      </div>

      {/* QR Code Modal Overlay */}
      {showQR && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="qr-modal-title">
          <div 
            className="absolute inset-0 bg-stone-900/80 backdrop-blur-md"
            onClick={() => setShowQR(false)}
            aria-hidden="true"
          ></div>
          
          <div className="relative bg-white rounded-[2.5rem] p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col items-center">
            <button 
              onClick={() => setShowQR(false)}
              className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 transition-colors p-2"
              aria-label="إغلاق النافذة"
            >
              <i className="fas fa-times text-2xl" aria-hidden="true"></i>
            </button>
            
            <div className="bg-brand-primary text-white font-bold px-8 py-2 rounded-full text-lg mb-8 shadow-lg">
              QR CODE
            </div>
            
            <div className="bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 p-3 rounded-[3rem] shadow-inner mb-8 border border-brand-primary/10">
              <div className="bg-white p-6 rounded-[2.5rem] shadow-sm">
                 <div className="w-56 h-56 flex flex-col items-center justify-center relative border-4 border-brand-earth rounded-3xl overflow-hidden">
                    <i className="fas fa-qrcode text-9xl text-brand-primary opacity-10 absolute" aria-hidden="true"></i>
                    <i className="fab fa-whatsapp text-7xl text-brand-primary z-10" aria-hidden="true"></i>
                    <p className="mt-4 font-black text-brand-secondary text-xl tracking-tighter" dir="ltr">+967 778 301 265</p>
                 </div>
              </div>
            </div>

            <h3 id="qr-modal-title" className="text-2xl font-black text-brand-textMain mb-2">تواصل معنا فوراً</h3>
            <p className="text-brand-textSec text-center mb-8 leading-relaxed">استخدم هاتفك لمسح الكود والتحدث مع فريق المبيعات مباشرة</p>
            
            <div className="flex flex-col gap-4 w-full">
                <a 
                  href="https://wa.me/qr/UTNZFL6QLTIJG1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-2xl text-center transition-all shadow-lg flex items-center justify-center gap-3 active:scale-95"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  فتح واتساب
                </a>
                <a 
                  href="https://t.me/PARONPRO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 rounded-2xl text-center transition-all shadow-lg flex items-center justify-center gap-3 active:scale-95"
                >
                  <i className="fab fa-telegram-plane text-xl"></i>
                  فتح تليجرام
                </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideSocial;
