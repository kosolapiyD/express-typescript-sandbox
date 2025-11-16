import { Request, Response } from 'express';

export const homeController = (req: Request, res: Response) => {
  res.status(201).json({
    message: 'Express + TypeScript Home Controller',
    env: process.env.NODE_ENV,
  });
};
