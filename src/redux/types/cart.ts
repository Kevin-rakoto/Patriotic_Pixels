// types/cart.ts
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  discount_prise: number;
  stock: number;
  image: string
}

export interface CartState {
  items: CartItem[];
}
