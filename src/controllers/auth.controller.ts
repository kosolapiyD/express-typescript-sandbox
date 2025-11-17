import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app-error';

export const loginDemo = (req: Request, res: Response, next: NextFunction) => {
  const { userId, isAdmin } = req.body;

  if (!userId) {
    return next(new AppError(400, 'userId is required'));
  }

  // Store in session
  req.session.userId = Number(userId);
  req.session.isAdmin = Boolean(isAdmin);

  res.json({
    message: 'Logged in (session created)',
    session: {
      userId: req.session.userId,
      isAdmin: req.session.isAdmin,
    },
  });
};

export const me = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.userId) {
    return next(new AppError(401, 'Not logged in'));
  }

  res.json({
    userId: req.session.userId,
    isAdmin: req.session.isAdmin || false,
  });
};

export const visitCount = (req: Request, res: Response) => {
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views += 1;
  }

  res.json({
    message: 'Hello!',
    views: req.session.views,
  });
};
