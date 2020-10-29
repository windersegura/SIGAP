import { BarrioController } from '../controller/BarrioController';
import {Router} from 'express';
import { checkJwt } from '../middlewares/jwt';
import { checkRole } from '../middlewares/role';


const router= Router();

router.get('/', BarrioController.listAllBarrio);



export default router
