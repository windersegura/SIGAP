import {Router} from 'express';

import auth from './auth';
import user from './user';
import propietario from './propietario'

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/propietarios', propietario);

export default routes;