// Define the types
interface IImageUrl {
    public_id: string;
    url: string;
  }
  
  interface IShop {
    name: string;
    shop_avatar: IImageUrl;
    ratings: number;
    category?:string;
    description?: string;
    createdAt?: Date
  }

  interface IUser {
    name?: string,
    avatar?: string
  }

  interface IReviews {
    user?: IUser,
    comment: string,
    rating: number
  }
  
  export interface IProductData {
    id: number;
    category: string;
    name: string;
    description: string;
    image_Url: IImageUrl[];
    shop: IShop;
    price?: number;
    discount_price: number;
    rating: number;
    total_sell: number;
    stock: number;
    reviews?: IReviews[]
  }