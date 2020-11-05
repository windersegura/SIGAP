import { PagoController } from '../controller/PagoController';
import {Router} from 'express';
import { checkJwt } from '../middlewares/jwt';
import { checkRole } from '../middlewares/role';

const router = Router();

router.get('/', PagoController.listAllPagos);

router.post('/', PagoController.createPago);



export default router;