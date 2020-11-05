import {Router} from 'express';

import auth from './auth';
import user from './user';
import propietario from './propietario';
import vivienda from './vivienda';
import barrio from './barrio';
import pago from './pago'

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/propietarios', propietario);
routes.use('/viviendas', vivienda);
routes.use('/barrios', barrio);
routes.use('/pagos', pago );

export default routes;