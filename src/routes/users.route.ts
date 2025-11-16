import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from '../controllers/users.controller';
import { validate } from '../middlewares/validate';
import {
  createUserValidator,
  updateUserValidator,
  userIdValidator,
  usersQueryValidator,
} from '../validations/user-validations';

const router = Router();

router.get('/', usersQueryValidator, validate, getAllUsers);
router.get('/:id', userIdValidator, validate, getUserById);
router.put('/:id', updateUserValidator, validate, updateUser);
router.post('/', createUserValidator, validate, createUser);
router.delete('/:id', userIdValidator, validate, deleteUser);

export default router;
