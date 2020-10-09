import { UserController } from '../controller/UserController';
import { Router } from 'express';
import { User } from '../entity/User';

const router = Router();

// Get all users

router.get('/', UserController.listUsers);

//Get one user
router.get('/:id', UserController.getById);

//Create a new user

router.post('/', UserController.newUSer);

//Edit user
router.put('/:id', UserController.editUser);

//Delete user
router.delete('/:id', UserController.deleteUser);

export default router;
