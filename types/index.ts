export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
}

export interface Category {
  name: string;
  slug: string;
  image: string;
}