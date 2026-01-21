
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'fresh' | 'dried' | 'powder';
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  quantity: string;
  notes: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
