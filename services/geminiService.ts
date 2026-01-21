
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const SYSTEM_INSTRUCTION = `
You are "PAWER PLUS AI Assistant", an expert in Yemeni ginger agriculture, international export logistics, and spice quality standards. 
Your goal is to help potential international buyers understand the unique value of Yemeni ginger (known for its potency and rich flavor).

Guidelines:
1. Provide information about our products: Fresh Ginger, Dried Ginger, and Ground Ginger.
2. Explain the benefits of Yemeni ginger (organic-rich soil, high essential oil content).
3. Help users estimate shipping requirements (though clarify that final quotes come from the sales team).
4. Be professional, welcoming, and helpful.
5. Answer primarily in Arabic, but support English if the user asks in English.
6. If asked about prices, explain that they fluctuate based on market rates and season, and encourage filling out the inquiry form.
`;

export const getGeminiResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "عذراً، حدث خطأ أثناء معالجة طلبك. يرجى المحاولة لاحقاً أو الاتصال بنا مباشرة عبر واتساب.";
  }
};
