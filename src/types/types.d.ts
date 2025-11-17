export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  age?: number;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
};
