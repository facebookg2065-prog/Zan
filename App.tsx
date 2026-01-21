
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import SideSocial from './components/SideSocial';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-primary/20 selection:text-brand-primary pb-20 md:pb-0">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Modern Trust Badges */}
        <div className="bg-white/50 py-10 border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white shadow-sm border border-stone-100">
              <i className="fas fa-shield-alt text-3xl text-brand-primary"></i>
              <span className="font-bold text-brand-textMain">شهادات معتمدة</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white shadow-sm border border-stone-100">
              <i className="fas fa-seedling text-3xl text-brand-primary"></i>
              <span className="font-bold text-brand-textMain">منتج طبيعي 100%</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white shadow-sm border border-stone-100">
              <i className="fas fa-globe-americas text-3xl text-brand-primary"></i>
              <span className="font-bold text-brand-textMain">توصيل عالمي</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white shadow-sm border border-stone-100">
              <i className="fas fa-handshake text-3xl text-brand-primary"></i>
              <span className="font-bold text-brand-textMain">شريك موثوق</span>
            </div>
          </div>
        </div>

        <About />

        {/* Action Banner */}
        <section className="gradient-green py-20 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">هل تبحث عن زنجبيل يمني أصلي بكميات تجارية؟</h2>
            <p className="text-xl opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
              نحن نسهل عليك عملية الاستيراد من خلال توفير كل الوثائق والتراخيص اللازمة لضمان وصول شحنتك بسلام.
            </p>
            <a href="#contact" className="inline-block bg-white text-brand-primary font-black px-14 py-5 rounded-2xl text-xl shadow-2xl hover:bg-brand-earth transition-all transform hover:scale-105 active:scale-95">
              اطلب عينة الآن
            </a>
          </div>
        </section>

        <Products />

        {/* Privacy Section with New Text */}
        <section id="privacy" className="py-24 bg-white border-t border-stone-200">
           <div className="max-w-4xl mx-auto text-center px-6">
              <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-primary">
                <i className="fas fa-user-shield text-4xl"></i>
              </div>
              <h2 className="text-4xl font-black text-brand-textMain mb-8">سياسة الخصوصية</h2>
              <div className="space-y-6 text-xl text-brand-textSec leading-relaxed">
                <p className="font-bold text-brand-textMain">نحترم خصوصيتك ونلتزم بحماية جميع بياناتك الشخصية.</p>
                <p>
                  تُستخدم المعلومات المقدمة عبر الموقع فقط لأغراض تحسين الخدمة والتواصل مع العملاء، ولا يتم مشاركتها مع أي طرف ثالث دون موافقتك.
                </p>
                <p>
                  كما نضمن تأمين بياناتك باستخدام أحدث التقنيات للحفاظ على سرية معلوماتك.
                </p>
              </div>
           </div>
        </section>

        <Contact />
      </main>

      <Footer />

      {/* Side Social Buttons */}
      <SideSocial />

      {/* AI Assistant */}
      <GeminiAssistant />

      {/* Modern Bottom Navigation (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg md:hidden z-[1000] flex justify-around items-center py-4 bottom-nav-shadow border-t border-stone-100 px-4 rounded-t-3xl">
        <a href="#home" className="flex flex-col items-center gap-1 text-brand-textSec hover:text-brand-primary transition-colors">
          <i className="fas fa-home text-xl"></i>
          <span className="text-[10px] font-bold uppercase">الرئيسية</span>
        </a>
        <a href="#products" className="flex flex-col items-center gap-1 text-brand-textSec hover:text-brand-primary transition-colors">
          <i className="fas fa-layer-group text-xl"></i>
          <span className="text-[10px] font-bold uppercase">المنتجات</span>
        </a>
        <div className="relative -mt-12">
           <a 
            href="https://wa.me/qr/UTNZFL6QLTIJG1" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-brand-primary rounded-full shadow-2xl flex items-center justify-center text-white text-3xl border-4 border-brand-earth transform transition-transform active:scale-90"
           >
            <i className="fab fa-whatsapp"></i>
           </a>
        </div>
        <a href="#about" className="flex flex-col items-center gap-1 text-brand-textSec hover:text-brand-primary transition-colors">
          <i className="fas fa-info-circle text-xl"></i>
          <span className="text-[10px] font-bold uppercase">من نحن</span>
        </a>
        <a href="#contact" className="flex flex-col items-center gap-1 text-brand-textSec hover:text-brand-primary transition-colors">
          <i className="fas fa-envelope text-xl"></i>
          <span className="text-[10px] font-bold uppercase">تواصل</span>
        </a>
      </div>
    </div>
  );
};

export default App;
