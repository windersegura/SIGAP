import { PropietarioController } from '../controller/PropietarioController';
import { Router } from 'express';
import { Propietario } from '../entity/Propietario';
import { checkJwt } from '../middlewares/jwt';
import { checkRole } from '../middlewares/role';

const router = Router();

// Get all propietario

router.get('/', [checkJwt], PropietarioController.listAllPropietario);

//Get one propietario
router.get('/:id', [checkJwt], PropietarioController.getById);

//Create a new propietario

router.post('/', [checkJwt],checkRole(['admin']), PropietarioController.createPropietario);

//Edit propietario
router.put('/:id', [checkJwt], PropietarioController.updatePropietario);

//Delete propietario
router.delete('/:id', [checkJwt], PropietarioController.deletePropietario);

export default router;