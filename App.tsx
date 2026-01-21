
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
    <div className="min-h-screen flex flex-col selection:bg-amber-100 selection:text-emerald-900">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Trust Badges Section */}
        <div className="bg-amber-50 py-12 border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="flex items-center gap-3 text-stone-600 font-bold">
              <i className="fas fa-shield-alt text-2xl text-emerald-600"></i>
              شهادات معتمدة
            </div>
            <div className="flex items-center gap-3 text-stone-600 font-bold">
              <i className="fas fa-seedling text-2xl text-emerald-600"></i>
              منتج طبيعي 100%
            </div>
            <div className="flex items-center gap-3 text-stone-600 font-bold">
              <i className="fas fa-globe-americas text-2xl text-emerald-600"></i>
              توصيل عالمي
            </div>
            <div className="flex items-center gap-3 text-stone-600 font-bold">
              <i className="fas fa-handshake text-2xl text-emerald-600"></i>
              شريك موثوق
            </div>
          </div>
        </div>

        <About />

        {/* Feature Banner */}
        <section className="bg-emerald-800 py-16 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black mb-6">هل تبحث عن زنجبيل يمني أصلي بكميات تجارية؟</h2>
            <p className="text-xl text-emerald-100 mb-8 opacity-90">نحن نسهل عليك عملية الاستيراد من خلال توفير كل الوثائق والتراخيص اللازمة لضمان وصول شحنتك بسلام.</p>
            <a href="#contact" className="inline-block bg-amber-400 text-emerald-900 font-black px-12 py-4 rounded-full text-lg shadow-xl hover:bg-amber-300 transition-all">
              اطلب عينة الآن
            </a>
          </div>
        </section>

        <Products />

        {/* Privacy Highlight */}
        <section id="privacy" className="py-20 bg-stone-100 border-t border-stone-200">
           <div className="max-w-3xl mx-auto text-center px-4">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-700">
                <i className="fas fa-user-shield text-3xl"></i>
              </div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6 uppercase tracking-wider">سياسة الخصوصية</h2>
              <p className="text-stone-700 text-xl font-medium leading-relaxed mb-6">
                نحترم خصوصيتك ونلتزم بحماية جميع بياناتك الشخصية.
              </p>
              <p className="text-stone-600 leading-relaxed italic text-lg">
                تُستخدم المعلومات المقدمة عبر الموقع فقط لأغراض تحسين الخدمة والتواصل مع العملاء، ولا يتم مشاركتها مع أي طرف ثالث دون موافقتك. كما نضمن تأمين بياناتك باستخدام أحدث التقنيات للحفاظ على سرية معلوماتك.
              </p>
           </div>
        </section>

        <Contact />
      </main>

      <Footer />

      {/* Side Floating QR and Social */}
      <SideSocial />

      {/* AI Assistant */}
      <GeminiAssistant />

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden z-[90]">
        <a 
          href="https://wa.me/qr/UTNZFL6QLTIJG1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
