import { UserController } from '../controller/UserController';
import { Router } from 'express';
import { User } from '../entity/User';
import { checkJwt } from '../middlewares/jwt';
import { checkRole } from '../middlewares/role';


const router = Router();

// Get all users

router.get('/', [checkJwt], UserController.listUsers);

//Get one user
router.get('/:id', [checkJwt], UserController.getById);

//Create a new user

router.post('/',[checkJwt, checkRole(['admin'])], UserController.newUSer);

//Edit user
router.put('/:id', [checkJwt], UserController.editUser);

//Delete user
router.delete('/:id', [checkJwt], UserController.deleteUser);

export default router;
