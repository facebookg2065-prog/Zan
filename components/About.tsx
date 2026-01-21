
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-earth overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 group">
               <img 
                 src="https://images.unsplash.com/photo-1600180758891-cb3c793bf6da?auto=format&fit=crop&w=800&q=80" 
                 alt="Yemeni Agriculture" 
                 className="rounded-[3rem] shadow-2xl transition-transform duration-700 group-hover:scale-105 border-8 border-white"
               />
               <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-3xl shadow-2xl border-brand-primary/30 max-w-[200px] hidden md:block">
                  <p className="text-4xl font-black text-brand-primary mb-1">20+</p>
                  <p className="text-brand-secondary font-bold leading-tight">عاماً من الخبرة في تصدير التوابل</p>
               </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-0"></div>
          </div>
          
          <div className="space-y-10 text-right">
            <div>
              <span className="inline-block px-5 py-2 bg-brand-primary/10 text-brand-primary rounded-full font-black text-sm uppercase tracking-widest mb-6">
                قصتنا وقيمنا الأساسية
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-brand-secondary leading-tight mb-6">
                نحن في <span className="text-brand-primary">PAWER PLUS</span> <br/>
                فخورون بهويتنا الزراعية
              </h2>
              <p className="text-xl text-brand-textMain leading-relaxed font-bold mb-4">
                نحن في PAWER PLUS شركة يمنية رائدة في تصدير الزنجبيل عالي الجودة إلى الأسواق العالمية.
              </p>
              <p className="text-lg text-brand-textSec leading-relaxed">
                نضمن منتجات طبيعية 100%، ملتزمون بمعايير الجودة، والموثوقية، وخدمة العملاء على أعلى مستوى. هدفنا هو توصيل أفضل زنجبيل من مزارع اليمن مباشرة إلى عملائنا حول العالم.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all border border-brand-earth">
                <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-primary/20">
                  <i className="fas fa-award text-2xl"></i>
                </div>
                <h4 className="font-black text-2xl text-brand-textMain mb-3">تميزنا النوعي</h4>
                <p className="text-brand-textSec">نضمن وصول الزنجبيل بأعلى نسب الزيوت العطرية والتركيز المطلوب.</p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all border border-brand-earth">
                <div className="w-14 h-14 bg-brand-secondary rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-secondary/20">
                  <i className="fas fa-shipping-fast text-2xl"></i>
                </div>
                <h4 className="font-black text-2xl text-brand-textMain mb-3">اللوجستيات</h4>
                <p className="text-brand-textSec">نمتلك شبكة توريد متكاملة تضمن الشحن السريع والآمن لمختلف القارات.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
