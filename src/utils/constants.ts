export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  age?: number;
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
