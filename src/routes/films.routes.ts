import {Router} from 'express';
import filmsController from '../controller/filmsController';

const routerFilm = Router();

routerFilm.get('/home', filmsController.dataOfHome);

routerFilm.get('/', filmsController.getAllFilms);

routerFilm.get('/:id', filmsController.getOneFilmSearch);

routerFilm.post('/', filmsController.createFilm);

routerFilm.put('/:id', filmsController.updateFilm);

routerFilm.delete('/:id', filmsController.deleteFilm);

export default routerFilm;