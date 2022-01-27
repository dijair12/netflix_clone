import {Router} from 'express';
import usersController from '../controller/usersController';

const routerUser = Router();

routerUser.post('/login', usersController.getUser);

export default routerUser;

