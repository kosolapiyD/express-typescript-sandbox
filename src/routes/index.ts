import { Router } from 'express';
import usersRouter from './users.route';
import homeRouter from './home.route';
import productsRouter from './products.route';
import authRouter from './auth.route';

const router = Router();

router.use('/', homeRouter);
router.use('/api/users', usersRouter);
router.use('/api/products', productsRouter);
router.use('/api/auth', authRouter);

export default router;
