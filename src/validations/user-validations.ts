import { body, param } from 'express-validator';

export const createUserValidator = [
  body('name')
    .isString()
    .withMessage('Name must be a string')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters'),

  body('email').isEmail().withMessage('Invalid email address'),

  body('age')
    .optional()
    .isInt({ gt: 0 })
    .withMessage('Age must be a positive number'),
];

export const userIdValidator = [
  param('id')
    .isInt({ gt: 0 })
    .withMessage('User ID must be a positive integer'),
];

export const updateUserValidator = [
  param('id')
    .isInt({ gt: 0 })
    .withMessage('User ID must be a positive integer'),

  body('name')
    .optional()
    .isString()
    .withMessage('Name must be a string')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters'),

  body('email').optional().isEmail().withMessage('Invalid email address'),
  body('age')
    .optional()
    .isInt({ gt: 0 })
    .withMessage('Age must be a positive number'),

  body('password')
    .isString()
    .withMessage('Password must be a string')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 characters'),
];
