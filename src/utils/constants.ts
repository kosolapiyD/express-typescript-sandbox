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

// Global mock data
export const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@test.com',
    password: 'john123',
    age: 30,
  },
  {
    id: 2,
    name: 'Alice Smith',
    email: 'alice@test.com',
    password: 'alice123',
    age: 25,
  },
  {
    id: 3,
    name: 'David Parker',
    email: 'david@test.com',
    password: 'david123',
    age: 28,
  },
  {
    id: 4,
    name: 'Emma Johnson',
    email: 'emma@test.com',
    password: 'emma123',
    age: 22,
  },
  {
    id: 5,
    name: 'Michael Brown',
    email: 'michael@test.com',
    password: 'michael123',
    age: 35,
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    description: 'This is the first product.',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 19.99,
    description: 'This is the second product.',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 5.99,
    description: 'This is the third product.',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 15.49,
    description: 'This is the fourth product.',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 25.0,
    description: 'This is the fifth product.',
  },
];
