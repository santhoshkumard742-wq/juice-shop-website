
export interface JuiceItem {
  id: string;
  name: string;
  price: string;
  image: string;
  benefits: string[];
  color: string;
}

export interface ComboItem {
  id: string;
  name: string;
  description: string;
  price: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
