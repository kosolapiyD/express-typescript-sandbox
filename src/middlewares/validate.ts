import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { AppError } from '../utils/app-error';

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // Extract only messages
    const errorMessages = errors.array().map((err) => err.msg);

    // Use AppError for consistent handling
    return next(new AppError(400, errorMessages.join(', ')));
  }

  next();
};
