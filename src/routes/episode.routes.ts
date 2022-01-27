import {Router} from 'express';
import episodesController from '../controller/episodesController';

const routerEpisode = Router();

routerEpisode.get('/:season', episodesController.getEpisodeOfSeason);

export default routerEpisode;