
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'مرحباً بك! أنا مساعد PAWER PLUS الذكي. كيف يمكنني مساعدتك اليوم في معرفة المزيد عن الزنجبيل اليمني الفاخر؟' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputValue('');
    setIsLoading(true);

    const response = await getGeminiResponse(userMessage);
    
    setMessages(prev => [...prev, { role: 'model', text: response || 'نعتذر، لم أستطع فهم طلبك.' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100] font-sans">
      {isOpen ? (
        <div className="bg-white w-[350px] md:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-emerald-100 animate-in zoom-in-95 duration-200 origin-bottom-left">
          {/* Header */}
          <div className="bg-emerald-700 p-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-emerald-900">
                <i className="fas fa-robot text-xl"></i>
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">مساعد باوره بلس</p>
                <p className="text-[10px] text-emerald-200">متصل الآن</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-emerald-600 w-8 h-8 rounded-full transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-stone-50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-white text-stone-700 border border-stone-200 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-stone-200 flex gap-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-stone-100 flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب سؤالك هنا..."
              className="flex-1 bg-stone-100 border-none p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 text-sm outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-emerald-700 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors disabled:opacity-50"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-emerald-700 hover:bg-emerald-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group relative"
        >
          <i className="fas fa-comment-dots text-3xl"></i>
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-amber-400 border-2 border-white rounded-full"></span>
          <div className="absolute right-20 bg-emerald-900 text-white text-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            هل لديك سؤال عن الزنجبيل؟ اسألني!
          </div>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;
