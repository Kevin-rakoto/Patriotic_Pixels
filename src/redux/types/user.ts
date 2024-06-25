export interface UserData {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  password?: string;
  avatar?: {
    url: string;
  };
  role: string;
}

export interface UserState {
  isAuthenticated: boolean;
  loading: boolean;
  user?: UserData;
  error?: string | null;
  successMessage?: string | null;
}

export interface UserAddress {
    country: string;
    city: string;
    address1: string;
    address2: string;
    addressType: string;
  }
  