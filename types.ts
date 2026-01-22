export interface Benefit {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Bonus {
  id: number;
  title: string;
  value: string;
  description: string;
}