import { ViviendaController } from '../controller/ViviendaController';
import { Router } from 'express';
import { checkJwt } from '../middlewares/jwt';
import { checkRole } from '../middlewares/role';

const router = Router()

//List all viviendas
router.get('/', ViviendaController.listAllViviendas);

//get a vivienda
router.get('/:id', ViviendaController.getOneVivienda);

//create vivienda
router.post('/', ViviendaController.createVivienda);

//update vivienda
router.put('/:id', ViviendaController.updateVivienda);

//delete vivienda
router.delete('/:id', ViviendaController.deleteVivienda);



export default router;
