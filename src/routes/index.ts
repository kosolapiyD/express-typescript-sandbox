import { Router } from 'express';
import usersRouter from './users.route';
import homeRouter from './home.route';
import productsRouter from './products.route';

const router = Router();

router.use('/', homeRouter);
router.use('/api/users', usersRouter);

router.use('/api/products', productsRouter);

export default router;
