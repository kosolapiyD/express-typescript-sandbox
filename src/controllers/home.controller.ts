import { Request, Response } from 'express';

export const homeController = (req: Request, res: Response) => {
  res.cookie('express-cookie-id', process.env.COOKIE_SECRET, {
    httpOnly: true,
    secure: false,
    maxAge: 10000, // 10 seconds
    // maxAge: 3600000, // 1 hour
    signed: true, // if true requires a secret in cookieParser
  });

  res.status(201).json({
    message: 'Express + TypeScript Home Controller',
    env: process.env.NODE_ENV,
  });
};
