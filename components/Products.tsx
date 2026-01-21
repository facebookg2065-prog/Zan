
import React from 'react';

const products = [
  {
    title: "زنجبيل طازج",
    desc: "محصود حديثاً، يتميز برطوبة مثالية وقشرة ذهبية رقيقة وطعم حار لا يقاوم.",
    img: "https://images.unsplash.com/photo-1599058917214-c5b1016bb5a3?auto=format&fit=crop&w=600&q=80",
    badge: "الأكثر طلباً"
  },
  {
    title: "زنجبيل مجفف",
    desc: "تم تجفيفه بعناية في الظل للحفاظ على الفوائد الطبية والروائح العطرية القوية.",
    img: "https://images.unsplash.com/photo-1611711610730-5b8f8435d0ea?auto=format&fit=crop&w=600&q=80",
    badge: "نخب أول"
  },
  {
    title: "زنجبيل مطحون",
    desc: "مطحون على البارد لضمان بقاء النكهة قوية وطازجة، مثالي للاستخدام الصناعي والغذائي.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
    badge: "جودة ممتازة"
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-primary font-black uppercase tracking-widest text-sm">كتالوج المنتجات</span>
          <h2 id="products-heading" className="text-5xl font-black text-brand-secondary mt-3 mb-6">خلاصة الأرض اليمنية</h2>
          <p className="text-brand-textSec max-w-2xl mx-auto text-xl leading-relaxed">
            نحن نقدم حلولاً متكاملة لتجارة الزنجبيل، من الخام الطازج إلى المطحون المعبأ وفق أعلى المواصفات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((p, idx) => (
            <article key={idx} className="bg-brand-earth/30 rounded-[3rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all group border border-brand-earth/50 flex flex-col h-full transform hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={p.img} 
                  alt={`${p.title} يمني عضوي عالي الجودة من باوره بلس`} 
                  loading="lazy"
                  width="600"
                  height="400"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                <div className="absolute top-6 right-6 gradient-green text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-tighter shadow-xl">
                  {p.badge}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow text-right">
                <h3 className="text-3xl font-black text-brand-textMain mb-4">{p.title}</h3>
                <p className="text-brand-textSec text-lg leading-relaxed mb-8 flex-grow">
                  {p.desc}
                </p>
                <a 
                  href="#contact" 
                  aria-label={`طلب تسعيرة لمنتج ${p.title}`}
                  className="w-full bg-white text-brand-primary text-center border-2 border-brand-primary hover:bg-brand-primary hover:text-white font-black py-4 rounded-2xl transition-all shadow-md active:scale-95"
                >
                  طلب تسعيرة للمنتج
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
