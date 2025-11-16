import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // If error is our custom AppError → use its status
  if (err instanceof AppError) {
    return res.status(err.status).json({
      success: false,
      message: err.message,
    });
  }

  // Fallback for unexpected errors
  console.error('Unexpected Error:', err);

  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
};
