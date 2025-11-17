import { NextFunction, Request, Response } from 'express';
import { AppError } from '../utils/app-error';

import { products } from '../utils/constants';

export const getAllProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // NOT signed cookie check example
  //   if (req.cookies['express-cookie-id'] !== process.env.COOKIE_SECRET) {
  //     return next(new AppError(401, 'Need a valid cookie to see products'));
  //   }

  // Signed cookie check example
  if (req.signedCookies['express-cookie-id'] !== process.env.COOKIE_SECRET) {
    console.log('Invalid signed cookie');
    return next(
      new AppError(401, 'Need a valid signed cookie to see products')
    );
  }

  const filter = req.query.filter as string | undefined;
  const limitParam = req.query.limit as string | undefined;

  let result = [...products];

  if (filter) {
    const search = filter.toLowerCase();
    result = result.filter((p) => p.name.toLowerCase().includes(search));
  }

  if (limitParam) {
    const limit = parseInt(limitParam, 10);
    if (!isNaN(limit)) {
      result = result.slice(0, limit);
    }
  }

  if (result.length === 0) {
    return next(new AppError(404, 'No products found'));
  }

  res.json(result);
};

export const getProductById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    return next(new AppError(404, 'Product not found'));
  }
  res.json(product);
};
