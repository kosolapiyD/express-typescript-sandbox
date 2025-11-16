import { Request, Response } from 'express';

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

// Global mock data
const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@test.com', password: 'john123' },
  { id: 2, name: 'Alice Smith', email: 'alice@test.com', password: 'alice123' },
  {
    id: 3,
    name: 'David Parker',
    email: 'david@test.com',
    password: 'david123',
  },
];

// GET /users
export const getAllUsers = (req: Request, res: Response) => {
  res.json(users);
};

// GET /users/:id
export const getUserById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
};
