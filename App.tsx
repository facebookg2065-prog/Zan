
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import SideSocial from './components/SideSocial';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-primary/20 selection:text-brand-primary pb-20 md:pb-0">
      <AnimatePresence>
        {!isLoaded ? (
          <motion.div 
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-brand-earth flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-black text-brand-secondary">PAWER PLUS</h2>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col flex-grow"
          >
            <Header />
            
            <main className="flex-grow">
              <Hero />
              
              <section className="bg-white/50 py-10 border-y border-stone-200" aria-label="مميزات الشركة">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {[
                    { icon: 'fa-shield-alt', text: 'شهادات معتمدة' },
                    { icon: 'fa-seedling', text: 'منتج طبيعي 100%' },
                    { icon: 'fa-globe-americas', text: 'توصيل عالمي' },
                    { icon: 'fa-handshake', text: 'شريك موثوق' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white shadow-sm border border-stone-100"
                    >
                      <i className={`fas ${item.icon} text-3xl text-brand-primary`} aria-hidden="true"></i>
                      <span className="font-bold text-brand-textMain">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </section>

              <About />

              <section className="gradient-green py-20 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" aria-hidden="true"></div>
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

              <section id="privacy" className="py-24 bg-white border-t border-stone-200" aria-labelledby="privacy-title">
                 <div className="max-w-4xl mx-auto text-center px-6">
                    <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-primary">
                      <i className="fas fa-user-shield text-4xl" aria-hidden="true"></i>
                    </div>
                    <h2 id="privacy-title" className="text-4xl font-black text-brand-textMain mb-8">سياسة الخصوصية</h2>
                    <div className="space-y-6 text-xl text-brand-textSec leading-relaxed">
                      <p className="font-bold text-brand-textMain">نحترم خصوصيتك ونلتزم بحماية جميع بياناتك الشخصية.</p>
                      <p>
                        تُستخدم المعلومات المقدمة عبر الموقع فقط لأغراض تحسين الخدمة والتواصل مع العملاء، ولا يتم مشاركتها مع أي طرف ثالث دون موافقتك.
                      </p>
                      <p>
                        كما نضمن تأمين بياناتك باستخدام أحدث تقنيات التشفير للحفاظ على سرية معلوماتك التجارية والشخصية.
                      </p>
                    </div>
                 </div>
              </section>

              <Contact />
            </main>

            <Footer />
            <SideSocial />
            <GeminiAssistant />

            <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg md:hidden z-[1000] flex justify-around items-center py-4 shadow-[0_-4px_15px_rgba(0,0,0,0.08)] border-t border-stone-100 px-4 rounded-t-3xl" aria-label="التنقل السريع">
              {[
                { href: '#home', icon: 'fa-home', label: 'الرئيسية' },
                { href: '#products', icon: 'fa-layer-group', label: 'المنتجات' }
              ].map((link, i) => (
                <a key={i} href={link.href} className="flex flex-col items-center gap-1 text-brand-textSec hover:text-brand-primary transition-colors">
                  <i className={`fas ${link.icon} text-xl`}></i>
                  <span className="text-[10px] font-bold uppercase">{link.label}</span>
                </a>
              ))}
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
              {[
                { href: '#about', icon: 'fa-info-circle', label: 'من نحن' },
                { href: '#contact', icon: 'fa-envelope', label: 'تواصل' }
              ].map((link, i) => (
                <a key={i} href={link.href} className="flex flex-col items-center gap-1 text-brand-textSec hover:text-brand-primary transition-colors">
                  <i className={`fas ${link.icon} text-xl`}></i>
                  <span className="text-[10px] font-bold uppercase">{link.label}</span>
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
