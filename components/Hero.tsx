
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Warm Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[15000ms] hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592928306620-46b3742c46d0?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-brand-secondary/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-brand-earth/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 bg-brand-primary text-white rounded-full text-sm font-bold mb-8 shadow-xl animate-bounce">
          <i className="fas fa-certificate ml-2"></i> جودة عالمية مضمونة
        </div>
        <h2 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[1.1] drop-shadow-2xl">
          أصالة الزنجبيل <br/>
          <span className="text-brand-primary bg-white/10 px-4 rounded-3xl backdrop-blur-sm border border-white/20">اليمني الفاخر</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          نصدر أفضل محاصيل الزنجبيل العضوي من أعالي الجبال اليمنية مباشرة إلى شركائنا في جميع أنحاء العالم.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a 
            href="#contact" 
            className="w-full sm:w-auto gradient-green hover:shadow-brand-primary/40 hover:shadow-2xl text-white text-xl font-black px-12 py-5 rounded-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <i className="fas fa-paper-plane"></i>
            اطلب عرض سعر
          </a>
          <a 
            href="#products" 
            className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 text-xl font-black px-12 py-5 rounded-2xl backdrop-blur-md transition-all flex items-center justify-center gap-3"
          >
            منتجاتنا
          </a>
        </div>
      </div>

      {/* Floating Info */}
      <div className="absolute bottom-10 left-10 hidden xl:block animate-pulse">
        <div className="glass-card p-6 rounded-3xl border-brand-primary/20">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white">
                 <i className="fas fa-leaf text-xl"></i>
              </div>
              <div>
                 <p className="text-brand-secondary font-black">طبيعي 100%</p>
                 <p className="text-brand-textSec text-xs">بدون إضافات كيماوية</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
