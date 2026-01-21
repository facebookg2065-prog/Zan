
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getMessage = () => `
طلب استيراد - باوره بلس:
الاسم: ${formData.name}
البريد: ${formData.email}
الهاتف: ${formData.phone}
الدولة: ${formData.country}
المنتج: ${formData.product}
الكمية: ${formData.quantity} طن
ملاحظات: ${formData.notes}
  `;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappURL = `https://wa.me/qr/UTNZFL6QLTIJG1?text=${encodeURIComponent(getMessage())}`;
    window.open(whatsappURL, "_blank");
  };

  const handleSubmitTelegram = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://t.me/PARONPRO`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-brand-earth/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[4rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden border border-white flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="md:w-1/3 gradient-green p-12 text-white text-right flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-black mb-6">اتصل بنا</h2>
              <p className="text-brand-earth/80 text-lg mb-10 leading-relaxed">
                نحن هنا للرد على جميع استفساراتك وطلباتك. فريقنا يضمن الرد السريع في أقل وقت ممكن.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <p className="font-bold text-lg">+967 778 301 265</p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <p className="font-bold text-lg">appssaits@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-20">
              <p className="text-sm opacity-60">نحن نعمل من السبت إلى الخميس</p>
              <p className="text-lg font-black">08:00 AM - 05:00 PM</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-2/3 p-12 md:p-16 text-right">
            <h3 className="text-3xl font-black text-brand-secondary mb-10">إرسال طلب استفسار</h3>
            <p className="text-brand-textSec mb-8">يمكنك التواصل معنا عبر نموذج طلب الكمية وسنقوم بالتواصل معك فوراً.</p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-brand-textMain font-black text-sm mr-2 uppercase">الاسم الكامل</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="محمد أحمد"
                  className="w-full bg-brand-earth/50 border-2 border-transparent focus:border-brand-primary p-4 rounded-2xl outline-none transition-all placeholder:text-brand-textSec/40"
                />
              </div>

              <div className="space-y-2">
                <label className="text-brand-textMain font-black text-sm mr-2 uppercase">البريد الإلكتروني</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full bg-brand-earth/50 border-2 border-transparent focus:border-brand-primary p-4 rounded-2xl outline-none transition-all placeholder:text-brand-textSec/40"
                />
              </div>

              <div className="space-y-2">
                <label className="text-brand-textMain font-black text-sm mr-2 uppercase">نوع المنتج المطلوب</label>
                <select 
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full bg-brand-earth/50 border-2 border-transparent focus:border-brand-primary p-4 rounded-2xl outline-none appearance-none cursor-pointer"
                >
                  <option value="">اختر الصنف</option>
                  <option value="طازج">زنجبيل طازج</option>
                  <option value="مجفف">زنجبيل مجفف</option>
                  <option value="مطحون">زنجبيل مطحون</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-brand-textMain font-black text-sm mr-2 uppercase">الكمية التقديرية (طن)</label>
                <input 
                  type="number" 
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="5"
                  className="w-full bg-brand-earth/50 border-2 border-transparent focus:border-brand-primary p-4 rounded-2xl outline-none transition-all placeholder:text-brand-textSec/40"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-brand-textMain font-black text-sm mr-2 uppercase">تفاصيل إضافية</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="اكتب هنا أي تفاصيل تخص الشحن أو التغليف..."
                  className="w-full bg-brand-earth/50 border-2 border-transparent focus:border-brand-primary p-4 rounded-2xl outline-none resize-none placeholder:text-brand-textSec/40"
                ></textarea>
              </div>

              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <button 
                  onClick={handleSubmitWhatsApp}
                  className="bg-[#25D366] hover:bg-[#1ebd5b] text-white font-black py-5 rounded-2xl transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                  طلب عبر واتساب
                </button>
                <button 
                  onClick={handleSubmitTelegram}
                  className="bg-[#0088cc] hover:bg-[#0077b5] text-white font-black py-5 rounded-2xl transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <i className="fab fa-telegram-plane text-2xl"></i>
                  تواصل تليجرام
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
