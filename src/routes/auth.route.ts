import { Router } from 'express';
import { loginDemo, me, visitCount } from '../controllers/auth.controller';

const router = Router();

router.post('/login', loginDemo);
router.get('/me', me);
router.get('/visit', visitCount);

export default router;
