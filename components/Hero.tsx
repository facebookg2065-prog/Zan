
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[85vh] md:h-[650px] flex items-center justify-center overflow-hidden">
      {/* Immersive Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20000ms] scale-100 hover:scale-110"
        role="img"
        aria-label="خلفية مزارع الزنجبيل اليمني الخلابة"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592928306620-46b3742c46d0?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-brand-secondary/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-earth via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-bold mb-8 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <i className="fas fa-award text-amber-400" aria-hidden="true"></i>
          <span>الجودة اليمنية الأولى عالمياً</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] drop-shadow-2xl">
          أصالة الزنجبيل <br/>
          <span className="text-brand-primary bg-white/95 px-6 rounded-3xl inline-block mt-4 shadow-2xl">اليمني الفاخر</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
          نصدر أفضل محاصيل الزنجبيل العضوي من أعالي الجبال اليمنية مباشرة إلى شركائنا في جميع أنحاء العالم.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a 
            href="#contact" 
            aria-label="اطلب عرض سعر للزنجبيل اليمني"
            className="w-full sm:w-auto gradient-green text-white text-xl font-black px-12 py-5 rounded-2xl transition-all shadow-2xl hover:shadow-brand-primary/40 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
          >
            <i className="fas fa-paper-plane" aria-hidden="true"></i>
            اطلب عرض سعر
          </a>
          <a 
            href="#products" 
            aria-label="تصفح منتجات الزنجبيل اليمني"
            className="w-full sm:w-auto bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-2 border-white/40 text-xl font-black px-12 py-5 rounded-2xl transition-all flex items-center justify-center gap-3"
          >
            استعرض المنتجات
          </a>
        </div>
      </div>

      {/* Trust Indicator Desktop */}
      <div className="absolute bottom-16 right-10 hidden xl:block animate-in fade-in slide-in-from-right-10 duration-1000 delay-500">
        <div className="glass-card p-6 rounded-[2rem] shadow-2xl flex items-center gap-5">
           <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
              <i className="fas fa-leaf text-2xl" aria-hidden="true"></i>
           </div>
           <div>
              <p className="text-brand-secondary font-black text-lg">طبيعي 100%</p>
              <p className="text-brand-textSec text-sm">عضوي وخالي من الإضافات</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
