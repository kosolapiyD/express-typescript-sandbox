import { Router } from 'express';
import usersRouter from './users.route';
import homeRouter from './home.route';

const router = Router();

router.use('/', homeRouter);
router.use('/api/users', usersRouter);

export default router;
