import { Router } from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
} from '../controllers/users.controller';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.post('/', createUser);

export default router;
