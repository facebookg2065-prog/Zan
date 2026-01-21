
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
    // Using the specific QR shortlink provided for maximum reliability
    const whatsappURL = `https://wa.me/qr/UTNZFL6QLTIJG1?text=${encodeURIComponent(getMessage())}`;
    window.open(whatsappURL, "_blank");
  };

  const handleSubmitTelegram = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://t.me/PARONPRO`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-brand-earth relative overflow-hidden" aria-labelledby="contact-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="contact-title" className="text-4xl md:text-5xl font-black text-brand-primary mb-6">اتصل بنا / طلب كمية</h2>
          <p className="text-xl text-brand-textSec max-w-2xl mx-auto leading-relaxed">
            نحن هنا للرد على جميع استفساراتك وطلباتك. يمكنك التواصل معنا عبر الوسائل المباشرة أو ملء النموذج أدناه.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Direct Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-stone-100 text-right">
              <h3 className="text-2xl font-black text-brand-secondary mb-8">معلومات التواصل</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-5 justify-end group">
                  <div>
                    <p className="font-bold text-brand-textMain">واتساب مباشر</p>
                    <a href="https://wa.me/qr/UTNZFL6QLTIJG1" target="_blank" rel="noopener noreferrer" className="text-brand-primary text-lg font-black hover:underline">+967 778 301 265</a>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shadow-sm group-hover:scale-110 transition-transform">
                    <i className="fab fa-whatsapp text-2xl" aria-hidden="true"></i>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 justify-end group">
                  <div>
                    <p className="font-bold text-brand-textMain">البريد الإلكتروني</p>
                    <a href="mailto:appssaits@gmail.com" className="text-brand-textSec hover:text-brand-primary transition-colors font-medium">appssaits@gmail.com</a>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                    <i className="fas fa-envelope text-2xl" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="flex items-center gap-5 justify-end group">
                  <div>
                    <p className="font-bold text-brand-textMain">تليجرام الرسمي</p>
                    <a href="https://t.me/PARONPRO" target="_blank" rel="noopener noreferrer" className="text-sky-500 font-bold hover:underline">@PARONPRO</a>
                  </div>
                  <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-500 shadow-sm group-hover:scale-110 transition-transform">
                    <i className="fab fa-telegram-plane text-2xl" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <p className="mt-10 text-brand-textSec text-sm opacity-70">نضمن الرد السريع في أقل وقت ممكن.</p>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right" aria-label="نموذج طلب عرض سعر">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-brand-textMain font-bold mr-2">الاسم الكامل</label>
                  <input required id="name" name="name" value={formData.name} onChange={handleChange} type="text" placeholder="مثال: أحمد اليماني" className="w-full bg-brand-earth/50 p-4 rounded-2xl focus:ring-2 focus:ring-brand-primary outline-none transition-all" aria-required="true" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-brand-textMain font-bold mr-2">البريد الإلكتروني</label>
                  <input required id="email" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="example@mail.com" className="w-full bg-brand-earth/50 p-4 rounded-2xl focus:ring-2 focus:ring-brand-primary outline-none transition-all" aria-required="true" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-brand-textMain font-bold mr-2">رقم الهاتف / واتساب</label>
                  <input required id="phone" name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="+967 7xx xxx xxx" className="w-full bg-brand-earth/50 p-4 rounded-2xl focus:ring-2 focus:ring-brand-primary outline-none transition-all" aria-required="true" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="country" className="text-brand-textMain font-bold mr-2">الدولة</label>
                  <input required id="country" name="country" value={formData.country} onChange={handleChange} type="text" placeholder="الوجهة النهائية" className="w-full bg-brand-earth/50 p-4 rounded-2xl focus:ring-2 focus:ring-brand-primary outline-none transition-all" aria-required="true" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="product" className="text-brand-textMain font-bold mr-2">المنتج</label>
                  <select id="product" name="product" value={formData.product} onChange={handleChange} className="w-full bg-brand-earth/50 p-4 rounded-2xl focus:ring-2 focus:ring-brand-primary outline-none appearance-none cursor-pointer" aria-required="true">
                    <option value="">اختر النوع</option>
                    <option value="طازج">زنجبيل طازج</option>
                    <option value="مجفف">زنجبيل مجفف</option>
                    <option value="مطحون">زنجبيل مطحون</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="quantity" className="text-brand-textMain font-bold mr-2">الكمية (طن)</label>
                  <input id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} type="number" placeholder="10" className="w-full bg-brand-earth/50 p-4 rounded-2xl focus:ring-2 focus:ring-brand-primary outline-none transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="notes" className="text-brand-textMain font-bold mr-2">ملاحظات إضافية</label>
                  <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} rows={3} placeholder="أي متطلبات خاصة بخصوص التعبئة أو الشحن..." className="w-full bg-brand-earth/50 p-4 rounded-2xl focus:ring-2 focus:ring-brand-primary outline-none resize-none"></textarea>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <button onClick={handleSubmitWhatsApp} aria-label="إرسال الطلب عبر واتساب" className="bg-green-500 hover:bg-green-600 text-white font-black py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 active:scale-95">
                    <i className="fab fa-whatsapp text-2xl" aria-hidden="true"></i> إرسال عبر واتساب
                  </button>
                  <button onClick={handleSubmitTelegram} aria-label="تواصل مع المبيعات عبر تليجرام" className="bg-sky-500 hover:bg-sky-600 text-white font-black py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 active:scale-95">
                    <i className="fab fa-telegram-plane text-2xl" aria-hidden="true"></i> تواصل عبر تليجرام
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
