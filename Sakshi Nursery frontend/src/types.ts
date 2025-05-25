export interface Plant {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

export interface Customer {
  id: number;
  name: string;
  image: string;
  testimonial: string;
}

export interface CartItem {
  id: number;
  plant: Plant;
  quantity: number;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}