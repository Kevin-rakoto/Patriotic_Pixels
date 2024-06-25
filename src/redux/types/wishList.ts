// types/cart.ts
export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  discount_prise: number;
  stock: number;
  image: string
}


export interface WishlistState {
  wishlist: WishlistItem[];
}
