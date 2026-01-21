
import React, { useState } from 'react';

const SideSocial: React.FC = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[80] flex flex-col gap-2 p-2">
        {/* Telegram Icon Button */}
        <a 
          href="https://t.me/PARONPRO" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-sky-500 text-white rounded-r-2xl shadow-xl flex items-center justify-center hover:w-16 transition-all duration-300 group"
          title="تواصل تليجرام"
        >
          <i className="fab fa-telegram-plane text-2xl group-hover:scale-125 transition-transform"></i>
        </a>

        {/* QR Code Button */}
        <button 
          onClick={() => setShowQR(true)}
          className="w-14 h-14 bg-white text-emerald-800 border-y border-r border-emerald-100 rounded-r-2xl shadow-xl flex items-center justify-center hover:w-16 transition-all duration-300 group"
          title="مسح الباركود"
        >
          <i className="fas fa-qrcode text-2xl group-hover:scale-125 transition-transform"></i>
        </button>
      </div>

      {/* QR Code Modal Overlay */}
      {showQR && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-emerald-950/80 backdrop-blur-md"
            onClick={() => setShowQR(false)}
          ></div>
          
          <div className="relative bg-white rounded-[2rem] p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col items-center">
            <button 
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 transition-colors"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            
            <div className="bg-emerald-500 text-white font-bold px-6 py-2 rounded-full text-lg mb-6 shadow-lg">
              AR
            </div>
            
            <div className="bg-gradient-to-br from-green-400 to-green-600 p-2 rounded-3xl shadow-inner mb-6">
              <div className="bg-white p-4 rounded-2xl">
                 <div className="w-56 h-56 flex flex-col items-center justify-center relative border-4 border-green-100 rounded-xl overflow-hidden">
                    <i className="fas fa-qrcode text-9xl text-green-600 opacity-20 absolute"></i>
                    <i className="fab fa-whatsapp text-6xl text-green-500 z-10"></i>
                    <p className="mt-4 font-black text-green-700 text-xl tracking-tighter">+967 778 301 265</p>
                 </div>
              </div>
            </div>

            <h3 className="text-2xl font-black text-stone-900 mb-2">امسح الباركود</h3>
            <p className="text-stone-500 text-center mb-6">تواصل معنا فوراً عبر قناتنا الرسمية على تليجرام أو الواتساب</p>
            
            <div className="flex flex-col gap-3 w-full">
                <a 
                  href="https://t.me/PARONPRO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 rounded-2xl text-center transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <i className="fab fa-telegram-plane"></i>
                  فتح تليجرام
                </a>
                <a 
                  href="https://wa.me/qr/UTNZFL6QLTIJG1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-2xl text-center transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp"></i>
                  فتح واتساب
                </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideSocial;
