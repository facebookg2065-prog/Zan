
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-earth overflow-hidden" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
               <img 
                 src="https://images.unsplash.com/photo-1600180758891-cb3c793bf6da?auto=format&fit=crop&w=800&q=80" 
                 alt="زنجبيل يمني فاخر يتم فحصه بدقة في باوره بلس" 
                 loading="lazy"
                 width="800"
                 height="600"
                 className="rounded-[3rem] shadow-2xl border-[10px] border-white w-full object-cover aspect-[4/3]"
               />
               <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-[2rem] shadow-2xl hidden md:block">
                  <p className="text-5xl font-black text-brand-primary mb-1">100%</p>
                  <p className="text-brand-secondary font-bold text-lg">منتج عضوي طبيعي</p>
               </div>
            </div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
          </div>
          
          <div className="space-y-8 text-right order-1 lg:order-2">
            <div>
              <span className="inline-block px-4 py-1.5 bg-brand-primary/15 text-brand-primary rounded-xl font-black text-sm mb-6 uppercase tracking-wider">
                هويتنا وقصتنا
              </span>
              <h2 id="about-heading" className="text-4xl md:text-6xl font-black text-brand-secondary leading-tight mb-8">
                من نحن في <span className="text-brand-primary">PAWER PLUS</span>
              </h2>
              <div className="space-y-6">
                <p className="text-2xl font-extrabold text-brand-textMain leading-snug">
                  نحن شركة يمنية رائدة في تصدير الزنجبيل عالي الجودة إلى الأسواق العالمية.
                </p>
                <p className="text-xl text-brand-textSec leading-relaxed">
                  نضمن منتجات طبيعية 100%، ملتزمون بمعايير الجودة، والموثوقية، وخدمة العملاء على أعلى مستوى. هدفنا هو توصيل أفضل زنجبيل من مزارع اليمن مباشرة إلى عملائنا حول العالم.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <article className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary flex-shrink-0">
                  <i className="fas fa-check-circle text-xl" aria-hidden="true"></i>
                </div>
                <div>
                   <h3 className="font-bold text-lg text-brand-textMain mb-1">الموثوقية</h3>
                   <p className="text-sm text-brand-textSec">التزام تام بمواعيد التسليم والمواصفات.</p>
                </div>
              </article>
              <article className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-2xl flex items-center justify-center text-brand-secondary flex-shrink-0">
                  <i className="fas fa-microscope text-xl" aria-hidden="true"></i>
                </div>
                <div>
                   <h3 className="font-bold text-lg text-brand-textMain mb-1">فحص دقيق</h3>
                   <p className="text-sm text-brand-textSec">رقابة صارمة على الجودة قبل الشحن.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
