import { NextFunction, Request, Response } from 'express';
import { AppError } from '../utils/app-error';

import { users, User } from '../utils/constants';

export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (users.length === 0) {
    return next(new AppError(404, 'No users found'));
  }

  res.json(users);
};

export const getUserById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return next(new AppError(404, 'User not found'));
  }

  res.json(user);
};

export const updateUser = (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const { name, email, password } = req.body;
  const user = users.find((u) => u.id === id);
  if (!user) {
    return next(new AppError(404, 'User not found'));
  }
  user.name = name;
  user.email = email;
  user.password = password;
  res.json(user);
};

export const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(new AppError(400, 'Name, email, and password are required'));
  }
  const newUser: User = {
    id: users.length + 1,
    name,
    email,
    password,
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex === -1) {
    return next(new AppError(404, 'User not found'));
  }
  const deletedUser = users.splice(userIndex, 1)[0];
  res.json(deletedUser);
};
